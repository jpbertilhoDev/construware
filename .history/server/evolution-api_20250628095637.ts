// Evolution API v2 Integration - Construware IA
// Baseado na documentação oficial: https://doc.evolution-api.com/v2/pt/get-started/introduction

import axios from "axios";
import { Express } from "express";

interface EvolutionConfig {
  baseURL: string;
  globalApiKey: string;
  instanceName: string;
  webhookUrl: string;
}

interface ClienteData {
  nome: string;
  telefone: string;
  setor?: string;
  funcionarios?: string;
  desafio?: string;
  sistemaAtual?: string;
  economia?: number;
  recomendacao?: string;
  email?: string;
}

interface MensagemResult {
  sucesso: boolean;
  messageId?: string;
  numeroFormatado?: string;
  erro?: string;
  metodo: "evolution" | "fallback";
  timestamp: string;
  custo: string;
  whatsappUrl?: string;
}

export class EvolutionAPIManager {
  private config: EvolutionConfig;
  private headers: Record<string, string>;
  private isConnected: boolean = false;
  private lastConnectionCheck: number = 0;

  constructor() {
    this.config = {
      baseURL: process.env.EVOLUTION_API_URL || "http://localhost:8080",
      globalApiKey: process.env.EVOLUTION_GLOBAL_API_KEY || "",
      instanceName: process.env.EVOLUTION_INSTANCE_NAME || "construware_ia",
      webhookUrl:
        process.env.EVOLUTION_WEBHOOK_URL ||
        "http://localhost:5000/api/webhook/evolution",
    };

    this.headers = {
      "Content-Type": "application/json",
      apikey: this.config.globalApiKey,
    };

    console.log("🚀 Evolution API v2 Manager inicializado");
    console.log("📚 Documentação: https://doc.evolution-api.com/v2/pt/");
  }

  // 1. CRIAR/VERIFICAR INSTÂNCIA
  async setupInstance(): Promise<boolean> {
    try {
      console.log("📝 Configurando instância Evolution API v2...");

      // Verificar se instância já existe
      const existingInstance = await this.checkInstanceExists();
      if (existingInstance) {
        console.log("✅ Instância já existe, verificando status...");
        return await this.checkConnection();
      }

      // Criar nova instância
      const payload = {
        instanceName: this.config.instanceName,
        integration: "WHATSAPP-BAILEYS",
        webhook_by_events: true,
        webhook_base64: false,
        qrcode: true,
        number: "",
        token: "",
        webhook_url: this.config.webhookUrl,
        webhook_events: [
          "APPLICATION_STARTUP",
          "QRCODE_UPDATED",
          "MESSAGES_UPSERT",
          "CONNECTION_UPDATE",
        ],
      };

      const response = await axios.post(
        `${this.config.baseURL}/instance/create`,
        payload,
        {
          headers: this.headers,
          timeout: 10000,
        }
      );

      if (response.data) {
        console.log("✅ Instância criada com sucesso!");
        return true;
      }

      return false;
    } catch (error: any) {
      console.error(
        "❌ Erro ao configurar instância:",
        error.response?.data || error.message
      );
      return false;
    }
  }

  // 2. VERIFICAR SE INSTÂNCIA EXISTE
  private async checkInstanceExists(): Promise<boolean> {
    try {
      const response = await axios.get(
        `${this.config.baseURL}/instance/fetchInstances`,
        {
          headers: this.headers,
          timeout: 5000,
        }
      );

      const instances = Array.isArray(response.data) ? response.data : [];
      return instances.some(
        (inst: any) => inst.instance?.instanceName === this.config.instanceName
      );
    } catch (error) {
      return false;
    }
  }

