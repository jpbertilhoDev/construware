import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users, Code, Smartphone, Globe, Monitor, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const categoryIcons = {
  "Sistema Web": Code,
  "App Mobile": Smartphone,
  "Sistema Desktop": Monitor,
  "Website": Globe
};

const timelineData = [
  {
    title: "Sistema Hospitalar",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Code className="w-6 h-6 text-blue-400" />
          </div>
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 rounded-lg font-bold">
            Sistema Web
          </Badge>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
          Sistema de Gestão Hospitalar Completo
        </h3>
        
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
          Transformámos completamente a gestão do Hospital São Lucas com um sistema que controla tudo: 
          desde o agendamento de consultas até ao controlo de medicamentos. Os médicos agora têm 
          acesso instantâneo ao histórico dos pacientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1631&auto=format&fit=crop"
            alt="Sistema Hospitalar - Dashboard"
            className="rounded-2xl object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Hospitalar - Interface"
            className="rounded-2xl object-cover h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">40% menos tempo de atendimento</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">95% satisfação dos médicos</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">Zero papéis nos processos</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">HS</span>
            </div>
            <div>
              <div className="font-bold text-white">Hospital São Lucas</div>
              <div className="text-white/60 text-sm">Saúde • 8 meses</div>
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
    title: "E-commerce Global",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Globe className="w-6 h-6 text-purple-400" />
          </div>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1 rounded-lg font-bold">
            E-commerce
          </Badge>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
          Loja Online que Vende em 8 Países
        </h3>
        
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
          Criámos uma loja online super avançada para a FashionTech Europe que funciona em 12 idiomas 
          diferentes e aceita pagamentos de todo o mundo. Agora eles vendem para milhares de clientes 
          em 8 países europeus.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop"
            alt="E-commerce - Homepage"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop"
            alt="E-commerce - Produtos"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop"
            alt="E-commerce - Checkout"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
            alt="E-commerce - Dashboard"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">300% mais vendas online</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">Expansão para 8 países</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">ROI de 450% no primeiro ano</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">FT</span>
            </div>
            <div>
              <div className="font-bold text-white">FashionTech Europe</div>
              <div className="text-white/60 text-sm">E-commerce • 6 meses</div>
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
    title: "App de Delivery",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-green-400" />
          </div>
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-3 py-1 rounded-lg font-bold">
            App Mobile
          </Badge>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
          App que Entrega Comida Super Rápido
        </h3>
        
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
          Desenvolvemos uma app incrível para a QuickFood que usa inteligência artificial para 
          encontrar sempre o caminho mais rápido. Os clientes conseguem acompanhar a entrega 
          em tempo real e a comida chega 25% mais rápido.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1481&auto=format&fit=crop"
            alt="App Delivery - Interface"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
            alt="App Delivery - Rastreamento"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop"
            alt="App Delivery - Pagamento"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1470&auto=format&fit=crop"
            alt="App Delivery - Avaliações"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">25% entregas mais rápidas</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">4.8 estrelas na App Store</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">200% mais pedidos por dia</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">QF</span>
            </div>
            <div>
              <div className="font-bold text-white">QuickFood Portugal</div>
              <div className="text-white/60 text-sm">Food Tech • 5 meses</div>
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
    title: "Sistema Industrial",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
            <Monitor className="w-6 h-6 text-orange-400" />
          </div>
          <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-3 py-1 rounded-lg font-bold">
            Sistema Desktop
          </Badge>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
          Sistema que Controla Toda a Fábrica
        </h3>
        
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
          Criámos um sistema super completo para a Metalúrgica Aveiro que controla tudo na fábrica: 
          desde o planeamento da produção até às vendas e finanças. Agora eles produzem 30% mais 
          com menos erros.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Industrial - Dashboard"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Industrial - Produção"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Industrial - Relatórios"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop"
            alt="Sistema Industrial - Interface"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">30% mais produção</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">50% menos erros no stock</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">ROI de 280% em 18 meses</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">MA</span>
            </div>
            <div>
              <div className="font-bold text-white">Metalúrgica Aveiro</div>
              <div className="text-white/60 text-sm">Indústria • 10 meses</div>
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
    title: "Plataforma de Ensino",
    content: (
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-indigo-400" />
          </div>
          <Badge className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 px-3 py-1 rounded-lg font-bold">
            Educação Online
          </Badge>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
          Escola Online que os Alunos Adoram
        </h3>
        
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
          Desenvolvemos uma plataforma de ensino super divertida para o Colégio Futuro Digital. 
          Os alunos podem ter aulas por vídeo, jogar jogos educativos e acompanhar o seu progresso. 
          As notas melhoraram 40%!
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
            alt="Plataforma Ensino - Aulas Online"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
            alt="Plataforma Ensino - Dashboard"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
            alt="Plataforma Ensino - Biblioteca"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1493&auto=format&fit=crop"
            alt="Plataforma Ensino - Gamificação"
            className="rounded-2xl object-cover h-32 md:h-44 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">85% mais participação dos alunos</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">40% melhoria nas notas</span>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="font-medium">Usado por 15+ escolas</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white/80">CF</span>
            </div>
            <div>
              <div className="font-bold text-white">Colégio Futuro Digital</div>
              <div className="text-white/60 text-sm">Educação • 7 meses</div>
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
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.008]"></div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[200px] bg-orange-400/[0.015] rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.10] text-sm md:text-base font-bold text-white/60 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Portfólio Interativo
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.02em] mb-8 leading-[0.85] text-white">
              Histórias de{" "}
              <span 
                className="bg-gradient-to-r from-orange-300 via-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.6)) drop-shadow(0 0 16px rgba(251, 146, 60, 0.4))'
                }}
              >
                sucesso
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto font-medium leading-relaxed">
              Navegue pelos nossos projetos mais impactantes. Cada um representa uma empresa 
              que transformámos e fez crescer com tecnologia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline data={timelineData} />

      {/* CTA Section */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.015] to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              A sua empresa pode ser
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                a próxima história
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Transforme a sua ideia numa solução digital que faz a diferença. 
              Estamos prontos para criar algo incrível consigo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 h-auto rounded-2xl text-lg md:text-xl font-bold hover:scale-105 transition-all"
              >
                Começar o Meu Projeto
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white/80 hover:bg-white/[0.05] hover:border-white/30 px-10 py-5 h-auto rounded-2xl text-lg md:text-xl font-bold"
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