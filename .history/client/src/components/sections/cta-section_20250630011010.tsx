import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      
      {/* Floating elements - reduced for mobile */}
      <div className="absolute top-20 left-20 w-48 md:w-64 h-48 md:h-64 gradient-orb-1 opacity-5 md:opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-60 md:w-80 h-60 md:h-80 gradient-orb-2 opacity-5 md:opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center glass-effect px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/10 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mr-2" />
              <span className="text-white/80 font-medium text-sm md:text-base">Desenvolva seu futuro digital hoje</span>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-[0.9]">
            <span className="gradient-text block">Pronto para</span>
            <span className="gradient-text-primary block">Inovar?</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Mais de <strong className="text-white font-bold">200+ empresas</strong> já transformaram 
            suas operações digitais e aumentaram a eficiência em <strong className="text-orange-400">60%</strong>
          </p>
          
          <motion.div 
            className="flex flex-col gap-4 justify-center items-center mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="text-base md:text-lg w-full max-w-sm sm:max-w-none sm:w-auto px-8 md:px-12 py-4 md:py-6 h-14 md:h-auto rounded-xl md:rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold group transition-all duration-300 hover:scale-105 hover:shadow-2xl glow-effect"
            >
              <span className="hidden sm:inline">Solicitar Proposta Personalizada</span>
              <span className="sm:hidden">Solicitar Proposta</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-base md:text-lg w-full max-w-sm sm:max-w-none sm:w-auto px-8 md:px-12 py-4 md:py-6 h-14 md:h-auto rounded-xl md:rounded-2xl glass-effect border-white/20 hover:border-white/40 text-white hover:text-white font-semibold group transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Ver Portfolio
            </Button>
          </motion.div>

          {/* Trust indicators - responsive grid */}
          <motion.div 
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text-primary mb-1 md:mb-2">100%</div>
              <div className="text-white/60 text-xs md:text-sm">Código Proprietário</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text-primary mb-1 md:mb-2">24/7</div>
              <div className="text-white/60 text-xs md:text-sm">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text-primary mb-1 md:mb-2">∞</div>
              <div className="text-white/60 text-xs md:text-sm">Possibilidades</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
