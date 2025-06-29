import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { 
  ReactIcon, 
  JavaScriptIcon,
  TypeScriptIcon, 
  NodeIcon,
  ExpressIcon,
  PythonIcon,
  PostgreSQLIcon, 
  MySQLIcon,
  MongoDBIcon
} from "@/components/ui/tech-icons";
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
  Sparkles,
  Code,
  Database,
  Server,
  Cpu,
  GitBranch,
  Terminal
} from "lucide-react";
import { motion } from "framer-motion";

const mainFeatures = [
  {
    title: "Frontend Moderno",
    subtitle: "React & JavaScript Avançado",
    description: "Utilizamos React, JavaScript e TypeScript para criar interfaces modernas, responsivas e de alta performance com as melhores práticas do mercado.",
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    icon: Brain,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6 font-mono text-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2">React Development</span>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">⚛️ React 18 + TypeScript</div>
          <div className="text-green-400">✓ Componentes reutilizáveis</div>
          <div className="text-yellow-400">🎨 Design System completo</div>
          <div className="text-purple-400">📱 Responsivo e acessível</div>
          <div className="text-orange-400">🚀 Performance otimizada</div>
        </div>
      </div>
    ),
    details: [
      { title: "React & TypeScript", desc: "Desenvolvimento com tipagem estática e componentes modernos" },
      { title: "Design Responsivo", desc: "Interfaces que funcionam perfeitamente em qualquer dispositivo" },
      { title: "Performance Otimizada", desc: "Aplicações rápidas com as melhores práticas de otimização" }
    ]
  },
  {
    title: "Backend Robusto",
    subtitle: "Node.js, Express & Python",
    description: "Desenvolvemos APIs escaláveis e seguras usando Node.js, Express e Python, garantindo performance e confiabilidade para seus sistemas.",
    gradient: "from-blue-500 via-cyan-500 to-green-500",
    icon: Target,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex gap-2 border-b border-gray-700 pb-3">
            <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">Node.js</div>
            <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">Express</div>
            <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">Python</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
              <div className="text-green-400 text-xs mb-1">API REST</div>
              <div className="text-white font-semibold">Ativa</div>
            </div>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
              <div className="text-blue-400 text-xs mb-1">SEGURANÇA</div>
              <div className="text-white font-semibold">JWT + OAuth</div>
            </div>
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3">
              <div className="text-purple-400 text-xs mb-1">PERFORMANCE</div>
              <div className="text-white font-semibold">Otimizada</div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "APIs RESTful", desc: "Desenvolvimento de APIs escaláveis e bem documentadas" },
      { title: "Segurança Avançada", desc: "Implementação de JWT, OAuth e criptografia de dados" },
      { title: "Alta Performance", desc: "Otimização de consultas e cache para máxima velocidade" }
    ]
  },
  {
    title: "Banco de Dados",
    subtitle: "PostgreSQL, MySQL & MongoDB",
    description: "Expertise em bancos relacionais e NoSQL, escolhendo a melhor solução para cada projeto com foco em performance e escalabilidade.",
    gradient: "from-green-500 via-teal-500 to-blue-500",
    icon: MessageSquare,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">DB</div>
            <div>
              <div className="text-white font-medium">Database Manager</div>
              <div className="text-green-400 text-xs">PostgreSQL • Conectado</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-blue-500/20 rounded-lg p-3">
              <div className="text-white text-sm">🐘 PostgreSQL - Dados relacionais</div>
              <div className="text-gray-400 text-xs mt-1">Performance: 99.9%</div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-3">
              <div className="text-white text-sm">🍃 MongoDB - Dados flexíveis</div>
              <div className="text-gray-400 text-xs mt-1">Escalabilidade: Ativa</div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "Bancos Relacionais", desc: "PostgreSQL e MySQL para dados estruturados e transações complexas" },
      { title: "NoSQL Flexível", desc: "MongoDB para dados não-estruturados e alta escalabilidade" },
      { title: "Otimização de Queries", desc: "Índices inteligentes e consultas otimizadas para performance máxima" }
    ]
  },
  {
    title: "DevOps & Deploy",
    subtitle: "Automação e Infraestrutura",
    description: "Implementamos pipelines de CI/CD, containerização e deploy automatizado para garantir entregas rápidas e confiáveis.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    icon: Zap,
    mockup: (
      <div className="bg-gray-900/95 rounded-xl p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <span className="bg-gray-700 px-2 py-1 rounded text-xs">🚀</span>
            <span>Deploy automatizado em andamento...</span>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-green-400 mb-2">✅ Build: Sucesso</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white">Frontend</span>
                <span className="text-green-400">Deployed ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Backend</span>
                <span className="text-green-400">Deployed ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Database</span>
                <span className="text-green-400">Connected ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    details: [
      { title: "CI/CD Pipelines", desc: "Integração e deploy contínuo para entregas automatizadas" },
      { title: "Containerização", desc: "Docker para ambientes consistentes e escaláveis" },
      { title: "Monitoramento", desc: "Acompanhamento em tempo real da saúde das aplicações" }
    ]
  }
];

const additionalFeatures = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Experiência em AWS, Google Cloud e Azure para infraestrutura escalável e confiável."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native e desenvolvimento híbrido para aplicações mobile multiplataforma."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Implementação de soluções de Business Intelligence e análise de dados avançada."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Implementação de protocolos de segurança, criptografia e conformidade com LGPD."
  },
  {
    icon: Settings,
    title: "API Development",
    description: "Criação de APIs RESTful, GraphQL e microserviços para integração de sistemas."
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "Integração de IA, chatbots inteligentes e automação de processos com ML."
  }
];

