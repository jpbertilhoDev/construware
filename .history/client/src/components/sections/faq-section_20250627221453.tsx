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
    question: "Quanto tempo demora para desenvolver um sistema personalizado?",
    answer: "O prazo varia conforme a complexidade do projeto. Websites simples ficam prontos em 2-3 semanas. Sistemas web complexos levam de 2 a 6 meses. Apps mobile completos podem demorar de 3 a 8 meses. Fornecemos cronograma detalhado após análise do projeto."
  },
  {
    id: "2",
    question: "Vocês oferecem manutenção após o desenvolvimento?",
    answer: "Sim, oferecemos planos de manutenção contínua que incluem correções de bugs, atualizações de segurança, backup automático, monitoramento 24/7 e novas funcionalidades. Os planos variam de €200 a €500 mensais dependendo da complexidade."
  },
  {
    id: "3",
    question: "É possível integrar com sistemas já existentes?",
    answer: "Absolutamente. Especializamo-nos em integrações complexas. Desenvolvemos APIs customizadas e conectores para integrar seus novos sistemas com ERPs, CRMs, bases de dados existentes, serviços de pagamento, e qualquer plataforma que sua empresa utilize."
  },
  {
    id: "4", 
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Seguimos uma metodologia ágil: 1) Reunião de descoberta e análise de requisitos, 2) Prototipagem e wireframes, 3) Design UX/UI, 4) Desenvolvimento em sprints, 5) Testes rigorosos, 6) Deploy e treinamento da equipe. Você acompanha cada etapa com demonstrações regulares."
  },
  {
    id: "5",
    question: "Desenvolvem para que tipos de empresas?",
    answer: "Atendemos empresas de todos os setores: saúde, educação, logística, varejo, jurídico, imobiliário, alimentação, academias, consultórias, e muito mais. Cada projeto é único e desenvolvemos soluções específicas para as necessidades do seu negócio."
  },
  {
    id: "6",
    question: "O código-fonte fica comigo ao final do projeto?",
    answer: "Sim, você recebe o código-fonte completo, documentação técnica detalhada, credenciais de servidor e todos os assets do projeto. Garantimos total transparência e propriedade intelectual. Também oferecemos treinamento técnico se sua equipe precisar dar manutenção internamente."
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
            Esclarecemos suas dúvidas sobre desenvolvimento de software e como podemos transformar suas ideias em realidade digital.
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
