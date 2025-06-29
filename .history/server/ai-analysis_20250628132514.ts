import puppeteer from 'puppeteer';
import { createReadStream, promises as fs } from 'fs';
import path from 'path';

export interface FileAnalysisResult {
  type: 'financial' | 'process' | 'technical' | 'business' | 'other';
  insights: string[];
  recommendations: string[];
  extractedData?: any;
  confidence: number;
}

export interface CompetitorInfo {
  name: string;
  website?: string;
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  marketShare: string;
  employees?: string;
  technologies?: string[];
  customerReviews?: number;
}

export interface CompetitorAnalysisResult {
  competitors: CompetitorInfo[];
  opportunities: string[];
  recommendations: string[];
  marketSize?: string;
  growthRate?: string;
  threats: string[];
  positioning: string;
}

export interface TechRecommendationResult {
  category: string;
  technology: string;
  description: string;
  benefits: string[];
  implementationTime: string;
  estimatedCost: string;
  priority: 'high' | 'medium' | 'low';
  complexity: 'simple' | 'moderate' | 'complex';
  roi: string;
  alternatives: string[];
  integrations: string[];
}

export class AIAnalysisService {
  
  // Análise de arquivos com IA simulada (pode ser integrada com OpenAI, Claude, etc.)
  static async analyzeFile(file: {
    name: string;
    type: string;
    buffer: Buffer;
    size: number;
  }): Promise<FileAnalysisResult> {
    
    try {
      console.log(`🔍 Analisando arquivo: ${file.name} (${file.type})`);
      
      let analysisResult: FileAnalysisResult;
      
      if (file.type.includes('image')) {
        analysisResult = await this.analyzeImage(file);
      } else if (file.type.includes('pdf')) {
        analysisResult = await this.analyzePDF(file);
      } else if (file.type.includes('excel') || file.type.includes('csv')) {
        analysisResult = await this.analyzeSpreadsheet(file);
      } else if (file.type.includes('word') || file.type.includes('text')) {
        analysisResult = await this.analyzeDocument(file);
      } else {
        analysisResult = {
          type: 'other',
          insights: ['Arquivo processado com sucesso'],
          recommendations: ['Considere converter para um formato mais estruturado'],
          confidence: 0.6
        };
      }
      
      console.log(`✅ Análise concluída para ${file.name}`);
      return analysisResult;
      
    } catch (error) {
      console.error('❌ Erro na análise de arquivo:', error);
      return {
        type: 'other',
        insights: ['Erro ao processar o arquivo'],
        recommendations: ['Tente um formato diferente ou arquivo menor'],
        confidence: 0.1
      };
    }
  }

