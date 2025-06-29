import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Code, Smartphone, Globe, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
  {
    id: "website",
    name: "Website",
    icon: Globe,
    price: "€600",
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
    discount: "50% OFF"
  },
  {
    id: "system",
    name: "Sistema Web",
    icon: Code,
    price: "€2.250",
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
    discount: "50% OFF"
  },
  {
    id: "desktop",
    name: "Sistema Desktop",
    icon: Monitor,
    price: "€1.400",
    originalPrice: "€2.800",
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
    discount: "50% OFF"
  },
  {
    id: "mobile",
    name: "App Mobile",
    icon: Smartphone,
    price: "€4.000",
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
    discount: "50% OFF"
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-black/95 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015]"></div>
      
      {/* Minimal background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-orange-500/[0.03] via-transparent to-orange-500/[0.03] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs text-white/60 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
            50% de desconto por tempo limitado
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Preços{" "}
            <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              transparentes
            </span>
          </h2>
          
          <p className="text-lg text-white/50 max-w-lg mx-auto font-light">
            Investimento justo para soluções que crescem com o seu negócio
          </p>
        </motion.div>

        {/* Pricing Grid - Cursor Style */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${plan.isPopular ? 'lg:scale-105' : ''}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xs font-medium text-white shadow-lg">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className={`relative h-full rounded-2xl bg-white/[0.01] backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.02] ${
                  plan.isPopular 
                    ? 'border border-orange-500/20 shadow-2xl shadow-orange-500/[0.05]' 
                    : 'border border-white/[0.05] hover:border-white/10'
                }`}>
                  
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        plan.isPopular ? 'bg-orange-500/10' : 'bg-white/[0.03]'
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          plan.isPopular ? 'text-orange-400' : 'text-white/60'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-white/40 leading-tight">
                          {plan.period && `${plan.period} `}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-light text-white">
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-sm text-white/30 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                      {plan.originalPrice && (
                        <div className="text-xs text-orange-400">
                          Economize {plan.discount?.replace(' OFF', '')}
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed mb-8">
                      {plan.description}
                    </p>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-11 rounded-xl font-medium transition-all duration-200 ${
                        plan.isPopular 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl' 
                          : 'bg-white/[0.03] hover:bg-white/[0.06] text-white/90 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Features - Collapsible style */}
                  <div className="px-8 pb-8">
                    <div className="space-y-3">
                      {plan.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white/60 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {plan.features.length > 4 && (
                        <div className="text-xs text-white/30 pt-2">
                          +{plan.features.length - 4} funcionalidades adicionais
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators - Minimal */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-12 max-w-2xl mx-auto opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-lg font-light text-white mb-1">3x</div>
            <div className="text-xs text-white/40">sem juros</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-lg font-light text-white mb-1">24/7</div>
            <div className="text-xs text-white/40">suporte</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-lg font-light text-white mb-1">30 dias</div>
            <div className="text-xs text-white/40">garantia</div>
          </div>
        </motion.div>

        {/* Minimal CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/40 mb-4">
            Precisa de algo personalizado?
          </p>
          <Button 
            variant="ghost" 
            className="text-white/60 hover:text-white hover:bg-white/[0.03] border border-white/10 hover:border-white/20 px-6 py-2 h-auto rounded-lg"
          >
            Falar com especialista
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
