import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const footerSections = [
  {
    title: "Produto",
    links: [
      { href: "/pricing", label: "Preços" },
      { href: "/features", label: "Por que Escolher" },
      { href: "/enterprise", label: "Enterprise" },
      { href: "#", label: "Downloads" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "#", label: "Documentação" },
      { href: "#", label: "Changelog" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#", label: "Sobre" },
      { href: "#", label: "Carreiras" },
      { href: "#", label: "Comunidade" },
      { href: "#", label: "Parceiros" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Termos" },
      { href: "#", label: "Privacidade" },
      { href: "#", label: "Segurança" },
      { href: "#", label: "Conformidade" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Brand section */}
          <div className="col-span-2 lg:col-span-2">
            <Logo size="sm" showTagline={true} className="mb-4 sm:mb-6" />
            
            <div className="flex items-start space-x-2 mb-4 sm:mb-6">
              <span className="text-gray-400 text-xs sm:text-sm">contato@construware.com</span>
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mt-0.5" />
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections - em dispositivos pequenos, mostrar apenas duas colunas */}
          {footerSections.map((section, index) => (
            <div key={section.title} className={`${index > 1 ? 'hidden sm:block' : ''} col-span-1 lg:col-span-1`}>
              <h4 className="text-white font-medium mb-3 sm:mb-4 text-xs sm:text-sm">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={`${section.title}-${linkIndex}`}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-4 sm:pt-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2024 Feito por Construware
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs sm:text-sm">SOC 2 Certificado</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6">
              <select 
                className="bg-transparent border border-gray-700/50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-400 focus:outline-none focus:border-gray-600 hover:border-gray-600 transition-colors"
                aria-label="Selecionar idioma"
              >
                <option value="pt-BR">🇧🇷 Português</option>
                <option value="en-US">🇺🇸 English</option>
              </select>
              
              <div className="hidden sm:flex items-center space-x-1 bg-gray-800/30 rounded-lg p-1">
                <button className="w-7 h-7 bg-gray-700/50 rounded-md flex items-center justify-center hover:bg-gray-600/50 transition-colors">
                  <span className="text-xs">☀️</span>
                </button>
                <button className="w-7 h-7 bg-white/90 rounded-md flex items-center justify-center hover:bg-white transition-colors">
                  <span className="text-xs text-gray-800">🌙</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
