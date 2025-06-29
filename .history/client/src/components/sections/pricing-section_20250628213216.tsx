import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Code, Smartphone, Globe, Monitor, Zap, Shield, Users, Clock, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import type { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
  {
    id: "website",
    name: "Site Profissional",
    icon: Globe,
    price: "€1.600",
    originalPrice: "€2.000",
    period: "",
    description: "Presença digital que gera confiança e atrai clientes 24/7",
    features: [
      "Design moderno que converte visitantes em clientes",
      "Funciona perfeitamente no telemóvel e computador",
      "Aparece no Google quando procuram o seu serviço",
      "Formulários que captam contactos automaticamente",
      "Segurança garantida com certificado SSL",
      "Painel simples para gerir conteúdos",
      "Hospedagem incluída por 1 ano",
      "Suporte técnico por 6 meses",
      "Entrega em 2-3 semanas"
    ],
    ctaText: "Quero Meu Site",
    ctaVariant: "outline",
    bgColor: "bg-gradient-to-br from-slate-900/50 to-slate-800/30",
    discount: "20% OFF",
    justification: "Preço justo baseado em 40-60 horas de trabalho especializado. Inclui design, desenvolvimento e configurações que normalmente custam €2.000 no mercado português."
  },
  {
    id: "system",
    name: "Sistema Personalizado",
    icon: Code,
    price: "€3.500",
    originalPrice: "€7.000",
    period: "a partir de",
    description: "Automatiza o seu negócio e economiza tempo todos os dias",
    features: [
      "Sistema feito especificamente para o seu negócio",
      "Dashboard com todas as informações importantes",
      "Controlo de utilizadores e permissões",
      "Base de dados segura e organizada",
      "Liga-se com outros sistemas que já usa",
      "Relatórios automáticos que ajudam a decidir",
      "Backup automático - nunca perde dados",
      "Manual de instruções em português",
      "Suporte e atualizações por 12 meses"
    ],
    isPopular: true,
    ctaText: "Automatizar Meu Negócio",
    ctaVariant: "default",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-600/5",
    discount: "50% OFF",
    justification: "Valor baseado em 150-300 horas de desenvolvimento. Um sistema personalizado elimina trabalho manual, reduz erros e pode economizar milhares de euros por ano em eficiência."
  },
  {
    id: "mobile",
    name: "Aplicação Móvel",
    icon: Smartphone,
    price: "€5.800",
    originalPrice: "€11.600",
    period: "a partir de",
    description: "App nativa que os seus clientes adoram usar no telemóvel",
    features: [
      "App para iPhone e Android incluída",
      "Design bonito e fácil de usar",
      "Funciona mesmo sem internet",
      "Notificações que mantêm clientes ligados",
      "Estatísticas para perceber o comportamento",
      "Publicação na App Store e Google Play",
      "Sistema de atualizações automáticas",
      "Integração com redes sociais",
      "Manutenção incluída por 18 meses"
    ],
    ctaText: "Criar Minha App",
    ctaVariant: "outline",
    bgColor: "bg-gradient-to-br from-slate-900/50 to-slate-800/30",
    discount: "50% OFF",
    justification: "Preço competitivo para 400-600 horas de desenvolvimento. Inclui duas apps nativas, backend completo e publicação nas lojas. Valor de mercado em Portugal para apps profissionais."
  },
  {
    id: "ecommerce",
    name: "Loja Online Completa",
    icon: Monitor,
    price: "€2.400",
    originalPrice: "€4.800",
    period: "a partir de",
    description: "Venda online 24/7 com tudo incluído para começar já",
    features: [
      "Loja completa pronta a vender",
      "Pagamentos seguros (MB Way, cartão, transferência)",
      "Gestão fácil de produtos e stock",
      "Carrinho de compras otimizado",
      "Envios automáticos CTT/DPD",
      "Relatórios de vendas detalhados",
      "SEO para aparecer no Google",
      "Certificado SSL e segurança máxima",
      "Formação para gerir a loja"
    ],
    ctaText: "Abrir Minha Loja",
    ctaVariant: "outline",
    bgColor: "bg-gradient-to-br from-slate-900/50 to-slate-800/30",
    discount: "50% OFF",
    justification: "Baseado em 100-200 horas de desenvolvimento. Inclui todas as integrações necessárias para vender online em Portugal. ROI típico de 300-500% no primeiro ano."
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    company: "Clínica Dentária",
    text: "O nosso site trouxe 40% mais pacientes. Valeu cada cêntimo!",
    rating: 5
  },
  {
    name: "João Pereira", 
    company: "Restaurante O Bacalhau",
    text: "A app de entregas aumentou as vendas em 60%. Fantástico!",
    rating: 5
  },
  {
    name: "Ana Costa",
    company: "Loja de Roupa",
    text: "A loja online paga-se sozinha. Vendemos para todo o país agora.",
    rating: 5
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          {/* Animated neural network */}
          {Array.from({length: 20}).map((_, i) => (
            <g key={i}>
              <motion.line
                x1={Math.random() * 1000}
                y1={Math.random() * 1000}
                x2={Math.random() * 1000}
                y2={Math.random() * 1000}
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
              <motion.circle
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="2"
                fill="#f97316"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            </g>
          ))}
        </svg>

        {/* Floating Geometric Shapes */}
        {Array.from({length: 8}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-orange-500/10 rounded-lg backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05), rgba(251, 146, 60, 0.02))'
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Particle System */}
        {Array.from({length: 30}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `100%`,
            }}
            animate={{
              y: [-1000, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-orange-500/[0.05] via-orange-500/[0.02] to-transparent blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Header with 3D Elements */}
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Floating Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 text-sm font-semibold text-orange-400 mb-8 backdrop-blur-sm shadow-2xl"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap className="w-4 h-4 mr-2" />
            Preços Especiais Portugal 2025
          </motion.div>
          
          {/* Main Title with Gradient */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Preços{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Justos
              </span>
              {/* 3D Underline Effect */}
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Investimento transparente para soluções que{" "}
            <span className="text-orange-400 font-medium">fazem o seu negócio crescer</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/40">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-orange-400" />
              <span>Preços fixos sem surpresas</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-400" />
              <span>+500 empresas confiam</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span>Entrega garantida</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards with 3D Effects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-8xl mx-auto mb-24">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className={`relative group ${plan.isPopular ? 'lg:scale-105 z-10' : ''}`}
                style={{ perspective: '1000px' }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-sm font-bold text-white shadow-2xl border border-orange-400/30">
                      ⭐ Mais Escolhido
                    </div>
                  </motion.div>
                )}
                
                {/* 3D Card */}
                <motion.div 
                  className={`relative h-full rounded-3xl backdrop-blur-xl transition-all duration-500 overflow-hidden ${
                    plan.isPopular 
                      ? 'bg-gradient-to-br from-orange-500/10 via-orange-600/5 to-black/50 border-2 border-orange-500/30 shadow-2xl shadow-orange-500/20' 
                      : 'bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-black/30 border border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ 
                    rotateY: plan.isPopular ? 0 : 5,
                    boxShadow: plan.isPopular 
                      ? "0 25px 50px -12px rgba(249, 115, 22, 0.25)" 
                      : "0 25px 50px -12px rgba(255, 255, 255, 0.1)"
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header */}
                  <div className="p-8 pb-6">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          plan.isPopular 
                            ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30' 
                            : 'bg-white/[0.05] border border-white/10'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className={`w-7 h-7 ${
                          plan.isPopular ? 'text-orange-400' : 'text-white/70'
                        }`} />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-white/50">
                          {plan.period}
                        </p>
                      </div>
                    </div>
                    
                    {/* Price Display */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-3 mb-3">
                        <motion.span 
                          className="text-4xl font-bold text-white"
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          {plan.price}
                        </motion.span>
                        {plan.originalPrice && (
                          <span className="text-lg text-white/30 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                      </div>
                      {plan.discount && (
                        <motion.div 
                          className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-sm font-semibold text-green-400"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          💰 Poupa {plan.discount.replace(' OFF', '')}
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-8 text-lg">
                      {plan.description}
                    </p>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full h-14 rounded-2xl font-bold text-lg transition-all duration-300 ${
                          plan.isPopular 
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl border-0' 
                            : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 hover:border-white/40'
                        }`}
                      >
                        {plan.ctaText}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Features List */}
                  <div className="px-8 pb-8">
                    <div className="space-y-4">
                      {plan.features.slice(0, 6).map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Check className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/70 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                      {plan.features.length > 6 && (
                        <div className="text-sm text-orange-400 font-medium pt-2">
                          +{plan.features.length - 6} benefícios incluídos
                        </div>
                      )}
                    </div>

                    {/* Price Justification */}
                    <motion.div 
                      className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs text-white/50 leading-relaxed">
                        <span className="text-orange-400 font-medium">💡 Porquê este preço:</span><br />
                        {plan.justification}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Proof Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            O que dizem os nossos clientes
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({length: testimonial.rating}).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust & Guarantee Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Shield, title: "Garantia Total", desc: "30 dias de garantia ou dinheiro de volta" },
            { icon: Clock, title: "Entrega Pontual", desc: "Cumprimos sempre os prazos acordados" },
            { icon: Users, title: "Suporte 24/7", desc: "Equipa portuguesa sempre disponível" },
            { icon: TrendingUp, title: "ROI Garantido", desc: "Investimento que se paga sozinho" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <item.icon className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-white/60 mb-8">
            Tem dúvidas sobre qual solução escolher?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl border-0"
            >
              Falar com Especialista Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
