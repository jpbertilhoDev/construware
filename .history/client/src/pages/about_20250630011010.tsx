import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  ArrowRight,
  Building,
  Code,
  Lightbulb,
  Zap,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019",
    title: "O Início na Construção",
    description: "Começámos como uma empresa de engenharia civil, focada em projectos de construção tradicionais.",
    icon: Building,
    color: "from-gray-500 to-slate-600"
  },
  {
    year: "2021",
    title: "A Descoberta Digital",
    description: "Percebemos que o futuro estava na tecnologia. Começámos a desenvolver as nossas primeiras soluções digitais.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "2022",
    title: "Transição Completa",
    description: "Fizemos a transição completa para desenvolvimento de software, focando em soluções que realmente resolvem problemas.",
    icon: Code,
    color: "from-blue-500 to-indigo-500"
  },
  {
    year: "2024",
    title: "Construware Hoje",
    description: "Hoje ajudamos centenas de empresas a automatizar os seus processos e aumentar a produtividade.",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  }
];

const values = [
  {
    icon: Heart,
    title: "Paixão pelo que fazemos",
    description: "Cada projecto é tratado como se fosse nosso. A sua satisfação é o nosso sucesso."
  },
  {
    icon: Target,
    title: "Foco nos resultados",
    description: "Não vendemos apenas software. Vendemos soluções que realmente fazem a diferença no seu negócio."
  },
  {
    icon: Users,
    title: "Parceria verdadeira",
    description: "Não somos apenas fornecedores. Somos parceiros comprometidos com o seu crescimento."
  },
  {
    icon: Award,
    title: "Qualidade sem compromissos",
    description: "Usamos as melhores tecnologias e práticas para entregar soluções de excelência."
  }
];

const stats = [
  { value: "200+", label: "Projectos Entregues", sublabel: "Com sucesso total" },
  { value: "50+", label: "Empresas Satisfeitas", sublabel: "Em Portugal" },
  { value: "5", label: "Anos de Experiência", sublabel: "Em evolução constante" },
  { value: "24/7", label: "Suporte Disponível", sublabel: "Sempre que precisar" }
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">A Nossa História</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
              <span className="text-white">De engenheiros a </span>
              <span className="text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text">
                criadores digitais
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              A Construware nasceu da paixão por construir, mas evoluiu para algo muito maior: 
              <br className="hidden md:block" />
              <span className="text-white font-medium"> construir o futuro digital das empresas portuguesas.</span>
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              A nossa jornada
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Uma evolução constante em busca da excelência tecnológica
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2
                    }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full px-3 py-1 text-sm font-bold text-white shadow-md">
                        {milestone.year}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Os nossos valores
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Estes são os princípios que nos guiam em cada projecto e em cada interacção com os nossos clientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
              <div className="absolute top-4 right-4">
                <Sparkles className="w-8 h-8 text-white/30" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  A nossa missão
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed mb-10 font-light">
                  Democratizar a tecnologia para empresas portuguesas, criando soluções 
                  que realmente fazem a diferença. Queremos que cada empresa, independentemente 
                  do tamanho, tenha acesso às melhores ferramentas digitais.
                </p>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-10 py-4 text-lg font-semibold rounded-2xl border-2 border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300 group"
                >
                  Conhecer a Equipa
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

 
 