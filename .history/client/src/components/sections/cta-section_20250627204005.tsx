import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-64 h-64 gradient-orb-1 opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 gradient-orb-2 opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center glass-effect px-6 py-3 rounded-2xl border border-white/10 mb-8">
              <Sparkles className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-white/80 font-medium">Transforme sua ideia hoje</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">
            <span className="gradient-text block">Pronto para</span>
            <span className="gradient-text-primary block">Inovar?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-4xl mx-auto leading-relaxed">
            Mais de <strong className="text-white font-bold">500+ empresas</strong> já transformaram 
            suas ideias em sistemas de sucesso. Aumente sua eficiência em <strong className="text-orange-400">60%</strong>
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Ver Portfolio
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-black gradient-text-primary mb-2">60%</div>
              <div className="text-white/60 text-sm">Redução de Tempo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text-primary mb-2">24/7</div>
              <div className="text-white/60 text-sm">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text-primary mb-2">100%</div>
              <div className="text-white/60 text-sm">Código Próprio</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
