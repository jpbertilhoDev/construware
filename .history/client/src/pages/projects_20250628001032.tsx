import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, ArrowRight, ExternalLink, Code, Smartphone, Globe, Monitor, Star, Building } from "lucide-react";
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
    }, 200);
    
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-24 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.008]"></div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[200px] bg-orange-400/[0.015] rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-xs font-medium text-white/50 mb-8 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Portfólio
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] mb-8 leading-[0.9]">
              <span className="text-white/90">Projetos que</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                revolucionam
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed">
              Soluções digitais que transformam a forma como nossos clientes 
              <br className="hidden sm:block" />
              operam e crescem no mercado.
            </p>
          </motion.div>
          
          {/* Search and Filter */}
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input 
                  type="text"
                  placeholder="Buscar projetos..."
                  className="pl-12 h-14 bg-white/[0.02] border-white/[0.08] text-white placeholder:text-white/30 rounded-xl focus:bg-white/[0.04] focus:border-white/20 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-auto">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  <TabsList className="bg-white/[0.02] border border-white/[0.08] p-1 h-14 w-full sm:w-auto backdrop-blur-sm">
                    {categories.map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        className="data-[state=active]:bg-orange-500 data-[state=active]:text-white px-6 py-3 rounded-lg text-white/60 hover:text-white/80 transition-all font-medium"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      {visibleProjects.find(project => project.featured) && !isLoading && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-2">
                <Star className="w-5 h-5 text-orange-400" fill="currentColor" />
                <span className="text-sm font-medium text-orange-400">Em Destaque</span>
              </div>
            </motion.div>
            
            {visibleProjects.filter(project => project.featured).slice(0, 1).map(project => {
              const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Code;
              
              return (
                <motion.div 
                  key={project.id} 
                  className="group relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-white/[0.008] border border-white/[0.05] hover:border-white/[0.15] transition-all duration-700 hover:bg-white/[0.02]">
                      <div className="flex flex-col lg:flex-row min-h-[500px]">
                        {/* Image */}
                        <div className="lg:w-1/2 relative overflow-hidden">
                          <img 
                            src={project.coverImage} 
                            alt={project.title}
                            className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:from-transparent lg:to-black/40"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-orange-400" />
                            </div>
                            <div>
                              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-3 py-1 rounded-lg">
                                {project.category}
                              </Badge>
                            </div>
                          </div>
                          
                          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Building className="w-4 h-4 text-white/60" />
                              </div>
                              <div>
                                <div className="font-medium text-white/80">{project.client.name}</div>
                                <div className="text-sm text-white/40">{project.client.sector}</div>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {searchTerm || selectedCategory !== "Todos" 
                ? "Resultados" 
                : "Todos os Projetos"}
            </h2>
            
            {(searchTerm || selectedCategory !== "Todos") && (
              <div className="text-white/40 font-medium">
                {visibleProjects.length} {visibleProjects.length === 1 ? 'projeto' : 'projetos'}
              </div>
            )}
          </motion.div>
          
          {isLoading ? (
            // Loading skeletons
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="rounded-3xl bg-white/[0.02] overflow-hidden animate-pulse">
                  <div className="h-64 bg-white/[0.05]"></div>
                  <div className="p-8 space-y-4">
                    <div className="h-4 bg-white/[0.05] rounded w-1/3"></div>
                    <div className="h-6 bg-white/[0.05] rounded w-3/4"></div>
                    <div className="h-4 bg-white/[0.05] rounded w-full"></div>
                    <div className="flex justify-between pt-4">
                      <div className="h-8 bg-white/[0.05] rounded w-32"></div>
                      <div className="h-8 bg-white/[0.05] rounded w-8"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : visibleProjects.filter(project => !project.featured).length === 0 ? (
            // No results
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                <Search className="w-6 h-6 text-white/40" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nenhum projeto encontrado</h3>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                Não encontramos projetos que correspondam aos seus critérios.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                }}
                className="border-white/20 text-white/80 hover:bg-white/[0.05] hover:border-white/30"
              >
                Limpar filtros
              </Button>
            </motion.div>
          ) : (
            // Projects grid
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleProjects
                .filter(project => !project.featured)
                .map((project, index) => {
                  const IconComponent = categoryIcons[project.category as keyof typeof categoryIcons] || Code;
                  
                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={`/projects/${project.id}`}>
                        <div className="group relative rounded-3xl overflow-hidden bg-white/[0.008] border border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2">
                          {/* Image */}
                          <div className="relative overflow-hidden">
                            <img 
                              src={project.coverImage} 
                              alt={project.title}
                              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Category badge */}
                            <div className="absolute top-6 left-6">
                              <div className="flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                                <IconComponent className="w-4 h-4 text-orange-400" />
                                <span className="text-white text-sm font-medium">{project.category}</span>
                              </div>
                            </div>

                            {/* External link icon */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center">
                                <ExternalLink className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-8">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-xs font-medium text-orange-400">{project.client.sector}</span>
                              <span className="text-white/20">•</span>
                              <span className="text-xs text-white/50">{project.duration}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-400 transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-white/60 text-sm mb-6 leading-relaxed line-clamp-2">
                              {project.description}
                            </p>
                            
                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.technologies.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-lg text-xs text-white/70">
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-lg text-xs text-white/50">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                            
                            {/* Client info */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                  <span className="text-xs font-bold text-white/80">
                                    {project.client.name.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white/90">{project.client.name}</div>
                                  <div className="text-xs text-white/50">
                                    <Calendar className="w-3 h-3 inline mr-1" />
                                    {new Date(project.completionDate).getFullYear()}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                            </div>
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
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.015] to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Code className="w-8 h-8 text-orange-400" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              O próximo projeto começa
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                com uma ideia
              </span>
            </h2>
            
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforme sua ideia em realidade digital. Nossa equipe está pronta 
              para desenvolver a solução perfeita para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 h-auto rounded-2xl text-lg font-semibold hover:scale-105 transition-all"
              >
                Iniciar Projeto
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white/80 hover:bg-white/[0.05] hover:border-white/30 px-8 py-4 h-auto rounded-2xl text-lg"
              >
                Ver Mais Projetos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 