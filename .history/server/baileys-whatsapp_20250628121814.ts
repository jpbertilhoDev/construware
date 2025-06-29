import makeWASocket, {
  DisconnectReason,
  useMultiFileAuthState,
  delay,
  fetchLatestBaileysVersion,
  Browsers,
} from "baileys";
import { Boom } from "@hapi/boom";
import fs from "fs";

class WhatsAppBaileys {
  private sock: any = null;
  private isConnected = false;
  private isConnecting = false;
  private rateLimitData = {
    lastMessageTime: 0,
    messagesInMinute: 0,
    minuteStartTime: 0,
    MAX_MESSAGES_PER_MINUTE: 10,
    MIN_DELAY_BETWEEN_MESSAGES: 3000,
  };

  constructor() {
    // Criar diretório de autenticação se não existir
    this.ensureAuthDir();
  }

  private ensureAuthDir() {
    const authDir = "./baileys_auth";
    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { recursive: true });
      console.log("📁 Diretório de autenticação criado");
    }
  }

  async initialize(): Promise<void> {
    if (this.isConnecting) {
      console.log("🔄 Baileys já está conectando...");
      return;
    }

    this.isConnecting = true;

    try {
      console.log(
        "🚀 Inicializando Baileys WhatsApp seguindo documentação oficial..."
      );

      // Configuração de autenticação conforme documentação oficial
      const { state, saveCreds } = await useMultiFileAuthState(
        "./baileys_auth"
      );

      // Obter versão mais recente conforme documentação
      const { version, isLatest } = await fetchLatestBaileysVersion();
      console.log(`📦 Baileys version: ${version}, latest: ${isLatest}`);

      // Criar socket exatamente conforme documentação oficial
      this.sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true,
        logger: { level: "silent" },
        browser: Browsers.ubuntu("Construware Business Bot"),
        markOnlineOnConnect: false, // Para receber notificações no app
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
      });

      // Event handlers conforme documentação
      this.sock.ev.on(
        "connection.update",
        this.handleConnectionUpdate.bind(this)
      );
      this.sock.ev.on("creds.update", saveCreds);
      this.sock.ev.on("messages.upsert", this.handleMessages.bind(this));

      console.log("✅ Baileys configurado conforme documentação oficial!");
    } catch (error) {
      console.error("❌ Erro ao inicializar Baileys:", error);
      this.isConnecting = false;
      throw error;
    }
  }

  private async handleConnectionUpdate(update: any) {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log("📱 QR Code para conectar WhatsApp:");
      console.log("👆 Escaneie com seu celular para conectar");
    }

    if (connection === "close") {
      this.isConnected = false;
      this.isConnecting = false;

      const shouldReconnect =
        (lastDisconnect?.error as Boom)?.output?.statusCode !==
        DisconnectReason.loggedOut;

      console.log(
        "🔌 Conexão fechada:",
        lastDisconnect?.error,
        "Reconectar:",
        shouldReconnect
      );

      if (shouldReconnect) {
        console.log("🔄 Tentando reconectar em 5 segundos...");
        await delay(5000);
        await this.initialize();
      } else {
        console.log("🚪 Desconectado permanentemente (logout)");
      }
    } else if (connection === "open") {
      console.log("✅ WhatsApp conectado com sucesso!");
      this.isConnected = true;
      this.isConnecting = false;
    }
  }

  private handleMessages({ messages }: any) {
    for (const message of messages) {
      if (!message.key.fromMe && message.message) {
        console.log(
          "📥 Mensagem recebida:",
          JSON.stringify(message, undefined, 2)
        );
      }
    }
  }

  private async rateLimitControl() {
    const now = Date.now();

    // Reset contador a cada minuto
    if (now - this.rateLimitData.minuteStartTime > 60000) {
      this.rateLimitData.messagesInMinute = 0;
      this.rateLimitData.minuteStartTime = now;
    }

    // Verificar limite de mensagens por minuto
    if (
      this.rateLimitData.messagesInMinute >=
      this.rateLimitData.MAX_MESSAGES_PER_MINUTE
    ) {
      const waitTime = 60000 - (now - this.rateLimitData.minuteStartTime);
      console.log(
        `⏳ Limite de mensagens atingido. Aguardando ${Math.round(
          waitTime / 1000
        )}s`
      );
      await delay(waitTime);
      this.rateLimitData.messagesInMinute = 0;
      this.rateLimitData.minuteStartTime = Date.now();
    }

    // Delay mínimo entre mensagens
    const timeSinceLastMessage = now - this.rateLimitData.lastMessageTime;
    if (timeSinceLastMessage < this.rateLimitData.MIN_DELAY_BETWEEN_MESSAGES) {
      const waitTime =
        this.rateLimitData.MIN_DELAY_BETWEEN_MESSAGES - timeSinceLastMessage;
      const randomDelay = Math.random() * 2000; // 0-2s adicional aleatório
      const totalWait = waitTime + randomDelay;

      console.log(`⏳ Anti-spam delay: ${Math.round(totalWait / 1000)}s`);
      await delay(totalWait);
    }

    this.rateLimitData.lastMessageTime = Date.now();
    this.rateLimitData.messagesInMinute++;
  }

  private formatPhoneNumber(phone: string): string {
    // Remove todos os caracteres não numéricos
    let cleaned = phone.replace(/[^0-9]/g, "");

    // Se começa com 9 e tem 9 dígitos, adicionar código de Portugal (351)
    if (cleaned.startsWith("9") && cleaned.length === 9) {
      cleaned = "351" + cleaned;
    }

    // Se não tem código de país, assumir Portugal
    if (cleaned.length === 9) {
      cleaned = "351" + cleaned;
    }

    return cleaned + "@s.whatsapp.net";
  }

  async sendMessage(phoneNumber: string, message: string): Promise<boolean> {
    try {
      if (!this.isConnected) {
        console.log("❌ WhatsApp não conectado");
        return false;
      }

      await this.rateLimitControl();

      const formattedNumber = this.formatPhoneNumber(phoneNumber);

      // Verificar se o número existe no WhatsApp conforme documentação
      const [result] = await this.sock.onWhatsApp(formattedNumber);
      if (!result?.exists) {
        console.log(`❌ Número ${phoneNumber} não existe no WhatsApp`);
        return false;
      }

      // Enviar mensagem conforme documentação
      await this.sock.sendMessage(formattedNumber, { text: message });

      console.log(`✅ Mensagem enviada para ${formattedNumber}`);
      return true;
    } catch (error) {
      console.error("❌ Erro ao enviar mensagem:", error);
      return false;
    }
  }

  async sendDocument(
    phoneNumber: string,
    documentBuffer: Buffer,
    fileName: string,
    caption?: string
  ): Promise<boolean> {
    try {
      if (!this.isConnected) {
        console.log("❌ WhatsApp não conectado");
        return false;
      }

      await this.rateLimitControl();

      const formattedNumber = this.formatPhoneNumber(phoneNumber);

      // Enviar documento conforme documentação
      await this.sock.sendMessage(formattedNumber, {
        document: documentBuffer,
        fileName: fileName,
        caption: caption || "",
        mimetype: "application/pdf",
      });

      console.log(`✅ PDF ${fileName} enviado para ${formattedNumber}`);
      return true;
    } catch (error) {
      console.error("❌ Erro ao enviar PDF:", error);
      return false;
    }
  }

  async sendMessageWithPDFs(
    phoneNumber: string,
    message: string,
    pdfs: Array<{ buffer: Buffer; fileName: string }>
  ): Promise<boolean> {
    try {
      // Enviar mensagem primeiro
      const messageSuccess = await this.sendMessage(phoneNumber, message);
      if (!messageSuccess) return false;

      // Aguardar antes de enviar PDFs
      await delay(2000);

      // Enviar cada PDF com delay
      for (const pdf of pdfs) {
        const pdfSuccess = await this.sendDocument(
          phoneNumber,
          pdf.buffer,
          pdf.fileName,
          `📄 ${pdf.fileName}`
        );

        if (!pdfSuccess) {
          console.log(`❌ Falha ao enviar PDF: ${pdf.fileName}`);
        }

        // Delay entre PDFs
        await delay(3000);
      }

      return true;
    } catch (error) {
      console.error("❌ Erro ao enviar mensagem + PDFs:", error);
      return false;
    }
  }

  getConnectionStatus(): boolean {
    return this.isConnected;
  }

  isReady(): boolean {
    return this.isConnected && !this.isConnecting;
  }

  async disconnect() {
    if (this.sock) {
      await this.sock.logout();
      this.isConnected = false;
      this.isConnecting = false;
      console.log("🚪 Baileys desconectado");
    }
  }
}

// Singleton instance
export const whatsappBaileys = new WhatsAppBaileys();
export default WhatsAppBaileys;
