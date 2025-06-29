import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Experimente a Construware{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Agora
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comece a desenvolver software de forma mais inteligente e rápida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 bg-white text-black hover:bg-gray-100 font-semibold text-lg rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Iniciar Projeto Grátis
            </Button>
            <Button 
              variant="ghost"
              size="lg"
              className="px-8 py-3 text-gray-300 hover:text-white hover:bg-white/5 font-semibold text-lg rounded-lg transition-all duration-200"
            >
              Falar com Vendas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
