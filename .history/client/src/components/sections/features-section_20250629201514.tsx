import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: "time",
    icon: Clock,
    title: "Poupe 15 horas por semana",
    subtitle: "Automatização inteligente",
    description: "Deixe que o sistema faça o trabalho pesado enquanto se concentra em fazer crescer o seu negócio.",
    metric: "15h",
    metricLabel: "poupadas/semana",
    color: "from-orange-500 to-amber-500",
    highlight: "Mais tempo para o que importa"
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Aumente as vendas em 40%",
    subtitle: "Conversão otimizada",
    description: "Sistemas inteligentes que transformam visitantes em clientes e clientes em vendas recorrentes.",
    metric: "+40%",
    metricLabel: "nas vendas",
    color: "from-emerald-500 to-teal-500",
    highlight: "Resultados comprovados"
  },
  {
    id: "efficiency",
    icon: BarChart3,
    title: "Triplique a produtividade",
    subtitle: "Gestão centralizada",
    description: "Uma única plataforma para gerir todo o seu negócio. Simples, rápida e eficaz.",
    metric: "3x",
    metricLabel: "mais produtivo",
    color: "from-blue-500 to-indigo-500",
    highlight: "Tudo num só lugar"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "O seu negócio no bolso",
    subtitle: "Acesso total, sempre",
    description: "Aplicações móveis que funcionam perfeitamente, mesmo sem internet. Controlo total onde quer que esteja.",
    metric: "24/7",
    metricLabel: "disponível",
    color: "from-purple-500 to-violet-500",
    highlight: "Funciona offline"
  },
  {
    id: "security",
    icon: Shield,
    title: "Segurança de nível bancário",
    subtitle: "Dados 100% protegidos",
    description: "A mesma tecnologia de segurança usada pelos bancos. Os seus dados nunca estiveram tão seguros.",
    metric: "100%",
    metricLabel: "seguro",
    color: "from-cyan-500 to-blue-500",
    highlight: "Conformidade total"
  },
  {
    id: "speed",
    icon: Zap,
    title: "Resultados em 30 dias",
    subtitle: "Implementação rápida",
    description: "Vê o retorno do investimento logo no primeiro mês. Garantimos resultados ou devolvemos o dinheiro.",
    metric: "30",
    metricLabel: "dias para ROI",
    color: "from-yellow-500 to-orange-500",
    highlight: "Garantia de resultado"
  }
];

export function FeaturesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="features" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Elegant background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Minimalist Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Benefícios Reais</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            <span className="text-white">O que vai </span>
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text">
              ganhar
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            Não vendemos tecnologia. 
            <br className="hidden md:block" />
            <span className="text-white font-medium">Vendemos resultados que transformam negócios.</span>
          </p>
        </motion.div>

        {/* Benefits Grid - Minimalist Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveCard(benefit.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group cursor-pointer"
              >
                <div className={`relative h-full p-8 rounded-3xl transition-all duration-700 ${
                  activeCard === benefit.id 
                    ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-2 border-orange-500/30 shadow-2xl shadow-orange-500/10 -translate-y-2' 
                    : 'bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-white/20'
                }`}>
                  {/* Floating metric */}
                  <div className="absolute -top-4 right-6">
                    <div className={`px-4 py-2 rounded-2xl bg-gradient-to-r ${benefit.color} shadow-lg`}>
                      <div className="text-white font-bold text-lg">{benefit.metric}</div>
                      <div className="text-white/80 text-xs text-center">{benefit.metricLabel}</div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                        {benefit.title}
                      </h3>
                      <div className="text-orange-400 text-sm font-medium mb-4">
                        {benefit.subtitle}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Highlight */}
                    <div className="flex items-center gap-2 pt-4">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-300 font-medium">
                        {benefit.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                    activeCard === benefit.id 
                      ? 'bg-gradient-to-br from-orange-500/5 to-transparent opacity-100' 
                      : 'opacity-0'
                  }`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Minimalist */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para transformar o seu negócio?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Junte-se a centenas de empresas que já automatizaram os seus processos
            </p>
            
            <Button 
              size="lg"
              className="px-12 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 group"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
