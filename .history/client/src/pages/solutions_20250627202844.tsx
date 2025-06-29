import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas usando React, Next.js e as mais recentes tecnologias.",
    features: ["Single Page Applications", "E-commerce avançado", "Dashboards empresariais"]
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Apps nativos e cross-platform para iOS e Android com experiência premium.",
    features: ["React Native", "Apps nativos iOS/Android", "Push notifications"]
  },
  {
    icon: Cloud,
    title: "Soluções Cloud",
    description: "Arquiteturas escaláveis na nuvem com alta disponibilidade e performance.",
    features: ["Microserviços", "Auto-scaling", "Monitorização 24/7"]
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Integração de IA para automação, análise preditiva e chatbots inteligentes.",
    features: ["Machine Learning", "Chatbots inteligentes", "Análise preditiva"]
  }
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Soluções que{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                transformam
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Desenvolvemos software personalizado para cada necessidade do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                  <CardHeader className="p-0 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-lg leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 p-0 h-auto font-semibold"
                    >
                      Saber mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                começar?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Transforme sua visão em realidade digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-12 py-3 rounded-lg">
                Solicitar Orçamento
              </Button>
              <Button size="lg" variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5 px-12 py-3 rounded-lg">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 