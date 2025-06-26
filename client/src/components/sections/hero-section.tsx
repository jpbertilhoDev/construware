import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Play, ClipboardList, Clock, PieChart, BarChart3, Building, Layers, Ruler, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20">
      {/* Construction Grid Background */}
      <div className="absolute inset-0 construction-grid opacity-5"></div>

      {/* Modern Building Silhouettes */}
      <div className="absolute inset-0 opacity-20">
        <div className="building-shape-1"></div>
        <div className="building-shape-2"></div>
        <div className="building-shape-3"></div>
        <div className="building-shape-4"></div>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-60 md:w-96 h-60 md:h-96 gradient-orb-1 opacity-5"></div>
      <div className="absolute top-40 right-20 w-40 md:w-80 h-40 md:h-80 gradient-orb-2 opacity-3"></div>
      <div className="absolute bottom-20 left-1/3 w-32 md:w-64 h-32 md:h-64 gradient-orb-3 opacity-2"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.div 
            className="relative mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Fundo escuro para melhor contraste apenas em dispositivos móveis */}
            <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl -z-10 sm:hidden"></div>
            
            <h1 className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight">
              <span className="gradient-text block py-1">
                Construa o
              </span>
              <span className="gradient-text-primary block text-[5.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl py-1">
                Futuro
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-xl md:text-2xl text-white/90 font-medium mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Plataforma completa de gestão que revoluciona como você planeja, 
            executa e entrega projetos de construção.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center mb-16 sm:mb-20 md:mb-24 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="text-base sm:text-lg w-full sm:w-auto px-6 sm:px-10 py-6 sm:py-6 rounded-xl sm:rounded-2xl glow-effect hover:glow-effect font-semibold group transition-all duration-300 shadow-lg shadow-orange-600/20"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg w-full sm:w-auto px-6 sm:px-10 py-6 sm:py-6 rounded-xl sm:rounded-2xl glass-effect border-white/20 hover:border-white/40 text-white hover:text-white font-semibold group transition-all duration-300"
            >
              <Play className="w-5 h-5 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Demonstração
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Construction System Interface - Reduzido em tamanho para dar mais destaque ao texto */}
      <motion.div 
        className="absolute -bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-[85%] sm:max-w-5xl px-3 sm:px-6"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 0.75, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
      >
        <div className="relative floating-element">
          <div className="construction-interface-card bg-[#1A1A1A]/60 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
            {/* Header with system controls - visível apenas em telas maiores */}
            <div className="flex items-center justify-between mb-1 sm:mb-3 pb-1 sm:pb-2 border-b border-white/5">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500/60 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500/60 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500/60 rounded-full"></div>
              </div>
              <div className="flex items-center">
                <Building className="w-2 h-2 sm:w-3 sm:h-3 text-orange-500/60 mr-1 sm:mr-1.5" />
                <div className="text-white/40 text-[8px] sm:text-xs font-mono">construware.app</div>
              </div>
            </div>

            {/* Layout responsivo com grid adaptável */}
            <div className="grid grid-cols-12 gap-1 sm:gap-3 h-full">
              {/* Left sidebar - oculto em telas muito pequenas */}
              <div className="hidden xs:block col-span-12 sm:col-span-3 flex-col gap-1 sm:gap-2">
                <div className="p-1 sm:p-2 bg-[#222]/30 rounded-md flex-1">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <Compass className="w-2 h-2 sm:w-3 sm:h-3 text-orange-500/60 mr-1 sm:mr-1.5" />
                    <div className="text-[8px] sm:text-[10px] text-white/50">Navegação</div>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="h-1 sm:h-2 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-1 sm:h-2 w-5/6 bg-white/10 rounded-full"></div>
                    <div className="h-1 sm:h-2 w-2/3 bg-orange-500/20 rounded-full"></div>
                    <div className="h-1 sm:h-2 w-4/5 bg-white/10 rounded-full"></div>
                    <div className="h-1 sm:h-2 w-3/4 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-1 sm:p-2 bg-[#222]/30 rounded-md">
                  <div className="flex items-center mb-1 sm:mb-1.5">
                    <BarChart3 className="w-2 h-2 sm:w-3 sm:h-3 text-blue-500/60 mr-1 sm:mr-1.5" />
                    <div className="text-[8px] sm:text-[10px] text-white/50">Progresso</div>
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <div className="h-1 sm:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[75%] bg-orange-500/40 rounded-full"></div>
                    </div>
                    <div className="h-1 sm:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[62%] bg-blue-500/40 rounded-full"></div>
                    </div>
                    <div className="h-1 sm:h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-green-500/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area - ocupa a tela toda em dispositivos móveis */}
              <div className="col-span-12 sm:col-span-9 flex flex-col gap-1 sm:gap-3">
                {/* Project progress visualization */}
                <div className="grid grid-cols-3 gap-1 sm:gap-2">
                  <div className="project-card p-1 sm:p-2 bg-[#222]/30 rounded-md">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <div className="flex items-center">
                        <Ruler className="w-2 h-2 sm:w-3 sm:h-3 text-orange-500/60 mr-0.5 sm:mr-1" />
                        <div className="text-[8px] sm:text-[10px] text-white/50">Fundação</div>
                      </div>
                      <div className="text-[6px] sm:text-[10px] text-white/30">87%</div>
                    </div>
                    <div className="h-0.5 sm:h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[87%] bg-orange-500/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="project-card p-1 sm:p-2 bg-[#222]/30 rounded-md">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <div className="flex items-center">
                        <Layers className="w-2 h-2 sm:w-3 sm:h-3 text-blue-500/60 mr-0.5 sm:mr-1" />
                        <div className="text-[8px] sm:text-[10px] text-white/50">Estrutura</div>
                      </div>
                      <div className="text-[6px] sm:text-[10px] text-white/30">64%</div>
                    </div>
                    <div className="h-0.5 sm:h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[64%] bg-blue-500/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="project-card p-1 sm:p-2 bg-[#222]/30 rounded-md">
                    <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                      <div className="flex items-center">
                        <ClipboardList className="w-2 h-2 sm:w-3 sm:h-3 text-green-500/60 mr-0.5 sm:mr-1" />
                        <div className="text-[8px] sm:text-[10px] text-white/50">Acabamento</div>
                      </div>
                      <div className="text-[6px] sm:text-[10px] text-white/30">92%</div>
                    </div>
                    <div className="h-0.5 sm:h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[92%] bg-green-500/40 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Construction timeline */}
                <div className="p-1 sm:p-2 bg-[#222]/25 rounded-md flex-grow">
                  <div className="text-[8px] sm:text-[10px] text-white/40 mb-1 sm:mb-2 flex items-center">
                    <Clock className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-white/30" />
                    Cronograma de obra
                  </div>
                  
                  {/* Timeline visualization */}
                  <div className="relative h-10 sm:h-20">
                    {/* Timeline background */}
                    <div className="absolute inset-0 grid grid-cols-5 gap-0.5 sm:gap-1">
                      <div className="bg-orange-500/15 rounded-sm"></div>
                      <div className="bg-blue-500/10 rounded-sm"></div>
                      <div className="bg-green-500/15 rounded-sm"></div>
                      <div className="bg-purple-500/10 rounded-sm"></div>
                      <div className="bg-yellow-500/15 rounded-sm"></div>
                    </div>
                    
                    {/* Timeline markers */}
                    <div className="absolute inset-0">
                      {/* Vertical time markers */}
                      <div className="grid grid-cols-12 h-full">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="h-full border-l border-white/5"></div>
                        ))}
                      </div>
                      
                      {/* Current progress indicator */}
                      <div className="absolute left-[45%] top-0 bottom-0 w-px bg-orange-500/40">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-500/80 -translate-x-[2px] sm:-translate-x-[3px] -translate-y-[2px] sm:-translate-y-[3px]"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline labels */}
                  <div className="flex justify-between mt-0.5 sm:mt-1 text-[6px] sm:text-[8px] text-white/30">
                    <div>Jan</div>
                    <div>Fev</div>
                    <div>Mar</div>
                    <div>Abr</div>
                    <div>Mai</div>
                    <div>Jun</div>
                    <div>Jul</div>
                  </div>
                </div>

                {/* System metrics */}
                <div className="grid grid-cols-4 gap-1 sm:gap-2">
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <Compass className="w-2 h-2 sm:w-3 sm:h-3 text-orange-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-orange-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Projeto</div>
                  </div>
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <BarChart3 className="w-2 h-2 sm:w-3 sm:h-3 text-blue-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-blue-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Materiais</div>
                  </div>
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <PieChart className="w-2 h-2 sm:w-3 sm:h-3 text-green-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-green-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Financeiro</div>
                  </div>
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <Building className="w-2 h-2 sm:w-3 sm:h-3 text-purple-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-purple-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Entrega</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Subtle Construction Tools Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        {/* Construction tools scattered subtly */}
        <div className="construction-tool-1"></div>
        <div className="construction-tool-2"></div>
        <div className="construction-tool-3"></div>
        <div className="construction-tool-4"></div>
        <div className="construction-tool-5"></div>
        <div className="construction-tool-6"></div>
      </div>
    </section>
  );
}