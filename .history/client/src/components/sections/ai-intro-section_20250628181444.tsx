import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, MessageCircle, Target, TrendingUp, ArrowRight } from "lucide-react";

export function AIIntroSection() {
  const scrollToAI = () => {
    // Trigger the AI chat by finding and clicking the floating button
    const aiButton = document.querySelector('[data-ai-button]') as HTMLButtonElement;
    if (aiButton) {
      aiButton.click();
    }
  };

  return (
    <section className="py-32 px-4 bg-white dark:bg-gray-950 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-8 px-4 py-2 text-xs font-medium bg-orange-50 border-orange-200 text-orange-700 dark:bg-orange-950/30 dark:border-orange-800/40 dark:text-orange-300"
          >
            <Sparkles className="w-3 h-3 mr-2" />
            IA Consultora
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
            Descubra o sistema
            <br />
            <span className="text-orange-500">ideal para si</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A nossa IA analisa o seu negócio e recomenda a solução perfeita em menos de 3 minutos.
          </p>
        </div>

        {/* Features - Simplified */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Conversa Natural
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Fale connosco como faria com um consultor humano.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Análise Inteligente
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Identificamos oportunidades específicas para o seu setor.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Relatório Completo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Calculamos economia e enviamos análise detalhada.
            </p>
          </div>
        </div>

        {/* CTA - Clean and Minimal */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Comece agora
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
              Análise gratuita em 3 minutos. Disponível 24/7.
            </p>
            
            <Button 
              onClick={scrollToAI}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-semibold rounded-xl group"
            >
              Falar com a IA
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
              Grátis • Em Português • Resultados Imediatos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 