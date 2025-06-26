import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Filter, Sparkles, User } from "lucide-react";
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

  const featuredPosts = visiblePosts.filter(post => post.featured);
  const regularPosts = visiblePosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Inspired by Cursor's clean design */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)",
                backgroundSize: "60px 60px"
            }}
          ></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">Blog</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-white block">Construindo o</span>
              <span className="gradient-text-primary block">Conhecimento</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Insights, tendências e estratégias para revolucionar seus projetos de construção 
              com as melhores práticas e tecnologias.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
              <Input 
                type="text"
                placeholder="Buscar artigos..."
                  className="pl-12 h-14 text-base bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm focus:bg-white/8 focus:border-primary/30 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

              {/* Category Tabs */}
              <div className="flex justify-center">
                <Tabs defaultValue="Todas" className="w-full max-w-3xl">
                  <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 p-1 h-12 w-full grid grid-cols-3 sm:grid-cols-6 gap-1">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setSelectedCategory(category)}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs sm:text-sm px-2 py-2 rounded-lg transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center mb-10">
              <Sparkles className="w-5 h-5 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-white">Em Destaque</h2>
            </div>
            
            <div className="grid gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="group">
                  <div className="bg-white/2 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:bg-white/3">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative overflow-hidden lg:order-1">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                          className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                      
                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none px-3 py-1">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-white/60">
                            <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center text-sm text-white/60">
                            <Clock className="h-4 w-4 mr-2" />
                            {post.readTime} min de leitura
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-primary/90 transition-colors duration-300">
                          <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </h3>

                        {/* Excerpt */}
                        <p className="text-white/70 mb-6 text-lg leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-sm bg-white/5 rounded-full text-white/60 hover:bg-white/10 transition-colors cursor-pointer">
                            #{tag}
                          </span>
                        ))}
                      </div>

                        {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                              className="w-10 h-10 rounded-full mr-3 border-2 border-white/10"
                        />
                            <div>
                              <div className="text-sm font-medium text-white">{post.author.name}</div>
                              <div className="text-xs text-white/50">Autor</div>
                            </div>
                      </div>
                          
                      <Button 
                        variant="ghost"
                        asChild
                            className="text-primary hover:text-white hover:bg-primary/20 group/btn rounded-xl px-6"
                      >
                        <Link href={`/blog/${post.id}`}>
                          Ler artigo
                              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-white">
                {searchTerm || selectedCategory !== "Todas" 
                  ? `Resultados ${selectedCategory !== "Todas" ? `em ${selectedCategory}` : ''}` 
                  : "Todos os Artigos"}
              </h2>
            </div>
            
            {/* Results count */}
            <div className="text-sm text-white/50">
              {isLoading ? "Carregando..." : `${regularPosts.length} artigos`}
              </div>
          </div>
          
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/2 border border-white/5 rounded-2xl p-6 animate-pulse">
                  <div className="bg-white/10 h-48 rounded-xl mb-4"></div>
                  <div className="bg-white/10 h-4 rounded w-3/4 mb-2"></div>
                  <div className="bg-white/10 h-4 rounded w-1/2 mb-4"></div>
                  <div className="bg-white/10 h-20 rounded mb-4"></div>
                  <div className="bg-white/10 h-4 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          )}

          {/* Posts Grid */}
          {!isLoading && (
            <>
              {regularPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map(post => (
                    <article key={post.id} className="group">
                      <div className="bg-white/2 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:bg-white/3 hover:-translate-y-2">
                        {/* Image */}
                        <div className="relative overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary/90 text-white border-none backdrop-blur-sm">
                              {post.category}
                            </Badge>
                    </div>
                  </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Meta */}
                          <div className="flex items-center gap-4 mb-3 text-xs text-white/60">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(post.publishDate)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime} min
                            </div>
                    </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary/90 transition-colors duration-300">
                            <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                            </Link>
                    </h3>

                          {/* Excerpt */}
                          <p className="text-white/70 mb-4 text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-2 py-1 text-xs bg-white/5 rounded-md text-white/60">
                                #{tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="px-2 py-1 text-xs text-white/40">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Author */}
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
                              size="sm" 
                              asChild
                              className="text-primary hover:text-white hover:bg-primary/20 rounded-lg group/btn"
                            >
                              <Link href={`/blog/${post.id}`}>
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                      </div>
              ) : (
                // Empty State
                <div className="text-center py-20">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-white/40" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Nenhum artigo encontrado</h3>
                    <p className="text-white/60 mb-8">
                      Não encontramos artigos que correspondam aos seus critérios de busca. 
                      Tente ajustar os filtros ou termos de pesquisa.
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("Todas");
                      }}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Limpar Filtros
                    </Button>
                  </div>
            </div>
          )}
            </>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white">Newsletter</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-white">
              Fique por dentro das novidades
            </h2>
            <p className="text-white/70 mb-8">
              Receba os melhores insights sobre construção e tecnologia diretamente no seu email.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Seu melhor email"
                className="flex-1 h-12 bg-white/5 border-white/10 rounded-xl backdrop-blur-sm focus:bg-white/8 focus:border-primary/30"
              />
              <Button className="bg-primary hover:bg-primary/90 h-12 px-6 rounded-xl">
                Inscrever-se
              </Button>
            </div>
            
            <p className="text-xs text-white/50 mt-4">
              Sem spam. Cancele a qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 