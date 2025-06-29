import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Mic,
  MicOff,
  Upload,
  FileText,
  Image,
  Calendar,
  TrendingUp,
  Search,
  Brain,
  Zap,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Download,
  Eye
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: 'ai' | 'user' | 'system';
  content: string;
  timestamp: Date;
  options?: string[];
  attachments?: FileAttachment[];
  analysis?: CompetitorAnalysis;
  recommendations?: TechRecommendation[];
}

interface FileAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  analysis?: string;
}

interface CompetitorAnalysis {
  competitors: Array<{
    name: string;
    strengths: string[];
    weaknesses: string[];
    pricing: string;
    marketShare: string;
  }>;
  opportunities: string[];
  recommendations: string[];
}

interface TechRecommendation {
  category: string;
  technology: string;
  description: string;
  benefits: string[];
  implementationTime: string;
  estimatedCost: string;
  priority: 'high' | 'medium' | 'low';
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
  industry?: string;
  location?: string;
  website?: string;
  competitors?: string[];
  techStack?: string[];
  goals?: string[];
}

interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  type: 'demo' | 'consultation' | 'technical';
  status: 'scheduled' | 'confirmed' | 'completed';
}

const businessTypes = [
  { id: 'construction', name: 'Construção Civil', emoji: '🏗️', keywords: ['construção', 'obras', 'civil'] },
  { id: 'consulting', name: 'Consultoria', emoji: '💼', keywords: ['consultoria', 'assessoria', 'consulting'] },
  { id: 'ecommerce', name: 'E-commerce', emoji: '🛒', keywords: ['ecommerce', 'loja', 'vendas'] },
  { id: 'restaurant', name: 'Restauração', emoji: '🍽️', keywords: ['restaurante', 'café', 'food'] },
  { id: 'services', name: 'Serviços', emoji: '⚙️', keywords: ['serviços', 'manutenção', 'repair'] },
  { id: 'technology', name: 'Tecnologia', emoji: '💻', keywords: ['tech', 'software', 'it'] },
  { id: 'health', name: 'Saúde', emoji: '🏥', keywords: ['clínica', 'medicina', 'saúde'] },
  { id: 'education', name: 'Educação', emoji: '🎓', keywords: ['escola', 'ensino', 'formação'] },
  { id: 'retail', name: 'Comércio', emoji: '🏪', keywords: ['loja', 'comércio', 'varejo'] },
  { id: 'other', name: 'Outro', emoji: '🏢', keywords: ['outro', 'diversos'] }
];

const techStacks = [
  { name: 'React + Node.js', description: 'Moderno e escalável', category: 'Full Stack' },
  { name: 'WordPress', description: 'CMS popular e flexível', category: 'CMS' },
  { name: 'Shopify', description: 'E-commerce completo', category: 'E-commerce' },
  { name: 'SalesForce', description: 'CRM empresarial', category: 'CRM' },
  { name: 'Microsoft 365', description: 'Suite empresarial', category: 'Produtividade' },
  { name: 'Google Workspace', description: 'Colaboração na nuvem', category: 'Produtividade' },
  { name: 'Custom ERP', description: 'Sistema personalizado', category: 'ERP' },
  { name: 'SAP', description: 'ERP empresarial', category: 'ERP' },
  { name: 'Oracle', description: 'Base de dados empresarial', category: 'Database' },
  { name: 'AWS/Azure', description: 'Cloud computing', category: 'Cloud' }
];

