import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PieChart, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const FinanceDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('Mensal');
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    // Simulate real-time revenue updates
    const revenueTimer = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 500));
    }, 3000);
    
    return () => {
      clearInterval(timer);
      clearInterval(revenueTimer);
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
    { type: "Receita", desc: "Pagamento Cliente A", value: "+€2.500", time: "09:15", status: "confirmed" },
    { type: "Despesa", desc: "Fornecedor Tech", value: "-€890", time: "08:30", status: "pending" },
    { type: "Receita", desc: "Projeto Web", value: "+€1.200", time: "07:45", status: "confirmed" },
    { type: "Despesa", desc: "Marketing Digital", value: "-€450", time: "07:20", status: "confirmed" }
  ];

  const categories = [
    { name: "Desenvolvimento", amount: 15800, percentage: 45, color: "bg-blue-500" },
    { name: "Marketing", amount: 8900, percentage: 25, color: "bg-green-500" },
    { name: "Operações", amount: 6200, percentage: 18, color: "bg-orange-500" },
    { name: "Outros", amount: 4200, percentage: 12, color: "bg-purple-500" }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-3 rounded-lg text-white text-xs overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-bold text-sm text-purple-400">FinanceHub</h3>
          <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString('pt-PT')}</p>
        </div>
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
      </div>

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

      {/* Revenue Categories */}
      <Card className="bg-white/5 border-white/10 mb-3">
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
                  <span className="text-xs text-gray-400">€{category.amount.toLocaleString()}</span>
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

      {/* Recent Transactions */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-purple-400">Transações Recentes</CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="space-y-2">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-white/5 rounded hover:bg-white/10 transition-all cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.status === 'confirmed' ? 'bg-green-400' : 'bg-yellow-400'
                  }`} />
                  <div>
                    <p className="text-xs font-medium">{transaction.desc}</p>
                    <p className="text-xs text-gray-400">{transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-bold ${
                    transaction.value.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {transaction.value}
                  </p>
                  <Badge className={`text-xs px-1 py-0 ${
                    transaction.status === 'confirmed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {transaction.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinanceDashboard; 