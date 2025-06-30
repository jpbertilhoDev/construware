import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Building, Smartphone, CreditCard, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 'starter',
    name: 'Website Básico',
    price: '€1.200',
    originalPrice: '€1.500',
    period: 'Pagamento único',
    installmentPrice: '€400',
    paymentOptions: [
      { text: '3x sem juros', icon: CreditCard },
      { text: 'Pagamento em fases do projeto', icon: Calendar }
    ],
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
    isPopular: false
  },
  {
    id: 'professional',
    name: 'Sistema Completo',
    price: '€4.200',
    originalPrice: '€5.000',
    period: 'Pagamento único',
    installmentPrice: '€1.400',
    paymentOptions: [
      { text: '3x sem juros', icon: CreditCard },
      { text: 'Pagamento em fases do projeto', icon: Calendar }
    ],
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
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Aplicação Mobile',
    price: '€8.000',
    originalPrice: '€10.000',
    period: 'Pagamento único',
    installmentPrice: '€2.667',
    paymentOptions: [
      { text: '3x sem juros', icon: CreditCard },
      { text: 'Pagamento em fases do projeto', icon: Calendar }
    ],
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
    isPopular: false
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tight px-4">
            Invista no crescimento{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
              da sua empresa
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Preços justos, sem surpresas. Pague uma vez e tenha o seu sistema para sempre.
          </p>
        </motion.div>

        {/* Pricing Cards - Mobile optimized stack */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Mobile: Show popular plan first */}
          <div className="lg:hidden">
            {pricingPlans
              .sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0))
              .map((plan, index) => {
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
                    className="relative group"
                  >
                    {/* Popular Badge */}
                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-2">
                          Mais Escolhido
                        </Badge>
                      </div>
                    )}
                    
                    {/* Mobile Card */}
                    <div className={`relative h-full rounded-xl p-6 transition-all duration-500 ${
                      plan.isPopular 
                        ? 'bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-black/50 border-2 border-orange-500/30' 
                        : 'bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/30 border border-white/10'
                    }`}>
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            plan.isPopular 
                              ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30' 
                              : 'bg-white/[0.05] border border-white/10'
                          }`}>
                            <IconComponent className={`w-5 h-5 ${
                              plan.isPopular ? 'text-orange-400' : 'text-white/70'
                            }`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {plan.name}
                            </h3>
                            <p className="text-sm text-white/50">
                              {plan.period}
                            </p>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="mb-4">
                          <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-3xl font-bold text-white">
                              {plan.price}
                            </span>
                            {plan.originalPrice && (
                              <span className="text-lg text-white/40 line-through">
                                {plan.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          {/* Payment Options */}
                          <div className="space-y-2">
                            <div className="text-sm text-orange-400 font-medium">
                              ou {plan.installmentPrice} em 3x
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {plan.paymentOptions.map((option, idx) => {
                                const OptionIcon = option.icon;
                                return (
                                  <div 
                                    key={idx}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
                                      plan.isPopular 
                                        ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                                        : 'bg-white/10 text-white/70 border border-white/20'
                                    }`}
                                  >
                                    <OptionIcon className="w-3 h-3" />
                                    {option.text}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-white/70 leading-relaxed mb-6 text-base">
                          {plan.description}
                        </p>

                        {/* Mobile optimized CTA Button - Full width, min-height 48px */}
                        <Button 
                          className={`w-full min-h-[48px] rounded-xl font-bold transition-all duration-300 text-base ${
                            plan.isPopular 
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25' 
                              : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 hover:border-white/40'
                          }`}
                        >
                          {plan.ctaText}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/70 text-sm">
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

          {/* Desktop: Original layout */}
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
                className={`hidden lg:block relative group ${plan.isPopular ? 'lg:scale-105 z-10' : ''}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-2">
                      Mais Escolhido
                    </Badge>
                  </div>
                )}
                
                {/* Card */}
                <div className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
                  plan.isPopular 
                    ? 'bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-black/50 border-2 border-orange-500/30' 
                    : 'bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/30 border border-white/10'
                }`}>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
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
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-4xl font-bold text-white">
                          {plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-xl text-white/40 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      {/* Payment Options */}
                      <div className="space-y-2">
                        <div className="text-sm text-orange-400 font-medium">
                          ou {plan.installmentPrice} em 3x
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plan.paymentOptions.map((option, idx) => {
                            const OptionIcon = option.icon;
                            return (
                              <div 
                                key={idx}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
                                  plan.isPopular 
                                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                                    : 'bg-white/10 text-white/70 border border-white/20'
                                }`}
                              >
                                <OptionIcon className="w-3 h-3" />
                                {option.text}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-8 text-lg">
                      {plan.description}
                    </p>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full h-14 rounded-xl font-bold transition-all duration-300 text-lg ${
                        plan.isPopular 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25' 
                          : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 hover:border-white/40'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-base">
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

        {/* Payment Information & Trust indicators */}
        <motion.div 
          className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Payment Options Highlight */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Opções de Pagamento Flexíveis
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold text-white">3x sem juros</span>
                </div>
                <p className="text-white/70 text-sm">
                  Divida o investimento em 3 parcelas iguais, sem juros adicionais
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold text-white">Pagamento em fases</span>
                </div>
                <p className="text-white/70 text-sm">
                  Pague conforme o progresso do seu projeto é entregue
                </p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-white/40 text-sm md:text-base">
              <span>✓ Garantia de 30 dias</span>
              <span>✓ Suporte em português</span>
              <span>✓ Pagamento seguro</span>
              <span>✓ Sem taxas ocultas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
