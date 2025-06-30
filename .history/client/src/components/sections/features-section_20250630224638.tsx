import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  TrendingUp, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: "time",
    icon: Clock,
    title: "Poupe 15 horas por semana",
    description: "Automatização inteligente que faz o trabalho pesado por si.",
    metric: "15h",
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Aumente as vendas em 40%",
    description: "Sistemas que transformam visitantes em clientes fiéis.",
    metric: "+40%",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "efficiency",
    icon: BarChart3,
    title: "Triplique a produtividade",
    description: "Uma única plataforma para gerir todo o seu negócio.",
    metric: "3x",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Acesso total, sempre",
    description: "O seu negócio no bolso, funciona mesmo offline.",
    metric: "24/7",
    color: "from-purple-500 to-violet-500"
  },
  {
    id: "security",
    icon: Shield,
    title: "Segurança bancária",
    description: "Os seus dados protegidos com tecnologia de nível bancário.",
    metric: "100%",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "speed",
    icon: Zap,
    title: "Experiência Comprovada",
    description: "Mais de 20 sistemas entregues com foco em performance e usabilidade.",
    metric: "20+ projetos",
    color: "from-yellow-500 to-orange-500"
  }
];

export function FeaturesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/8 to-cyan-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/6 to-pink-500/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-60 h-60 bg-gradient-to-r from-emerald-500/8 to-teal-500/6 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Eye-catching Header */}
        <motion.div 
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/15 via-yellow-500/10 to-orange-500/15 border border-orange-500/20 backdrop-blur-sm mb-8 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            <span className="text-orange-300 text-sm font-semibold tracking-wide">BENEFÍCIOS REAIS</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white drop-shadow-2xl">O que vai </span>
            <span className="relative">
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text animate-pulse">
                ganhar
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl"
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-400 font-semibold">Resultados mensuráveis</span> que transformam completamente o seu negócio
          </motion.p>
        </motion.div>

        {/* Interactive Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveCard(benefit.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group cursor-pointer"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className={`relative h-full p-8 md:p-10 rounded-3xl transition-all duration-500 ${
                  activeCard === benefit.id 
                    ? 'bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border-2 border-orange-500/30 shadow-2xl shadow-orange-500/10' 
                    : 'bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-transparent border border-white/8 hover:border-orange-500/20'
                } backdrop-blur-sm`}>
                  
                  {/* Animated Icon */}
                  <div className="mb-8 relative">
                    <motion.div 
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center bg-gradient-to-br ${benefit.color} shadow-xl relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: [-100, 100],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      />
                      <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10" />
                    </motion.div>
                    
                    {/* Floating metric badge */}
                    <motion.div 
                      className={`absolute -top-2 -right-2 px-3 py-2 rounded-2xl bg-gradient-to-r ${benefit.color} shadow-lg border-2 border-white/10`}
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <span className="text-white font-black text-sm md:text-base tracking-wider">
                        {benefit.metric}
                      </span>
                    </motion.div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="space-y-6">
                    <h3 className={`text-xl md:text-2xl font-black leading-tight transition-all duration-300 ${
                      activeCard === benefit.id 
                        ? 'text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text' 
                        : 'text-white group-hover:text-orange-300'
                    }`}>
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Interactive border effects */}
                  <motion.div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.color} opacity-0 transition-opacity duration-500`}
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${benefit.color.includes('orange') ? 'rgba(251, 146, 60, 0.05)' : benefit.color.includes('emerald') ? 'rgba(16, 185, 129, 0.05)' : benefit.color.includes('blue') ? 'rgba(59, 130, 246, 0.05)' : benefit.color.includes('purple') ? 'rgba(139, 92, 246, 0.05)' : benefit.color.includes('cyan') ? 'rgba(6, 182, 212, 0.05)' : 'rgba(251, 191, 36, 0.05)'} 50%, transparent 100%)`,
                      opacity: activeCard === benefit.id ? 1 : 0
                    }}
                  />

                  {/* Corner accents */}
                  <div className={`absolute top-0 left-0 w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-tl-3xl rounded-br-2xl transition-opacity duration-500 ${
                    activeCard === benefit.id ? 'opacity-60' : 'opacity-0'
                  }`}></div>
                  <div className={`absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl ${benefit.color} rounded-br-3xl rounded-tl-2xl transition-opacity duration-500 ${
                    activeCard === benefit.id ? 'opacity-60' : 'opacity-0'
                  }`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive CTA */}
        <motion.div 
          className="text-center mt-24 md:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-orange-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-orange-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <motion.h3 
                className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-white">Pronto para </span>
                <span className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text">
                  revolucionar
                </span>
                <span className="text-white"> o seu negócio?</span>
              </motion.h3>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Junte-se a <span className="text-orange-400 font-bold">+500 empresas</span> que já experimentam crescimento exponencial
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="relative px-12 md:px-16 py-5 md:py-6 text-xl md:text-2xl font-black rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 hover:from-orange-600 hover:via-orange-700 hover:to-yellow-600 text-white shadow-2xl shadow-orange-500/30 hover:shadow-3xl hover:shadow-orange-500/40 transition-all duration-500 group overflow-hidden"
                  >
                    {/* Button shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: [-200, 200],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center">
                      Transformar Agora
                      <motion.div
                        className="ml-4"
                        animate={{
                          x: [0, 4, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-sm"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-sm"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
