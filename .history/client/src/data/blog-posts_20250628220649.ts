// Tipos para artigos do blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: number;
  featured?: boolean;
}

// Dados de exemplo
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Tecnologias emergentes no desenvolvimento de software",
    excerpt:
      "Como a inteligência artificial e machine learning estão revolucionando o desenvolvimento de aplicações modernas.",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop",
    category: "Tecnologia",
    tags: ["IA", "Machine Learning", "Inovação"],
    author: {
      name: "Ana Silva",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    publishDate: "2023-05-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Desenvolvimento sustentável: código limpo e eficiente",
    excerpt:
      "Descubra como implementar práticas de código limpo em seus projetos sem comprometer prazos e performance.",
    coverImage:
      "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?q=80&w=1470&auto=format&fit=crop",
    category: "Boas Práticas",
    tags: ["Código Limpo", "Performance", "Qualidade"],
    author: {
      name: "Carlos Mendes",
      avatar: "https://i.pravatar.cc/150?img=67",
    },
    publishDate: "2023-04-22",
    readTime: 6,
  },
  {
    id: "3",
    title: "Gestão de equipas distribuídas em projetos de software",
    excerpt:
      "Estratégias para gerir equipas remotas em projetos de desenvolvimento com eficiência e produtividade.",
    coverImage:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1287&auto=format&fit=crop",
    category: "Gestão",
    tags: ["Liderança", "Equipas Remotas", "Produtividade"],
    author: {
      name: "Patrícia Almeida",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    publishDate: "2023-03-10",
    readTime: 5,
  },
  {
    id: "4",
    title: "DevOps: Integração e entrega contínuas na prática",
    excerpt:
      "Um guia prático para implementar DevOps em qualquer tamanho de projeto com exemplos reais.",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop",
    category: "DevOps",
    tags: ["CI/CD", "Automação", "Deploy"],
    author: {
      name: "Ricardo Torres",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    publishDate: "2023-02-28",
    readTime: 10,
  },
  {
    id: "5",
    title: "Segurança em aplicações web: novas práticas",
    excerpt:
      "Atualizações importantes sobre segurança web e como implementá-las de forma eficiente nos seus projetos.",
    coverImage:
      "https://images.unsplash.com/photo-1574359411659-15942387501c?q=80&w=1374&auto=format&fit=crop",
    category: "Segurança",
    tags: ["Cibersegurança", "HTTPS", "Autenticação"],
    author: {
      name: "Fernanda Costa",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    publishDate: "2023-01-15",
    readTime: 7,
  },
  {
    id: "6",
    title: "Arquitetura de microserviços: vantagens e implementação",
    excerpt:
      "Como os microserviços estão a ganhar espaço e oferecer vantagens significativas em escalabilidade e manutenção.",
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop",
    category: "Arquitetura",
    tags: ["Microserviços", "Escalabilidade", "Cloud"],
    author: {
      name: "Marcelo Santos",
      avatar: "https://i.pravatar.cc/150?img=54",
    },
    publishDate: "2022-12-05",
    readTime: 9,
  },
];
