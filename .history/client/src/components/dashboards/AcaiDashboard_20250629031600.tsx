import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Star, MapPin, ShoppingBag, Users, TrendingUp, Coffee, Home, Settings, FileText, BarChart3, Bell, Search, Package, Utensils, DollarSign, Target, Award, Calendar, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';

const AcaiDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeOrders, setActiveOrders] = useState(23);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const orderTimer = setInterval(() => {
      setActiveOrders(prev => Math.max(15, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);
    const notificationTimer = setInterval(() => {
      setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 2) - 1));
    }, 7000);
    
    return () => {
      clearInterval(timer);
      clearInterval(orderTimer);
      clearInterval(notificationTimer);
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
      progress: 30,
      driver: "João M.",
      phone: "912345678"
    },
    { 
      id: "#A002", 
      customer: "João Santos", 
      items: "1x Açaí 300ml, Frutas", 
      status: "A Caminho", 
      time: "12min", 
      location: "Av. Central, 456",
      total: "€8.90",
      progress: 75,
      driver: "Ana C.",
      phone: "923456789"
    },
    { 
      id: "#A003", 
      customer: "Pedro Costa", 
      items: "1x Bowl Especial", 
      status: "Entregue", 
      time: "2min", 
      location: "Praça da Sé, 789",
      total: "€15.00",
      progress: 100,
      driver: "Carlos R.",
      phone: "934567890"
    }
  ];

  const popularItems = [
    { name: "Açaí 500ml + Granola", orders: 45, revenue: "€337.50", stock: 85, price: "€7.50", category: "Clássico" },
    { name: "Açaí 300ml + Frutas", orders: 32, revenue: "€192.00", stock: 92, price: "€6.00", category: "Frutas" },
    { name: "Açaí Bowl Especial", orders: 28, revenue: "€420.00", stock: 67, price: "€15.00", category: "Premium" },
    { name: "Smoothie Açaí", orders: 19, revenue: "€114.00", stock: 45, price: "€6.00", category: "Bebidas" }
  ];

  const deliveryZones = [
    { zone: "Centro", orders: 12, avgTime: "15min", status: "normal", drivers: 2, revenue: "€156.80" },
    { zone: "Alameda", orders: 8, avgTime: "22min", status: "busy", drivers: 2, revenue: "€98.40" },
    { zone: "Bairro Alto", orders: 3, avgTime: "18min", status: "normal", drivers: 1, revenue: "€42.30" },
    { zone: "Príncipe Real", orders: 5, avgTime: "20min", status: "normal", drivers: 1, revenue: "€67.50" }
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', active: true },
    { id: 'orders', icon: ShoppingBag, label: 'Pedidos', count: activeOrders },
    { id: 'menu', icon: Utensils, label: 'Menu' },
    { id: 'delivery', icon: Truck, label: 'Entregas', count: 6 },
    { id: 'inventory', icon: Package, label: 'Stock' },
    { id: 'analytics', icon: BarChart3, label: 'Análises' },
    { id: 'customers', icon: Users, label: 'Clientes', count: 1247 },
    { id: 'settings', icon: Settings, label: 'Definições' }
  ];

  const drivers = [
    { name: "João M.", status: "delivering", orders: 2, location: "Centro", rating: 4.9, phone: "912111222", vehicle: "Moto" },
    { name: "Ana C.", status: "delivering", orders: 1, location: "Alameda", rating: 4.8, phone: "923333444", vehicle: "Bicicleta" },
    { name: "Carlos R.", status: "available", orders: 0, location: "Base", rating: 5.0, phone: "934555666", vehicle: "Moto" },
    { name: "Sofia L.", status: "delivering", orders: 3, location: "Bairro Alto", rating: 4.7, phone: "945777888", vehicle: "Carro" }
  ];

  const dailyStats = [
    { label: "Vendas Hoje", current: 1847, target: 2000, unit: "€" },
    { label: "Pedidos Meta", current: activeOrders, target: 30, unit: "" },
    { label: "Satisfação", current: 4.9, target: 5.0, unit: "★" }
  ];

  const customers = [
    { name: "Maria Silva", orders: 45, totalSpent: "€337.50", lastOrder: "Hoje", favorite: "Açaí 500ml", rating: 5 },
    { name: "João Santos", orders: 32, totalSpent: "€192.00", lastOrder: "Ontem", favorite: "Bowl Especial", rating: 5 },
    { name: "Ana Costa", orders: 28, totalSpent: "€420.00", lastOrder: "2 dias", favorite: "Smoothie", rating: 4 }
  ];

  const inventory = [
    { item: "Açaí Polpa", stock: 85, minStock: 20, unit: "kg", supplier: "AçaíBrasil", lastOrder: "2 dias" },
    { item: "Granola", stock: 45, minStock: 30, unit: "kg", supplier: "GranolaFresh", lastOrder: "5 dias" },
    { item: "Frutas Mistas", stock: 67, minStock: 25, unit: "kg", supplier: "FrutasFrescas", lastOrder: "1 dia" }
  ];

  const renderDashboard = () => (
    <>
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
          <CardTitle className="text-sm text-green-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-3 h-3" />
              Pedidos Ativos
            </span>
            <Badge className="bg-green-500/20 text-green-400 text-xs">{orders.filter(o => o.status !== 'Entregue').length} ativos</Badge>
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
                  <span className="text-xs text-gray-400">ETA: {order.time}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{order.driver}</span>
                </div>
                <Progress value={order.progress} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Grid */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {/* Popular Items */}
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
                  <div className="text-right">
                    <span className="text-xs text-green-400 font-bold">{item.revenue}</span>
                    <p className="text-xs text-gray-400">Stock: {item.stock}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Delivery Zones */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-green-400 flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Zonas de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {deliveryZones.slice(0, 3).map((zone, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">{zone.zone}</p>
                    <p className="text-xs text-gray-400">{zone.orders} pedidos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white">{zone.avgTime}</p>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${
                        zone.status === 'normal' ? 'bg-green-400' : 'bg-yellow-400'
                      }`} />
                      <span className="text-xs text-gray-400">{zone.drivers} motoristas</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Goals */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-green-400 flex items-center gap-2">
              <Target className="w-3 h-3" />
              Metas Diárias
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {dailyStats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">{stat.label}</span>
                    <span className="text-xs text-gray-400">{Math.round((stat.current / stat.target) * 100)}%</span>
                  </div>
                  <Progress value={(stat.current / stat.target) * 100} className="h-1" />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{stat.unit}{stat.current}</span>
                    <span>{stat.unit}{stat.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drivers Status */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-green-400 flex items-center gap-2">
            <Truck className="w-3 h-3" />
            Estado dos Entregadores
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="grid grid-cols-2 gap-2">
            {drivers.map((driver, index) => (
              <div key={index} className="flex items-center justify-between p-1 bg-white/5 rounded">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    driver.status === 'available' ? 'bg-green-400' : 'bg-blue-400'
                  }`} />
                  <div>
                    <p className="text-xs font-medium">{driver.name}</p>
                    <p className="text-xs text-gray-400">{driver.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white">{driver.orders} pedidos</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-2 h-2 text-yellow-400" />
                    <span className="text-xs text-gray-400">{driver.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderOrders = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Gestão de Pedidos</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">{activeOrders} Ativos</Badge>
      </div>
      
      {orders.map((order, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  order.status === 'Preparando' ? 'bg-yellow-400' :
                  order.status === 'A Caminho' ? 'bg-blue-400' : 'bg-green-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{order.id} - {order.customer}</h4>
                  <p className="text-xs text-gray-400">Tel: {order.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{order.total}</div>
                <Badge className={`text-xs ${
                  order.status === 'Preparando' ? 'bg-yellow-500/20 text-yellow-400' :
                  order.status === 'A Caminho' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {order.status}
                </Badge>
              </div>
            </div>
            <p className="text-xs text-gray-300 mb-2">{order.items}</p>
            <div className="grid grid-cols-3 gap-2 text-xs mb-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{order.location.split(',')[0]}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">ETA: {order.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{order.driver}</span>
              </div>
            </div>
            <Progress value={order.progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMenu = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Menu Digital</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">4 Categorias</Badge>
      </div>
      
      {popularItems.map((item, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Coffee className="w-3 h-3 text-green-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{item.name}</h4>
                  <p className="text-xs text-gray-400">Categoria: {item.category}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{item.price}</div>
                <Badge className="bg-purple-500/20 text-purple-400 text-xs">
                  {item.orders} vendidos
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Package className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">Stock: {item.stock}%</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{item.revenue}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">Popular</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDelivery = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Sistema de Entregas</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">6 Ativos</Badge>
      </div>
      
      {drivers.map((driver, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  driver.status === 'available' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{driver.name}</h4>
                  <p className="text-xs text-gray-400">Tel: {driver.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{driver.orders} pedidos</div>
                <Badge className={`text-xs ${
                  driver.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {driver.status === 'available' ? 'Disponível' : 'Entregando'}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{driver.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{driver.vehicle}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{driver.rating}★</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderInventory = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Gestão de Stock</h3>
        <Badge className="bg-orange-500/20 text-orange-400 text-xs">1 Baixo</Badge>
      </div>
      
      {inventory.map((item, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {item.stock > item.minStock ? (
                  <CheckCircle className="w-3 h-3 text-green-400" />
                ) : (
                  <AlertCircle className="w-3 h-3 text-red-400" />
                )}
                <div>
                  <h4 className="font-bold text-sm text-white">{item.item}</h4>
                  <p className="text-xs text-gray-400">Fornecedor: {item.supplier}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{item.stock} {item.unit}</div>
                <Badge className={`text-xs ${
                  item.stock > item.minStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.stock > item.minStock ? 'Normal' : 'Baixo'}
                </Badge>
              </div>
            </div>
            <Progress value={(item.stock / (item.minStock * 3)) * 100} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Mín: {item.minStock} {item.unit}</span>
              <span>Último pedido: {item.lastOrder}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Base de Clientes</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">1247 Ativos</Badge>
      </div>
      
      {customers.map((customer, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 text-green-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{customer.name}</h4>
                  <p className="text-xs text-gray-400">Favorito: {customer.favorite}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{customer.totalSpent}</div>
                <div className="flex items-center gap-1">
                  {[...Array(customer.rating)].map((_, i) => (
                    <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{customer.orders} pedidos</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{customer.lastOrder}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">VIP</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Análises de Performance</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">Tempo Real</Badge>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-sm font-bold text-white">Crescimento Semanal</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">+25.3%</div>
                <div className="text-xs text-gray-400">vs semana anterior</div>
              </div>
            </div>
            <Progress value={85} className="h-2" />
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-green-400" />
                <span className="text-sm font-bold text-white">Tempo Médio Entrega</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-blue-400">18min</div>
                <div className="text-xs text-gray-400">-2min vs meta</div>
              </div>
            </div>
            <Progress value={75} className="h-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Definições do Sistema</h3>
        <Badge className="bg-gray-500/20 text-gray-400 text-xs">Admin</Badge>
      </div>
      
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">Notificações Push</span>
            </div>
            <div className="w-8 h-4 bg-green-500 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">App Mobile</span>
            </div>
            <button className="text-xs text-green-400">Configurar</button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">Zonas de Entrega</span>
            </div>
            <button className="text-xs text-green-400">Editar</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'orders': return renderOrders();
      case 'menu': return renderMenu();
      case 'delivery': return renderDelivery();
      case 'inventory': return renderInventory();
      case 'customers': return renderCustomers();
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
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Coffee className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 py-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`relative p-2 mx-1 mb-1 rounded cursor-pointer transition-all ${
                activeTab === item.id ? 'bg-green-500/20 border border-green-500/30' : 'hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-4 h-4 mx-auto ${activeTab === item.id ? 'text-green-400' : 'text-gray-400'}`} />
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
              <h3 className="font-bold text-sm text-green-400">AçaíBerry</h3>
              <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString('pt-PT')}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1">
              <Search className="w-3 h-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Pesquisar pedidos..."
                className="bg-transparent text-xs text-white placeholder-gray-400 border-none outline-none w-24"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <Badge className="bg-green-500/20 text-green-400 text-xs px-2 py-1">
              Sistema Online
            </Badge>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">AB</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AcaiDashboard;

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Star, MapPin, ShoppingBag, Users, TrendingUp, Coffee, Home, Settings, FileText, BarChart3, Bell, Search, Package, Utensils, DollarSign, Target, Award, Calendar, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';

const AcaiDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeOrders, setActiveOrders] = useState(23);
  const [selectedOrder, setSelectedOrder] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const orderTimer = setInterval(() => {
      setActiveOrders(prev => Math.max(15, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);
    const notificationTimer = setInterval(() => {
      setNotifications(prev => Math.max(0, prev + Math.floor(Math.random() * 2) - 1));
    }, 7000);
    
    return () => {
      clearInterval(timer);
      clearInterval(orderTimer);
      clearInterval(notificationTimer);
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
      progress: 30,
      driver: "João M.",
      phone: "912345678"
    },
    { 
      id: "#A002", 
      customer: "João Santos", 
      items: "1x Açaí 300ml, Frutas", 
      status: "A Caminho", 
      time: "12min", 
      location: "Av. Central, 456",
      total: "€8.90",
      progress: 75,
      driver: "Ana C.",
      phone: "923456789"
    },
    { 
      id: "#A003", 
      customer: "Pedro Costa", 
      items: "1x Bowl Especial", 
      status: "Entregue", 
      time: "2min", 
      location: "Praça da Sé, 789",
      total: "€15.00",
      progress: 100,
      driver: "Carlos R.",
      phone: "934567890"
    }
  ];

  const popularItems = [
    { name: "Açaí 500ml + Granola", orders: 45, revenue: "€337.50", stock: 85, price: "€7.50", category: "Clássico" },
    { name: "Açaí 300ml + Frutas", orders: 32, revenue: "€192.00", stock: 92, price: "€6.00", category: "Frutas" },
    { name: "Açaí Bowl Especial", orders: 28, revenue: "€420.00", stock: 67, price: "€15.00", category: "Premium" },
    { name: "Smoothie Açaí", orders: 19, revenue: "€114.00", stock: 45, price: "€6.00", category: "Bebidas" }
  ];

  const deliveryZones = [
    { zone: "Centro", orders: 12, avgTime: "15min", status: "normal", drivers: 2, revenue: "€156.80" },
    { zone: "Alameda", orders: 8, avgTime: "22min", status: "busy", drivers: 2, revenue: "€98.40" },
    { zone: "Bairro Alto", orders: 3, avgTime: "18min", status: "normal", drivers: 1, revenue: "€42.30" },
    { zone: "Príncipe Real", orders: 5, avgTime: "20min", status: "normal", drivers: 1, revenue: "€67.50" }
  ];

  const sidebarItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', active: true },
    { id: 'orders', icon: ShoppingBag, label: 'Pedidos', count: activeOrders },
    { id: 'menu', icon: Utensils, label: 'Menu' },
    { id: 'delivery', icon: Truck, label: 'Entregas', count: 6 },
    { id: 'inventory', icon: Package, label: 'Stock' },
    { id: 'analytics', icon: BarChart3, label: 'Análises' },
    { id: 'customers', icon: Users, label: 'Clientes', count: 1247 },
    { id: 'settings', icon: Settings, label: 'Definições' }
  ];

  const drivers = [
    { name: "João M.", status: "delivering", orders: 2, location: "Centro", rating: 4.9, phone: "912111222", vehicle: "Moto" },
    { name: "Ana C.", status: "delivering", orders: 1, location: "Alameda", rating: 4.8, phone: "923333444", vehicle: "Bicicleta" },
    { name: "Carlos R.", status: "available", orders: 0, location: "Base", rating: 5.0, phone: "934555666", vehicle: "Moto" },
    { name: "Sofia L.", status: "delivering", orders: 3, location: "Bairro Alto", rating: 4.7, phone: "945777888", vehicle: "Carro" }
  ];

  const dailyStats = [
    { label: "Vendas Hoje", current: 1847, target: 2000, unit: "€" },
    { label: "Pedidos Meta", current: activeOrders, target: 30, unit: "" },
    { label: "Satisfação", current: 4.9, target: 5.0, unit: "★" }
  ];

  const customers = [
    { name: "Maria Silva", orders: 45, totalSpent: "€337.50", lastOrder: "Hoje", favorite: "Açaí 500ml", rating: 5 },
    { name: "João Santos", orders: 32, totalSpent: "€192.00", lastOrder: "Ontem", favorite: "Bowl Especial", rating: 5 },
    { name: "Ana Costa", orders: 28, totalSpent: "€420.00", lastOrder: "2 dias", favorite: "Smoothie", rating: 4 }
  ];

  const inventory = [
    { item: "Açaí Polpa", stock: 85, minStock: 20, unit: "kg", supplier: "AçaíBrasil", lastOrder: "2 dias" },
    { item: "Granola", stock: 45, minStock: 30, unit: "kg", supplier: "GranolaFresh", lastOrder: "5 dias" },
    { item: "Frutas Mistas", stock: 67, minStock: 25, unit: "kg", supplier: "FrutasFrescas", lastOrder: "1 dia" }
  ];

  const renderDashboard = () => (
    <>
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
          <CardTitle className="text-sm text-green-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-3 h-3" />
              Pedidos Ativos
            </span>
            <Badge className="bg-green-500/20 text-green-400 text-xs">{orders.filter(o => o.status !== 'Entregue').length} ativos</Badge>
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
                  <span className="text-xs text-gray-400">ETA: {order.time}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Truck className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{order.driver}</span>
                </div>
                <Progress value={order.progress} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bottom Grid */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {/* Popular Items */}
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
                  <div className="text-right">
                    <span className="text-xs text-green-400 font-bold">{item.revenue}</span>
                    <p className="text-xs text-gray-400">Stock: {item.stock}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Delivery Zones */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-green-400 flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Zonas de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {deliveryZones.slice(0, 3).map((zone, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium">{zone.zone}</p>
                    <p className="text-xs text-gray-400">{zone.orders} pedidos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white">{zone.avgTime}</p>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${
                        zone.status === 'normal' ? 'bg-green-400' : 'bg-yellow-400'
                      }`} />
                      <span className="text-xs text-gray-400">{zone.drivers} motoristas</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Goals */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader className="p-2">
            <CardTitle className="text-sm text-green-400 flex items-center gap-2">
              <Target className="w-3 h-3" />
              Metas Diárias
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 pt-0">
            <div className="space-y-2">
              {dailyStats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">{stat.label}</span>
                    <span className="text-xs text-gray-400">{Math.round((stat.current / stat.target) * 100)}%</span>
                  </div>
                  <Progress value={(stat.current / stat.target) * 100} className="h-1" />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{stat.unit}{stat.current}</span>
                    <span>{stat.unit}{stat.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drivers Status */}
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="p-2">
          <CardTitle className="text-sm text-green-400 flex items-center gap-2">
            <Truck className="w-3 h-3" />
            Estado dos Entregadores
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <div className="grid grid-cols-2 gap-2">
            {drivers.map((driver, index) => (
              <div key={index} className="flex items-center justify-between p-1 bg-white/5 rounded">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    driver.status === 'available' ? 'bg-green-400' : 'bg-blue-400'
                  }`} />
                  <div>
                    <p className="text-xs font-medium">{driver.name}</p>
                    <p className="text-xs text-gray-400">{driver.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white">{driver.orders} pedidos</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-2 h-2 text-yellow-400" />
                    <span className="text-xs text-gray-400">{driver.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderOrders = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Gestão de Pedidos</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">{activeOrders} Ativos</Badge>
      </div>
      
      {orders.map((order, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  order.status === 'Preparando' ? 'bg-yellow-400' :
                  order.status === 'A Caminho' ? 'bg-blue-400' : 'bg-green-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{order.id} - {order.customer}</h4>
                  <p className="text-xs text-gray-400">Tel: {order.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{order.total}</div>
                <Badge className={`text-xs ${
                  order.status === 'Preparando' ? 'bg-yellow-500/20 text-yellow-400' :
                  order.status === 'A Caminho' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {order.status}
                </Badge>
              </div>
            </div>
            <p className="text-xs text-gray-300 mb-2">{order.items}</p>
            <div className="grid grid-cols-3 gap-2 text-xs mb-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{order.location.split(',')[0]}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">ETA: {order.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{order.driver}</span>
              </div>
            </div>
            <Progress value={order.progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMenu = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Menu Digital</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">4 Categorias</Badge>
      </div>
      
      {popularItems.map((item, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Coffee className="w-3 h-3 text-green-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{item.name}</h4>
                  <p className="text-xs text-gray-400">Categoria: {item.category}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{item.price}</div>
                <Badge className="bg-purple-500/20 text-purple-400 text-xs">
                  {item.orders} vendidos
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <Package className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">Stock: {item.stock}%</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{item.revenue}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">Popular</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDelivery = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Sistema de Entregas</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">6 Ativos</Badge>
      </div>
      
      {drivers.map((driver, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  driver.status === 'available' ? 'bg-green-400' : 'bg-blue-400'
                }`} />
                <div>
                  <h4 className="font-bold text-sm text-white">{driver.name}</h4>
                  <p className="text-xs text-gray-400">Tel: {driver.phone}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{driver.orders} pedidos</div>
                <Badge className={`text-xs ${
                  driver.status === 'available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {driver.status === 'available' ? 'Disponível' : 'Entregando'}
                </Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{driver.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{driver.vehicle}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{driver.rating}★</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderInventory = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Gestão de Stock</h3>
        <Badge className="bg-orange-500/20 text-orange-400 text-xs">1 Baixo</Badge>
      </div>
      
      {inventory.map((item, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {item.stock > item.minStock ? (
                  <CheckCircle className="w-3 h-3 text-green-400" />
                ) : (
                  <AlertCircle className="w-3 h-3 text-red-400" />
                )}
                <div>
                  <h4 className="font-bold text-sm text-white">{item.item}</h4>
                  <p className="text-xs text-gray-400">Fornecedor: {item.supplier}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-white">{item.stock} {item.unit}</div>
                <Badge className={`text-xs ${
                  item.stock > item.minStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.stock > item.minStock ? 'Normal' : 'Baixo'}
                </Badge>
              </div>
            </div>
            <Progress value={(item.stock / (item.minStock * 3)) * 100} className="h-2 mb-2" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Mín: {item.minStock} {item.unit}</span>
              <span>Último pedido: {item.lastOrder}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCustomers = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Base de Clientes</h3>
        <Badge className="bg-blue-500/20 text-blue-400 text-xs">1247 Ativos</Badge>
      </div>
      
      {customers.map((customer, index) => (
        <Card key={index} className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 text-green-400" />
                <div>
                  <h4 className="font-bold text-sm text-white">{customer.name}</h4>
                  <p className="text-xs text-gray-400">Favorito: {customer.favorite}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">{customer.totalSpent}</div>
                <div className="flex items-center gap-1">
                  {[...Array(customer.rating)].map((_, i) => (
                    <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{customer.orders} pedidos</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">{customer.lastOrder}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-gray-400" />
                <span className="text-gray-400">VIP</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Análises de Performance</h3>
        <Badge className="bg-green-500/20 text-green-400 text-xs">Tempo Real</Badge>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-sm font-bold text-white">Crescimento Semanal</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-green-400">+25.3%</div>
                <div className="text-xs text-gray-400">vs semana anterior</div>
              </div>
            </div>
            <Progress value={85} className="h-2" />
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-green-400" />
                <span className="text-sm font-bold text-white">Tempo Médio Entrega</span>
              </div>
              <div className="text-right">
                <div className="font-bold text-sm text-blue-400">18min</div>
                <div className="text-xs text-gray-400">-2min vs meta</div>
              </div>
            </div>
            <Progress value={75} className="h-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-green-400">Definições do Sistema</h3>
        <Badge className="bg-gray-500/20 text-gray-400 text-xs">Admin</Badge>
      </div>
      
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">Notificações Push</span>
            </div>
            <div className="w-8 h-4 bg-green-500 rounded-full relative">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">App Mobile</span>
            </div>
            <button className="text-xs text-green-400">Configurar</button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white">Zonas de Entrega</span>
            </div>
            <button className="text-xs text-green-400">Editar</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'orders': return renderOrders();
      case 'menu': return renderMenu();
      case 'delivery': return renderDelivery();
      case 'inventory': return renderInventory();
      case 'customers': return renderCustomers();
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
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <Coffee className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 py-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(item.id)}
              className={`relative p-2 mx-1 mb-1 rounded cursor-pointer transition-all ${
                activeTab === item.id ? 'bg-green-500/20 border border-green-500/30' : 'hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-4 h-4 mx-auto ${activeTab === item.id ? 'text-green-400' : 'text-gray-400'}`} />
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
              <h3 className="font-bold text-sm text-green-400">AçaíBerry</h3>
              <p className="text-xs text-gray-400">{currentTime.toLocaleTimeString('pt-PT')}</p>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1">
              <Search className="w-3 h-3 text-gray-400" />
              <input 
                type="text" 
                placeholder="Pesquisar pedidos..."
                className="bg-transparent text-xs text-white placeholder-gray-400 border-none outline-none w-24"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <Badge className="bg-green-500/20 text-green-400 text-xs px-2 py-1">
              Sistema Online
            </Badge>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">AB</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AcaiDashboard;
