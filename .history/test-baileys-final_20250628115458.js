import { baileys } from './server/baileys-service.js';

async function testBaileys() {
  console.log("🧪 Testando Baileys WhatsApp...");
  
  // Inicializar
  await baileys.initialize();
  
  // Aguardar 10 segundos para conectar
  setTimeout(() => {
    console.log(`📊 Status da conexão: ${baileys.getConnectionStatus()}`);
    
    if (baileys.getConnectionStatus()) {
      console.log("✅ Baileys conectado! Pronto para enviar mensagens.");
    } else {
      console.log("❌ Baileys não conectado. Verifique o QR Code.");
    }
  }, 10000);
}

testBaileys().catch(console.error); 