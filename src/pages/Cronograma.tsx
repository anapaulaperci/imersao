import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, BookOpen, CheckCircle, Circle } from "lucide-react";

const Cronograma = () => {
  const weeks = [
    {
      week: 1,
      title: "Fundamentos do Posicionamento",
      description: "Entenda os conceitos básicos e a importância do posicionamento de marca",
      status: "completed",
      duration: "8 horas",
      modules: [
        { title: "Introdução ao Posicionamento", duration: "2h", completed: true },
        { title: "História e Evolução", duration: "1.5h", completed: true },
        { title: "Casos de Sucesso", duration: "2h", completed: true },
        { title: "Exercícios Práticos", duration: "2.5h", completed: true }
      ]
    },
    {
      week: 2,
      title: "Análise de Mercado",
      description: "Aprenda a analisar concorrentes e identificar oportunidades",
      status: "current",
      duration: "10 horas",
      modules: [
        { title: "Pesquisa de Mercado", duration: "3h", completed: true },
        { title: "Análise da Concorrência", duration: "2.5h", completed: true },
        { title: "Identificação de Gaps", duration: "2h", completed: false },
        { title: "Mapeamento de Oportunidades", duration: "2.5h", completed: false }
      ]
    },
    {
      week: 3,
      title: "Definição da Proposta de Valor",
      description: "Construa uma proposta de valor única e diferenciada",
      status: "upcoming",
      duration: "12 horas",
      modules: [
        { title: "Canvas de Proposta de Valor", duration: "3h", completed: false },
        { title: "Personas e Segmentação", duration: "3h", completed: false },
        { title: "Diferenciação Competitiva", duration: "3h", completed: false },
        { title: "Teste de Hipóteses", duration: "3h", completed: false }
      ]
    },
    {
      week: 4,
      title: "Estratégias de Comunicação",
      description: "Desenvolva estratégias eficazes de comunicação da marca",
      status: "upcoming",
      duration: "10 horas",
      modules: [
        { title: "Mensagem Principal", duration: "2.5h", completed: false },
        { title: "Tom e Voz da Marca", duration: "2.5h", completed: false },
        { title: "Canais de Comunicação", duration: "2.5h", completed: false },
        { title: "Plano de Comunicação", duration: "2.5h", completed: false }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground";
      case "current":
        return "bg-accent text-accent-foreground";
      case "upcoming":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluído";
      case "current":
        return "Em Andamento";
      case "upcoming":
        return "Em Breve";
      default:
        return "Pendente";
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Calendar className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cronograma de Estudos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siga nosso cronograma estruturado para dominar o posicionamento de marca em 4 semanas
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-primary-glow border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">Seu Progresso</h3>
                <p className="text-white/90">Semana 2 de 4 - Continue assim!</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">37%</div>
                <div className="text-white/90">Concluído</div>
              </div>
            </div>
            <div className="mt-4 bg-white/20 rounded-full h-2">
              <div className="bg-white rounded-full h-2" style={{ width: "37%" }}></div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Schedule */}
        <div className="space-y-6">
          {weeks.map((week, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <CardHeader className="bg-card border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <span className="text-lg font-bold text-primary">{week.week}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{week.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {week.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(week.status)}>
                      {getStatusText(week.status)}
                    </Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{week.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {week.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200">
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h4 className={`font-medium ${module.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {module.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{module.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {week.status === "current" && (
                  <div className="mt-6 flex gap-3">
                    <Button className="flex-1 sm:flex-none">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Continuar Estudos
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-none">
                      Ver Materiais
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tips */}
        <Card className="mt-12 bg-accent-light border-accent/20">
          <CardHeader>
            <CardTitle className="text-accent">💡 Dicas de Estudo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Dedique pelo menos 2 horas por dia aos estudos</li>
              <li>• Faça anotações durante os vídeos e leituras</li>
              <li>• Pratique os conceitos com casos reais da sua empresa</li>
              <li>• Participe das discussões no fórum da comunidade</li>
              <li>• Revise o conteúdo da semana anterior antes de avançar</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cronograma;