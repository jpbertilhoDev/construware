import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const companies = [
    "TechFlow", "DataCore", "NextGen", "CloudTech", "DevOps Pro", "AI Labs"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Subtle background grid - very minimal */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Single subtle accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main headline - very similar to Cursor */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.85]">
              O{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Construtor
              </span>
              <br />
              de Software
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
              Desenvolvemos soluções extraordinárias que transformam empresas. 
              A Construware é a melhor forma de criar software profissional.
            </p>
          </div>
          
          {/* Clean CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 bg-white text-black hover:bg-gray-100 font-semibold text-lg rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Iniciar Projeto
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="px-8 py-3 text-gray-300 hover:text-white hover:bg-white/5 font-semibold text-lg rounded-lg transition-all duration-200"
            >
              Ver Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          {/* Trusted by section - exactly like Cursor */}
          <div className="pt-16 space-y-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Trusted by engineers at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-gray-400/60 font-semibold text-lg hover:text-gray-300/80 transition-colors cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}