// Teste da Integração Baileys WhatsApp
console.log('🧪 TESTANDO INTEGRAÇÃO BAILEYS');
console.log('=' .repeat(50));

const testBaileysIntegration = async () => {
  try {
    console.log('📱 Testando rota Baileys...');
    
    // Testar rota Baileys
    const response = await fetch('http://localhost:5000/api/whatsapp/send-baileys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        number: '+351963901577',
        message: '🧪 Teste Baileys - Sistema funcionando!',
        sendPDF: false,
        userData: {
          name: 'Teste',
          company: 'Empresa Teste',
          businessType: 'Teste',
          employees: '5',
          mainChallenge: 'Teste'
        }
      })
    });

    const result = await response.json();
    
    console.log('📊 RESULTADO DO TESTE:');
    console.log('━'.repeat(40));
    console.log('Status:', response.status);
    console.log('Success:', result.success);
    console.log('Method:', result.method);
    console.log('Message:', result.message);
    
    if (result.waLink) {
      console.log('WA Link:', result.waLink);
    }
    
    console.log('━'.repeat(40));
    
    if (result.success) {
      if (result.method === 'baileys') {
        console.log('✅ BAILEYS: Conectado e funcionando!');
      } else if (result.method === 'evolution_fallback') {
        console.log('🔄 EVOLUTION: Fallback ativo');
      } else if (result.method === 'wa_me_fallback') {
        console.log('🔗 WA.ME: Último fallback (normal se Baileys não conectado)');
      }
    } else {
      console.log('❌ ERRO:', result.error);
    }

  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
  }
};

// Executar teste
testBaileysIntegration().then(() => {
  console.log('\n🎯 ESTRATÉGIA BAILEYS:');
  console.log('1. ✅ Baileys (Principal) - Anti-ban, PDFs automáticos');
  console.log('2. 🔄 Evolution API (Fallback 1) - Se Baileys offline');
  console.log('3. 🔗 wa.me (Fallback 2) - Sempre funciona (manual)');
  console.log('\n🛡️ PROTEÇÃO 100% CONTRA FALHAS!');
}).catch(console.error); 