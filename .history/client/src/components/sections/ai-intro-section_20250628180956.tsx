import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, MessageCircle, TrendingUp, Users, Target, ArrowRight, Zap, Brain, Clock } from "lucide-react";

export function AIIntroSection() {
  const scrollToAI = () => {
    // Trigger the AI chat by finding and clicking the floating button
    const aiButton = document.querySelector('[data-ai-button]') as HTMLButtonElement;
    if (aiButton) {
      aiButton.click();
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-orange-950/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-8 px-6 py-3 text-sm font-semibold bg-orange-50/80 border-orange-200/60 text-orange-700 dark:bg-orange-950/30 dark:border-orange-800/40 dark:text-orange-300 rounded-full"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            IA Consultora Avançada
          </Badge>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-none">
            Descubra o sistema
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:to-orange-500">
              ideal para si
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-12">
            A nossa IA analisa o seu negócio e recomenda a solução perfeita 
            <span className="font-semibold text-orange-600 dark:text-orange-400">em menos de 3 minutos</span>.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="font-medium">3 min análise</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Brain className="w-5 h-5 text-orange-500" />
              <span className="font-medium">IA Avançada</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Resultados Imediatos</span>
            </div>
          </div>
        </div>

        {/* AI Features Grid - Redesigned */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-gray-900/60">
            <CardContent className="p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Conversa Natural
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Fale connosco como faria com um consultor humano. A nossa IA compreende português perfeitamente.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-gray-900/60">
            <CardContent className="p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Análise Inteligente
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Qualificamos o seu negócio e identificamos oportunidades de melhoria específicas para o seu setor.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 dark:bg-gray-900/60">
            <CardContent className="p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Relatório Inteligente
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Calculamos economia estimada e enviamos análise completa por email. WhatsApp opcional para updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA - Redesigned */}
        <div className="text-center">
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            
            <Card className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-4xl font-black mb-6 text-gray-900 dark:text-white">
                  Comece agora mesmo
                </h3>
                
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
                  A IA está disponível 24/7 e a análise demora apenas 3 minutos.
                </p>
                
                <Button 
                  onClick={scrollToAI}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-16 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
                >
                  <MessageCircle className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform" />
                  Falar com a IA Consultora
                  <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-500">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    Grátis
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-orange-500">🇵🇹</span>
                    Em Português
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500" />
                    Resultados Imediatos
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 