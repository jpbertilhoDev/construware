import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

interface WhatsAppWebConfig {
  sessionName: string;
  puppeteerOptions?: any;
}

export class WhatsAppWebManager {
  private client: Client;
  private isReady: boolean = false;

  constructor(config: WhatsAppWebConfig) {
    this.client = new Client({
      authStrategy: new LocalAuth({
        clientId: config.sessionName
      }),
      puppeteer: {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--single-process',
          '--disable-gpu'
        ],
        ...config.puppeteerOptions
      }
    });

    this.setupEventHandlers();
  }

  private setupEventHandlers() {
    // QR Code para autenticação
    this.client.on('qr', (qr) => {
      console.log('📱 QR Code gerado! Escaneie com seu WhatsApp:');
      qrcode.generate(qr, { small: true });
    });

    // Cliente pronto
    this.client.on('ready', () => {
      console.log('✅ WhatsApp Web conectado!');
      this.isReady = true;
    });

    // Desconectado
    this.client.on('disconnected', (reason) => {
      console.log('❌ WhatsApp desconectado:', reason);
      this.isReady = false;
    });

    // Mensagens recebidas
    this.client.on('message', async (message) => {
      console.log(`📩 ${message.from}: ${message.body}`);
      
      // Aqui você pode processar mensagens recebidas
      // await this.processIncomingMessage(message);
    });

    // Erro de autenticação
    this.client.on('auth_failure', (msg) => {
      console.error('❌ Falha na autenticação:', msg);
    });
  }

  async initialize(): Promise<void> {
    try {
      console.log('🚀 Inicializando WhatsApp Web...');
      await this.client.initialize();
    } catch (error) {
      console.error('❌ Erro ao inicializar WhatsApp Web:', error);
      throw error;
    }
  }

  async sendMessage(number: string, message: string): Promise<boolean> {
    if (!this.isReady) {
      throw new Error('WhatsApp Web não está conectado');
    }

    try {
      // Formatar número para WhatsApp ID
      const chatId = this.formatPhoneNumber(number);
      
      await this.client.sendMessage(chatId, message);
      console.log(`✅ Mensagem enviada para ${number}`);
      return true;
    } catch (error) {
      console.error(`❌ Erro ao enviar mensagem para ${number}:`, error);
      return false;
    }
  }

  async sendMediaMessage(
    number: string, 
    mediaPath: string, 
    caption?: string
  ): Promise<boolean> {
    if (!this.isReady) {
      throw new Error('WhatsApp Web não está conectado');
    }

    try {
      const chatId = this.formatPhoneNumber(number);
      const media = MessageMedia.fromFilePath(mediaPath);
      
      await this.client.sendMessage(chatId, media, { caption });
      console.log(`✅ Mídia enviada para ${number}`);
      return true;
    } catch (error) {
      console.error(`❌ Erro ao enviar mídia para ${number}:`, error);
      return false;
    }
  }

  private formatPhoneNumber(number: string): string {
    // Remove espaços e caracteres especiais
    let cleanNumber = number.replace(/\D/g, '');
    
    // Adiciona código do país se necessário
    if (cleanNumber.startsWith('9') && cleanNumber.length === 9) {
      cleanNumber = '351' + cleanNumber; // Portugal
    }
    
    return cleanNumber + '@c.us';
  }

  async getConnectionStatus(): Promise<{
    connected: boolean;
    batteryLevel?: number;
    pushname?: string;
  }> {
    if (!this.isReady) {
      return { connected: false };
    }

    try {
      const state = await this.client.getState();
      const info = this.client.info;
      
      return {
        connected: state === 'CONNECTED',
        batteryLevel: info?.battery,
        pushname: info?.pushname
      };
    } catch (error) {
      return { connected: false };
    }
  }

  async destroy(): Promise<void> {
    try {
      await this.client.destroy();
      console.log('🔄 WhatsApp Web desconectado');
    } catch (error) {
      console.error('❌ Erro ao desconectar:', error);
    }
  }
}

// Função para integrar com o sistema Construware
export async function sendViaWhatsAppWeb(userData: any): Promise<boolean> {
  const whatsappWeb = new WhatsAppWebManager({
    sessionName: 'construware-session'
  });

  try {
    // Inicializar se necessário
    if (!whatsappWeb['isReady']) {
      await whatsappWeb.initialize();
      // Aguardar conexão (até 30 segundos)
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Timeout na conexão'));
        }, 30000);

        const checkReady = setInterval(() => {
          if (whatsappWeb['isReady']) {
            clearInterval(checkReady);
            clearTimeout(timeout);
            resolve(true);
          }
        }, 1000);
      });
    }

    // Gerar mensagem personalizada
    const message = generateWhatsAppMessage(userData);
    
    // Enviar mensagem
    return await whatsappWeb.sendMessage(userData.whatsapp, message);
    
  } catch (error) {
    console.error('❌ Erro no WhatsApp Web:', error);
    return false;
  }
}

function generateWhatsAppMessage(userData: any): string {
  const roi = calculateROI(userData.businessType, userData.employees);
  
  return `🤖 *Relatório da IA Consultora - Construware*

👋 Olá ${userData.name}!

📊 *Análise do Seu Negócio:*
• Setor: ${userData.businessType}
• Funcionários: ${userData.employees}
• Desafio Principal: ${userData.challenge}

💰 *Potencial de Economia:*
€${roi.toLocaleString()}/ano com sistema otimizado

🎯 *Recomendação Personalizada:*
${getRecommendation(userData.businessType, userData.employees)}

📞 *Próximos Passos:*
1. Demonstração gratuita disponível
2. Análise detalhada dos seus processos
3. Orçamento personalizado sem compromisso

🚀 *Agende sua demonstração:*
https://construware.pt/demonstracao

---
*Mensagem enviada automaticamente pela IA Consultora*
*Responda 'STOP' para não receber mais mensagens*`;
}

function calculateROI(businessType: string, employees: string): number {
  const employeeCount = parseInt(employees.split('-')[0]) || 1;
  const multiplier = employeeCount * 1000;
  
  switch (businessType) {
    case 'Construction': return multiplier * 12;
    case 'Restaurant': return multiplier * 8;
    case 'Consulting': return multiplier * 15;
    case 'E-commerce': return multiplier * 10;
    default: return multiplier * 8;
  }
}

function getRecommendation(businessType: string, employees: string): string {
  const recommendations = {
    'Construction': 'Sistema de gestão de projetos + CRM integrado',
    'Restaurant': 'POS + gestão de inventário + delivery',
    'Consulting': 'CRM + time tracking + faturação automática',
    'E-commerce': 'ERP + gestão de stock + análises',
    'Services': 'Agendamento + CRM + faturação'
  };
  
  return recommendations[businessType] || 'Sistema integrado personalizado';
} 