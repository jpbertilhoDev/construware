import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone,
  MessageSquare,
  Users,
  Sparkles,
  Building
} from "lucide-react";
import { motion } from "framer-motion";

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
    icon: MessageSquare,
    title: "WhatsApp Direto",
    description: "Contacto imediato via WhatsApp para qualquer questão",
    response: "Resposta instantânea"
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
      <section className="pt-40 sm:pt-48 pb-32 sm:pb-40 relative overflow-hidden">
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



      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-12">
              <Badge className="mb-6 bg-green-500/10 text-green-400 border-green-500/20 text-lg md:text-xl font-bold px-6 py-3">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Fale connosco{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                  agora mesmo
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 font-medium max-w-3xl mx-auto">
                Entre em contato diretamente via WhatsApp e receba atendimento imediato da nossa equipe.
              </p>
            </div>

            <Card className="bg-white/[0.02] border border-white/[0.08] rounded-3xl max-w-2xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <MessageSquare className="w-12 h-12 text-green-400" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Interesse em ter um sistema?
                </h3>
                
                <p className="text-white/70 text-lg md:text-xl font-medium mb-10 leading-relaxed">
                  Clique no botão abaixo e inicie uma conversa direta connosco. 
                  Vamos ajudá-lo a encontrar a solução perfeita para o seu negócio.
                </p>
                
                <div className="space-y-6">
                  <Button 
                    size="lg" 
                    className="w-full h-16 bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded-2xl hover:scale-[1.02] transition-all"
                    onClick={() => {
                      const message = encodeURIComponent("Olá! Tenho interesse em conhecer melhor os sistemas da Construware. Gostaria de agendar uma demonstração e saber mais sobre como podem ajudar o meu negócio.");
                      window.open(`https://wa.me/351963901577?text=${message}`, '_blank');
                    }}
                  >
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Iniciar Conversa no WhatsApp
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-white/60 text-lg font-bold">
                    <Phone className="w-5 h-5" />
                    +351 963 901 577
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      </section>

      {/* Services & FAQ */}
      <section className="py-20 bg-gray-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8">Como podemos ajudar?</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="bg-white/[0.02] border border-white/[0.06] hover:border-green-500/20 transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-green-400" />
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
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
            
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 h-auto rounded-2xl text-xl md:text-2xl font-bold hover:scale-105 transition-all mx-auto"
              onClick={() => {
                const message = encodeURIComponent("Olá! Gostaria de agendar uma demonstração da Construware. Tenho interesse em conhecer melhor como os vossos sistemas podem ajudar o meu negócio.");
                window.open(`https://wa.me/351963901577?text=${message}`, '_blank');
              }}
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Agendar via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 