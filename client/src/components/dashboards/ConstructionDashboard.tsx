import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Calendar, TrendingUp, AlertTriangle, CheckCircle, Home, Settings, FileText, BarChart3, MapPin, Truck, Bell, Search, Wrench, DollarSign, Clock, Award, Target, UserCheck } from 'lucide-react';

const ConstructionDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeProject, setActiveProject] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const notificationTimer = setInterval(() => {
      setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 2) - 1));
    }, 8000);
    return () => {
      clearInterval(timer);
      clearInterval(notificationTimer);
    };
  }, []);

  const projects = [
    { name: "Edifício Alameda", progress: 78, status: "Em Progresso", deadline: "15 Dez", budget: "€850.000", team: 12 },
    { name: "Condomínio Verde", progress: 45, status: "Atrasado", deadline: "22 Jan", budget: "€1.200.000", team: 18 },
    { name: "Centro Comercial", progress: 92, status: "Quase Pronto", deadline: "08 Nov", budget: "€2.100.000", team: 25 }
  ];

  const stats = [
    { label: "Obras Ativas", value: "12", icon: Building, color: "text-blue-500" },
    { label: "Equipes", value: "8", icon: Users, color: "text-green-500" },
    { label: "Prazo Médio", value: "85%", icon: Calendar, color: "text-orange-500" },
    { label: "Eficiência", value: "94%", icon: TrendingUp, color: "text-purple-500" }
  ];

  const materials = [
    { name: "Cimento", stock: 85, status: "ok", supplier: "CimPorto", lastOrder: "2 dias" },
    { name: "Ferro", stock: 23, status: "baixo", supplier: "MetalLux", lastOrder: "5 dias" },
    { name: "Tijolo", stock: 67, status: "ok", supplier: "CerâmicaTech", lastOrder: "1 dia" }
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', active: true },
    { id: 'projects', icon: Building, label: 'Projetos', count: 12 },
    { id: 'teams', icon: Users, label: 'Equipas', count: 8 },
    { id: 'materials', icon: Truck, label: 'Materiais' },
    { id: 'reports', icon: FileText, label: 'Relatórios' },
    { id: 'analytics', icon: BarChart3, label: 'Análises' },
    { id: 'settings', icon: Settings, label: 'Definições' }
  ];

  const recentActivities = [
    { time: "08:30", action: "Nova obra iniciada", project: "Edifício Alameda", type: "start" },
    { time: "09:15", action: "Material entregue", project: "Centro Comercial", type: "delivery" },
    { time: "10:45", action: "Inspeção concluída", project: "Condomínio Verde", type: "inspection" },
    { time: "11:20", action: "Equipa realocada", project: "Edifício Alameda", type: "team" }
  ];

  const teamMembers = [
    { name: "João Silva", role: "Eng. Civil", status: "online", project: "Edifício Alameda", phone: "912345678" },
    { name: "Maria Costa", role: "Arquiteta", status: "busy", project: "Centro Comercial", phone: "923456789" },
    { name: "Pedro Santos", role: "Mestre Obra", status: "online", project: "Condomínio Verde", phone: "934567890" }
  ];

  const reports = [
    { name: "Relatório Mensal - Outubro", date: "31/10/2024", type: "PDF", size: "2.4 MB" },
    { name: "Análise de Custos Q3", date: "30/09/2024", type: "Excel", size: "1.8 MB" },
    { name: "Progresso Obras - Semana 44", date: "28/10/2024", type: "PDF", size: "3.1 MB" }
  ];

  const analytics = [
    { metric: "Produtividade", value: "94%", trend: "+8%", period: "vs mês anterior" },
    { metric: "Custo por m²", value: "€1.245", trend: "-5%", period: "vs média setor" },
    { metric: "Tempo Médio Obra", value: "8.2 meses", trend: "-12%", period: "vs ano anterior" }
  ];

  const renderDashboard = () => (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 border-white/10 p-2">
            <CardContent className="p-0">
              <div className="flex items-center gap-2">
                <stat.icon className={`w-3 h-3 ${stat.color}`} />
                <div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className="font-bold text-sm text-white">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects Section */}
      <Card className="bg-white/5 border-white/10 mb-3">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-orange-400 flex items-center gap-2">
            <Building className="w-3 h-3" />
            Projetos em Andamento
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="space-y-2">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-2 rounded cursor-pointer transition-all ${
                  activeProject === index ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-xs">{project.name}</span>
                  <Badge 
                    className={`text-xs px-1 py-0 ${
                      project.status === 'Em Progresso' ? 'bg-blue-500/20 text-blue-400' :
                      project.status === 'Atrasado' ? 'bg-red-500/20 text-red-400' :
                      'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-1 mb-1" />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{project.progress}% concluído</span>
                  <span>Prazo: {project.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Materials Stock */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-orange-400">Stock de Materiais</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {materials.map((material, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {material.status === 'ok' ? (
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 text-red-400" />
                    )}
                    <span className="text-xs">{material.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={material.stock} className="w-8 h-1" />
                    <span className="text-xs text-gray-400">{material.stock}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-orange-400">Equipa Online</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <p className="text-xs font-medium">{member.name}</p>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{member.project.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-orange-400">Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="space-y-1">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
                <span className="text-xs text-gray-400 w-8">{activity.time}</span>
                <div className={`w-1 h-1 rounded-full ${
                  activity.type === 'start' ? 'bg-green-400' :
                  activity.type === 'delivery' ? 'bg-blue-400' :
                  activity.type === 'inspection' ? 'bg-purple-400' : 'bg-orange-400'
                }`} />
                <span className="text-xs flex-1">{activity.action}</span>
                <span className="text-xs text-orange-400">{activity.project.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderProjects = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Gestão de Projetos</h3>
        <Badge className="bg-orange-500/20 text-orange-400 text-xs">12 Ativos</Badge>
      </div>
      
      {projects.map((project, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-sm text-white">{project.name}</h4>
                <p className="text-xs text-gray-400">Orçamento: {project.budget}</p>
              </div>
              <Badge className={`text-xs ${
                project.status === 'Em Progresso' ? 'bg-blue-500/20 text-blue-400' :
                project.status === 'Atrasado' ? 'bg-red-500/20 text-red-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {project.status}
              </Badge>
            </div>
            <Progress value={project.progress} className="h-2 mb-2" />
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{project.deadline}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{project.team} pessoas</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{project.progress}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderTeams = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Gestão de Equipas</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">8 Equipas</Badge>
      </div>
      
      {teamMembers.map((member, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{member.name}</h4>
                  <p className="text-xs text-gray-400">{member.role}</p>
                </div>
              </div>
              <Badge className="bg-blue-500/20 text-blue-400 text-xs">
                {member.status === 'online' ? 'Online' : 'Ocupado'}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Building className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{member.project}</span>
              </div>
              <div className="flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{member.phone}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMaterials = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Gestão de Materiais</h3>
        <Badge className="bg-red-500/20 text-red-400 text-xs">1 Crítico</Badge>
      </div>
      
      {materials.map((material, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {material.status === 'ok' ? (
                  <CheckCircle className="w-3 h-3 text-green-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-red-400" />
                )}
                <div>
                  <h4 className="font-bold text-sm text-white">{material.name}</h4>
                  <p className="text-xs text-gray-400">Fornecedor: {material.supplier}</p>
                </div>
              </div>
              <Badge className={`text-xs ${
                material.status === 'ok' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {material.stock}% Stock
              </Badge>
            </div>
            <Progress value={material.stock} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Último pedido: {material.lastOrder}</span>
              <span>{material.status === 'ok' ? 'Normal' : 'Requer Atenção'}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderReports = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Relatórios</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">3 Novos</Badge>
      </div>
      
      {reports.map((report, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-orange-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{report.name}</h4>
                  <p className="text-xs text-gray-400">{report.date} • {report.size}</p>
                </div>
              </div>
              <Badge className="bg-purple-500/20 text-purple-400 text-xs">
                {report.type}
              </Badge>
            </div>
            <div className="flex justify-between text-xs">
              <button className="text-orange-400 hover:text-orange-300">Descarregar</button>
              <button className="text-blue-400 hover:text-blue-300">Visualizar</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Análises e KPIs</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">Tempo Real</Badge>
      </div>
      
      {analytics.map((analytic, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3 h-3 text-orange-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{analytic.metric}</h4>
                  <p className="text-xs text-gray-400">{analytic.period}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{analytic.value}</div>
                <div className={`text-xs ${
                  analytic.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {analytic.trend}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Definições do Sistema</h3>
        <Badge className="bg-gray-500/20 text-gray-400 text-xs">Admin</Badge>
      </div>
      
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Notificações</span>
            </div>
            <div className="w-8 h-4 bg-orange-500 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Gestão de Utilizadores</span>
            </div>
            <button className="text-xs text-orange-400">Configurar</button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Preferências Gerais</span>
            </div>
            <button className="text-xs text-orange-400">Editar</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'projects': return renderProjects();
      case 'teams': return renderTeams();
      case 'materials': return renderMaterials();
      case 'reports': return renderReports();
      case 'analytics': return renderAnalytics();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg text-white text-xs overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-16 bg-black/20 border-r border-white/10 flex flex-col">
        <div className="p-2 border-b border-white/10">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <Building className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 py-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`relative p-2 mx-1 mb-1 rounded cursor-pointer transition-all ${
                activeTab === item.id ? 'bg-orange-500/20 border border-orange-500/30' : 'hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-4 h-4 mx-auto ${activeTab === item.id ? 'text-orange-400' : 'text-gray-400'}`} />
              {item.count && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{item.count}</span>
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
              <h3 className="font-bold text-sm text-orange-400">ConstrutoraTech</h3>
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
            <Badge className="bg-green-500/20 text-green-400 text-xs px-2 py-1">
              Sistema Ativo
            </Badge>
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">JS</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ConstructionDashboard;

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Calendar, TrendingUp, AlertTriangle, CheckCircle, Home, Settings, FileText, BarChart3, MapPin, Truck, Bell, Search, Wrench, DollarSign, Clock, Award, Target, UserCheck } from 'lucide-react';

const ConstructionDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeProject, setActiveProject] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const notificationTimer = setInterval(() => {
      setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 2) - 1));
    }, 8000);
    return () => {
      clearInterval(timer);
      clearInterval(notificationTimer);
    };
  }, []);

  const projects = [
    { name: "Edifício Alameda", progress: 78, status: "Em Progresso", deadline: "15 Dez", budget: "€850.000", team: 12 },
    { name: "Condomínio Verde", progress: 45, status: "Atrasado", deadline: "22 Jan", budget: "€1.200.000", team: 18 },
    { name: "Centro Comercial", progress: 92, status: "Quase Pronto", deadline: "08 Nov", budget: "€2.100.000", team: 25 }
  ];

  const stats = [
    { label: "Obras Ativas", value: "12", icon: Building, color: "text-blue-500" },
    { label: "Equipes", value: "8", icon: Users, color: "text-green-500" },
    { label: "Prazo Médio", value: "85%", icon: Calendar, color: "text-orange-500" },
    { label: "Eficiência", value: "94%", icon: TrendingUp, color: "text-purple-500" }
  ];

  const materials = [
    { name: "Cimento", stock: 85, status: "ok", supplier: "CimPorto", lastOrder: "2 dias" },
    { name: "Ferro", stock: 23, status: "baixo", supplier: "MetalLux", lastOrder: "5 dias" },
    { name: "Tijolo", stock: 67, status: "ok", supplier: "CerâmicaTech", lastOrder: "1 dia" }
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', active: true },
    { id: 'projects', icon: Building, label: 'Projetos', count: 12 },
    { id: 'teams', icon: Users, label: 'Equipas', count: 8 },
    { id: 'materials', icon: Truck, label: 'Materiais' },
    { id: 'reports', icon: FileText, label: 'Relatórios' },
    { id: 'analytics', icon: BarChart3, label: 'Análises' },
    { id: 'settings', icon: Settings, label: 'Definições' }
  ];

  const recentActivities = [
    { time: "08:30", action: "Nova obra iniciada", project: "Edifício Alameda", type: "start" },
    { time: "09:15", action: "Material entregue", project: "Centro Comercial", type: "delivery" },
    { time: "10:45", action: "Inspeção concluída", project: "Condomínio Verde", type: "inspection" },
    { time: "11:20", action: "Equipa realocada", project: "Edifício Alameda", type: "team" }
  ];

  const teamMembers = [
    { name: "João Silva", role: "Eng. Civil", status: "online", project: "Edifício Alameda", phone: "912345678" },
    { name: "Maria Costa", role: "Arquiteta", status: "busy", project: "Centro Comercial", phone: "923456789" },
    { name: "Pedro Santos", role: "Mestre Obra", status: "online", project: "Condomínio Verde", phone: "934567890" }
  ];

  const reports = [
    { name: "Relatório Mensal - Outubro", date: "31/10/2024", type: "PDF", size: "2.4 MB" },
    { name: "Análise de Custos Q3", date: "30/09/2024", type: "Excel", size: "1.8 MB" },
    { name: "Progresso Obras - Semana 44", date: "28/10/2024", type: "PDF", size: "3.1 MB" }
  ];

  const analytics = [
    { metric: "Produtividade", value: "94%", trend: "+8%", period: "vs mês anterior" },
    { metric: "Custo por m²", value: "€1.245", trend: "-5%", period: "vs média setor" },
    { metric: "Tempo Médio Obra", value: "8.2 meses", trend: "-12%", period: "vs ano anterior" }
  ];

  const renderDashboard = () => (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 border-white/10 p-2">
            <CardContent className="p-0">
              <div className="flex items-center gap-2">
                <stat.icon className={`w-3 h-3 ${stat.color}`} />
                <div>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className="font-bold text-sm text-white">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects Section */}
      <Card className="bg-white/5 border-white/10 mb-3">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-orange-400 flex items-center gap-2">
            <Building className="w-3 h-3" />
            Projetos em Andamento
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="space-y-2">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-2 rounded cursor-pointer transition-all ${
                  activeProject === index ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-xs">{project.name}</span>
                  <Badge 
                    className={`text-xs px-1 py-0 ${
                      project.status === 'Em Progresso' ? 'bg-blue-500/20 text-blue-400' :
                      project.status === 'Atrasado' ? 'bg-red-500/20 text-red-400' :
                      'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} className="h-1 mb-1" />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{project.progress}% concluído</span>
                  <span>Prazo: {project.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Materials Stock */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-orange-400">Stock de Materiais</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {materials.map((material, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {material.status === 'ok' ? (
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 text-red-400" />
                    )}
                    <span className="text-xs">{material.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={material.stock} className="w-8 h-1" />
                    <span className="text-xs text-gray-400">{material.stock}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-orange-400">Equipa Online</CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                    <div>
                      <p className="text-xs font-medium">{member.name}</p>
                      <p className="text-xs text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{member.project.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-orange-400">Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="space-y-1">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-2 p-1 hover:bg-white/5 rounded">
                <span className="text-xs text-gray-400 w-8">{activity.time}</span>
                <div className={`w-1 h-1 rounded-full ${
                  activity.type === 'start' ? 'bg-green-400' :
                  activity.type === 'delivery' ? 'bg-blue-400' :
                  activity.type === 'inspection' ? 'bg-purple-400' : 'bg-orange-400'
                }`} />
                <span className="text-xs flex-1">{activity.action}</span>
                <span className="text-xs text-orange-400">{activity.project.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderProjects = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Gestão de Projetos</h3>
        <Badge className="bg-orange-500/20 text-orange-400 text-xs">12 Ativos</Badge>
      </div>
      
      {projects.map((project, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-sm text-white">{project.name}</h4>
                <p className="text-xs text-gray-400">Orçamento: {project.budget}</p>
              </div>
              <Badge className={`text-xs ${
                project.status === 'Em Progresso' ? 'bg-blue-500/20 text-blue-400' :
                project.status === 'Atrasado' ? 'bg-red-500/20 text-red-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {project.status}
              </Badge>
            </div>
            <Progress value={project.progress} className="h-2 mb-2" />
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{project.deadline}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{project.team} pessoas</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{project.progress}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderTeams = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Gestão de Equipas</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">8 Equipas</Badge>
      </div>
      
      {teamMembers.map((member, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{member.name}</h4>
                  <p className="text-xs text-gray-400">{member.role}</p>
                </div>
              </div>
              <Badge className="bg-blue-500/20 text-blue-400 text-xs">
                {member.status === 'online' ? 'Online' : 'Ocupado'}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Building className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{member.project}</span>
              </div>
              <div className="flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{member.phone}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMaterials = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Gestão de Materiais</h3>
        <Badge className="bg-red-500/20 text-red-400 text-xs">1 Crítico</Badge>
      </div>
      
      {materials.map((material, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {material.status === 'ok' ? (
                  <CheckCircle className="w-3 h-3 text-green-400" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-red-400" />
                )}
                <div>
                  <h4 className="font-bold text-sm text-white">{material.name}</h4>
                  <p className="text-xs text-gray-400">Fornecedor: {material.supplier}</p>
                </div>
              </div>
              <Badge className={`text-xs ${
                material.status === 'ok' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {material.stock}% Stock
              </Badge>
            </div>
            <Progress value={material.stock} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Último pedido: {material.lastOrder}</span>
              <span>{material.status === 'ok' ? 'Normal' : 'Requer Atenção'}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderReports = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Relatórios</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">3 Novos</Badge>
      </div>
      
      {reports.map((report, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FileText className="w-3 h-3 text-orange-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{report.name}</h4>
                  <p className="text-xs text-gray-400">{report.date} • {report.size}</p>
                </div>
              </div>
              <Badge className="bg-purple-500/20 text-purple-400 text-xs">
                {report.type}
              </Badge>
            </div>
            <div className="flex justify-between text-xs">
              <button className="text-orange-400 hover:text-orange-300">Descarregar</button>
              <button className="text-blue-400 hover:text-blue-300">Visualizar</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Análises e KPIs</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">Tempo Real</Badge>
      </div>
      
      {analytics.map((analytic, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3 h-3 text-orange-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{analytic.metric}</h4>
                  <p className="text-xs text-gray-400">{analytic.period}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{analytic.value}</div>
                <div className={`text-xs ${
                  analytic.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {analytic.trend}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-orange-400">Definições do Sistema</h3>
        <Badge className="bg-gray-500/20 text-gray-400 text-xs">Admin</Badge>
      </div>
      
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Notificações</span>
            </div>
            <div className="w-8 h-4 bg-orange-500 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Gestão de Utilizadores</span>
            </div>
            <button className="text-xs text-orange-400">Configurar</button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-white">Preferências Gerais</span>
            </div>
            <button className="text-xs text-orange-400">Editar</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'projects': return renderProjects();
      case 'teams': return renderTeams();
      case 'materials': return renderMaterials();
      case 'reports': return renderReports();
      case 'analytics': return renderAnalytics();
      case 'settings': return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg text-white text-xs overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-16 bg-black/20 border-r border-white/10 flex flex-col">
        <div className="p-2 border-b border-white/10">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <Building className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 py-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`relative p-2 mx-1 mb-1 rounded cursor-pointer transition-all ${
                activeTab === item.id ? 'bg-orange-500/20 border border-orange-500/30' : 'hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-4 h-4 mx-auto ${activeTab === item.id ? 'text-orange-400' : 'text-gray-400'}`} />
              {item.count && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{item.count}</span>
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
              <h3 className="font-bold text-sm text-orange-400">ConstrutoraTech</h3>
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
            <Badge className="bg-green-500/20 text-green-400 text-xs px-2 py-1">
              Sistema Ativo
            </Badge>
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">JS</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ConstructionDashboard;
