import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Calendar, TrendingUp, AlertTriangle, CheckCircle, Home, Settings, FileText, BarChart3, MapPin, Truck, Bell, Search } from 'lucide-react';

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
    { name: "Edifício Alameda", progress: 78, status: "Em Progresso", deadline: "15 Dez" },
    { name: "Condomínio Verde", progress: 45, status: "Atrasado", deadline: "22 Jan" },
    { name: "Centro Comercial", progress: 92, status: "Quase Pronto", deadline: "08 Nov" }
  ];

  const stats = [
    { label: "Obras Ativas", value: "12", icon: Building, color: "text-blue-500" },
    { label: "Equipes", value: "8", icon: Users, color: "text-green-500" },
    { label: "Prazo Médio", value: "85%", icon: Calendar, color: "text-orange-500" },
    { label: "Eficiência", value: "94%", icon: TrendingUp, color: "text-purple-500" }
  ];

  const materials = [
    { name: "Cimento", stock: 85, status: "ok" },
    { name: "Ferro", stock: 23, status: "baixo" },
    { name: "Tijolo", stock: 67, status: "ok" }
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
    { name: "João Silva", role: "Eng. Civil", status: "online", project: "Edifício Alameda" },
    { name: "Maria Costa", role: "Arquiteta", status: "busy", project: "Centro Comercial" },
    { name: "Pedro Santos", role: "Mestre Obra", status: "online", project: "Condomínio Verde" }
  ];

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
      <div className="flex-1 p-3">
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
        <div className="grid grid-cols-2 gap-2">
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
        <Card className="bg-white/5 border-white/10 mt-2">
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
      </div>
    </div>
  );
};

export default ConstructionDashboard; 