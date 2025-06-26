import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, Bookmark } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog-posts";

// Categorias para filtro
const categories = [
  "Todas",
  "Tecnologia",
  "Sustentabilidade",
  "Gestão",
  "Inovação",
  "Segurança"
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carregamento e filtrar posts
  useEffect(() => {
    setIsLoading(true);
    
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      const filtered = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todas" || post.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      });
      
      setVisiblePosts(filtered);
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-36 sm:pt-44 pb-12 sm:pb-16 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary)/10 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 py-1 px-3 rounded-full mb-4">
              Blog Construware
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
              Insights para Construir o <span className="text-primary">Futuro</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              Artigos, tendências e estratégias para revolucionar seus projetos de construção 
              com as melhores práticas e tecnologias.
            </p>
          </div>
          
          {/* Filtros e busca */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="text"
                placeholder="Buscar artigos..."
                className="pl-10 bg-card/50 backdrop-blur-sm border-white/10 w-full h-12 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-auto">
              <Tabs defaultValue="Todas" className="w-full">
                <TabsList className="bg-card/50 backdrop-blur-sm border border-white/10 p-1.5 w-full sm:w-auto h-12 overflow-x-auto flex-nowrap gap-1">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setSelectedCategory(category)}
                      className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 h-9"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {visiblePosts.find(post => post.featured) && !isLoading && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center mb-6">
              <div className="w-10 h-0.5 bg-primary/30 mr-4"></div>
              <h2 className="text-xl font-medium text-white/80">Em Destaque</h2>
            </div>
            
            {visiblePosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="group relative overflow-hidden rounded-2xl bg-card/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-[45%] h-72 sm:h-80 lg:h-auto overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="lg:w-[55%] p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none py-1.5">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-white/60">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center text-sm text-white/60">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {post.readTime} min
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 text-xs bg-white/5 rounded-full text-white/60">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2 border border-white/10"
                        />
                        <span className="text-sm text-white/80">{post.author.name}</span>
                      </div>
                      <Button 
                        variant="ghost"
                        asChild
                        className="text-primary hover:text-primary hover:bg-primary/10 group"
                      >
                        <Link href={`/blog/${post.id}`}>
                          Ler artigo
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Blog posts grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-10 h-0.5 bg-primary/30 mr-4 hidden sm:block"></div>
              <h2 className="text-2xl font-bold text-white">
                {searchTerm || selectedCategory !== "Todas" 
                  ? "Resultados da Busca" 
                  : "Artigos Recentes"}
              </h2>
            </div>
            
            {(searchTerm || selectedCategory !== "Todas") && (
              <div className="text-sm text-white/70">
                {visiblePosts.length} {visiblePosts.length === 1 ? 'resultado' : 'resultados'} encontrados
              </div>
            )}
          </div>
          
          {isLoading ? (
            // Esqueletos de carregamento
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="rounded-xl bg-card/20 overflow-hidden animate-pulse">
                  <div className="h-48 bg-muted/20"></div>
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-muted/20 rounded w-1/3"></div>
                    <div className="h-6 bg-muted/20 rounded w-5/6"></div>
                    <div className="h-4 bg-muted/20 rounded w-full"></div>
                    <div className="h-4 bg-muted/20 rounded w-4/6"></div>
                    <div className="flex justify-between pt-4">
                      <div className="h-8 bg-muted/20 rounded-full w-24"></div>
                      <div className="h-8 bg-muted/20 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : visiblePosts.length === 0 ? (
            // Sem resultados
            <div className="text-center py-16 px-4 bg-card/10 rounded-xl border border-white/5">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/20 mb-4">
                <Search className="h-6 w-6 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nenhum resultado encontrado</h3>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                Não encontramos nenhum artigo que corresponda aos seus critérios de busca. 
                Tente outros termos ou categorias.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todas");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          ) : (
            // Grid de posts
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visiblePosts
                .filter(post => !post.featured)
                .map(post => (
                <Link 
                  href={`/blog/${post.id}`}
                  key={post.id} 
                  className="flex flex-col rounded-xl overflow-hidden bg-card/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" // Otimização para carregamento de imagens
                    />
                    <div className="absolute top-3 right-3">
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md text-white/70 hover:text-white">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-white/60">{formatDate(post.publishDate)}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full mr-2 border border-white/10"
                          loading="lazy"
                        />
                        <span className="text-xs text-white/80">{post.author.name}</span>
                      </div>
                      <div className="text-xs text-white/60 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {/* Paginação simplificada */}
          {!isLoading && visiblePosts.length > 3 && (
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="mr-2">Anterior</Button>
              <Button className="bg-primary text-white hover:bg-primary/90">Próxima</Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21.5 2h-19A2.5 2.5 0 0 0 0 4.5v15A2.5 2.5 0 0 0 2.5 22h19A2.5 2.5 0 0 0 24 19.5v-15A2.5 2.5 0 0 0 21.5 2z"/>
                <path d="m3 3 9 9 9-9"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
            <p className="text-white/70 mb-8">
              Receba conteúdo exclusivo, tendências e novidades do setor de construção diretamente na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 bg-card/30 backdrop-blur-sm p-1.5 rounded-lg border border-white/10">
              <Input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 bg-transparent border-none h-12 text-base"
              />
              <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-6">
                Inscrever-se
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-4">
              Ao se inscrever, você concorda com nossa política de privacidade.
              Não enviamos spam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 