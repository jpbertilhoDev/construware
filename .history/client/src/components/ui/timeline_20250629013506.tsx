"use client";
import {
  motion,
} from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number>(0);

  // Get current color based on progress
  const getCurrentColor = () => {
    const progress = visibleItems / data.length;
    
    // Always start with orange, even if no items visible yet
    if (visibleItems === 0 || progress <= 0.33) {
      return {
        gradient: 'bg-gradient-to-b from-orange-500 via-orange-400 to-yellow-400',
        shadow: 'shadow-[0_0_8px_rgba(251,146,60,0.5)]'
      };
    } else if (progress <= 0.66) {
      return {
        gradient: 'bg-gradient-to-b from-purple-500 via-purple-400 to-pink-400',
        shadow: 'shadow-[0_0_8px_rgba(168,85,247,0.5)]'
      };
    } else {
      return {
        gradient: 'bg-gradient-to-b from-green-500 via-green-400 to-emerald-400',
        shadow: 'shadow-[0_0_8px_rgba(34,197,94,0.5)]'
      };
    }
  };

  // Get dot colors for each project
  const getDotColors = (index: number) => {
    if (index === 0) {
      // Construction - Orange
      return {
        border: 'border-orange-500/30',
        bg: 'bg-gradient-to-r from-orange-400 to-orange-500',
        innerBorder: 'border-orange-300'
      };
    } else if (index === 1) {
      // Finance - Purple  
      return {
        border: 'border-purple-500/30',
        bg: 'bg-gradient-to-r from-purple-400 to-purple-500',
        innerBorder: 'border-purple-300'
      };
    } else {
      // Açaí - Green
      return {
        border: 'border-green-500/30',
        bg: 'bg-gradient-to-r from-green-400 to-green-500',
        innerBorder: 'border-green-300'
      };
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => Math.max(prev, index + 1));
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = containerRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full bg-black font-sans px-4 sm:px-6 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 text-white max-w-4xl leading-tight px-2 sm:px-0">
          Projetos que{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            transformam
          </span>
        </h2>
        <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-medium px-2 sm:px-0">
          Cada projeto é uma história de sucesso. Veja como ajudámos empresas a crescer e inovar com as nossas soluções digitais.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className="flex justify-start pt-8 sm:pt-12 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-8 sm:h-10 absolute left-2 sm:left-3 md:left-3 w-8 sm:w-10 rounded-full bg-black border-2 ${getDotColors(index).border} flex items-center justify-center backdrop-blur-sm`}>
                <div className={`h-3 sm:h-4 w-3 sm:w-4 rounded-full ${getDotColors(index).bg} border ${getDotColors(index).innerBorder}`} />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-black text-white/90">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 sm:pl-20 pr-2 sm:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-black text-white/90">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Complete timeline line - always visible as guide */}
        <div className="absolute left-6 sm:left-8 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent from-[0%] via-white/10 via-[10%] to-white/10 to-[90%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />
        
        {/* Animated progress line with color transitions */}
        <div className="absolute left-6 sm:left-8 md:left-8 top-0 overflow-hidden w-[2px]">
          <motion.div
            className={`absolute inset-x-0 top-0 w-[2px] rounded-full ${getCurrentColor().gradient} ${getCurrentColor().shadow}`}
            initial={{ height: "10%" }}
            animate={{ height: `${Math.max(10, (visibleItems / data.length) * 100)}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;