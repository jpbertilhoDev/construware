import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Play, Monitor, Smartphone, Database, Code, Layers, Settings, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-8">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 construction-grid opacity-5"></div>

      {/* Modern Building Silhouettes */}
      <div className="absolute inset-0 opacity-20">
        <div className="building-shape-1"></div>
        <div className="building-shape-2"></div>
        <div className="building-shape-3"></div>
        <div className="building-shape-4"></div>
      </div>

      {/* Floating gradient orbs - reduced opacity for mobile */}
      <div className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 gradient-orb-1 opacity-3 md:opacity-5"></div>
      <div className="absolute top-40 right-20 w-32 md:w-80 h-32 md:h-80 gradient-orb-2 opacity-2 md:opacity-3"></div>
      <div className="absolute bottom-20 left-1/3 w-24 md:w-64 h-24 md:h-64 gradient-orb-3 opacity-1 md:opacity-2"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Badge - smaller on mobile */}
          <motion.div 
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge 
              variant="outline" 
              className="px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-medium bg-purple-950/30 border-purple-500/40 text-purple-300 hover:bg-purple-950/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 animate-pulse" />
              <span className="hidden sm:inline">Empresa de Desenvolvimento de Software</span>
              <span className="sm:hidden">Desenvolvimento de Software</span>
            </Badge>
          </motion.div>

          {/* Main heading - optimized for mobile */}
          <motion.div 
            className="relative mb-4 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Better mobile contrast */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl blur-2xl -z-10 md:hidden"></div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="gradient-text block py-1">
                Automatize o seu negócio
              </span>
              <span className="gradient-text-primary block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-1">
                3x mais rápido
              </span>
            </h1>
          </motion.div>

          {/* Subtitle - improved mobile readability */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <strong className="text-orange-400">Pare de perder tempo com tarefas manuais.</strong> 
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Criamos sistemas que fazem o trabalho por si - websites, aplicações e automações 
            que realmente aumentam as suas vendas.
          </motion.p>

          {/* CTA buttons - better mobile touch targets */}
          <motion.div 
            className="flex flex-col gap-4 justify-center items-center mb-12 md:mb-20 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="text-base w-full max-w-sm sm:max-w-none sm:w-auto px-8 py-4 h-14 rounded-xl glow-effect hover:glow-effect font-semibold group transition-all duration-300 shadow-lg shadow-orange-600/20"
            >
              <span className="hidden sm:inline">Quero o Meu Sistema Personalizado</span>
              <span className="sm:hidden">Quero o Meu Sistema</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base w-full max-w-sm sm:max-w-none sm:w-auto px-8 py-4 h-14 rounded-xl glass-effect border-white/20 hover:border-white/40 text-white hover:text-white font-semibold group transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Ver os Nossos Projectos</span>
              <span className="sm:hidden">Ver Projectos</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Software Development Interface - hidden on small mobile */}
      <motion.div 
        className="absolute -bottom-4 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-5xl px-2 sm:px-6 hidden xs:block"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{ opacity: 0.6, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.6, ease: "easeOut" }}
      >
        <div className="relative floating-element">
          <div className="construction-interface-card bg-[#1A1A1A]/60 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl w-full max-w-4xl mx-auto" style={{ aspectRatio: '16/9' }}>
            {/* Header with system controls */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 pb-2 border-b border-white/5">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500/60 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500/60 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500/60 rounded-full"></div>
              </div>
              <div className="flex items-center">
                <Code className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500/60 mr-1 sm:mr-2" />
                <div className="text-white/40 text-xs sm:text-sm font-mono">construware.dev</div>
              </div>
            </div>

            {/* Simplified layout for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 h-full">
              {/* Left sidebar - only visible on larger screens */}
              <div className="hidden sm:block sm:col-span-3 flex-col gap-2">
                <div className="p-2 bg-[#222]/30 rounded-md flex-1">
                  <div className="flex items-center mb-2">
                    <Globe className="w-3 h-3 text-orange-500/60 mr-1.5" />
                    <div className="text-xs text-white/50">Projectos</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-orange-500/20 rounded-full"></div>
                    <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-2 bg-[#222]/30 rounded-md">
                  <div className="flex items-center mb-1.5">
                    <Settings className="w-3 h-3 text-blue-500/60 mr-1.5" />
                    <div className="text-xs text-white/50">Performance</div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-orange-500/40 rounded-full"></div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-blue-500/40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content area - full width on mobile */}
              <div className="col-span-1 sm:col-span-9 flex flex-col gap-2 sm:gap-3">
                {/* Development progress visualization */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div className="project-card p-2 bg-[#222]/30 rounded-md">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Monitor className="w-3 h-3 text-orange-500/60 mr-1" />
                        <div className="text-xs text-white/50">Frontend</div>
                      </div>
                      <div className="text-xs text-white/30">87%</div>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[87%] bg-orange-500/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="project-card p-2 bg-[#222]/30 rounded-md">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Database className="w-3 h-3 text-blue-500/60 mr-1" />
                        <div className="text-xs text-white/50">Backend</div>
                      </div>
                      <div className="text-xs text-white/30">94%</div>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[94%] bg-blue-500/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="project-card p-2 bg-[#222]/30 rounded-md hidden sm:block">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Smartphone className="w-3 h-3 text-green-500/60 mr-1" />
                        <div className="text-xs text-white/50">Mobile</div>
                      </div>
                      <div className="text-xs text-white/30">76%</div>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[76%] bg-green-500/40 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Code editor mockup - simplified for mobile */}
                <div className="flex-1 bg-[#1A1A1A]/40 rounded-md p-2 sm:p-3 font-mono text-xs">
                  <div className="flex items-center mb-2">
                    <Layers className="w-3 h-3 text-orange-500/60 mr-1.5" />
                    <div className="text-white/50 text-xs">main.tsx</div>
                  </div>
                  <div className="space-y-1 text-white/30">
                    <div className="flex">
                      <span className="text-white/20 mr-2">1</span>
                      <span className="text-purple-400/60">import</span>
                      <span className="text-white/40 ml-1">{ Sistema }</span>
                      <span className="text-purple-400/60 ml-1">from</span>
                      <span className="text-green-400/60 ml-1">'./construware'</span>
                    </div>
                    <div className="flex">
                      <span className="text-white/20 mr-2">2</span>
                      <span className="text-white/40">Sistema.</span>
                      <span className="text-blue-400/60">automatizar</span>
                      <span className="text-white/40">()</span>
                      </div>
                    <div className="flex">
                      <span className="text-white/20 mr-2">3</span>
                      <span className="text-green-400/60">// ✅ Negócio automatizado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

                {/* Development timeline */}
                <div className="p-1 sm:p-2 bg-[#222]/25 rounded-md flex-grow">
                  <div className="text-[8px] sm:text-[10px] text-white/40 mb-1 sm:mb-2 flex items-center">
                    <Layers className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-1.5 text-white/30" />
                    Cronograma de desenvolvimento
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
                    <Globe className="w-2 h-2 sm:w-3 sm:h-3 text-orange-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-orange-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Projeto</div>
                  </div>
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <Settings className="w-2 h-2 sm:w-3 sm:h-3 text-blue-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-blue-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Materiais</div>
                  </div>
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <Code className="w-2 h-2 sm:w-3 sm:h-3 text-green-500/60 mb-0.5 sm:mb-1" />
                    <div className="w-full h-0.5 sm:h-1 bg-green-500/15 rounded-full mb-0.5 sm:mb-1"></div>
                    <div className="text-[6px] sm:text-[9px] text-white/30">Financeiro</div>
                  </div>
                  <div className="metric-card p-1 sm:p-1.5 bg-[#222]/20 rounded-md flex flex-col items-center">
                    <Globe className="w-2 h-2 sm:w-3 sm:h-3 text-purple-500/60 mb-0.5 sm:mb-1" />
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
