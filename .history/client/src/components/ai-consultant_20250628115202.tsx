import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Loader2,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Mail,
  Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

interface Message {
  id: string;
  type: 'ai' | 'user';
  content: string;
  timestamp: Date;
  options?: string[];
}

interface UserData {
  name?: string;
  company?: string;
  businessType?: string;
  employees?: string;
  currentSystem?: string;
  mainChallenge?: string;
  budget?: string;
  timeline?: string;
  email?: string;
  whatsapp?: string;
}

const businessTypes = [
  { id: 'construction', name: 'Construção Civil', emoji: '🏗️' },
  { id: 'consulting', name: 'Consultoria', emoji: '💼' },
  { id: 'ecommerce', name: 'E-commerce', emoji: '🛒' },
  { id: 'restaurant', name: 'Restaurante', emoji: '🍽️' },
  { id: 'services', name: 'Serviços', emoji: '⚙️' },
  { id: 'other', name: 'Outro', emoji: '🏢' }
];

const employeeRanges = [
  { id: '1-5', name: '1-5 funcionários' },
  { id: '6-20', name: '6-20 funcionários' },
  { id: '21-50', name: '21-50 funcionários' },
  { id: '51-100', name: '51-100 funcionários' },
  { id: '100+', name: 'Mais de 100 funcionários' }
];

const challenges = [
  { id: 'organization', name: 'Organização e processos' },
  { id: 'communication', name: 'Comunicação interna' },
  { id: 'productivity', name: 'Produtividade da equipa' },
  { id: 'costs', name: 'Controlo de custos' },
  { id: 'growth', name: 'Gestão do crescimento' },
  { id: 'automation', name: 'Automação de tarefas' }
];

