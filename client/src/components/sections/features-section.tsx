import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FolderKanban, Package, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { FeatureTab } from "@/lib/types";

const featureTabs: FeatureTab[] = [
  {
    id: "projects",
    title: "Projetos",
    icon: "FolderKanban",
    content: {
      title: "Gestão Inteligente de Projetos",
      features: [
        "Cronogramas automatizados com atualizações em tempo real",
        "Gestão de marcos e entregas com notificações inteligentes",
        "Integração com BIM e ferramentas de CAD",
        "Relatórios de progresso personalizáveis"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Construction project planning with blueprints"
    }
  },
  {
    id: "materials",
    title: "Materiais", 
    icon: "Package",
    content: {
      title: "Controle Total de Materiais",
      features: [
        "Estoque inteligente com alertas automáticos",
        "Gestão de fornecedores e cotações",
        "Rastreamento de entregas por GPS",
        "Controle de qualidade e certificações"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Construction materials warehouse management"
    }
  },
  {
    id: "financial",
    title: "Financeiro",
    icon: "TrendingUp", 
    content: {
      title: "Gestão Financeira Completa",
      features: [
        "Controle de orçamentos por projeto",
        "Análise de custos em tempo real",
        "Integração com sistemas contábeis",
        "Relatórios financeiros automatizados"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Financial analytics dashboard for construction"
    }
  },
  {
    id: "teams",
    title: "Equipes",
    icon: "Users",
    content: {
      title: "Gestão de Equipes Eficiente",
      features: [
        "Controle de ponto digital",
        "Gestão de treinamentos e certificações", 
        "Comunicação integrada via chat",
        "Avaliação de performance individual"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Construction team collaboration with tablets and plans"
    }
  }
];

const getIcon = (iconName: string) => {
  const icons = {
    FolderKanban,
    Package,
    TrendingUp,
    Users
  };
  return icons[iconName as keyof typeof icons] || FolderKanban;
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Conteúdo temporariamente removido */}
    </section>
  );
}
