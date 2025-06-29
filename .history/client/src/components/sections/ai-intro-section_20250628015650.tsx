import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, MessageCircle, TrendingUp, Users, Target, ArrowRight } from "lucide-react";

export function AIIntroSection() {
  const scrollToAI = () => {
    // Trigger the AI chat by finding and clicking the floating button
    const aiButton = document.querySelector('[data-ai-button]') as HTMLButtonElement;
    if (aiButton) {
      aiButton.click();
    }
  };

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 px-4 py-2 text-sm font-medium bg-purple-50/80 border-purple-200/60 text-purple-700 dark:bg-purple-950/30 dark:border-purple-800/40 dark:text-purple-300"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Novidade: IA Consultora
          </Badge>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
            Descubra o sistema
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              ideal para si
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            A nossa IA analisa o seu negócio e recomenda a solução perfeita em menos de 3 minutos.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/60 backdrop-blur-sm border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 dark:bg-gray-900/40 dark:border-gray-800/40 dark:hover:border-purple-600/30">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Conversa Natural
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Fale connosco como faria com um consultor humano. A nossa IA compreende português perfeitamente.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 dark:bg-gray-900/40 dark:border-gray-800/40 dark:hover:border-purple-600/30">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Análise Inteligente
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Qualificamos o seu negócio e identificamos oportunidades de melhoria específicas para o seu setor.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-gray-200/50 hover:border-purple-300/50 transition-all duration-300 dark:bg-gray-900/40 dark:border-gray-800/40 dark:hover:border-purple-600/30">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                ROI Instantâneo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Calculamos quanto pode poupar por ano e enviamos relatório detalhado para o seu WhatsApp.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-br from-purple-600 to-blue-600 p-1 rounded-3xl shadow-2xl shadow-purple-500/25">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-12">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Bot className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">
                Comece agora mesmo
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                A IA está disponível 24/7 e a análise demora apenas 3 minutos.
              </p>
              
              <Button 
                onClick={scrollToAI}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Falar com a IA Consultora
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                ✨ Grátis • 🇵🇹 Em Português • ⚡ Resultados Imediatos
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
} 