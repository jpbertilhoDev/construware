import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PieChart, BarChart3, ArrowUpRight, ArrowDownRight, Home, Settings, FileText, Users, Calculator, Target, Bell, Search, Filter, Calendar, Briefcase, Award, TrendingUp as TrendUp } from 'lucide-react';

const FinanceDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('Mensal');
  const [revenue, setRevenue] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const revenueTimer = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 500));
    }, 3000);
    const notificationTimer = setInterval(() => {
      setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 2) - 1));
    }, 10000);
    
    return () => {
      clearInterval(timer);
      clearInterval(revenueTimer);
      clearInterval(notificationTimer);
    };
  }, []);

  const metrics = [
    { 
      label: "Receita Total", 
      value: `€${(45780 + revenue).toLocaleString()}`, 
      change: "+12.5%", 
      trend: "up",
      icon: DollarSign,
      color: "text-green-500" 
    },
    { 
      label: "Despesas", 
      value: "€18.450", 
      change: "-8.2%", 
      trend: "down",
      icon: CreditCard,
      color: "text-red-500" 
    },
    { 
      label: "Lucro Líquido", 
      value: "€27.330", 
      change: "+18.7%", 
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-500" 
    },
    { 
      label: "ROI", 
      value: "24.8%", 
      change: "+5.3%", 
      trend: "up",
      icon: PieChart,
      color: "text-purple-500" 
    }
  ];

  const transactions = [
    { type: "Receita", desc: "Pagamento Cliente A", value: "+€2.500", time: "09:15", status: "confirmed", category: "Vendas", client: "TechCorp" },
    { type: "Despesa", desc: "Fornecedor Tech", value: "-€890", time: "08:30", status: "pending", category: "Operações", client: "CloudHost" },
    { type: "Receita", desc: "Projeto Web", value: "+€1.200", time: "07:45", status: "confirmed", category: "Desenvolvimento", client: "StartupXYZ" },
    { type: "Despesa", desc: "Marketing Digital", value: "-€450", time: "07:20", status: "confirmed", category: "Marketing", client: "AdTech" },
    { type: "Receita", desc: "Consultoria", value: "+€800", time: "06:50", status: "confirmed", category: "Serviços", client: "ConsultPro" }
  ];

  const categories = [
    { name: "Desenvolvimento", amount: 15800, percentage: 45, color: "bg-blue-500", trend: "+12%" },
    { name: "Marketing", amount: 8900, percentage: 25, color: "bg-green-500", trend: "+8%" },
    { name: "Operações", amount: 6200, percentage: 18, color: "bg-orange-500", trend: "-3%" },
    { name: "Outros", amount: 4200, percentage: 12, color: "bg-purple-500", trend: "+5%" }
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', active: true },
    { id: 'transactions', icon: CreditCard, label: 'Transações', count: 24 },
    { id: 'reports', icon: FileText, label: 'Relatórios' },
    { id: 'analytics', icon: BarChart3, label: 'Análises' },
    { id: 'budgets', icon: Target, label: 'Orçamentos' },
    { id: 'clients', icon: Users, label: 'Clientes', count: 156 },
    { id: 'calculator', icon: Calculator, label: 'Calculadora' },
    { id: 'settings', icon: Settings, label: 'Definições' }
  ];

  const recentClients = [
    { name: "TechCorp Lda", amount: "€2.500", status: "paid", lastPayment: "Hoje", projects: 3, since: "2023" },
    { name: "StartupXYZ", amount: "€1.200", status: "pending", lastPayment: "2 dias", projects: 1, since: "2024" },
    { name: "WebSolutions", amount: "€800", status: "paid", lastPayment: "1 dia", projects: 2, since: "2023" }
  ];

  const monthlyGoals = [
    { label: "Receita Meta", current: 45780 + revenue, target: 50000, percentage: ((45780 + revenue) / 50000) * 100 },
    { label: "Novos Clientes", current: 12, target: 15, percentage: (12 / 15) * 100 },
    { label: "Margem Lucro", current: 24.8, target: 30, percentage: (24.8 / 30) * 100 }
  ];

  const reports = [
    { name: "Relatório Financeiro Q4", date: "31/10/2024", type: "PDF", downloads: 12, status: "recent" },
    { name: "Análise de Fluxo de Caixa", date: "28/10/2024", type: "Excel", downloads: 8, status: "popular" },
    { name: "Balanço Patrimonial", date: "25/10/2024", type: "PDF", downloads: 15, status: "recent" }
  ];

  const budgets = [
    { category: "Marketing", allocated: 5000, spent: 3200, remaining: 1800, percentage: 64 },
    { category: "Desenvolvimento", allocated: 12000, spent: 8500, remaining: 3500, percentage: 71 },
    { category: "Operações", allocated: 8000, spent: 6200, remaining: 1800, percentage: 78 }
  ];

  const renderDashboard = () => (
    <>
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white/5 border-white/10 p-2">
            <CardContent className="p-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className={`w-3 h-3 ${metric.color}`} />
                  <div>
                    <p className="text-xs text-gray-400">{metric.label}</p>
                    <p className="font-bold text-sm text-white">{metric.value}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.trend === 'up' ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  <span className="text-xs">{metric.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Categories and Goals */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-purple-400 flex items-center gap-2">
              <BarChart3 className="w-3 h-3" />
              Receita por Categoria
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">{category.name}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-400">€{category.amount.toLocaleString()}</span>
                      <span className="text-xs text-green-400">{category.trend}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white/10 rounded-full h-1">
                      <div 
                        className={`${category.color} h-1 rounded-full transition-all duration-1000`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-purple-400 flex items-center gap-2">
              <Target className="w-3 h-3" />
              Metas do Mês
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {monthlyGoals.map((goal, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">{goal.label}</span>
                    <span className="text-xs text-gray-400">{Math.round(goal.percentage)}%</span>
                  </div>
                  <Progress value={goal.percentage} className="h-1" />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{typeof goal.current === 'number' && goal.current > 1000 ? `€${goal.current.toLocaleString()}` : goal.current}</span>
                    <span>{typeof goal.target === 'number' && goal.target > 1000 ? `€${goal.target.toLocaleString()}` : goal.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions and Clients */}
      <div className="grid grid-cols-2 gap-2">
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-purple-400 flex items-center justify-between">
              <span>Transações Recentes</span>
              <Filter className="w-3 h-3 text-gray-400 cursor-pointer hover:text-purple-400" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-1">
              {transactions.slice(0, 4).map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-1 bg-white/5 rounded hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      transaction.status === 'confirmed' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <p className="text-xs font-medium">{transaction.desc}</p>
                      <p className="text-xs text-gray-400">{transaction.category} • {transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-bold ${
                      transaction.value.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {transaction.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-purple-400 flex items-center gap-2">
              <Users className="w-3 h-3" />
              Clientes Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {recentClients.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-1 hover:bg-white/5 rounded cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      client.status === 'paid' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <p className="text-xs font-medium">{client.name}</p>
                      <p className="text-xs text-gray-400">Último: {client.lastPayment}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-green-400">{client.amount}</p>
                    <Badge className={`text-xs px-1 py-0 ${
                      client.status === 'paid' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {client.status === 'paid' ? 'Pago' : 'Pendente'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderTransactions = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Gestão de Transações</h3>
        <Badge className="bg-purple-500/20 text-purple-400 text-xs">24 Hoje</Badge>
      </div>
      
      {transactions.map((transaction, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  transaction.status === 'confirmed' ? 'bg-green-400' : 'bg-yellow-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{transaction.desc}</h4>
                  <p className="text-xs text-gray-400">Cliente: {transaction.client}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-bold text-sm ${
                  transaction.value.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {transaction.value}
                </div>
                <Badge className={`text-xs ${
                  transaction.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {transaction.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{transaction.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{transaction.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{transaction.type}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderClients = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Base de Clientes</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">156 Ativos</Badge>
      </div>
      
      {recentClients.map((client, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  client.status === 'paid' ? 'bg-green-400' : 'bg-yellow-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{client.name}</h4>
                  <p className="text-xs text-gray-400">Cliente desde {client.since}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{client.amount}</div>
                <Badge className={`text-xs ${
                  client.status === 'paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {client.status === 'paid' ? 'Em Dia' : 'Pendente'}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{client.lastPayment}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{client.projects} projetos</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">Premium</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderReports = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Relatórios Financeiros</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">3 Novos</Badge>
      </div>
      
      {reports.map((report, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-purple-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{report.name}</h4>
                  <p className="text-xs text-gray-400">{report.date} • {report.downloads} downloads</p>
                </div>
              </div>
              <Badge className={`text-xs ${
                report.status === 'recent' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {report.type}
              </Badge>
            </div>
            <div className="flex justify-between text-xs">
              <button className="text-purple-400 hover:text-purple-300">Descarregar</button>
              <button className="text-blue-400 hover:text-blue-300">Visualizar</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderBudgets = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Orçamentos</h3>
        <Badge className="bg-orange-500/20 text-orange-400 text-xs">3 Categorias</Badge>
      </div>
      
      {budgets.map((budget, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-3 h-3 text-purple-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{budget.category}</h4>
                  <p className="text-xs text-gray-400">€{budget.spent.toLocaleString()} de €{budget.allocated.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{budget.percentage}%</div>
                <div className="text-xs text-green-400">€{budget.remaining.toLocaleString()} restante</div>
              </div>
            </div>
            <Progress value={budget.percentage} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Análises Financeiras</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">Tempo Real</Badge>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendUp className="w-3 h-3 text-purple-400" />
                <span className="text-sm font-bold text-white">Crescimento Mensal</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">+18.7%</div>
                <div className="text-xs text-gray-400">vs mês anterior</div>
              </div>
            </div>
            <Progress value={87} className="h-2" />
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <DollarSign className="w-3 h-3 text-purple-400" />
                <span className="text-sm font-bold text-white">Margem de Lucro</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-blue-400">59.6%</div>
                <div className="text-xs text-gray-400">Excelente</div>
              </div>
            </div>
            <Progress value={60} className="h-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCalculator = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Calculadora Financeira</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">Ferramenta</Badge>
      </div>
      
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-3">
          <div className="grid grid-cols-3 gap-2 mb-3">
            {['7','8','9','4','5','6','1','2','3'].map((num) => (
              <button key={num} className="bg-white/10 hover:bg-white/20 text-white text-sm p-2 rounded">
                {num}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-white/10 hover:bg-white/20 text-white text-sm p-2 rounded">0</button>
            <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-sm p-2 rounded">+</button>
            <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-sm p-2 rounded">=</button>
          </div>
          <div className="mt-3 p-2 bg-black/20 rounded text-right">
            <span className="text-white font-mono">€0.00</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-purple-400">Definições Financeiras</h3>
        <Badge className="bg-gray-500/20 text-gray-400 text-xs">Admin</Badge>
      </div>
      
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-white">Moeda Padrão</span>
            </div>
            <select className="bg-white/10 text-white text-xs p-1 rounded">
              <option>EUR (€)</option>
              <option>USD ($)</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-white">Alertas Financeiros</span>
            </div>
            <div className="w-8 h-4 bg-purple-500 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-white">Relatórios Automáticos</span>
            </div>
            <button className="text-xs text-purple-400">Configurar</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'transactions': return renderTransactions();
      case 'clients': return renderClients();
      case 'reports': return renderReports();
      case 'budgets': return renderBudgets();
      case 'analytics': return renderAnalytics();
      case 'calculator': return renderCalculator();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg text-white text-xs overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-16 bg-black/20 border-r border-white/10 flex flex-col">
        <div className="p-2 border-b border-white/10">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 py-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`relative p-2 mx-1 mb-1 rounded cursor-pointer transition-all ${
                activeTab === item.id ? 'bg-purple-500/20 border border-purple-500/30' : 'hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-4 h-4 mx-auto ${activeTab === item.id ? 'text-purple-400' : 'text-gray-400'}`} />
              {item.count && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{item.count > 99 ? '99+' : item.count}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-2 border-t border-white/10">
          <div className="relative p-2 hover:bg-white/5 rounded cursor-pointer">
            <Bell className="w-4 h-4 text-gray-400 mx-auto" />
            {notifications > 0 && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">{notifications}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-bold text-sm text-purple-400">FinanceHub</h3>
              <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString('pt-PT')}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1">
              <Search className="w-3 h-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Pesquisar..."
                className="bg-transparent text-xs text-white placeholder-gray-400 border-none outline-none w-20"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {['Diário', 'Mensal', 'Anual'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-2 py-1 rounded text-xs transition-all ${
                    selectedPeriod === period 
                      ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">FH</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default FinanceDashboard;
