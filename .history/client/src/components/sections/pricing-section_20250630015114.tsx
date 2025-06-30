import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Globe, Rocket, Crown, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 'website',
    name: 'Website Profissional',
    originalPrice: '€1.500',
    price: '€1.200',
    savings: '€300',
    period: 'Pagamento único',
    description: 'Perfeito para pequenos negócios que querem marcar presença online',
    features: [
      'Website responsivo profissional',
      'Até 5 páginas personalizadas',
      'Formulário de contacto integrado',
      'Optimização para motores de busca',
      'Certificado de segurança incluído',
      '1 mês de suporte gratuito',
      'Entrega em 7-10 dias'
    ],
    ctaText: 'Começar Agora',
    icon: Globe,
    isPopular: false
  },
  {
    id: 'system',
    name: 'Sistema Completo',
    originalPrice: '€4.000',
    price: '€3.200',
    savings: '€800',
    period: 'Pagamento único',
    description: 'A solução ideal para automatizar completamente o seu negócio',
    features: [
      'Sistema web personalizado',
      'Painel administrativo completo',
      'Gestão de clientes e vendas',
      'Relatórios e estatísticas',
      'Integração WhatsApp Business',
      'Base de dados segura',
      '3 meses de suporte incluído',
      'Formação da equipa',
      'Cópia de segurança automática'
    ],
    ctaText: 'Mais Procurado',
    icon: Star,
    isPopular: true
  },
  {
    id: 'mobile',
    name: 'Aplicação Móvel',
    originalPrice: '€10.000',
    price: '€8.000',
    savings: '€2.000',
    period: 'Pagamento único',
    description: 'Aplicação nativa para iOS e Android que vai revolucionar o seu negócio',
    features: [
      'Aplicação nativa iOS e Android',
      'Design UI/UX profissional',
      'Notificações automáticas',
      'Sistema de autenticação seguro',
      'Integração com APIs externas',
      'Publicação nas lojas oficiais',
      '6 meses de suporte premium',
      'Actualizações incluídas',
      'Análises avançadas'
    ],
    ctaText: 'Contactar',
    icon: Rocket,
    isPopular: false
  }
];

export function PricingSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Dark background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <Clock className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">20% Desconto - Só Este Mês</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight">
            Os nossos{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text">
              serviços
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Sem taxas escondidas. Sem surpresas. 
            <br className="hidden md:block" />
            <span className="text-white font-medium">Apenas soluções profissionais com preços transparentes.</span>
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className={`relative group ${service.isPopular ? 'md:scale-105 z-10' : ''}`}
              >
                {/* Popular Badge */}
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-sm font-bold text-white shadow-2xl">
                      ⭐ MAIS PROCURADO
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className={`relative h-full rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 ${
                  service.isPopular 
                    ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-2 border-orange-500/30 shadow-xl shadow-orange-500/10' 
                    : 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-orange-500/30'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                      service.isPopular 
                        ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30' 
                        : 'bg-white/[0.05] border border-white/10'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        service.isPopular ? 'text-orange-400' : 'text-white/70'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl text-gray-500 line-through font-medium">
                          {service.originalPrice}
                        </span>
                        <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium">
                          -{service.savings}
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white">
                        {service.price}
                        <span className="text-lg font-normal text-gray-400 ml-1">único</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          service.isPopular ? 'text-orange-400' : 'text-emerald-400'
                        }`} />
                        <span className="text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                      service.isPopular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25'
                        : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 hover:border-orange-500/30 hover:scale-105'
                    }`}
                    onClick={() => {
                      // Scroll to contact section
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    {service.ctaText}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Section - Dark Theme */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-4xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Garantia de 30 Dias</h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Se não ficar 100% satisfeito com o resultado, devolvemos o seu dinheiro. 
              Sem perguntas. Sem complicações. É assim que trabalhamos.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <span className="flex items-center gap-2 text-gray-400">
                <Check className="h-5 w-5 text-emerald-400" />
                Suporte em Português
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <Check className="h-5 w-5 text-emerald-400" />
                Pagamento Seguro
              </span>
              <span className="flex items-center gap-2 text-gray-400">
                <Check className="h-5 w-5 text-emerald-400" />
                Resultados Garantidos
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
