import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain, 
  Database,
  Palette,
  ArrowRight,
  CheckCircle,
  Monitor,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas usando React, Next.js, Vue.js e as tecnologias mais avançadas.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)", 
      "E-commerce avançado",
      "Dashboards empresariais"
    ]
  },
  {
    icon: Smartphone,
    title: "Aplicações Mobile",
    description: "Apps nativos e cross-platform que oferecem experiência premium em iOS e Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Apps nativos iOS/Android",
      "Cross-platform development",
      "Push notifications",
      "Integração com APIs"
    ]
  },
  {
    icon: Cloud,
    title: "Soluções Cloud",
    description: "Arquiteturas escaláveis e robustas na nuvem com alta disponibilidade e performance.",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    gradient: "from-green-500 to-blue-500",
    features: [
      "Microserviços",
      "Auto-scaling",
      "CI/CD Pipelines",
      "Monitorização 24/7"
    ]
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Integração de IA avançada para automação, análise preditiva e chatbots inteligentes.",
    technologies: ["Python", "TensorFlow", "OpenAI", "Machine Learning"],
    gradient: "from-orange-500 to-red-500",
    features: [
      "Machine Learning personalizado",
      "Chatbots inteligentes",
      "Análise preditiva",
      "Processamento de linguagem"
    ]
  },
  {
    icon: Database,
    title: "Bases de Dados",
    description: "Soluções de armazenamento otimizadas para performance, segurança e escalabilidade.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "Design de esquemas",
      "Otimização de queries",
      "Backup automático",
      "Alta disponibilidade"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces modernas e intuitivas que encantam utilizadores e melhoram conversões.",
    technologies: ["Figma", "Adobe XD", "Framer", "Principle"],
    gradient: "from-pink-500 to-rose-500",
    features: [
      "Design systems",
      "Prototipagem interativa",
      "Testes de usabilidade",
      "Design responsivo"
    ]
  }
];

const additionalServices = [
  {
    icon: Monitor,
    title: "Consultoria Técnica",
    description: "Análise e otimização de sistemas existentes"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização de velocidade e performance"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Auditorias e implementação de segurança"
  },
  {
    icon: Globe,
    title: "Integrações",
    description: "Conecte sistemas e APIs externos"
  }
];

export default function Solutions() {
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
              <Code2 className="w-4 h-4 mr-2" />
              Soluções Completas
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Tecnologia que{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                transforma
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Desenvolvemos soluções de software personalizadas para cada necessidade do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
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
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {solution.technologies.slice(0, 2).map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-white/10 text-white/70 border-white/20 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-6">
                    <CardDescription className="text-lg text-gray-300 leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="ghost" 
                        className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 p-0 h-auto font-semibold group/btn"
                      >
                        Saber mais
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

      {/* Additional Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
              Serviços{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                Adicionais
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Suporte completo para otimizar e escalar suas soluções.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-500 p-6 rounded-2xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/10 transform group-hover:-translate-y-2 text-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-500/30 group-hover:to-orange-400/30 transition-all duration-300 border border-orange-500/20">
                      <service.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-lg font-bold text-white group-hover:text-orange-100 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-sm text-gray-300 leading-relaxed">
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
                começar?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Conte-nos sobre seu projeto e descubra como podemos ajudar a transformar sua visão em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-12 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 