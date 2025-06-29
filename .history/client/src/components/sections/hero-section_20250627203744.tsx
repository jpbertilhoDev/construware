import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Play, ClipboardList, Clock, PieChart, BarChart3, Building, Layers, Ruler, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      <div className="absolute top-20 left-20 w-64 h-64 gradient-orb-1 opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 gradient-orb-2 opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Enhanced badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center glass-effect px-4 py-2 rounded-2xl border border-orange-500/30 text-orange-400 text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Desenvolvimento de Software Personalizado</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight"
          >
            <span className="gradient-text">Criamos</span>
            <br />
            <span className="gradient-text-primary">Sistemas</span>
            <br />
            <span className="gradient-text">Que Transformam</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Da ideia ao lançamento, desenvolvemos <strong className="text-white">software personalizado</strong> 
            para qualquer nicho. Desktop, mobile, web - criamos a solução perfeita para o seu negócio.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold group transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect"
            >
              Começar Projeto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-12 py-6 rounded-2xl glass-effect border-white/20 hover:border-white/40 text-white hover:text-white font-semibold group transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Portfolio
            </Button>
          </motion.div>

          {/* Enhanced stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center glass-effect p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-black gradient-text-primary mb-2">200+</div>
              <div className="text-white/60">Sistemas Entregues</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-black gradient-text-primary mb-2">50+</div>
              <div className="text-white/60">Nichos Atendidos</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-2xl border border-white/10">
              <div className="text-4xl font-black gradient-text-primary mb-2">95%</div>
              <div className="text-white/60">Taxa de Sucesso</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-orange-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}