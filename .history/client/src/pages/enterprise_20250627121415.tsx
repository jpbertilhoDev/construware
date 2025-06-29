
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Shield, 
  Users, 
  Zap, 
  HeadphonesIcon, 
  Database,
  Lock,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
  Sparkles,
  Brain,
  Layers,
  Target
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { value: "99.9%", label: "Uptime garantido", sublabel: "SLA empresarial" },
  { value: "50K+", label: "Empresas atendidas", sublabel: "Globalmente" },
  { value: "10M+", label: "Projetos concluídos", sublabel: "Com sucesso" }
];

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Segurança de Nível Militar",
    description: "Criptografia AES-256, autenticação multifator, SSO empresarial e compliance total com LGPD, SOC 2 e ISO 27001.",
    highlight: "Certificado SOC 2"
  },
  {
    icon: Database,
    title: "Integrações Ilimitadas",
    description: "APIs REST e GraphQL robustas. Conecte-se com SAP, Oracle, Microsoft Dynamics e qualquer sistema existente em minutos.",
    highlight: "200+ integrações"
  },
  {
    icon: Brain,
    title: "IA Generativa Integrada",
    description: "Análise preditiva, otimização automática de cronogramas e insights inteligentes alimentados por machine learning avançado.",
    highlight: "IA proprietária"
  },
  {
    icon: Users,
    title: "Escala Empresarial",
    description: "Suporte para milhares de usuários simultâneos, dados ilimitados e performance otimizada para grandes corporações.",
    highlight: "Sem limites"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Premium 24/7",
    description: "Gerente de sucesso dedicado, suporte técnico prioritário e time de especialistas sempre disponível.",
    highlight: "< 15min resposta"
  },
  {
    icon: Zap,
    title: "Performance Ultra-Rápida",
    description: "Infraestrutura de nuvem híbrida, CDN global e otimizações que garantem velocidade máxima em qualquer escala.",
    highlight: "< 200ms latência"
  }
];

const testimonials = [
  {
    quote: "A Construware transformou completamente nossa operação. Reduzimos custos operacionais em 40% e aumentamos a produtividade da equipe em 60% no primeiro ano.",
    author: "Carlos Roberto Silva",
    position: "CEO & Fundador",
    company: "Construtora Millennium",
    avatar: "CS",
    metrics: "40% redução de custos"
  },
  {
    quote: "A implementação foi surpreendentemente rápida e suave. Em apenas 2 semanas, toda nossa equipe de 800+ pessoas estava operando com eficiência total.",
    author: "Ana Beatriz Santos",
    position: "CTO",
    company: "Grupo Urbano",
    avatar: "AS",
    metrics: "800+ usuários ativos"
  }
];

const differentiators = [
  {
    icon: Sparkles,
    title: "IA Generativa Avançada",
    description: "Algoritmos proprietários de deep learning para predição de riscos, otimização de recursos e automação inteligente de processos complexos.",
    stats: "95% precisão"
  },
  {
    icon: Globe,
    title: "Infraestrutura Global",
    description: "Servidores distribuídos em 15+ regiões, redundância automática e sincronização em tempo real para operações multinacionais.",
    stats: "15 data centers"
  },
  {
    icon: Layers,
    title: "Business Intelligence Nativo",
    description: "Dashboards interativos, relatórios customizáveis e analytics avançado com visualizações que revelam insights acionáveis.",
    stats: "500+ métricas"
  },
  {
    icon: Target,
    title: "Automação Inteligente",
    description: "Workflows adaptativos, aprovações automáticas baseadas em regras complexas e orquestração de processos end-to-end.",
    stats: "80% automação"
  }
];

const securityFeatures = [
  "Criptografia de ponta a ponta AES-256",
  "Autenticação multifator (MFA) obrigatória",
  "Single Sign-On (SSO) empresarial",
  "Auditoria completa e logs detalhados",
  "Compliance LGPD, SOC 2, ISO 27001",
  "Backup automático com recuperação instantânea"
];

