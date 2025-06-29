import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Sparkles, Gem, Star, Activity, Zap, Building, Rocket, Code, Smartphone, Globe, Database } from "lucide-react";
import { motion } from "framer-motion";

interface PricingPlan {
  name: string;
  icon?: any;
  price: string;
  period?: string;
  description: string;
  features: string[];
  bgColor: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    icon: Code,
    price: "€2.500",
    period: "projeto",
    description: "Perfeito para startups e pequenos projetos",
    features: [
      "Landing Page Responsiva",
      "Design Moderno e Profissional", 
      "Integração com Formulários",
      "SEO Básico Otimizado",
      "Hospedagem por 1 ano",
      "Suporte por 30 dias",
      "Tempo de entrega: 2-3 semanas"
    ],
    bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
  },
  {
    name: "Professional",
    icon: Smartphone,
    price: "€8.500",
    period: "projeto", 
    description: "Aplicações web completas para empresas",
    features: [
      "Sistema Web Personalizado",
      "Painel de Administração",
      "Sistema de Autenticação",
      "Base de Dados Integrada",
      "API RESTful",
      "Design System Personalizado",
      "Testes Automatizados",
      "Documentação Técnica",
      "Suporte por 90 dias",
      "Tempo de entrega: 6-8 semanas"
    ],
    bgColor: "bg-gradient-to-br from-orange-500/20 to-yellow-500/10",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "€25.000",
    period: "projeto",
    description: "Soluções robustas para grandes empresas", 
    features: [
      "Sistema Complexo Multi-plataforma",
      "Aplicação Mobile (iOS/Android)",
      "Aplicação Web Avançada",
      "Dashboard Analytics",
      "Integrações com APIs Externas",
      "Sistema de Notificações",
      "Backup e Recuperação",
      "Segurança Avançada",
      "Deployment em Cloud",
      "Manutenção por 6 meses",
      "Suporte Prioritário 24/7",
      "Tempo de entrega: 12-16 semanas"
    ],
    bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/5",
  },
  {
    name: "Custom",
    icon: Rocket,
    price: "Sob",
    period: "consulta",
    description: "Soluções sob medida para necessidades específicas",
    features: [
      "Análise de Requisitos Detalhada",
      "Arquitetura Personalizada",
      "Tecnologias Cutting-edge",
      "Integração com Sistemas Legados",
      "Escalabilidade Empresarial",
      "Consultoria Técnica Especializada",
      "Gestão de Projeto Dedicada",
      "Garantia de Performance",
      "Suporte Técnico Continuado",
      "SLA Personalizado"
    ],
    bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/5",
  },
];

const faqItems = [
  {
    question: "Posso experimentar o Construware antes de comprar?",
    answer: "Sim! Nosso plano gratuito permite experimentar os recursos básicos. Também oferecemos um período de teste de 7 dias para os planos pagos."
  },
  {
    question: "Quais métodos de pagamento são aceitos?",
    answer: "Aceitamos cartões de crédito, PayPal e transferência bancária para pagamentos anuais. Todas as transações são seguras e criptografadas."
  },
  {
    question: "Como funciona o armazenamento de documentos?",
    answer: "Você pode armazenar todos os tipos de documentos relacionados a projetos na plataforma, desde plantas e projetos até contratos e relatórios."
  },
  {
    question: "Posso alterar meu plano mais tarde?",
    answer: "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor imediatamente com ajuste proporcional nos valores."
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
              <Zap className="w-4 h-4 mr-2" />
              Preços Transparentes
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Investimento em
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text block">
                Inovação
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Desenvolvemos soluções de software que transformam negócios. 
              Escolha o plano que melhor se adapta ao seu projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 text-sm font-semibold">
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full backdrop-blur-sm border border-white/10 ${plan.bgColor} hover:border-orange-500/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:-translate-y-2`}>
                    <CardHeader className="text-center pb-6 pt-8">
                      {IconComponent && (
                        <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center border border-orange-500/20">
                          <IconComponent className="w-6 h-6 text-orange-400" />
                        </div>
                      )}
                      
                      <CardTitle className="text-2xl font-bold text-white mb-3">
                        {plan.name}
                      </CardTitle>
                      
                      <div className="mb-4">
                        <span className="text-5xl font-black tracking-tight text-white">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-white/60 text-lg ml-2">
                            /{plan.period}
                          </span>
                        )}
                      </div>
                      
                      <CardDescription className="text-white/60 text-base leading-relaxed">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-8 pb-8">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-white/80">
                            <Check className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full py-6 rounded-xl font-semibold text-base transition-all duration-300 ${
                          plan.popular 
                            ? "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 group-hover:scale-105" 
                            : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                        }`}
                      >
                        {plan.name === "Custom" ? "Solicitar Orçamento" : "Iniciar Projeto"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Serviços{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                Adicionais
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Complementos que potencializam ainda mais o seu projeto digital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Consultoria Digital",
                price: "€150/hora",
                description: "Estratégia digital, arquitetura de sistemas e consultoria técnica especializada.",
              },
              {
                icon: Database,
                title: "Manutenção Mensal",
                price: "€300-800/mês",
                description: "Atualizações, melhorias, backup, segurança e suporte técnico continuado.",
              },
              {
                icon: Zap,
                title: "Desenvolvimento Urgente",
                price: "+50% valor",
                description: "Projetos com prazos apertados e prioridade máxima na nossa agenda.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 p-8 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 transform group-hover:-translate-y-2">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300 border border-orange-500/20 mb-6">
                      <service.icon className="w-7 h-7 text-orange-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-2xl font-black text-orange-400 mt-2">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base text-gray-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Pronto para{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                transformar
              </span>
              <br />
              sua ideia em realidade?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Contacte-nos hoje e receba uma proposta personalizada para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-12 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                Solicitar Orçamento Gratuito
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                Agendar Reunião
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}