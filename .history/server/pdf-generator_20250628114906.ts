import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

interface ClientData {
  name: string;
  company?: string;
  businessType: string;
  employees: string;
  mainChallenge: string;
  currentSystem: string;
  estimatedSavings: number;
  recommendedSolution: string;
  email?: string;
  whatsapp?: string;
  generatedAt: string;
}

export class ConstruwarePDFGenerator {
  private static readonly BRAND_COLORS = {
    primary: "#2563eb", // Azul Construware
    secondary: "#1e40af", // Azul escuro
    accent: "#3b82f6", // Azul claro
    text: "#1f2937", // Cinza escuro
    lightGray: "#f3f4f6", // Cinza claro
    success: "#059669", // Verde
    warning: "#d97706", // Laranja
  };

  static async generateCompanyPortfolio(): Promise<Buffer> {
    const doc = new jsPDF("p", "mm", "a4");

    // Header da marca
    this.addHeader(doc);

    // Página 1: Apresentação da empresa
    this.addCompanyPresentation(doc);

    // Página 2: Portfólio de projetos
    doc.addPage();
    this.addHeader(doc);
    this.addPortfolioSection(doc);

    // Página 3: Serviços e valores
    doc.addPage();
    this.addHeader(doc);
    this.addServicesAndPricing(doc);

    // Página 4: Contactos e próximos passos
    doc.addPage();
    this.addHeader(doc);
    this.addContactsAndNextSteps(doc);

    return Buffer.from(doc.output("arraybuffer"));
  }

  static async generatePersonalizedReport(
    clientData: ClientData
  ): Promise<Buffer> {
    const doc = new jsPDF("p", "mm", "a4");

    // Header personalizado
    this.addPersonalizedHeader(doc, clientData);

    // Página 1: Análise personalizada
    this.addPersonalizedAnalysis(doc, clientData);

    // Página 2: Solução recomendada
    doc.addPage();
    this.addHeader(doc);
    this.addRecommendedSolution(doc, clientData);

    // Página 3: Cronograma e investimento
    doc.addPage();
    this.addHeader(doc);
    this.addTimelineAndInvestment(doc, clientData);

    return Buffer.from(doc.output("arraybuffer"));
  }

