import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Code, Smartphone, Globe, Monitor, ArrowRight, CheckCircle, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Sistema de Construção",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            <Code className="w-6 h-6 text-orange-400" />
          </div>
          <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-3 py-1 rounded-lg font-bold">
            Construção
          </Badge>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 leading-tight">
          Sistema de Gestão de Construção Completo
        </h3>
        
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed font-medium">
          Transformámos completamente a gestão da ConstrutoraTech com um sistema que controla tudo: 
          desde o planeamento de obras até ao controlo de materiais. Os engenheiros agora têm 
          acesso instantâneo ao progresso de todos os projetos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1631&auto=format&fit=crop"
            alt="Sistema de Construção - Vista Geral"
            className="rounded-xl sm:rounded-2xl object-cover h-36 sm:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="/constru-dash.png"
            alt="Sistema de Construção - Dashboard"
            className="rounded-xl sm:rounded-2xl object-cover h-36 sm:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">35% redução nos prazos de obra</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">90% satisfação dos engenheiros</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">Zero desperdício de materiais</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold text-white/80">CT</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">ConstrutoraTech</div>
              <div className="text-white/60 text-xs sm:text-sm">Construção • 10 meses</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5 text-xs sm:text-sm px-3 sm:px-4 py-2">
            Ver Detalhes <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
          </Button>
        </div>
      </div>
    ),
  },
  {
    title: "Sistema Financeiro",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-purple-400" />
          </div>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1 rounded-lg font-bold">
            FinTech
          </Badge>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 leading-tight">
          Sistema Financeiro Completo e Inteligente
        </h3>
        
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed font-medium">
          Desenvolvemos uma plataforma financeira revolucionária para a FinanceHub que automatiza 
          toda a gestão contabilística e financeira. O sistema processa milhares de transações 
          por dia e gera relatórios financeiros automáticos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <img
            src="/finance-dash.png"
            alt="Sistema Financeiro - Dashboard"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Financeiro - Relatórios"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Financeiro - Análise"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
            alt="Sistema Financeiro - Controlos"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">70% redução no tempo de processamento</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">Relatórios automáticos em tempo real</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">ROI de 380% no primeiro ano</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">FH</span>
            </div>
            <div>
              <div className="font-bold text-white">FinanceHub</div>
              <div className="text-white/60 text-sm">FinTech • 8 meses</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5">
            Ver Detalhes <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    ),
  },
  {
    title: "Sistema Web Açaí",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-green-400" />
          </div>
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-3 py-1 rounded-lg font-bold">
            Food Tech
          </Badge>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 leading-tight">
          Plataforma Web Açaí com Delivery Inteligente
        </h3>
        
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed font-medium">
          Criámos uma plataforma web completa para a AçaíBerry que revolucionou o negócio de açaí. 
          O sistema gere pedidos online, controla stock em tempo real e otimiza as rotas de entrega 
          com inteligência artificial.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <img
            src="/acai-dash.png"
            alt="Sistema Web Açaí - Dashboard"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Web Açaí - Pedidos"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Web Açaí - Pagamentos"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Web Açaí - Avaliações"
            className="rounded-xl sm:rounded-2xl object-cover h-24 sm:h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">250% aumento nas vendas online</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">30% entregas mais rápidas</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">4.9 estrelas de satisfação</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">AB</span>
            </div>
            <div>
              <div className="font-bold text-white">AçaíBerry</div>
              <div className="text-white/60 text-sm">Food Tech • 6 meses</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5">
            Ver Detalhes <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    ),
  },
];
  
export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.02em] mb-6 sm:mb-8 leading-[0.85] text-white px-2 sm:px-0">
              Histórias de{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                sucesso
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
              Navegue pelos nossos projetos mais impactantes. Cada um representa uma empresa 
              que transformámos e fez crescer com tecnologia.
            </p>
          </motion.div>
        </div>
      </section>
      <Timeline data={timelineData} />
      
      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.015] to-transparent"></div>
        <div className="absolute top-[20%] left-[10%] w-[200px] sm:w-[400px] h-[150px] sm:h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[150px] sm:w-[300px] h-[100px] sm:h-[200px] bg-orange-400/[0.015] rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Code className="w-8 h-8 text-orange-400" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              A sua empresa pode ser
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                a próxima história
              </span>
            </h2>
            
            <p className="text-base sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0">
              Transforme a sua ideia numa solução digital que faz a diferença. 
              Estamos prontos para criar algo incrível consigo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-4 sm:py-5 h-auto rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold hover:scale-105 transition-all w-full sm:w-auto"
              >
                Começar o Meu Projeto
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white/80 hover:bg-white/[0.05] hover:border-white/30 px-6 sm:px-10 py-4 sm:py-5 h-auto rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/351963901570?text=Olá! Vi os vossos projetos no site e gostaria de desenvolver uma solução digital para a minha empresa.', '_blank')}
              >
                Falar Connosco
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
