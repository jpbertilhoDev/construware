import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
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
  TrendingUp,
  TrendingDown,
  Calendar,
  Mail,
  Phone,
  Code,
  Server,
  GitBranch,
  Target,
  Award,
  PieChart,
  LineChart,
  UserCheck,
  Bug,
  Rocket,
  Heart,
  Loader2,
  Bell,
  Search,
  Menu,
  X,
  User,
  Home,
  HelpCircle,
  Zap
} from 'lucide-react';

export default function AdminDashboard() {
  // All hooks must be called at the top level - ALWAYS
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [, navigate] = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock notifications data - moved before useEffect
  const notifications = [
    {
      id: 1,
      title: "Novo projeto aprovado",
      message: "Portal E-commerce Premium foi aprovado para desenvolvimento",
      time: "2h atrás",
      type: "success",
      unread: true
    },
    {
      id: 2,
      title: "Sistema atualizado",
      message: "Atualização de segurança aplicada com sucesso",
      time: "5h atrás",
      type: "info",
      unread: true
    },
    {
      id: 3,
      title: "Backup concluído",
      message: "Backup automático dos dados realizado",
      time: "1d atrás",
      type: "success",
      unread: false
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Redirect to login if not authenticated (only after loading is complete)
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (showNotifications || showProfileMenu) {
        setShowNotifications(false);
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showNotifications, showProfileMenu]);

  // Handler functions
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  // Show loading while auth state is being determined
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Carregando dashboard...</span>
        </div>
      </div>
    );
  }

  // If not authenticated after loading, don't render anything (redirect will happen)
  if (!isAuthenticated || !user) {
    return null;
  }

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
      {/* Enhanced Header */}
      <header className="glass-effect border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building2 className="w-6 h-6 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Construware</h1>
                <p className="text-xs text-orange-300 flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  Painel Administrativo
                </p>
              </div>
            </div>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1 bg-white/5 rounded-2xl p-1">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-xl transition-all duration-300 ${activeTab === 'overview' ? 'bg-orange-500/20 text-orange-300 shadow-lg' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                onClick={() => setActiveTab('overview')}
              >
                <Home className="w-4 h-4 mr-2" />
                Overview
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-xl transition-all duration-300 ${activeTab === 'clients' ? 'bg-orange-500/20 text-orange-300 shadow-lg' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                onClick={() => setActiveTab('clients')}
              >
                <Users className="w-4 h-4 mr-2" />
                Clientes
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-xl transition-all duration-300 ${activeTab === 'projects' ? 'bg-orange-500/20 text-orange-300 shadow-lg' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
                onClick={() => setActiveTab('projects')}
              >
                <Code className="w-4 h-4 mr-2" />
                Projetos
              </Button>
            </nav>
            
            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Search - Desktop */}
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 w-48"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNotifications(!showNotifications);
                    setShowProfileMenu(false);
                  }}
                  className="relative text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {unreadCount}
                    </span>
                  )}
                </Button>
                
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-80 glass-effect border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <h3 className="font-semibold text-white">Notificações</h3>
                      <p className="text-xs text-slate-400">{unreadCount} não lidas</p>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`p-4 border-b border-white/5 hover:bg-white/5 transition-all duration-200 ${notification.unread ? 'bg-orange-500/5' : ''}`}>
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-orange-500' : 'bg-slate-600'}`} />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-white">{notification.title}</p>
                              <p className="text-xs text-slate-400 mt-1">{notification.message}</p>
                              <p className="text-xs text-slate-500 mt-2">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-white/10">
                      <Button variant="ghost" size="sm" className="w-full text-orange-300 hover:text-orange-200">
                        Ver todas as notificações
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* User Profile Menu */}
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                  className="flex items-center space-x-3 hover:bg-white/10 rounded-xl transition-all duration-300 p-2"
                >
                  <Avatar className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400">
                    <AvatarFallback className="text-white font-bold text-sm">
                      {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.role}</p>
                  </div>
                </Button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 mt-2 w-64 glass-effect border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400">
                          <AvatarFallback className="text-white font-bold">
                            {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{user.name}</p>
                          <p className="text-xs text-slate-400">{user.email}</p>
                          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mt-1">
                            {user.role}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-white hover:bg-white/10">
                        <User className="w-4 h-4 mr-3" />
                        Meu Perfil
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-white hover:bg-white/10">
                        <Settings className="w-4 h-4 mr-3" />
                        Configurações
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full justify-start text-slate-300 hover:text-white hover:bg-white/10">
                        <HelpCircle className="w-4 h-4 mr-3" />
                        Ajuda & Suporte
                      </Button>
                      <div className="border-t border-white/10 mt-2 pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleLogout}
                          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sair
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-slate-300 hover:text-white hover:bg-white/10"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start ${activeTab === 'overview' ? 'bg-orange-500/20 text-orange-300' : 'text-slate-300'}`}
                onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false); }}
              >
                <Home className="w-4 h-4 mr-3" />
                Overview
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start ${activeTab === 'clients' ? 'bg-orange-500/20 text-orange-300' : 'text-slate-300'}`}
                onClick={() => { setActiveTab('clients'); setIsMobileMenuOpen(false); }}
              >
                <Users className="w-4 h-4 mr-3" />
                Clientes
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start ${activeTab === 'projects' ? 'bg-orange-500/20 text-orange-300' : 'text-slate-300'}`}
                onClick={() => { setActiveTab('projects'); setIsMobileMenuOpen(false); }}
              >
                <Code className="w-4 h-4 mr-3" />
                Projetos
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start ${activeTab === 'financial' ? 'bg-orange-500/20 text-orange-300' : 'text-slate-300'}`}
                onClick={() => { setActiveTab('financial'); setIsMobileMenuOpen(false); }}
              >
                <DollarSign className="w-4 h-4 mr-3" />
                Financeiro
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start ${activeTab === 'team' ? 'bg-orange-500/20 text-orange-300' : 'text-slate-300'}`}
                onClick={() => { setActiveTab('team'); setIsMobileMenuOpen(false); }}
              >
                <UserCheck className="w-4 h-4 mr-3" />
                Equipe
              </Button>
              
              {/* Mobile Search */}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                />
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Mobile Tab Navigation */}
          <div className="lg:hidden">
            <TabsList className="grid w-full grid-cols-5 bg-white/5 border border-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
                <BarChart3 className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="clients" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
                <Users className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Clientes</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
                <Code className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Projetos</span>
              </TabsTrigger>
              <TabsTrigger value="financial" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
                <DollarSign className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Financeiro</span>
              </TabsTrigger>
              <TabsTrigger value="team" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-300">
                <UserCheck className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Equipe</span>
              </TabsTrigger>
            </TabsList>
          </div>

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