// Tech Stack que realmente usamos - organizadas por categoria
const techStack = [
  // Frontend
  { name: "React", id: 1, img: ReactIcon },
  { name: "JavaScript", id: 2, img: JavaScriptIcon },
  { name: "TypeScript", id: 3, img: TypeScriptIcon },
  
  // Backend
  { name: "Node.js", id: 4, img: NodeIcon },
  { name: "Express", id: 5, img: ExpressIcon },
  { name: "Python", id: 6, img: PythonIcon },
  
  // Bancos de Dados
  { name: "PostgreSQL", id: 7, img: PostgreSQLIcon },
  { name: "MySQL", id: 8, img: MySQLIcon },
  { name: "MongoDB", id: 9, img: MongoDBIcon }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 3D Background - Tech Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Neural Network Background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 0.8}} />
              <stop offset="30%" style={{stopColor: '#3b82f6', stopOpacity: 0.6}} />
              <stop offset="60%" style={{stopColor: '#8b5cf6', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          
          {/* Neural Network Connections */}
          <g stroke="url(#techGradient)" strokeWidth="1" fill="none">
            <path d="M100,100 Q300,50 500,100 T900,80" className="animate-draw-line" />
            <path d="M150,200 Q350,150 550,200 T950,180" className="animate-draw-line-delayed" />
            <path d="M80,300 Q280,250 480,300 T880,280" className="animate-draw-line-slow" />
            <path d="M120,400 Q320,350 520,400 T920,380" className="animate-draw-line" />
            <path d="M60,500 Q260,450 460,500 T860,480" className="animate-draw-line-delayed" />
            <path d="M140,600 Q340,550 540,600 T940,580" className="animate-draw-line-slow" />
            
            {/* Vertical connections */}
            <path d="M200,100 L180,600" className="animate-draw-line" />
            <path d="M400,80 L420,580" className="animate-draw-line-delayed" />
            <path d="M600,100 L580,600" className="animate-draw-line-slow" />
            <path d="M800,80 L820,580" className="animate-draw-line" />
          </g>
          
          {/* Tech Nodes */}
          <g fill="url(#techGradient)">
            <circle cx="100" cy="100" r="4" className="animate-pulse-node">
              <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="100" r="6" className="animate-pulse-node">
              <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="900" cy="80" r="5" className="animate-pulse-node">
              <animate attributeName="r" values="5;9;5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="300" r="4" className="animate-pulse-node">
              <animate attributeName="r" values="4;7;4" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="400" r="6" className="animate-pulse-node">
              <animate attributeName="r" values="6;11;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="800" cy="500" r="5" className="animate-pulse-node">
              <animate attributeName="r" values="5;8;5" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>



        {/* Code Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs animate-code-rain"
              style={{
                left: `${i * 7}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            >
              {`{
  "api": "v2.0",
  "status": "active",
  "build": "success"
}`}
            </div>
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-3xl transform rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-2xl transform -rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-500/10 to-teal-500/5 rounded-xl transform rotate-45 animate-float-slow"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl transform -rotate-45 animate-float"></div>

        {/* Tech Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-particles opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section with Tech Showcase */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-black/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300 px-6 py-2 text-sm font-semibold">
              <Code className="w-4 h-4 mr-2" />
              Soluções Digitais
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-white">Por que nos</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Escolher?
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed mb-12">
              Criamos sistemas que fazem sua empresa crescer mais rápido, 
              economizar dinheiro e impressionar seus clientes.
            </p>

            {/* Tech Stack Carousel */}
            <div className="flex justify-center">
              <LogoCarousel columnCount={3} logos={techStack} />
            </div>
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
              Expertise{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                Completa
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Além do nosso stack principal, dominamos uma ampla gama de tecnologias 
              e metodologias para entregar soluções completas.
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
                inovar
              </span>
              <br />
              com tecnologia?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Transforme suas ideias em soluções digitais robustas 
              com nosso expertise tecnológico.
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

      {/* Custom Animations & Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        
        @keyframes float-tech {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(-30px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes float-particles {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        
        @keyframes code-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; opacity: 0; }
          10% { opacity: 1; }
          50% { stroke-dasharray: 500 500; opacity: 1; }
          100% { stroke-dasharray: 1000 0; opacity: 0.3; }
        }
        
        @keyframes draw-line-delayed {
          0% { stroke-dasharray: 0 1000; opacity: 0; }
          20% { opacity: 1; }
          60% { stroke-dasharray: 500 500; opacity: 1; }
          100% { stroke-dasharray: 1000 0; opacity: 0.3; }
        }
        
        @keyframes draw-line-slow {
          0% { stroke-dasharray: 0 1000; opacity: 0; }
          30% { opacity: 1; }
          70% { stroke-dasharray: 500 500; opacity: 1; }
          100% { stroke-dasharray: 1000 0; opacity: 0.3; }
        }
        
        @keyframes pulse-node {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-float-tech {
          animation: float-tech linear infinite;
        }
        
        .animate-float-particles {
          animation: float-particles linear infinite;
        }
        
        .animate-code-rain {
          animation: code-rain linear infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 8s ease-in-out infinite;
        }
        
        .animate-draw-line-delayed {
          animation: draw-line-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-draw-line-slow {
          animation: draw-line-slow 8s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animate-pulse-node {
          animation: pulse-node 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
