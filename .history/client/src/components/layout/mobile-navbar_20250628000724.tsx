import { Link, useLocation } from "wouter";
import { Home, LayoutGrid, CreditCard, Building, UserCircle, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";

export function MobileNavbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/features", label: "Recursos", icon: LayoutGrid },
    { href: "/pricing", label: "Preços", icon: CreditCard },
    { href: "/enterprise", label: "Enterprise", icon: Building },
    { href: "/projects", label: "Projetos", icon: FolderOpen }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/90 border-t border-white/10" style={{backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex flex-col items-center justify-center py-2 px-1 w-full"
            >
              <div className="relative">
                <Icon 
                  className={`w-6 h-6 ${isActive ? 'text-orange-500' : 'text-white/70'}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
              <span className={`text-[10px] mt-1 ${isActive ? 'text-orange-500 font-medium' : 'text-white/70'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      
      {/* Adicionar estilo para o efeito de brilho */}
      <style jsx global>{`
        .shadow-glow {
          box-shadow: 0 0 6px 1px rgba(255, 107, 53, 0.7);
        }
      `}</style>
    </div>
  );
} 