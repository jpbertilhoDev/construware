import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  Globe,
  Cog,
  Layers,
  Rocket,
  Monitor,
  GitBranch
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas e responsivas construídas com as mais recentes tecnologias. React, Next.js, Vue.js e muito mais.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5"
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicações nativas e cross-platform para iOS e Android. React Native, Flutter e desenvolvimento nativo.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/5"
  },
  {
    icon: Cloud,
    title: "Soluções Cloud",
    description: "Arquitetura cloud-native escalável com AWS, Azure e Google Cloud. Microserviços e containers.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/5"
  },
  {
    icon: Database,
    title: "Bases de Dados",
    description: "Design e otimização de bases de dados relacionais e NoSQL. PostgreSQL, MongoDB, Redis e mais.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/5"
  },
  {
    icon: Shield,
    title: "Segurança Avançada", 
    description: "Implementação de protocolos de segurança robustos, autenticação e proteção de dados sensíveis.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/5"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização de performance e velocidade. Aplicações rápidas, eficientes e com excelente UX.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/5"
  },
  {
    icon: Globe,
    title: "APIs & Integrações",
    description: "Desenvolvimento de APIs RESTful e GraphQL. Integrações com sistemas externos e serviços terceiros.",
    gradient: "from-teal-500 to-blue-500",
    bgGradient: "from-teal-500/10 to-blue-500/5"
  },
  {
    icon: Cog,
    title: "DevOps & CI/CD",
    description: "Pipelines de deployment automatizados, monitorização e infraestrutura como código.",
    gradient: "from-slate-500 to-gray-500",
    bgGradient: "from-slate-500/10 to-gray-500/5"
  },
  {
    icon: Layers,
    title: "Arquitetura Escalável",
    description: "Design de sistemas que crescem com o seu negócio. Padrões enterprise e melhores práticas.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/5"
  },
  {
    icon: Rocket,
    title: "MVP & Protótipos",
    description: "Desenvolvimento rápido de MVPs e protótipos funcionais para validação de ideias e conceitos.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/5"
  },
  {
    icon: Monitor,
    title: "Dashboards Analytics",
    description: "Painéis de controlo intuitivos com visualização de dados em tempo real e relatórios personalizados.",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 to-blue-500/5"
  },
  {
    icon: GitBranch,
    title: "Versionamento & Deploy",
    description: "Controlo de versões profissional, branching strategies e deployments seguros e automatizados.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/5"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Tecnologias Avançadas
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            <span className="text-white">Desenvolvemos</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              o impossível
            </span>
          </h2>
          
          <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
            Utilizamos as tecnologias mais avançadas e metodologias comprovadas 
            para criar soluções digitais que transformam negócios e encantam utilizadores.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Nossa Stack{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Tecnológica
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { name: "React", logo: "⚛️" },
              { name: "Node.js", logo: "🟢" },
              { name: "Python", logo: "🐍" },
              { name: "TypeScript", logo: "📘" },
              { name: "AWS", logo: "☁️" },
              { name: "Docker", logo: "🐳" },
              { name: "PostgreSQL", logo: "🐘" },
              { name: "MongoDB", logo: "🍃" },
              { name: "React Native", logo: "📱" },
              { name: "Next.js", logo: "▲" },
              { name: "GraphQL", logo: "📊" },
              { name: "Kubernetes", logo: "⚙️" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <div className="text-white/80 text-sm font-medium group-hover:text-orange-300 transition-colors">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Pronto para dar vida à sua ideia?
          </h3>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Fale connosco e descubra como podemos transformar a sua visão em uma solução digital extraordinária.
          </p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-12 py-4 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
