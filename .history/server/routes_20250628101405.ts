import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { evolutionAPI } from "./evolution-api";

export async function registerRoutes(app: Express): Promise<Server> {
  // Evolution API WhatsApp Integration
  app.post("/api/whatsapp/send", async (req, res) => {
    try {
      const {
        nome,
        telefone,
        setor,
        funcionarios,
        desafio,
        sistemaAtual,
        economia,
        recomendacao,
        email,
      } = req.body;

      if (!nome || !telefone) {
        return res.status(400).json({
          success: false,
          error: "Nome e telefone são obrigatórios",
        });
      }

      console.log(`📱 Processando envio WhatsApp para ${nome} (${telefone})`);

      const clienteData = {
        nome,
        telefone,
        setor,
        funcionarios,
        desafio,
        sistemaAtual,
        economia,
        recomendacao,
        email,
      };

      // Usar sistema híbrido: Evolution API + fallback wa.me
      const resultado = await evolutionAPI.sendMessageHybrid(clienteData);

      if (resultado.sucesso) {
        console.log(`✅ WhatsApp enviado com sucesso via ${resultado.metodo}`);

        return res.json({
          success: true,
          metodo: resultado.metodo,
          numeroFormatado: resultado.numeroFormatado,
          timestamp: resultado.timestamp,
          custo: resultado.custo,
          messageId: resultado.messageId,
          whatsappUrl: resultado.whatsappUrl, // Para fallback manual
        });
      } else {
        console.error(`❌ Falha no envio WhatsApp: ${resultado.erro}`);

        return res.status(500).json({
          success: false,
          error: resultado.erro,
          metodo: resultado.metodo,
        });
      }
    } catch (error: any) {
      console.error("❌ Erro no endpoint WhatsApp:", error.message);
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });

  // Status da Evolution API
  app.get("/api/whatsapp/status", async (req, res) => {
    try {
      const status = await evolutionAPI.getPublicStatus();
      res.json(status);
    } catch (error: any) {
      res.status(500).json({
        connected: false,
        error: error.message,
      });
    }
  });

  // Setup Evolution API no WhatsApp
  app.post("/api/whatsapp/setup", async (req, res) => {
    try {
      // Este endpoint pode ser usado para criar a instância se necessário
      const status = await evolutionAPI.getPublicStatus();
      res.json({
        success: true,
        ...status,
        message: "Evolution API configurada. Escaneie o QR Code se necessário.",
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });

  // Configurar webhook da Evolution API
  evolutionAPI.setupWebhook(app);

  // Adicionar rota para gerar PDF da marca
  app.post('/api/generate-brand-pdf', async (req, res) => {
    try {
      const { clientData } = req.body;
      
      // Gerar PDF personalizado
      const pdfBuffer = await generateConstruwarePDF(clientData);
      
      // Configurar headers para download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="Construware-Portfolio-${clientData.name || 'Cliente'}.pdf"`);
      res.setHeader('Content-Length', pdfBuffer.length);
      
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor ao gerar PDF' 
      });
    }
  });

  // Rota para gerar relatório personalizado PDF
  app.post('/api/generate-report-pdf', async (req, res) => {
    try {
      const { userData } = req.body;
      
      // Formatar dados para o PDF
      const clientData = {
        name: userData.name,
        company: userData.company || userData.name,
        businessType: userData.businessType,
        employees: userData.employees,
        mainChallenge: userData.mainChallenge,
        currentSystem: userData.currentSystem,
        estimatedSavings: calculateROI(userData.businessType, userData.employees),
        recommendedSolution: generateRecommendation(userData),
        email: userData.email,
        whatsapp: userData.whatsapp,
        generatedAt: new Date().toLocaleString('pt-PT')
      };
      
      const pdfBuffer = await generatePersonalizedReport(clientData);
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="Relatorio-Personalizado-${userData.name}.pdf"`);
      res.setHeader('Content-Length', pdfBuffer.length);
      
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Erro ao gerar relatório PDF:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor ao gerar relatório' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Função para gerar PDF da marca (simplificada para demonstração)
async function generateConstruwarePDF(clientData: any): Promise<Buffer> {
  // Esta é uma versão simplificada - em produção usaria uma biblioteca como jsPDF ou Puppeteer
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Construware - Portfolio</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #1f2937; }
        .header { background: #2563eb; color: white; padding: 20px; margin: -20px -20px 30px -20px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .tagline { font-size: 12px; opacity: 0.9; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
        .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
        .stat-card { background: #f3f4f6; padding: 20px; text-align: center; }
        .stat-number { font-size: 24px; font-weight: bold; color: #2563eb; }
        .stat-label { font-size: 12px; color: #6b7280; }
        .project-card { background: #f9fafb; padding: 20px; margin: 15px 0; border-left: 4px solid #2563eb; }
        .project-title { font-weight: bold; color: #1f2937; margin-bottom: 10px; }
        .project-sector { background: #2563eb; color: white; padding: 3px 8px; font-size: 10px; display: inline-block; margin-bottom: 10px; }
        .project-results { color: #059669; font-weight: bold; margin-top: 10px; }
        .contact-info { background: #2563eb; color: white; padding: 20px; margin: 20px -20px -20px -20px; }
        .contact-item { margin: 8px 0; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">CONSTRUWARE</div>
        <div class="tagline">Transforming Business Through Technology</div>
        <div style="float: right; margin-top: -40px; font-size: 10px;">${new Date().toLocaleDateString('pt-PT')}</div>
    </div>

    <div class="section">
        <h2>QUEM SOMOS</h2>
        <p>A Construware é uma empresa portuguesa especializada em soluções tecnológicas inovadoras para empresas de todos os setores. Com mais de 10 anos de experiência, ajudamos organizações a transformar os seus processos através da automação e otimização digital.</p>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number">500+</div>
                <div class="stat-label">Empresas Transformadas</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">€2.5M+</div>
                <div class="stat-label">Economia Gerada</div>
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
        <h2>PORTFÓLIO DE PROJETOS</h2>
        
        <div class="project-card">
            <div class="project-sector">CONSTRUÇÃO CIVIL</div>
            <div class="project-title">Sistema ERP - Empresa de Construção</div>
            <p>Gestão completa de obras, materiais e equipamentos com dashboards em tempo real.</p>
            <div class="project-results">RESULTADOS: Redução de 40% no tempo de gestão | €150k economia anual</div>
        </div>

        <div class="project-card">
            <div class="project-sector">E-COMMERCE</div>
            <div class="project-title">Plataforma E-commerce - Loja Online</div>
            <p>Sistema completo de vendas online com gestão de stock e análises avançadas.</p>
            <div class="project-results">RESULTADOS: Aumento de 200% nas vendas | €80k receita adicional</div>
        </div>

        <div class="project-card">
            <div class="project-sector">CONSULTORIA</div>
            <div class="project-title">CRM Avançado - Consultoria</div>
            <p>Gestão de clientes e projetos com automação de follow-ups e relatórios.</p>
            <div class="project-results">RESULTADOS: Melhoria de 60% na retenção | €120k economia anual</div>
        </div>
    </div>

    <div class="section">
        <h2>SERVIÇOS E INVESTIMENTO</h2>
        
        <div class="project-card">
            <div class="project-title">🤖 Consultoria IA - GRATUITO</div>
            <p>Análise completa com nossa IA especializada</p>
            <ul>
                <li>Análise de processos</li>
                <li>Recomendações personalizadas</li>
                <li>ROI estimado</li>
            </ul>
        </div>

        <div class="project-card">
            <div class="project-title">💼 Sistema Básico - A partir de €2.500</div>
            <p>Solução para empresas até 20 funcionários</p>
            <ul>
                <li>Sistema personalizado</li>
                <li>Formação incluída</li>
                <li>Suporte 6 meses</li>
            </ul>
        </div>

        <div class="project-card">
            <div class="project-title">🏢 Sistema Empresarial - A partir de €8.500</div>
            <p>Solução completa para empresas médias/grandes</p>
            <ul>
                <li>ERP completo</li>
                <li>Integrações avançadas</li>
                <li>Suporte 24/7</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>PRÓXIMOS PASSOS</h2>
        <ol>
            <li><strong>Demonstração personalizada gratuita</strong> (30 minutos)</li>
            <li><strong>Análise técnica detalhada</strong> das suas necessidades</li>
            <li><strong>Proposta comercial personalizada</strong></li>
            <li><strong>Implementação com suporte completo</strong></li>
        </ol>
    </div>

    <div class="contact-info">
        <h2 style="color: white; border-bottom: 2px solid white;">CONTACTOS</h2>
        <div class="contact-item">📞 WhatsApp: +351 963 901 577</div>
        <div class="contact-item">📧 Email: contato@construware.pt</div>
        <div class="contact-item">🌐 Website: www.construware.pt</div>
        <div class="contact-item">📍 Morada: Lisboa, Portugal</div>
        <div style="text-align: center; margin-top: 20px; font-weight: bold; font-size: 14px;">
            ⚡ RESPOSTA GARANTIDA EM 24 HORAS ⚡
        </div>
    </div>
</body>
</html>`;

  // Converter HTML para PDF (simulado - em produção usaria Puppeteer)
  return Buffer.from(htmlContent, 'utf-8');
}

// Função para gerar relatório personalizado
async function generatePersonalizedReport(clientData: any): Promise<Buffer> {
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relatório Personalizado - ${clientData.name}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; color: #1f2937; }
        .header { background: #2563eb; color: white; padding: 20px; margin: -20px -20px 30px -20px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .client-banner { background: rgba(59, 130, 246, 0.1); padding: 15px; margin: 20px 0; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
        .client-info { background: #f3f4f6; padding: 20px; margin: 15px 0; }
        .savings-highlight { background: rgba(5, 150, 105, 0.1); padding: 20px; margin: 20px 0; text-align: center; }
        .savings-amount { font-size: 32px; font-weight: bold; color: #059669; }
        .recommendation { background: #f9fafb; padding: 20px; border-left: 4px solid #2563eb; }
        .timeline { list-style: none; padding: 0; }
        .timeline li { background: rgba(37, 99, 235, 0.1); padding: 10px; margin: 5px 0; position: relative; padding-left: 40px; }
        .timeline li:before { content: counter(step-counter); counter-increment: step-counter; position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: #2563eb; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
        .timeline { counter-reset: step-counter; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">CONSTRUWARE</div>
        <div style="font-size: 14px; margin-top: 10px;">RELATÓRIO PERSONALIZADO - ${clientData.name.toUpperCase()}</div>
        <div style="float: right; margin-top: -40px; font-size: 10px;">${clientData.generatedAt}</div>
    </div>

    <div class="client-banner">
        <h1 style="margin: 0; color: #2563eb;">ANÁLISE PERSONALIZADA</h1>
        <p style="margin: 5px 0 0 0;">Relatório gerado pela nossa IA especializada</p>
    </div>

    <div class="section">
        <h2>DADOS DO CLIENTE</h2>
        <div class="client-info">
            <p><strong>Cliente:</strong> ${clientData.name}</p>
            <p><strong>Empresa:</strong> ${clientData.company}</p>
            <p><strong>Setor:</strong> ${clientData.businessType}</p>
            <p><strong>Funcionários:</strong> ${clientData.employees}</p>
            <p><strong>Principal Desafio:</strong> ${clientData.mainChallenge}</p>
            <p><strong>Sistema Atual:</strong> ${clientData.currentSystem}</p>
        </div>
    </div>

    <div class="savings-highlight">
        <h2 style="color: #059669; margin-top: 0;">ECONOMIA ESTIMADA ANUAL</h2>
        <div class="savings-amount">€${clientData.estimatedSavings.toLocaleString()}</div>
        <p style="margin-bottom: 0; color: #6b7280;">Baseado na otimização dos seus processos atuais</p>
    </div>

    <div class="section">
        <h2>SOLUÇÃO RECOMENDADA</h2>
        <div class="recommendation">
            <h3 style="color: #2563eb; margin-top: 0;">RECOMENDAÇÃO IA:</h3>
            <p>${clientData.recommendedSolution}</p>
        </div>
    </div>

    <div class="section">
        <h2>CRONOGRAMA DE IMPLEMENTAÇÃO</h2>
        <ol class="timeline">
            <li><strong>Semana 1-2:</strong> Análise detalhada e planeamento</li>
            <li><strong>Semana 3-6:</strong> Desenvolvimento e configuração</li>
            <li><strong>Semana 7-8:</strong> Testes e formação da equipa</li>
            <li><strong>Semana 9:</strong> Go-live e suporte inicial</li>
        </ol>
    </div>

    <div class="section">
        <h2>CONTACTOS E PRÓXIMOS PASSOS</h2>
        <div style="background: #2563eb; color: white; padding: 20px; margin: 20px 0;">
            <h3 style="color: white; margin-top: 0;">ENTRE EM CONTACTO</h3>
            <p>📞 <strong>WhatsApp:</strong> +351 963 901 577</p>
            <p>📧 <strong>Email:</strong> contato@construware.pt</p>
            <p>🌐 <strong>Website:</strong> www.construware.pt</p>
            <div style="text-align: center; margin-top: 20px; font-weight: bold; border-top: 1px solid rgba(255,255,255,0.3); padding-top: 15px;">
                ⚡ RESPOSTA GARANTIDA EM 24 HORAS ⚡
            </div>
        </div>
    </div>
</body>
</html>`;

  return Buffer.from(htmlContent, 'utf-8');
}

// Funções auxiliares
function calculateROI(businessType: string, employees: string): number {
  const employeeCount = parseInt(employees.split('-')[0]) || 1;
  const multiplier = employeeCount * 1000;
  
  const multipliers = {
    'Construction': 12,
    'Consulting': 15,
    'E-commerce': 10,
    'Restaurant': 8,
    'Services': 8,
    'Outro': 8
  };
  
  return multiplier * (multipliers[businessType] || 8);
}

function generateRecommendation(userData: any): string {
  const recommendations = {
    'Construction': 'Sistema ERP especializado para construção com gestão de obras, materiais, equipamentos e relatórios de progresso em tempo real. Inclui módulos de orçamentação automática e controlo de custos.',
    'Consulting': 'Plataforma CRM avançada com gestão de projetos, time tracking automático, faturação inteligente e dashboards de performance. Sistema otimizado para equipas de consultoria.',
    'E-commerce': 'Solução e-commerce completa com gestão de stock automática, analytics avançados, marketing automation e integração multi-canal para maximizar vendas.',
    'Restaurant': 'Sistema POS integrado com gestão de delivery, controlo de ingredientes, reservas automáticas e análises de vendas específicas para restauração.',
    'Services': 'Plataforma de gestão de serviços com agendamento inteligente, gestão de técnicos, histórico completo de clientes e faturação automática.',
    'Outro': 'Sistema personalizado desenvolvido especificamente para as necessidades do seu setor, com funcionalidades sob medida e integração com sistemas existentes.'
  };
  
  return recommendations[userData.businessType] || recommendations['Outro'];
}
