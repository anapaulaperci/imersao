import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckSquare, Circle, Trophy, Target, Clock, TrendingUp, Plus, Calendar } from "lucide-react";
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

  const [taskThemes, setTaskThemes] = useState<Record<string, string>>({});

  const themeOptions = [
    "Posicionamento",
    "Linha Editorial", 
    "Vendas",
    "Produção de Conteúdo",
    "Análise"
  ];

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
      title: "Plano de Implementação",
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

  const handleThemeChange = (itemId: string, theme: string) => {
    setTaskThemes(prev => ({
      ...prev,
      [itemId]: theme
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
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Checklist de Posicionamento
              </h1>
              <p className="text-muted-foreground">
                Acompanhe seu progresso através dos marcos do projeto
              </p>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Item
            </Button>
          </div>
          
          {/* Date Section */}
          <div className="mb-6">
            <div className="space-y-2">
              <Label htmlFor="completion-date" className="text-sm font-medium">
                Data de Conclusão
              </Label>
              <div className="relative max-w-xs">
                <Input 
                  id="completion-date"
                  type="date"
                  className="w-full"
                />
                <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progresso Geral</span>
              <span className="font-medium text-foreground">{totalProgress}%</span>
            </div>
            <Progress value={totalProgress} className="h-2" />
          </div>
        </div>

        {/* Checklist Items */}
        <div className="space-y-4">
          {sections.map((section) => {
            const progress = getSectionProgress(section.id);
            const SectionIcon = section.icon;
            
            return (
              <Card key={section.id} className="border border-border/50 shadow-sm">
                {/* Section Header */}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <SectionIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {section.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {section.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {section.items.filter(item => checkedItems[item.id]).length}/{section.items.length}
                      </div>
                      <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-300" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {/* Section Items */}
                <CardContent className="pt-0 space-y-4">
                  {section.items.map((item) => (
                    <div 
                      key={item.id} 
                      className="border border-border/30 rounded-lg p-4 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <Checkbox
                          id={item.id}
                          checked={checkedItems[item.id] || false}
                          onCheckedChange={() => handleItemCheck(item.id)}
                          className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <div className="flex-1 min-w-0">
                          <label 
                            htmlFor={item.id}
                            className={`block text-sm font-medium cursor-pointer transition-colors ${
                              checkedItems[item.id] 
                                ? 'text-muted-foreground line-through' 
                                : 'text-foreground hover:text-primary'
                            }`}
                          >
                            {item.task}
                          </label>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getPriorityColor(item.priority)} shrink-0`}
                        >
                          {item.priority}
                        </Badge>
                      </div>
                      
                      {/* Theme Selector */}
                      <div className="ml-6 max-w-xs">
                        <Label htmlFor={`theme-${item.id}`} className="text-xs text-muted-foreground mb-1 block">
                          Tema da Tarefa
                        </Label>
                        <Select 
                          value={taskThemes[item.id] || ""} 
                          onValueChange={(value) => handleThemeChange(item.id, value)}
                        >
                          <SelectTrigger 
                            id={`theme-${item.id}`}
                            className="h-8 text-xs bg-background border-border/50"
                          >
                            <SelectValue placeholder="Selecione um tema" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border border-border shadow-lg z-50">
                            {themeOptions.map((theme) => (
                              <SelectItem key={theme} value={theme} className="text-xs">
                                {theme}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="sm">
            Exportar Progresso
          </Button>
        </div>

        {/* Success Message */}
        {totalProgress === 100 && (
          <Card className="mt-6 border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2">Parabéns!</h3>
              <p className="text-green-700">Você completou todos os itens do checklist!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Checklist;