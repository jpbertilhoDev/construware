import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Escritório",
    description: "Porto, Portugal",
    detail: "Rua de Santa Catarina, 4000-447 Porto"
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "+351 220 123 456",
    detail: "Seg-Sex: 9h00-18h00"
  },
  {
    icon: Mail,
    title: "Email",
    description: "hello@construware.pt",
    detail: "Resposta em 24h"
  },
  {
    icon: Clock,
    title: "Horário",
    description: "9h00 - 18h00",
    detail: "Segunda a Sexta-feira"
  }
];

const services = [
  {
    icon: MessageSquare,
    title: "Consultoria Grátis",
    description: "30 minutos de consultoria técnica sem compromisso"
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Primeira resposta em até 2 horas úteis"
  },
  {
    icon: Shield,
    title: "Orçamento Seguro",
    description: "Propostas detalhadas e transparentes"
  },
  {
    icon: Globe,
    title: "Projetos Remotos",
    description: "Trabalhamos com clientes em toda a Europa"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 text-orange-300">
              <MessageSquare className="w-4 h-4 mr-2" />
              Vamos Conversar
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              Transforme a sua{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                ideia
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Conte-nos sobre o seu projeto e descubra como podemos ajudar a criar a solução perfeita para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm p-8">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-3xl font-bold text-white mb-4">
                    Fale Connosco
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg leading-relaxed">
                    Preencha o formulário e receberá uma resposta personalizada num prazo máximo de 24 horas.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Nome *</label>
                      <Input 
                        placeholder="O seu nome"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email *</label>
                      <Input 
                        type="email"
                        placeholder="email@exemplo.com"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500/50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Empresa</label>
                      <Input 
                        placeholder="Nome da empresa"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Orçamento</label>
                      <select 
                        className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white focus:border-orange-500/50 focus:outline-none"
                        aria-label="Orçamento do projeto"
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="5k-15k">€5.000 - €15.000</option>
                        <option value="15k-50k">€15.000 - €50.000</option>
                        <option value="50k+">€50.000+</option>
                        <option value="discussion">A discutir</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Tipo de Projeto</label>
                    <select 
                      className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white focus:border-orange-500/50 focus:outline-none"
                      aria-label="Tipo de projeto"
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      <option value="web">Aplicação Web</option>
                      <option value="mobile">Aplicação Mobile</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="saas">Plataforma SaaS</option>
                      <option value="ai">Integração IA</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Descreva o seu projeto *</label>
                    <Textarea 
                      placeholder="Conte-nos sobre a sua ideia, objetivos e requisitos principais..."
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-orange-500/50 min-h-[120px]"
                    />
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
                  >
                    Enviar Mensagem
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <p className="text-sm text-gray-400 text-center">
                    Ao enviar este formulário, concorda com a nossa política de privacidade.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Informações de Contacto</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Estamos aqui para ajudar. Entre em contacto connosco através de qualquer um dos canais abaixo.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:border-orange-500/30 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center border border-orange-500/20">
                          <info.icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-orange-400 font-medium mb-1">{info.description}</p>
                          <p className="text-sm text-gray-400">{info.detail}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Services */}
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-white mb-6">Porque Escolher a Construware?</h4>
                <div className="grid gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg flex items-center justify-center border border-orange-500/20">
                        <service.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-white mb-1">{service.title}</h5>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Perguntas{" "}
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Tem dúvidas sobre os nossos serviços? Consulte as nossas perguntas mais frequentes ou entre em contacto direto.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-6 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                Ver FAQ Completo
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-12 py-6 rounded-xl text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                Agendar Chamada
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 