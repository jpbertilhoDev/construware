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
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      setUserData(prev => ({ ...prev, ...data }));
    }

    simulateTyping(() => {
      nextStep(response, data);
    });
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
          `Ótimo! Para finalizar a análise, preciso do seu email para enviar o relatório detalhado.\n\nQual é o seu email?`,
          'ai'
        );
        break;

      case 7:
        addMessage(
          `Perfeito! Gostaria também de receber updates via WhatsApp?\n\n(Opcional - pode deixar em branco se preferir apenas email)`,
          'ai'
        );
        break;

      case 8:
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
      
      addMessage(
        `✅ **Análise Completa!**\n\n📊 **Resumo do seu perfil:**\n• Setor: ${businessType?.name}\n• Funcionários: ${employeeRange?.name}\n• Principal desafio: ${challenge?.name}\n• Sistema atual: ${userData.currentSystem || 'Não especificado'}\n\n💰 **Economia estimada:** €${savings.toLocaleString()}/ano\n\n🎯 **Recomendação:** ${recommendations}\n\n📧 **Enviando relatório detalhado para ${userData.email}...**`,
        'ai'
      );
      
      setTimeout(() => {
        sendEmailReport();
        notifyTeam();
      }, 2000);
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

  const sendToWhatsApp = () => {
    const businessType = businessTypes.find(bt => 
      Object.values(userData).some(value => 
        typeof value === 'string' && value.includes(bt.name)
      )
    );

    const report = `🤖 *RELATÓRIO IA - CONSTRUWARE*

👤 *Cliente:* ${userData.name}
🏢 *Empresa:* ${userData.company || 'Não informado'}
📊 *Setor:* ${businessType?.name}
👥 *Funcionários:* ${userData.employees}
⚠️ *Principal Desafio:* ${userData.mainChallenge}
💻 *Sistema Atual:* ${userData.currentSystem}

💰 *ECONOMIA ESTIMADA:* €${calculateSavings(userData.employees?.split(' ')[0] || '1-5').toLocaleString()}/ano

📋 *PRÓXIMOS PASSOS:*
✅ Demonstração personalizada
✅ Análise detalhada de ROI  
✅ Proposta comercial adaptada

🎯 Cliente qualificado pela IA - Pronto para apresentação!`;

    const encodedMessage = encodeURIComponent(report);
    window.open(`https://wa.me/351963901577?text=${encodedMessage}`, '_blank');
    
    addMessage(
      "✅ Relatório enviado!\n\nA nossa equipa entrará em contacto em breve com a análise completa e uma proposta personalizada.\n\nObrigada por usar a nossa IA! 🚀",
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
      case 6:
        handleUserResponse(response, { email: response });
        break;
      case 7:
        // WhatsApp é opcional - pode estar vazio
        handleUserResponse(response || "Não informado", { whatsapp: response || undefined });
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
                {(currentStep === 1 || currentStep === 5 || currentStep === 6) && !isTyping && (
                  <div className="p-4 bg-gray-900 border-t border-white/10">
                    <form onSubmit={handleTextInput} className="flex gap-2">
                      <input
                        type={currentStep === 6 ? 'email' : 'text'}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={
                          currentStep === 1 ? 'Digite seu nome...' :
                          currentStep === 5 ? 'Sistema atual ou "não"...' :
                          'Digite seu email...'
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