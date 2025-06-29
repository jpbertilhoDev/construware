import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Building,
  Globe,
  Headphones
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Nossa equipe responde em até 2 horas",
    value: "contato@construware.com",
    action: "mailto:contato@construware.com"
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "Atendimento de segunda a sexta",
    value: "+351 21 123 4567",
    action: "tel:+351211234567"
  },
  {
    icon: MapPin,
    title: "Escritório",
    description: "Venha nos visitar em Lisboa",
    value: "Av. da Liberdade, 123\n1250-142 Lisboa, Portugal",
    action: "https://maps.google.com"
  }
];

const services = [
  {
    icon: MessageSquare,
    title: "Suporte Técnico",
    description: "Dúvidas sobre implementação, configuração ou uso da plataforma",
    response: "< 2 horas"
  },
  {
    icon: Users,
    title: "Vendas & Parcerias",
    description: "Demonstrações, orçamentos e oportunidades de negócio",
    response: "< 30 minutos"
  },
  {
    icon: Calendar,
    title: "Demonstrações",
    description: "Agende uma apresentação personalizada da plataforma",
    response: "Agendamento imediato"
  },
  {
    icon: Building,
    title: "Enterprise",
    description: "Soluções para grandes empresas e organizações",
    response: "Gerente dedicado"
  }
];

const faqs = [
  {
    question: "Quanto tempo demora a implementação?",
    answer: "A implementação típica demora entre 1-4 semanas, dependendo da complexidade e tamanho da sua empresa."
  },
  {
    question: "Vocês oferecem suporte em português?",
    answer: "Sim! Nossa equipe oferece suporte completo em português, com atendimento local em Portugal."
  },
  {
    question: "É possível integrar com nossos sistemas atuais?",
    answer: "Absolutamente. Temos conectores para SAP, Oracle, Microsoft Dynamics e APIs REST para qualquer sistema."
  },
  {
    question: "Qual o preço para empresas portuguesas?",
    answer: "Nossos preços foram ajustados para o mercado português. Agende uma demonstração para um orçamento personalizado."
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.008]"></div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[200px] bg-blue-400/[0.015] rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.10] text-sm md:text-base font-bold text-white/60 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Fale Connosco
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[-0.02em] mb-8 leading-[0.85]">
              <span className="text-white/95">Vamos</span>
              <br />
              <span 
                className="bg-gradient-to-r from-orange-300 via-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.6)) drop-shadow(0 0 16px rgba(251, 146, 60, 0.4)) drop-shadow(0 0 24px rgba(251, 146, 60, 0.2))'
                }}
              >
                conversar?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/60 max-w-4xl mx-auto font-medium leading-relaxed">
              Transforme sua ideia em realidade digital. Nossa equipe está pronta 
              <br className="hidden sm:block" />
              para criar a solução perfeita para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/[0.02] border border-white/[0.08] hover:border-orange-500/30 transition-all duration-500 rounded-3xl hover:bg-white/[0.04] transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300">
                      <info.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3">{info.title}</h3>
                    <p className="text-white/60 text-sm md:text-base font-medium mb-4">{info.description}</p>
                    <div className="text-white/80 font-bold whitespace-pre-line mb-6">{info.value}</div>
                    <Button 
                      size="sm"
                      className="bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/30 hover:border-orange-500 transition-all font-bold"
                      onClick={() => window.open(info.action, '_blank')}
                    >
                      Entrar em Contato
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20 text-base md:text-lg font-bold">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Direto
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Fale connosco{" "}
                  <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    agora mesmo
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-white/60 font-medium">
                  Entre em contato diretamente via WhatsApp e receba atendimento imediato da nossa equipe.
                </p>
              </div>

              <Card className="bg-white/[0.02] border border-white/[0.08] rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-10 h-10 text-green-400" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    Interesse em ter um sistema?
                  </h3>
                  
                  <p className="text-white/70 text-base md:text-lg font-medium mb-8 leading-relaxed">
                    Clique no botão abaixo e inicie uma conversa direta connosco. 
                    Vamos ajudá-lo a encontrar a solução perfeita para o seu negócio.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full h-16 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl hover:scale-[1.02] transition-all"
                      onClick={() => {
                        const message = encodeURIComponent("Olá! Tenho interesse em conhecer melhor os sistemas da Construware. Gostaria de agendar uma demonstração e saber mais sobre como podem ajudar o meu negócio.");
                        window.open(`https://wa.me/351963901577?text=${message}`, '_blank');
                      }}
                    >
                      <MessageSquare className="w-6 h-6 mr-3" />
                      Iniciar Conversa no WhatsApp
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-white/50 text-sm md:text-base font-medium">
                      <Phone className="w-4 h-4" />
                      +351 963 901 577
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alternative Contact Methods */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-black text-white mb-4">Outras formas de contacto:</h4>
                
                <div className="grid gap-3">
                  <Button 
                    variant="outline"
                    className="h-14 bg-white/[0.02] border-white/[0.08] hover:border-orange-500/30 text-white hover:bg-white/[0.04] rounded-xl font-bold justify-start"
                    onClick={() => window.open('mailto:contato@construware.com', '_blank')}
                  >
                    <Mail className="w-5 h-5 mr-3 text-orange-400" />
                    contato@construware.com
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="h-14 bg-white/[0.02] border-white/[0.08] hover:border-blue-500/30 text-white hover:bg-white/[0.04] rounded-xl font-bold justify-start"
                    onClick={() => window.open('tel:+351211234567', '_blank')}
                  >
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    +351 21 123 4567
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Services & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Services */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Como podemos ajudar?</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <Card key={index} className="bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/20 transition-all duration-300 rounded-2xl">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-black text-white">{service.title}</h4>
                              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs font-bold">
                                {service.response}
                              </Badge>
                            </div>
                            <p className="text-white/60 text-sm md:text-base font-medium">{service.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl">
                      <CardContent className="p-6">
                        <h4 className="text-base md:text-lg font-black text-white mb-3">{faq.question}</h4>
                        <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/[0.03] rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-10 h-10 text-orange-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                começar?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Junte-se a milhares de empresas que já transformaram seus negócios 
              com a Construware.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 h-auto rounded-2xl text-lg md:text-xl font-bold hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Demonstração
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white/80 hover:bg-white/[0.05] hover:border-white/30 px-10 py-5 h-auto rounded-2xl text-lg md:text-xl font-bold"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 