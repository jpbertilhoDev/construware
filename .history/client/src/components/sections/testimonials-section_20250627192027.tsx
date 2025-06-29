import { motion, useAnimationControls } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart Portugal",
    content: "A Construware transformou nossa ideia em uma aplicação incrível. O sistema de gestão que desenvolveram aumentou nossa eficiência em 60% em apenas 3 meses.",
    avatar: "CS",
    highlight: "60% mais eficiência"
  },
  {
    id: 2,
    name: "Ana Costa", 
    role: "CTO",
    company: "FinanceFlow",
    content: "Profissionalismo excepcional. A equipe da Construware entendeu perfeitamente nossos requisitos complexos e entregou uma solução fintech robusta e escalável.",
    avatar: "AC",
    highlight: "Solução fintech"
  },
  {
    id: 3,
    name: "Roberto Santos",
    role: "Diretor de TI", 
    company: "LogiChain Solutions",
    content: "Impressionante qualidade do código e arquitetura. O sistema de logística que criaram processa mais de 10.000 transações por dia sem problemas.",
    avatar: "RS",
    highlight: "10k+ transações/dia"
  },
  {
    id: 4,
    name: "Marina Oliveira",
    role: "Product Manager",
    company: "EduTech Labs",
    content: "A aplicação mobile educativa superou todas as expectativas. Interface intuitiva, performance excelente e mais de 50.000 usuários ativos em 6 meses.",
    avatar: "MO", 
    highlight: "50k+ usuários ativos"
  },
  {
    id: 5,
    name: "Paulo Mendes",
    role: "Founder",
    company: "HealthCare Digital",
    content: "ROI impressionante! O sistema de telemedicina que desenvolveram nos permitiu expandir para 5 países e aumentar nossa receita em 300% no primeiro ano.",
    avatar: "PM",
    highlight: "300% crescimento"
  },
  {
    id: 6,
    name: "Fernanda Lima",
    role: "Head of Digital",
    company: "RetailMax", 
    content: "A plataforma de e-commerce é fantástica. Integração perfeita com nossos sistemas legados e aumento de 45% nas vendas online desde o lançamento.",
    avatar: "FL",
    highlight: "45% mais vendas"
  },
  {
    id: 7,
    name: "Ricardo Oliveira",
    role: "CEO",
    company: "AgriTech Innovation",
    content: "O sistema de IoT para agricultura de precisão revolucionou nossa operação. Reduzimos custos em 30% e aumentamos a produtividade das culturas.",
    avatar: "RO",
    highlight: "30% economia custos"
  },
  {
    id: 8,
    name: "Juliana Martins",
    role: "CFO",
    company: "Smart Banking",
    content: "A solução de open banking desenvolvida é excepcional. Cumprimos todas as regulamentações e melhoramos a experiência do cliente significativamente.",
    avatar: "JM",
    highlight: "Conformidade total"
  },
  {
    id: 9,
    name: "Marcos Vieira",
    role: "CTO",
    company: "CloudFirst Technologies",
    content: "Arquitetura cloud-native impressionante. O sistema escala automaticamente e reduzimos nossos custos de infraestrutura em 40% mantendo alta performance.",
    avatar: "MV",
    highlight: "40% economia cloud"
  }
];

