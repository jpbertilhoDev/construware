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
  Zap
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

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 px-4 py-2 bg-orange-100 text-orange-800 border-orange-200">
            <Users className="w-4 h-4 mr-2" />
            A Nossa História
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            De engenheiros a 
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text"> criadores digitais</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Construware nasceu da paixão por construir, mas evoluiu para algo muito maior: 
            <strong className="text-gray-900"> construir o futuro digital das empresas portuguesas.</strong>
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
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
                    <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 text-sm font-bold text-gray-900 shadow-md">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Os nossos valores
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estes são os princípios que nos guiam em cada projecto e em cada interacção com os nossos clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              A nossa missão
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
              Democratizar a tecnologia para empresas portuguesas, criando soluções 
              que realmente fazem a diferença. Queremos que cada empresa, independentemente 
              do tamanho, tenha acesso às melhores ferramentas digitais.
            </p>
            
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300 group"
            >
              Conhecer a Equipa
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 