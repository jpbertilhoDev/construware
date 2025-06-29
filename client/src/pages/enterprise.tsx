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
  { value: "99.9%", label: "Sempre funcionando", sublabel: "Sistema nunca para" },
  { value: "50K+", label: "Empresas satisfeitas", sublabel: "Em todo o mundo" },
  { value: "10M+", label: "Projetos realizados", sublabel: "Com sucesso total" }
];

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Máxima Segurança",
    description: "Os seus dados ficam completamente protegidos. Usamos a mesma segurança dos bancos e do governo para garantir que nada se perde ou é roubado.",
    highlight: "Segurança bancária"
  },
  {
    icon: Database,
    title: "Liga-se com Tudo",
    description: "O nosso sistema fala com qualquer outro programa que já usa na sua empresa. Não precisa mudar nada do que já tem.",
    highlight: "200+ ligações"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "O sistema aprende sozinho e dá-lhe sugestões inteligentes para poupar tempo e dinheiro nos seus projetos.",
    highlight: "IA incluída"
  },
  {
    icon: Users,
    title: "Para Qualquer Tamanho",
    description: "Funciona perfeitamente quer tenha 10 ou 10.000 funcionários. Cresce com a sua empresa sem problemas.",
    highlight: "Sem limites"
  },
  {
    icon: HeadphonesIcon,
    title: "Apoio Total 24/7",
    description: "Tem sempre alguém para o ajudar, a qualquer hora do dia ou da noite. Resposta garantida em menos de 15 minutos.",
    highlight: "< 15min resposta"
  },
  {
    icon: Zap,
    title: "Super Rápido",
    description: "O sistema é extremamente rápido, mesmo com muitas pessoas a usar ao mesmo tempo. Nunca vai ficar à espera.",
    highlight: "Velocidade máxima"
  }
];

const testimonials = [
  {
    quote: "A Construware mudou completamente a nossa empresa. Poupámos 40% nos custos e a equipa tornou-se 60% mais produtiva no primeiro ano.",
    author: "Carlos Roberto Silva",
    position: "CEO & Fundador",
    company: "Construtora Millennium",
    avatar: "CS",
    metrics: "40% menos custos"
  },
  {
    quote: "Foi surpreendentemente fácil começar a usar. Em apenas 2 semanas, os nossos 800 funcionários já estavam a trabalhar com total eficiência.",
    author: "Ana Beatriz Santos",
    position: "Diretora de Tecnologia",
    company: "Grupo Urbano",
    avatar: "AS",
    metrics: "800+ utilizadores"
  }
];

const differentiators = [
  {
    icon: Sparkles,
    title: "Inteligência Artificial Avançada",
    description: "O nosso sistema é muito inteligente. Prevê problemas antes de acontecerem, sugere melhorias e automatiza tarefas chatas.",
    stats: "95% precisão"
  },
  {
    icon: Globe,
    title: "Funciona em Todo o Lado",
    description: "Temos servidores espalhados pelo mundo todo. Isto significa que o sistema funciona rápido onde quer que esteja.",
    stats: "15 localizações"
  },
  {
    icon: Layers,
    title: "Relatórios Inteligentes",
    description: "Vê tudo o que se passa na sua empresa de forma simples e clara. Gráficos bonitos que mostram exatamente o que precisa saber.",
    stats: "500+ relatórios"
  },
  {
    icon: Target,
    title: "Automatização Inteligente",
    description: "O sistema faz automaticamente muitas tarefas por si. Isto poupa-lhe tempo e evita erros humanos.",
    stats: "80% automatizado"
  }
];

const securityFeatures = [
  "Proteção máxima dos seus dados",
  "Acesso seguro com dupla verificação",
  "Login único para toda a empresa",
  "Registo completo de todas as ações",
  "Cumpre todas as leis de proteção de dados",
  "Cópia de segurança automática"
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
              <span className="text-sm font-medium text-orange-300">Solução Profissional</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Para empresas que querem{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                crescer
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Um sistema simples e poderoso que faz a sua empresa funcionar melhor, 
              poupar dinheiro e crescer mais rápido.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="px-10 py-6 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-xl shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                Ver Como Funciona
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold bg-white/5 border-white/20 hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Falar Connosco
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
              Tudo o que precisa{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                num só lugar
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Criámos estas funcionalidades especialmente para empresas grandes que precisam de algo realmente profissional e confiável.
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
                    <CardTitle className="text-xl md:text-2xl font-black text-white group-hover:text-orange-100 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
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
              <Badge variant="secondary" className="mb-6 px-6 py-3 bg-red-500/15 text-red-300 border-red-500/30 text-base md:text-lg font-bold">
                <Shield className="w-5 h-5 mr-2" />
                Proteção Total
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
                Os seus dados estão{" "}
                <span 
                  className="bg-gradient-to-r from-red-300 via-red-400 to-red-600 bg-clip-text text-transparent"
                  style={{
                    filter: 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 12px rgba(239, 68, 68, 0.4)) drop-shadow(0 0 18px rgba(239, 68, 68, 0.2))'
                  }}
                >
                  super protegidos
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
                Usamos a mesma proteção que os bancos e o governo usam para proteger informações importantes.
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
                  <CheckCircle className="w-6 h-6 text-red-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-200 text-base md:text-lg font-bold">{feature}</span>
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
              Porque somos{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                diferentes
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Estas são as coisas especiais que nos tornam a escolha número 1 das melhores empresas do mundo.
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
                falam por si
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Veja como outros empresários transformaram as suas empresas connosco.
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
                Começamos Rapidamente
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
                Pronto para{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                  começar?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Marque uma conversa connosco e veja como podemos transformar a sua empresa em poucas semanas.
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
                      <Label htmlFor="lastName" className="text-sm font-semibold text-gray-200">Apelido *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Silva" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-200">Email da Empresa *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="joao@empresa.pt" 
                      className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-200">Nome da Empresa *</Label>
                      <Input 
                        id="company" 
                        placeholder="Empresa ABC Lda" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="employees" className="text-sm font-semibold text-gray-200">Quantos Funcionários</Label>
                      <Input 
                        id="employees" 
                        placeholder="Ex: 50 pessoas" 
                        className="h-14 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-200">Como podemos ajudar a sua empresa?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos quais são os principais problemas da sua empresa e o que gostaria de melhorar. Quanto mais nos disser, melhor poderemos ajudar..."
                      rows={5}
                      className="resize-none bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-orange-500/50 focus:ring-orange-500/20"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-xl shadow-2xl shadow-orange-500/25 transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Quero Falar Convosco
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>

                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Resposta em 2 horas
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      Dados protegidos
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-orange-400 mr-2" />
                      Reunião em 24h
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
              <span className="text-lg font-semibold text-green-300">Começamos em 2-4 semanas</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Junte-se às empresas que{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-500 to-green-400 bg-clip-text">
                lideram o mercado
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
              Milhares de empresas já melhoraram os seus processos connosco. 
              <br className="hidden md:block" />
              <strong className="text-white">Seja a próxima a crescer ainda mais.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-xl shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300">
                Começar Agora
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-xl font-bold bg-white/5 border-white/20 hover:bg-white/10 rounded-xl backdrop-blur-sm">
                Ver Casos de Sucesso
              </Button>
            </div>

            <div className="mt-16 text-sm text-gray-500">
              Mais de 50.000 empresas confiam na Construware para gerir os seus projetos mais importantes
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
