import express, { type Request, Response } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { whatsappBaileys } from "./baileys-whatsapp";
import puppeteer from "puppeteer";

export async function registerRoutes(app: express.Application) {
  // Rota principal: Baileys WhatsApp (única opção)
  app.post("/api/whatsapp/send-baileys", async (req, res) => {
    try {
      const { number, message, userData, sendPDF = true } = req.body;

      if (!number || !message) {
        return res.status(400).json({
          success: false,
          error: "Número e mensagem são obrigatórios",
        });
      }

      console.log(`📱 [BAILEYS] Enviando para: ${number}`);

      // Verificar se Baileys está conectado
      if (whatsappBaileys.getConnectionStatus()) {
        console.log("✅ [BAILEYS] WhatsApp conectado, enviando...");

        let success = false;

        if (sendPDF && userData) {
          // Enviar com PDFs anexados
          try {
            // Gerar Portfolio PDF
            const portfolioPDF = await generateHighQualityPDF(
              generateCompanyPortfolioHTML()
            );

            // Gerar Relatório Personalizado
            const reportData = {
              name: userData.name,
              company: userData.company || userData.name,
              businessType: userData.businessType,
              employees: userData.employees,
              mainChallenge: userData.mainChallenge,
              currentSystem: userData.currentSystem,
              estimatedSavings: calculateROI(
                userData.businessType,
                userData.employees
              ),
              recommendedSolution: generateRecommendation(userData),
              generatedAt: new Date().toLocaleString("pt-PT"),
            };

            const reportPDF = await generateHighQualityPDF(
              generatePersonalizedReportHTML(reportData)
            );

            // Usar o método integrado que envia mensagem + PDFs com controle anti-spam
            success = await whatsappBaileys.sendMessageWithPDFs(
              number,
              message,
              [
                {
                  buffer: portfolioPDF,
                  fileName: `Construware-Portfolio-${
                    userData.name || "Cliente"
                  }.pdf`,
                },
                {
                  buffer: reportPDF,
                  fileName: `Relatorio-Personalizado-${
                    userData.name || "Cliente"
                  }.pdf`,
                },
              ]
            );

            console.log("✅ [BAILEYS] Mensagem + PDFs enviados com sucesso!");
          } catch (pdfError) {
            console.error("❌ [BAILEYS] Erro com PDFs:", pdfError);
            // Tentar enviar pelo menos a mensagem
            success = await whatsappBaileys.sendMessage(number, message);
          }
        } else {
          // Enviar apenas mensagem
          success = await whatsappBaileys.sendMessage(number, message);
        }

        if (success) {
          return res.json({
            success: true,
            method: "baileys",
            message: "Mensagem enviada via Baileys (anti-ban)",
          });
        } else {
          throw new Error("Falha no envio via Baileys");
        }
      } else {
        console.log("⚠️ [BAILEYS] Não conectado ainda...");

        // Se Baileys não conectado, dar instrução para conectar
        return res.json({
          success: false,
          method: "baileys_not_connected",
          message:
            "WhatsApp não conectado. Verifique o QR Code nos logs do servidor.",
          instruction:
            "Escaneie o QR Code que aparece nos logs do servidor para conectar o WhatsApp",
        });
      }
    } catch (error) {
      console.error("❌ [BAILEYS] Erro na rota:", error);

      // Último fallback: Link wa.me
      const waLink = `https://wa.me/${number.replace(
        /[^0-9]/g,
        ""
      )}?text=${encodeURIComponent(message)}`;

      res.json({
        success: true,
        method: "wa_me_fallback",
        waLink: waLink,
        message: "Use o link para enviar manualmente",
      });
    }
  });

  // Status do Baileys
  app.get("/api/whatsapp/status", async (req, res) => {
    try {
      const isConnected = whatsappBaileys.getConnectionStatus();

      res.json({
        success: true,
        baileys: {
          connected: isConnected,
          ready: whatsappBaileys.isReady(),
          status: isConnected
            ? "Conectado"
            : "Aguardando conexão (QR Code nos logs)",
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Erro ao verificar status do Baileys",
      });
    }
  });

  // Adicionar rota para gerar PDF da marca usando Puppeteer
  app.post("/api/generate-brand-pdf", async (req, res) => {
    try {
      const { clientData } = req.body;

      // Gerar PDF de alta qualidade com Puppeteer
      const pdfBuffer = await generateHighQualityPDF(
        generateCompanyPortfolioHTML()
      );

      // Configurar headers para download
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="Construware-Portfolio-${
          clientData?.name || "Cliente"
        }.pdf"`
      );
      res.setHeader("Content-Length", pdfBuffer.length);

      res.send(pdfBuffer);
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      res.status(500).json({
        success: false,
        error: "Erro interno do servidor ao gerar PDF",
      });
    }
  });

  // Rota para gerar relatório personalizado PDF
  app.post("/api/generate-report-pdf", async (req, res) => {
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
        estimatedSavings: calculateROI(
          userData.businessType,
          userData.employees
        ),
        recommendedSolution: generateRecommendation(userData),
        email: userData.email,
        whatsapp: userData.whatsapp,
        generatedAt: new Date().toLocaleString("pt-PT"),
      };

      // Gerar PDF personalizado de alta qualidade
      const pdfBuffer = await generateHighQualityPDF(
        generatePersonalizedReportHTML(clientData)
      );

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="Relatorio-Personalizado-${userData.name}.pdf"`
      );
      res.setHeader("Content-Length", pdfBuffer.length);

      res.send(pdfBuffer);
    } catch (error) {
      console.error("Erro ao gerar relatório PDF:", error);
      res.status(500).json({
        success: false,
        error: "Erro interno do servidor ao gerar relatório",
      });
    }
  });

  // WhatsApp Demo endpoint - sends to both client and team
  app.post("/api/whatsapp/send-demo", async (req, res) => {
    try {
      const { phone, message, type } = req.body;
      
      console.log(`📱 Enviando demo WhatsApp (${type}):`, { phone });
      
      // Import Baileys functions
      const { sendWhatsAppMessage } = await import('./baileys-whatsapp');
      
      // Send message via Baileys
      const result = await sendWhatsAppMessage(phone, message);
      
      if (result.success) {
        console.log(`✅ Demo ${type} enviada via WhatsApp com sucesso!`);
        res.json({ 
          success: true, 
          message: `Demo ${type} enviada com sucesso`,
          messageId: result.messageId 
        });
      } else {
        console.error(`❌ Erro ao enviar demo ${type} via WhatsApp:`, result.error);
        res.status(500).json({ 
          success: false, 
          error: `Erro ao enviar demo ${type}`,
          details: result.error 
        });
      }
    } catch (error) {
      console.error('❌ Erro na API WhatsApp Demo:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

// Função para gerar PDFs de alta qualidade usando Puppeteer
async function generateHighQualityPDF(htmlContent: string): Promise<Buffer> {
  let browser;
  try {
    console.log("🚀 Iniciando geração de PDF com Puppeteer...");

    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--single-process",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // Configurar página para PDF de alta qualidade
    await page.setContent(htmlContent, {
      waitUntil: ["domcontentloaded", "networkidle0"],
    });

    // Gerar PDF com configurações profissionais
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });

    console.log("✅ PDF gerado com sucesso!");
    return pdfBuffer;
  } catch (error) {
    console.error("❌ Erro ao gerar PDF:", error);
    throw new Error("Falha na geração do PDF");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Função para gerar HTML do portfolio da empresa
function generateCompanyPortfolioHTML(): string {
  const currentDate = new Date().toLocaleDateString("pt-PT");

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Portfolio Construware - Transforming Business Through Technology</title>
    <style>
        @page { 
          size: A4; 
          margin: 0; 
        }
        * { 
          box-sizing: border-box; 
        }
        body { 
          font-family: 'Segoe UI', 'Arial', sans-serif; 
          margin: 0; 
          padding: 15px; 
          color: #1f2937; 
          background: #fafafa; 
          font-size: 12px;
          line-height: 1.4;
        }
        .header { 
          background: linear-gradient(135deg, #2563eb, #1e40af, #1d4ed8); 
          color: white; 
          padding: 25px; 
          margin: -15px -15px 25px -15px; 
          border-radius: 0 0 15px 15px;
          position: relative;
        }
        .logo { 
          font-size: 24px; 
          font-weight: bold; 
          margin-bottom: 8px; 
        }
        .tagline { 
          font-size: 14px; 
          opacity: 0.9; 
          font-style: italic; 
        }
        .date {
          position: absolute;
          top: 15px;
          right: 25px;
          font-size: 10px;
          opacity: 0.8;
        }
        .section { 
          margin-bottom: 25px; 
          background: white; 
          padding: 20px; 
          border-radius: 10px; 
          border: 1px solid #e2e8f0;
          page-break-inside: avoid;
        }
        .section h2 { 
          color: #2563eb; 
          border-bottom: 2px solid #2563eb; 
          padding-bottom: 8px; 
          font-size: 16px; 
          margin: 0 0 15px 0; 
        }
        .section p {
          margin: 0 0 10px 0;
          font-size: 11px;
          line-height: 1.5;
        }
        .stats-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 15px; 
          margin: 15px 0; 
        }
        .stat-card { 
          background: linear-gradient(135deg, #f8fafc, #f1f5f9); 
          padding: 15px; 
          text-align: center; 
          border-radius: 8px; 
          border: 1px solid #e2e8f0; 
        }
        .stat-number { 
          font-size: 20px; 
          font-weight: bold; 
          color: #2563eb; 
          margin-bottom: 5px; 
        }
        .stat-label { 
          font-size: 9px; 
          color: #64748b; 
          font-weight: 500; 
        }
        .project-card { 
          background: #f9fafb; 
          padding: 15px; 
          margin: 10px 0; 
          border-left: 4px solid #2563eb; 
          border-radius: 0 8px 8px 0; 
          page-break-inside: avoid;
        }
        .project-sector { 
          background: linear-gradient(135deg, #2563eb, #3b82f6); 
          color: white; 
          padding: 3px 8px; 
          font-size: 8px; 
          font-weight: bold; 
          display: inline-block; 
          margin-bottom: 8px; 
          border-radius: 12px; 
          text-transform: uppercase; 
        }
        .project-title { 
          font-weight: bold; 
          color: #1f2937; 
          margin-bottom: 8px; 
          font-size: 12px; 
        }
        .project-description { 
          color: #64748b; 
          margin-bottom: 10px; 
          line-height: 1.4; 
          font-size: 10px;
        }
        .project-results { 
          color: #059669; 
          font-weight: bold; 
          margin-top: 8px; 
          padding: 8px; 
          background: rgba(5, 150, 105, 0.1); 
          border-radius: 6px; 
          font-size: 9px;
        }
        .service-card { 
          background: white; 
          border: 1px solid #e2e8f0; 
          border-radius: 8px; 
          padding: 15px; 
          margin: 10px 0; 
          page-break-inside: avoid;
        }
        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .service-title {
          font-size: 12px;
          font-weight: bold;
          color: #1f2937;
          margin: 0;
        }
        .service-desc {
          font-size: 10px;
          color: #64748b;
          margin: 2px 0 0 0;
        }
        .service-price { 
          font-size: 12px; 
          font-weight: bold; 
          color: #2563eb; 
        }
        .service-features { 
          list-style: none; 
          padding: 0; 
          margin: 8px 0 0 0; 
        }
        .service-features li { 
          padding: 2px 0; 
          color: #64748b; 
          font-size: 9px;
        }
        .service-features li:before { 
          content: "✓"; 
          color: #059669; 
          font-weight: bold; 
          margin-right: 6px; 
        }
        .cta-section { 
          background: linear-gradient(135deg, #2563eb, #1e40af); 
          color: white; 
          padding: 25px; 
          margin: 20px -15px -15px -15px; 
          border-radius: 15px 15px 0 0; 
          text-align: center; 
          page-break-inside: avoid;
        }
        .cta-title {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 10px 0;
        }
        .cta-subtitle {
          font-size: 11px;
          opacity: 0.9;
          margin-bottom: 15px;
        }
        .contact-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 15px; 
          margin-top: 15px; 
        }
        .contact-item { 
          background: rgba(255,255,255,0.1); 
          padding: 10px; 
          border-radius: 8px; 
          text-align: left;
        }
        .contact-icon { 
          font-size: 14px; 
          margin-bottom: 5px; 
          display: block;
        }
        .contact-label {
          font-weight: bold;
          font-size: 10px;
          margin-bottom: 2px;
        }
        .contact-value {
          font-size: 9px;
          opacity: 0.9;
        }
        .footer-cta {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(255,255,255,0.3);
          font-size: 14px;
          font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🏆 CONSTRUWARE</div>
        <div class="tagline">Transforming Business Through Technology</div>
        <div class="date">Portfolio Empresarial ${currentDate}</div>
    </div>

    <div class="section">
        <h2>🏢 QUEM SOMOS</h2>
        <p>
            A <strong>Construware</strong> é uma empresa portuguesa especializada em soluções tecnológicas inovadoras para empresas de todos os setores. Com mais de 10 anos de experiência no mercado, ajudamos organizações a transformar os seus processos através da automação e otimização digital.
        </p>
        <p>
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
            <div class="service-header">
                <div>
                    <div class="service-title">🤖 Consultoria IA Especializada</div>
                    <div class="service-desc">Análise completa com nossa IA especializada</div>
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
            <div class="service-header">
                <div>
                    <div class="service-title">💼 Sistema Empresarial Básico</div>
                    <div class="service-desc">Solução completa para empresas até 20 funcionários</div>
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
            <div class="service-header">
                <div>
                    <div class="service-title">🏢 Sistema Empresarial Avançado</div>
                    <div class="service-desc">Solução empresarial para médias e grandes empresas</div>
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
        <div class="cta-title">🚀 PRONTO PARA TRANSFORMAR SUA EMPRESA?</div>
        <div class="cta-subtitle">
            Nossa equipa está pronta para analisar as suas necessidades e apresentar a solução ideal
        </div>
        
        <div class="contact-grid">
            <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-label">WhatsApp Business</div>
                <div class="contact-value">+351 963 901 577</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-label">Email Comercial</div>
                <div class="contact-value">comercial@construware.pt</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🌐</div>
                <div class="contact-label">Website</div>
                <div class="contact-value">www.construware.pt</div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-label">Localização</div>
                <div class="contact-value">Lisboa, Portugal</div>
            </div>
        </div>
        
        <div class="footer-cta">
            ⚡ RESPOSTA GARANTIDA EM 24 HORAS ⚡
        </div>
    </div>
</body>
</html>`;
}

