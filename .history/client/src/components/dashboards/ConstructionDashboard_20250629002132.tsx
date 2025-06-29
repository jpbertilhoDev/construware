import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Calendar, TrendingUp, AlertTriangle, CheckCircle, Home, Settings, FileText, BarChart3, MapPin, Truck, Bell, Search } from 'lucide-react';

const ConstructionDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
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

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-3 rounded-lg text-white text-xs overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-bold text-sm text-orange-400">ConstrutoraTech</h3>
          <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString('pt-PT')}</p>
        </div>
        <Badge className="bg-green-500/20 text-green-400 text-xs px-2 py-1">
          Sistema Ativo
        </Badge>
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
    </div>
  );
};

export default ConstructionDashboard; 