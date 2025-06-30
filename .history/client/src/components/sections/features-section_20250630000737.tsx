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
    title: "Resultados em 30 dias",
    description: "Vê o retorno logo no primeiro mês ou devolvemos o dinheiro.",
    metric: "30d",
    color: "from-yellow-500 to-orange-500"
  }
];

export function FeaturesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="features" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Clean Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Sparkles className="w-3 h-3 text-orange-400" />
            <span className="text-orange-300 text-xs font-medium">Benefícios Reais</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight">
            <span className="text-white">O que vai </span>
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text">
              ganhar
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-400 max-w-xl mx-auto font-light">
            Resultados concretos que transformam o seu negócio
          </p>
        </motion.div>

        {/* Clean Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveCard(benefit.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full p-6 md:p-8 rounded-2xl transition-all duration-500 ${
                  activeCard === benefit.id 
                    ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-orange-500/30 shadow-lg shadow-orange-500/10 scale-105' 
                    : 'bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 hover:border-white/20'
                }`}>
                  
                  {/* Header with Icon and Metric */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${benefit.color} bg-opacity-20`}>
                      <span className="text-white font-bold text-sm md:text-base">{benefit.metric}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-300 transition-colors leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Subtle hover indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${benefit.color} transition-opacity duration-300 ${
                    activeCard === benefit.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Pronto para começar?
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Junte-se a centenas de empresas satisfeitas
            </p>
            
            <Button 
              size="lg"
              className="px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group"
            >
              Quero o Meu Sistema
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
