import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowLeft, Home, Code2, Monitor, Terminal, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [location, navigate] = useLocation();
  const [percentage, setPercentage] = useState(30);
  
  // Renderizar apenas no lado do cliente
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Simular progresso de desenvolvimento
    const interval = setInterval(() => {
      setPercentage(prev => {
        const newValue = prev + Math.floor(Math.random() * 5);
        return newValue > 95 ? 30 : newValue;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Não renderizar nada durante SSR para evitar hidratação incorreta
  if (!isMounted) {
    return null;
  }
  
  // Selecionar mensagem criativa aleatória
  const messages = [
    "Nossa equipa está a programar esta funcionalidade.",
    "Estamos a compilar os algoritmos desta página.",
    "Esta área ainda está em fase de desenvolvimento.",
    "Ainda estamos a debugar e otimizar este espaço.",
    "Os nossos developers estão a trabalhar aqui."
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-black">
      {/* Grid background - Usando CSS puro para melhor performance */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)]"></div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 animate-fade-in">
        {/* Simple breadcrumb */}
        <div className="mb-6 text-sm text-white/50 flex items-center justify-center sm:justify-start">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="h-3 w-3" />
            <span>Início</span>
          </button>
          <span className="mx-2">/</span>
          <span className="text-orange-400">404</span>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-6 relative">
              {/* Decoração de código */}
              <div className="absolute -right-14 -top-8 hidden sm:block">
                <Terminal className="w-14 h-14 text-orange-400/10 rotate-12" />
              </div>
              
              <div className="relative">
                {/* Static 404 with subtle glow effect */}
                <div 
                  className="text-[8rem] sm:text-[10rem] font-black flex leading-none tracking-tighter"
                  style={{
                    textShadow: "0 0 20px rgba(255, 92, 0, 0.3)",
                    WebkitTextStroke: "2px #FF5C00",
                    color: "transparent",
                  }}
                >
                  404
                </div>
                
                {/* Simple static glow effect */}
                <div 
                  className="absolute inset-0 blur-2xl opacity-20 bg-orange-500 rounded-full -z-10"
                ></div>
              </div>
              
              {/* Decoração de monitor */}
              <div className="absolute -left-12 -top-5 hidden sm:block">
                <Monitor className="w-12 h-12 text-orange-400/15" />
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Página em desenvolvimento
              </h2>
              <p className="text-md text-white/60 max-w-lg mx-auto flex flex-col items-center gap-2">
                <span>O caminho que tentou acessar não existe ou está em desenvolvimento.</span>
                <span className="text-orange-400/80 text-sm font-medium">"{randomMessage}"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar with project completion percentage */}
        <div className="mb-8 flex flex-col justify-center items-center gap-1">
          <div className="relative h-1.5 w-full max-w-xs bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-xs text-white/40 font-medium flex items-center gap-1.5">
            <Code2 className="h-3 w-3" />
            <span>Desenvolvimento {percentage}% concluído</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            size="lg"
            onClick={() => navigate("/")}
            className="gap-2 text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </Button>
        </div>
        
        {/* Minimal decoration */}
        <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none hidden md:block">
          <Cpu className="w-20 h-20 text-orange-400" />
        </div>
        
        {/* Projeto em desenvolvimento tag */}
        <div className="absolute top-4 right-4 bg-orange-500/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-orange-300 font-medium border border-orange-500/20 hidden sm:flex items-center gap-1.5">
          <Code2 className="h-3 w-3" />
          <span>Em Desenvolvimento</span>
        </div>
      </div>
    </div>
  );
}
