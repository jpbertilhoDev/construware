import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Brain,
  Target,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Cog,
  Monitor,
  Layers,
  Rocket,
  GitBranch
} from "lucide-react";
import { motion } from "framer-motion";

const mainFeatures = [
  {
    title: "Web Development",
    subtitle: "Aplicações Web Modernas",
    description: "Desenvolvemos aplicações web responsivas e escaláveis usando React, Next.js, Vue.js e as tecnologias mais avançadas do mercado.",
    gradient: "from-blue-500 via-cyan-500 to-green-500",
    icon: Code2,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6 font-mono text-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2">VS Code - Construware</span>
        </div>
        <div className="space-y-2">
          <div className="text-purple-400">import React from 'react';</div>
          <div className="text-blue-400">import NextPage from 'next';</div>
          <div className="text-green-400">const Dashboard = () =&gt; &#123;</div>
          <div className="text-yellow-400 ml-4">return (</div>
          <div className="text-cyan-400 ml-6">&lt;div className="dashboard"&gt;</div>
          <div className="text-orange-400 ml-8">&lt;Analytics /&gt;</div>
          <div className="text-cyan-400 ml-6">&lt;/div&gt;</div>
          <div className="text-yellow-400 ml-4">);</div>
          <div className="text-green-400">&#125;</div>
        </div>
      </div>
    ),
    details: [
      { title: "React & Next.js", desc: "Framework moderno para performance superior" },
      { title: "TypeScript", desc: "Código mais seguro e manutenível" },
      { title: "Responsive Design", desc: "Perfeito em todos os dispositivos" }
    ]
  },
  {
    title: "Mobile Apps",
    subtitle: "Aplicações Nativas & Cross-platform",
    description: "Desenvolvemos apps nativos para iOS/Android e soluções cross-platform com React Native e Flutter para máxima eficiência.",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    icon: Smartphone,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-gray-700 pb-3">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">iOS</div>
            <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">Android</div>
            <div className="bg-purple-500 text-white px-3 py-1 rounded-lg text-sm">React Native</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
              <div className="text-blue-400 text-xs mb-1">PERFORMANCE</div>
              <div className="text-white font-semibold">98% Score</div>
            </div>
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
              <div className="text-green-400 text-xs mb-1">USERS</div>
              <div className="text-white font-semibold">50k+ Active</div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "React Native", desc: "Uma base de código para ambas as plataformas" },
      { title: "Performance Nativa", desc: "Velocidade e fluidez de app nativo" },
      { title: "UI/UX Premium", desc: "Interface moderna seguindo guidelines" }
    ]
  },
  {
    title: "Cloud Architecture",
    subtitle: "Infraestrutura Escalável",
    description: "Arquiteturas cloud-native robustas com AWS, Azure e Google Cloud. Microserviços, containers e alta disponibilidade.",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    icon: Cloud,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">☁️</div>
            <div>
              <div className="text-white font-medium">AWS Production</div>
              <div className="text-green-400 text-xs">All Systems Operational</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-green-500/20 rounded-lg p-3">
              <div className="text-white text-sm">Auto Scaling: 5 → 12 instances</div>
              <div className="text-gray-400 text-xs mt-1">Load: 85% → 45%</div>
            </div>
            <div className="bg-blue-500/20 rounded-lg p-3">
              <div className="text-white text-sm">Database: Read replicas active</div>
              <div className="text-gray-400 text-xs mt-1">Latency: 45ms avg</div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "Auto Scaling", desc: "Escala automaticamente conforme demanda" },
      { title: "Alta Disponibilidade", desc: "99.9% uptime garantido" },
      { title: "Monitorização 24/7", desc: "Alertas proativos e resolução rápida" }
    ]
  },
  {
    title: "AI Integration",
    subtitle: "Inteligência Artificial",
    description: "Integramos IA avançada nos seus sistemas: chatbots inteligentes, análise preditiva, automação e machine learning.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: Brain,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs">🤖 AI</span>
            <span>Analisando dados do utilizador...</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-purple-400 mb-2">🧠 Insights Preditivos</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white">Conversão prevista</span>
                <span className="text-green-400">+23%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Churn risk</span>
                <span className="text-yellow-400">Baixo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Recomendação</span>
                <span className="text-blue-400">Upgrade plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "Machine Learning", desc: "Modelos personalizados para seu negócio" },
      { title: "Chatbots Inteligentes", desc: "Atendimento automatizado 24/7" },
      { title: "Análise Preditiva", desc: "Antecipe tendências e comportamentos" }
    ]
  }
];

const additionalFeatures = [
  {
    icon: Database,
    title: "Bases de Dados",
    description: "PostgreSQL, MongoDB, Redis e outras tecnologias para armazenamento otimizado."
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Autenticação robusta, encriptação end-to-end e conformidade GDPR."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização de velocidade, caching inteligente e tempos de resposta mínimos."
  },
  {
    icon: Globe,
    title: "APIs & Integrações",
    description: "APIs RESTful e GraphQL para integração com sistemas externos."
  },
  {
    icon: Cog,
    title: "DevOps & CI/CD",
    description: "Pipelines automatizados para deployment contínuo e zero downtime."
  },
  {
    icon: Sparkles,
    title: "UX/UI Design",
    description: "Interfaces modernas e intuitivas que encantam os utilizadores."
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
              <Sparkles className="w-4 h-4 mr-2" />
              Tecnologias de Ponta
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              Desenvolvimento
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text block">
                Excepcional
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Combinamos as tecnologias mais avançadas com experiência comprovada 
              para criar soluções digitais que transformam negócios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-32 max-w-7xl mx-auto">
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-4xl md:text-5xl font-black mb-4">{feature.title}</h3>
                        <p className="text-xl text-orange-400 font-semibold mb-6">{feature.subtitle}</p>
                        <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-4">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-4">
                          <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-white mb-1">{detail.title}</h4>
                            <p className="text-gray-400 text-sm">{detail.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-2 hover:border-orange-500/30 transition-all duration-500">
                        {feature.mockup}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
              Mais{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                Funcionalidades
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Um ecossistema completo de ferramentas e tecnologias para o seu projeto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
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
                começar?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Fale connosco e descubra como podemos transformar a sua visão em uma solução digital extraordinária.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-12 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                Ver Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