// Função para gerar HTML do relatório personalizado
function generatePersonalizedReportHTML(clientData: any): string {
  const currentDate = new Date().toLocaleDateString("pt-PT");

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relatório Personalizado - ${clientData.name}</title>
    <style>
        @page { 
          size: A4; 
          margin: 0; 
        }
        * { 
          box-sizing: border-box; 
        }
        body { 
          font-family: 'Segoe UI', 'Arial', sans-serif; 
          margin: 0; 
          padding: 15px; 
          color: #1f2937; 
          font-size: 12px;
          line-height: 1.4;
        }
        .header { 
          background: linear-gradient(135deg, #2563eb, #1e40af); 
          color: white; 
          padding: 20px; 
          margin: -15px -15px 25px -15px; 
          border-radius: 0 0 10px 10px; 
          position: relative;
        }
        .logo { 
          font-size: 24px; 
          font-weight: bold; 
          margin-bottom: 8px; 
        }
        .subtitle { 
          font-size: 14px; 
          margin-top: 8px; 
          opacity: 0.9; 
        }
        .date {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 10px;
          opacity: 0.8;
        }
        .client-banner { 
          background: rgba(59, 130, 246, 0.1); 
          padding: 15px; 
          margin: 20px 0; 
          border-radius: 8px; 
          border-left: 4px solid #2563eb; 
        }
        .client-banner h1 {
          margin: 0;
          color: #2563eb;
          font-size: 18px;
        }
        .client-banner p {
          margin: 5px 0 0 0;
          font-size: 12px;
          color: #64748b;
        }
        .section { 
          margin-bottom: 25px; 
          page-break-inside: avoid;
        }
        .section h2 { 
          color: #2563eb; 
          border-bottom: 2px solid #2563eb; 
          padding-bottom: 6px; 
          font-size: 16px; 
          margin: 0 0 15px 0;
        }
        .client-info { 
          background: #f8fafc; 
          padding: 20px; 
          margin: 15px 0; 
          border-radius: 8px; 
          border: 1px solid #e2e8f0; 
        }
        .info-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 12px; 
        }
        .info-item { 
          padding: 8px 0; 
        }
        .info-label { 
          font-weight: bold; 
          color: #475569; 
          margin-bottom: 3px; 
          font-size: 10px;
        }
        .info-value { 
          color: #1e293b; 
          font-size: 11px; 
        }
        .savings-highlight { 
          background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(16, 185, 129, 0.1)); 
          padding: 25px; 
          margin: 20px 0; 
          text-align: center; 
          border-radius: 12px; 
          border: 2px solid #10b981; 
          page-break-inside: avoid;
        }
        .savings-title {
          color: #059669;
          margin: 0 0 10px 0;
          font-size: 16px;
          font-weight: bold;
        }
        .savings-amount { 
          font-size: 32px; 
          font-weight: bold; 
          color: #059669; 
          margin: 8px 0; 
        }
        .savings-subtitle { 
          color: #6b7280; 
          font-size: 11px; 
          margin-bottom: 10px;
        }
        .savings-note {
          margin-top: 10px;
          font-size: 10px;
          color: #059669;
        }
        .recommendation { 
          background: #f1f5f9; 
          padding: 20px; 
          border-left: 4px solid #2563eb; 
          border-radius: 0 8px 8px 0; 
          margin: 15px 0; 
        }
        .recommendation h3 {
          color: #2563eb;
          margin: 0 0 10px 0;
          font-size: 14px;
        }
        .recommendation p {
          font-size: 11px;
          line-height: 1.5;
          margin: 0 0 10px 0;
        }
        .advantages {
          background: rgba(37, 99, 235, 0.1);
          padding: 12px;
          border-radius: 6px;
          margin-top: 12px;
        }
        .advantages strong {
          color: #1e40af;
          font-size: 11px;
        }
        .advantages ul {
          margin: 8px 0;
          padding-left: 15px;
        }
        .advantages li {
          color: #475569;
          font-size: 10px;
          margin: 3px 0;
        }
        .timeline { 
          list-style: none; 
          padding: 0; 
          margin: 15px 0; 
          counter-reset: step-counter;
        }
        .timeline li { 
          background: rgba(37, 99, 235, 0.05); 
          padding: 12px; 
          margin: 8px 0; 
          position: relative; 
          padding-left: 40px; 
          border-radius: 6px; 
          border: 1px solid rgba(37, 99, 235, 0.2); 
        }
        .timeline li:before { 
          content: counter(step-counter); 
          counter-increment: step-counter; 
          position: absolute; 
          left: 12px; 
          top: 50%; 
          transform: translateY(-50%); 
          background: #2563eb; 
          color: white; 
          width: 20px; 
          height: 20px; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 10px; 
          font-weight: bold; 
        }
        .timeline li strong {
          font-size: 11px;
        }
        .timeline li {
          font-size: 10px;
        }
        .contact-section { 
          background: linear-gradient(135deg, #2563eb, #1e40af); 
          color: white; 
          padding: 25px; 
          margin: 20px -15px -15px -15px; 
          border-radius: 12px 12px 0 0; 
          page-break-inside: avoid;
        }
        .contact-title {
          color: white;
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .contact-grid { 
          display: grid; 
          grid-template-columns: repeat(2, 1fr); 
          gap: 15px; 
          margin-top: 15px; 
        }
        .contact-item { 
          display: flex; 
          align-items: flex-start; 
          margin: 6px 0; 
        }
        .contact-icon { 
          margin-right: 8px; 
          font-size: 14px; 
          margin-top: 2px;
        }
        .contact-content {
          flex: 1;
        }
        .contact-label {
          font-weight: bold;
          font-size: 10px;
          margin-bottom: 2px;
        }
        .contact-value {
          font-size: 9px;
          opacity: 0.9;
        }
        .footer-cta { 
          text-align: center; 
          margin-top: 20px; 
          padding-top: 15px; 
          border-top: 1px solid rgba(255,255,255,0.3); 
          font-size: 14px; 
          font-weight: bold; 
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">🏆 CONSTRUWARE</div>
        <div class="subtitle">RELATÓRIO PERSONALIZADO - ${clientData.name?.toUpperCase()}</div>
        <div class="date">${currentDate}</div>
    </div>

    <div class="client-banner">
        <h1>✅ ANÁLISE IA CONCLUÍDA</h1>
        <p>Relatório empresarial gerado pela nossa IA especializada</p>
    </div>

    <div class="section">
        <h2>📋 PERFIL EMPRESARIAL</h2>
        <div class="client-info">
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">👤 Cliente</div>
                    <div class="info-value">${clientData.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">🏢 Empresa</div>
                    <div class="info-value">${clientData.company}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">📊 Setor</div>
                    <div class="info-value">${clientData.businessType}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">👥 Funcionários</div>
                    <div class="info-value">${clientData.employees}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">⚠️ Principal Desafio</div>
                    <div class="info-value">${clientData.mainChallenge}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">💻 Sistema Atual</div>
                    <div class="info-value">${clientData.currentSystem}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="savings-highlight">
        <h2 class="savings-title">💰 POTENCIAL DE ECONOMIA</h2>
        <div class="savings-amount">€${clientData.estimatedSavings.toLocaleString()}</div>
        <div class="savings-subtitle">Economia anual estimada com automação e otimização</div>
        <div class="savings-note">
            ✓ Baseado na análise específica do seu perfil empresarial
        </div>
    </div>

    <div class="section">
        <h2>🎯 SOLUÇÃO RECOMENDADA</h2>
        <div class="recommendation">
            <h3>🤖 RECOMENDAÇÃO IA PERSONALIZADA:</h3>
            <p>${clientData.recommendedSolution}</p>
            <div class="advantages">
                <strong>💡 VANTAGENS ESPECÍFICAS:</strong>
                <ul>
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
        <h2 class="contact-title">🚀 CONTACTOS & PRÓXIMOS PASSOS</h2>
        <div class="contact-grid">
            <div>
                <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <div class="contact-content">
                        <div class="contact-label">WhatsApp Business</div>
                        <div class="contact-value">+351 963 901 577</div>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <div class="contact-content">
                        <div class="contact-label">Email Comercial</div>
                        <div class="contact-value">comercial@construware.pt</div>
                    </div>
                </div>
            </div>
            <div>
                <div class="contact-item">
                    <span class="contact-icon">🌐</span>
                    <div class="contact-content">
                        <div class="contact-label">Website</div>
                        <div class="contact-value">www.construware.pt</div>
                    </div>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">⏰</span>
                    <div class="contact-content">
                        <div class="contact-label">Horário</div>
                        <div class="contact-value">Seg-Sex, 09h00-18h00</div>
                    </div>
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

// Funções auxiliares
function calculateROI(businessType: string, employees: string): number {
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

function generateRecommendation(userData: any): string {
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
