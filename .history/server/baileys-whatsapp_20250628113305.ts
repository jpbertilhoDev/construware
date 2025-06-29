import makeWASocket, { 
  DisconnectReason, 
  useMultiFileAuthState, 
  WAMessageContent,
  MessageType,
  delay
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import qrcode from 'qrcode-terminal';
import fs from 'fs';
import path from 'path';

interface WhatsAppMessage {
  to: string;
  message: string;
  mediaPath?: string;
  mediaType?: 'image' | 'document';
  delay?: number;
}

class BaileysWhatsAppService {
  private sock: any = null;
  private authPath = './baileys_auth_info';
  private isConnected = false;
  private messageQueue: WhatsAppMessage[] = [];
  private isProcessingQueue = false;
  
  // Configurações anti-ban
  private readonly MIN_DELAY = 3000; // 3 segundos mínimo
  private readonly MAX_DELAY = 8000; // 8 segundos máximo
  private readonly MESSAGES_PER_MINUTE = 10; // Máximo 10 mensagens por minuto
  private lastMessageTime = 0;
  private messageCount = 0;
  private resetTime = Date.now();

  constructor() {
    this.initializeWhatsApp();
  }

  private async initializeWhatsApp() {
    try {
      console.log('🚀 Inicializando Baileys WhatsApp...');
      
      // Usar autenticação multi-arquivo
      const { state, saveCreds } = await useMultiFileAuthState(this.authPath);
      
      this.sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: { level: 'silent' }, // Reduzir logs para produção
        browser: ['Construware', 'Chrome', '109.0.0.0'],
        markOnlineOnConnect: false, // Não aparecer online automaticamente
      });

      // Handlers de conexão
      this.sock.ev.on('connection.update', this.handleConnectionUpdate.bind(this));
      this.sock.ev.on('creds.update', saveCreds);
      this.sock.ev.on('messages.upsert', this.handleIncomingMessages.bind(this));

      console.log('📱 Baileys WhatsApp inicializado com sucesso!');

    } catch (error) {
      console.error('❌ Erro ao inicializar Baileys:', error);
    }
  }

  private async handleConnectionUpdate(update: any) {
    const { connection, lastDisconnect, qr } = update;
    
    if (qr) {
      console.log('📱 QR Code gerado! Escaneie com WhatsApp:');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
      
      console.log('🔄 Conexão fechada. Reconectando:', shouldReconnect);
      
      if (shouldReconnect) {
        await delay(5000); // Aguardar 5s antes de reconectar
        this.initializeWhatsApp();
      }
      
      this.isConnected = false;
    } else if (connection === 'open') {
      console.log('✅ WhatsApp conectado com sucesso!');
      this.isConnected = true;
      
      // Processar mensagens em fila
      this.processMessageQueue();
    }
  }

  private async handleIncomingMessages(m: any) {
    // Monitorar mensagens recebidas para análise (opcional)
    console.log('📨 Nova mensagem recebida (monitoramento)');
  }

  // Sistema de rate limiting inteligente
  private async rateLimitCheck(): Promise<void> {
    const now = Date.now();
    
    // Reset contador a cada minuto
    if (now - this.resetTime > 60000) {
      this.messageCount = 0;
      this.resetTime = now;
    }

    // Verificar limite de mensagens por minuto
    if (this.messageCount >= this.MESSAGES_PER_MINUTE) {
      const waitTime = 60000 - (now - this.resetTime);
      console.log(`⏳ Rate limit atingido. Aguardando ${waitTime}ms`);
      await delay(waitTime);
      this.messageCount = 0;
      this.resetTime = Date.now();
    }

    // Delay inteligente entre mensagens
    const timeSinceLastMessage = now - this.lastMessageTime;
    const minDelay = Math.random() * (this.MAX_DELAY - this.MIN_DELAY) + this.MIN_DELAY;
    
    if (timeSinceLastMessage < minDelay) {
      const waitTime = minDelay - timeSinceLastMessage;
      console.log(`⏱️  Aguardando ${waitTime}ms para próxima mensagem`);
      await delay(waitTime);
    }

    this.messageCount++;
    this.lastMessageTime = Date.now();
  }

  // Enviar mensagem com estratégias anti-ban
  public async sendMessage(phoneNumber: string, message: string, mediaPath?: string): Promise<boolean> {
    try {
      if (!this.isConnected) {
        console.log('📱 WhatsApp não conectado. Adicionando à fila...');
        this.messageQueue.push({ to: phoneNumber, message, mediaPath });
        return false;
      }

      // Aplicar rate limiting
      await this.rateLimitCheck();

      // Formatar número
      const formattedNumber = this.formatPhoneNumber(phoneNumber);
      
      console.log(`📤 Enviando mensagem para ${formattedNumber}`);

      if (mediaPath && fs.existsSync(mediaPath)) {
        // Enviar com mídia (PDF)
        await this.sock.sendMessage(formattedNumber, {
          document: fs.readFileSync(mediaPath),
          fileName: path.basename(mediaPath),
          caption: message,
          mimetype: 'application/pdf'
        });
      } else {
        // Enviar apenas texto
        await this.sock.sendMessage(formattedNumber, {
          text: message
        });
      }

      console.log('✅ Mensagem enviada com sucesso!');
      return true;

    } catch (error) {
      console.error('❌ Erro ao enviar mensagem:', error);
      
      // Adicionar à fila para retry
      this.messageQueue.push({ to: phoneNumber, message, mediaPath });
      return false;
    }
  }

  // Enviar mensagem com PDF anexo
  public async sendMessageWithPDF(phoneNumber: string, message: string, pdfBuffer: Buffer, fileName: string): Promise<boolean> {
    try {
      if (!this.isConnected) {
        console.log('📱 WhatsApp não conectado. PDF será enviado quando conectar...');
        return false;
      }

      await this.rateLimitCheck();

      const formattedNumber = this.formatPhoneNumber(phoneNumber);
      
      console.log(`📤 Enviando mensagem com PDF para ${formattedNumber}`);

      await this.sock.sendMessage(formattedNumber, {
        document: pdfBuffer,
        fileName: fileName,
        caption: message,
        mimetype: 'application/pdf'
      });

      console.log('✅ Mensagem com PDF enviada!');
      return true;

    } catch (error) {
      console.error('❌ Erro ao enviar mensagem com PDF:', error);
      return false;
    }
  }

  // Processar fila de mensagens
  private async processMessageQueue() {
    if (this.isProcessingQueue || this.messageQueue.length === 0) return;
    
    this.isProcessingQueue = true;
    console.log(`🔄 Processando ${this.messageQueue.length} mensagens em fila...`);

    while (this.messageQueue.length > 0) {
      const { to, message, mediaPath } = this.messageQueue.shift()!;
      
      try {
        await this.sendMessage(to, message, mediaPath);
        await delay(2000); // Delay adicional entre mensagens da fila
      } catch (error) {
        console.error('❌ Erro ao processar mensagem da fila:', error);
      }
    }

    this.isProcessingQueue = false;
    console.log('✅ Fila de mensagens processada!');
  }

  // Formatar número de telefone
  private formatPhoneNumber(phone: string): string {
    // Remover caracteres especiais
    let cleaned = phone.replace(/[^0-9]/g, '');
    
    // Adicionar código do país se necessário
    if (cleaned.startsWith('9') && cleaned.length === 9) {
      cleaned = '351' + cleaned; // Portugal
    }
    
    return cleaned + '@s.whatsapp.net';
  }

  // Verificar status da conexão
  public isWhatsAppConnected(): boolean {
    return this.isConnected;
  }

  // Obter informações do usuário conectado
  public async getUserInfo() {
    if (!this.isConnected) return null;
    
    try {
      const info = this.sock.user;
      return {
        id: info?.id,
        name: info?.name,
        phone: info?.id?.split(':')[0]
      };
    } catch (error) {
      console.error('❌ Erro ao obter informações do usuário:', error);
      return null;
    }
  }

  // Desconectar WhatsApp
  public async disconnect() {
    if (this.sock) {
      await this.sock.logout();
      this.isConnected = false;
      console.log('🔌 WhatsApp desconectado');
    }
  }
}

// Instância singleton
export const whatsappService = new BaileysWhatsAppService();

export default BaileysWhatsAppService; 