  private static addHeader(doc: jsPDF) {
    // Logo e marca (simulado com texto)
    doc.setFillColor(37, 99, 235); // Azul Construware
    doc.rect(0, 0, 210, 25, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("CONSTRUWARE", 20, 15);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Transforming Business Through Technology", 20, 20);

    // Data atual
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(8);
    const currentDate = new Date().toLocaleDateString("pt-PT");
    doc.text(`${currentDate}`, 170, 20);
  }

  private static addPersonalizedHeader(doc: jsPDF, clientData: ClientData) {
    this.addHeader(doc);

    // Banner personalizado
    doc.setFillColor(59, 130, 246, 0.1);
    doc.rect(10, 30, 190, 15, "F");

    doc.setTextColor(31, 41, 55);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(
      `RELATÓRIO PERSONALIZADO - ${clientData.name.toUpperCase()}`,
      20,
      40
    );
  }

  private static addCompanyPresentation(doc: jsPDF) {
    let y = 50;

    // Título
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("QUEM SOMOS", 20, y);
    y += 15;

    // Descrição da empresa
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    const description = `A Construware é uma empresa portuguesa especializada em soluções tecnológicas 
inovadoras para empresas de todos os setores. Com mais de 10 anos de experiência, 
ajudamos organizações a transformar os seus processos através da automação e 
otimização digital.

Nossa missão é democratizar o acesso à tecnologia avançada, oferecendo soluções 
personalizadas que geram resultados mensuráveis e sustentáveis.`;

    const lines = doc.splitTextToSize(description, 170);
    doc.text(lines, 20, y);
    y += lines.length * 6 + 10;

    // Números da empresa
    this.addCompanyStats(doc, y);
  }

  private static addCompanyStats(doc: jsPDF, startY: number) {
    const stats = [
      { number: "500+", label: "Empresas Transformadas" },
      { number: "€2.5M+", label: "Economia Gerada" },
      { number: "98%", label: "Taxa de Satisfação" },
      { number: "24/7", label: "Suporte Técnico" },
    ];

    let x = 20;
    let y = startY + 20;

    stats.forEach((stat, index) => {
      if (index === 2) {
        x = 20;
        y += 40;
      }

      // Caixa do estatística
      doc.setFillColor(243, 244, 246);
      doc.rect(x, y - 10, 80, 30, "F");

      doc.setTextColor(37, 99, 235);
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text(stat.number, x + 10, y + 5);

      doc.setTextColor(75, 85, 99);
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(stat.label, x + 10, y + 12);

      x += 90;
    });
  }

  private static addPortfolioSection(doc: jsPDF) {
    let y = 50;

    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("PORTFÓLIO DE PROJETOS", 20, y);
    y += 15;

    const projects = [
      {
        title: "Sistema ERP - Empresa de Construção",
        description: "Gestão completa de obras, materiais e equipamentos.",
        results: "Redução de 40% no tempo de gestão | €150k economia anual",
        sector: "Construção Civil",
      },
      {
        title: "Plataforma E-commerce - Loja Online",
        description: "Sistema completo de vendas online com gestão de stock.",
        results: "Aumento de 200% nas vendas | €80k receita adicional",
        sector: "Comércio Eletrónico",
      },
      {
        title: "CRM Avançado - Consultoria",
        description: "Gestão de clientes e projetos com automação.",
        results: "Melhoria de 60% na retenção | €120k economia anual",
        sector: "Consultoria",
      },
    ];

    projects.forEach((project) => {
      this.addProjectCard(doc, project, y);
      y += 50;
    });
  }

  private static addProjectCard(doc: jsPDF, project: any, y: number) {
    // Card background
    doc.setFillColor(249, 250, 251);
    doc.rect(20, y, 170, 45, "F");

    // Setor tag
    doc.setFillColor(37, 99, 235);
    doc.rect(25, y + 5, 60, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(project.sector, 28, y + 10);

    // Título do projeto
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(project.title, 25, y + 20);

    // Descrição
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(project.description, 25, y + 27);

    // Resultados
    doc.setTextColor(5, 150, 105);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text("RESULTADOS:", 25, y + 35);
    doc.setTextColor(75, 85, 99);
    doc.setFont("helvetica", "normal");
    doc.text(project.results, 25, y + 41);
  }

  private static addServicesAndPricing(doc: jsPDF) {
    let y = 50;

    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("SERVIÇOS E INVESTIMENTO", 20, y);
    y += 15;

    const services = [
      {
        name: "Consultoria IA",
        description: "Análise completa com nossa IA especializada",
        price: "GRATUITO",
        features: [
          "Análise de processos",
          "Recomendações personalizadas",
          "ROI estimado",
        ],
      },
      {
        name: "Sistema Básico",
        description: "Solução para empresas até 20 funcionários",
        price: "A partir de €2.500",
        features: [
          "Sistema personalizado",
          "Formação incluída",
          "Suporte 6 meses",
        ],
      },
      {
        name: "Sistema Empresarial",
        description: "Solução completa para empresas médias/grandes",
        price: "A partir de €8.500",
        features: ["ERP completo", "Integrações avançadas", "Suporte 24/7"],
      },
    ];

    services.forEach((service) => {
      this.addServiceCard(doc, service, y);
      y += 45;
    });
  }

  private static addServiceCard(doc: jsPDF, service: any, y: number) {
    // Card background
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(229, 231, 235);
    doc.rect(20, y, 170, 40, "FD");

    // Nome do serviço
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(service.name, 25, y + 10);

    // Preço
    doc.setTextColor(37, 99, 235);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(service.price, 140, y + 10);

    // Descrição
    doc.setTextColor(75, 85, 99);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(service.description, 25, y + 18);

    // Features
    doc.setFontSize(9);
    service.features.forEach((feature, index) => {
      doc.text(`• ${feature}`, 25, y + 25 + index * 4);
    });
  }

  private static addContactsAndNextSteps(doc: jsPDF) {
    let y = 50;

    // Próximos passos
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("PRÓXIMOS PASSOS", 20, y);
    y += 15;

    const steps = [
      "Demonstração personalizada gratuita (30 minutos)",
      "Análise técnica detalhada das suas necessidades",
      "Proposta comercial personalizada",
      "Implementação com suporte completo",
    ];

    steps.forEach((step, index) => {
      doc.setFillColor(37, 99, 235);
      doc.circle(25, y + 5, 3, "F");

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text((index + 1).toString(), 23, y + 7);

      doc.setTextColor(31, 41, 55);
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text(step, 35, y + 7);

      y += 12;
    });

    y += 20;

    // Contactos
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("CONTACTOS", 20, y);
    y += 15;

    // Info de contacto
    const contacts = [
      { icon: "📞", label: "WhatsApp:", value: "+351 963 901 577" },
      { icon: "📧", label: "Email:", value: "contato@construware.pt" },
      { icon: "🌐", label: "Website:", value: "www.construware.pt" },
      { icon: "📍", label: "Morada:", value: "Lisboa, Portugal" },
    ];

    contacts.forEach((contact) => {
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text(`${contact.icon} ${contact.label}`, 20, y);

      doc.setFont("helvetica", "normal");
      doc.text(contact.value, 65, y);
      y += 8;
    });

    // Call to action
    y += 20;
    doc.setFillColor(37, 99, 235);
    doc.rect(20, y, 170, 25, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("RESPOSTA GARANTIDA EM 24 HORAS", 60, y + 12);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Entre em contacto connosco e receba uma proposta personalizada",
      45,
      y + 20
    );
  }

  private static addPersonalizedAnalysis(doc: jsPDF, clientData: ClientData) {
    let y = 60;

    // Dados do cliente
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("ANÁLISE PERSONALIZADA", 20, y);
    y += 15;

    // Info box
    doc.setFillColor(243, 244, 246);
    doc.rect(20, y, 170, 60, "F");

    const clientInfo = [
      { label: "Cliente:", value: clientData.name },
      { label: "Empresa:", value: clientData.company || "Não especificado" },
      { label: "Setor:", value: clientData.businessType },
      { label: "Funcionários:", value: clientData.employees },
      { label: "Principal Desafio:", value: clientData.mainChallenge },
      { label: "Sistema Atual:", value: clientData.currentSystem },
    ];

    clientInfo.forEach((info, index) => {
      const currentY = y + 10 + index * 8;

      doc.setTextColor(75, 85, 99);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text(info.label, 25, currentY);

      doc.setFont("helvetica", "normal");
      const value = doc.splitTextToSize(info.value, 100);
      doc.text(value, 65, currentY);
    });

    y += 75;

    // Economia estimada (destacada)
    doc.setFillColor(5, 150, 105, 0.1);
    doc.rect(20, y, 170, 30, "F");

    doc.setTextColor(5, 150, 105);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("ECONOMIA ESTIMADA ANUAL:", 25, y + 12);

    doc.setFontSize(24);
    doc.text(`€${clientData.estimatedSavings.toLocaleString()}`, 25, y + 25);
  }

  private static addRecommendedSolution(doc: jsPDF, clientData: ClientData) {
    let y = 50;

    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("SOLUÇÃO RECOMENDADA", 20, y);
    y += 15;

    // Solução personalizada
    doc.setFillColor(249, 250, 251);
    doc.rect(20, y, 170, 40, "F");

    doc.setTextColor(31, 41, 55);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("RECOMENDAÇÃO IA:", 25, y + 10);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const solutionLines = doc.splitTextToSize(
      clientData.recommendedSolution,
      160
    );
    doc.text(solutionLines, 25, y + 18);
  }

  private static addTimelineAndInvestment(doc: jsPDF, clientData: ClientData) {
    let y = 50;

    // Timeline de implementação
    doc.setTextColor(31, 41, 55);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("CRONOGRAMA DE IMPLEMENTAÇÃO", 20, y);
    y += 15;

    const timeline = [
      { phase: "Semana 1-2", task: "Análise detalhada e planeamento" },
      { phase: "Semana 3-6", task: "Desenvolvimento e configuração" },
      { phase: "Semana 7-8", task: "Testes e formação da equipa" },
      { phase: "Semana 9", task: "Go-live e suporte inicial" },
    ];

    timeline.forEach((item, index) => {
      doc.setFillColor(37, 99, 235, 0.1);
      doc.rect(20, y, 170, 12, "F");

      doc.setTextColor(37, 99, 235);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text(item.phase, 25, y + 8);

      doc.setTextColor(31, 41, 55);
      doc.setFont("helvetica", "normal");
      doc.text(item.task, 65, y + 8);

      y += 15;
    });
  }

  static async savePDF(pdfBuffer: Buffer, filename: string): Promise<string> {
    const uploadsDir = path.join(process.cwd(), "uploads");

    // Criar diretório se não existir
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, filename);
    fs.writeFileSync(filePath, pdfBuffer);

    return filePath;
  }

  static getPublicURL(filename: string): string {
    return `/uploads/${filename}`;
  }
}
