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
    title: "Tecnologias emergentes na gestão de projetos de construção",
    excerpt:
      "Como a inteligência artificial e realidade aumentada estão revolucionando os canteiros de obras modernos.",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop",
    category: "Tecnologia",
    tags: ["IA", "AR", "Inovação"],
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
    title: "Sustentabilidade e construção: práticas ecológicas para 2023",
    excerpt:
      "Descubra como implementar práticas sustentáveis em seus projetos de construção sem comprometer prazos e orçamentos.",
    coverImage:
      "https://images.unsplash.com/photo-1518407613690-d9fc990e795f?q=80&w=1470&auto=format&fit=crop",
    category: "Sustentabilidade",
    tags: ["Eco-friendly", "Construção Verde", "Certificação LEED"],
    author: {
      name: "Carlos Mendes",
      avatar: "https://i.pravatar.cc/150?img=67",
    },
    publishDate: "2023-04-22",
    readTime: 6,
  },
  {
    id: "3",
    title: "Gestão de equipes distribuídas em projetos de construção",
    excerpt:
      "Estratégias para gerenciar equipes em múltiplos locais de construção com eficiência e produtividade.",
    coverImage:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1287&auto=format&fit=crop",
    category: "Gestão",
    tags: ["Liderança", "Equipes", "Produtividade"],
    author: {
      name: "Patrícia Almeida",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    publishDate: "2023-03-10",
    readTime: 5,
  },
  {
    id: "4",
    title: "BIM: Modelagem de Informação da Construção na prática",
    excerpt:
      "Um guia prático para implementar BIM em qualquer tamanho de projeto de construção com exemplos reais.",
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop",
    category: "Tecnologia",
    tags: ["BIM", "Modelagem 3D", "Projetos"],
    author: {
      name: "Ricardo Torres",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    publishDate: "2023-02-28",
    readTime: 10,
  },
  {
    id: "5",
    title: "Segurança no canteiro de obras: novas regulamentações",
    excerpt:
      "Atualizações importantes sobre normas de segurança e como implementá-las de forma eficiente em seus projetos.",
    coverImage:
      "https://images.unsplash.com/photo-1574359411659-15942387501c?q=80&w=1374&auto=format&fit=crop",
    category: "Segurança",
    tags: ["EPI", "Normas", "Treinamento"],
    author: {
      name: "Fernanda Costa",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    publishDate: "2023-01-15",
    readTime: 7,
  },
  {
    id: "6",
    title: "Construção modular: tendências e vantagens competitivas",
    excerpt:
      "Como a construção modular está ganhando espaço e oferecendo vantagens significativas em tempo e custo.",
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop",
    category: "Inovação",
    tags: ["Construção Modular", "Eficiência", "Tendências"],
    author: {
      name: "Marcelo Santos",
      avatar: "https://i.pravatar.cc/150?img=54",
    },
    publishDate: "2022-12-05",
    readTime: 9,
  },
];