  // 3. VERIFICAR CONEXÃO COM CACHE
  async checkConnection(): Promise<boolean> {
    const now = Date.now();

    // Cache de 30 segundos para evitar muitas chamadas
    if (now - this.lastConnectionCheck < 30000 && this.isConnected) {
      return this.isConnected;
    }

    try {
      const response = await axios.get(
        `${this.config.baseURL}/instance/connectionState/${this.config.instanceName}`,
        {
          headers: this.headers,
          timeout: 5000,
        }
      );

      const status = response.data?.instance;
      this.isConnected = status?.state === "open";
      this.lastConnectionCheck = now;

      if (this.isConnected) {
        console.log(
          `✅ WhatsApp conectado - ${status.profileName || "Perfil"}`
        );
      }

      return this.isConnected;
    } catch (error) {
      this.isConnected = false;
      this.lastConnectionCheck = now;
      return false;
    }
  }

  // 4. OBTER QR CODE
  async getQRCode(): Promise<string | null> {
    try {
      const response = await axios.get(
        `${this.config.baseURL}/instance/fetchInstances`,
        {
          headers: this.headers,
          params: { instanceName: this.config.instanceName },
        }
      );

      const instances = Array.isArray(response.data) ? response.data : [];
      const instance = instances.find(
        (inst: any) => inst.instance?.instanceName === this.config.instanceName
      );

      if (instance?.instance?.qrcode?.code) {
        console.log("📱 QR Code disponível para escaneamento");
        return instance.instance.qrcode.code;
      }

      return null;
    } catch (error) {
      console.error("❌ Erro ao obter QR Code:", error);
      return null;
    }
  }

  // 5. FORMATAR NÚMERO PORTUGUÊS
  private formatPhoneNumber(phone: string): string {
    // Remove espaços e caracteres especiais
    let cleanPhone = phone.replace(/\s+/g, "").replace(/[^\d+]/g, "");

    // Formatos para Evolution API v2
    if (cleanPhone.startsWith("+351")) {
      return cleanPhone.substring(1); // Remove + para v2
    } else if (cleanPhone.startsWith("351") && cleanPhone.length === 12) {
      return cleanPhone;
    } else if (cleanPhone.startsWith("9") && cleanPhone.length === 9) {
      return "351" + cleanPhone;
    } else if (cleanPhone.startsWith("2") && cleanPhone.length === 9) {
      return "351" + cleanPhone; // Fixo português
    }

    throw new Error(`Número português inválido: ${phone}`);
  }

