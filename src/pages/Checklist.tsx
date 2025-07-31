import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckSquare, Circle, Trophy, Target, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    "1-1": true,
    "1-2": true,
    "1-3": false,
    "1-4": false,
    "2-1": true,
    "2-2": false,
    "2-3": false,
    "3-1": false,
    "3-2": false,
    "3-3": false,
    "4-1": false,
    "4-2": false,
    "4-3": false,
  });

  const sections = [
    {
      id: "1",
      title: "Fundamentos",
      description: "Base conceitual do posicionamento",
      icon: Circle,
      color: "text-primary",
      items: [
        { id: "1-1", task: "Entender o conceito de posicionamento de marca", priority: "alta" },
        { id: "1-2", task: "Estudar casos de posicionamento bem-sucedidos", priority: "alta" },
        { id: "1-3", task: "Identificar diferentes tipos de posicionamento", priority: "média" },
        { id: "1-4", task: "Completar exercícios de fixação", priority: "baixa" }
      ]
    },
    {
      id: "2",
      title: "Análise de Mercado",
      description: "Compreensão do ambiente competitivo",
      icon: Target,
      color: "text-accent",
      items: [
        { id: "2-1", task: "Mapear principais concorrentes diretos", priority: "alta" },
        { id: "2-2", task: "Analisar posicionamento dos concorrentes", priority: "alta" },
        { id: "2-3", task: "Identificar gaps no mercado", priority: "média" }
      ]
    },
    {
      id: "3",
      title: "Estratégia",
      description: "Desenvolvimento da estratégia de posicionamento",
      icon: TrendingUp,
      color: "text-success",
      items: [
        { id: "3-1", task: "Definir proposta de valor única", priority: "alta" },
        { id: "3-2", task: "Criar personas detalhadas", priority: "alta" },
        { id: "3-3", task: "Desenvolver mensagem principal", priority: "média" }
      ]
    },
    {
      id: "4",
      title: "Implementação",
      description: "Execução e acompanhamento",
      icon: Trophy,
      color: "text-destructive",
      items: [
        { id: "4-1", task: "Criar plano de comunicação", priority: "alta" },
        { id: "4-2", task: "Definir métricas de acompanhamento", priority: "média" },
        { id: "4-3", task: "Implementar estratégia", priority: "alta" }
      ]
    }
  ];

  const handleItemCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const getSectionProgress = (sectionId: string) => {
    const sectionItems = sections.find(s => s.id === sectionId)?.items || [];
    const completedItems = sectionItems.filter(item => checkedItems[item.id]).length;
    return Math.round((completedItems / sectionItems.length) * 100);
  };

  const getTotalProgress = () => {
    const totalItems = sections.reduce((acc, section) => acc + section.items.length, 0);
    const completedItems = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "média":
        return "bg-accent/10 text-accent border-accent/20";
      case "baixa":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const totalProgress = getTotalProgress();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <CheckSquare className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Checklist de Progresso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe seu progresso e garanta que está seguindo todos os passos importantes
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-primary-glow border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between text-white mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Progresso Geral</h3>
                <p className="text-white/90">Continue assim! Você está indo muito bem.</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">{totalProgress}%</div>
                <div className="text-white/90">Concluído</div>
              </div>
            </div>
            <div className="bg-white/20 rounded-full h-3">
              <div 
                className="bg-white rounded-full h-3 transition-all duration-500 ease-out" 
                style={{ width: `${totalProgress}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground mb-1">13</div>
              <div className="text-sm text-muted-foreground">Total de Tarefas</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <CheckSquare className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success mb-1">
                {Object.values(checkedItems).filter(Boolean).length}
              </div>
              <div className="text-sm text-muted-foreground">Concluídas</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent mb-1">
                {13 - Object.values(checkedItems).filter(Boolean).length}
              </div>
              <div className="text-sm text-muted-foreground">Pendentes</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <Trophy className="h-8 w-8 text-primary mb-2 mx-auto" />
              <div className="text-2xl font-bold text-primary mb-1">
                {sections.filter(s => getSectionProgress(s.id) === 100).length}
              </div>
              <div className="text-sm text-muted-foreground">Seções Completas</div>
            </CardContent>
          </Card>
        </div>

        {/* Checklist Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const progress = getSectionProgress(section.id);
            const SectionIcon = section.icon;
            
            return (
              <Card key={section.id} className="overflow-hidden border-border">
                <CardHeader className="bg-card border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-muted rounded-full">
                        <SectionIcon className={`h-6 w-6 ${section.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{section.title}</CardTitle>
                        <CardDescription>{section.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">{progress}%</div>
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-500 ease-out" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                        <Checkbox
                          id={item.id}
                          checked={checkedItems[item.id] || false}
                          onCheckedChange={() => handleItemCheck(item.id)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <div className="flex-1">
                          <label 
                            htmlFor={item.id}
                            className={`font-medium cursor-pointer transition-colors duration-200 ${
                              checkedItems[item.id] 
                                ? 'text-muted-foreground line-through' 
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            {item.task}
                          </label>
                        </div>
                        <Badge className={getPriorityColor(item.priority)} variant="outline">
                          {item.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Baixar Checklist PDF
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Compartilhar Progresso
            </Button>
          </div>
          {totalProgress === 100 && (
            <Card className="bg-success-light border-success/20 max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-bold text-success mb-2">Parabéns!</h3>
                <p className="text-success">Você completou todos os itens do checklist!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checklist;