import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Building, Crown, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 'starter',
    name: 'Website Básico',
    price: '€1.200',
    originalPrice: '€1.500',
    period: 'Pagamento único',
    description: 'Website profissional que faz a sua empresa crescer 3x mais rápido',
    features: [
      'Website profissional responsivo',
      'Otimização para Google (SEO)',
      'Formulários de contacto inteligentes',
      'Certificado de segurança SSL',
      'Suporte técnico durante 3 meses'
    ],
    ctaText: 'Começar Agora',
    icon: Building,
    isPopular: false,
    savings: '€300'
  },
  {
    id: 'professional',
    name: 'Sistema Completo',
    price: '€3.200',
    originalPrice: '€4.000',
    period: 'Pagamento único',
    description: 'Sistema que automatiza o seu negócio e elimina trabalho manual',
    features: [
      'Tudo do Website Básico',
      'Sistema de gestão personalizado',
      'Automações que poupam 15h/semana',
      'Integração WhatsApp automática',
      'Dashboard com relatórios em tempo real',
      'Suporte prioritário durante 6 meses'
    ],
    ctaText: 'Mais Escolhido',
    icon: Star,
    isPopular: true,
    savings: '€800'
  },
  {
    id: 'enterprise',
    name: 'Aplicação Mobile',
    price: '€8.000',
    originalPrice: '€10.000',
    period: 'Pagamento único',
    description: 'Aplicação móvel que coloca o seu negócio no bolso dos clientes',
    features: [
      'Tudo do Sistema Completo',
      'Aplicação iOS e Android',
      'Notificações push personalizadas',
      'Sistema de pagamentos integrado',
      'Análises avançadas de utilizadores',
      'Suporte dedicado durante 12 meses'
    ],
    ctaText: 'Falar Connosco',
    icon: Smartphone,
    isPopular: false,
    savings: '€2.000'
  }
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-6 px-6 py-3 bg-orange-500/10 text-orange-300 border-orange-500/20 text-sm md:text-base">
            <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            20% Desconto - Só Este Mês
          </Badge>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tight px-4">
            Invista no crescimento{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
              da sua empresa
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Preços justos, sem surpresas. Pague uma vez e tenha o seu sistema para sempre.
            <br />
            <strong className="text-orange-400">Sem mensalidades, sem taxas escondidas.</strong>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className={`relative group ${plan.isPopular ? 'md:col-span-2 lg:col-span-1 lg:scale-105 z-10' : ''}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-xs md:text-sm font-bold text-white shadow-2xl">
                      ⭐ Mais Escolhido - Poupa €800
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="px-3 py-1 bg-green-500 rounded-full text-xs font-bold text-white shadow-lg">
                      Poupa {plan.savings}
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className={`relative h-full rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 ${
                  plan.isPopular 
                    ? 'bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-black/50 border-2 border-orange-500/30' 
                    : 'bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/30 border border-white/10'
                }`}>
                  {/* Header */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center ${
                        plan.isPopular 
                          ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30' 
                          : 'bg-white/[0.05] border border-white/10'
                      }`}>
                        <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${
                          plan.isPopular ? 'text-orange-400' : 'text-white/70'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {plan.name}
                        </h3>
                        <p className="text-xs md:text-sm text-white/50">
                          {plan.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-4 md:mb-6">
                      <div className="flex items-baseline gap-2 md:gap-3">
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg md:text-xl text-white/40 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                      {plan.description}
                    </p>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-12 md:h-14 rounded-xl md:rounded-2xl font-bold transition-all duration-300 text-base md:text-lg ${
                        plan.isPopular 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25' 
                          : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 hover:border-white/40'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm md:text-base">
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

        {/* Trust indicators */}
        <motion.div 
          className="text-center mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 mb-4 text-sm md:text-base">Mais de 50 empresas já confiam em nós</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-white/40 text-sm md:text-base">
            <span>✓ Garantia de 30 dias</span>
            <span>✓ Suporte em português</span>
            <span>✓ Pagamento seguro</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
