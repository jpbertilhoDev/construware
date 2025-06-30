import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Logo } from "@/components/ui/logo";
import { Moon, Sun } from "lucide-react";

const navigationItems = [
  { href: "/about", label: "Sobre Nós" },
  { href: "/features", label: "Porquê Escolher" },
  { href: "/pricing", label: "Serviços" },
  { href: "/enterprise", label: "Empresas" },
  { href: "/projects", label: "Projectos" },
  { href: "/contact", label: "Contacto" },
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
            <Logo size="md" showTagline={true} />
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

            <Link href="/admin/login">
            <Button 
              variant="ghost" 
              className="hidden lg:inline-flex text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
            >
                Entrar
            </Button>
            </Link>

            <Button className="rounded-lg sm:rounded-xl px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105">
              Demonstração
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
