import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, ChevronRight, User, Tag, Heart, MessageCircle, Eye } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  // Obter o ID do artigo da URL
  const [, params] = useRoute("/blog/:id");
  const id = params?.id;
  
  // Estado para controlar o carregamento da página
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Simular o tempo de carregamento e recuperar o artigo
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      // Encontrar o artigo pelo ID
      const foundPost = blogPosts.find(post => post.id === id);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Encontrar artigos relacionados (mesma categoria ou tags semelhantes)
        const related = blogPosts
          .filter(p => p.id !== id)
          .filter(p => p.category === foundPost.category || 
                      p.tags.some(tag => foundPost.tags.includes(tag)))
          .slice(0, 3);
        
        setRelatedPosts(related);
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
  
  // Conteúdo fictício para o artigo completo
  const getFullContent = (excerpt: string) => {
    return `${excerpt}

A indústria da construção está passando por uma transformação digital sem precedentes. Com a adoção de tecnologias avançadas, empresas estão encontrando novas maneiras de otimizar processos, reduzir custos e melhorar a qualidade das construções.

## Tecnologias Emergentes

### Inteligência Artificial

A IA está revolucionando o planejamento de projetos, permitindo que engenheiros e arquitetos simulem diferentes cenários e tomem decisões baseadas em dados. Algoritmos avançados podem prever problemas potenciais antes mesmo que a construção comece, economizando tempo e recursos.

### Realidade Aumentada

Com a RA, equipes podem visualizar modelos 3D sobrepostos ao ambiente real, facilitando a detecção de erros e a coordenação entre diferentes especialidades. Técnicos podem receber instruções visuais em tempo real, reduzindo a margem de erro.

### Internet das Coisas (IoT)

Sensores conectados monitoram continuamente estruturas, materiais e equipamentos, fornecendo dados em tempo real sobre o desempenho e condições. Isso permite manutenção preditiva e maior segurança nos canteiros de obras.

## Benefícios da Transformação Digital

- **Aumento de produtividade**: Processos automatizados reduzem o tempo gasto em tarefas manuais
- **Redução de custos**: Previsão mais precisa de materiais e melhor alocação de recursos
- **Melhoria na segurança**: Monitoramento em tempo real de condições de risco
- **Sustentabilidade**: Otimização do uso de recursos e redução de desperdícios

## Desafios e Perspectivas

Apesar dos avanços, a implementação dessas tecnologias ainda enfrenta desafios como resistência cultural, custos iniciais e necessidade de capacitação. No entanto, empresas que investem nessa transformação estão se posicionando na vanguarda do setor, com vantagens competitivas significativas.

A tendência é que nos próximos anos vejamos uma adoção ainda maior dessas tecnologias, com sistemas cada vez mais integrados e acessíveis para empresas de todos os portes.`;
  };

  // Se estiver carregando, mostrar esqueleto
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Skeleton */}
        <div className="w-full h-[60vh] relative overflow-hidden mt-20">
          <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
          <div className="absolute inset-0 flex flex-col justify-end px-4 sm:px-6 pb-12 container mx-auto">
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
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
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
  
  // Se o artigo não for encontrado
  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookmarkPlus className="w-12 h-12 text-white/40" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-white">Artigo não encontrado</h1>
          <p className="text-white/70 mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/blog">Voltar para o Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Hero Section */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background"></div>
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
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm mb-8">
              <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
              <span className="text-white/60">{post.category}</span>
              <ChevronRight className="h-4 w-4 text-white/40 mx-2" />
              <span className="text-white/80 truncate">{post.title.substring(0, 30)}...</span>
            </nav>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                {post.category}
              </Badge>
              <div className="flex items-center text-white/60">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.publishDate)}
              </div>
              <div className="flex items-center text-white/60">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} min de leitura
              </div>
              <div className="flex items-center text-white/60">
                <Eye className="h-4 w-4 mr-2" />
                1.2k visualizações
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">{post.title.split(' ').slice(0, -2).join(' ')}</span>
              <span className="gradient-text-primary block">{post.title.split(' ').slice(-2).join(' ')}</span>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-white/10 mr-4"
                />
                <div>
                  <div className="text-white font-semibold">{post.author.name}</div>
                  <div className="text-white/60 text-sm">Especialista em {post.category}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${isLiked ? 'text-red-400' : 'text-white/60'} hover:text-red-400`}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                  42
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`${isBookmarked ? 'text-primary' : 'text-white/60'} hover:text-primary`}
                >
                  <BookmarkPlus className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag: string) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full text-white/70 transition-colors cursor-pointer">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          {/* Content */}
          <div className="prose prose-lg prose-invert prose-orange max-w-none">
            <div className="text-white/80 leading-relaxed space-y-6">
              {getFullContent(post.excerpt).split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6 flex items-center">
                      <div className="w-1 h-8 bg-primary rounded-full mr-4"></div>
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-white mt-8 mb-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  // Handle list items
                  return (
                    <ul key={index} className="space-y-2 my-6">
                      {paragraph.split('\n').map((item, itemIndex) => 
                        item.startsWith('- ') && (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</span>
                          </li>
                        )
                      )}
                    </ul>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Engagement Section */}
      <section className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between p-6 bg-white/2 rounded-2xl border border-white/5">
              <div className="flex items-center gap-6">
                <Button 
                  variant="ghost"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${isLiked ? 'text-red-400' : 'text-white/60'} hover:text-red-400 gap-2`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>42 curtidas</span>
                </Button>
                <Button variant="ghost" className="text-white/60 hover:text-white gap-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>12 comentários</span>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`${isBookmarked ? 'text-primary' : 'text-white/60'} hover:text-primary`}
                >
                  <BookmarkPlus className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="ghost" className="text-white/60 hover:text-white">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-white text-center">
                Artigos Relacionados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <article className="bg-white/2 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/3 transition-all duration-500 hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img 
                          src={relatedPost.coverImage} 
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-white border-none backdrop-blur-sm">
                            {relatedPost.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-xs text-white/60">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {formatDate(relatedPost.publishDate)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {relatedPost.readTime} min
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-primary/90 transition-colors duration-300 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-white/70 text-sm leading-relaxed line-clamp-3 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center">
                          <img 
                            src={relatedPost.author.avatar} 
                            alt={relatedPost.author.name}
                            className="w-6 h-6 rounded-full mr-2 border border-white/10"
                          />
                          <span className="text-sm text-white/80">{relatedPost.author.name}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-16 text-center">
        <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:border-primary/30 hover:text-primary">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o Blog
          </Link>
        </Button>
      </section>
    </div>
  );
} 