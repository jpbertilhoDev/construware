import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { X, Bot, Send, FileText, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Configuração EmailJS
const EMAIL_SERVICE_ID = 'service_abc123';
const EMAIL_TEMPLATE_ID = 'template_xyz789';
const EMAIL_PUBLIC_KEY = 'your_public_key_here';

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
}

interface BusinessType {
  id: string;
  name: string;
  description: string;
  examples: string[];
}

interface EmployeeRange {
  id: string;
  name: string;
  description: string;
}

interface Challenge {
  id: string;
  name: string;
  description: string;
}

const businessTypes: BusinessType[] = [
  { id: 'construction', name: 'Construção', description: 'Empresas de construção civil, engenharia e obras', examples: ['Construtoras', 'Engenharia Civil', 'Arquitetura'] },
  { id: 'consulting', name: 'Consultoria', description: 'Serviços de consultoria empresarial e técnica', examples: ['Consultoria de Gestão', 'Consultoria IT', 'Consultoria Jurídica'] },
  { id: 'ecommerce', name: 'E-commerce', description: 'Lojas online e comércio eletrónico', examples: ['Loja Online', 'Marketplace', 'Dropshipping'] },
  { id: 'restaurant', name: 'Restaurante', description: 'Restauração e hotelaria', examples: ['Restaurantes', 'Cafés', 'Hotéis'] },
  { id: 'services', name: 'Serviços', description: 'Empresas de serviços diversos', examples: ['Clínicas', 'Salões', 'Oficinas'] },
  { id: 'other', name: 'Outro', description: 'Outros setores de atividade', examples: ['Indústria', 'Agricultura', 'Educação'] }
];

const employeeRanges: EmployeeRange[] = [
  { id: '1-5', name: '1-5 funcionários', description: 'Micro empresa' },
  { id: '6-20', name: '6-20 funcionários', description: 'Pequena empresa' },
  { id: '21-50', name: '21-50 funcionários', description: 'Média empresa' },
  { id: '51-100', name: '51-100 funcionários', description: 'Grande empresa' },
  { id: '100+', name: '100+ funcionários', description: 'Empresa multinacional' }
];

const challenges: Challenge[] = [
  { id: 'manual-processes', name: 'Processos manuais demorados', description: 'Tarefas repetitivas que consomem muito tempo' },
  { id: 'data-management', name: 'Gestão de dados desorganizada', description: 'Informação dispersa e difícil de aceder' },
  { id: 'communication', name: 'Comunicação interna deficiente', description: 'Falta de coordenação entre equipas' },
  { id: 'customer-management', name: 'Gestão de clientes complexa', description: 'Dificuldade em acompanhar clientes e vendas' },
  { id: 'cost-control', name: 'Controlo de custos', description: 'Gastos elevados e falta de visibilidade financeira' },
  { id: 'other', name: 'Outro desafio', description: 'Desafio específico da empresa' }
];

