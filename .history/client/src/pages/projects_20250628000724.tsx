import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, ExternalLink, Code, Smartphone, Globe, Monitor } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";

// Categorias para filtro
const categories = [
  "Todos",
  "Sistema Web",
  "App Mobile",
  "Sistema Desktop",
  "Website"
];

const categoryIcons = {
  "Sistema Web": Code,
  "App Mobile": Smartphone,
  "Sistema Desktop": Monitor,
  "Website": Globe
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carregamento e filtrar projetos
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const filtered = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             project.client.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      });
      
      setVisibleProjects(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  // Formatar data
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="min-h-screen bg-black/95">
      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-12 sm:pb-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-orange-500/[0.03] via-transparent to-orange-500/[0.03] blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-semibold text-white/60 mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
              Portfólio de Projetos
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-white">Sistemas que</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                transformam negócios
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
              Conheça alguns dos projetos desenvolvidos pela nossa equipe 
              e como ajudamos empresas a digitalizar seus processos.
            </p>
          </motion.div>
          
          {/* Filtros e busca */}
          <motion.div 
            className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
              <Input 
                type="text"
                placeholder="Buscar projetos, tecnologias ou clientes..."
                className="pl-10 bg-white/[0.03] backdrop-blur-sm border-white/10 w-full h-12 text-base text-white placeholder:text-white/40"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-auto">
              <Tabs defaultValue="Todos" className="w-full">
                <TabsList className="bg-white/[0.03] backdrop-blur-sm border border-white/10 p-1.5 w-full sm:w-auto h-12 overflow-x-auto flex-nowrap gap-1">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setSelectedCategory(category)}
                      className="data-[state=active]:bg-orange-500 data-[state=active]:text-white px-4 py-2 h-9 text-white/60 hover:text-white"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured project */}
      {visibleProjects.find(project => project.featured) && !isLoading && (
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-0.5 bg-orange-500/30 mr-4"></div>
              <h2 className="text-2xl font-bold text-white">Projeto em Destaque</h2>
            </motion.div>
            
            {visibleProjects.filter(project => project.featured).slice(0, 1).map(project => {
              const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Code;
              
              return (
                <motion.div 
                  key={project.id} 
                  className="group relative overflow-hidden rounded-2xl bg-white/[0.01] backdrop-blur-sm border border-white/[0.05] hover:border-white/10 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-[45%] h-72 sm:h-80 lg:h-auto overflow-hidden">
                      <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-orange-400" />
                        </div>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-white/40">
                          {project.client.sector}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-lg text-white/70 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/[0.05] rounded-lg text-sm text-white/60">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-white/[0.05] rounded-lg text-sm text-white/40">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-white/60 text-sm">
                            <span className="font-semibold text-white">{project.client.name}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(project.completionDate)}
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost"
                          asChild
                          className="text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 group"
                        >
                          <Link href={`/projects/${project.id}`}>
                            Ver detalhes
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Projects grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-0.5 bg-orange-500/30 mr-4 hidden sm:block"></div>
              <h2 className="text-3xl font-bold text-white">
                {searchTerm || selectedCategory !== "Todos" 
                  ? "Resultados da Busca" 
                  : "Todos os Projetos"}
              </h2>
            </motion.div>
            
            {(searchTerm || selectedCategory !== "Todos") && (
              <div className="text-sm text-white/40">
                {visibleProjects.length} {visibleProjects.length === 1 ? 'projeto' : 'projetos'} encontrados
              </div>
            )}
          </div>
          
          {isLoading ? (
            // Esqueletos de carregamento
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="rounded-2xl bg-white/[0.02] overflow-hidden animate-pulse">
                  <div className="h-48 bg-white/[0.05]"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-white/[0.05] rounded w-1/3"></div>
                    <div className="h-6 bg-white/[0.05] rounded w-5/6"></div>
                    <div className="h-4 bg-white/[0.05] rounded w-full"></div>
                    <div className="h-4 bg-white/[0.05] rounded w-4/6"></div>
                    <div className="flex justify-between pt-4">
                      <div className="h-8 bg-white/[0.05] rounded-full w-24"></div>
                      <div className="h-8 bg-white/[0.05] rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : visibleProjects.filter(project => !project.featured).length === 0 ? (
            // Sem resultados
            <motion.div 
              className="text-center py-16 px-4 bg-white/[0.01] rounded-2xl border border-white/[0.05]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/[0.05] mb-6">
                <Search className="h-6 w-6 text-white/40" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Nenhum projeto encontrado</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                Não encontramos projetos que correspondam aos seus critérios de busca. 
                Tente outros termos ou categorias.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                }}
                className="border-white/20 text-white/80 hover:bg-white/[0.03]"
              >
                Limpar filtros
              </Button>
            </motion.div>
          ) : (
            // Grid de projetos
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects
                .filter(project => !project.featured)
                .map((project, index) => {
                  const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Code;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link 
                        href={`/projects/${project.id}`}
                        className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.01] backdrop-blur-sm border border-white/[0.05] hover:border-white/10 transition-all duration-300 hover:-translate-y-2 h-full"
                      >
                        <div className="h-52 overflow-hidden relative">
                          <img 
                            src={project.coverImage} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg">
                              <IconComponent className="w-4 h-4 text-orange-400" />
                              <span className="text-white text-xs font-medium">{project.category}</span>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md text-white/70 hover:text-white">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs text-orange-400 font-semibold">{project.client.sector}</span>
                            <span className="text-xs text-white/40">•</span>
                            <span className="text-xs text-white/60">{project.duration}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors text-white">
                            {project.title}
                          </h3>
                          <p className="text-white/60 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-white/[0.05] rounded text-xs text-white/50">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-white/[0.05] rounded text-xs text-white/40">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                          
                          <div className="mt-auto flex items-center justify-between">
                            <div className="text-xs text-white/60">
                              <div className="font-medium text-white/80">{project.client.name}</div>
                              <div className="flex items-center mt-1">
                                <Calendar className="h-3 w-3 mr-1" />
                                {formatDate(project.completionDate)}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-500/[0.02] to-black"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-8">
              <Code className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Pronto para o próximo projeto?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Transforme sua ideia em um sistema robusto e eficiente. 
              Nossa equipe está pronta para desenvolver a solução ideal para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 h-auto rounded-xl text-lg font-semibold"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white/80 hover:bg-white/[0.03] px-8 py-4 h-auto rounded-xl text-lg"
              >
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 