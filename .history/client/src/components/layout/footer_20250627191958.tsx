import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const footerSections = [
  {
    title: "Produto",
    links: [
      { href: "/pricing", label: "Preços" },
      { href: "/features", label: "Funcionalidades" },
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
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <motion.div 
          className="py-16 border-b border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fique por dentro das{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                inovações
              </span>
            </h3>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Receba insights sobre desenvolvimento de software, tendências tecnológicas 
              e dicas para otimizar seus projetos digitais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-medium group">
                Subscrever
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="text-2xl font-black text-white">
                  <span className="gradient-text">Spark</span>
                  <span className="text-orange-400">Dev</span>
                </div>
              </div>
              <p className="text-white/60 mb-6 leading-relaxed">
                Transformamos ideias em soluções digitais inovadoras. 
                Especializados em desenvolvimento de software personalizado 
                para empresas de todos os tamanhos.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white/60 hover:text-orange-400 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white/60 hover:text-orange-400 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500/20 rounded-lg flex items-center justify-center text-white/60 hover:text-orange-400 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Soluções</h4>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento Web",
                  "Aplicações Mobile",
                  "Sistemas Enterprise", 
                  "E-commerce",
                  "Aplicações Cloud",
                  "APIs & Integrações",
                  "Consultoria Técnica"
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Setores</h4>
              <ul className="space-y-3">
                {[
                  "Fintech & Banking",
                  "E-commerce & Retail",
                  "Saúde & Telemedicina",
                  "Educação & EdTech",
                  "Logística & Supply Chain",
                  "AgriTech & IoT",
                  "Startups & Scale-ups"
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-white/60 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                  <a 
                    href="mailto:hello@construware.pt" 
                    className="text-white/60 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                                          hello@construware.pt
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                  <a 
                    href="tel:+351912345678" 
                    className="text-white/60 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    +351 91 234 5678
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">
                    Porto, Portugal<br />
                    Disponível remotamente
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs mb-2">Horário de funcionamento:</p>
                <p className="text-white/60 text-sm">
                  Segunda - Sexta: 9h00 - 18h00<br />
                  Resposta em 24h garantida
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="py-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © 2024 Construware. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/40 hover:text-orange-400 transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/40 hover:text-orange-400 transition-colors duration-300">
              Termos de Serviço
            </a>
            <a href="#" className="text-white/40 hover:text-orange-400 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