export function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isAnimating, setIsAnimating] = useState(false);
  const isMounted = useRef(false);

  // Primeiro useEffect apenas para marcar o componente como montado
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Segundo useEffect para iniciar a animação
  useEffect(() => {
    let animationTimeout: NodeJS.Timeout;

    const startAnimation = async () => {
      if (!carouselRef.current || !isMounted.current) return;
      
      setIsAnimating(true);
      const scrollWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;
      
      try {
        // Primeiro movimento suave para a direita
        await controls.start({
          x: -(scrollWidth - containerWidth),
          transition: {
            duration: 120,
            ease: "linear"
          }
        });
        
        // Garantimos que o componente ainda está montado antes de continuar
        if (isMounted.current) {
          // Reset instantâneo sem animação
          controls.set({ x: 0 });
          setIsAnimating(false);
          
          // Pequeno delay antes de reiniciar a animação
          animationTimeout = setTimeout(() => {
            if (isMounted.current) {
              startAnimation();
            }
          }, 100);
        }
      } catch (error) {
        // Em caso de erro, apenas limpa o estado
        if (isMounted.current) {
          setIsAnimating(false);
        }
      }
    };
    
    // Inicia a animação apenas se o componente estiver montado
    if (isMounted.current && !isAnimating) {
      startAnimation();
    }
    
    return () => {
      clearTimeout(animationTimeout);
      controls.stop();
    };
  }, [controls, isAnimating]);

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-[#0C0C0C] to-[#0F0F11] relative overflow-hidden">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 via-orange-400/10 to-transparent blur-[120px] transform rotate-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-600/20 via-orange-500/10 to-transparent blur-[120px] transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Highlighted header area */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Visual accent element */}
          <motion.div 
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          <div className="text-center mb-6 sm:mb-8">
            {/* Label badge */}
            <motion.div 
              className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-orange-500/30 text-xs sm:text-sm text-orange-400 backdrop-blur-sm mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Histórias de sucesso</span>
            </motion.div>
            
            {/* Bold impactful heading */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Confiado por <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">empresas</span> inovadoras
            </motion.h2>
            
            {/* Refined description */}
            <motion.p 
              className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Startups, scale-ups e empresas estabelecidas confiam na SparkDev 
              para transformar suas ideias em soluções digitais de sucesso.
            </motion.p>
          </div>
          
          {/* Featured testimonial for impact */}
          <motion.div
            className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/10 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl mb-8 sm:mb-12 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Large quote symbol */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-orange-500/30 rotate-180">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
            
            {/* Accent line */}
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-4 sm:mb-6"></div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed italic mb-6 sm:mb-8">
              "A SparkDev não apenas desenvolveu nosso software, mas transformou completamente nossa operação. 
              A qualidade técnica é excepcional e o suporte contínuo faz toda a diferença. 
              Nosso ROI foi visível em apenas 3 meses!"
            </p>
            
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20">
                PM
              </div>
              <div className="ml-0 sm:ml-4">
                <div className="font-medium text-white text-sm sm:text-base">Paulo Mendes</div>
                <div className="text-xs text-white/60">Founder, HealthCare Digital</div>
              </div>
              <div className="ml-auto mt-2 sm:mt-0 text-orange-400 font-medium text-xs sm:text-sm px-2 sm:px-3 py-1 bg-orange-500/10 rounded-full">
                300% crescimento em 1 ano
              </div>
            </div>
            
            {/* Decorative gradient accent */}
            <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-gradient-to-tl from-orange-500/20 to-transparent blur-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Carrossel infinito de depoimentos */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 sm:before:w-36 before:bg-gradient-to-r before:from-[#0C0C0C] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 sm:after:w-36 after:bg-gradient-to-l after:from-[#0C0C0C] after:to-transparent">
          <motion.div 
            ref={carouselRef}
            className="flex gap-3 sm:gap-6"
            animate={controls}
          >
            {/* Duplicamos o array para garantir que haja elementos suficientes para o scroll infinito */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[260px] sm:w-[320px] group"
              >
                <div className="h-full rounded-lg sm:rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-4 sm:p-6 relative overflow-hidden transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 min-h-[180px] flex flex-col">
                  {/* Header with badge and quote */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    {/* Highlight badge */}
                    <div className="text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-1 bg-orange-500/15 border border-orange-500/25 rounded-full text-orange-300 flex-shrink-0">
                      {testimonial.highlight}
                    </div>
                    
                    {/* Subtle quote icon */}
                    <div className="opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex-shrink-0">
                      <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-white/85 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center mt-auto">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-medium text-[10px] sm:text-xs shadow-sm shadow-orange-500/20 group-hover:shadow-md group-hover:shadow-orange-500/30 transition-shadow duration-300 flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3 min-w-0">
                      <div className="font-medium text-white text-xs sm:text-sm truncate">{testimonial.name}</div>
                      <div className="text-[10px] sm:text-xs text-white/60 truncate">{testimonial.role}</div>
                      <div className="text-[10px] sm:text-xs text-orange-400/80 font-medium truncate">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg sm:rounded-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#signup" 
            className="inline-flex items-center text-white bg-gradient-to-r from-orange-600/80 to-orange-500/80 hover:from-orange-600 hover:to-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Transforme sua ideia em realidade
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          
          <p className="text-white/50 mt-4 sm:mt-6 text-xs sm:text-sm">
            Junte-se a mais de <span className="text-orange-400 font-medium">200+ empresas</span> satisfeitas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
