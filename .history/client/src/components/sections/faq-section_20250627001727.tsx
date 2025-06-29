import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "lucide-react";
import type { FAQItem } from "@/lib/types";

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Como funciona a integração com sistemas existentes?",
    answer: "A Construware oferece APIs robustas e conectores pré-configurados para os principais sistemas ERP e contábeis do mercado. Nossa equipe técnica auxilia na implementação garantindo uma migração suave e sem perda de dados."
  },
  {
    id: "2",
    question: "Qual o tempo de implementação do sistema?",
    answer: "O tempo varia conforme a complexidade e tamanho da empresa. Para pequenas e médias empresas, a implementação completa leva de 1 a 2 semanas. Para grandes construtoras, pode levar de 2 a 4 semanas, incluindo treinamento da equipe."
  },
  {
    id: "3",
    question: "Os dados ficam seguros na nuvem?",
    answer: "Sim, utilizamos criptografia de nível bancário e servidores em nuvem certificados. Todos os dados são backupeados automaticamente e seguimos rigorosamente a LGPD. Além disso, oferecemos controles granulares de acesso por usuário."
  },
  {
    id: "4", 
    question: "Posso cancelar a qualquer momento?",
    answer: "Absolutamente. Não há fidelidade nos nossos planos. Você pode cancelar a qualquer momento e seus dados permanecem disponíveis por 90 dias para download. Oferecemos também assistência na migração para outros sistemas, se necessário."
  },
  {
    id: "5",
    question: "Existe treinamento para a equipe?",
    answer: "Sim, oferecemos treinamento completo para sua equipe, incluindo sessões online ao vivo, documentação detalhada e suporte contínuo. O treinamento é personalizado conforme as necessidades da sua empresa."
  },
  {
    id: "6",
    question: "O sistema funciona offline?",
    answer: "O Construware possui funcionalidades offline limitadas para situações em que a conectividade é instável no canteiro de obras. Os dados são sincronizados automaticamente quando a conexão é restabelecida."
  }
];

export function FAQSection() {
  return (
    <section className="py-40 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/15 via-orange-400/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/15 via-orange-500/10 to-transparent blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
            Suporte Completo
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white">
            Perguntas <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Tire suas dúvidas sobre a Construware e descubra como podemos transformar sua gestão de projetos.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem 
                    value={item.id}
                    className="border-0 overflow-hidden"
                  >
                    <div className="relative">
                      {/* Fancy border with gradient */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/30 via-orange-400/20 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Main content with backdrop */}
                      <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group-hover:border-orange-500/20 transition-colors duration-300">
                        <AccordionTrigger className="px-8 py-6 text-left font-medium text-white hover:text-white text-lg flex w-full">
                          <div className="flex justify-between items-center w-full">
                            <span>{item.question}</span>
                            <div className="relative flex-shrink-0">
                              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-300">
                                <PlusIcon className="w-4 h-4 text-orange-400 group-hover:text-orange-500 transition-colors duration-300 group-data-[state=open]:hidden" />
                                <MinusIcon className="w-4 h-4 text-orange-400 group-hover:text-orange-500 transition-colors duration-300 hidden group-data-[state=open]:block" />
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent className="px-8 pb-6 text-white/70 leading-relaxed text-base">
                          {item.answer}
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-600/20 to-orange-500/20 border border-orange-500/30 text-white/90 gap-2">
            <span className="text-sm">Ainda tem dúvidas?</span>
            <a href="#contato" className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors">
              Fale com nosso time
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
