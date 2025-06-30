import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  Building2, 
  DollarSign, 
  Activity, 
  LogOut,
  Settings,
  BarChart3,
  Shield,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Mail,
  Phone,
  FileText,
  Code,
  Server,
  Database,
  GitBranch,
  Zap,
  Target,
  Award,
  Briefcase,
  CreditCard,
  PieChart,
  LineChart,
  UserCheck,
  UserX,
  Timer,
  Bug,
  Rocket,
  Coffee,
  Heart
} from 'lucide-react';

export default function AdminDashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/admin/login';
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  // Mock data - Em produção, isso viria de APIs
  const stats = [
    {
      title: 'Clientes Ativos',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'from-orange-500 to-orange-400'
    },
    {
      title: 'Projetos em Desenvolvimento',
      value: '42',
      change: '+8%',
      trend: 'up',
      icon: Code,
      color: 'from-blue-500 to-blue-400'
    },
    {
      title: 'Receita Mensal (MRR)',
      value: '€89.500',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-green-400'
    },
    {
      title: 'Taxa de Satisfação',
      value: '96.8%',
      change: '+2.1%',
      trend: 'up',
      icon: Heart,
      color: 'from-pink-500 to-pink-400'
    },
    {
      title: 'Issues Pendentes',
      value: '7',
      change: '-23%',
      trend: 'down',
      icon: Bug,
      color: 'from-red-500 to-red-400'
    },
    {
      title: 'Uptime Sistemas',
      value: '99.97%',
      change: '+0.02%',
      trend: 'up',
      icon: Server,
      color: 'from-purple-500 to-purple-400'
    }
  ];

  const projects = [
    {
      id: 1,
      name: 'Portal E-commerce Premium',
      client: 'TechCorp Lda',
      status: 'Em Desenvolvimento',
      progress: 68,
      team: 5,
      deadline: '2024-08-15',
      budget: 45000,
      used: 28500
    },
    {
      id: 2,
      name: 'App Mobile Gestão',
      client: 'StartupXYZ',
      status: 'Teste',
      progress: 85,
      team: 3,
      deadline: '2024-07-20',
      budget: 32000,
      used: 29000
    },
    {
      id: 3,
      name: 'Sistema CRM Avançado',
      client: 'MegaCorp SA',
      status: 'Produção',
      progress: 95,
      team: 7,
      deadline: '2024-07-05',
      budget: 78000,
      used: 76500
    }
  ];

  const clients = [
    {
      id: 1,
      name: 'João Silva',
      company: 'TechCorp Lda',
      email: 'joao@techcorp.pt',
      phone: '+351 912 345 678',
      status: 'Ativo',
      projects: 3,
      value: 15000,
      lastContact: '2024-06-28'
    },
    {
      id: 2,
      name: 'Maria Santos',
      company: 'StartupXYZ',
      email: 'maria@startupxyz.pt',
      phone: '+351 965 432 109',
      status: 'Ativo',
      projects: 1,
      value: 8500,
      lastContact: '2024-06-30'
    },
    {
      id: 3,
      name: 'Carlos Pereira',
      company: 'MegaCorp SA',
      email: 'carlos@megacorp.pt',
      phone: '+351 934 567 890',
      status: 'Pendente',
      projects: 2,
      value: 25000,
      lastContact: '2024-06-25'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Ana Costa',
      role: 'Frontend Developer',
      level: 'Sénior',
      projects: 2,
      commits: 127,
      performance: 95,
      status: 'Ativo'
    },
    {
      id: 2,
      name: 'Miguel Ferreira',
      role: 'Backend Developer', 
      level: 'Sénior',
      projects: 3,
      commits: 203,
      performance: 92,
      status: 'Ativo'
    },
    {
      id: 3,
      name: 'Sofia Rodrigues',
      role: 'UI/UX Designer',
      level: 'Júnior',
      projects: 2,
      commits: 45,
      performance: 88,
      status: 'Férias'
    }
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const variants = {
      'Ativo': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Pendente': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Em Desenvolvimento': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Teste': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Produção': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Férias': 'bg-orange-500/20 text-orange-300 border-orange-500/30'
    };
    return (
      <Badge className={`${variants[status as keyof typeof variants] || 'bg-gray-500/20 text-gray-300'} border`}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-orange-500/25">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Construware</h1>
                <p className="text-xs text-orange-300">Painel Administrativo</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                {user.role}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/5 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="clients" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
              <Users className="w-4 h-4 mr-2" />
              Clientes
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
              <Code className="w-4 h-4 mr-2" />
              Projetos
            </TabsTrigger>
            <TabsTrigger value="financial" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
              <DollarSign className="w-4 h-4 mr-2" />
              Financeiro
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
              <UserCheck className="w-4 h-4 mr-2" />
              Equipe
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-6">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                Bem-vindo, {user.name}! 👋
              </h2>
              <p className="text-slate-300">
                Resumo executivo da Construware em tempo real
              </p>
            </motion.div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const isPositive = stat.trend === 'up';
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="glass-effect border-white/10 hover:border-orange-500/30 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className={`flex items-center text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                            {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                            {stat.change}
                          </div>
                        </div>
                        <p className="text-sm font-medium text-slate-400 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {stat.value}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-orange-400" />
                    Faturamento (12 meses)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-slate-400">
                    📈 Gráfico de faturamento seria renderizado aqui
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-orange-400" />
                    Atividade Recente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">Projeto TechCorp finalizado</span>
                    </div>
                    <span className="text-slate-500">2h atrás</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">Novo cliente registrado</span>
                    </div>
                    <span className="text-slate-500">4h atrás</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-slate-300">Deploy em produção</span>
                    </div>
                    <span className="text-slate-500">6h atrás</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* CLIENTS TAB */}
          <TabsContent value="clients" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Gestão de Clientes</h3>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500">
                <Users className="w-4 h-4 mr-2" />
                Novo Cliente
              </Button>
            </div>

            <div className="grid gap-6">
              {clients.map((client) => (
                <Card key={client.id} className="glass-effect border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400">
                          <AvatarFallback className="text-white font-bold">
                            {client.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{client.name}</p>
                          <p className="text-sm text-slate-400">{client.company}</p>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-slate-300">
                          <Mail className="w-4 h-4 mr-2 text-orange-400" />
                          {client.email}
                        </div>
                        <div className="flex items-center text-sm text-slate-300">
                          <Phone className="w-4 h-4 mr-2 text-orange-400" />
                          {client.phone}
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <StatusBadge status={client.status} />
                        <div className="text-sm text-slate-400">
                          {client.projects} projeto(s) • €{client.value.toLocaleString()}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* PROJECTS TAB */}
          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Gestão de Projetos</h3>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500">
                <Code className="w-4 h-4 mr-2" />
                Novo Projeto
              </Button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="glass-effect border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">{project.name}</h4>
                            <p className="text-slate-400">{project.client}</p>
                          </div>
                          <StatusBadge status={project.status} />
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-400">Progresso</span>
                              <span className="text-white font-medium">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center text-slate-300">
                              <Users className="w-4 h-4 mr-2 text-orange-400" />
                              {project.team} membros
                            </div>
                            <div className="flex items-center text-slate-300">
                              <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                              {new Date(project.deadline).toLocaleDateString('pt-PT')}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h5 className="text-sm font-medium text-white mb-2">Orçamento</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Usado</span>
                              <span className="text-white">€{project.used.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Total</span>
                              <span className="text-white">€{project.budget.toLocaleString()}</span>
                            </div>
                            <Progress value={(project.used / project.budget) * 100} className="h-2" />
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                            <GitBranch className="w-4 h-4 mr-2" />
                            Repo
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 border-white/20 text-white hover:bg-white/10">
                            <Rocket className="w-4 h-4 mr-2" />
                            Deploy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FINANCIAL TAB */}
          <TabsContent value="financial" className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Gestão Financeira</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">+18%</Badge>
                  </div>
                  <p className="text-sm text-slate-400 mb-1">Receita Total</p>
                  <p className="text-2xl font-bold text-white">€247.800</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30">+5%</Badge>
                  </div>
                  <p className="text-sm text-slate-400 mb-1">Custos Operacionais</p>
                  <p className="text-2xl font-bold text-white">€89.200</p>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">64%</Badge>
                  </div>
                  <p className="text-sm text-slate-400 mb-1">Margem de Lucro</p>
                  <p className="text-2xl font-bold text-white">€158.600</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <PieChart className="w-5 h-5 mr-2 text-orange-400" />
                  Fluxo de Caixa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-slate-400">
                  💰 Gráfico de fluxo de caixa seria renderizado aqui
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TEAM TAB */}
          <TabsContent value="team" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Gestão de Equipe</h3>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500">
                <UserCheck className="w-4 h-4 mr-2" />
                Novo Membro
              </Button>
            </div>

            <div className="grid gap-6">
              {team.map((member) => (
                <Card key={member.id} className="glass-effect border-white/10 hover:border-orange-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400">
                          <AvatarFallback className="text-white font-bold">
                            {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{member.name}</p>
                          <p className="text-sm text-slate-400">{member.role}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Performance</span>
                          <span className="text-sm text-white font-medium">{member.performance}%</span>
                        </div>
                        <Progress value={member.performance} className="h-2" />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <StatusBadge status={member.status} />
                        <div className="text-sm text-slate-400">
                          {member.projects} projetos • {member.commits} commits
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <GitBranch className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Award className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
