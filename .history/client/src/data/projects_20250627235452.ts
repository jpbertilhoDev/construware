// Tipos para projetos desenvolvidos
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  coverImage: string;
  category: string;
  technologies: string[];
  client: {
    name: string;
    sector: string;
  };
  completionDate: string;
  duration: string;
  featured?: boolean;
  gallery: string[];
  features: string[];
  challenges: string[];
  results: string[];
}

// Dados de projetos desenvolvidos pela empresa
export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestão Hospitalar",
    description: "Plataforma completa para gestão de hospitais com módulos de pacientes, médicos, exames e faturamento.",
    longDescription: "Sistema web completo desenvolvido para modernizar a gestão hospitalar, incluindo prontuário eletrônico, agendamento de consultas, controle de estoque de medicamentos e dashboard executivo.",
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1631&auto=format&fit=crop",
    category: "Sistema Web",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    client: {
      name: "Hospital São Lucas",
      sector: "Saúde"
    },
    completionDate: "2024-03-15",
    duration: "8 meses",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop"
    ],
    features: [
      "Prontuário eletrônico completo",
      "Agendamento online de consultas",
      "Controle de estoque farmacêutico",
      "Dashboard executivo com KPIs",
      "Sistema de notificações em tempo real",
      "Integração com equipamentos médicos"
    ],
    challenges: [
      "Integração com sistemas legados",
      "Conformidade com LGPD",
      "Performance com milhares de usuários simultâneos"
    ],
    results: [
      "40% redução no tempo de atendimento",
      "95% satisfação dos usuários",
      "Eliminação de papéis nos processos"
    ]
  },
  {
    id: "2",
    title: "E-commerce Premium Multi-idioma",
    description: "Plataforma de e-commerce avançada com múltiplas lojas, idiomas e integração com marketplaces.",
    longDescription: "E-commerce completo com gestão de múltiplas lojas, suporte a diferentes moedas e idiomas, integração com marketplaces como Amazon e eBay, sistema de afiliados e analytics avançado.",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop",
    category: "Sistema Web",
    technologies: ["Next.js", "TypeScript", "Stripe", "AWS", "MongoDB"],
    client: {
      name: "FashionTech Europe",
      sector: "E-commerce"
    },
    completionDate: "2024-01-20",
    duration: "6 meses",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
    ],
    features: [
      "Multi-tenant para várias lojas",
      "Suporte a 12 idiomas",
      "Integração com 15+ gateways de pagamento",
      "Sistema de afiliados completo",
      "Analytics em tempo real",
      "App mobile nativo"
    ],
    challenges: [
      "Sincronização com múltiplos marketplaces",
      "Performance global com CDN",
      "Complexidade de multi-idiomas"
    ],
    results: [
      "300% aumento nas vendas online",
      "Expansão para 8 países europeus",
      "ROI de 450% no primeiro ano"
    ]
  },
  {
    id: "3",
    title: "App de Delivery Ultra-Rápido",
    description: "Aplicativo mobile para delivery com rastreamento em tempo real e otimização de rotas por IA.",
    longDescription: "App mobile completo para delivery com algoritmos de otimização de rotas, rastreamento GPS em tempo real, sistema de avaliações, programa de fidelidade e painel administrativo para restaurantes.",
    coverImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1481&auto=format&fit=crop",
    category: "App Mobile",
    technologies: ["React Native", "Node.js", "Redis", "MapBox", "Firebase"],
    client: {
      name: "QuickFood Portugal",
      sector: "Food Tech"
    },
    completionDate: "2023-11-10",
    duration: "5 meses",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1470&auto=format&fit=crop"
    ],
    features: [
      "Rastreamento GPS em tempo real",
      "Otimização inteligente de rotas",
      "Sistema de avaliações e reviews",
      "Programa de fidelidade gamificado",
      "Pagamento integrado com cartão e MB Way",
      "Notificações push personalizadas"
    ],
    challenges: [
      "Algoritmo de otimização de rotas em tempo real",
      "Sincronização offline/online",
      "Escalabilidade para milhares de pedidos simultâneos"
    ],
    results: [
      "25% redução no tempo de entrega",
      "4.8 estrelas na App Store",
      "200% aumento no volume de pedidos"
    ]
  },
  {
    id: "4",
    title: "Sistema ERP para Indústria",
    description: "ERP completo para gestão industrial com controle de produção, estoque, vendas e financeiro.",
    longDescription: "Sistema ERP robusto desenvolvido especificamente para indústrias, incluindo planejamento de produção, controle de qualidade, gestão de fornecedores, vendas B2B e módulo financeiro completo.",
    coverImage: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1470&auto=format&fit=crop",
    category: "Sistema Desktop",
    technologies: ["Electron", "React", "SQLite", "Python", "Docker"],
    client: {
      name: "Metalúrgica Aveiro",
      sector: "Indústria"
    },
    completionDate: "2023-09-05",
    duration: "10 meses",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop"
    ],
    features: [
      "Planejamento de produção avançado",
      "Controle de qualidade integrado",
      "Gestão completa de fornecedores",
      "Módulo financeiro robusto",
      "Relatórios executivos automatizados",
      "Integração com máquinas industriais"
    ],
    challenges: [
      "Integração com equipamentos legados",
      "Sincronização de dados em tempo real",
      "Interface intuitiva para operadores de chão de fábrica"
    ],
    results: [
      "30% aumento na eficiência produtiva",
      "50% redução de erros de estoque",
      "ROI de 280% em 18 meses"
    ]
  },
  {
    id: "5",
    title: "Plataforma de Ensino Online",
    description: "LMS moderno com videoconferências, gamificação e acompanhamento de progresso para escolas.",
    longDescription: "Learning Management System completo com salas de aula virtuais, sistema de gamificação, acompanhamento detalhado de progresso, biblioteca digital e ferramentas de colaboração para educação moderna.",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
    category: "Sistema Web",
    technologies: ["Vue.js", "Laravel", "WebRTC", "MySQL", "Redis"],
    client: {
      name: "Colégio Futuro Digital",
      sector: "Educação"
    },
    completionDate: "2023-06-30",
    duration: "7 meses",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1493&auto=format&fit=crop"
    ],
    features: [
      "Salas de aula virtuais com WebRTC",
      "Sistema de gamificação completo",
      "Biblioteca digital integrada",
      "Acompanhamento de progresso em tempo real",
      "Ferramentas de colaboração",
      "App mobile para estudantes"
    ],
    challenges: [
      "Estabilidade de videoconferências com 100+ usuários",
      "Gamificação envolvente para diferentes idades",
      "Integração com sistemas acadêmicos existentes"
    ],
    results: [
      "85% aumento no engagement dos alunos",
      "40% melhoria nas notas médias",
      "Adoção por 15+ escolas parceiras"
    ]
  },
  {
    id: "6",
    title: "Sistema de Gestão Imobiliária",
    description: "Plataforma completa para imobiliárias com CRM, portal de imóveis e automação de processos.",
    longDescription: "Sistema web completo para gestão imobiliária incluindo CRM avançado, portal público de imóveis, sistema de agendamento de visitas, automação de contratos e dashboard de vendas.",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1473&auto=format&fit=crop",
    category: "Sistema Web",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Elasticsearch", "Docker"],
    client: {
      name: "Imobiliária Premium",
      sector: "Imobiliário"
    },
    completionDate: "2023-04-15",
    duration: "6 meses",
    gallery: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1396&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1470&auto=format&fit=crop"
    ],
    features: [
      "CRM completo para gestão de clientes",
      "Portal público responsivo",
      "Sistema de agendamento inteligente",
      "Automação de contratos",
      "Busca avançada com filtros",
      "Dashboard de vendas e comissões"
    ],
    challenges: [
      "Busca geolocalizada de alta performance",
      "Integração com portais externos",
      "Automação de processos legais"
    ],
    results: [
      "60% aumento nas vendas",
      "80% redução no tempo de fechamento",
      "Expansão para 3 novas cidades"
    ]
  }
]; 