import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Code, Smartphone, Globe, Monitor, ArrowRight, CheckCircle, CreditCard, Sparkles, Zap, Rocket, Star, Trophy, Target, Lightbulb, Cpu, Database, Cloud } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ConstructionDashboard from "@/components/dashboards/ConstructionDashboard";
import FinanceDashboard from "@/components/dashboards/FinanceDashboard";
import AcaiDashboard from "@/components/dashboards/AcaiDashboard";

const FloatingOrb = ({ delay = 0, duration = 20, size = 200, color = "orange" }) => {
  const colors = {
    orange: "from-orange-500/10 via-orange-400/5 to-transparent",
    purple: "from-purple-500/10 via-purple-400/5 to-transparent",
    blue: "from-blue-500/10 via-blue-400/5 to-transparent",
    green: "from-green-500/10 via-green-400/5 to-transparent"
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colors[color]} blur-2xl`}
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Secondary Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/[0.03] via-transparent to-purple-500/[0.02]" />
      
      {/* Radial Gradient Spots */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/[0.05] via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/[0.03] via-transparent to-transparent" />

      {/* Large Animated Orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-orange-500/8 via-orange-400/4 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-[40%] right-[10%] w-[350px] h-[350px] bg-gradient-to-br from-purple-500/6 via-blue-400/3 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-gradient-to-br from-green-500/5 via-emerald-400/3 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Orbs - Reduced for performance */}
      {Array.from({ length: 4 }).map((_, i) => (
        <FloatingOrb
          key={i}
          delay={i * 5}
          duration={25 + i * 5}
          size={180 + i * 30}
          color={["orange", "purple", "blue", "green"][i]}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise" />
    </div>
  );
};

const TechIcon = ({ Icon, color, delay = 0 }) => {
  return (
    <motion.div
      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} border border-white/10 flex items-center justify-center backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.div>
  );
};

const StatsCard = ({ number, label, icon: Icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number.replace(/[^\d]/g, ''));

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = targetNumber / 50;
      const counter = setInterval(() => {
        setCount(prev => {
          if (prev >= targetNumber) {
            clearInterval(counter);
            return targetNumber;
          }
          return Math.min(prev + increment, targetNumber);
        });
      }, 30);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [targetNumber, delay]);

  return (
    <motion.div
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 flex items-center justify-center">
        <Icon className="w-8 h-8 text-orange-400" />
      </div>
      
      <motion.div
        className="text-3xl font-black text-white mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
      >
        {Math.round(count)}{number.replace(/\d/g, '')}
      </motion.div>
      
      <div className="text-white/70 font-medium">{label}</div>
    </motion.div>
  );
};

const timelineData = [
  {
    title: "Sistema de Construção",
    content: (
      <motion.div 
        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 backdrop-blur-sm relative overflow-hidden group"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div 
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Code className="w-5 h-5 text-orange-400" />
          </motion.div>
          <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-2 py-1 rounded-lg font-bold text-xs">
            Construção
          </Badge>
        </motion.div>

        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sistema de Gestão de Construção Completo
        </motion.h3>
        
        <motion.p 
          className="text-white/70 text-sm md:text-base mb-4 sm:mb-6 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Transformámos completamente a gestão da ConstrutoraTech com um sistema que controla tudo: 
          desde o planeamento de obras até ao controlo de materiais. Os engenheiros agora têm 
          acesso instantâneo ao progresso de todos os projetos.
        </motion.p>

        <motion.div 
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg sm:rounded-xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ring-1 ring-orange-500/20 hover:ring-orange-500/40 transition-all duration-500">
            <ConstructionDashboard />
          </div>
          <motion.p 
            className="text-center text-xs text-white/60 mt-2 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            ✨ Dashboard interativo em tempo real - Clique e explore!
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            "35% redução nos prazos de obra",
            "90% satisfação dos engenheiros", 
            "Zero desperdício de materiais"
          ].map((text, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2 text-white/80 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-white/80">CT</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm">ConstrutoraTech</div>
              <div className="text-white/60 text-xs">Construção • 10 meses</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5 text-xs px-3 py-2 hover:scale-105 transition-all">
            Ver Detalhes <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </motion.div>
      </motion.div>
    ),
  },
  {
    title: "Sistema Financeiro",
    content: (
      <motion.div 
        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 backdrop-blur-sm relative overflow-hidden group"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div 
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <CreditCard className="w-5 h-5 text-purple-400" />
          </motion.div>
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-2 py-1 rounded-lg font-bold text-xs">
            FinTech
          </Badge>
        </motion.div>

        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sistema Financeiro Completo e Inteligente
        </motion.h3>
        
        <motion.p 
          className="text-white/70 text-sm md:text-base mb-4 sm:mb-6 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Desenvolvemos uma plataforma financeira revolucionária para a FinanceHub que automatiza 
          toda a gestão contabilística e financeira. O sistema processa milhares de transações 
          por dia e gera relatórios financeiros automáticos.
        </motion.p>

        <motion.div 
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg sm:rounded-xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ring-1 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-500">
            <FinanceDashboard />
          </div>
          <motion.p 
            className="text-center text-xs text-white/60 mt-2 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            💰 Sistema financeiro completo - Dados em tempo real!
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            "80% redução no tempo de processamento",
            "99.9% de precisão nos cálculos",
            "Relatórios automáticos em tempo real"
          ].map((text, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2 text-white/80 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-white/80">FH</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm">FinanceHub</div>
              <div className="text-white/60 text-xs">FinTech • 8 meses</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5 text-xs px-3 py-2 hover:scale-105 transition-all">
            Ver Detalhes <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </motion.div>
      </motion.div>
    ),
  },
  {
    title: "Sistema Web Açaí",
    content: (
      <motion.div 
        className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 backdrop-blur-sm relative overflow-hidden group"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div 
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Smartphone className="w-5 h-5 text-green-400" />
          </motion.div>
          <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-2 py-1 rounded-lg font-bold text-xs">
            Food Tech
          </Badge>
        </motion.div>

        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Plataforma Web Açaí com Delivery Inteligente
        </motion.h3>
        
        <motion.p 
          className="text-white/70 text-sm md:text-base mb-4 sm:mb-6 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Criámos uma plataforma web completa para a AçaíBerry que revolucionou o negócio de açaí. 
          O sistema gere pedidos online, controla stock em tempo real e otimiza as rotas de entrega 
          com inteligência artificial.
        </motion.p>

        <motion.div 
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg sm:rounded-xl overflow-hidden h-64 sm:h-80 md:h-96 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ring-1 ring-green-500/20 hover:ring-green-500/40 transition-all duration-500">
            <AcaiDashboard />
          </div>
          <motion.p 
            className="text-center text-xs text-white/60 mt-2 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            🍇 Plataforma de delivery completa - Sistema ao vivo!
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            "250% aumento nas vendas online",
            "30% entregas mais rápidas",
            "4.9 estrelas de satisfação"
          ].map((text, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2 text-white/80 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-white/80">AB</span>
            </div>
            <div>
              <div className="font-bold text-white text-sm">AçaíBerry</div>
              <div className="text-white/60 text-xs">Food Tech • 6 meses</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/5 text-xs px-3 py-2 hover:scale-105 transition-all">
            Ver Detalhes <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </motion.div>
      </motion.div>
    ),
  },
];
  
export default function Projects() {
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
      <AnimatedBackground />
      
      {/* Hero Section with 3D Effects */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.02em] mb-6 sm:mb-8 leading-[0.85] text-white px-2 sm:px-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              Histórias de{" "}
              <motion.span 
                className="bg-gradient-to-r from-orange-300 via-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
              >
                sucesso
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl text-white/60 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              Navegue pelos nossos projetos mais impactantes. Cada um representa uma empresa 
              que transformámos e fez crescer com tecnologia.
            </motion.p>

            {/* Tech Icons Floating */}
            <motion.div 
              className="flex justify-center gap-4 mt-12 flex-wrap"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <TechIcon Icon={Code} color="from-orange-500/20 to-orange-600/20" delay={0} />
              <TechIcon Icon={Database} color="from-blue-500/20 to-blue-600/20" delay={0.1} />
              <TechIcon Icon={Cloud} color="from-purple-500/20 to-purple-600/20" delay={0.2} />
              <TechIcon Icon={Cpu} color="from-green-500/20 to-green-600/20" delay={0.3} />
              <TechIcon Icon={Smartphone} color="from-pink-500/20 to-pink-600/20" delay={0.4} />
            </motion.div>
          </motion.div>

          {/* Stats Section - Simplified */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <StatsCard number="50+" label="Projetos Entregues" icon={Trophy} delay={0} />
            <StatsCard number="98%" label="Satisfação Cliente" icon={Star} delay={0.2} />
            <StatsCard number="24/7" label="Suporte Técnico" icon={Target} delay={0.4} />
            <StatsCard number="100%" label="Sucesso Rate" icon={Lightbulb} delay={0.6} />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Timeline data={timelineData} />
      </motion.div>
      
             {/* Enhanced CTA Section */}
       <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent"></div>
         
         {/* Elegant Floating Elements */}
         <motion.div 
           className="absolute top-[20%] left-[10%] w-[200px] sm:w-[350px] h-[150px] sm:h-[250px] bg-gradient-to-br from-orange-500/8 to-orange-400/4 rounded-full blur-3xl"
           animate={{
             scale: [1, 1.1, 1],
             x: [0, 25, 0],
             y: [0, -15, 0],
           }}
           transition={{
             duration: 18,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         />
         
         <motion.div 
           className="absolute bottom-[20%] right-[10%] w-[150px] sm:w-[280px] h-[100px] sm:h-[180px] bg-gradient-to-br from-purple-500/6 to-blue-400/3 rounded-full blur-3xl"
           animate={{
             scale: [1, 1.15, 1],
             x: [0, -20, 0],
             y: [0, 10, 0],
           }}
           transition={{
             duration: 22,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
                         <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 flex items-center justify-center backdrop-blur-sm">
               <Code className="w-8 h-8 text-orange-400" />
             </div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A sua empresa pode ser
              <br />
              <motion.span 
                className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"
              >
                a próxima história
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transforme a sua ideia numa solução digital que faz a diferença. 
              Estamos prontos para criar algo incrível consigo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-10 py-4 sm:py-5 h-auto rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold shadow-lg shadow-orange-500/25 w-full sm:w-auto relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Começar o Meu Projeto
                    <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white/80 hover:bg-white/[0.05] hover:border-white/30 px-6 sm:px-10 py-4 sm:py-5 h-auto rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-bold w-full sm:w-auto backdrop-blur-sm"
                  onClick={() => window.open('https://wa.me/351963901570?text=Olá! Vi os vossos projetos no site e gostaria de desenvolver uma solução digital para a minha empresa.', '_blank')}
                >
                  Falar Connosco
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
