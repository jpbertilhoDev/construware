import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Star, MapPin, ShoppingBag, Users, TrendingUp, Coffee } from 'lucide-react';

const AcaiDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeOrders, setActiveOrders] = useState(23);
  const [selectedOrder, setSelectedOrder] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    // Simulate real-time order updates
    const orderTimer = setInterval(() => {
      setActiveOrders(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearInterval(orderTimer);
    };
  }, []);

  const stats = [
    { label: "Pedidos Hoje", value: `${activeOrders}`, icon: ShoppingBag, color: "text-green-500", change: "+5" },
    { label: "Tempo Médio", value: "18min", icon: Clock, color: "text-blue-500", change: "-2min" },
    { label: "Avaliação", value: "4.9", icon: Star, color: "text-yellow-500", change: "+0.1" },
    { label: "Entregadores", value: "6", icon: Truck, color: "text-purple-500", change: "ativo" }
  ];

  const orders = [
    { 
      id: "#A001", 
      customer: "Maria Silva", 
      items: "2x Açaí 500ml, 1x Granola", 
      status: "Preparando", 
      time: "5min", 
      location: "Rua das Flores, 123",
      total: "€12.50",
      progress: 30
    },
    { 
      id: "#A002", 
      customer: "João Santos", 
      items: "1x Açaí 300ml, Frutas", 
      status: "A Caminho", 
      time: "12min", 
      location: "Av. Central, 456",
      total: "€8.90",
      progress: 75
    },
    { 
      id: "#A003", 
      customer: "Ana Costa", 
      items: "3x Açaí 500ml, Mix", 
      status: "Entregue", 
      time: "2min", 
      location: "Praça da Sé, 789",
      total: "€18.70",
      progress: 100
    }
  ];

  const popularItems = [
    { name: "Açaí 500ml + Granola", orders: 45, revenue: "€337.50" },
    { name: "Açaí 300ml + Frutas", orders: 32, revenue: "€192.00" },
    { name: "Açaí Bowl Especial", orders: 28, revenue: "€420.00" },
    { name: "Smoothie Açaí", orders: 19, revenue: "€114.00" }
  ];

  const deliveryZones = [
    { zone: "Centro", orders: 12, avgTime: "15min", status: "normal" },
    { zone: "Alameda", orders: 8, avgTime: "22min", status: "busy" },
    { zone: "Bairro Alto", orders: 3, avgTime: "18min", status: "normal" }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-3 rounded-lg text-white text-xs overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-bold text-sm text-green-400">AçaíBerry</h3>
          <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString('pt-PT')}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <Badge className="bg-green-500/20 text-green-400 text-xs px-2 py-1">
            Sistema Online
          </Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 border-white/10 p-2">
            <CardContent className="p-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <stat.icon className={`w-3 h-3 ${stat.color}`} />
                  <div>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                    <p className="font-bold text-sm text-white">{stat.value}</p>
                  </div>
                </div>
                <span className="text-xs text-green-400">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Orders */}
      <Card className="bg-white/5 border-white/10 mb-3">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-green-400 flex items-center gap-2">
            <ShoppingBag className="w-3 h-3" />
            Pedidos Ativos
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="space-y-2">
            {orders.slice(0, 2).map((order, index) => (
              <div 
                key={index}
                className={`p-2 rounded cursor-pointer transition-all ${
                  selectedOrder === index ? 'bg-green-500/20 border border-green-500/30' : 'bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setSelectedOrder(index)}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="font-medium text-xs">{order.id} - {order.customer}</span>
                    <p className="text-xs text-gray-400">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      className={`text-xs px-1 py-0 ${
                        order.status === 'Preparando' ? 'bg-yellow-500/20 text-yellow-400' :
                        order.status === 'A Caminho' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}
                    >
                      {order.status}
                    </Badge>
                    <p className="text-xs text-white font-bold mt-1">{order.total}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400 flex-1">{order.location}</span>
                  <span className="text-xs text-gray-400">{order.time}</span>
                </div>
                <Progress value={order.progress} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Items & Delivery Zones */}
      <div className="grid grid-cols-2 gap-2">
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-green-400 flex items-center gap-2">
              <Coffee className="w-3 h-3" />
              Top Items
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {popularItems.slice(0, 3).map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">{item.name.split(' ').slice(0, 2).join(' ')}</p>
                    <p className="text-xs text-gray-400">{item.orders} pedidos</p>
                  </div>
                  <span className="text-xs text-green-400 font-bold">{item.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-green-400 flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Zonas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {deliveryZones.map((zone, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">{zone.zone}</p>
                    <p className="text-xs text-gray-400">{zone.orders} pedidos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white">{zone.avgTime}</p>
                    <div className={`w-2 h-2 rounded-full ${
                      zone.status === 'normal' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcaiDashboard; 