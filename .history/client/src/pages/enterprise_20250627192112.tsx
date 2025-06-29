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
  Target,
  Code2,
  Cloud,
  Cpu,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { value: "99.9%", label: "Uptime garantido", sublabel: "SLA empresarial" },
  { value: "200+", label: "Projetos entregues", sublabel: "Para empresas" },
  { value: "15+", label: "Setores atendidos", sublabel: "Especialização" }
];

const enterpriseFeatures = [
  {
    icon: Code2,
    title: "Arquitetura Escalável",
    description: "Microserviços cloud-native, containers Docker, Kubernetes e arquiteturas que suportam milhões de utilizadores simultaneamente.",
    highlight: "Escala infinita"
  },
  {
    icon: Shield,
    title: "Segurança Enterprise",
    description: "Encriptação end-to-end, conformidade GDPR, penetration testing e auditoria de segurança por especialistas certificados.",
    highlight: "Certificado GDPR"
  },
  {
    icon: Database,
    title: "Integração Universal",
    description: "APIs RESTful e GraphQL, webhooks, ETL em tempo real. Conecta com qualquer sistema: ERP, CRM, bases de dados legadas.",
    highlight: "500+ integrações"
  },
  {
    icon: Brain,
    title: "IA & Machine Learning",
    description: "Modelos personalizados de ML, análise preditiva, automação inteligente e processamento de linguagem natural.",
    highlight: "IA personalizada"
  },
  {
    icon: Cloud,
    title: "Multi-Cloud & Híbrido",
    description: "Deployment em AWS, Azure, Google Cloud ou on-premise. Disaster recovery automático e migração sem downtime.",
    highlight: "Zero downtime"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado 24/7",
    description: "Equipa técnica dedicada, SLA garantido, monitorização proativa e resolução de incidentes em tempo real.",
    highlight: "< 5min resposta"
  }
];

const testimonials = [
  {
    quote: "A Construware desenvolveu nossa plataforma fintech do zero. Em 6 meses tínhamos 50k+ utilizadores ativos e processávamos €10M+ mensalmente.",
    author: "Carlos Silva",
    position: "CEO & Fundador",
    company: "TechStart Portugal",
    avatar: "CS",
    metrics: "€10M+ processados"
  },
  {
    quote: "Precisávamos de uma solução robusta para 100k+ utilizadores. A equipa entregou uma arquitetura perfeita que nunca falhou desde o lançamento.",
    author: "Ana Costa",
    position: "CTO",
    company: "FinanceFlow",
    avatar: "AC",
    metrics: "100k+ utilizadores"
  }
];

const differentiators = [
  {
    icon: Rocket,
    title: "Time-to-Market Acelerado",
    description: "Metodologias ágeis, CI/CD automatizado, prototipagem rápida e deployment contínuo que reduz tempo de lançamento em 60%.",
    stats: "60% mais rápido"
  },
  {
    icon: Globe,
    title: "Infraestrutura Global",
    description: "CDN mundial, edge computing, servidores distribuídos e otimização para diferentes regiões e regulamentações.",
    stats: "15+ regiões"
  },
  {
    icon: Layers,
    title: "DevOps Avançado",
    description: "Pipelines automatizados, monitorização em tempo real, alertas inteligentes e orquestração de containers.",
    stats: "100% automatizado"
  },
  {
    icon: Target,
    title: "Performance Otimizada",
    description: "Otimização de código, caching inteligente, lazy loading e técnicas avançadas para máxima velocidade.",
    stats: "< 100ms resposta"
  }
];

const securityFeatures = [
  "Encriptação AES-256 end-to-end",
  "Autenticação multifator obrigatória",
  "OAuth2 e Single Sign-On (SSO)",
  "Auditoria completa e logs detalhados",
  "Conformidade GDPR e ISO 27001",
  "Penetration testing mensal"
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
              <span className="text-sm font-medium text-orange-300">Soluções Enterprise Premium</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              A escolha para empresas{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                visionárias
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desenvolvemos soluções digitais robustas e escaláveis para empresas que lideram 
              a transformação digital nos seus setores.
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
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="relative text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 group-hover:border-orange-500/30 transition-all duration-500 backdrop-blur-sm">
                    <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                      {metric.value}
                    </div>
                    <div className="text-xl font-semibold text-orange-300 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {metric.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
              <Building className="w-4 h-4 mr-2" />
              Tecnologia Enterprise
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Construído para{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                escalar
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Arquitetura robusta, segurança máxima e performance otimizada para as maiores empresas do mundo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 p-8 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 transform group-hover:-translate-y-2">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-2xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300 border border-orange-500/20">
                        <feature.icon className="w-8 h-8 text-orange-400" />
                      </div>
                      <Badge variant="secondary" className="bg-orange-500/10 text-orange-300 border-orange-500/20">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-lg text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
              <Star className="w-4 h-4 mr-2" />
              Casos de Sucesso
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Resultados{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                extraordinários
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Empresas líderes confiam na Construware para transformar suas visões em realidade digital.
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
                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-orange-500/40 transition-all duration-500 p-10 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/20 transform group-hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="flex items-start mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center text-white font-black text-lg mr-6">
                          {testimonial.avatar}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-white mb-1">{testimonial.author}</div>
                        <div className="text-orange-400 font-medium mb-1">{testimonial.position}</div>
                        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-green-500/10 text-green-300 border-green-500/20">
                          {testimonial.metrics}
                        </Badge>
                      </div>
                    </div>
                    <blockquote className="text-xl text-gray-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
              <TrendingUp className="w-4 h-4 mr-2" />
              Diferenciais Competitivos
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Por que somos{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                únicos
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Metodologias proprietárias e tecnologias exclusivas que nos destacam no mercado.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 p-8 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 transform group-hover:-translate-y-2 text-center">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300 border border-orange-500/20">
                      <item.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="text-3xl font-black text-orange-400 mb-2">{item.stats}</div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base text-gray-300 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300">
                  <Shield className="w-4 h-4 mr-2" />
                  Segurança Máxima
                </Badge>
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
                  Protecção{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text">
                    de nível militar
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Implementamos os mais altos padrões de segurança da indústria para proteger 
                  os dados e sistemas das maiores empresas do mundo.
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl">
                  Ver Certificações
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
                <Clock className="w-4 h-4 mr-2" />
                Resposta em 24h
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
                Pronto para{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                  começar?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Fale connosco e descubra como podemos transformar a sua empresa com tecnologia de ponta.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-medium">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium">Email empresarial</Label>
                    <Input id="email" type="email" placeholder="seu@empresa.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white font-medium">Empresa</Label>
                    <Input id="company" placeholder="Nome da empresa" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-white font-medium">Nº de funcionários</Label>
                    <Input id="employees" placeholder="Ex: 100-500" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project" className="text-white font-medium">Descrição do projeto</Label>
                  <Textarea id="project" placeholder="Conte-nos sobre o seu projeto..." rows={4} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-4 rounded-xl text-lg shadow-lg shadow-orange-500/20">
                  Solicitar Proposta Enterprise
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
