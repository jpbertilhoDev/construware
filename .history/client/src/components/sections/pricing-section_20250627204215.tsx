import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Gem, Star, Activity } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "€2.500",
    period: "projeto",
    description: "Para startups e pequenos negócios que precisam de soluções simples e eficazes",
    features: [
      "Website responsivo ou Landing Page",
      "Sistema básico de gestão",
      "Aplicação web simples",
      "Design UI/UX personalizado",
      "3 revisões incluídas",
      "Entrega em 4-6 semanas",
      "1 mês de suporte gratuito",
      "Hospedagem incluída (1 ano)"
    ],
    highlighted: false,
    bgColor: "bg-gray-900/40",
    icon: "Zap"
  },
  {
    name: "Professional",
    price: "€8.500",
    period: "projeto",
    description: "Ideal para empresas que necessitam de sistemas completos e integrados",
    features: [
      "Sistema completo web + mobile",
      "Dashboard administrativo",
      "Integração com APIs externas",
      "Base de dados personalizada",
      "Autenticação e segurança",
      "Sistema de pagamentos",
      "Relatórios e analytics",
      "Entrega em 8-12 semanas",
      "3 meses de suporte incluído",
      "Documentação técnica completa"
    ],
    highlighted: true,
    bgColor: "bg-gradient-to-br from-orange-500/10 to-yellow-500/10",
    icon: "Star"
  },
  {
    name: "Enterprise",
    price: "€25.000+",
    period: "projeto",
    description: "Para empresas que precisam de soluções robustas e escaláveis",
    features: [
      "Arquitetura de microserviços",
      "Aplicações multiplataforma",
      "Inteligência artificial integrada",
      "Sistema de alta disponibilidade",
      "DevOps e CI/CD",
      "Migração de dados",
      "Treinamento da equipe",
      "Entrega em 16+ semanas",
      "6 meses de suporte premium",
      "Consultoria estratégica incluída",
      "Escalabilidade ilimitada",
      "Compliance e certificações"
    ],
    highlighted: false,
    bgColor: "bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    icon: "Crown"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-40 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background elements - Inspirado no estilo Cursor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/15 via-orange-400/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/15 via-orange-500/10 to-transparent blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
            Soluções para Todos os Tamanhos
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Preços que fazem{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
              sentido
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            Desde startups até grandes empresas, temos a solução ideal para transformar 
            sua ideia em realidade digital. Sem mensalidades, sem surpresas.
          </p>
        </motion.div>

        {/* Segmento Tipo */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex p-0.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <button className="px-8 py-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium">
              Pessoal
            </button>
            <button className="px-8 py-2.5 rounded-full text-white/70 hover:text-white/90 transition-colors">
              Empresarial
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-orange-500 text-white px-3 py-1 shadow-sm border-0">
                      <Sparkles className="w-3 h-3 mr-1.5" />
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full backdrop-blur-sm border border-white/10 ${plan.bgColor} hover:border-orange-500/20 transition-colors duration-200`}>
                  <CardHeader className="text-center pb-6 pt-8">
                    {IconComponent && (
                      <div className="w-10 h-10 mx-auto mb-5 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-orange-400" />
                      </div>
                    )}
                    
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <div className="mb-3">
                      <span className="text-5xl font-bold tracking-tight text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-white/60 text-base ml-1">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    
                    <CardDescription className="text-sm text-white/60">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 pb-8">
                    <div className="h-px w-full bg-white/10"></div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li 
                          key={i} 
                          className="flex items-start"
                        >
                          <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-2.5 flex-shrink-0" />
                          <span className="text-sm text-white/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outline"
                      className={`w-full py-5 mt-4 rounded-xl group ${
                        plan.highlighted 
                          ? 'bg-orange-500 hover:bg-orange-600 border-0 text-white' 
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/20 text-white'
                      }`}
                      size="lg"
                    >
                      Obter {plan.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                    
                    {plan.name === "Starter" && (
                      <p className="text-xs text-white/40 text-center">
                        Sem cartão de crédito necessário
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="px-6 py-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm inline-block">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/60">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-orange-500 mr-2" />
                7 dias de teste grátis
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-orange-500 mr-2" />
                Cancele a qualquer momento
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-orange-500 mr-2" />
                Suporte em português
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
