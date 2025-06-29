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

  const httpServer = createServer(app);

  return httpServer;
}
