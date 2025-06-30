import { Link, useLocation } from "wouter";
import { Home, Star, DollarSign, Building, Briefcase, Mail, User } from "lucide-react";

const navigationItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/about", label: "Sobre", icon: User },
  { href: "/features", label: "Porquê", icon: Star },
  { href: "/pricing", label: "Serviços", icon: DollarSign },
  { href: "/enterprise", label: "Empresas", icon: Building },
  { href: "/projects", label: "Projectos", icon: Briefcase },
  { href: "/contact", label: "Contacto", icon: Mail },
];

export function MobileNavbar() {
  const [location] = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/10">
      <div className="flex items-center justify-around py-2">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 transition-all duration-300 ${
                isActive
                  ? "text-orange-400"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              <IconComponent className={`w-5 h-5 mb-1 transition-all duration-300 ${
                isActive ? "scale-110" : ""
              }`} />
              <span className="text-xs font-medium truncate">
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