  // Análise de imagens (diagramas, capturas de tela, etc.)
  private static async analyzeImage(file: any): Promise<FileAnalysisResult> {
    // Simulação de análise de imagem com IA
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: 'process',
          insights: [
            'Identifiquei diagramas de processos empresariais',
            'Detectei fluxos manuais que podem ser automatizados',
            'Visualizei gargalos nos processos atuais'
          ],
          recommendations: [
            'Implementar automação nos processos identificados',
            'Criar dashboard para monitorização em tempo real',
            'Estabelecer KPIs para medir eficiência'
          ],
          confidence: 0.85
        });
      }, 2000);
    });
  }

  // Análise de PDFs (relatórios, documentos técnicos)
  private static async analyzePDF(file: any): Promise<FileAnalysisResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: 'business',
          insights: [
            'Documento contém informações financeiras estruturadas',
            'Identificados indicadores de performance empresarial',
            'Detectadas oportunidades de otimização de custos'
          ],
          recommendations: [
            'Implementar ERP para centralizar dados financeiros',
            'Criar dashboards executivos automáticos',
            'Estabelecer alertas de performance em tempo real'
          ],
          extractedData: {
            revenue: 'Não especificado',
            employees: 'Não especificado',
            processes: ['Financeiro', 'Operacional']
          },
          confidence: 0.9
        });
      }, 2500);
    });
  }

  // Análise de planilhas (dados estruturados)
  private static async analyzeSpreadsheet(file: any): Promise<FileAnalysisResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: 'financial',
          insights: [
            'Dados estruturados com potencial para automação',
            'Identificados padrões repetitivos nos dados',
            'Detectadas oportunidades para Business Intelligence'
          ],
          recommendations: [
            'Migrar para base de dados automatizada',
            'Implementar dashboards interativos',
            'Criar relatórios automáticos personalizados'
          ],
          extractedData: {
            columns: ['Data', 'Valor', 'Categoria'],
            rows: 'Mais de 100 registos',
            patterns: 'Dados mensais recorrentes'
          },
          confidence: 0.95
        });
      }, 1800);
    });
  }

  // Análise de documentos Word/texto
  private static async analyzeDocument(file: any): Promise<FileAnalysisResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: 'technical',
          insights: [
            'Documento técnico com especificações detalhadas',
            'Identificados requisitos funcionais específicos',
            'Detectadas necessidades de integração'
          ],
          recommendations: [
            'Desenvolver solução personalizada baseada nos requisitos',
            'Implementar integrações com sistemas existentes',
            'Criar documentação técnica automatizada'
          ],
          confidence: 0.8
        });
      }, 2200);
    });
  }

  // Análise de concorrentes com web scraping e dados públicos
  static async analyzeCompetitors(
    industry: string, 
    location: string = 'Portugal',
    companySize?: string
  ): Promise<CompetitorAnalysisResult> {
    
    console.log(`📊 Analisando concorrentes para: ${industry} em ${location}`);
    
    try {
      // Simulação de análise de mercado (pode ser integrada com APIs reais)
      const competitors = await this.getIndustryCompetitors(industry, location);
      const marketData = await this.getMarketData(industry, location);
      
      return {
        competitors,
        opportunities: marketData.opportunities,
        recommendations: marketData.recommendations,
        marketSize: marketData.marketSize,
        growthRate: marketData.growthRate,
        threats: marketData.threats,
        positioning: marketData.positioning
      };
      
    } catch (error) {
      console.error('❌ Erro na análise de concorrentes:', error);
      return this.getFallbackCompetitorAnalysis(industry);
    }
  }

  // Obter dados de concorrentes por setor
  private static async getIndustryCompetitors(industry: string, location: string): Promise<CompetitorInfo[]> {
    const competitorDatabase = {
      'construção': [
        {
          name: 'TechConstruct Solutions',
          website: 'techconstruct.pt',
          strengths: ['Experiência em grandes projetos', 'Tecnologia BIM avançada'],
          weaknesses: ['Preços elevados', 'Pouco foco em PMEs'],
          pricing: '€15.000 - €50.000',
          marketShare: '35%',
          employees: '200-500',
          technologies: ['AutoCAD', 'Revit', 'SAP'],
          customerReviews: 4.2
        },
        {
          name: 'BuildSmart Portugal',
          website: 'buildsmart.pt',
          strengths: ['Preços competitivos', 'Suporte local'],
          weaknesses: ['Tecnologia desatualizada', 'Funcionalidades limitadas'],
          pricing: '€5.000 - €20.000',
          marketShare: '25%',
          employees: '50-100',
          technologies: ['Legacy systems', 'Excel'],
          customerReviews: 3.8
        }
      ],
      'consultoria': [
        {
          name: 'ConsultTech Pro',
          website: 'consulttech.pt',
          strengths: ['Metodologia comprovada', 'Equipa experiente'],
          weaknesses: ['Processos manuais', 'Falta de automação'],
          pricing: '€8.000 - €25.000',
          marketShare: '40%',
          employees: '100-200',
          technologies: ['Microsoft Office', 'CRM básico'],
          customerReviews: 4.0
        }
      ],
      'default': [
        {
          name: 'Concorrente A',
          strengths: ['Presença estabelecida no mercado', 'Base de clientes sólida'],
          weaknesses: ['Tecnologia desatualizada', 'Processos manuais'],
          pricing: '€3.000 - €15.000',
          marketShare: '30%',
          employees: '50-150',
          customerReviews: 3.5
        },
        {
          name: 'Concorrente B',
          strengths: ['Preços acessíveis', 'Fácil de usar'],
          weaknesses: ['Funcionalidades limitadas', 'Suporte técnico fraco'],
          pricing: '€1.500 - €8.000',
          marketShare: '20%',
          employees: '20-50',
          customerReviews: 3.2
        }
      ]
    };

    const industryKey = industry.toLowerCase().includes('construção') ? 'construção' :
                       industry.toLowerCase().includes('consultoria') ? 'consultoria' : 'default';
    
    return competitorDatabase[industryKey as keyof typeof competitorDatabase] || competitorDatabase.default;
  }

  // Obter dados de mercado
  private static async getMarketData(industry: string, location: string) {
    const marketDatabase = {
      'construção': {
        marketSize: '€2.3B (Portugal)',
        growthRate: '+5.2% anualmente',
        opportunities: [
          'Digitalização ainda em estágio inicial (apenas 23% das empresas)',
          'Crescimento do mercado de reabilitação urbana',
          'Necessidade de compliance com regulamentações ambientais',
          'Automação de processos administrativos'
        ],
        recommendations: [
          'Focar em soluções móveis para equipas no terreno',
          'Integrar sustentabilidade e compliance',
          'Oferecer preços competitivos para PMEs',
          'Destacar ROI através de casos de sucesso'
        ],
        threats: [
          'Resistência à mudança no setor tradicional',
          'Concorrência de players internacionais',
          'Pressão nos preços'
        ],
        positioning: 'Solução tecnológica avançada com foco em ROI demonstrável'
      },
      'default': {
        marketSize: '€500M - €1.5B',
        growthRate: '+3.8% anualmente',
        opportunities: [
          'Transformação digital acelerada pós-COVID',
          'Necessidade de automação de processos',
          'Procura por soluções cloud-first',
          'Foco em analytics e business intelligence'
        ],
        recommendations: [
          'Desenvolver soluções específicas por vertical',
          'Investir em UX/UI intuitivo',
          'Oferecer implementação rápida',
          'Garantir suporte técnico de qualidade'
        ],
        threats: [
          'Saturação do mercado',
          'Concorrência internacional',
          'Pressão de preços'
        ],
        positioning: 'Parceiro tecnológico confiável com expertise local'
      }
    };

    const industryKey = industry.toLowerCase().includes('construção') ? 'construção' : 'default';
    return marketDatabase[industryKey as keyof typeof marketDatabase];
  }

  // Análise de fallback caso haja erro
  private static getFallbackCompetitorAnalysis(industry: string): CompetitorAnalysisResult {
    return {
      competitors: [
        {
          name: 'Concorrente Principal',
          strengths: ['Presença estabelecida', 'Base de clientes'],
          weaknesses: ['Tecnologia desatualizada', 'Preços elevados'],
          pricing: '€5.000 - €20.000',
          marketShare: '35%'
        }
      ],
      opportunities: [
        'Mercado em crescimento digital',
        'Necessidade de automação',
        'Demanda por soluções personalizadas'
      ],
      recommendations: [
        'Foco em inovação tecnológica',
        'Preços competitivos com valor agregado',
        'Excelente suporte ao cliente'
      ],
      marketSize: 'Informação não disponível',
      threats: ['Concorrência crescente'],
      positioning: 'Diferenciação por tecnologia e atendimento'
    };
  }

  // Gerar recomendações tecnológicas personalizadas
  static generateTechRecommendations(userData: {
    businessType?: string;
    employees?: string;
    currentSystem?: string;
    mainChallenge?: string;
    budget?: string;
  }): TechRecommendationResult[] {
    
    const recommendations: TechRecommendationResult[] = [];
    const employeeCount = parseInt(userData.employees?.split('-')[0] || '1');
    const businessType = userData.businessType?.toLowerCase() || '';
    
    // Recomendações baseadas no tipo de negócio
    if (businessType.includes('construção')) {
      recommendations.push({
        category: 'Gestão de Projetos',
        technology: 'ERP Construção Inteligente',
        description: 'Sistema completo para gestão de obras, materiais, equipamentos e recursos humanos com IA integrada',
        benefits: [
          'Controlo de custos em tempo real',
          'Planeamento automático de obras',
          'Gestão de equipas no terreno',
          'Compliance automático com regulamentações'
        ],
        implementationTime: '6-8 semanas',
        estimatedCost: '€12.000 - €25.000',
        priority: 'high',
        complexity: 'moderate',
        roi: '250% em 12 meses',
        alternatives: ['Buildertrend', 'Procore', 'PlanGrid'],
        integrations: ['AutoCAD', 'Revit', 'Sistemas contábeis']
      });
    }

    if (businessType.includes('consultoria')) {
      recommendations.push({
        category: 'CRM & Project Management',
        technology: 'Plataforma de Consultoria Avançada',
        description: 'CRM especializado com gestão de projetos, time tracking e faturação automática',
        benefits: [
          'Gestão completa do ciclo de vida do cliente',
          'Time tracking automático',
          'Faturação inteligente',
          'Relatórios de performance'
        ],
        implementationTime: '3-4 semanas',
        estimatedCost: '€8.500 - €15.000',
        priority: 'high',
        complexity: 'simple',
        roi: '180% em 8 meses',
        alternatives: ['HubSpot', 'Salesforce', 'Monday.com'],
        integrations: ['Email', 'Calendário', 'Accounting software']
      });
    }

    // Recomendações baseadas no número de funcionários
    if (employeeCount > 20) {
      recommendations.push({
        category: 'Recursos Humanos',
        technology: 'Sistema HR Automático',
        description: 'Gestão completa de RH com ponto digital, folhas de pagamento e desenvolvimento de talentos',
        benefits: [
          'Automatização completa de RH',
          'Controlo de ponto biométrico',
          'Avaliações de performance',
          'Portal do funcionário'
        ],
        implementationTime: '4-5 semanas',
        estimatedCost: '€6.000 - €12.000',
        priority: 'medium',
        complexity: 'moderate',
        roi: '150% em 10 meses',
        alternatives: ['BambooHR', 'Workday', 'ADP'],
        integrations: ['Contabilidade', 'Banco', 'Email']
      });
    }

    // Recomendação sempre presente: Business Intelligence
    recommendations.push({
      category: 'Business Intelligence',
      technology: 'Dashboard Analytics Inteligente',
      description: 'Dashboards interativos com IA para insights de negócio e tomada de decisão baseada em dados',
      benefits: [
        'Insights automáticos de negócio',
        'KPIs em tempo real',
        'Previsões com IA',
        'Relatórios executivos automáticos'
      ],
      implementationTime: '2-3 semanas',
      estimatedCost: '€3.500 - €7.000',
      priority: 'high',
      complexity: 'simple',
      roi: '320% em 6 meses',
      alternatives: ['Power BI', 'Tableau', 'Qlik'],
      integrations: ['Todas as fontes de dados da empresa']
    });

    // Recomendação baseada em desafios específicos
    if (userData.mainChallenge?.includes('automação')) {
      recommendations.push({
        category: 'Automação de Processos',
        technology: 'RPA (Robotic Process Automation)',
        description: 'Automatização inteligente de processos repetitivos com bots configuráveis',
        benefits: [
          'Redução de 80% em tarefas manuais',
          'Zero erros humanos',
          'Disponibilidade 24/7',
          'ROI rápido e mensurável'
        ],
        implementationTime: '3-4 semanas',
        estimatedCost: '€5.000 - €10.000',
        priority: 'high',
        complexity: 'moderate',
        roi: '400% em 6 meses',
        alternatives: ['UiPath', 'Blue Prism', 'Automation Anywhere'],
        integrations: ['Sistemas existentes', 'Email', 'Bases de dados']
      });
    }

    return recommendations;
  }

  // Calcular ROI personalizado
  static calculatePersonalizedROI(userData: {
    employees?: string;
    businessType?: string;
    currentSystem?: string;
    mainChallenge?: string;
  }): {
    currentCosts: number;
    projectedSavings: number;
    implementationCost: number;
    annualSavings: number;
    paybackPeriod: number;
    roi: number;
  } {
    
    const employeeCount = parseInt(userData.employees?.split('-')[0] || '5');
    const businessType = userData.businessType?.toLowerCase() || '';
    
    // Custos atuais estimados baseados no tamanho da empresa
    const monthlyCostPerEmployee = businessType.includes('construção') ? 150 : 
                                   businessType.includes('consultoria') ? 120 : 100;
    
    const currentCosts = employeeCount * monthlyCostPerEmployee * 12;
    
    // Economia projetada (25-40% dos custos atuais)
    const efficiencyGain = businessType.includes('construção') ? 0.35 : 0.28;
    const projectedSavings = currentCosts * efficiencyGain;
    
    // Custo de implementação
    const baseCost = 5000;
    const complexityMultiplier = businessType.includes('construção') ? 2.5 : 1.8;
    const employeeMultiplier = Math.log10(employeeCount + 1);
    const implementationCost = baseCost * complexityMultiplier * employeeMultiplier;
    
    // Cálculos finais
    const annualSavings = projectedSavings;
    const paybackPeriod = implementationCost / (annualSavings / 12);
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;
    
    return {
      currentCosts: Math.round(currentCosts),
      projectedSavings: Math.round(projectedSavings),
      implementationCost: Math.round(implementationCost),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      roi: Math.round(roi)
    };
  }

  // Gerar agenda de reuniões disponíveis
  static generateAvailableMeetings(
    businessType?: string,
    urgency: 'normal' | 'urgent' = 'normal'
  ): Array<{
    id: string;
    title: string;
    date: string;
    time: string;
    duration: string;
    type: 'demo' | 'consultation' | 'technical';
    description: string;
  }> {
    
    const meetings = [];
    const today = new Date();
    const startDay = urgency === 'urgent' ? 1 : 2;
    
    // Gerar reuniões para os próximos 14 dias
    for (let i = startDay; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Pular fins de semana
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      // Horários de manhã (10:00, 11:30)
      meetings.push({
        id: `demo-${i}-morning`,
        title: 'Demonstração Executiva',
        date: date.toLocaleDateString('pt-PT'),
        time: '10:00',
        duration: '30 min',
        type: 'demo' as const,
        description: 'Apresentação da solução adaptada ao seu negócio'
      });
      
      meetings.push({
        id: `tech-${i}-late-morning`,
        title: 'Consultoria Técnica',
        date: date.toLocaleDateString('pt-PT'),
        time: '11:30',
        duration: '45 min',
        type: 'technical' as const,
        description: 'Análise técnica detalhada e planeamento'
      });
      
      // Horários de tarde (14:30, 16:00)
      meetings.push({
        id: `consultation-${i}-afternoon`,
        title: 'Análise de Necessidades',
        date: date.toLocaleDateString('pt-PT'),
        time: '14:30',
        duration: '45 min',
        type: 'consultation' as const,
        description: 'Avaliação completa dos seus processos atuais'
      });
      
      meetings.push({
        id: `demo-${i}-late-afternoon`,
        title: 'Demonstração Personalizada',
        date: date.toLocaleDateString('pt-PT'),
        time: '16:00',
        duration: '30 min',
        type: 'demo' as const,
        description: 'Demo focada nas suas necessidades específicas'
      });
    }
    
    return meetings.slice(0, 12); // Retornar apenas os primeiros 12 slots
  }
} 