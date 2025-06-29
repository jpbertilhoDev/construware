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
    question: "Quanto tempo leva para desenvolver um sistema personalizado?",
    answer: "O tempo varia conforme a complexidade do projeto. Sistemas simples ficam prontos em 4-6 semanas, projetos médios em 8-12 semanas, e sistemas enterprise complexos podem levar 16+ semanas. Fornecemos cronograma detalhado na fase de planejamento."
  },
  {
    id: "2",
    question: "Vocês desenvolvem tanto aplicações web quanto mobile?",
    answer: "Sim, somos especialistas em desenvolvimento full-stack. Criamos websites, sistemas web, aplicações mobile nativas (iOS/Android), apps híbridos e soluções desktop. Sempre escolhemos a tecnologia mais adequada para cada projeto."
  },
  {
    id: "3",
    question: "Como garantem a segurança dos sistemas desenvolvidos?",
    answer: "Implementamos as melhores práticas de segurança: criptografia de dados, autenticação segura, proteção contra ataques, backup automático e conformidade com LGPD. Todos os códigos passam por auditoria de segurança antes da entrega."
  },
  {
    id: "4", 
    question: "Oferecem suporte após o lançamento do sistema?",
    answer: "Sim, todos os projetos incluem período de suporte gratuito (1-6 meses dependendo do plano). Depois oferecemos contratos de manutenção com diferentes níveis de SLA, incluindo atualizações, correções e melhorias contínuas."
  },
  {
    id: "5",
    question: "Posso ter acesso ao código-fonte do meu sistema?",
    answer: "Absolutamente. O código-fonte é 100% seu. Entregamos toda a documentação técnica, códigos organizados, instruções de deploy e treinamento para sua equipe. Você tem total independência sobre seu sistema."
  },
  {
    id: "6",
    question: "Trabalham com integração de sistemas existentes?",
    answer: "Sim, somos experientes em integração de APIs, migração de dados e conectividade entre sistemas. Podemos integrar seu novo sistema com ERPs, CRMs, gateways de pagamento, serviços de terceiros e qualquer API disponível."
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
            Suporte Especializado
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white">
            Perguntas <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Tire suas dúvidas sobre nossos serviços e descubra como transformamos ideias em soluções digitais de sucesso.
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
