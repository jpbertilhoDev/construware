import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.008]"></div>
        <div className="absolute top-[20%] left-[10%] w-[200px] sm:w-[400px] h-[150px] sm:h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[150px] sm:w-[300px] h-[100px] sm:h-[200px] bg-blue-400/[0.015] rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge 
                variant="outline" 
                className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium bg-purple-950/30 border-purple-500/40 text-purple-300 hover:bg-purple-950/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-pulse" />
                Vamos Conversar
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[-0.02em] mb-6 sm:mb-8 leading-[0.85] text-white px-2 sm:px-0">
              Prontos para{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                começar
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
              Transforme a sua ideia numa solução digital que faz a diferença. 
              Conte-nos sobre o seu projeto e vamos criar algo incrível juntos.
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/[0.03] rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-10 h-10 text-green-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.008]"></div>
        <div className="absolute top-[20%] left-[10%] w-[200px] sm:w-[400px] h-[150px] sm:h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[150px] sm:w-[300px] h-[100px] sm:h-[200px] bg-blue-400/[0.015] rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge 
                variant="outline" 
                className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium bg-purple-950/30 border-purple-500/40 text-purple-300 hover:bg-purple-950/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-pulse" />
                Vamos Conversar
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[-0.02em] mb-6 sm:mb-8 leading-[0.85] text-white px-2 sm:px-0">
              Prontos para{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                começar
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
              Transforme a sua ideia numa solução digital que faz a diferença. 
              Conte-nos sobre o seu projeto e vamos criar algo incrível juntos.
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500/[0.03] rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-10 h-10 text-green-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
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