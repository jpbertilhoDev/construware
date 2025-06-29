// Test Evolution API Integration - Construware IA
// Este script testa a integração da Evolution API v2

const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Dados de teste (número fictício para teste)
const testData = {
  nome: "João Silva (Teste)",
  telefone: "+351 963 901 570", // Número de teste - SUBSTITUA pelo seu número real
  setor: "Restaurante",
  funcionarios: "6-20 funcionários",
  desafio: "Produtividade da equipa",
  sistemaAtual: "Não tem sistema",
  economia: 25000,
  recomendacao: "Sistema Desktop + App Mobile para gestão e delivery",
  email: "teste@construware.pt",
};

async function testEvolutionAPIIntegration() {
  console.log("🧪 Testando integração Evolution API v2...\n");

  try {
    // 1. Verificar se servidor está rodando
    console.log("1️⃣ Verificando servidor Construware...");
    const serverCheck = await axios.get(`${BASE_URL}/api/whatsapp/status`);
    console.log("✅ Servidor rodando:", serverCheck.status === 200);

    // 2. Verificar status da Evolution API
    console.log("\n2️⃣ Verificando status Evolution API...");
    const statusResponse = await axios.get(`${BASE_URL}/api/whatsapp/status`);
    console.log("📊 Status:", statusResponse.data);

    if (statusResponse.data.connected) {
      console.log("✅ WhatsApp conectado via Evolution API!");
    } else {
      console.log("⚠️ WhatsApp não conectado - usará fallback wa.me");
      if (statusResponse.data.qrCode) {
        console.log("📱 QR Code disponível para escaneamento");
      }
    }

    // 3. Testar envio de mensagem
    console.log("\n3️⃣ Testando envio de mensagem...");
    console.log("📤 Dados do teste:", testData);

    const sendResponse = await axios.post(
      `${BASE_URL}/api/whatsapp/send`,
      testData
    );

    if (sendResponse.data.success) {
      console.log("\n✅ SUCESSO! Mensagem processada");
      console.log(`📱 Método usado: ${sendResponse.data.metodo}`);
      console.log(`📞 Número formatado: ${sendResponse.data.numeroFormatado}`);
      console.log(`💰 Custo: ${sendResponse.data.custo}`);
      console.log(`🕐 Timestamp: ${sendResponse.data.timestamp}`);

      if (sendResponse.data.messageId) {
        console.log(`📨 Message ID: ${sendResponse.data.messageId}`);
      }

      if (sendResponse.data.whatsappUrl) {
        console.log(
          `🔗 WhatsApp URL (fallback): ${sendResponse.data.whatsappUrl.substring(
            0,
            100
          )}...`
        );
      }

      console.log("\n🎉 TESTE CONCLUÍDO COM SUCESSO!");

      if (sendResponse.data.metodo === "evolution") {
        console.log(
          "💚 Evolution API funcionando perfeitamente - envio automático!"
        );
      } else {
        console.log("💛 Fallback wa.me funcionando - método manual preparado!");
      }
    } else {
      console.log("\n❌ ERRO no envio:", sendResponse.data.error);
    }
  } catch (error) {
    console.error("\n❌ ERRO no teste:", error.message);

    if (error.response) {
      console.error("📄 Detalhes do erro:", error.response.data);
    }

    if (error.code === "ECONNREFUSED") {
      console.error("🔥 SERVIDOR NÃO ESTÁ RODANDO!");
      console.log("💡 Execute: npm run dev");
    }
  }
}

// Executar teste
testEvolutionAPIIntegration()
  .then(() => {
    console.log("\n🏁 Teste finalizado.");
  })
  .catch((error) => {
    console.error("💥 Erro fatal:", error.message);
  });

module.exports = { testEvolutionAPIIntegration };