  // 6. GERAR MENSAGEM PERSONALIZADA PARA CONSTRUWARE
  private generatePersonalizedMessage(cliente: ClienteData): string {
    const data = new Date().toLocaleDateString("pt-PT");
    const hora = new Date().toLocaleTimeString("pt-PT", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Dicas específicas por setor
    const dicas = this.getSectorTips(cliente.setor || "");

    return `🤖 *CONSTRUWARE - RELATÓRIO IA PERSONALIZADO*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👋 Olá *${cliente.nome}*!

Obrigado por usar a nossa IA Consultora. Com base na análise dos dados da sua empresa, preparamos este relatório personalizado:

📊 *PERFIL DA SUA EMPRESA:*
🏢 Setor: *${cliente.setor || "Não especificado"}*
👥 Funcionários: *${cliente.funcionarios || "Não especificado"}*
⚠️ Principal Desafio: *${cliente.desafio || "Não especificado"}*
💻 Sistema Atual: *${cliente.sistemaAtual || "Não especificado"}*

💰 *POTENCIAL DE ECONOMIA ANUAL:*
*€${cliente.economia?.toLocaleString() || "0"}* com automação e otimização

🎯 *SOLUÇÃO RECOMENDADA:*
${cliente.recomendacao || "Sistema personalizado baseado nas suas necessidades"}

${dicas}

📋 *PRÓXIMOS PASSOS PARA IMPLEMENTAÇÃO:*

1️⃣ *Demonstração Gratuita (30min)*
   → Sistema adaptado às suas necessidades
   → Funcionalidades específicas para ${
     cliente.setor?.toLowerCase() || "seu setor"
   }

2️⃣ *Análise Técnica Detalhada*
   → Avaliação completa da infraestrutura
   → Plano de migração personalizado

3️⃣ *Proposta Comercial Personalizada*
   → Orçamento adequado ao seu budget
   → Opções de financiamento disponíveis

4️⃣ *Implementação & Formação*
   → Suporte completo durante todo o processo
   → Formação da equipa incluída

🚀 *AGENDAR CONSULTA GRATUITA:*
📞 WhatsApp: +351 963 901 577
📧 Email: contato@construware.pt
🌐 Website: www.construware.pt

⚡ *RESPOSTA GARANTIDA EM 24H*

${
  cliente.email
    ? `📧 *Relatório técnico completo* também enviado para: ${cliente.email}`
    : ""
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 *CONSTRUWARE* - Transformando empresas através da tecnologia

📅 ${data} às ${hora} | 🤖 Mensagem gerada pela nossa IA

*Obrigado por confiar na nossa tecnologia!* 🎉✨`;
  }

  // 7. DICAS ESPECÍFICAS POR SETOR
  private getSectorTips(setor: string): string {
    const tips: Record<string, string> = {
      Construção:
        "🏗️ *Dicas específicas para Construção:*\n• Gestão de obras em tempo real\n• Controlo de materiais e equipamentos\n• Orçamentos automáticos\n• Relatórios de progresso",
      Consultoria:
        "💼 *Dicas específicas para Consultoria:*\n• CRM avançado para clientes\n• Gestão de projetos complexos\n• Time tracking automático\n• Faturação inteligente",
      "E-commerce":
        "🛒 *Dicas específicas para E-commerce:*\n• Gestão de stock automática\n• Analytics de vendas avançados\n• Marketing automation\n• Integração multi-canal",
      Restaurante:
        "🍽️ *Dicas específicas para Restauração:*\n• Sistema POS integrado\n• Gestão de delivery\n• Controlo de ingredientes\n• Reservas automáticas",
      Serviços:
        "⚙️ *Dicas específicas para Serviços:*\n• Agendamento inteligente\n• Gestão de técnicos\n• Histórico de clientes\n• Faturação automática",
    };

    return (
      tips[setor] ||
      "🎯 *Soluções personalizadas:*\n• Análise específica do seu setor\n• Funcionalidades sob medida\n• Integração com sistemas existentes\n• Suporte especializado"
    );
  }

  // 8. ENVIAR MENSAGEM VIA EVOLUTION API
  async sendMessage(cliente: ClienteData): Promise<MensagemResult> {
    const timestamp = new Date().toISOString();

    try {
      // Verificar conexão primeiro
      const connected = await this.checkConnection();
      if (!connected) {
        throw new Error("WhatsApp não conectado via Evolution API");
      }

      // Formatar número
      const numeroFormatado = this.formatPhoneNumber(cliente.telefone);

      // Gerar mensagem personalizada
      const mensagem = this.generatePersonalizedMessage(cliente);

      console.log(
        `📤 Enviando via Evolution API para: ${cliente.telefone} (${numeroFormatado})`
      );

      // Enviar via Evolution API v2
      const payload = {
        number: numeroFormatado,
        text: mensagem,
        delay: 1000,
      };

      const response = await axios.post(
        `${this.config.baseURL}/message/sendText/${this.config.instanceName}`,
        payload,
        {
          headers: this.headers,
          timeout: 15000,
        }
      );

      if (response.data) {
        console.log("✅ Mensagem enviada via Evolution API - GRATUITO!");

        return {
          sucesso: true,
          messageId: response.data.key?.id || "evolution_" + Date.now(),
          numeroFormatado: `+${numeroFormatado}`,
          metodo: "evolution",
          timestamp,
          custo: "€0.00 - GRATUITO! 🆓",
        };
      } else {
        throw new Error("Resposta inválida da Evolution API");
      }
    } catch (error: any) {
      console.error(
        "❌ Erro Evolution API:",
        error.response?.data || error.message
      );

      return {
        sucesso: false,
        erro: error.response?.data?.message || error.message,
        metodo: "evolution",
        timestamp,
        custo: "€0.00",
      };
    }
  }

  // 9. SISTEMA HÍBRIDO: Evolution API + Fallback wa.me
  async sendMessageHybrid(cliente: ClienteData): Promise<MensagemResult> {
    console.log(`🔄 Tentando envio híbrido para ${cliente.nome}...`);

    // 1. Tentar Evolution API primeiro
    const evolutionResult = await this.sendMessage(cliente);

    if (evolutionResult.sucesso) {
      console.log("✅ Sucesso via Evolution API!");
      return evolutionResult;
    }

    // 2. Fallback para wa.me link
    console.log("🔄 Evolution API falhou, usando fallback wa.me...");

    try {
      const numeroFormatado = this.formatPhoneNumber(cliente.telefone);
      const mensagem = this.generatePersonalizedMessage(cliente);

      // Gerar link wa.me
      const encodedMessage = encodeURIComponent(mensagem);
      const whatsappUrl = `https://wa.me/${numeroFormatado}?text=${encodedMessage}`;

      console.log("📱 Fallback wa.me preparado com sucesso");

      return {
        sucesso: true,
        numeroFormatado: `+${numeroFormatado}`,
        metodo: "fallback",
        timestamp: new Date().toISOString(),
        custo: "€0.00 - Manual via wa.me",
        whatsappUrl,
      } as MensagemResult & { whatsappUrl: string };
    } catch (error: any) {
      return {
        sucesso: false,
        erro: `Ambos métodos falharam: ${error.message}`,
        metodo: "fallback",
        timestamp: new Date().toISOString(),
        custo: "€0.00",
      };
    }
  }

  // 10. NOTIFICAR EQUIPA
  async notifyTeam(
    cliente: ClienteData,
    resultado: MensagemResult
  ): Promise<void> {
    const teamNotification = `🤖 *LEAD WHATSAPP - IA CONSULTORA EVOLUTION API*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 *NOVO CLIENTE PROCESSADO:*
👤 Nome: *${cliente.nome}*
📞 WhatsApp: *${resultado.numeroFormatado || cliente.telefone}*
🏢 Setor: *${cliente.setor || "Não informado"}*
👥 Funcionários: *${cliente.funcionarios || "Não informado"}*
⚠️ Desafio: *${cliente.desafio || "Não informado"}*
💻 Sistema Atual: *${cliente.sistemaAtual || "Não informado"}*

💰 *ECONOMIA ESTIMADA:* €${cliente.economia?.toLocaleString() || "0"}/ano

📡 *MÉTODO DE ENVIO:* ${
      resultado.metodo === "evolution"
        ? "✅ Evolution API (Automático)"
        : "📱 wa.me (Fallback)"
    }
📊 *STATUS:* ${resultado.sucesso ? "✅ Enviado" : "❌ Falhou"}
🕐 *TIMESTAMP:* ${new Date(resultado.timestamp).toLocaleString("pt-PT")}
💰 *CUSTO:* ${resultado.custo}

${resultado.messageId ? `📨 *Message ID:* ${resultado.messageId}` : ""}

✅ *AÇÕES IMEDIATAS:*
1. Cliente recebeu relatório completo
2. Contactar em 24h para demonstração
3. Preparar proposta personalizada
4. Agendar reunião comercial

🚨 *LEAD QUALIFICADO - SEGUIMENTO PRIORITÁRIO!*`;

    try {
      // Tentar via Evolution API primeiro
      if (this.isConnected) {
        await axios.post(
          `${this.config.baseURL}/message/sendText/${this.config.instanceName}`,
          {
            number: "351963901577", // Número da equipa
            text: teamNotification,
            delay: 500,
          },
          { headers: this.headers, timeout: 10000 }
        );
        console.log("✅ Equipa notificada via Evolution API");
      } else {
        // Fallback wa.me para equipa
        const encodedNotification = encodeURIComponent(teamNotification);
        const teamWhatsApp = `https://wa.me/351963901577?text=${encodedNotification}`;
        console.log("📱 Notificação da equipa preparada via wa.me");
        // Nota: O frontend pode abrir este link automaticamente
      }
    } catch (error) {
      console.error("❌ Erro ao notificar equipa:", error);
    }
  }

  // 11. CONFIGURAR WEBHOOK
  setupWebhook(app: Express): void {
    app.post("/api/webhook/evolution", (req, res) => {
      const { event, data } = req.body;

      console.log(`📨 Webhook Evolution API: ${event}`);

      switch (event) {
        case "qrcode.updated":
          console.log("📱 QR Code atualizado!");
          break;

        case "connection.update":
          console.log(`🔗 Conexão atualizada: ${data?.state}`);
          this.isConnected = data?.state === "open";
          break;

        case "messages.upsert":
          if (data?.type === "notify") {
            const mensagem = data.messages?.[0];
            if (mensagem && !mensagem.key?.fromMe) {
              const from = mensagem.key?.remoteJid?.replace(
                "@s.whatsapp.net",
                ""
              );
              const text =
                mensagem.message?.conversation ||
                mensagem.message?.extendedTextMessage?.text ||
                "";

              if (text && from) {
                console.log(`📩 Nova mensagem de +${from}: ${text}`);
                this.processAutoResponse(from, text);
              }
            }
          }
          break;
      }

      res.status(200).json({ success: true });
    });

    console.log(
      "🔗 Webhook Evolution API configurado em /api/webhook/evolution"
    );
  }

  // 12. RESPOSTA AUTOMÁTICA INTELIGENTE
  private async processAutoResponse(
    numeroCliente: string,
    mensagem: string
  ): Promise<void> {
    const mensagemLower = mensagem.toLowerCase();
    let resposta = "";

    if (mensagemLower.includes("sim") || mensagemLower.includes("confirmo")) {
      resposta =
        "✅ Confirmação recebida! Obrigado.\n\n👨‍💼 A nossa equipa comercial entrará em contacto nas próximas 24h para agendar a demonstração personalizada.\n\n📞 Contacto direto: +351 963 901 577";
    } else if (mensagemLower.includes("não") || mensagemLower.includes("nao")) {
      resposta =
        "📝 Entendido. Sem problemas!\n\n🕐 Quando estiver pronto, pode sempre contactar-nos:\n📞 WhatsApp: +351 963 901 577\n📧 Email: contato@construware.pt";
    } else if (
      mensagemLower.includes("quero") ||
      mensagemLower.includes("interessado")
    ) {
      resposta =
        "🎉 Excelente! Ficamos muito contentes com o seu interesse.\n\n📋 A nossa equipa irá preparar uma demonstração personalizada para o seu caso específico.\n\n⏰ Entraremos em contacto hoje ainda para agendar a melhor hora para si.";
    } else if (
      mensagemLower.includes("preço") ||
      mensagemLower.includes("custo")
    ) {
      resposta =
        "💰 Sobre preços e investimento:\n\n🎯 Cada empresa é única, por isso criamos propostas personalizadas baseadas nas suas necessidades específicas.\n\n💼 Na demonstração, mostraremos o ROI calculado para o seu caso e apresentaremos as opções de investimento.\n\n📞 Contacte-nos: +351 963 901 577";
    } else {
      resposta =
        "📩 Mensagem recebida!\n\n🤖 Esta é uma resposta automática do nosso sistema.\n\n👨‍💼 A nossa equipa analisará a sua mensagem e responderá pessoalmente em breve.\n\n⏰ Horário de atendimento: 9h-18h (dias úteis)\n📞 Urgente: +351 963 901 577";
    }

    // Aguardar 2 segundos e responder
    setTimeout(async () => {
      try {
        if (this.isConnected) {
          await axios.post(
            `${this.config.baseURL}/message/sendText/${this.config.instanceName}`,
            {
              number: numeroCliente,
              text: resposta,
              delay: 1000,
            },
            { headers: this.headers }
          );
          console.log(`✅ Resposta automática enviada para +${numeroCliente}`);
        }
      } catch (error) {
        console.error("❌ Erro ao enviar resposta automática:", error);
      }
    }, 2000);
  }

  // 13. STATUS PÚBLICO
  async getPublicStatus(): Promise<{
    connected: boolean;
    qrCode?: string;
    profileName?: string;
  }> {
    const connected = await this.checkConnection();

    if (connected) {
      return { connected: true };
    } else {
      const qrCode = await this.getQRCode();
      return { connected: false, qrCode: qrCode || undefined };
    }
  }
}

// Singleton instance
export const evolutionAPI = new EvolutionAPIManager();
