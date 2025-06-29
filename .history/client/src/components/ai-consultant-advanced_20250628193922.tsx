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
  Phone,
  Calendar,
  Video,
  Clock
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
  email?: string;
  whatsapp?: string;
  preferredMeetingPlatform?: 'google-meet' | 'teams' | 'phone' | 'email';
  meetingPreference?: string;
}

interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
  integrations: string[];
  security: string[];
}

const businessTypes = [
  { id: 'construction', name: 'Construção Civil', emoji: '🏗️' },
  { id: 'consulting', name: 'Consultoria', emoji: '💼' },
  { id: 'ecommerce', name: 'E-commerce', emoji: '🛒' },
  { id: 'restaurant', name: 'Restaurante', emoji: '🍽️' },
  { id: 'services', name: 'Serviços', emoji: '⚙️' },
  { id: 'healthcare', name: 'Saúde', emoji: '🏥' },
  { id: 'education', name: 'Educação', emoji: '🎓' },
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
  { id: 'automation', name: 'Automação de processos manuais', priority: 'high' },
  { id: 'data-management', name: 'Gestão e organização de dados', priority: 'high' },
  { id: 'communication', name: 'Comunicação interna eficiente', priority: 'medium' },
  { id: 'customer-management', name: 'Gestão de clientes/CRM', priority: 'high' },
  { id: 'cost-control', name: 'Controlo de custos operacionais', priority: 'high' },
  { id: 'scalability', name: 'Preparação para crescimento', priority: 'medium' },
  { id: 'security', name: 'Segurança e compliance', priority: 'high' },
  { id: 'integration', name: 'Integração de sistemas existentes', priority: 'medium' }
];

