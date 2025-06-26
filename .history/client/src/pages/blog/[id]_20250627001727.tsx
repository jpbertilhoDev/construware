import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPost() {
  // Obter o ID do artigo da URL
  const [, params] = useRoute("/blog/:id");
  const id = params?.id;
  
  // Estado para controlar o carregamento da página
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
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
      <div className="min-h-screen bg-background pt-36 sm:pt-44 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-muted/20 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted/20 rounded w-1/4 mb-12"></div>
            <div className="h-64 bg-muted/20 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted/20 rounded w-full"></div>
              <div className="h-4 bg-muted/20 rounded w-full"></div>
              <div className="h-4 bg-muted/20 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Se o artigo não for encontrado
  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-36 sm:pt-44 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-white/70 mb-6">O artigo que você está procurando não existe ou foi removido.</p>
          <Button asChild>
            <Link href="/blog">Voltar para o Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section com imagem de capa */}
      <div className="w-full h-[60vh] relative overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background z-10"></div>
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover object-center"
        />
        
        {/* Conteúdo sobreposto à imagem */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-4 sm:px-6 pb-12 container mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/30 text-white border-none backdrop-blur-sm">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-white/80 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {formatDate(post.publishDate)}
              </div>
              <div className="flex items-center text-sm text-white/80 backdrop-blur-sm bg-black/20 px-2 py-1 rounded-full">
                <Clock className="h-3.5 w-3.5 mr-1" />
                {post.readTime} min de leitura
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-shadow">
              {post.title}
            </h1>
            
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full border-2 border-white/20 mr-3"
              />
              <div>
                <div className="text-white font-medium">{post.author.name}</div>
                <div className="text-white/60 text-sm">Especialista em {post.category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navegação e ações */}
      <div className="border-b border-white/10 sticky top-0 bg-background/80 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center text-sm">
              <Button variant="ghost" size="sm" asChild className="gap-1 text-white/70 hover:text-white">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar
                </Link>
              </Button>
              <ChevronRight className="h-4 w-4 text-white/40 mx-1" />
              <span className="text-white/70">Blog</span>
              <ChevronRight className="h-4 w-4 text-white/40 mx-1" />
              <span className="text-white/70">{post.category}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
                <BookmarkPlus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Conteúdo do artigo */}
      <article className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Tags do artigo */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 text-xs bg-white/5 rounded-full text-white/70">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Corpo do artigo com formatação markdown-like */}
          <div className="prose prose-invert prose-orange max-w-none">
            {getFullContent(post.excerpt).split('\n\n').map((paragraph, i) => {
              // Verificar se é um cabeçalho
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } 
              else if (paragraph.startsWith('###')) {
                return (
                  <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-white">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Verificar se é uma lista
              else if (paragraph.includes('- **')) {
                return (
                  <ul key={i} className="my-6 space-y-2 list-disc list-inside">
                    {paragraph.split('\n').map((item, j) => {
                      const match = item.match(/- \*\*(.*?)\*\*: (.*)/);
                      if (match) {
                        return (
                          <li key={j} className="text-white/80">
                            <strong className="text-white">{match[1]}:</strong> {match[2]}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                );
              }
              // Parágrafo normal
              else {
                return (
                  <p key={i} className="mb-6 text-white/80 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </article>
      
      {/* Compartilhar e autor */}
      <div className="bg-card/20 border-t border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-16 h-16 rounded-full border-2 border-white/10 mr-4"
              />
              <div>
                <div className="text-white font-medium text-lg">{post.author.name}</div>
                <div className="text-white/60">Especialista em {post.category}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="text-white/80 text-sm mr-2">Compartilhar:</div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9 p-0 border-white/10">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9 p-0 border-white/10">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9 p-0 border-white/10">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-9 h-9 p-0 border-white/10">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Artigos relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8">Artigos Relacionados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.id}`}
                  className="group block rounded-xl overflow-hidden bg-card/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.coverImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>{formatDate(relatedPost.publishDate)}</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Newsletter */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Gostou do conteúdo?</h2>
            <p className="text-white/70 mb-6">
              Inscreva-se em nossa newsletter e receba mais artigos como este diretamente na sua caixa de entrada.
            </p>
            <div className="flex justify-center">
              <Button asChild className="px-8">
                <Link href="/blog">
                  Explorar mais artigos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Estilos adicionais */}
      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
} 