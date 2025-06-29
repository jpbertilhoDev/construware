import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Building, Crown } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '€297',
    period: 'Setup único',
    description: 'Perfeito para pequenas empresas que querem começar',
    features: [
      'Website profissional',
      'Sistema de gestão básico',
      'Suporte por email',
      'Treinamento inicial'
    ],
    ctaText: 'Começar Agora',
    icon: Building,
    isPopular: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '€597',
    period: 'Setup único',
    description: 'Ideal para empresas em crescimento',
    features: [
      'Tudo do Starter',
      'Sistema avançado de gestão',
      'Automações personalizadas',
      'Suporte prioritário',
      'Integrações WhatsApp'
    ],
    ctaText: 'Mais Popular',
    icon: Star,
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '€1.297',
    period: 'Setup único',
    description: 'Para empresas que precisam de soluções completas',
    features: [
      'Tudo do Professional',
      'Sistema personalizado',
      'Suporte 24/7',
      'Consultoria dedicada',
      'Relatórios avançados'
    ],
    ctaText: 'Falar Connosco',
    icon: Crown,
    isPopular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-orange-500/10 text-orange-300 border-orange-500/20">
            <Zap className="w-4 h-4 mr-2" />
            Preços Transparentes
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            Escolha o seu{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
              plano ideal
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Soluções profissionais com preços justos. Sem mensalidades escondidas, 
            sem surpresas. Pague uma vez e use para sempre.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className={`relative group ${plan.isPopular ? 'lg:scale-105 z-10' : ''}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-sm font-bold text-white shadow-2xl">
                      ⭐ Mais Escolhido
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 ${
                  plan.isPopular 
                    ? 'bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-black/50 border-2 border-orange-500/30' 
                    : 'bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/30 border border-white/10'
                }`}>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        plan.isPopular 
                          ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30' 
                          : 'bg-white/[0.05] border border-white/10'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          plan.isPopular ? 'text-orange-400' : 'text-white/70'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-white/50">
                          {plan.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-8">
                      {plan.description}
                    </p>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-12 rounded-2xl font-bold transition-all duration-300 ${
                        plan.isPopular 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
                          : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
