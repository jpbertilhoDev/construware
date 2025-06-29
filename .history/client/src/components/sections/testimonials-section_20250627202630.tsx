import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "A Construware é pelo menos uma melhoria de 2x sobre nossos processos anteriores. É incrível ter um parceiro de desenvolvimento tão eficiente.",
    author: "Carlos Silva",
    role: "CTO",
    company: "TechFlow"
  },
  {
    quote: "O desenvolvimento com a Construware ocasionalmente é tão mágico que desafia a realidade - cerca de 25% do tempo eles antecipam exatamente o que queremos fazer.",
    author: "Ana Costa",
    role: "CEO",
    company: "DataCore"
  },
  {
    quote: "A Construware é sem dúvida a minha maior melhoria de fluxo de trabalho em anos.",
    author: "Roberto Santos",
    role: "Lead Developer",
    company: "NextGen"
  },
  {
    quote: "Eu amo desenvolver software e a Construware é uma necessidade. Eles estão passos à frente do meu cérebro, propondo edições multi-linha.",
    author: "Marina Oliveira",
    role: "Senior Developer",
    company: "CloudTech"
  },
  {
    quote: "A Construware é tão boa, e literalmente fica melhor/mais rica em recursos a cada duas semanas.",
    author: "Paulo Mendes",
    role: "Engineering Manager",
    company: "DevOps Pro"
  },
  {
    quote: "A Construware é incrível! Alguém finalmente colocou IA no desenvolvimento de uma forma perfeita. É tão elegante e fácil.",
    author: "Fernanda Lima",
    role: "Product Manager",
    company: "AI Labs"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            Amado por{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              desenvolvedores
            </span>{" "}
            de classe mundial
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Engenheiros ao redor do mundo escolhem a Construware.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 