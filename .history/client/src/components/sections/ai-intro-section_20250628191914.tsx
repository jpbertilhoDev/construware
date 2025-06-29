import React from 'react';
import { Button } from '../ui/button';
import { Sparkles, Brain, Zap, Target, TrendingUp, Shield, Cpu, Eye, Rocket, ArrowRight } from 'lucide-react';

export function AIIntroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background - Neural Network */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        
        {/* Floating Orbs with Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-red-500/20 rounded-full blur-3xl animate-pulse-slow opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/25 to-purple-500/20 rounded-full blur-3xl animate-pulse-delayed opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/15 rounded-full blur-2xl animate-float opacity-40"></div>
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#f97316', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.3}} />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,150" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="animate-draw-line" />
          <path d="M200,400 Q400,300 600,400 T1000,350" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="animate-draw-line-delayed" />
          <path d="M150,600 Q350,500 550,600 T950,550" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="animate-draw-line-slow" />
          
          {/* Neural Nodes */}
          <circle cx="100" cy="200" r="6" fill="#f97316" className="animate-pulse">
            <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="200" r="8" fill="#3b82f6" className="animate-pulse">
            <animate attributeName="r" values="8;12;8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="150" r="7" fill="#8b5cf6" className="animate-pulse">
            <animate attributeName="r" values="7;11;7" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float-particles opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[90vh]">
          
          {/* Left Side - Hero Content */}
          <div className="space-y-10 lg:pr-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 via-orange-600/30 to-red-500/20 backdrop-blur-xl border border-orange-500/40 rounded-full shadow-2xl shadow-orange-500/20 animate-glow">
              <div className="relative">
                <Brain className="w-5 h-5 text-orange-400 animate-pulse" />
                <div className="absolute inset-0 w-5 h-5 bg-orange-400 rounded-full blur-sm opacity-50 animate-ping"></div>
              </div>
              <span className="text-sm font-bold text-orange-300 tracking-wide">INTELIGÊNCIA ARTIFICIAL REVOLUCIONÁRIA</span>
            </div>

            {/* Main Headline - Impressive Typography */}
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

            {/* Power Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-orange-400 mb-2">97%</div>
                <div className="text-sm text-slate-300 font-medium">Precisão</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-blue-400 mb-2">3min</div>
                <div className="text-sm text-slate-300 font-medium">Análise</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-green-400 mb-2">24/7</div>
                <div className="text-sm text-slate-300 font-medium">Ativo</div>
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
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                INICIAR TRANSFORMAÇÃO
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-semibold border-2 border-slate-600 text-slate-300 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 rounded-2xl transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Right Side - 3D AI Interface */}
          <div className="relative">
            {/* Main 3D Holographic Interface */}
            <div className="relative group">
              {/* Holographic Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/30 via-blue-500/20 to-purple-500/30 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-glow"></div>
              
              {/* Main Interface Panel */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-slate-600/50 rounded-[2.5rem] p-8 shadow-2xl transform perspective-1000 hover:rotate-y-5 transition-transform duration-700 hover:scale-105">
                
                {/* Interface Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <div className="text-slate-400 text-sm font-mono">CONSTRUWARE.AI</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-green-400 text-xs font-bold">ONLINE</span>
                  </div>
                </div>

                {/* AI Brain Visualization */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-2xl shadow-orange-500/50 animate-float">
                      <Cpu className="w-12 h-12 text-white animate-spin-slow" />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                  </div>
                  <div className="text-white font-bold text-xl mb-2">IA ANALISANDO</div>
                  <div className="text-slate-400 text-sm">Processando dados em tempo real...</div>
                </div>

                {/* Real-time Metrics */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-300 font-semibold">Eficiência Operacional</span>
                      <span className="text-orange-400 font-bold text-lg">94%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full animate-progress-94 shadow-lg shadow-orange-500/50"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-300 font-semibold">Potencial ROI</span>
                      <span className="text-blue-400 font-bold text-lg">387%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full animate-progress-387 shadow-lg shadow-blue-500/50"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-300 font-semibold">Automação Possível</span>
                      <span className="text-green-400 font-bold text-lg">76%</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full animate-progress-76 shadow-lg shadow-green-500/50"></div>
                    </div>
                  </div>
                </div>

                {/* AI Insights Panel */}
                <div className="mt-8 p-6 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-2xl border border-slate-600/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-green-400 font-bold text-sm">INSIGHT GERADO</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 to-transparent"></div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold">Oportunidade identificada:</span> Implementação de 
                    automação inteligente pode <span className="text-orange-400 font-semibold">triplicar</span> sua 
                    produtividade nos próximos 90 dias.
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-orange-500/30 to-red-500/30 hover:from-orange-500/50 hover:to-red-500/50 border border-orange-500/50 text-orange-300 hover:text-white py-4 px-6 rounded-xl transition-all duration-300 text-sm font-bold backdrop-blur-sm shadow-lg hover:shadow-orange-500/25">
                    GERAR RELATÓRIO COMPLETO
                  </button>
                </div>
              </div>
            </div>

            {/* Floating 3D Elements */}
            <div className="absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/50 animate-float-reverse">
              <Shield className="w-10 h-10 text-white animate-pulse" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/50 animate-bounce-slow">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50 animate-spin-slow">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations & Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(5deg); }
        }
        
        @keyframes float-particles {
          0% { transform: translateY(100vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
        }
        
        @keyframes progress-94 {
          0% { width: 0%; }
          100% { width: 94%; }
        }
        
        @keyframes progress-387 {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes progress-76 {
          0% { width: 0%; }
          100% { width: 76%; }
        }
        
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        @keyframes draw-line-delayed {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        @keyframes draw-line-slow {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        
        .animate-float-particles {
          animation: float-particles linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-progress-94 {
          animation: progress-94 3s ease-out forwards;
          animation-delay: 1s;
        }
        
        .animate-progress-387 {
          animation: progress-387 3s ease-out forwards;
          animation-delay: 1.5s;
        }
        
        .animate-progress-76 {
          animation: progress-76 3s ease-out forwards;
          animation-delay: 2s;
        }
        
        .animate-draw-line {
          animation: draw-line 4s ease-in-out infinite;
        }
        
        .animate-draw-line-delayed {
          animation: draw-line-delayed 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-draw-line-slow {
          animation: draw-line-slow 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .hover\\:rotate-y-5:hover {
          transform: rotateY(5deg);
        }
      `}</style>
    </section>
  );
}