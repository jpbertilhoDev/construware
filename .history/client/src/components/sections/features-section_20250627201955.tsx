import { motion } from "framer-motion";
import { Code2, Zap, Brain } from "lucide-react";

const features = [
  {
    title: "Tab, tab, tab",
    description: "A Construware permite que você acelere o desenvolvimento prevendo sua próxima edição.",
    visual: "🚀"
  },
  {
    title: "Conhece seu projeto",
    description: "Obtém respostas do seu código ou refere-se a arquivos e documentos. Use integrações em um clique.",
    visual: "🧠"
  },
  {
    title: "Desenvolve em linguagem natural",
    description: "A Construware permite escrever código usando instruções. Atualize classes ou funções inteiras com um prompt simples.",
    visual: "✨"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  {feature.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center border border-gray-800">
                  <div className="text-8xl">
                    {feature.visual}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Build Software Faster */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32 space-y-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Desenvolva software{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              mais rápido
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Inteligente, rápida e familiar, a Construware é a melhor forma de desenvolver software com qualidade.
          </p>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Inteligência Avançada</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Alimentado por modelos de propósito específico e de fronteira, a Construware é inteligente e rápida.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Familiar e Intuitivo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Importe todas as suas extensões, temas e configurações em um clique.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Opções de Privacidade</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Se ativar o Modo Privado, seu código nunca é armazenado remotamente sem seu consentimento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
