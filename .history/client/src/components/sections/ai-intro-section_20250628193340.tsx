import React from 'react';
import { Button } from '../ui/button';
import { Sparkles, Brain, Zap, Target, TrendingUp, Shield, Cpu, Eye, Rocket, ArrowRight } from 'lucide-react';

export function AIIntroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        {/* Subtle Gradient Orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[90vh]">
          
          {/* Left Side - Hero Content */}
          <div className="space-y-10 lg:pr-8">
            {/* Clean Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full">
              <Brain className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Inteligência Artificial Avançada</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                  O Futuro da sua Empresa!
                </span>
                <span className="block text-2xl lg:text-4xl font-medium text-slate-300 mt-4">
                  começa agora
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light">
                Nossa <span className="text-orange-400 font-semibold">IA consultora</span> analisa, 
                otimiza e transforma seu negócio em <span className="text-white font-semibold">tempo real</span>. 
                Resultados extraordinários em minutos.
              </p>
            </div>

            {/* Simplified Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-orange-400 mb-1">97%</div>
                <div className="text-xs text-slate-400">Precisão</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-1">3min</div>
                <div className="text-xs text-slate-400">Análise</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-xs text-slate-400">Ativo</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                onClick={() => {
                  // Trigger AI Consultant to open
                  window.dispatchEvent(new CustomEvent('openAIConsultant'));
                }}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Iniciar Transformação
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-6 py-4 text-lg font-medium border border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 rounded-xl transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Right Side - Clean AI Interface */}
          <div className="relative">
            {/* Main Interface Panel */}
            <div className="relative group">
              {/* Subtle Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Interface Card */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-slate-400 text-sm font-mono">CONSTRUWARE.AI</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">ONLINE</span>
                  </div>
                </div>

                {/* AI Brain */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-orange-500/30">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">IA Analisando</div>
                  <div className="text-slate-400 text-sm">Processando dados...</div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">Eficiência Operacional</span>
                      <span className="text-orange-400 font-semibold">94%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-[94%] animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">Potencial ROI</span>
                      <span className="text-blue-400 font-semibold">387%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm">Automação Possível</span>
                      <span className="text-green-400 font-semibold">76%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full w-[76%] animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Insight Panel */}
                <div className="mt-6 p-4 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-xl border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium text-sm">Insight Gerado</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Implementação de automação pode <span className="text-orange-400 font-semibold">triplicar</span> sua 
                    produtividade nos próximos 90 dias.
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button 
                    onClick={() => {
                      // Trigger AI Consultant to open
                      window.dispatchEvent(new CustomEvent('openAIConsultant'));
                    }}
                    className="w-full bg-gradient-to-r from-orange-500/30 to-red-500/30 hover:from-orange-500/50 hover:to-red-500/50 border border-orange-500/50 text-orange-300 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 text-sm font-semibold"
                  >
                    Gerar Relatório Completo
                  </button>
                </div>
              </div>
            </div>

            {/* Minimal Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 animate-float">
              <Shield className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}