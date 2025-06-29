import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Logo } from "@/components/ui/logo";
import { Moon, Sun } from "lucide-react";

const navigationItems = [
  { href: "/features", label: "Por que Escolher" },
  { href: "/pricing", label: "Preços" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-12">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Custom Logo Icon */}
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-110">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm"></div>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg opacity-20 blur-sm group-hover:opacity-40 transition-all duration-300"></div>
              </div>
              
              {/* Brand Name */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-orange-100 group-hover:to-white transition-all duration-300">
                  Construware
                </span>
                <span className="text-xs text-orange-400 font-medium opacity-80 -mt-1">
                  BUILD SMART
                </span>
              </div>
            </Link>
            <div className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-white relative group ${
                    location === item.href
                      ? "text-white"
                      : "text-white/70"
                  }`}
                >
                  {item.label}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 ${
                    location === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden lg:inline-flex text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button 
              variant="ghost" 
              className="hidden lg:inline-flex text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
            >
              Login
            </Button>

            <Button className="rounded-lg sm:rounded-xl px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105">
              Demonstração
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}