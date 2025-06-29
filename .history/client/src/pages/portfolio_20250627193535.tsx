import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink,
  Github,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  Eye
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FinanceFlow",
    category: "Fintech",
    description: "Plataforma completa de gestão financeira com análise preditiva e automação de pagamentos.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Utilizadores", value: "50k+" },
      { label: "Transações/mês", value: "€10M+" },
      { label: "Uptime", value: "99.9%" }
    ],
    features: [
      "Dashboard em tempo real",
      "Análise preditiva com IA",
      "API para integrações",
      "Segurança bancária"
    ],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "EduTech Labs",
    category: "Educação",
    description: "Plataforma de ensino online com gamificação e acompanhamento personalizado do progresso.",
    technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    metrics: [
      { label: "Estudantes", value: "25k+" },
      { label: "Cursos", value: "500+" },
      { label: "Taxa conclusão", value: "85%" }
    ],
    features: [
      "Gamificação avançada",
      "IA para personalização", 
      "Videoconferência integrada",
      "Certificações automáticas"
    ],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "LogiChain Pro",
    category: "Logística",
    description: "Sistema de gestão de cadeia de fornecimento com rastreamento em tempo real e otimização de rotas.",
    technologies: ["Angular", "Java Spring", "Redis", "Kubernetes"],
    metrics: [
      { label: "Entregas/dia", value: "10k+" },
      { label: "Redução custos", value: "30%" },
      { label: "Eficiência", value: "95%" }
    ],
    features: [
      "Rastreamento GPS",
      "Otimização de rotas",
      "Análise de performance", 
      "Integração IoT"
    ],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "HealthCare Digital",
    category: "Saúde",
    description: "Plataforma de telemedicina com prontuário eletrônico e sistema de agendamento inteligente.",
    technologies: ["React Native", "Firebase", "ML Kit", "WebRTC"],
    metrics: [
      { label: "Pacientes", value: "15k+" },
      { label: "Consultas/mês", value: "5k+" },
      { label: "Satisfação", value: "98%" }
    ],
    features: [
      "Telemedicina HD",
      "Prontuário digital",
      "IA para diagnóstico",
      "Agendamento inteligente"
    ],
    gradient: "from-purple-500 to-pink-500"
  }
];

const stats = [
  { icon: Users, label: "Projetos Entregues", value: "200+" },
  { icon: TrendingUp, label: "Clientes Satisfeitos", value: "98%" },
  { icon: Zap, label: "Uptime Médio", value: "99.9%" },
  { icon: Eye, label: "Utilizadores Ativos", value: "500k+" }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
              <Eye className="w-4 h-4 mr-2" />
              Portfolio de Projetos
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Projetos que{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                inspiram
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários que alcançamos.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 border border-orange-500/20">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 transform group-hover:-translate-y-2 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/20">{project.title}</div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-white/10 text-white border-white/20">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-gray-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-gray-400 hover:text-white">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </CardDescription>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-white/10 text-white/70 border-white/20 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0 space-y-6">
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-orange-400">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="ghost" 
                        className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 p-0 h-auto font-semibold group/btn w-full justify-start"
                      >
                        Ver detalhes do projeto
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
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
              O seu projeto pode ser o{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                próximo
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Conte-nos sobre a sua ideia e vamos transformá-la numa solução digital de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-12 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                Iniciar Projeto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                Ver Mais Projetos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 