export function AIConsultantAdvanced() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for external trigger to open AI Consultant
  useEffect(() => {
    const handleOpenAIConsultant = () => {
      setIsOpen(true);
      if (messages.length === 0) {
        initializeChat();
      }
    };

    window.addEventListener('openAIConsultant', handleOpenAIConsultant);
    
    return () => {
      window.removeEventListener('openAIConsultant', handleOpenAIConsultant);
    };
  }, [messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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

  const generateAdvancedTechStack = (businessType: any, employeeRange: any, challenge: any): TechStack => {
    const baseTechStacks: Record<string, TechStack> = {
      'construction': {
        frontend: ['React.js + TypeScript', 'Next.js', 'Tailwind CSS', 'PWA'],
        backend: ['Node.js + Express', 'Python FastAPI', 'PostgreSQL', 'Redis'],
        database: ['PostgreSQL (Principal)', 'MongoDB (Documentos)', 'Redis (Cache)', 'AWS S3 (Files)'],
        tools: ['Docker', 'GitHub Actions', 'AWS/Azure', 'Monitoring (Sentry)'],
        integrations: ['WhatsApp Business API', 'Accounting Software', 'Payment Gateways', 'Email Marketing'],
        security: ['JWT Authentication', 'OAuth2', 'SSL/TLS', 'Data Encryption', 'GDPR Compliance']
      },
      'consulting': {
        frontend: ['Next.js', 'React.js + TypeScript', 'Material-UI', 'Responsive Design'],
        backend: ['Node.js + NestJS', 'GraphQL', 'Microservices', 'REST APIs'],
        database: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis'],
        tools: ['Docker + Kubernetes', 'CI/CD Pipeline', 'Testing Suite', 'Analytics'],
        integrations: ['Google Workspace', 'Microsoft 365', 'Zoom API', 'CRM Systems'],
        security: ['Multi-factor Auth', 'Role-based Access', 'API Security', 'Audit Logs']
      },
      'ecommerce': {
        frontend: ['Next.js', 'React.js', 'TypeScript', 'Mobile-first Design'],
        backend: ['Node.js + Express', 'Python Django', 'Microservices', 'Payment APIs'],
        database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
        tools: ['Docker', 'AWS/GCP', 'CDN', 'Performance Monitoring'],
        integrations: ['Stripe/PayPal', 'Shipping APIs', 'Inventory Systems', 'Marketing Tools'],
        security: ['PCI DSS Compliance', 'Fraud Detection', 'Secure Payments', 'Data Protection']
      },
      'healthcare': {
        frontend: ['React.js + TypeScript', 'Secure UI Components', 'Accessibility Features'],
        backend: ['Node.js', 'Python Flask', 'FHIR APIs', 'Secure Databases'],
        database: ['PostgreSQL (Encrypted)', 'MongoDB', 'Backup Systems'],
        tools: ['Docker', 'Compliance Tools', 'Audit Systems', 'Monitoring'],
        integrations: ['Electronic Health Records', 'Lab Systems', 'Appointment Systems'],
        security: ['HIPAA Compliance', 'End-to-end Encryption', 'Audit Trails', 'Access Controls']
      }
    };

    return baseTechStacks[businessType?.id] || baseTechStacks['construction'];
  };

  const generatePersonalizedRecommendations = (businessType: any, employeeRange: any, challenge: any, includeValues: boolean = false): string => {
    const savings = calculateAdvancedSavings(employeeRange?.id || '1-5', businessType?.id);
    
    const recommendations: Record<string, string> = {
      'construction': `🏗️ **CONSTRUÇÃO CIVIL**
• ✅ Obras sempre no prazo
• ✅ Custos controlados  
• ✅ Mais lucro garantido${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'consulting': `💼 **CONSULTORIA**
• ✅ Mais clientes automaticamente
• ✅ Vendas que nunca param
• ✅ Menos trabalho, mais lucro${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'ecommerce': `🛒 **E-COMMERCE**
• ✅ Vendas 24/7 automáticas
• ✅ Stock sempre controlado
• ✅ Clientes que voltam sempre${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'restaurant': `🍽️ **RESTAURANTE**
• ✅ Pedidos organizados
• ✅ Zero desperdício
• ✅ Clientes satisfeitos${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'services': `⚙️ **SERVIÇOS**
• ✅ Agenda sempre cheia
• ✅ Clientes satisfeitos
• ✅ Pagamentos rápidos${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'healthcare': `🏥 **SAÚDE**
• ✅ Consultas organizadas
• ✅ Pacientes satisfeitos
• ✅ Tudo digital e simples${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'education': `🎓 **EDUCAÇÃO**
• ✅ Alunos mais motivados
• ✅ Ensino mais eficaz
• ✅ Pais tranquilos${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`,

      'other': `🏢 **SEU NEGÓCIO**
• ✅ Processos automáticos
• ✅ Custos reduzidos
• ✅ Mais tempo livre${includeValues ? `\n💰 **Economia: €${savings.total.toLocaleString()}/ano**` : ''}`
    };

    return recommendations[businessType?.id] || recommendations['construction'];
  };

  const calculateAdvancedSavings = (employeeRange: string, businessType: string) => {
    const baseMultipliers = {
      '1-5': { operational: 5000, productivity: 8000, errorReduction: 3000 },
      '6-20': { operational: 15000, productivity: 25000, errorReduction: 10000 },
      '21-50': { operational: 35000, productivity: 60000, errorReduction: 25000 },
      '51-100': { operational: 70000, productivity: 120000, errorReduction: 50000 },
      '100+': { operational: 150000, productivity: 250000, errorReduction: 100000 }
    };

    const sectorMultipliers = {
      'construction': 1.3,
      'consulting': 1.2,
      'ecommerce': 1.4,
      'healthcare': 1.5,
      'services': 1.1
    };

    const base = baseMultipliers[employeeRange as keyof typeof baseMultipliers] || baseMultipliers['1-5'];
    const multiplier = sectorMultipliers[businessType as keyof typeof sectorMultipliers] || 1.0;

    return {
      operational: Math.round(base.operational * multiplier),
      productivity: Math.round(base.productivity * multiplier),
      errorReduction: Math.round(base.errorReduction * multiplier),
      total: Math.round((base.operational + base.productivity + base.errorReduction) * multiplier)
    };
  };

  const generateMeetingOptions = () => [
    '📅 Demo Google Meet (30 min) - Hoje/Amanhã',
    '📅 Demo Microsoft Teams (30 min) - Hoje/Amanhã',
    '📅 Apresentação Google Meet (45 min) - Esta Semana',
    '📅 Apresentação Teams (45 min) - Esta Semana',
    '📞 Chamada Estratégica (20 min) - Hoje',
    '📧 Proposta Detalhada por Email - Agora'
  ];

  const handleMeetingBooking = (option: string) => {
    const isMeet = option.includes('Google Meet');
    const isTeams = option.includes('Teams');
    const isCall = option.includes('Chamada');
    const isEmail = option.includes('Email');
    
    if (isMeet || isTeams) {
      const platform = isMeet ? 'Google Meet' : 'Microsoft Teams';
      const duration = option.includes('30 min') ? 30 : 45;
      const calendarLink = generateCalendarLink(platform, duration);
      
      simulateTyping(() => {
        addMessage(
          `🚀 **${platform} Agendado com Sucesso!**\n\n✅ **Reunião:** ${option}\n📅 **Link de Agendamento:** [Clique para agendar](${calendarLink})\n\n**📋 Agenda da Demonstração:**\n• Apresentação do sistema específico para o seu setor\n• Demo ao vivo das funcionalidades principais\n• Análise de ROI personalizada\n• Discussão de implementação\n• Q&A e próximos passos\n\n**📧 Enviando confirmação e relatório técnico...**`,
          'ai'
        );
        
        setTimeout(() => window.open(calendarLink, '_blank'), 2000);
        setTimeout(() => finalizeProcess(), 3000);
      }, 1500);
      
    } else if (isCall) {
      simulateTyping(() => {
        addMessage(
          `📞 **Chamada Estratégica Agendada!**\n\n✅ **Contacto:** Hoje - próximas 4 horas\n📱 **Via:** WhatsApp ${userData.whatsapp}\n⏱️ **Duração:** 20 minutos focados\n\n**🎯 Objectivos da Chamada:**\n• Clarificar necessidades específicas\n• Apresentar solução recomendada\n• Discutir investimento e ROI\n• Agendar demo técnica se aplicável\n\n**A nossa equipa está a ser notificada agora! 🚀**`,
          'ai'
        );
        
        setTimeout(() => notifyTeamUrgent(), 1000);
        setTimeout(() => finalizeProcess(), 3000);
      }, 1500);
      
    } else if (isEmail) {
      simulateTyping(() => {
        addMessage(
          `📧 **Proposta Detalhada em Preparação!**\n\n✅ **Vai receber em 2 horas:**\n• Relatório técnico completo\n• Proposta comercial personalizada\n• Casos de sucesso do setor\n• Calculadora de ROI interativa\n• Cronograma de implementação\n\n**📞 Follow-up:** Contacto em 24h para esclarecer dúvidas\n\n**🚀 Enviando análise técnica agora...**`,
          'ai'
        );
        
        setTimeout(() => finalizeProcess(), 2000);
      }, 1500);
    }
  };

  const generateCalendarLink = (platform: string, duration: number): string => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); // Tomorrow
    startDate.setHours(14, 0, 0, 0); // 2 PM
    
    const endDate = new Date(startDate.getTime() + duration * 60 * 1000);
    
    const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const title = encodeURIComponent(`Demo Construware - ${userData.name}`);
    const description = encodeURIComponent(
      `Demonstração personalizada Construware\n\nCliente: ${userData.name}\nEmpresa: ${userData.company || 'N/A'}\nSetor: ${userData.businessType}\nFuncionários: ${userData.employees}\n\nAgenda:\n• Apresentação das funcionalidades\n• Demo ao vivo\n• Análise de ROI\n• Discussão de implementação\n• Próximos passos`
    );

    if (platform.includes('Google')) {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${description}&location=Google+Meet`;
    } else {
      return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${formatDate(startDate)}&enddt=${formatDate(endDate)}&body=${description}&location=Microsoft+Teams`;
    }
  };

  const generateCalendarEditLink = (userData: UserData, meetDate: Date): string => {
    const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const endDate = new Date(meetDate.getTime() + 30 * 60 * 1000); // 30 minutes
    
    const title = encodeURIComponent(`Demo Construware - ${userData.name}`);
    const details = encodeURIComponent(`
CLIENTE: ${userData.name}
WHATSAPP: ${userData.whatsapp}
SETOR: ${userData.businessType}
FUNCIONÁRIOS: ${userData.employees}
PROBLEMA: ${userData.mainChallenge}
SISTEMA ATUAL: ${userData.currentSystem}

DEMO PERSONALIZADA - Preparar apresentação focada nos problemas específicos do cliente.

AGENDA:
• Apresentação das funcionalidades
• Demo ao vivo focada no setor ${userData.businessType}
• Análise de ROI personalizada
• Discussão de implementação
• Próximos passos
    `);
    
    // Link para criar evento editável no Google Calendar
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(meetDate)}/${formatDate(endDate)}&details=${details}&location=Google+Meet`;
  };

  const notifyTeamUrgent = () => {
    const notification = `🚨 *LEAD PRIORITÁRIO - CHAMADA AGENDADA*\n\n👤 Cliente: ${userData.name}\n📱 WhatsApp: ${userData.whatsapp}\n🏢 Setor: ${userData.businessType}\n👥 Funcionários: ${userData.employees}\n⚠️ Desafio: ${userData.mainChallenge}\n\n⏰ *AÇÃO IMEDIATA: Contactar em 4h*\n📞 Chamada estratégica de 20 min agendada\n\n🎯 Lead qualificado pela IA Avançada!`;
    
    const encoded = encodeURIComponent(notification);
    window.open(`https://wa.me/351963901577?text=${encoded}`, '_blank');
  };

  const finalizeProcess = () => {
    addMessage(
      `🎉 **Processo Concluído com Sucesso!**\n\n✅ **Resumo das Ações:**\n• IA analisou o perfil da empresa\n• Recomendações técnicas personalizadas\n• Reunião/contacto agendado\n• Equipa técnica notificada\n\n**🚀 Próximos Passos Automáticos:**\n• Relatório técnico por email (2h)\n• Confirmação da reunião\n• Preparação da demo personalizada\n\n**📞 Contactos Diretos:**\n• WhatsApp: +351 963 901 577\n• Email: contato@construware.pt\n\n**Obrigado por confiar na nossa IA Avançada! 🤖✨**`,
      'ai'
    );
  };

  const handleUserResponse = (response: string, data?: Partial<UserData>) => {
    addMessage(response, 'user');
    
    if (data) {
      setUserData(prev => ({ ...prev, ...data }));
    }

    setTimeout(() => nextStep(response, data), 500);
  };

  const nextStep = (userResponse?: string, data?: Partial<UserData>) => {
    let step = currentStep;
    
    // Only increment step if we have a user response (not initial load)
    if (userResponse !== undefined) {
      step = currentStep + 1;
      setCurrentStep(step);
    } else {
      // Initial load - start conversation
      step = 1;
      setCurrentStep(1);
    }

    switch (step) {
      case 1:
        simulateTyping(() => {
          addMessage(
            "🤖 **Olá! Sou a IA Consultora Avançada da Construware.**\n\n🎯 **Especializo-me em:**\n• Análise técnica empresarial com IA\n• Recomendações de tecnologias específicas\n• Agendamento automático de demonstrações\n• Cálculos de ROI precisos\n\n📊 **Em 3 minutos**, vou criar um relatório técnico completo com stack tecnológico recomendado.\n\n**Para começar, qual é o seu nome?**",
            'ai'
          );
        });
        break;

      case 2:
        // User provided name, ask for business type
        setUserData(prev => ({ ...prev, name: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Prazer, **${userResponse}**! 🤝\n\n🏢 **Qual é o setor principal da sua empresa?**\n\n*Isto permite-me recomendar as tecnologias mais adequadas.*`,
            'ai',
            businessTypes.map(bt => `${bt.emoji} ${bt.name}`)
          );
        });
        break;

      case 3:
        // User provided business type, ask for employee count
        setUserData(prev => ({ ...prev, businessType: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Excelente! ${userResponse} é um setor com grande potencial tecnológico. 📈\n\n👥 **Quantos funcionários tem a empresa?**\n\n*Para dimensionar a arquitetura tecnológica adequada.*`,
            'ai',
            employeeRanges.map(er => er.name)
          );
        });
        break;

      case 4:
        // User provided employee count, ask for main challenge
        setUserData(prev => ({ ...prev, employees: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Perfeito! Com ${userResponse}, já consigo definir uma arquitetura enterprise adequada. 🏗️\n\n⚡ **Qual é o principal desafio tecnológico atual?**\n\n*Cada desafio tem soluções tecnológicas específicas.*`,
            'ai',
            challenges.map(ch => ch.name)
          );
        });
        break;

      case 5:
        // User provided main challenge, ask for current system
        setUserData(prev => ({ ...prev, mainChallenge: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Entendido! "${userResponse}" é um problema que resolvemos facilmente. 🎯\n\n📱 **Qual é o seu número de WhatsApp?**\n\n*Para enviar o link da demonstração diretamente.*`,
            'ai'
          );
        });
        break;

      case 6:
        // User provided WhatsApp, ask for current system
        setUserData(prev => ({ ...prev, whatsapp: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Perfeito! 📱 ${userResponse}\n\n💻 **Que sistemas usa atualmente?**\n\n*Para planear a migração.*`,
            'ai',
            ['Excel + Email', 'Software básico', 'Vários sistemas', 'Sistema personalizado', 'Processos manuais', 'ERP existente']
          );
        });
        break;

      case 7:
        // User provided current system, generate analysis and send WhatsApp
        const updatedUserData = { ...userData, currentSystem: userResponse };
        setUserData(updatedUserData);
        
        // Generate simplified analysis focused on benefits
        const businessType = businessTypes.find(bt => updatedUserData.businessType?.includes(bt.name));
        const employeeRange = employeeRanges.find(er => updatedUserData.employees?.includes(er.name));
        const challenge = challenges.find(ch => updatedUserData.mainChallenge?.includes(ch.name));
        
        // Generate recommendations without values for client
        const clientRecommendations = generatePersonalizedRecommendations(businessType, employeeRange, challenge, false);
        // Generate recommendations with values for team
        const teamRecommendations = generatePersonalizedRecommendations(businessType, employeeRange, challenge, true);
        
        simulateTyping(() => {
          addMessage(
            `🚀 **Análise Completa!**\n\n${clientRecommendations}\n\n📱 **Enviando demonstração para o seu WhatsApp...**`,
            'ai'
          );
          
          // Send WhatsApp to both client and team with different recommendations
          sendWhatsAppToClientAndTeam(updatedUserData, clientRecommendations, teamRecommendations).then((success) => {
            setTimeout(() => {
              if (success) {
                addMessage(
                  `✅ **Link da demonstração enviado!**\n\n📅 **Verifique o seu WhatsApp** - enviámos:\n• Link direto para Google Meet\n• Data e hora sugeridas\n• Agenda da demonstração\n\n**🚀 Até breve na demonstração!**`,
                  'ai'
                );
              } else {
                addMessage(
                  `⚠️ **Vamos contactá-lo em breve!**\n\n📞 A nossa equipa vai ligar para o número fornecido para agendar a demonstração.\n\n**🚀 Obrigado pelo interesse!**`,
                  'ai'
                );
              }
            }, 2000);
          });
        }, 2000);
        break;

      case 8:
        // Conversation ended
        break;
        
      default:
        console.log('⚠️ Unknown step:', step);
        break;
    }
  };

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = inputValue.trim();
    if (!response) return;
    
    setInputValue('');
    
    // Handle text input for all steps
    handleUserResponse(response);
  };

  const initializeChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      simulateTyping(() => {
        nextStep();
      }, 500);
    }
  };

  const sendWhatsAppReport = async (userData: UserData, recommendations: string) => {
    try {
      const whatsappMessage = `🤖 *RELATÓRIO IA CONSTRUWARE*

👤 *Cliente:* ${userData.name}
🏢 *Setor:* ${userData.businessType}  
👥 *Funcionários:* ${userData.employees}
⚠️ *Desafio Principal:* ${userData.mainChallenge}
💻 *Sistema Atual:* ${userData.currentSystem}

${recommendations}

📞 *PRÓXIMO PASSO:*
A nossa equipa vai contactá-lo em breve para agendar uma demonstração personalizada!

---
*Relatório gerado automaticamente pela IA Consultora Avançada da Construware*
*Data: ${new Date().toLocaleDateString('pt-PT')} às ${new Date().toLocaleTimeString('pt-PT')}*`;

      const response = await fetch('/api/whatsapp/send-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: '351963901577', // Número da equipa Construware
          message: whatsappMessage,
          clientData: userData
        })
      });

      if (response.ok) {
        console.log('✅ Relatório enviado para WhatsApp com sucesso!');
        return true;
      } else {
        console.error('❌ Erro ao enviar relatório para WhatsApp');
        return false;
      }
    } catch (error) {
      console.error('❌ Erro na integração WhatsApp:', error);
      return false;
    }
  };

  const sendWhatsAppToClientAndTeam = async (userData: UserData, clientRecommendations: string, teamRecommendations: string) => {
    try {
      // Generate meeting details for tomorrow 2 PM
      const meetDate = new Date();
      meetDate.setDate(meetDate.getDate() + 1);
      meetDate.setHours(14, 0, 0, 0);
      
      // Fixed Google Meet link - SUBSTITUA pelo seu link real criado no Google Meet
      // Para criar: https://meet.google.com > Nova reunião > Para mais tarde
      // LINK FIXO DO GOOGLE MEET - SUBSTITUA pelo seu link real
      // Como criar: https://meet.google.com > Nova reunião > Para mais tarde
      // Ou use um nickname: meet.google.com/seu-nome-aqui
      const googleMeetLink = `https://meet.google.com/ahp-gdxc-agu`;
      
      // Generate calendar edit link for TEAM
      const teamEditLink = generateCalendarEditLink(userData, meetDate);
      
      // Message for CLIENT - Direct Google Meet link (no values)
      const clientMessage = `🎉 *DEMONSTRAÇÃO CONSTRUWARE AGENDADA!*

Olá ${userData.name}! 👋

✅ *Análise completa do seu negócio:*
${clientRecommendations}

📅 *SUA DEMONSTRAÇÃO PERSONALIZADA:*
📅 Data: ${meetDate.toLocaleDateString('pt-PT')} às 14:00
⏱️ Duração: 30 minutos

🔗 *LINK DIRETO DA REUNIÃO:*
${googleMeetLink}

🎯 *O que vai ver:*
• Como resolver os seus problemas específicos
• Demo ao vivo do sistema
• Plano de implementação personalizado
• Orçamento sem compromisso

💡 *Basta clicar no link na hora marcada para entrar!*

Até amanhã! 🚀
*Equipa Construware*`;

      // Message for TEAM - Edit/manage link (with values)
      const teamMessage = `🚨 *NOVO LEAD QUALIFICADO - DEMO AGENDADA*

👤 *Cliente:* ${userData.name}
📱 *WhatsApp:* ${userData.whatsapp}
🏢 *Setor:* ${userData.businessType}
👥 *Funcionários:* ${userData.employees}
⚠️ *Problema:* ${userData.mainChallenge}
💻 *Sistema Atual:* ${userData.currentSystem}

📅 *REUNIÃO AGENDADA:*
📅 Data: ${meetDate.toLocaleDateString('pt-PT')} às 14:00
🔗 Google Meet: ${googleMeetLink}

📝 *CLIQUE PARA CRIAR NO CALENDÁRIO:*
${teamEditLink}

${teamRecommendations}

🎯 *AÇÃO: Preparar demo personalizada!*
✏️ *Cliente já recebeu o link direto do Meet*`;

      // Send to CLIENT
      const clientResponse = await fetch('/api/whatsapp/send-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: userData.whatsapp,
          message: clientMessage,
          type: 'client'
        })
      });

      // Send to TEAM (your number)
      const teamResponse = await fetch('/api/whatsapp/send-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: '351963901577',
          message: teamMessage,
          type: 'team'
        })
      });

      const clientSuccess = clientResponse.ok;
      const teamSuccess = teamResponse.ok;

      console.log('📱 WhatsApp Results:', { clientSuccess, teamSuccess });
      
      return clientSuccess || teamSuccess;
    } catch (error) {
      console.error('❌ Erro ao enviar WhatsApp:', error);
      return false;
    }
  };

  return (
    <>
      {/* AI Assistant Button - Simplified */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Button
          onClick={initializeChat}
          data-ai-button
          className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group border-2 border-orange-300/20"
        >
          <Bot className="w-6 h-6 text-white group-hover:scale-105 transition-transform" />
        </Button>
      </motion.div>

      {/* Advanced Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="w-full max-w-2xl h-[80vh] bg-gray-900 border border-orange-500/20 rounded-2xl shadow-2xl shadow-orange-500/10 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">IA Consultora Avançada</h3>
                    <p className="text-white/90 text-sm">Análise Técnica + Agendamento Automático</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : ''}`}>
                      <div className={`p-4 rounded-2xl ${
                        message.type === 'ai' 
                          ? 'bg-gray-800/50 border border-orange-500/20 text-orange-50 shadow-sm' 
                          : 'bg-gradient-to-r from-orange-500 to-orange-400 text-white'
                      }`}>
                        <div className="whitespace-pre-line text-sm leading-relaxed">{message.content}</div>
                      </div>
                      
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleUserResponse(option)}
                              className="w-full justify-start bg-gray-800/30 hover:bg-orange-500/20 border-orange-500/30 hover:border-orange-500/50 text-orange-200 hover:text-orange-100 text-sm py-3 h-auto font-medium transition-all duration-200"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>

                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-gray-200" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-800/50 border border-orange-500/20 p-4 rounded-2xl shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t border-orange-500/20 bg-gray-900">
                <form onSubmit={handleTextInput} className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite sua resposta..."
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-orange-500/30 text-orange-100 placeholder:text-gray-400 rounded-xl focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                  />
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 px-6 rounded-xl"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 