export default function Enterprise() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-gradient-to-b from-black via-gray-950/90 to-black">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-orange-400/20 border border-orange-500/30 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-sm font-medium text-orange-300">Solução Enterprise Premium</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A escolha para organizações{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                modernas
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Tecnologia de ponta, segurança enterprise e suporte dedicado para construtoras 
              que lideram a transformação digital do setor.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-xl shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                Solicitar Demonstração
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold bg-white/5 border-white/20 hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Falar com Especialista
              </Button>
            </motion.div>

            {/* Enhanced Metrics */}
            <motion.div 
              className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-400">{metric.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-24 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Construa o futuro{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                mais rápido
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Recursos desenvolvidos especificamente para grandes organizações que exigem o máximo em performance, segurança e escalabilidade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className="h-full bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 p-8 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 transform group-hover:-translate-y-2">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300 border border-orange-500/20">
                        <feature.icon className="w-7 h-7 text-orange-400" />
                      </div>
                      <Badge variant="secondary" className="bg-orange-500/10 text-orange-300 border-orange-500/20 text-xs">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-20">
              <Badge variant="secondary" className="mb-6 px-4 py-2 bg-red-500/10 text-red-300 border-red-500/20">
                <Shield className="w-4 h-4 mr-2" />
                Segurança Máxima
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Proteção de <span className="text-red-400">nível militar</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seus dados e operações protegidos pelos mais altos padrões de segurança da indústria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-6 rounded-xl bg-gradient-to-r from-red-500/5 to-red-400/5 border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-red-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-40 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              O diferencial{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                Construware
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tecnologias exclusivas e inovações que nos tornam a escolha número 1 das maiores construtoras do mundo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-2xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <Badge variant="outline" className="bg-orange-500/10 text-orange-300 border-orange-500/30">
                    {item.stats}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-40 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              Resultados que{" "}
              <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
                impressionam
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Veja como líderes do setor transformaram suas operações com a Construware.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-10 h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-green-500/30 transition-all duration-500 rounded-3xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-green-500/10 transform group-hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-300 border-green-500/30">
                        {testimonial.metrics}
                      </Badge>
                    </div>
                    <blockquote className="text-xl mb-8 leading-relaxed text-gray-200 font-light">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{testimonial.author}</div>
                        <div className="text-gray-400">{testimonial.position}</div>
                        <div className="text-orange-400 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-40 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2 bg-orange-500/10 text-orange-300 border-orange-500/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                Implementação Express
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
                Pronto para{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                  começar?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Agende uma demonstração personalizada e veja como podemos revolucionar sua empresa em semanas, não meses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-12 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-sm">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-sm font-semibold text-gray-200">Nome *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="João" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-sm font-semibold text-gray-200">Sobrenome *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Silva" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-200">Email Corporativo *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="joao@empresa.com.br" 
                      className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-200">Empresa *</Label>
                      <Input 
                        id="company" 
                        placeholder="Construtora ABC Ltda" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="employees" className="text-sm font-semibold text-gray-200">Número de Funcionários</Label>
                      <Input 
                        id="employees" 
                        placeholder="Ex: 500+" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-200">Como podemos transformar sua empresa?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seus principais desafios e objetivos. Quanto mais detalhes, melhor poderemos personalizar nossa proposta..."
                      rows={5}
                      className="resize-none bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-xl shadow-2xl shadow-orange-500/25 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Solicitar Demonstração Personalizada
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>

                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Resposta em 2 horas
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      Dados protegidos LGPD
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-400 mr-2" />
                      Demo em 24h
                    </div>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/30 rounded-full mb-12">
              <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
              <span className="text-lg font-semibold text-green-300">Implementação garantida em 2-4 semanas</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Junte-se às empresas que{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-green-400 bg-clip-text">
                lideram o mercado
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
              Milhares de construtoras já transformaram seus processos com a Construware. 
              <br className="hidden md:block" />
              <strong className="text-white">Seja a próxima a revolucionar seu setor.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-xl shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                Começar Transformação
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-bold bg-white/5 border-white/20 hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Ver Cases de Sucesso
              </Button>
            </div>

            <div className="mt-16 text-sm text-gray-500">
              Mais de 50.000 empresas confiam na Construware para gerenciar seus projetos mais importantes
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
