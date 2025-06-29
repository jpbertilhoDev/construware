// Teste do Sistema Profissional IA Consultora
// Execute com: node test-professional-system.js

const userData = {
  name: "João Silva",
  company: "Silva Construções Lda.",
  businessType: "Construção",
  employees: "21-50 funcionários",
  mainChallenge: "Processos manuais demorados",
  currentSystem: "Excel e documentos",
  email: "joao@silvaconstrucoes.pt",
  whatsapp: "963901577",
};

console.log("🚀 TESTE DO SISTEMA PROFISSIONAL IA CONSULTORA");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("\n📋 DADOS DE TESTE:");
console.log("Nome:", userData.name);
console.log("Empresa:", userData.company);
console.log("Setor:", userData.businessType);
console.log("Funcionários:", userData.employees);
console.log("Desafio:", userData.mainChallenge);
console.log("Sistema Atual:", userData.currentSystem);

// Função para gerar mensagem profissional WhatsApp
function generateProfessionalWhatsAppMessage(userData) {
  const currentDate = new Date().toLocaleDateString("pt-PT");
  const currentTime = new Date().toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const savings = calculateROI(userData.businessType, userData.employees);
  const recommendation = generateRecommendation(userData);

  return `🏆 *CONSTRUWARE - ANÁLISE IA EMPRESARIAL*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👋 *Exmo(a). ${userData.name}*

Muito obrigado por confiar na nossa IA Consultora. Concluímos a análise personalizada da sua empresa e temos excelentes notícias para partilhar.

📋 *SUMÁRIO EXECUTIVO*
━━━━━━━━━━━━━━━━━━━━━━━

🏢 *Empresa:* ${userData.company}
📊 *Setor:* ${userData.businessType}
👥 *Dimensão:* ${userData.employees}
🎯 *Desafio Principal:* ${userData.mainChallenge}
💻 *Infraestrutura Atual:* ${userData.currentSystem}

💰 *POTENCIAL DE RETORNO*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*ECONOMIA ANUAL ESTIMADA: €${savings.toLocaleString()}*

Esta projeção baseia-se em:
✓ Automação de processos manuais
✓ Redução de erros operacionais
✓ Otimização de recursos humanos
✓ Integração de sistemas

🎯 *SOLUÇÃO RECOMENDADA*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${recommendation}

📁 *DOCUMENTAÇÃO COMPLETA*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Junto com esta mensagem, receberá:

📋 **Relatório Técnico Detalhado (PDF)**
   → Análise completa da sua infraestrutura
   → Plano de implementação faseado
   → ROI detalhado por módulo

📊 **Portfolio Construware (PDF)**
   → Casos de sucesso no seu setor
   → Testemunhos de clientes
   → Certificações e parcerias

💼 *PRÓXIMA FASE*
━━━━━━━━━━━━━━━━━━━━

Nossa equipa comercial entrará em contacto nas **próximas 24 horas** para:

1️⃣ *Demonstração Executiva* (30 min)
   → Sistema personalizado para o seu caso
   → Q&A com especialistas técnicos

2️⃣ *Análise Técnica On-Site*
   → Avaliação presencial da infraestrutura
   → Levantamento de requisitos específicos

3️⃣ *Proposta Comercial Formal*
   → Orçamento detalhado e transparente
   → Opções de financiamento empresarial

🚀 *CONTACTO IMEDIATO*
━━━━━━━━━━━━━━━━━━━━━━━━

*Equipa Comercial Construware:*
📞 +351 963 901 577 (WhatsApp Business)
📧 comercial@construware.pt
🌐 www.construware.pt/demonstracao

*Horário:* Segunda a Sexta, 09h00-18h00

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*Análise gerada em ${currentDate} às ${currentTime}*
*© ${new Date().getFullYear()} Construware, Lda. - Todos os direitos reservados*

*🔒 Esta análise é confidencial e destinada exclusivamente a ${userData.name}*`;
}

// Função para calcular ROI
function calculateROI(businessType, employees) {
  const employeeCount = parseInt(employees.split("-")[0]) || 1;
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

// Função para gerar recomendação
function generateRecommendation(userData) {
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

// Executar teste
console.log("\n💰 ECONOMIA ESTIMADA:");
const savings = calculateROI(userData.businessType, userData.employees);
console.log(`€${savings.toLocaleString()}/ano`);

console.log("\n🎯 RECOMENDAÇÃO:");
const recommendation = generateRecommendation(userData);
console.log(recommendation);

console.log("\n📱 MENSAGEM WHATSAPP PROFISSIONAL:");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
const professionalMessage = generateProfessionalWhatsAppMessage(userData);
console.log(professionalMessage);

console.log("\n✅ TESTE CONCLUÍDO COM SUCESSO!");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

// URL de teste wa.me
const testPhone = "351963901577";
const encodedMessage = encodeURIComponent(professionalMessage);
const testURL = `https://wa.me/${testPhone}?text=${encodedMessage}`;

console.log("\n🔗 URL DE TESTE (wa.me):");
console.log("Comprimento:", testURL.length);
console.log(
  "Válido:",
  testURL.length < 8192 ? "✅ SIM" : "❌ NÃO (muito longa)"
);

// Verificar se mensagem está bem formatada
console.log("\n📊 ANÁLISE DA MENSAGEM:");
console.log("Tamanho:", professionalMessage.length, "caracteres");
console.log("Linhas:", professionalMessage.split("\n").length);
console.log(
  "Emojis:",
  (
    professionalMessage.match(
      /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu
    ) || []
  ).length
);
console.log(
  "Formatação MD:",
  professionalMessage.includes("*") ? "✅ SIM" : "❌ NÃO"
);

console.log("\n🎯 PRÓXIMOS PASSOS RECOMENDADOS:");
console.log("1. ✅ Mensagem profissional criada");
console.log("2. ✅ Cálculo de ROI personalizado");
console.log("3. ✅ Recomendação específica por setor");
console.log("4. 🔄 Integrar com Evolution API");
console.log("5. 🔄 Gerar PDFs com Puppeteer");
console.log("6. 🔄 Sistema de follow-up automático");

console.log("\n🏆 SISTEMA PROFISSIONAL IMPLEMENTADO!");
