import { Boom } from "@hapi/boom";
import fs from "fs";

class WhatsAppBaileys {
  private sock: any = null;
  private isConnected = false;
  private isConnecting = false;
  private baileys: any = null;
  private rateLimitData = {
    lastMessageTime: 0,
    messagesInMinute: 0,
    minuteStartTime: 0,
    MAX_MESSAGES_PER_MINUTE: 10,
    MIN_DELAY_BETWEEN_MESSAGES: 3000,
  };

  constructor() {
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
      console.log("🚀 Inicializando Baileys WhatsApp seguindo documentação oficial...");

      // Dynamic import para ES modules
      this.baileys = await import("baileys");
      console.log("🔍 Baileys object keys:", Object.keys(this.baileys));

      // Identificar a função correta
      let makeWASocket = this.baileys.default;
      
      if (typeof makeWASocket !== 'function') {
        makeWASocket = this.baileys.makeWASocket;
      }
      
      if (typeof makeWASocket !== 'function') {
        // Procurar em todas as propriedades
        for (const [key, value] of Object.entries(this.baileys)) {
          if (typeof value === 'function' && key.toLowerCase().includes('socket')) {
            console.log(`🔍 Encontrada função: ${key}`);
            makeWASocket = value;
            break;
          }
        }
      }

      if (typeof makeWASocket !== 'function') {
        throw new Error(`makeWASocket não encontrado. Propriedades disponíveis: ${Object.keys(this.baileys).join(', ')}`);
      }

      console.log("✅ Função makeWASocket encontrada!");

      // Configurar autenticação se disponível
      let authState = {};
      let saveCreds = () => {};

      if (this.baileys.useMultiFileAuthState) {
        const authResult = await this.baileys.useMultiFileAuthState("./baileys_auth");
        authState = authResult.state;
        saveCreds = authResult.saveCreds;
        console.log("✅ Autenticação configurada");
      }

      // Configurar versão se disponível
      let version, isLatest;
      if (this.baileys.fetchLatestBaileysVersion) {
        const versionResult = await this.baileys.fetchLatestBaileysVersion();
        version = versionResult.version;
        isLatest = versionResult.isLatest;
        console.log(`📦 Baileys version: ${version}, latest: ${isLatest}`);
      }

      // Criar socket
      const config: any = {
        printQRInTerminal: true,
        logger: { level: "silent" },
        markOnlineOnConnect: false,
      };

      if (authState && Object.keys(authState).length > 0) {
        config.auth = authState;
      }

      if (version) {
        config.version = version;
      }

      if (this.baileys.Browsers?.ubuntu) {
        config.browser = this.baileys.Browsers.ubuntu("Construware Business Bot");
      } else {
        config.browser = ["Construware", "Chrome", "109.0.0.0"];
      }

      this.sock = makeWASocket(config);

      // Event handlers
      this.sock.ev.on("connection.update", this.handleConnectionUpdate.bind(this));
      this.sock.ev.on("messages.upsert", this.handleMessages.bind(this));
      
      if (saveCreds) {
        this.sock.ev.on("creds.update", saveCreds);
      }

      console.log("✅ Baileys configurado com sucesso!");
      
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

      let shouldReconnect = true;
      
      if (this.baileys?.DisconnectReason && lastDisconnect?.error) {
        shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== this.baileys.DisconnectReason.loggedOut;
      }

      console.log("🔌 Conexão fechada:", lastDisconnect?.error, "Reconectar:", shouldReconnect);

      if (shouldReconnect) {
        console.log("🔄 Tentando reconectar em 5 segundos...");
        if (this.baileys?.delay) {
          await this.baileys.delay(5000);
        } else {
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
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
        console.log("📥 Mensagem recebida:", JSON.stringify(message, undefined, 2));
      }
    }
  }

  private async rateLimitControl() {
    const now = Date.now();
    
    if (now - this.rateLimitData.minuteStartTime > 60000) {
      this.rateLimitData.messagesInMinute = 0;
      this.rateLimitData.minuteStartTime = now;
    }

    if (this.rateLimitData.messagesInMinute >= this.rateLimitData.MAX_MESSAGES_PER_MINUTE) {
      const waitTime = 60000 - (now - this.rateLimitData.minuteStartTime);
      console.log(`⏳ Limite de mensagens atingido. Aguardando ${Math.round(waitTime / 1000)}s`);
      
      if (this.baileys?.delay) {
        await this.baileys.delay(waitTime);
      } else {
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
      
      this.rateLimitData.messagesInMinute = 0;
      this.rateLimitData.minuteStartTime = Date.now();
    }

    const timeSinceLastMessage = now - this.rateLimitData.lastMessageTime;
    if (timeSinceLastMessage < this.rateLimitData.MIN_DELAY_BETWEEN_MESSAGES) {
      const waitTime = this.rateLimitData.MIN_DELAY_BETWEEN_MESSAGES - timeSinceLastMessage;
      const randomDelay = Math.random() * 2000;
      const totalWait = waitTime + randomDelay;
      
      console.log(`⏳ Anti-spam delay: ${Math.round(totalWait / 1000)}s`);
      
      if (this.baileys?.delay) {
        await this.baileys.delay(totalWait);
      } else {
        await new Promise(resolve => setTimeout(resolve, totalWait));
      }
    }

    this.rateLimitData.lastMessageTime = Date.now();
    this.rateLimitData.messagesInMinute++;
  }

  private formatPhoneNumber(phone: string): string {
    let cleaned = phone.replace(/[^0-9]/g, "");

    if (cleaned.startsWith("9") && cleaned.length === 9) {
      cleaned = "351" + cleaned;
    }

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
      
      // Verificar se o número existe (se a função estiver disponível)
      if (this.sock.onWhatsApp) {
        const [result] = await this.sock.onWhatsApp(formattedNumber);
        if (!result?.exists) {
          console.log(`❌ Número ${phoneNumber} não existe no WhatsApp`);
          return false;
        }
      }

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
      const messageSuccess = await this.sendMessage(phoneNumber, message);
      if (!messageSuccess) return false;

      // Delay antes dos PDFs
      if (this.baileys?.delay) {
        await this.baileys.delay(2000);
      } else {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

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
        if (this.baileys?.delay) {
          await this.baileys.delay(3000);
        } else {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
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

export const whatsappBaileys = new WhatsAppBaileys();
export default WhatsAppBaileys;
