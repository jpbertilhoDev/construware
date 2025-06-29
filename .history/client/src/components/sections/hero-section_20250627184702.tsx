import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles, Users, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-b from-background via-background to-background/80 relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-40"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 gradient-orb-1 opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 gradient-orb-2 opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-orb-3 opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="glass-effect px-6 py-3 text-base border border-orange-500/30 bg-orange-500/10 text-orange-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Desenvolvimento de Software Premium
            </Badge>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-text block">Criamos</span>
            <span className="gradient-text-primary block">Sistemas</span>
            <span className="gradient-text block">Extraordinários</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desenvolvemos <strong className="text-white font-semibold">soluções de software personalizadas</strong> para empresas 
            de todos os setores. De <strong className="text-orange-400">aplicações web</strong> a <strong className="text-orange-400">sistemas mobile</strong>, 
            transformamos suas ideias em realidade digital.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold group transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect"
            >
              Iniciar Projeto
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
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass-effect p-6 rounded-2xl border border-white/10 backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-black gradient-text-primary mb-2">200+</div>
              <div className="text-white/60 text-sm">Projetos Entregues</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl border border-white/10 backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-black gradient-text-primary mb-2">98%</div>
              <div className="text-white/60 text-sm">Satisfação de Clientes</div>
            </div>
            <div className="glass-effect p-6 rounded-2xl border border-white/10 backdrop-blur-sm group hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-black gradient-text-primary mb-2">15</div>
              <div className="text-white/60 text-sm">Setores Atendidos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}