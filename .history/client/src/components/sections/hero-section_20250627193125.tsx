import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-black relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
      
      {/* Single subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Clean, simple headline like Cursor */}
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            O Editor de Software{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Inteligente
            </span>
          </motion.h1>
          
          {/* Simple, clear subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Construído para torná-lo extraordinariamente produtivo, a Construware é a melhor forma de desenvolver software com IA.
          </motion.p>
          
          {/* Clean CTA section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="px-8 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 font-semibold transition-all duration-200"
            >
              <Play className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          </motion.div>
          
          {/* Trusted by section like Cursor */}
          <motion.div 
            className="pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider font-medium">
              Confiança de empresas em
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <div className="text-gray-400 font-semibold text-lg">TechStart</div>
              <div className="text-gray-400 font-semibold text-lg">FinanceFlow</div>
              <div className="text-gray-400 font-semibold text-lg">LogiChain</div>
              <div className="text-gray-400 font-semibold text-lg">EduTech</div>
              <div className="text-gray-400 font-semibold text-lg">HealthCare Digital</div>
              <div className="text-gray-400 font-semibold text-lg">E-Commerce Plus</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}