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

  async sendMessage(
    number: string,
    message: string,
    options?: any
  ): Promise<any> {
    try {
      if (!this.isConnected) {
        throw new Error("Evolution API não está conectada");
      }

      console.log(`📤 Enviando mensagem via Evolution API para: ${number}`);

      const payload = {
        number: this.formatPhoneNumber(number),
        textMessage: {
          text: message,
        },
      };

      const response = await axios.post(
        `${this.config.baseURL}/message/sendText/${this.config.instanceName}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: this.config.globalApiKey,
          },
          timeout: 15000,
        }
      );

      if (response.data && response.data.key) {
        console.log("✅ Mensagem enviada com sucesso via Evolution API");

        // Se tem userData, enviar PDF automaticamente
        if (options?.userData) {
          await this.sendDocumentPDF(number, options.userData);
        }

        return {
          success: true,
          messageId: response.data.key.id,
          data: response.data,
        };
      } else {
        throw new Error("Resposta inválida da Evolution API");
      }
    } catch (error) {
      console.error(
        "❌ Erro ao enviar mensagem via Evolution API:",
        error.message
      );

      if (error.code === "ECONNREFUSED") {
        this.isConnected = false;
        console.log("🔄 Evolution API desconectada");
      }

      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendDocumentPDF(number: string, userData: any): Promise<any> {
    try {
      console.log(`📄 Enviando PDF profissional para: ${number}`);

      // Gerar PDF personalizado
      const pdfResponse = await this.generateClientPDF(userData);

      if (!pdfResponse.success) {
        throw new Error("Falha ao gerar PDF");
      }

      // Enviar PDF via Evolution API
      const mediaPayload = {
        number: this.formatPhoneNumber(number),
        mediaMessage: {
          mediatype: "document",
          media: pdfResponse.pdfBase64,
          fileName: `Construware-Relatorio-${userData.name || "Cliente"}.pdf`,
          caption: `📋 *RELATÓRIO TÉCNICO CONSTRUWARE*\n\n🎯 Relatório personalizado para ${userData.name}\n📊 Análise completa da sua empresa\n💰 Projeções de ROI detalhadas\n\n📞 Para questões: +351 963 901 577`,
        },
      };

      const response = await axios.post(
        `${this.config.baseURL}/message/sendMedia/${this.config.instanceName}`,
        mediaPayload,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: this.config.globalApiKey,
          },
          timeout: 30000, // Timeout maior para upload de PDF
        }
      );

      if (response.data && response.data.key) {
        console.log("✅ PDF enviado com sucesso via Evolution API");

        // Enviar portfolio da empresa também
        setTimeout(() => {
          this.sendCompanyPortfolio(number);
        }, 5000);

        return {
          success: true,
          messageId: response.data.key.id,
          data: response.data,
        };
      } else {
        throw new Error("Falha no envio do PDF");
      }
    } catch (error) {
      console.error("❌ Erro ao enviar PDF:", error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async sendCompanyPortfolio(number: string): Promise<any> {
    try {
      console.log(`📊 Enviando portfolio da empresa para: ${number}`);

      // Gerar PDF do portfolio
      const portfolioResponse = await this.generateCompanyPortfolio();

      if (!portfolioResponse.success) {
        throw new Error("Falha ao gerar portfolio");
      }

      const mediaPayload = {
        number: this.formatPhoneNumber(number),
        mediaMessage: {
          mediatype: "document",
          media: portfolioResponse.pdfBase64,
          fileName: "Construware-Portfolio-Empresarial.pdf",
          caption: `🏆 *PORTFOLIO CONSTRUWARE*\n\n📋 Cases de sucesso no seu setor\n📊 Testemunhos de clientes\n💼 Serviços e investimentos\n🎯 Próximos passos\n\n*Documento confidencial - Uso empresarial*\n\n📞 Contacto direto: +351 963 901 577`,
        },
      };

      const response = await axios.post(
        `${this.config.baseURL}/message/sendMedia/${this.config.instanceName}`,
        mediaPayload,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: this.config.globalApiKey,
          },
          timeout: 30000,
        }
      );

      if (response.data && response.data.key) {
        console.log("✅ Portfolio enviado com sucesso");
        return {
          success: true,
          messageId: response.data.key.id,
          data: response.data,
        };
      } else {
        throw new Error("Falha no envio do portfolio");
      }
    } catch (error) {
      console.error("❌ Erro ao enviar portfolio:", error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async generateClientPDF(userData: any): Promise<any> {
    try {
      const pdfHTML = this.generatePersonalizedReportHTML(userData);
      const pdfBase64 = Buffer.from(pdfHTML, "utf-8").toString("base64");

      return {
        success: true,
        pdfBase64: pdfBase64,
      };
    } catch (error) {
      console.error("Erro ao gerar PDF do cliente:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  async generateCompanyPortfolio(): Promise<any> {
    try {
      const portfolioHTML = this.generateCompanyPortfolioHTML();
      const pdfBase64 = Buffer.from(portfolioHTML, "utf-8").toString("base64");

      return {
        success: true,
        pdfBase64: pdfBase64,
      };
    } catch (error) {
      console.error("Erro ao gerar portfolio:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  private generatePersonalizedReportHTML(userData: any): string {
    const savings = this.calculateROI(
      userData.businessType,
      userData.employees
    );
    const currentDate = new Date().toLocaleDateString("pt-PT");

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relatório Personalizado - ${userData.name}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #1f2937; }
        .header { background: linear-gradient(135deg, #2563eb, #1e40af); color: white; padding: 25px; margin: -20px -20px 30px -20px; border-radius: 0 0 15px 15px; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 8px; }
        .subtitle { font-size: 16px; margin-top: 10px; opacity: 0.9; }
        .client-banner { background: rgba(59, 130, 246, 0.1); padding: 20px; margin: 25px 0; border-radius: 10px; border-left: 4px solid #2563eb; }
        .section { margin-bottom: 35px; }
        .section h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px; font-size: 18px; }
        .client-info { background: #f8fafc; padding: 25px; margin: 20px 0; border-radius: 10px; border: 1px solid #e2e8f0; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { padding: 10px 0; }
        .info-label { font-weight: bold; color: #475569; margin-bottom: 5px; }
        .info-value { color: #1e293b; font-size: 15px; }
        .savings-highlight { background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(16, 185, 129, 0.1)); padding: 30px; margin: 25px 0; text-align: center; border-radius: 15px; border: 2px solid #10b981; }
        .savings-amount { font-size: 42px; font-weight: bold; color: #059669; margin: 10px 0; }
        .savings-subtitle { color: #6b7280; font-size: 14px; }
        .recommendation { background: #f1f5f9; padding: 25px; border-left: 4px solid #2563eb; border-radius: 0 10px 10px 0; margin: 20px 0; }
        .timeline { list-style: none; padding: 0; margin: 20px 0; }
        .timeline li { background: rgba(37, 99, 235, 0.05); padding: 15px; margin: 10px 0; position: relative; padding-left: 50px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.2); }
        .timeline li:before { content: counter(step-counter); counter-increment: step-counter; position: absolute; left: 15px; top: 50%; transform: translateY(-50%); background: #2563eb; color: white; width: 25px; height: 25px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
        .timeline { counter-reset: step-counter; }
        .contact-section { background: linear-gradient(135deg, #2563eb, #1e40af); color: white; padding: 30px; margin: 25px -20px -20px -20px; border-radius: 15px 15px 0 0; }
        .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 20px; }
        .contact-item { display: flex; align-items: center; margin: 8px 0; }
        .contact-icon { margin-right: 10px; font-size: 18px; }
        .footer-cta { text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.3); font-size: 16px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🏆 CONSTRUWARE</div>
        <div class="subtitle">RELATÓRIO PERSONALIZADO - ${userData.name?.toUpperCase()}</div>
        <div style="float: right; margin-top: -60px; font-size: 12px; opacity: 0.8;">${currentDate}</div>
    </div>

    <div class="client-banner">
        <h1 style="margin: 0; color: #2563eb; font-size: 24px;">✅ ANÁLISE IA CONCLUÍDA</h1>
        <p style="margin: 8px 0 0 0; font-size: 16px; color: #64748b;">Relatório empresarial gerado pela nossa IA especializada</p>
    </div>

    <div class="section">
        <h2>📋 PERFIL EMPRESARIAL</h2>
        <div class="client-info">
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">👤 Cliente</div>
                    <div class="info-value">${userData.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">🏢 Empresa</div>
                    <div class="info-value">${
                      userData.company || userData.name
                    }</div>
                </div>
                <div class="info-item">
                    <div class="info-label">📊 Setor</div>
                    <div class="info-value">${userData.businessType}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">👥 Funcionários</div>
                    <div class="info-value">${userData.employees}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">⚠️ Principal Desafio</div>
                    <div class="info-value">${userData.mainChallenge}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">💻 Sistema Atual</div>
                    <div class="info-value">${userData.currentSystem}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="savings-highlight">
        <h2 style="color: #059669; margin-top: 0; font-size: 20px;">💰 POTENCIAL DE ECONOMIA</h2>
        <div class="savings-amount">€${savings.toLocaleString()}</div>
        <div class="savings-subtitle">Economia anual estimada com automação e otimização</div>
        <div style="margin-top: 15px; font-size: 14px; color: #059669;">
            ✓ Baseado na análise específica do seu perfil empresarial
        </div>
    </div>

    <div class="section">
        <h2>🎯 SOLUÇÃO RECOMENDADA</h2>
        <div class="recommendation">
            <h3 style="color: #2563eb; margin-top: 0; font-size: 16px;">🤖 RECOMENDAÇÃO IA PERSONALIZADA:</h3>
            <p style="font-size: 15px; line-height: 1.6;">${this.generateRecommendation(
              userData
            )}</p>
            <div style="background: rgba(37, 99, 235, 0.1); padding: 15px; border-radius: 8px; margin-top: 15px;">
                <strong style="color: #1e40af;">💡 VANTAGENS ESPECÍFICAS:</strong>
                <ul style="margin: 10px 0; color: #475569;">
                    <li>Redução de 40-60% no tempo de processos manuais</li>
                    <li>Eliminação de 80% dos erros humanos</li>
                    <li>Aumento de 25-35% na produtividade</li>
                    <li>ROI positivo em 6-12 meses</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>📅 CRONOGRAMA DE IMPLEMENTAÇÃO</h2>
        <ol class="timeline">
            <li><strong>Semana 1-2:</strong> Análise detalhada e planeamento técnico</li>
            <li><strong>Semana 3-6:</strong> Desenvolvimento e configuração personalizada</li>
            <li><strong>Semana 7-8:</strong> Testes, validação e formação da equipa</li>
            <li><strong>Semana 9:</strong> Go-live, suporte intensivo e otimizações</li>
        </ol>
    </div>

    <div class="contact-section">
        <h2 style="color: white; margin-top: 0; font-size: 22px;">🚀 CONTACTOS & PRÓXIMOS PASSOS</h2>
        <div class="contact-grid">
            <div>
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <span><strong>WhatsApp Business:</strong><br>+351 963 901 577</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <span><strong>Email Comercial:</strong><br>comercial@construware.pt</span>
                </div>
            </div>
            <div>
                <div class="contact-item">
                    <span class="contact-icon">🌐</span>
                    <span><strong>Website:</strong><br>www.construware.pt</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">⏰</span>
                    <span><strong>Horário:</strong><br>Seg-Sex, 09h00-18h00</span>
                </div>
            </div>
        </div>
        <div class="footer-cta">
            ⚡ RESPOSTA GARANTIDA EM 24 HORAS ⚡
        </div>
    </div>
</body>
</html>`;
  }

  private generateCompanyPortfolioHTML(): string {
    const currentDate = new Date().toLocaleDateString("pt-PT");

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Portfolio Construware - Transforming Business Through Technology</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 20px; color: #1f2937; background: #fafafa; }
        .header { background: linear-gradient(135deg, #2563eb, #1e40af, #1d4ed8); color: white; padding: 30px; margin: -20px -20px 35px -20px; border-radius: 0 0 20px 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
        .tagline { font-size: 16px; opacity: 0.9; font-style: italic; }
        .section { margin-bottom: 40px; background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .section h2 { color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px; font-size: 22px; margin-top: 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin: 25px 0; }
        .stat-card { background: linear-gradient(135deg, #f8fafc, #f1f5f9); padding: 25px; text-align: center; border-radius: 12px; border: 2px solid #e2e8f0; transition: transform 0.3s; }
        .stat-card:hover { transform: translateY(-5px); }
        .stat-number { font-size: 32px; font-weight: bold; color: #2563eb; margin-bottom: 8px; }
        .stat-label { font-size: 14px; color: #64748b; font-weight: 500; }
        .project-card { background: linear-gradient(135deg, #f9fafb, #ffffff); padding: 25px; margin: 20px 0; border-left: 5px solid #2563eb; border-radius: 0 12px 12px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        .project-sector { background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; padding: 5px 12px; font-size: 11px; font-weight: bold; display: inline-block; margin-bottom: 12px; border-radius: 20px; text-transform: uppercase; }
        .project-title { font-weight: bold; color: #1f2937; margin-bottom: 12px; font-size: 16px; }
        .project-description { color: #64748b; margin-bottom: 15px; line-height: 1.6; }
        .project-results { color: #059669; font-weight: bold; margin-top: 12px; padding: 10px; background: rgba(5, 150, 105, 0.1); border-radius: 8px; }
        .service-card { background: white; border: 2px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 15px 0; transition: all 0.3s; }
        .service-card:hover { border-color: #2563eb; box-shadow: 0 8px 20px rgba(37, 99, 235, 0.1); }
        .service-price { font-size: 18px; font-weight: bold; color: #2563eb; float: right; }
        .service-features { list-style: none; padding: 0; margin-top: 15px; }
        .service-features li { padding: 5px 0; color: #64748b; }
        .service-features li:before { content: "✓"; color: #059669; font-weight: bold; margin-right: 8px; }
        .cta-section { background: linear-gradient(135deg, #2563eb, #1e40af); color: white; padding: 35px; margin: 25px -20px -20px -20px; border-radius: 20px 20px 0 0; text-align: center; }
        .contact-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin-top: 25px; }
        .contact-item { background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; }
        .contact-icon { font-size: 24px; margin-bottom: 8px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🏆 CONSTRUWARE</div>
        <div class="tagline">Transforming Business Through Technology</div>
        <div style="float: right; margin-top: -70px; font-size: 12px; opacity: 0.8;">Portfolio Empresarial ${currentDate}</div>
    </div>

    <div class="section">
        <h2>🏢 QUEM SOMOS</h2>
        <p style="font-size: 16px; line-height: 1.8; color: #374151;">
            A <strong>Construware</strong> é uma empresa portuguesa especializada em soluções tecnológicas inovadoras para empresas de todos os setores. Com mais de 10 anos de experiência no mercado, ajudamos organizações a transformar os seus processos através da automação e otimização digital.
        </p>
        <p style="font-size: 16px; line-height: 1.8; color: #374151; margin-top: 15px;">
            <strong>Nossa missão</strong> é democratizar o acesso à tecnologia avançada, oferecendo soluções personalizadas que geram resultados mensuráveis e sustentáveis para empresas portuguesas.
        </p>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">500+</div>
                <div class="stat-label">Empresas Transformadas</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">€2.5M+</div>
                <div class="stat-label">Economia Gerada para Clientes</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">98%</div>
                <div class="stat-label">Taxa de Satisfação</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Suporte Técnico</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>📊 CASOS DE SUCESSO</h2>
        
        <div class="project-card">
            <div class="project-sector">CONSTRUÇÃO CIVIL</div>
            <div class="project-title">Sistema ERP Completo - Empresa de Construção</div>
            <div class="project-description">
                Implementação de sistema ERP especializado para gestão completa de obras, materiais, equipamentos e recursos humanos. Dashboards em tempo real para acompanhamento de progresso e custos.
            </div>
            <div class="project-results">
                📈 RESULTADOS: Redução de 40% no tempo de gestão | €150.000 economia anual | ROI em 8 meses
            </div>
        </div>

        <div class="project-card">
            <div class="project-sector">E-COMMERCE</div>
            <div class="project-title">Plataforma E-commerce Avançada - Loja Online</div>
            <div class="project-description">
                Desenvolvimento de plataforma e-commerce completa com gestão de stock automática, análises avançadas, marketing automation e integração multi-canal para maximizar vendas.
            </div>
            <div class="project-results">
                📈 RESULTADOS: Aumento de 200% nas vendas | €80.000 receita adicional | 150% mais conversões
            </div>
        </div>

        <div class="project-card">
            <div class="project-sector">CONSULTORIA</div>
            <div class="project-title">CRM Empresarial - Consultoria Estratégica</div>
            <div class="project-description">
                Plataforma CRM avançada com gestão de projetos, time tracking automático, faturação inteligente e dashboards de performance para equipas de consultoria.
            </div>
            <div class="project-results">
                📈 RESULTADOS: Melhoria de 60% na retenção de clientes | €120.000 economia anual | 45% mais produtividade
            </div>
        </div>
    </div>

    <div class="section">
        <h2>💼 SERVIÇOS E INVESTIMENTO</h2>
        
        <div class="service-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="margin: 0; color: #1f2937;">🤖 Consultoria IA Especializada</h3>
                    <p style="color: #64748b; margin: 5px 0;">Análise completa com nossa IA especializada</p>
                </div>
                <div class="service-price">GRATUITO</div>
            </div>
            <ul class="service-features">
                <li>Análise detalhada de processos empresariais</li>
                <li>Recomendações personalizadas por setor</li>
                <li>Cálculo de ROI específico da empresa</li>
                <li>Relatório técnico completo</li>
            </ul>
        </div>

        <div class="service-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="margin: 0; color: #1f2937;">💼 Sistema Empresarial Básico</h3>
                    <p style="color: #64748b; margin: 5px 0;">Solução completa para empresas até 20 funcionários</p>
                </div>
                <div class="service-price">A partir de €2.500</div>
            </div>
            <ul class="service-features">
                <li>Sistema personalizado para suas necessidades</li>
                <li>Formação completa da equipa incluída</li>
                <li>Suporte técnico por 6 meses</li>
                <li>Atualizações e melhorias incluídas</li>
            </ul>
        </div>

        <div class="service-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="margin: 0; color: #1f2937;">🏢 Sistema Empresarial Avançado</h3>
                    <p style="color: #64748b; margin: 5px 0;">Solução empresarial para médias e grandes empresas</p>
                </div>
                <div class="service-price">A partir de €8.500</div>
            </div>
            <ul class="service-features">
                <li>ERP completo com todos os módulos</li>
                <li>Integrações avançadas com sistemas existentes</li>
                <li>Suporte técnico 24/7 premium</li>
                <li>Consultoria estratégica contínua</li>
            </ul>
        </div>
    </div>

    <div class="cta-section">
        <h2 style="color: white; margin-top: 0; font-size: 26px;">🚀 PRONTO PARA TRANSFORMAR SUA EMPRESA?</h2>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 25px;">
            Nossa equipa está pronta para analisar as suas necessidades e apresentar a solução ideal
        </p>
        
        <div class="contact-grid">
            <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div><strong>WhatsApp Business</strong><br>+351 963 901 577</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div><strong>Email Comercial</strong><br>comercial@construware.pt</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🌐</div>
                <div><strong>Website</strong><br>www.construware.pt</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div><strong>Localização</strong><br>Lisboa, Portugal</div>
            </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.3); font-size: 18px; font-weight: bold;">
            ⚡ RESPOSTA GARANTIDA EM 24 HORAS ⚡
        </div>
    </div>
</body>
</html>`;
  }

  private calculateROI(businessType: string, employees: string): number {
    const employeeCount = parseInt(employees?.split("-")[0]) || 1;
    const multiplier = employeeCount * 1000;

    const multipliers = {
      Construção: 12,
      Consultoria: 15,
      "E-commerce": 10,
      Restaurante: 8,
      Serviços: 8,
      Outro: 8,
    };

    return multiplier * (multipliers[businessType] || 8);
  }

  private generateRecommendation(userData: any): string {
    const recommendations = {
      Construção:
        "Sistema ERP especializado para construção com gestão de obras, materiais, equipamentos e relatórios de progresso em tempo real. Inclui módulos de orçamentação automática, controlo de custos e dashboards executivos para tomada de decisão estratégica.",
      Consultoria:
        "Plataforma CRM avançada com gestão de projetos, time tracking automático, faturação inteligente e dashboards de performance. Sistema otimizado para equipas de consultoria com automação de follow-ups e relatórios de produtividade.",
      "E-commerce":
        "Solução e-commerce completa com gestão de stock automática, analytics avançados, marketing automation e integração multi-canal. Inclui sistema de recomendações IA e otimização de conversões.",
      Restaurante:
        "Sistema POS integrado com gestão de delivery, controlo de ingredientes, reservas automáticas e análises de vendas específicas para restauração. Inclui integração com aplicações de delivery e gestão de mesas.",
      Serviços:
        "Plataforma de gestão de serviços com agendamento inteligente, gestão de técnicos, histórico completo de clientes e faturação automática. Sistema otimizado para empresas de serviços com workflow personalizado.",
      Outro:
        "Sistema personalizado desenvolvido especificamente para as necessidades do seu setor, com funcionalidades sob medida e integração com sistemas existentes. Análise detalhada das suas necessidades específicas.",
    };

    return recommendations[userData.businessType] || recommendations["Outro"];
  }
}

// Singleton instance
export const evolutionAPI = new EvolutionAPIManager();
