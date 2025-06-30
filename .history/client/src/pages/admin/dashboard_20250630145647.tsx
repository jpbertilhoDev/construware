import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Building, 
  DollarSign, 
  Activity, 
  LogOut,
  Settings,
  BarChart3,
  Shield
} from 'lucide-react';

export default function AdminDashboard() {
  const { user, logout, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/admin/login';
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    window.location.href = '/admin/login';
  };

  const stats = [
    {
      title: 'Total de Clientes',
      value: '248',
      change: '+12%',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Projetos Ativos',
      value: '42',
      change: '+3%',
      icon: Building,
      color: 'text-green-500'
    },
    {
      title: 'Receita Mensal',
      value: '€18.500',
      change: '+18%',
      icon: DollarSign,
      color: 'text-yellow-500'
    },
    {
      title: 'Taxa de Conversão',
      value: '3.2%',
      change: '+0.5%',
      icon: Activity,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Construware Admin</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                {user.role}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
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
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Bem-vindo, {user.name}!
          </h2>
          <p className="text-slate-400">
            Aqui está um resumo da atividade da sua empresa hoje.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-400 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-white mb-1">
                          {stat.value}
                        </p>
                        <p className="text-sm text-green-400">
                          {stat.change} vs mês anterior
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center ${stat.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Ações Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700">
                <Users className="w-4 h-4 mr-2" />
                Gerenciar Clientes
              </Button>
              <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700">
                <Building className="w-4 h-4 mr-2" />
                Ver Projetos
              </Button>
              <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:bg-slate-700">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Novo cliente registrado</span>
                  <span className="text-slate-500">2h atrás</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Projeto finalizado</span>
                  <span className="text-slate-500">4h atrás</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Pagamento recebido</span>
                  <span className="text-slate-500">6h atrás</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
