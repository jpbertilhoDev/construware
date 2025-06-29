import makeWASocket, { 
  DisconnectReason, 
  useMultiFileAuthState, 
  delay,
  fetchLatestBaileysVersion
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import qrcode from 'qrcode-terminal';
import fs from 'fs';

class BaileysService {
  private sock: any = null;
  private isConnected = false;
  private readonly MIN_DELAY = 3000; // Anti-ban: 3s mínimo
  private lastMessageTime = 0;

  async initialize() {
    try {
      console.log('🚀 Inicializando Baileys WhatsApp...');
      
      const { state, saveCreds } = await useMultiFileAuthState('./baileys_auth');
      const { version, isLatest } = await fetchLatestBaileysVersion();
      
      console.log(`📦 Baileys version: ${version}, latest: ${isLatest}`);
      
      this.sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true,
        logger: { level: 'silent' },
        browser: ['Construware', 'Chrome', '109.0.0.0'],
        markOnlineOnConnect: false,
      });

      this.sock.ev.on('connection.update', this.handleConnection.bind(this));
      this.sock.ev.on('creds.update', saveCreds);

      console.log('✅ Baileys inicializado!');
    } catch (error) {
      console.error('❌ Erro Baileys:', error);
    }
  }

  private async handleConnection(update: any) {
    const { connection, lastDisconnect, qr } = update;
    
    if (qr) {
      console.log('📱 QR Code para WhatsApp:');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
      
      if (shouldReconnect) {
        await delay(5000);
        this.initialize();
      }
      this.isConnected = false;
    } else if (connection === 'open') {
      console.log('✅ WhatsApp conectado!');
      this.isConnected = true;
    }
  }

  private async antiSpamDelay() {
    const now = Date.now();
    const timeSince = now - this.lastMessageTime;
    const randomDelay = Math.random() * 3000 + this.MIN_DELAY; // 3-6s aleatório
    
    if (timeSince < randomDelay) {
      const waitTime = randomDelay - timeSince;
      console.log(`⏳ Anti-spam delay: ${Math.round(waitTime/1000)}s`);
      await delay(waitTime);
    }
    
    this.lastMessageTime = Date.now();
  }

  async sendMessage(phoneNumber: string, message: string): Promise<boolean> {
    try {
      if (!this.isConnected) {
        console.log('❌ WhatsApp não conectado');
        return false;
      }

      await this.antiSpamDelay();

      const formattedNumber = this.formatPhone(phoneNumber);
      
      await this.sock.sendMessage(formattedNumber, { text: message });
      
      console.log('✅ Mensagem enviada:', formattedNumber);
      return true;

    } catch (error) {
      console.error('❌ Erro ao enviar:', error);
      return false;
    }
  }

  async sendPDF(phoneNumber: string, message: string, pdfBuffer: Buffer, fileName: string): Promise<boolean> {
    try {
      if (!this.isConnected) return false;

      await this.antiSpamDelay();

      const formattedNumber = this.formatPhone(phoneNumber);
      
      await this.sock.sendMessage(formattedNumber, {
        document: pdfBuffer,
        fileName: fileName,
        caption: message,
        mimetype: 'application/pdf'
      });

      console.log('✅ PDF enviado:', formattedNumber);
      return true;

    } catch (error) {
      console.error('❌ Erro ao enviar PDF:', error);
      return false;
    }
  }

  private formatPhone(phone: string): string {
    let cleaned = phone.replace(/[^0-9]/g, '');
    
    if (cleaned.startsWith('9') && cleaned.length === 9) {
      cleaned = '351' + cleaned;
    }
    
    return cleaned + '@s.whatsapp.net';
  }

  isConnected() {
    return this.isConnected;
  }
}

export const baileys = new BaileysService();
export default BaileysService;
