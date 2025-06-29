import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Gem, Star, Activity } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
  {
    id: "website",
    name: "Website",
    icon: Activity,
    price: "€1.200",
    period: "",
    description: "Website institucional profissional e responsivo",
    features: [
      "Design moderno e responsivo",
      "Até 8 páginas institucionais",
      "Formulários de contato integrados",
      "SEO básico otimizado",
      "SSL e hospedagem por 1 ano",
      "Painel administrativo simples",
      "Suporte técnico por 3 meses"
    ],
    ctaText: "Solicitar Orçamento",
    ctaVariant: "outline",
    bgColor: "bg-orange-500/5"
  },
  {
    id: "system",
    name: "Sistema Web",
    icon: Star,
    price: "€4.500 - €15.000",
    period: "",
    description: "Sistema web personalizado (ERP, CRM, SaaS) para seu negócio",
    features: [
      "Desenvolvimento 100% personalizado",
      "Dashboard interativo e intuitivo",
      "Sistema de autenticação seguro",
      "Integrações com APIs externas",
      "Base de dados otimizada",
      "Relatórios e analytics avançados",
      "Deploy em servidor dedicado",
      "Documentação técnica completa",
      "3 meses de suporte incluído"
    ],
    isPopular: true,
    ctaText: "Iniciar Projeto",
    ctaVariant: "default",
    bgColor: "bg-orange-500/10"
  },
  {
    id: "mobile",
    name: "App Mobile",
    icon: Gem,
    price: "€8.000 - €25.000",
    period: "",
    description: "Aplicativo nativo para iOS e Android com backend robusto",
    features: [
      "Apps nativos iOS e Android",
      "Design UX/UI profissional",
      "Backend robusto e escalável",
      "Push notifications",
      "Integração com serviços cloud",
      "Analytics de uso integrados",
      "Publicação nas lojas oficiais",
      "Sistema de atualizações OTA",
      "6 meses de manutenção incluída"
    ],
    ctaText: "Desenvolver App",
    ctaVariant: "outline",
    bgColor: "bg-orange-500/5"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background elements - Inspirado no estilo Cursor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/15 via-orange-400/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/15 via-orange-500/10 to-transparent blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-6 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
            Preços Transparentes
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Invista no <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">seu futuro digital</span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Preços justos e transparentes para o mercado português. Desenvolvemos a solução perfeita para transformar sua empresa.
          </p>
        </motion.div>

        {/* Maintenance Plans Info */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70">
            <span className="text-sm mr-2">💡</span>
            <span className="text-sm">Planos de manutenção: €300-€800/mês • Suporte contínuo e atualizações</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${plan.isPopular ? 'md:-mt-4 md:mb-4' : ''} relative`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-orange-500 text-white px-3 py-1 shadow-sm border-0">
                      <Sparkles className="w-3 h-3 mr-1.5" />
                      MAIS POPULAR
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full backdrop-blur-sm border border-white/10 ${plan.bgColor} hover:border-orange-500/20 transition-all duration-300 hover:scale-105`}>
                  <CardHeader className="text-center pb-6 pt-8">
                    {IconComponent && (
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-400" />
                      </div>
                    )}
                    
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <div className="mb-3">
                      <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-white/60 text-base ml-1">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    
                    <CardDescription className="text-sm text-white/60 leading-relaxed">
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
                          <Check className="w-4 h-4 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-white/80 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.ctaVariant}
                      className={`w-full py-6 mt-6 rounded-xl group font-medium ${
                        plan.isPopular 
                          ? 'bg-orange-500 hover:bg-orange-600 border-0 text-white shadow-lg' 
                          : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/20 text-white'
                      }`}
                      size="lg"
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional pricing info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">€15.000+</div>
              <div className="text-sm text-white/60">Projetos Complexos</div>
              <div className="text-xs text-white/40 mt-1">Soluções multiplataforma</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">48h</div>
              <div className="text-sm text-white/60">Resposta Garantida</div>
              <div className="text-xs text-white/40 mt-1">Suporte técnico rápido</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-sm text-white/60">Código Proprietário</div>
              <div className="text-xs text-white/40 mt-1">Sem dependências externas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