export function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState<UserData>({});
  const [inputValue, setInputValue] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'whatsapp' | 'both'>('email');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Configuração EmailJS (substituir pelos seus IDs reais)
  const EMAIL_SERVICE_ID = 'service_construware';
  const EMAIL_TEMPLATE_ID = 'template_relatorio';
  const EMAIL_PUBLIC_KEY = 'your_public_key_here';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, type: 'ai' | 'user', options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleUserResponse = (response: string, data?: Partial<UserData>) => {
    addMessage(response, 'user');
    
    if (data) {
      setUserData(prev => {
        const newData = { ...prev, ...data };
        console.log('🔄 UserData updated:', newData);
        return newData;
      });
    }

    // Aguardar um tick para garantir que o estado foi atualizado antes de continuar
    setTimeout(() => {
      simulateTyping(() => {
        nextStep(response, data);
      });
    }, 50);
  };

  const nextStep = (userResponse?: string, data?: Partial<UserData>) => {
    const step = currentStep + 1;
    setCurrentStep(step);

    switch (step) {
      case 1:
        addMessage(
          "Olá! 👋 Sou a assistente IA da Construware. Vou ajudá-lo a descobrir como podemos otimizar o seu negócio.\n\nPara começar, qual é o seu nome?",
          'ai'
        );
        break;

      case 2:
        addMessage(
          `Prazer em conhecê-lo, ${userData.name}! 🙂\n\nQue tipo de negócio tem?`,
          'ai',
          businessTypes.map(bt => `${bt.emoji} ${bt.name}`)
        );
        break;

      case 3:
        const businessType = businessTypes.find(bt => userResponse?.includes(bt.name));
        addMessage(
          `Excelente! ${businessType?.emoji} Trabalhar no setor ${businessType?.name.toLowerCase()} é desafiante.\n\nQuantos funcionários tem a sua empresa?`,
          'ai',
          employeeRanges.map(er => er.name)
        );
        break;

      case 4:
        addMessage(
          `Perfeito! Com essa dimensão, há várias oportunidades de otimização.\n\nQual é o principal desafio que enfrenta na gestão do negócio?`,
          'ai',
          challenges.map(ch => ch.name)
        );
        break;

      case 5:
        addMessage(
          `Compreendo perfeitamente. Esse é um desafio comum que resolvemos frequentemente.\n\nAtualmente usa algum sistema de gestão? (pode escrever "não" se não usar)`,
          'ai'
        );
        break;

      case 6:
        addMessage(
          `Perfeito! Como prefere receber o seu relatório personalizado?`,
          'ai',
          [
            '📧 Email apenas',
            '📱 WhatsApp apenas', 
            '📧📱 Email + WhatsApp'
          ]
        );
        break;

      case 7:
        if (deliveryMethod === 'email' || deliveryMethod === 'both') {
          addMessage(
            `Qual é o seu email?`,
            'ai'
          );
        } else if (deliveryMethod === 'whatsapp') {
          addMessage(
            `Perfeito! Agora preciso do seu número de WhatsApp.\n\nQual é o seu número? (Formato: +351 9XXXXXXXX)`,
            'ai'
          );
        }
        break;

      case 8:
        if (deliveryMethod === 'both' && !userData.whatsapp) {
          addMessage(
            `Agora o seu WhatsApp: (formato: +351 9XXXXXXXX)`,
            'ai'
          );
        } else {
          // Confirmar recebimento do WhatsApp se foi só WhatsApp
          if (deliveryMethod === 'whatsapp' && userData.whatsapp) {
            addMessage(
              `✅ **WhatsApp confirmado:** ${userData.whatsapp}\n\nProcessando a sua análise personalizada...`,
              'ai'
            );
          }
          generateReport();
        }
        break;

      case 9:
        generateReport();
        break;

      default:
        break;
    }
  };

  const generateReport = () => {
    const businessType = businessTypes.find(bt => 
      Object.values(userData).some(value => 
        typeof value === 'string' && value.includes(bt.name)
      )
    );

    const employeeRange = employeeRanges.find(er =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(er.name)
      )
    );

    const challenge = challenges.find(ch =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(ch.name)
      )
    );

    const savings = calculateSavings(employeeRange?.id || '1-5');
    
    simulateTyping(() => {
      // Gerar recomendações personalizadas baseadas no perfil
      const recommendations = generatePersonalizedRecommendations(businessType, employeeRange, challenge);
      
      // Aguardar um pouco para garantir que userData foi atualizado
      setTimeout(() => {
        let deliveryMessage = '';
        
        console.log('📊 Generating delivery message with userData:', userData);
        
        if (deliveryMethod === 'email') {
          deliveryMessage = `📧 **Enviando relatório detalhado para ${userData.email}...**`;
        } else if (deliveryMethod === 'whatsapp') {
          const phoneNumber = userData.whatsapp ? 
            userData.whatsapp.replace(/^\+?351\s*/, '') : 
            'número não encontrado';
          deliveryMessage = `📱 **Preparando relatório para o seu WhatsApp +351 ${phoneNumber}...**`;
        } else if (deliveryMethod === 'both') {
          deliveryMessage = `📧📱 **Enviando relatório para email e WhatsApp...**`;
        }
        
        addMessage(
          `✅ **Análise Completa!**\n\n📊 **Resumo do seu perfil:**\n• Setor: ${businessType?.name}\n• Funcionários: ${employeeRange?.name}\n• Principal desafio: ${challenge?.name}\n• Sistema atual: ${userData.currentSystem || 'Não especificado'}\n\n💰 **Economia estimada:** €${savings.toLocaleString()}/ano\n\n🎯 **Recomendação:** ${recommendations}\n\n${deliveryMessage}`,
          'ai'
        );
        
        setTimeout(() => {
          deliverReport();
        }, 2000);
      }, 300); // Pequeno delay para garantir que o estado foi atualizado
    }, 2000);
  };

  const calculateSavings = (employeeRange: string): number => {
    const baseSavings = {
      '1-5': 8000,
      '6-20': 25000,
      '21-50': 60000,
      '51-100': 120000,
      '100+': 250000
    };
    return baseSavings[employeeRange as keyof typeof baseSavings] || 8000;
  };

  const generatePersonalizedRecommendations = (businessType: any, employeeRange: any, challenge: any): string => {
    const systemRecommendations = {
      'construction': 'Sistema Web com gestão de obras, orçamentos e equipamentos',
      'consulting': 'Sistema Web com CRM, gestão de projetos e faturação',
      'ecommerce': 'Plataforma Web + App Mobile para vendas online',
      'restaurant': 'Sistema Desktop + App Mobile para gestão e delivery',
      'services': 'Sistema Web com agendamentos e gestão de clientes',
      'other': 'Sistema personalizado baseado nas suas necessidades específicas'
    };

    const sizeRecommendations = {
      '1-5': 'Solução compacta e eficiente',
      '6-20': 'Sistema escalável com módulos integrados',
      '21-50': 'Plataforma robusta com dashboards executivos',
      '51-100': 'Solução empresarial com múltiplos departamentos',
      '100+': 'Arquitetura enterprise com alta disponibilidade'
    };

    const baseRecommendation = systemRecommendations[businessType?.id || 'other'];
    const sizeRecommendation = sizeRecommendations[employeeRange?.id || '1-5'];
    
    return `${baseRecommendation} - ${sizeRecommendation}`;
  };

  const deliverReport = async () => {
    console.log('🚀 DeliverReport - UserData:', userData);
    console.log('🚀 DeliverReport - DeliveryMethod:', deliveryMethod);
    
    // Sempre notificar a equipa
    notifyTeam();
    
    // Entregar conforme escolha do cliente
    switch (deliveryMethod) {
      case 'email':
        await sendEmailReport();
        break;
      case 'whatsapp':
        console.log('📱 Enviando para WhatsApp:', userData.whatsapp);
        simulateTyping(() => {
          addMessage(
            `✅ **Preparando envio para WhatsApp...**\n\n📱 Abrindo WhatsApp com o seu relatório personalizado`,
            'ai'
          );
          
          setTimeout(() => {
            sendWhatsAppToClient();
          }, 2000);
        }, 1000);
        break;
      case 'both':
        await sendEmailReport();
        // O WhatsApp será enviado após o email (já implementado em sendEmailReport)
        break;
    }
  };

  const sendEmailReport = async () => {
    if (!userData.email) return;
    
    const emailContent = generateDetailedEmailReport();
    
    // Por agora, usar método de fallback que sempre funciona
    // TODO: Configurar EmailJS quando tiver as credenciais
    const fallbackEmailMethod = () => {
      // Criar link mailto com relatório pré-preenchido
      const subject = encodeURIComponent(`Relatório IA Personalizado - ${userData.name}`);
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:${userData.email}?subject=${subject}&body=${body}`;
      
      // Abrir cliente de email padrão
      window.open(mailtoLink);
      
      simulateTyping(() => {
        addMessage(
          `✅ **Cliente de email aberto!**\n\n📧 Relatório pré-preenchido para: ${userData.email}\n👆 Basta clicar em "Enviar" no seu email\n\n${userData.whatsapp ? `📱 Enviando também para o WhatsApp...` : ''}`,
          'ai'
        );
        
        if (userData.whatsapp) {
          setTimeout(() => {
            sendWhatsAppToClient();
          }, 2000);
        } else {
          setTimeout(() => {
            finalMessage();
          }, 2000);
        }
      }, 1000);
    };

    // Tentar EmailJS primeiro, usar fallback se falhar
    try {
      if (EMAIL_PUBLIC_KEY === 'your_public_key_here') {
        // Usar método fallback se não estiver configurado
        fallbackEmailMethod();
        return;
      }

      // Envio real usando EmailJS (quando configurado)
      const templateParams = {
        to_email: userData.email,
        to_name: userData.name,
        subject: `Relatório IA Personalizado - ${userData.name}`,
        message: emailContent,
        from_name: 'Construware IA',
        reply_to: 'contato@construware.pt'
      };

      emailjs.init(EMAIL_PUBLIC_KEY);
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams);
      
      simulateTyping(() => {
        addMessage(
          `✅ **Email enviado automaticamente!**\n\n📧 Relatório enviado para: ${userData.email}\n\n${userData.whatsapp ? `📱 Enviando também para o WhatsApp...` : ''}`,
          'ai'
        );
        
        if (userData.whatsapp) {
          setTimeout(() => {
            sendWhatsAppToClient();
          }, 2000);
        } else {
          setTimeout(() => {
            finalMessage();
          }, 2000);
        }
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      fallbackEmailMethod();
    }
  };

  const generateDetailedEmailReport = (): string => {
    const businessType = businessTypes.find(bt => 
      Object.values(userData).some(value => 
        typeof value === 'string' && value.includes(bt.name)
      )
    );

    const employeeRange = employeeRanges.find(er =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(er.name)
      )
    );

    const challenge = challenges.find(ch =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(ch.name)
      )
    );

    const savings = calculateSavings(employeeRange?.id || '1-5');
    const recommendation = generatePersonalizedRecommendations(businessType, employeeRange, challenge);

    return `
🤖 RELATÓRIO DE ANÁLISE IA - CONSTRUWARE
═══════════════════════════════════════════

DADOS DO CLIENTE:
━━━━━━━━━━━━━━━━━
Nome: ${userData.name}
Email: ${userData.email}
${userData.whatsapp ? `WhatsApp: ${userData.whatsapp}` : ''}
Data da Análise: ${new Date().toLocaleDateString('pt-PT')}

PERFIL EMPRESARIAL:
━━━━━━━━━━━━━━━━━━━
✦ Setor: ${businessType?.name}
✦ Dimensão: ${employeeRange?.name}
✦ Principal Desafio: ${challenge?.name}
✦ Sistema Atual: ${userData.currentSystem}

ANÁLISE IA PERSONALIZADA:
━━━━━━━━━━━━━━━━━━━━━━━━━━
Com base no perfil da sua empresa, identificámos oportunidades significativas de otimização.

🎯 RECOMENDAÇÃO PRINCIPAL:
${recommendation}

💰 ECONOMIA ESTIMADA:
€${savings.toLocaleString()}/ano

Esta estimativa baseia-se em:
• Redução de tempo em processos manuais
• Automação de tarefas repetitivas  
• Melhoria na gestão de dados
• Otimização de recursos humanos

PRÓXIMOS PASSOS:
━━━━━━━━━━━━━━━━━━
1. 📅 Demonstração personalizada (30 min)
   → Mostramos o sistema adaptado ao seu caso

2. 🔍 Análise técnica detalhada
   → Avaliação completa das suas necessidades

3. 💼 Proposta comercial personalizada
   → Orçamento ajustado ao seu orçamento

4. 🚀 Implementação e formação
   → Suporte completo durante todo o processo

CONTACTOS:
━━━━━━━━━━━
📞 WhatsApp: +351 963 901 577
📧 Email: contato@construware.pt
🌐 Website: www.construware.pt

⚡ RESPOSTA GARANTIDA EM 24H ⚡

Obrigado por confiar na nossa IA!
Equipa Construware
    `;
  };

  const notifyTeamWhatsAppRequest = async (phone: string, clientName: string) => {
    const businessType = businessTypes.find(bt => 
      Object.values(userData).some(value => 
        typeof value === 'string' && value.includes(bt.name)
      )
    );

    const employeeRange = employeeRanges.find(er =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(er.name)
      )
    );

    const teamNotification = `🤖 *LEAD WHATSAPP - IA CONSULTORA*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 *CLIENTE PREFERIU WHATSAPP:*
👤 Nome: *${clientName}*
📞 WhatsApp: *+${phone}*
🏢 Setor: *${businessType?.name || 'Não informado'}*
👥 Funcionários: *${userData.employees || 'Não informado'}*
⚠️ Desafio: *${userData.mainChallenge || 'Não informado'}*
💻 Sistema Atual: *${userData.currentSystem || 'Não informado'}*

💰 *ECONOMIA ESTIMADA:* €${calculateSavings(employeeRange?.id || '1-5').toLocaleString()}/ano

🎯 *PRIORIDADE:* ${calculatePriority()}
📅 *Data/Hora:* ${new Date().toLocaleString('pt-PT')}

✅ *AÇÕES IMEDIATAS:*
1. Cliente recebeu relatório completo via WhatsApp
2. Contactar em 24h para demonstração
3. Preparar proposta personalizada
4. Agendar reunião comercial

🚨 *LEAD QUALIFICADO - SEGUIMENTO PRIORITÁRIO!*`;

    try {
      const encodedNotification = encodeURIComponent(teamNotification);
      // Enviar notificação para equipa via WhatsApp
      const teamWhatsApp = `https://wa.me/351963901577?text=${encodedNotification}`;
      
      // Abrir numa janela pequena que se fecha automaticamente
      const popup = window.open(teamWhatsApp, 'team_notification', 'width=400,height=300');
      setTimeout(() => {
        if (popup) popup.close();
      }, 2000);
      
    } catch (error) {
      console.log('Notificação da equipa falhou');
    }
  };

  const sendWhatsAppToClient = async () => {
    console.log('📱 SendWhatsAppToClient called with userData:', userData);
    
    if (!userData.whatsapp) {
      console.error('❌ WhatsApp number not found in userData');
      addMessage(
        `❌ **Erro**: Número de WhatsApp não encontrado.\n\nPor favor, reinicie o processo ou contacte-nos diretamente:\n📞 +351 963 901 577`,
        'ai'
      );
      return;
    }
    
    console.log('📱 WhatsApp number found:', userData.whatsapp);

    // Tentar Evolution API primeiro, fallback wa.me se falhar
    try {
      console.log('🚀 Tentando envio via Evolution API...');
      
      // Preparar dados para Evolution API
      const businessType = businessTypes.find(bt => 
        Object.values(userData).some(value => 
          typeof value === 'string' && value.includes(bt.name)
        )
      );

      const employeeRange = employeeRanges.find(er =>
        Object.values(userData).some(value =>
          typeof value === 'string' && value.includes(er.name)
        )
      );

      const savings = calculateSavings(employeeRange?.id || '1-5');
      const recommendations = generatePersonalizedRecommendations(businessType, employeeRange, null);

      const payload = {
        nome: userData.name,
        telefone: userData.whatsapp,
        setor: businessType?.name,
        funcionarios: userData.employees,
        desafio: userData.mainChallenge,
        sistemaAtual: userData.currentSystem,
        economia: savings,
        recomendacao: recommendations,
        email: userData.email
      };

      console.log('📤 Payload para Evolution API:', payload);

      // Chamar API Baileys (anti-ban) com fallback Evolution
      const response = await fetch('/api/whatsapp/send-baileys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          number: userData.whatsapp,
          message: generateProfessionalWhatsAppMessage(userData, businessType, savings, recommendations),
          sendPDF: true, // Ativar envio automático de PDFs
          userData: {
            ...userData,
            businessType: businessType?.name,
            estimatedSavings: savings,
            recommendations: recommendations
          }
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log(`✅ Sucesso via ${result.method}:`, result);
        
        if (result.method === 'baileys') {
          // Enviado automaticamente via Baileys (anti-ban)
          addMessage(
            `🎉 **Mensagem enviada com sucesso!**\n\n📱 **WhatsApp:** ${userData.whatsapp}\n🛡️ **Método:** Baileys Anti-Ban (Directo)\n📱 **Status:** Entregue automaticamente\n\n✅ **O QUE FOI ENVIADO:**\n• Mensagem de agradecimento personalizada\n• Portfolio Construware (PDF)\n• Análise personalizada (PDF)\n\n📱 **Verifique seu WhatsApp agora!** 🚀\nTodos os materiais foram enviados automaticamente.\n\n⚡ **PRÓXIMOS PASSOS:**\nNossa equipa comercial entrará em contacto nas próximas 24h para demonstração gratuita!`,
            'ai'
          );
        } else if (result.method === 'evolution_fallback') {
          // Fallback Evolution API
          addMessage(
            `✅ **Mensagem enviada (Fallback)!**\n\n📱 **Número:** ${userData.whatsapp}\n🔄 **Método:** Evolution API (Fallback)\n📨 **Message ID:** ${result.messageId || 'N/A'}\n\n📱 **Verifique seu WhatsApp** - a mensagem foi enviada!\n\n⚡ **Nossa equipa comercial foi notificada e entrará em contacto em 24h!**`,
            'ai'
          );
        } else if (result.method === 'wa_me_fallback' && result.waLink) {
          // Último fallback wa.me
          window.open(result.waLink, '_blank');
          
          addMessage(
            `✅ **WhatsApp aberto!**\n\n📱 **Número:** ${userData.whatsapp}\n🔗 **Método:** wa.me (Manual)\n📄 **Mensagem:** Pré-preenchida com análise completa\n\n🎯 **COMO PROCEDER:**\n\n1️⃣ O WhatsApp abriu numa nova janela\n2️⃣ Clique **"Enviar"** para receber todo o material\n3️⃣ Aguarde pelos PDFs nos próximos minutos\n\n💼 **RECEBERÁ:**\n• Portfolio da empresa (PDF)\n• Análise personalizada (PDF)\n• Contacto da equipa comercial em 24h`,
            'ai'
          );
        }
        
        // Notificar equipa sempre
        await notifyTeamWhatsAppRequest(userData.whatsapp, userData.name || 'Cliente');
        
        setTimeout(() => {
          finalMessage();
        }, 3000);
        
        return;
      } else {
        throw new Error(result.error || 'Falha na Evolution API');
      }

    } catch (evolutionError: any) {
      console.error('❌ Evolution API falhou:', evolutionError.message);
      console.log('🔄 Usando método wa.me como fallback...');
      
      // Fallback completo para método wa.me original
      await sendWhatsAppFallback();
    }
  };

  // Método wa.me original como fallback
  const sendWhatsAppFallback = async () => {
    console.log('📱 Executando fallback wa.me para:', userData.whatsapp);

    // Validar e formatar número português (formato WhatsApp Business API compliant)
    const cleanPhone = userData.whatsapp.replace(/\D/g, '');
    let formattedPhone = '';
    
    if (cleanPhone.startsWith('351') && cleanPhone.length === 12) {
      formattedPhone = cleanPhone; // Já tem código do país completo
    } else if (cleanPhone.startsWith('9') && cleanPhone.length === 9) {
      formattedPhone = '351' + cleanPhone; // Adicionar código do país português
    } else if (cleanPhone.startsWith('2') && cleanPhone.length === 9) {
      formattedPhone = '351' + cleanPhone; // Fixo português também válido
    } else {
      addMessage(
        `❌ **Número inválido**: ${userData.whatsapp}\n\n✅ **Formatos aceites para Portugal:**\n• +351 9XXXXXXXX (telemóvel)\n• +351 2XXXXXXXX (fixo)\n• 9XXXXXXXX\n• 2XXXXXXXX\n\n📞 **Exemplo:** +351 963 901 577\n\nPor favor, reinicie o processo com o número correto.`,
        'ai'
      );
      return;
    }
    
    console.log('📱 Formatted phone number:', formattedPhone);
    
    // Buscar dados específicos para personalização
    const businessTypeInfo = businessTypes.find(bt => 
      Object.values(userData).some(value => 
        typeof value === 'string' && value.includes(bt.name)
      )
    );

    const employeeRange = employeeRanges.find(er =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(er.name)
      )
    );

    const challenge = challenges.find(ch =>
      Object.values(userData).some(value =>
        typeof value === 'string' && value.includes(ch.name)
      )
    );

    const savings = calculateSavings(employeeRange?.id || '1-5');
    const recommendations = generatePersonalizedRecommendations(businessTypeInfo, employeeRange, challenge);

    // Gerar mensagem profissional empresarial
    const professionalMessage = generateProfessionalWhatsAppMessage(userData, businessTypeInfo, savings, recommendations);

    // Envio inteligente: método manual confiável + notificação da equipa
    const encodedMessage = encodeURIComponent(professionalMessage);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    // Sempre notificar a equipa sobre o interesse em WhatsApp
    await notifyTeamWhatsAppRequest(formattedPhone, userData.name || 'Cliente');
    
    // Abrir WhatsApp do cliente
    window.open(whatsappUrl, '_blank');
    
    simulateTyping(() => {
      addMessage(
        `✅ **Relatório empresarial enviado!**\n\n📱 **WhatsApp aberto para:** +${formattedPhone}\n📄 **Mensagem profissional** pré-preenchida\n\n🎯 **COMO PROCEDER:**\n\n1️⃣ Clique **"Enviar"** no WhatsApp que acabou de abrir\n2️⃣ Receberá **PDF da marca** nos próximos minutos\n3️⃣ Nossa equipa comercial entrará em contacto em **24h**\n\n💼 **O QUE RECEBERÁ:**\n• Relatório personalizado com análise IA\n• Portfolio completo da Construware\n• Proposta comercial inicial\n• Demonstração gratuita agendada\n\n⚡ **GARANTIA:** Resposta profissional garantida em 24 horas!`,
        'ai'
      );
      
      setTimeout(() => {
        finalMessage();
      }, 3000);
    }, 1000);
  };

  // Função para gerar mensagem PARA O CLIENTE (automação)
  const generateProfessionalWhatsAppMessage = (userData: any, businessType: any, savings: number, recommendations: string): string => {
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

  const notifyTeam = () => {
    const businessType = businessTypes.find(bt => 
      Object.values(userData).some(value => 
        typeof value === 'string' && value.includes(bt.name)
      )
    );

    const teamReport = `🤖 *NOVO LEAD QUALIFICADO - IA CONSULTORA*

👤 *Cliente:* ${userData.name}
📧 *Email:* ${userData.email}
📱 *WhatsApp:* ${userData.whatsapp || 'Não informado'}
📊 *Setor:* ${businessType?.name}
👥 *Funcionários:* ${userData.employees}
⚠️ *Principal Desafio:* ${userData.mainChallenge}
💻 *Sistema Atual:* ${userData.currentSystem}

💰 *ECONOMIA ESTIMADA:* €${calculateSavings(userData.employees?.split(' ')[0] || '1-5').toLocaleString()}/ano

🎯 *PRIORIDADE:* ${calculatePriority()} 
🕒 *Qualificado em:* ${new Date().toLocaleString('pt-PT')}

✅ *PRÓXIMAS AÇÕES:*
1. Enviar email de follow-up personalizado
2. Agendar demonstração
3. Preparar proposta comercial

🎯 Cliente pré-qualificado pela IA - Contactar em 24h!`;

    const encodedMessage = encodeURIComponent(teamReport);
    window.open(`https://wa.me/351963901577?text=${encodedMessage}`, '_blank');
  };

  const calculatePriority = (): string => {
    const employeeCount = userData.employees?.split(' ')[0] || '1';
    const numEmployees = parseInt(employeeCount);
    
    if (numEmployees >= 51) return 'ALTA 🔥';
    if (numEmployees >= 21) return 'MÉDIA-ALTA 📈';
    if (numEmployees >= 6) return 'MÉDIA 📊';
    return 'STANDARD 📋';
  };

  const finalMessage = () => {
    const deliveredTo = [];
    
    if (deliveryMethod === 'email' || deliveryMethod === 'both') {
      deliveredTo.push(`📧 Email: ${userData.email}`);
    }
    
    if (deliveryMethod === 'whatsapp' || deliveryMethod === 'both') {
      deliveredTo.push(`📱 WhatsApp: ${userData.whatsapp}`);
    }

    addMessage(
      `🎉 **Processo concluído com sucesso!**\n\n✅ **Relatório enviado para:**\n${deliveredTo.join('\n')}\n\n⚡ **Nossa equipa entrará em contacto em até 24h** com:\n• Demonstração personalizada gratuita\n• Análise técnica detalhada  \n• Proposta comercial sob medida\n\n💬 **Contactos diretos:**\n📞 WhatsApp: +351 963 901 577\n📧 Email: contato@construware.pt\n\n**Obrigada por confiar na nossa IA!** 🚀✨`,
      'ai'
    );
  };

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = inputValue.trim();
    setInputValue('');

    switch (currentStep) {
      case 1:
        handleUserResponse(response, { name: response });
        break;
      case 5:
        handleUserResponse(response, { currentSystem: response });
        break;
      case 7:
        console.log('📞 Step 7 - DeliveryMethod:', deliveryMethod, 'Response:', response);
        if (deliveryMethod === 'email' || deliveryMethod === 'both') {
          handleUserResponse(response, { email: response });
        } else if (deliveryMethod === 'whatsapp') {
          console.log('📱 Saving WhatsApp number:', response);
          handleUserResponse(response, { whatsapp: response });
        }
        break;
      case 8:
        if (deliveryMethod === 'both' && !userData.whatsapp) {
          handleUserResponse(response, { whatsapp: response });
        }
        break;
    }
  };

  const initializeChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      simulateTyping(() => {
        nextStep();
      }, 500);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Button
          onClick={initializeChat}
          data-ai-button
          className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
        >
          <Bot className="w-6 h-6" />
        </Button>
        
        {/* Notification Badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-3 h-3 text-white" />
        </motion.div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md mx-auto"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
            >
              <Card className="bg-gray-900 border border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">IA Consultora</h3>
                      <p className="text-white/80 text-sm">Construware Assistant</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Messages */}
                <CardContent className="p-0 h-[60vh] max-h-[500px] overflow-y-auto bg-gray-950">
                  <div className="p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.type === 'ai' && (
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        
                        <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : ''}`}>
                          <div className={`p-3 rounded-2xl ${
                            message.type === 'ai' 
                              ? 'bg-white/5 border border-white/10 text-white' 
                              : 'bg-purple-500 text-white'
                          }`}>
                            <p className="whitespace-pre-line text-sm">{message.content}</p>
                          </div>
                          
                          {/* Options */}
                          {message.options && (
                            <div className="mt-3 space-y-2">
                              {message.options.map((option, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  className="w-full justify-start bg-white/[0.02] border-white/10 text-white/80 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-white text-sm h-auto py-2"
                                                                  onClick={() => {
                                  if (currentStep === 2) {
                                    const businessType = businessTypes.find(bt => option.includes(bt.name));
                                    handleUserResponse(option, { businessType: businessType?.name });
                                  } else if (currentStep === 3) {
                                    handleUserResponse(option, { employees: option });
                                  } else if (currentStep === 4) {
                                    handleUserResponse(option, { mainChallenge: option });
                                  } else if (currentStep === 6) {
                                    // Definir método de entrega
                                    let method = '';
                                    if (option.includes('Email apenas')) {
                                      method = 'email';
                                      setDeliveryMethod('email');
                                      console.log('📧 DeliveryMethod set to EMAIL');
                                    } else if (option.includes('WhatsApp apenas')) {
                                      method = 'whatsapp';
                                      setDeliveryMethod('whatsapp');
                                      console.log('📱 DeliveryMethod set to WHATSAPP');
                                    } else if (option.includes('Email + WhatsApp')) {
                                      method = 'both';
                                      setDeliveryMethod('both');
                                      console.log('📧📱 DeliveryMethod set to BOTH');
                                    }

                                    handleUserResponse(option);
                                  }
                                }}
                                >
                                  {option}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>

                        {message.type === 'user' && (
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>

                {/* Input */}
                {(currentStep === 1 || currentStep === 5 || currentStep === 7 || currentStep === 8) && !isTyping && (
                  <div className="p-4 bg-gray-900 border-t border-white/10">
                    <form onSubmit={handleTextInput} className="flex gap-2">
                      <input
                        type={
                          (currentStep === 7 && (deliveryMethod === 'email' || deliveryMethod === 'both')) ? 'email' :
                          (currentStep === 7 && deliveryMethod === 'whatsapp') || currentStep === 8 ? 'tel' :
                          'text'
                        }
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={
                          currentStep === 1 ? 'Digite seu nome...' :
                          currentStep === 5 ? 'Sistema atual ou "não"...' :
                          currentStep === 7 && (deliveryMethod === 'email' || deliveryMethod === 'both') ? 'Digite seu email...' :
                          currentStep === 7 && deliveryMethod === 'whatsapp' ? '+351 9XXXXXXXX' :
                          currentStep === 8 ? '+351 9XXXXXXXX' :
                          'Digite aqui...'
                        }
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50"
                        disabled={isTyping}
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="bg-purple-500 hover:bg-purple-600 text-white px-3"
                        disabled={isTyping || !inputValue.trim()}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                )}
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 