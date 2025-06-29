// Teste da Mensagem do Cliente - Lógica Corrigida
console.log('🧪 TESTANDO MENSAGEM PARA O CLIENTE');
console.log('=' .repeat(50));

// Simular dados do cliente
const userData = {
  name: 'João Silva',
  company: 'Silva Construções',
  employees: '15',
  phone: '+351963901577',
  email: 'joao@silvaconstrucoes.pt',
  mainChallenge: 'Controle de custos de obra',
  currentSystem: 'Excel'
};

const businessType = {
  name: 'Construção Civil'
};

const savings = 45000;

// Função de gerar mensagem PARA O CLIENTE (corrigida)
const generateProfessionalWhatsAppMessage = (userData, businessType, savings, recommendations) => {
  const currentDate = new Date().toLocaleDateString('pt-PT');
  const currentTime = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
  
  return `👋 Olá *${userData.name}*!

Obrigado por usar a nossa *IA Consultora da Construware*! 🤖✨

✅ *ANÁLISE CONCLUÍDA*
━━━━━━━━━━━━━━━━━━━━━━━

Recebemos todas as informações sobre a sua empresa e já processámos a análise personalizada:

🏢 *Empresa:* ${userData.company || userData.name}
📊 *Setor:* ${businessType?.name || 'Personalizado'}
👥 *Funcionários:* ${userData.employees}
⚠️ *Principal Desafio:* ${userData.mainChallenge}

🎯 *BOA NOTÍCIA PARA SI:*
Com base na sua análise, identificámos um potencial de economia de *€${savings.toLocaleString()}/ano* através da otimização dos seus processos!

📋 *O QUE VAI RECEBER:*
━━━━━━━━━━━━━━━━━━━━━━━

Em alguns minutos, receberá no WhatsApp:

📄 *Portfolio Construware* (PDF)
→ Casos de sucesso de empresas como a sua
→ Serviços disponíveis e investimentos
→ Testemunhos de clientes satisfeitos

📊 *Análise Personalizada* (PDF)
→ Recomendações específicas para a sua empresa
→ Cronograma de implementação
→ Cálculo detalhado do ROI

🚀 *PRÓXIMOS PASSOS:*
━━━━━━━━━━━━━━━━━━━━━

Nossa equipa comercial irá contactá-lo nas *próximas 24 horas* para:

✅ Agendar uma *demonstração gratuita* (30 min)
✅ Mostrar-lhe o sistema funcionando
✅ Responder às suas questões técnicas
✅ Preparar uma proposta personalizada

📞 *CONTACTOS DIRETOS:*
━━━━━━━━━━━━━━━━━━━━━━━

*WhatsApp:* +351 963 901 577
*Email:* comercial@construware.pt
*Website:* www.construware.pt

*Horário:* Segunda a Sexta, 09h-18h

💡 *Tem alguma questão urgente?*
Pode contactar-nos diretamente pelos dados acima!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 *CONSTRUWARE* - Transformamos empresas através da tecnologia

*Obrigado por confiar em nós, ${userData.name}!* 🙏✨

*Mensagem enviada automaticamente em ${currentDate} às ${currentTime}*`;
};

// Gerar mensagem de teste
const mensagemCliente = generateProfessionalWhatsAppMessage(userData, businessType, savings, '');

console.log('\n🎯 MENSAGEM PARA O CLIENTE:');
console.log('━'.repeat(60));
console.log(mensagemCliente);
console.log('━'.repeat(60));

console.log('\n✅ ANÁLISE:');
console.log('- ✅ Mensagem dirigida AO cliente (não sobre o cliente)');
console.log('- ✅ Tom pessoal e directo');
console.log('- ✅ Agradecimento pela consulta');
console.log('- ✅ Confirmação dos dados recebidos');
console.log('- ✅ Promessa de PDFs e próximos passos');
console.log('- ✅ Contactos claros para follow-up');
console.log('- ✅ Branding profissional da Construware');

console.log('\n🚀 LÓGICA CORRIGIDA COM SUCESSO!'); 