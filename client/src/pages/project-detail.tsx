import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, ExternalLink, ChevronRight, User, CheckCircle, Target, Lightbulb } from "lucide-react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  // Obter o ID do projeto da URL
  const [, params] = useRoute("/projects/:id");
  const id = params?.id;
  
  // Estado para controlar o carregamento da página
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  
  // Simular o tempo de carregamento e recuperar o projeto
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      // Encontrar o projeto pelo ID
      const foundProject = projects.find(project => project.id === id);
      
      if (foundProject) {
        setProject(foundProject);
        
        // Encontrar projetos relacionados (mesma categoria ou tecnologias similares)
        const related = projects
          .filter(p => p.id !== id)
          .filter(p => p.category === foundProject.category || 
                      p.technologies.some(tech => foundProject.technologies.includes(tech)))
          .slice(0, 3);
        
        setRelatedProjects(related);
      }
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Formatar data
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };
  
  // Se estiver carregando, mostrar esqueleto
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black/95">
        {/* Hero Skeleton */}
        <div className="w-full h-[60vh] relative overflow-hidden mt-20">
          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
              </div>
              <div className="h-12 bg-white/10 rounded w-3/4 mb-6 animate-pulse"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <div className="h-4 w-24 bg-white/10 rounded mb-1 animate-pulse"></div>
                  <div className="h-3 w-32 bg-white/10 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-white/5 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Se o projeto não for encontrado
  if (!project) {
    return (
      <div className="min-h-screen bg-black/95 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <ExternalLink className="w-12 h-12 text-white/40" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">Projeto não encontrado</h1>
          <p className="text-white/70 mb-8">O projeto que você está procurando não existe ou foi removido.</p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/projects">Voltar para Projetos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/95">
      {/* Modern Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-black/95"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm mb-8">
              <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
                Projetos
              </Link>
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
              <span className="text-white/60">{project.category}</span>
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
              <span className="text-white/80 truncate">{project.title.substring(0, 30)}...</span>
            </nav>

            {/* Meta Information */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1">
                {project.category}
              </Badge>
              <div className="flex items-center text-white/60">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(project.completionDate)}
              </div>
              <div className="flex items-center text-white/60">
                <Clock className="h-4 w-4 mr-2" />
                {project.duration}
              </div>
              <div className="flex items-center text-white/60">
                <User className="h-4 w-4 mr-2" />
                {project.client.sector}
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">{project.title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                {project.title.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Client Info */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mr-4">
                  <span className="text-orange-400 font-bold text-lg">
                    {project.client.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{project.client.name}</div>
                  <div className="text-white/60 text-sm">{project.client.sector}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="text-white/60 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Projeto Similar
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Sobre o Projeto</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white/[0.05] rounded-lg text-white/80 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Funcionalidades Principais
                </h3>
                <div className="grid gap-4">
                  {project.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Lightbulb className="h-5 w-5 text-yellow-400 mr-2" />
                  Desafios Enfrentados
                </h3>
                <div className="grid gap-4">
                  {project.challenges.map((challenge: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-yellow-500/[0.05] rounded-lg border border-yellow-500/10">
                      <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Target className="h-5 w-5 text-orange-400 mr-2" />
                  Resultados Alcançados
                </h3>
                <div className="grid gap-4">
                  {project.results.map((result: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-orange-500/[0.05] rounded-lg border border-orange-500/10">
                      <Target className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div 
                className="p-6 bg-white/[0.02] rounded-2xl border border-white/[0.05]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-6">Informações do Projeto</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-white/60 text-sm">Cliente</span>
                    <div className="text-white font-medium">{project.client.name}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Setor</span>
                    <div className="text-white font-medium">{project.client.sector}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Categoria</span>
                    <div className="text-white font-medium">{project.category}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Duração</span>
                    <div className="text-white font-medium">{project.duration}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Conclusão</span>
                    <div className="text-white font-medium">{formatDate(project.completionDate)}</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl border border-orange-500/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-3">Interessado em um projeto similar?</h4>
                <p className="text-white/70 text-sm mb-6">
                  Nossa equipe pode desenvolver uma solução personalizada para o seu negócio.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Solicitar Orçamento
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projetos Relacionados
            </motion.h2>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={`/projects/${relatedProject.id}`}
                    className="group block"
                  >
                    <article className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img 
                          src={relatedProject.coverImage} 
                          alt={relatedProject.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-500/90 text-white border-none backdrop-blur-sm">
                            {relatedProject.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 line-clamp-2">
                          {relatedProject.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/40">{relatedProject.client.name}</span>
                          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Back to Projects */}
      <section className="py-16 text-center">
        <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:border-orange-500/30 hover:text-orange-400">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Projetos
          </Link>
        </Button>
      </section>
    </div>
  );
} 
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, ExternalLink, ChevronRight, User, CheckCircle, Target, Lightbulb } from "lucide-react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  // Obter o ID do projeto da URL
  const [, params] = useRoute("/projects/:id");
  const id = params?.id;
  
  // Estado para controlar o carregamento da página
  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  
  // Simular o tempo de carregamento e recuperar o projeto
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      // Encontrar o projeto pelo ID
      const foundProject = projects.find(project => project.id === id);
      
      if (foundProject) {
        setProject(foundProject);
        
        // Encontrar projetos relacionados (mesma categoria ou tecnologias similares)
        const related = projects
          .filter(p => p.id !== id)
          .filter(p => p.category === foundProject.category || 
                      p.technologies.some(tech => foundProject.technologies.includes(tech)))
          .slice(0, 3);
        
        setRelatedProjects(related);
      }
      
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Formatar data
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };
  
  // Se estiver carregando, mostrar esqueleto
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black/95">
        {/* Hero Skeleton */}
        <div className="w-full h-[60vh] relative overflow-hidden mt-20">
          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-white/10 rounded-full animate-pulse"></div>
                <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
              </div>
              <div className="h-12 bg-white/10 rounded w-3/4 mb-6 animate-pulse"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full mr-3 animate-pulse"></div>
                <div>
                  <div className="h-4 w-24 bg-white/10 rounded mb-1 animate-pulse"></div>
                  <div className="h-3 w-32 bg-white/10 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-white/5 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Se o projeto não for encontrado
  if (!project) {
    return (
      <div className="min-h-screen bg-black/95 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <ExternalLink className="w-12 h-12 text-white/40" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">Projeto não encontrado</h1>
          <p className="text-white/70 mb-8">O projeto que você está procurando não existe ou foi removido.</p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/projects">Voltar para Projetos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/95">
      {/* Modern Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-black/95"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.015]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm mb-8">
              <Link href="/projects" className="text-white/60 hover:text-white transition-colors">
                Projetos
              </Link>
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
              <span className="text-white/60">{project.category}</span>
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
              <span className="text-white/80 truncate">{project.title.substring(0, 30)}...</span>
            </nav>

            {/* Meta Information */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-3 py-1">
                {project.category}
              </Badge>
              <div className="flex items-center text-white/60">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(project.completionDate)}
              </div>
              <div className="flex items-center text-white/60">
                <Clock className="h-4 w-4 mr-2" />
                {project.duration}
              </div>
              <div className="flex items-center text-white/60">
                <User className="h-4 w-4 mr-2" />
                {project.client.sector}
              </div>
            </motion.div>
            
            {/* Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">{project.title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                {project.title.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Client Info */}
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mr-4">
                  <span className="text-orange-400 font-bold text-lg">
                    {project.client.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{project.client.name}</div>
                  <div className="text-white/60 text-sm">{project.client.sector}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button variant="ghost" className="text-white/60 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Projeto Similar
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Sobre o Projeto</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white/[0.05] rounded-lg text-white/80 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Funcionalidades Principais
                </h3>
                <div className="grid gap-4">
                  {project.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Lightbulb className="h-5 w-5 text-yellow-400 mr-2" />
                  Desafios Enfrentados
                </h3>
                <div className="grid gap-4">
                  {project.challenges.map((challenge: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-yellow-500/[0.05] rounded-lg border border-yellow-500/10">
                      <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{challenge}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Target className="h-5 w-5 text-orange-400 mr-2" />
                  Resultados Alcançados
                </h3>
                <div className="grid gap-4">
                  {project.results.map((result: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-orange-500/[0.05] rounded-lg border border-orange-500/10">
                      <Target className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div 
                className="p-6 bg-white/[0.02] rounded-2xl border border-white/[0.05]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-6">Informações do Projeto</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-white/60 text-sm">Cliente</span>
                    <div className="text-white font-medium">{project.client.name}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Setor</span>
                    <div className="text-white font-medium">{project.client.sector}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Categoria</span>
                    <div className="text-white font-medium">{project.category}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Duração</span>
                    <div className="text-white font-medium">{project.duration}</div>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Conclusão</span>
                    <div className="text-white font-medium">{formatDate(project.completionDate)}</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl border border-orange-500/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-white mb-3">Interessado em um projeto similar?</h4>
                <p className="text-white/70 text-sm mb-6">
                  Nossa equipe pode desenvolver uma solução personalizada para o seu negócio.
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Solicitar Orçamento
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projetos Relacionados
            </motion.h2>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={`/projects/${relatedProject.id}`}
                    className="group block"
                  >
                    <article className="bg-white/[0.01] backdrop-blur-sm border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img 
                          src={relatedProject.coverImage} 
                          alt={relatedProject.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-500/90 text-white border-none backdrop-blur-sm">
                            {relatedProject.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 line-clamp-2">
                          {relatedProject.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/40">{relatedProject.client.name}</span>
                          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Back to Projects */}
      <section className="py-16 text-center">
        <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:border-orange-500/30 hover:text-orange-400">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Projetos
          </Link>
        </Button>
      </section>
    </div>
  );
} 