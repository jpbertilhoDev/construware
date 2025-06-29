
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FolderKanban, 
  Package, 
  TrendingUp, 
  Users, 
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  BarChart3,
  Shield,
  Smartphone,
  Cloud,
  Zap,
  Brain,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const mainFeatures = [
  {
    title: "Agent",
    subtitle: "IA Inteligente para Gestão",
    description: "Nossa IA revolucionária analisa seus projetos, prevê problemas e otimiza automaticamente recursos e cronogramas.",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    icon: Brain,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6 font-mono text-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2">Construware Agent</span>
        </div>
        <div className="space-y-2">
          <div className="text-purple-400">🤖 Analisando projeto "Edifício Residencial"...</div>
          <div className="text-green-400">✓ Detectado atraso potencial na entrega de materiais</div>
          <div className="text-blue-400">💡 Sugestão: Acelerar pedido de cimento (+15 dias)</div>
          <div className="text-yellow-400">📊 Economia estimada: R$ 45.000</div>
          <div className="text-orange-400">🎯 Otimização aplicada automaticamente</div>
        </div>
      </div>
    ),
    details: [
      { title: "Previsão Inteligente", desc: "Antecipa problemas antes que aconteçam" },
      { title: "Otimização Automática", desc: "Ajusta cronogramas e recursos automaticamente" },
      { title: "Análise Preditiva", desc: "Usa machine learning para insights avançados" }
    ]
  },
  {
    title: "Tab",
    subtitle: "Interface Unificada",
    description: "Uma interface única que centraliza todos os aspectos da gestão de obra, desde planejamento até execução.",
    gradient: "from-blue-500 via-cyan-500 to-green-500",
    icon: Target,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-gray-700 pb-3">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">Projetos</div>
            <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">Materiais</div>
            <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">Equipes</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
              <div className="text-green-400 text-xs mb-1">FUNDAÇÃO</div>
              <div className="text-white font-semibold">95% Concluído</div>
            </div>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
              <div className="text-yellow-400 text-xs mb-1">ESTRUTURA</div>
              <div className="text-white font-semibold">Em Andamento</div>
            </div>
            <div className="bg-gray-500/20 border border-gray-500/30 rounded-lg p-3">
              <div className="text-gray-400 text-xs mb-1">ACABAMENTO</div>
              <div className="text-white font-semibold">Aguardando</div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "Dashboard Unificado", desc: "Visualize tudo em uma única tela" },
      { title: "Navegação Intuitiva", desc: "Acesse qualquer funcionalidade rapidamente" },
      { title: "Interface Responsiva", desc: "Funciona perfeitamente em qualquer dispositivo" }
    ]
  },
  {
    title: "Chat",
    subtitle: "Comunicação Integrada",
    description: "Sistema de comunicação em tempo real que conecta toda a equipe, desde engenheiros até operários no canteiro.",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    icon: MessageSquare,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">JM</div>
            <div>
              <div className="text-white font-medium">João Mendes</div>
              <div className="text-green-400 text-xs">Engenheiro Civil • Online</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-blue-500/20 rounded-lg p-3 ml-8">
              <div className="text-white text-sm">Material chegou no canteiro ✓</div>
              <div className="text-gray-400 text-xs mt-1">14:23</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3 mr-8">
              <div className="text-white text-sm">Perfeito! Pode iniciar a concretagem</div>
              <div className="text-gray-400 text-xs mt-1">14:25</div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "Chat em Tempo Real", desc: "Comunicação instantânea entre equipes" },
      { title: "Compartilhamento de Arquivos", desc: "Envie fotos, documentos e relatórios" },
      { title: "Notificações Push", desc: "Nunca perca uma mensagem importante" }
    ]
  },
  {
    title: "⌘K",
    subtitle: "Comando Inteligente",
    description: "Acesse qualquer funcionalidade, busque informações ou execute ações usando comandos naturais de voz ou texto.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: Zap,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs">⌘K</span>
            <span>Busque por qualquer coisa...</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-blue-400 mb-2">🔍 "mostrar progresso da obra"</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white">Fundação</span>
                <span className="text-green-400">95%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Estrutura</span>
                <span className="text-yellow-400">67%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Acabamento</span>
                <span className="text-gray-400">0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "Busca Inteligente", desc: "Encontre qualquer informação instantaneamente" },
      { title: "Comandos de Voz", desc: "Execute ações usando sua voz" },
      { title: "Atalhos Personalizados", desc: "Crie seus próprios comandos rápidos" }
    ]
  }
];

const additionalFeatures = [
  {
    icon: Cloud,
    title: "Nuvem Segura",
    description: "Dados protegidos com criptografia militar e backup automático em tempo real."
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Aplicativo nativo para iOS e Android com todas as funcionalidades."
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Relatórios inteligentes com insights acionáveis para otimizar projetos."
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Conformidade LGPD, autenticação multifator e auditoria completa."
  },
  {
    icon: Settings,
    title: "API Robusta",
    description: "Integre com qualquer sistema usando nossa API REST moderna."
  },
  {
    icon: Sparkles,
    title: "IA Generativa",
    description: "Gere relatórios, cronogramas e análises usando inteligência artificial."
  }
];

export default function Features() {
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
              Revolucione sua Gestão
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Features
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Construa melhor, mais rápido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Main Feature Card */}
                <div className="relative rounded-3xl overflow-hidden mb-16">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-16 p-12">
                      {/* Content */}
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {feature.title}
                          </h2>
                          <h3 className="text-2xl font-semibold text-gray-300 mb-6">
                            {feature.subtitle}
                          </h3>
                          <p className="text-xl text-gray-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        
                        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-8 py-6 rounded-xl text-lg group">
                          Experimentar Agora
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Mockup */}
                      <div className="relative">
                        <div className="relative z-10">
                          {feature.mockup}
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl -z-10`}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Details Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: detailIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-gray-900/50 border border-white/10 hover:border-orange-500/30 transition-all duration-300 p-8 rounded-2xl group hover:bg-gray-900/70">
                        <CardHeader className="p-0 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-6 h-6 text-orange-400" />
                          </div>
                          <CardTitle className="text-xl font-bold text-white">
                            {detail.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <CardDescription className="text-base text-gray-400 leading-relaxed">
                            {detail.desc}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 relative">
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
              E muito{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                mais
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Descubra todas as funcionalidades que fazem da Construware a plataforma 
              mais completa para gestão de obras.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
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
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-xl flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300 border border-orange-500/20">
                      <feature.icon className="w-7 h-7 text-orange-400" />
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

      {/* CTA Section */}
      <section className="py-16 relative">
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
                revolucionar
              </span>
              <br />
              sua gestão?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Junte-se a centenas de empresas que já transformaram 
              seus projetos com a Construware.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-semibold px-12 py-6 rounded-xl text-lg">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 rounded-xl text-lg">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