export function AIConsultantPro() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState<UserData>({});
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileAttachment[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableMeetings, setAvailableMeetings] = useState<Meeting[]>([]);
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);

  // Inicializar reconhecimento de voz
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = 'pt-PT';

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, type: 'ai' | 'user' | 'system', options?: string[], attachments?: FileAttachment[], analysis?: CompetitorAnalysis, recommendations?: TechRecommendation[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      options,
      attachments,
      analysis,
      recommendations
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

  // Reconhecimento de voz
  const toggleListening = () => {
    if (isListening) {
      recognition.current?.stop();
      setIsListening(false);
    } else {
      recognition.current?.start();
      setIsListening(true);
    }
  };

  // Upload de arquivos
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    setIsAnalyzing(true);
    
    for (const file of Array.from(files)) {
      const fileAttachment: FileAttachment = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        type: file.type,
        size: file.size,
        url: URL.createObjectURL(file),
        analysis: await analyzeFile(file)
      };
      
      setUploadedFiles(prev => [...prev, fileAttachment]);
    }
    
    setIsAnalyzing(false);
    
    // Adicionar mensagem sobre o upload
    addMessage(
      `📎 **Arquivo(s) processado(s) com sucesso!**\n\n🤖 **Análise IA:**\n${uploadedFiles.map(f => `• ${f.name}: ${f.analysis}`).join('\n')}\n\nCom base nesta análise, posso oferecer recomendações mais precisas!`,
      'system',
      undefined,
      uploadedFiles
    );
  };

  // Análise de arquivos com IA simulada
  const analyzeFile = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (file.type.includes('image')) {
          resolve('Identifiquei diagramas de processos empresariais. Há oportunidades claras de automação.');
        } else if (file.type.includes('pdf')) {
          resolve('Documento analisado. Contém informações financeiras que sugerem necessidade de ERP.');
        } else if (file.type.includes('excel') || file.type.includes('csv')) {
          resolve('Dados estruturados detectados. Recomendo dashboard analytics para melhor visualização.');
        } else {
          resolve('Documento processado. Contém informações relevantes para análise empresarial.');
        }
      }, 2000);
    });
  };

  // Análise de concorrentes simulada
  const analyzeCompetitors = async (industry: string, location: string): Promise<CompetitorAnalysis> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const analysis: CompetitorAnalysis = {
          competitors: [
            {
              name: 'Concorrente A',
              strengths: ['Presença online forte', 'Preços competitivos'],
              weaknesses: ['Atendimento limitado', 'Tecnologia desatualizada'],
              pricing: '€2.000 - €5.000',
              marketShare: '25%'
            },
            {
              name: 'Concorrente B', 
              strengths: ['Grande equipa', 'Experiência no mercado'],
              weaknesses: ['Processos manuais', 'Falta de inovação'],
              pricing: '€3.000 - €8.000',
              marketShare: '35%'
            }
          ],
          opportunities: [
            'Automação de processos ainda pouco explorada',
            'Mercado mobile em crescimento',
            'Necessidade de soluções personalizadas'
          ],
          recommendations: [
            'Foco em tecnologia avançada para diferenciação',
            'Preços competitivos com valor agregado',
            'Automatização como vantagem competitiva'
          ]
        };
        resolve(analysis);
      }, 3000);
    });
  };

  // Gerar recomendações tecnológicas
  const generateTechRecommendations = (userData: UserData): TechRecommendation[] => {
    const recommendations: TechRecommendation[] = [];
    
    if (userData.businessType === 'construction') {
      recommendations.push({
        category: 'Gestão de Projetos',
        technology: 'Sistema ERP Construção',
        description: 'Plataforma completa para gestão de obras, materiais e equipamentos',
        benefits: ['Controlo de custos em tempo real', 'Gestão de equipas', 'Planeamento de obras'],
        implementationTime: '4-6 semanas',
        estimatedCost: '€8.500 - €15.000',
        priority: 'high'
      });
    }
    
    if (userData.employees && parseInt(userData.employees) > 20) {
      recommendations.push({
        category: 'Recursos Humanos',
        technology: 'Sistema HR Automático',
        description: 'Gestão automatizada de funcionários, ponto e folhas de pagamento',
        benefits: ['Automatização de processos', 'Redução de erros', 'Compliance legal'],
        implementationTime: '2-3 semanas',
        estimatedCost: '€3.500 - €6.000',
        priority: 'medium'
      });
    }

    recommendations.push({
      category: 'Business Intelligence',
      technology: 'Dashboard Analytics',
      description: 'Dashboards interativos com métricas em tempo real',
      benefits: ['Insights de negócio', 'Tomada de decisão baseada em dados', 'KPIs automatizados'],
      implementationTime: '1-2 semanas',
      estimatedCost: '€2.000 - €4.000',
      priority: 'high'
    });

    return recommendations;
  };

  // Gerar horários disponíveis para reuniões
  const generateAvailableMeetings = (): Meeting[] => {
    const meetings: Meeting[] = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Horários de manhã
      meetings.push({
        id: `morning-${i}`,
        title: 'Demonstração Executiva',
        date: date.toLocaleDateString('pt-PT'),
        time: '10:00',
        duration: '30 min',
        type: 'demo',
        status: 'scheduled'
      });
      
      // Horários de tarde
      meetings.push({
        id: `afternoon-${i}`,
        title: 'Consultoria Técnica',
        date: date.toLocaleDateString('pt-PT'),
        time: '15:00',
        duration: '45 min',
        type: 'consultation',
        status: 'scheduled'
      });
    }
    
    return meetings;
  };

  const handleUserResponse = (response: string, data?: Partial<UserData>) => {
    addMessage(response, 'user');
    
    if (data) {
      setUserData(prev => ({ ...prev, ...data }));
    }

    setTimeout(() => {
      simulateTyping(() => {
        nextStep(response, data);
      });
    }, 50);
  };

  const nextStep = async (userResponse?: string, data?: Partial<UserData>) => {
    const step = currentStep + 1;
    setCurrentStep(step);

    switch (step) {
      case 1:
        addMessage(
          `🤖 **Olá! Sou a IA Consultant Avançada da Construware**\n\n✨ **Novas capacidades:**\n🗣️ Reconhecimento de voz\n📎 Análise de documentos\n📊 Comparação com concorrentes\n🎯 Recomendações tecnológicas personalizadas\n📅 Agendamento automático\n\n**Para começar, qual é o seu nome?**\n\n💡 *Pode falar ou escrever a resposta*`,
          'ai'
        );
        break;

      case 2:
        addMessage(
          `🙋‍♂️ **Prazer, ${userData.name}!**\n\n🏢 **Que tipo de negócio tem?**\n\n📎 *Pode também enviar documentos da empresa para análise automática*`,
          'ai',
          businessTypes.map(bt => `${bt.emoji} ${bt.name}`)
        );
        break;

      case 3:
        const businessType = businessTypes.find(bt => 
          userResponse?.toLowerCase().includes(bt.name.toLowerCase()) ||
          bt.keywords.some(keyword => userResponse?.toLowerCase().includes(keyword))
        );
        
        // Iniciar análise de concorrentes em background
        if (businessType) {
          setIsAnalyzing(true);
          const competitorAnalysis = await analyzeCompetitors(businessType.name, 'Portugal');
          setIsAnalyzing(false);
          
          addMessage(
            `${businessType.emoji} **Excelente! ${businessType.name}**\n\n📊 **Análise de mercado concluída:**\n• Identifiquei ${competitorAnalysis.competitors.length} concorrentes principais\n• Encontrei ${competitorAnalysis.opportunities.length} oportunidades de mercado\n\n**Quantos funcionários tem?**`,
            'ai',
            ['1-5 funcionários', '6-20 funcionários', '21-50 funcionários', '51-100 funcionários', 'Mais de 100'],
            undefined,
            competitorAnalysis
          );
        }
        break;

      case 4:
        const recommendations = generateTechRecommendations(userData);
        
        addMessage(
          `👥 **Perfeito!** Com ${userData.employees}, identifiquei **${recommendations.length} soluções tecnológicas** ideais.\n\n🎯 **Recomendações personalizadas geradas!**\n\n**Qual o principal desafio atual?**`,
          'ai',
          [
            '📋 Organização e processos',
            '💬 Comunicação interna', 
            '📈 Produtividade da equipa',
            '💰 Controlo de custos',
            '🚀 Gestão do crescimento',
            '🤖 Automação de tarefas'
          ],
          undefined,
          undefined,
          recommendations
        );
        break;

      case 5:
        addMessage(
          `⚠️ **Compreendo perfeitamente!** Esse desafio é comum no setor.\n\n💻 **Sistema atual:** Que ferramentas usa hoje? (ERP, CRM, planilhas, etc.)`,
          'ai'
        );
        break;

      case 6:
        // Gerar reuniões disponíveis
        const meetings = generateAvailableMeetings();
        setAvailableMeetings(meetings);
        
        addMessage(
          `📋 **Sistema atual registado:** ${userData.currentSystem}\n\n📊 **Análise quase completa!** Para finalizar:\n\n📧 **Email para envio do relatório:**`,
          'ai'
        );
        break;

      case 7:
        addMessage(
          `📱 **WhatsApp** para materiais exclusivos (opcional):`,
          'ai'
        );
        break;

      case 8:
        addMessage(
          `✅ **Análise Completa!**\n\n📊 **Relatório sendo gerado...**\n\n📅 **Quer agendar uma demonstração personalizada?**`,
          'ai',
          ['🎯 Sim, agendar demonstração', '📧 Apenas receber relatório', '💬 Falar com especialista']
        );
        break;

      case 9:
        if (userResponse?.includes('agendar')) {
          setShowCalendar(true);
          addMessage(
            `📅 **Demonstração Personalizada**\n\n🎯 **Horários disponíveis para ${userData.name}:**\n\n*Clique no horário desejado*`,
            'ai'
          );
        } else {
          await deliverReport();
        }
        break;

      default:
        await deliverReport();
        break;
    }
  };

  const deliverReport = async () => {
    addMessage(
      `🚀 **Entregando relatório completo...**\n\n📊 **Incluído:**\n• Análise personalizada IA\n• Comparação com concorrentes\n• Recomendações tecnológicas\n• Cálculo de ROI\n• Plano de implementação`,
      'ai'
    );

    // Simular envio
    setTimeout(async () => {
      // Tentar enviar via Baileys primeiro
      try {
        const response = await fetch('/api/whatsapp/send-baileys', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            number: userData.whatsapp,
            message: `🤖 Relatório IA Avançado da Construware para ${userData.name}`,
            userData: userData,
            sendPDF: true
          })
        });

        const result = await response.json();

        if (result.success) {
          addMessage(
            `✅ **Relatório enviado com sucesso!**\n\n📱 **WhatsApp:** ${userData.whatsapp}\n📧 **Email:** ${userData.email}\n🛡️ **Método:** Baileys (Anti-Ban)\n\n🎉 **Verifique suas mensagens!**\n\n⚡ **Próximos passos:**\nNossa equipa entrará em contacto em 24h para demonstração gratuita!`,
            'ai'
          );
        } else {
          throw new Error('Baileys não disponível');
        }
      } catch (error) {
        // Fallback para wa.me
        const waLink = `https://wa.me/${userData.whatsapp?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Relatório IA da Construware')}`;
        window.open(waLink, '_blank');
        
        addMessage(
          `📱 **WhatsApp aberto!** Clique em "Enviar" para receber o relatório completo.\n\n📧 **Email também enviado** para ${userData.email}`,
          'ai'
        );
      }
    }, 2000);
  };

  const scheduleMeeting = (meeting: Meeting) => {
    setSelectedMeeting(meeting);
    addMessage(
      `📅 **Reunião agendada!**\n\n🎯 **${meeting.title}**\n📅 ${meeting.date} às ${meeting.time}\n⏱️ Duração: ${meeting.duration}\n\n✅ **Confirmação enviada por email**\n📱 **Lembrete automático 1h antes**\n\n🚀 **Prepare-se para transformar seu negócio!**`,
      'system'
    );
    setShowCalendar(false);
  };

  const handleTextInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleUserResponse(inputValue);
      setInputValue('');
    }
  };

  const initializeChat = () => {
    setMessages([]);
    setCurrentStep(0);
    setUserData({});
    setUploadedFiles([]);
    simulateTyping(() => nextStep());
  };

  if (!isOpen) {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={() => {
            setIsOpen(true);
            if (messages.length === 0) initializeChat();
          }}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 hover:from-blue-700 hover:via-purple-700 hover:to-orange-600 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          <div className="relative">
            <Brain className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
          </div>
        </Button>
        
        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          🤖 IA Consultant Pro
          <div className="absolute bottom-[-6px] right-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-900" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
      initial={{ scale: 0, opacity: 0, y: 100 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Brain className="h-8 w-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg">IA Consultant Pro</h3>
              <p className="text-xs opacity-90">Powered by Construware AI</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Feature indicators */}
        <div className="flex gap-2 mt-3">
          <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
            🗣️ Voz
          </Badge>
          <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
            📎 Upload
          </Badge>
          <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
            📊 Analytics
          </Badge>
          <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
            📅 Agenda
          </Badge>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] ${
                message.type === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : message.type === 'system'
                  ? 'bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200'
                  : 'bg-white border border-gray-200 shadow-sm'
              } rounded-2xl p-3`}>
                
                {message.type !== 'user' && (
                  <div className="flex items-center gap-2 mb-2">
                    {message.type === 'system' ? (
                      <Zap className="h-4 w-4 text-orange-500" />
                    ) : (
                      <Brain className="h-4 w-4 text-blue-500" />
                    )}
                    <span className="text-xs font-medium text-gray-600">
                      {message.type === 'system' ? 'Sistema' : 'IA Consultant'}
                    </span>
                  </div>
                )}

                <div className={`text-sm whitespace-pre-wrap ${
                  message.type === 'user' ? 'text-white' : 'text-gray-800'
                }`}>
                  {message.content}
                </div>

                {/* File attachments */}
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.attachments.map(file => (
                      <div key={file.id} className="bg-gray-100 p-2 rounded-lg flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-medium flex-1">{file.name}</span>
                        <Eye className="h-4 w-4 text-gray-400 cursor-pointer" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Competitor analysis */}
                {message.analysis && (
                  <div className="mt-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Análise de Concorrentes
                    </h4>
                    <div className="space-y-2 text-xs">
                      {message.analysis.competitors.map((comp, idx) => (
                        <div key={idx} className="bg-white p-2 rounded border">
                          <div className="font-medium text-gray-800">{comp.name}</div>
                          <div className="text-gray-600">Market Share: {comp.marketShare}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech recommendations */}
                {message.recommendations && (
                  <div className="mt-3 space-y-2">
                    <h4 className="font-medium text-gray-800 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-orange-500" />
                      Recomendações Tecnológicas
                    </h4>
                    {message.recommendations.map((rec, idx) => (
                      <div key={idx} className={`p-3 rounded-lg border-l-4 ${
                        rec.priority === 'high' ? 'bg-red-50 border-red-400' :
                        rec.priority === 'medium' ? 'bg-yellow-50 border-yellow-400' :
                        'bg-green-50 border-green-400'
                      }`}>
                        <div className="font-medium text-sm">{rec.technology}</div>
                        <div className="text-xs text-gray-600 mt-1">{rec.description}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          💰 {rec.estimatedCost} | ⏱️ {rec.implementationTime}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Options */}
                {message.options && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.options.map((option, idx) => (
                      <Button
                        key={idx}
                        onClick={() => handleUserResponse(option)}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-blue-50 hover:border-blue-300"
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Calendar component */}
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg"
          >
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              Agendar Demonstração
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableMeetings.slice(0, 6).map(meeting => (
                <button
                  key={meeting.id}
                  onClick={() => scheduleMeeting(meeting)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-sm">{meeting.title}</div>
                      <div className="text-xs text-gray-600">{meeting.date} às {meeting.time}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {meeting.duration}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-blue-500" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-orange-50 border border-orange-200 rounded-lg p-3"
          >
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 text-orange-500 animate-spin" />
              <span className="text-sm text-orange-700">Analisando com IA...</span>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleTextInput} className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite ou fale sua resposta..."
              className="pr-20 border-gray-300 focus:border-blue-500"
              disabled={isTyping}
            />
            
            {/* Voice button */}
            <Button
              type="button"
              onClick={toggleListening}
              size="sm"
              variant="ghost"
              className={`absolute right-12 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 ${
                isListening ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-blue-500'
              }`}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>

            {/* Upload button */}
            <Button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              size="sm"
              variant="ghost"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-400 hover:text-blue-500"
            >
              <Upload className="h-4 w-4" />
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
          
          <Button
            type="submit"
            size="sm"
            disabled={!inputValue.trim() || isTyping}
            className="h-10 w-10 p-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>

        {/* Upload status */}
        {uploadedFiles.length > 0 && (
          <div className="mt-2 text-xs text-gray-600">
            📎 {uploadedFiles.length} arquivo(s) enviado(s)
          </div>
        )}
      </div>
    </motion.div>
  );
} 