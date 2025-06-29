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
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">Inteligência Artificial Avançada</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Transforme</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Seu Negócio
                </span>
                <br />
                <span className="text-white">com IA</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Nossa consultoria inteligente analisa seu negócio em tempo real e 
                gera estratégias personalizadas para maximizar seus resultados.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Análise Inteligente</div>
                  <div className="text-sm text-slate-400">Em tempo real</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Soluções Precisas</div>
                  <div className="text-sm text-slate-400">Personalizadas</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar Consultoria Gratuita
              </Button>
            </div>
          </div>

          {/* Right Side - 3D Visual */}
          <div className="relative">
            {/* Main 3D Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl transform perspective-1000 rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm">Construware AI</div>
                </div>

                {/* AI Analysis Display */}
                <div className="space-y-4">
                  <div className="text-white font-semibold text-lg">Análise em Tempo Real</div>
                  
                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">Eficiência Operacional</span>
                        <span className="text-orange-400">87%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full animate-progress-87"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">Potencial de Crescimento</span>
                        <span className="text-blue-400">94%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full animate-progress-94"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">Otimização de Custos</span>
                        <span className="text-green-400">76%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full animate-progress-76"></div>
                      </div>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl border border-slate-600/50">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-green-400">Insight Gerado</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Implementação de automação pode aumentar produtividade em 45% nos próximos 6 meses.
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4">
                    <button className="w-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-orange-300 py-2 px-4 rounded-lg hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 text-sm font-medium">
                      Ver Relatório Completo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-slow">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl animate-pulse">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(45deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes progress-87 {
          0% { width: 0%; }
          100% { width: 87%; }
        }
        
        @keyframes progress-94 {
          0% { width: 0%; }
          100% { width: 94%; }
        }
        
        @keyframes progress-76 {
          0% { width: 0%; }
          100% { width: 76%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-progress-87 {
          animation: progress-87 2s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .animate-progress-94 {
          animation: progress-94 2s ease-out forwards;
          animation-delay: 1s;
        }
        
        .animate-progress-76 {
          animation: progress-76 2s ease-out forwards;
          animation-delay: 1.5s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}