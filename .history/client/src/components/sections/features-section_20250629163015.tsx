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
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    id: "time",
    icon: Clock,
    title: "Poupe 15 horas por semana",
    description: "Automatizamos as tarefas repetitivas para se focar no que realmente importa - fazer crescer o seu negócio.",
    features: [
      "Relatórios automáticos",
      "Notificações inteligentes",
      "Sincronização em tempo real",
      "Backup automático"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "Aumente as vendas em 40%",
    description: "Sistemas que convertem mais visitantes em clientes e clientes em vendas recorrentes.",
    features: [
      "Landing pages que convertem",
      "Funis de vendas automáticos",
      "Follow-up inteligente",
      "Analytics detalhados"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "team",
    icon: Users,
    title: "Equipa mais produtiva",
    description: "Ferramentas que facilitam a colaboração e eliminam a confusão entre equipas.",
      features: [
      "Dashboard centralizado",
      "Comunicação integrada",
      "Gestão de tarefas",
      "Relatórios de performance"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Acesso em qualquer lugar",
    description: "Aplicações móveis que funcionam perfeitamente, mesmo offline. O seu negócio no bolso.",
      features: [
      "Apps iOS e Android",
      "Funciona offline",
      "Sincronização automática",
      "Interface intuitiva"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "security",
    icon: Shield,
    title: "Máxima segurança",
    description: "Os seus dados ficam completamente protegidos. Usamos a mesma segurança dos bancos.",
      features: [
      "Encriptação militar",
      "Backups automáticos",
      "Conformidade RGPD",
      "Acesso controlado"
    ],
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "speed",
    icon: Zap,
    title: "Resultados em 30 dias",
    description: "Implementação rápida e resultados imediatos. Vê o retorno do investimento no primeiro mês.",
      features: [
      "Setup em 48h",
      "Treinamento incluído",
      "Suporte dedicado",
      "Garantia de resultado"
    ],
    color: "from-yellow-500 to-orange-500"
  }
];

export function FeaturesSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="features" className="section-spacing bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute inset-0 construction-grid opacity-5"></div>

      <div className="container-improved relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-6 px-6 py-3 bg-orange-500/10 text-orange-300 border-orange-500/20">
            <Zap className="w-4 h-4 mr-2" />
            Benefícios Reais
          </Badge>
          
          <h2 className="heading-xl mb-6 md:mb-8">
            O que vai ganhar com{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
              os nossos sistemas
            </span>
          </h2>
          
          <p className="text-body-lg max-w-3xl mx-auto">
            Não vendemos funcionalidades técnicas. Vendemos resultados concretos 
            que fazem a diferença no seu negócio.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                className="group"
              >
                <Card className={`h-full bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/30 border border-white/10 rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-white/20 hover:-translate-y-2 ${
                  activeCard === benefit.id ? 'scale-105 border-orange-500/30' : ''
                }`}>
                  <CardContent className="p-6 md:p-8">
                    {/* Icon */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${benefit.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {benefit.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 text-sm md:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="ghost" 
                      className="w-full text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                    >
                      Saber Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-yellow-500/10 rounded-3xl p-8 md:p-12 border border-orange-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar o seu negócio?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Junte-se a mais de 50 empresas que já automatizaram os seus processos 
              e viram resultados reais em menos de 30 dias.
            </p>
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4"
            >
              Começar Agora - É Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