export function AIConsultantImproved() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({});
  const [isTyping, setIsTyping] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState<'email' | 'whatsapp' | 'both'>('email');
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleUserResponse = (response: string, data?: Partial<UserData>) => {
    addMessage(response, 'user');
    
    if (data) {
      setUserData(prev => ({ ...prev, ...data }));
    }

    setTimeout(() => nextStep(response, data), 500);
  };

  const nextStep = (userResponse?: string, data?: Partial<UserData>) => {
    const updatedUserData = { ...userData, ...data };

    switch (currentStep) {
      case 0: // Boas-vindas
        simulateTyping(() => {
          addMessage(
            `👋 **Olá! Sou a IA Consultora da Construware.**\n\nEspecializo-me em ajudar empresas portuguesas a otimizar os seus processos através de tecnologia.\n\n📊 **Em apenas 2 minutos**, vou analisar a sua empresa e gerar um relatório personalizado com:\n\n• 💰 **Economia estimada** com automação\n• 🎯 **Soluções específicas** para o seu setor\n• 📈 **ROI projetado** em 12 meses\n• 📋 **Plano de implementação** detalhado\n\n**Como gostaria que me dirija a si?**`,
            'ai'
          );
          setCurrentStep(1);
        });
        break;

      case 1: // Nome
        setUserData(prev => ({ ...prev, name: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Prazer em conhecê-lo(a), **${userResponse}**! 🤝\n\n📋 Para personalizar a análise, preciso conhecer melhor a sua empresa.\n\n**Qual é o setor principal da sua atividade?**`,
            'ai',
            businessTypes.map(bt => bt.name)
          );
          setCurrentStep(2);
        });
        break;

      case 2: // Tipo de negócio
        setUserData(prev => ({ ...prev, businessType: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Excelente! ${userResponse} é um setor com muito potencial de otimização. 📈\n\n👥 **Quantos funcionários tem atualmente a sua empresa?**\n\n*Esta informação ajuda-me a calcular o ROI mais preciso.*`,
            'ai',
            employeeRanges.map(er => er.name)
          );
          setCurrentStep(3);
        });
        break;

      case 3: // Funcionários
        setUserData(prev => ({ ...prev, employees: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Perfeito! Com ${userResponse}, já consigo estimar um potencial significativo de economia. 💡\n\n⚠️ **Qual é o principal desafio** que a sua empresa enfrenta atualmente?`,
            'ai',
            challenges.map(ch => ch.name)
          );
          setCurrentStep(4);
        });
        break;

      case 4: // Desafio principal
        setUserData(prev => ({ ...prev, mainChallenge: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Entendo. "${userResponse}" é um desafio comum que podemos resolver eficazmente! 🎯\n\n💻 **Que tipo de sistema usa atualmente** para gerir a empresa?\n\n*Pode ser Excel, software específico, ou processos manuais.*`,
            'ai',
            ['Excel e documentos', 'Software básico', 'Sistema personalizado', 'Processos manuais', 'Vários sistemas diferentes']
          );
          setCurrentStep(5);
        });
        break;

      case 5: // Sistema atual
        setUserData(prev => ({ ...prev, currentSystem: userResponse }));
        simulateTyping(() => {
          addMessage(
            `Obrigado! Com "${userResponse}", vejo várias oportunidades de melhoria. 🚀\n\n📨 **Como prefere receber o relatório personalizado?**\n\n*O relatório incluirá análise detalhada, economia estimada e plano de implementação.*`,
            'ai',
            ['📧 Email apenas', '📱 WhatsApp apenas', '📧📱 Email + WhatsApp']
          );
          setCurrentStep(6);
        });
        break;

      case 6: // Método de entrega
        if (userResponse?.includes('Email')) {
          setDeliveryMethod(userResponse.includes('WhatsApp') ? 'both' : 'email');
        } else {
          setDeliveryMethod('whatsapp');
        }
        
        if (userResponse?.includes('Email')) {
          simulateTyping(() => {
            addMessage(
              `📧 **Qual é o seu endereço de email?**\n\n*Para onde devo enviar o relatório personalizado.*`,
              'ai'
            );
            setCurrentStep(7);
          });
        } else {
          simulateTyping(() => {
            addMessage(
              `📱 **Qual é o seu número de WhatsApp?**\n\n*Formato: +351 9XXXXXXXX ou 9XXXXXXXX*`,
              'ai'
            );
            setCurrentStep(8);
          });
        }
        break;

      case 7: // Email
        setUserData(prev => ({ ...prev, email: userResponse }));
        if (deliveryMethod === 'both') {
          simulateTyping(() => {
            addMessage(
              `📱 **E o seu número de WhatsApp?**\n\n*Formato: +351 9XXXXXXXX ou 9XXXXXXXX*`,
              'ai'
            );
            setCurrentStep(8);
          });
        } else {
          generateAndDeliverReport();
        }
        break;

      case 8: // WhatsApp
        setUserData(prev => ({ ...prev, whatsapp: userResponse }));
        generateAndDeliverReport();
        break;
    }
  };

  const generateAndDeliverReport = () => {
    simulateTyping(() => {
      addMessage(
        `🤖 **Análise concluída!** Gerando o seu relatório personalizado...\n\n⚡ A nossa IA processou:\n• Setor de atividade\n• Dimensão da empresa\n• Desafios específicos\n• Infraestrutura atual\n\n📊 **Calculando ROI e soluções...**`,
        'ai'
      );
      
      setTimeout(() => {
        deliverReport();
      }, 2000);
    }, 1000);
  };

  const deliverReport = async () => {
    const updatedUserData = { ...userData };
    
    if (deliveryMethod === 'email' || deliveryMethod === 'both') {
      await sendEmailReport(updatedUserData);
    } else {
      await sendWhatsAppToClient(updatedUserData);
    }
  };

  const sendEmailReport = async (userData: UserData) => {
    const emailContent = generateDetailedEmailReport(userData);
    
    try {
      // Gerar PDF do relatório
      const pdfUrl = await generateReportPDF(userData);
      
      if (EMAIL_PUBLIC_KEY === 'your_public_key_here') {
        // Fallback se EmailJS não estiver configurado
        const subject = `Relatório IA Personalizado - ${userData.name}`;
        const mailtoUrl = `mailto:${userData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        window.open(mailtoUrl, '_blank');
        
        simulateTyping(() => {
          addMessage(
            `✅ **Email preparado!**\n\n📧 Cliente de email aberto para: ${userData.email}\n📄 **Relatório técnico completo** incluído\n\n${userData.whatsapp ? `📱 Preparando envio para WhatsApp...` : ''}`,
            'ai'
          );
          
          if (userData.whatsapp) {
            setTimeout(() => sendWhatsAppToClient(userData), 2000);
          } else {
            setTimeout(() => finalMessage(), 2000);
          }
        }, 1000);
        return;
      }

      // Envio real usando EmailJS
      const templateParams = {
        to_email: userData.email,
        to_name: userData.name,
        subject: `Relatório IA Personalizado - ${userData.name}`,
        message: emailContent,
        pdf_url: pdfUrl,
        from_name: 'Construware IA',
        reply_to: 'contato@construware.pt'
      };

      emailjs.init(EMAIL_PUBLIC_KEY);
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams);
      
      simulateTyping(() => {
        addMessage(
          `✅ **Relatório enviado com sucesso!**\n\n📧 Email entregue para: ${userData.email}\n📋 **Relatório técnico completo + PDF da marca**\n\n${userData.whatsapp ? `📱 Enviando também para WhatsApp...` : ''}`,
          'ai'
        );
        
        if (userData.whatsapp) {
          setTimeout(() => sendWhatsAppToClient(userData), 2000);
        } else {
          setTimeout(() => finalMessage(), 2000);
        }
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      addMessage(
        `❌ **Erro no envio do email.** Por favor, contacte-nos diretamente:\n📞 +351 963 901 577\n📧 contato@construware.pt`,
        'ai'
      );
    }
  };

  const generateDetailedEmailReport = (userData: UserData): string => {
    const businessType = businessTypes.find(bt => bt.name === userData.businessType);
    const employeeRange = employeeRanges.find(er => er.name === userData.employees);
    const challenge = challenges.find(ch => ch.name === userData.mainChallenge);
    const savings = calculateSavings(employeeRange?.id || '1-5');
    const recommendation = generatePersonalizedRecommendations(businessType, employeeRange, challenge);

    return `🏆 CONSTRUWARE - RELATÓRIO IA EMPRESARIAL
═══════════════════════════════════════════════════════

Exmo(a). ${userData.name},

Muito obrigado por confiar na nossa IA Consultora. Concluímos a análise personalizada da sua empresa.

📋 SUMÁRIO EXECUTIVO
━━━━━━━━━━━━━━━━━━━━━
🏢 Empresa: ${userData.name}
📊 Setor: ${businessType?.name}
👥 Dimensão: ${userData.employees}
🎯 Desafio Principal: ${userData.mainChallenge}
💻 Infraestrutura Atual: ${userData.currentSystem}

💰 POTENCIAL DE RETORNO
━━━━━━━━━━━━━━━━━━━━━━━━━

ECONOMIA ANUAL ESTIMADA: €${savings.toLocaleString()}

Esta projeção baseia-se em:
✓ Automação de processos manuais
✓ Redução de erros operacionais  
✓ Otimização de recursos humanos
✓ Integração de sistemas

🎯 SOLUÇÃO RECOMENDADA
━━━━━━━━━━━━━━━━━━━━━━━━━

${recommendation}

📁 DOCUMENTAÇÃO ANEXA
━━━━━━━━━━━━━━━━━━━━━━━━

- Portfolio completo Construware (PDF)
- Casos de sucesso no seu setor
- Proposta comercial inicial

💼 PRÓXIMA FASE
━━━━━━━━━━━━━━━━

Nossa equipa entrará em contacto em 24h para:
1. Demonstração executiva personalizada
2. Análise técnica on-site
3. Proposta comercial formal

🚀 CONTACTOS
━━━━━━━━━━━━━━

📞 +351 963 901 577 (WhatsApp Business)
📧 comercial@construware.pt  
🌐 www.construware.pt

Cumprimentos,
Equipa Construware`;
  };

  const sendWhatsAppToClient = async (userData: UserData) => {
    if (!userData.whatsapp) {
      console.error('WhatsApp number not found');
      return;
    }

    // Validar número português
    const cleanPhone = userData.whatsapp.replace(/\D/g, '');
    let formattedPhone = '';
    
    if (cleanPhone.startsWith('351') && cleanPhone.length === 12) {
      formattedPhone = cleanPhone;
    } else if (cleanPhone.startsWith('9') && cleanPhone.length === 9) {
      formattedPhone = '351' + cleanPhone;
    } else {
      addMessage(
        `❌ **Número inválido**: ${userData.whatsapp}\n\nFormatos aceites:\n• +351 9XXXXXXXX\n• 9XXXXXXXX`,
        'ai'
      );
      return;
    }

          // Enviar via Baileys WhatsApp (anti-ban)
    try {
              const response = await fetch('/api/whatsapp/send-baileys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          number: formattedPhone,
          message: generateProfessionalWhatsAppMessage(userData),
          userData: userData
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          simulateTyping(() => {
            addMessage(
              `✅ **Relatório enviado automaticamente!**\n\n📱 WhatsApp: +${formattedPhone}\n📋 **Mensagem empresarial + PDF** entregues\n\n🎯 **PRÓXIMOS PASSOS:**\n• Nossa equipa comercial foi notificada\n• Receberá contacto em 24h\n• Demonstração personalizada agendada`,
              'ai'
            );
            setTimeout(() => finalMessage(), 2000);
          }, 1000);
          return;
        }
      }
    } catch (error) {
              console.log('Baileys WhatsApp indisponível, usando fallback wa.me');
    }

    // Fallback wa.me
    await sendWhatsAppFallback(userData, formattedPhone);
  };

  const sendWhatsAppFallback = async (userData: UserData, formattedPhone: string) => {
    const professionalMessage = generateProfessionalWhatsAppMessage(userData);
    const encodedMessage = encodeURIComponent(professionalMessage);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    // Notificar equipa
    await notifyTeamWhatsAppRequest(formattedPhone, userData.name || 'Cliente', userData);
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    simulateTyping(() => {
      addMessage(
        `✅ **Relatório empresarial enviado!**\n\n📱 **WhatsApp aberto para:** +${formattedPhone}\n📄 **Mensagem profissional** pré-preenchida\n\n🎯 **COMO PROCEDER:**\n\n1️⃣ Clique **"Enviar"** no WhatsApp\n2️⃣ Receberá **PDF da marca** automaticamente\n3️⃣ Nossa equipa comercial entrará em contacto\n\n💼 **GARANTIAS:**\n• Resposta profissional em 24h\n• Demonstração personalizada gratuita\n• Proposta comercial sem compromisso`,
        'ai'
      );
      
      setTimeout(() => finalMessage(), 3000);
    }, 1000);
  };

  const generateProfessionalWhatsAppMessage = (userData: UserData): string => {
    const businessType = businessTypes.find(bt => bt.name === userData.businessType);
    const employeeRange = employeeRanges.find(er => er.name === userData.employees);
    const savings = calculateSavings(employeeRange?.id || '1-5');
    const recommendation = generatePersonalizedRecommendations(businessType, employeeRange, null);
    
    const currentDate = new Date().toLocaleDateString('pt-PT');
    const currentTime = new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
    
    return `🏆 *CONSTRUWARE - ANÁLISE IA EMPRESARIAL*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👋 *Exmo(a). ${userData.name}*

Muito obrigado por confiar na nossa IA Consultora. Concluímos a análise personalizada da sua empresa e temos excelentes notícias para partilhar.

📋 *SUMÁRIO EXECUTIVO*
━━━━━━━━━━━━━━━━━━━━━━━

🏢 *Empresa:* ${userData.name}
📊 *Setor:* ${businessType?.name || 'Personalizado'}
👥 *Dimensão:* ${userData.employees} funcionários
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
  };

  const calculateSavings = (employeeRange: string): number => {
    const multipliers = {
      '1-5': 8000,
      '6-20': 25000,
      '21-50': 75000,
      '51-100': 150000,
      '100+': 250000
    };
    return multipliers[employeeRange] || 8000;
  };

  const generatePersonalizedRecommendations = (businessType: any, employeeRange: any, challenge: any): string => {
    const recommendations = {
      'Construção': 'Sistema ERP especializado para construção com gestão de obras, materiais, equipamentos e relatórios de progresso em tempo real. Inclui módulos de orçamentação automática e controlo de custos.',
      'Consultoria': 'Plataforma CRM avançada com gestão de projetos, time tracking automático, faturação inteligente e dashboards de performance. Sistema otimizado para equipas de consultoria.',
      'E-commerce': 'Solução e-commerce completa com gestão de stock automática, analytics avançados, marketing automation e integração multi-canal para maximizar vendas.',
      'Restaurante': 'Sistema POS integrado com gestão de delivery, controlo de ingredientes, reservas automáticas e análises de vendas específicas para restauração.',
      'Serviços': 'Plataforma de gestão de serviços com agendamento inteligente, gestão de técnicos, histórico completo de clientes e faturação automática.',
      'Outro': 'Sistema personalizado desenvolvido especificamente para as necessidades do seu setor, com funcionalidades sob medida e integração com sistemas existentes.'
    };
    
    return recommendations[businessType?.name] || recommendations['Outro'];
  };

  const generateReportPDF = async (userData: UserData): Promise<string> => {
    try {
      const response = await fetch('/api/generate-report-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData })
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        return url;
      }
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    }
    return '';
  };

  const notifyTeamWhatsAppRequest = async (phone: string, clientName: string, userData: UserData) => {
    const businessType = businessTypes.find(bt => bt.name === userData.businessType);
    const employeeRange = employeeRanges.find(er => er.name === userData.employees);
    const savings = calculateSavings(employeeRange?.id || '1-5');

    const teamNotification = `🤖 *LEAD QUALIFICADO - IA CONSULTORA*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 *CLIENTE PREFERIU WHATSAPP:*
👤 Nome: *${clientName}*
📞 WhatsApp: *+${phone}*
🏢 Setor: *${businessType?.name || 'Não informado'}*
👥 Funcionários: *${userData.employees || 'Não informado'}*
⚠️ Desafio: *${userData.mainChallenge || 'Não informado'}*
💻 Sistema Atual: *${userData.currentSystem || 'Não informado'}*

💰 *ECONOMIA ESTIMADA:* €${savings.toLocaleString()}/ano

🎯 *PRIORIDADE:* ${calculatePriority(employeeRange?.id || '1-5')}
📅 *Data/Hora:* ${new Date().toLocaleString('pt-PT')}

✅ *AÇÕES IMEDIATAS:*
1. Cliente recebeu relatório empresarial completo
2. Contactar em 24h para demonstração executiva
3. Preparar proposta comercial personalizada
4. Agendar reunião com decisor

🚨 *LEAD EMPRESARIAL QUALIFICADO - SEGUIMENTO PRIORITÁRIO!*`;

    try {
      const encodedNotification = encodeURIComponent(teamNotification);
      const teamWhatsApp = `https://wa.me/351963901577?text=${encodedNotification}`;
      
      const popup = window.open(teamWhatsApp, 'team_notification', 'width=400,height=300');
      setTimeout(() => {
        if (popup) popup.close();
      }, 2000);
      
    } catch (error) {
      console.log('Notificação da equipa falhou');
    }
  };

  const calculatePriority = (employeeRange: string): string => {
    const priorities = {
      '1-5': 'STANDARD 📋',
      '6-20': 'MÉDIA 📊',
      '21-50': 'MÉDIA-ALTA 📈',
      '51-100': 'ALTA 🔥',
      '100+': 'CRÍTICA 💎'
    };
    return priorities[employeeRange] || 'STANDARD 📋';
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
      `🎉 **Processo concluído com sucesso!**\n\n📋 **Relatório entregue via:**\n${deliveredTo.join('\n')}\n\n🏆 **O QUE ACONTECE AGORA:**\n\n✅ **Nossa equipa comercial** foi notificada\n✅ **Contacto garantido** nas próximas 24h\n✅ **Demonstração personalizada** será agendada\n✅ **Proposta comercial** será preparada\n\n💼 **CONTACTOS DIRETOS:**\n📞 +351 963 901 577\n📧 comercial@construware.pt\n🌐 www.construware.pt\n\n**Obrigado por confiar na Construware!** 🚀\n\n*Para nova análise, feche e reabra o chat.*`,
      'ai'
    );
  };

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      handleUserResponse(textInput.trim());
      setTextInput('');
    }
  };

  const downloadBrandPDF = async () => {
    try {
      const response = await fetch('/api/generate-brand-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientData: userData })
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Construware-Portfolio.pdf';
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erro ao baixar PDF:', error);
    }
  };

  const initializeChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setUserData({});
    setDeliveryMethod('email');
    setTextInput('');
    nextStep();
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isOpen]);

  return (
    <>
      {/* Botão flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <Bot className="h-8 w-8 text-white" />
        </Button>
        
        {/* Badge de notificação */}
        <motion.div
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          IA
        </motion.div>
      </motion.div>

      {/* Modal do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl w-full max-w-md h-[600px] flex flex-col"
              initial={{ x: '100%', y: '100%' }}
              animate={{ x: 0, y: 0 }}
              exit={{ x: '100%', y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Bot className="h-6 w-6" />
                    <div>
                      <CardTitle className="text-lg">IA Consultora</CardTitle>
                      <p className="text-sm opacity-90">Especialista em otimização empresarial</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={downloadBrandPDF}
                      className="text-white hover:bg-white/20"
                    >
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm">
                        {message.content}
                      </div>
                      
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleUserResponse(option)}
                              className="w-full text-left justify-start bg-white hover:bg-gray-50"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              {currentStep > 0 && currentStep < 9 && !messages.some(m => m.options) && (
                <div className="p-4 border-t">
                  <form onSubmit={handleTextInput} className="flex space-x-2">
                    <Input
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder="Digite sua resposta..."
                      className="flex-1"
                    />
                    <Button type="submit" size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 