import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Code, Smartphone, Globe, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
  {
    id: "website",
    name: "Website",
    icon: Globe,
    price: "€750",
    originalPrice: "€1.200",
    period: "",
    description: "Solução ideal para empresas que precisam de presença digital profissional",
    features: [
      "Design responsivo e moderno",
      "Até 8 páginas otimizadas",
      "SEO básico configurado",
      "Formulários de contato",
      "SSL e hospedagem incluída",
      "Painel administrativo",
      "3 meses de suporte técnico",
      "Entrega em 15-20 dias"
    ],
    ctaText: "Começar Projeto",
    ctaVariant: "outline",
    bgColor: "bg-gradient-to-br from-slate-900/50 to-slate-800/30",
    discount: "38% OFF"
  },
  {
    id: "system",
    name: "Sistema Web",
    icon: Code,
    price: "€1.950",
    originalPrice: "€4.500",
    period: "a partir de",
    description: "Sistemas personalizados para automatizar processos do seu negócio",
    features: [
      "Desenvolvimento 100% personalizado",
      "Dashboard interativo completo",
      "Autenticação e permissões",
      "Base de dados otimizada", 
      "Integrações com APIs externas",
      "Relatórios avançados",
      "Backup automático",
      "Documentação técnica",
      "6 meses de suporte incluído"
    ],
    isPopular: true,
    ctaText: "Solicitar Orçamento",
    ctaVariant: "default",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-600/5",
    discount: "57% OFF"
  },
  {
    id: "desktop",
    name: "Sistema Desktop",
    icon: Monitor,
    price: "€1.450",
    originalPrice: "€3.500",
    period: "a partir de",
    description: "Aplicações desktop robustas para Windows, Mac e Linux",
    features: [
      "Aplicação nativa multiplataforma",
      "Interface moderna e intuitiva",
      "Trabalho offline completo",
      "Integração com hardware local",
      "Base de dados local/remota",
      "Relatórios e exportação",
      "Sistema de updates automático",
      "Instalador profissional",
      "4 meses de suporte incluído"
    ],
    ctaText: "Desenvolver Desktop",
    ctaVariant: "outline",
    bgColor: "bg-gradient-to-br from-slate-900/50 to-slate-800/30",
    discount: "59% OFF"
  },
  {
    id: "mobile",
    name: "App Mobile",
    icon: Smartphone,
    price: "€3.200",
    originalPrice: "€8.000",
    period: "a partir de",
    description: "Aplicativos nativos iOS e Android com backend completo",
    features: [
      "Apps nativos iOS e Android",
      "Design UX/UI profissional",
      "Backend robusto incluído",
      "Push notifications",
      "Analytics integrado",
      "Publicação nas app stores",
      "Sistema de atualizações",
      "Integração com serviços cloud",
      "12 meses de manutenção"
    ],
    ctaText: "Desenvolver App",
    ctaVariant: "outline",
    bgColor: "bg-gradient-to-br from-slate-900/50 to-slate-800/30",
    discount: "60% OFF"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.02]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Planos Flexíveis
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Escolha seu <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">plano ideal</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluções para qualquer tamanho de projeto no desenvolvimento de software, 
            adaptadas às suas necessidades.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-4 py-1 text-xs font-semibold border-0 shadow-lg">
                      ⚡ MAIS POPULAR
                    </Badge>
                  </div>
                )}
                
                {plan.discount && (
                  <div className="absolute -top-4 right-4 z-20">
                    <Badge className="bg-green-500 hover:bg-green-500 text-white px-3 py-1 text-xs font-semibold border-0 shadow-lg">
                      {plan.discount}
                    </Badge>
                  </div>
                )}
                
                <Card className={`relative h-full border-0 ${plan.bgColor} backdrop-blur-sm ${
                  plan.isPopular 
                    ? 'ring-1 ring-orange-500/30 shadow-2xl shadow-orange-500/10' 
                    : 'ring-1 ring-white/10'
                } hover:ring-orange-500/50 transition-all duration-300`}>
                  
                  <CardHeader className="text-center pb-8 pt-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                      plan.isPopular ? 'bg-orange-500/20' : 'bg-white/5'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        plan.isPopular ? 'text-orange-400' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </CardTitle>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center gap-1">
                        {plan.period && (
                          <span className="text-sm text-gray-400">{plan.period}</span>
                        )}
                        <span className="text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                      </div>
                    </div>
                    
                    <CardDescription className="text-gray-400 text-sm leading-relaxed px-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                            plan.isPopular ? 'bg-orange-500/20' : 'bg-white/10'
                          }`}>
                            <Check className={`w-3 h-3 ${
                              plan.isPopular ? 'text-orange-400' : 'text-gray-400'
                            }`} />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.ctaVariant}
                      className={`w-full h-12 rounded-xl font-semibold group transition-all duration-200 ${
                        plan.isPopular 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/25' 
                          : 'bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-orange-500/50'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">7 dias</div>
            <div className="text-white text-sm font-medium mb-1">Teste grátis</div>
            <div className="text-gray-500 text-xs">Cancele a qualquer momento</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-white text-sm font-medium mb-1">Suporte técnico</div>
            <div className="text-gray-500 text-xs">Suporte em português</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white text-sm font-medium mb-1">Código proprietário</div>
            <div className="text-gray-500 text-xs">Sem dependências externas</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>💡</span>
            Precisa de algo personalizado?
          </div>
          <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 px-8">
            Falar com Especialista
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
