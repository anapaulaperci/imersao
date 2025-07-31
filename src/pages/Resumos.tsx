import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Filter, BookOpen, Video, File, Users } from "lucide-react";
import { useState } from "react";

const Resumos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos", count: 24 },
    { id: "fundamentals", name: "Fundamentos", count: 8 },
    { id: "strategy", name: "Estratégia", count: 6 },
    { id: "communication", name: "Comunicação", count: 5 },
    { id: "cases", name: "Casos", count: 5 }
  ];

  const materials = [
    {
      id: 1,
      title: "Introdução ao Posicionamento de Marca",
      description: "Conceitos fundamentais e definições essenciais para entender posicionamento",
      type: "pdf",
      category: "fundamentals",
      duration: "15 min",
      pages: 12,
      downloadCount: 1205,
      tags: ["básico", "conceitos", "introdução"]
    },
    {
      id: 2,
      title: "Framework de Análise Competitiva",
      description: "Metodologia completa para analisar concorrentes e identificar oportunidades",
      type: "video",
      category: "strategy",
      duration: "32 min",
      downloadCount: 890,
      tags: ["análise", "concorrentes", "estratégia"]
    },
    {
      id: 3,
      title: "Canvas de Proposta de Valor - Template",
      description: "Template editável para desenvolver sua proposta de valor única",
      type: "template",
      category: "strategy",
      duration: "45 min",
      downloadCount: 1567,
      tags: ["template", "proposta", "valor"]
    },
    {
      id: 4,
      title: "Casos de Sucesso: Nike e Apple",
      description: "Análise detalhada das estratégias de posicionamento dessas marcas icônicas",
      type: "case",
      category: "cases",
      duration: "28 min",
      downloadCount: 2341,
      tags: ["cases", "nike", "apple", "sucesso"]
    },
    {
      id: 5,
      title: "Estratégias de Comunicação Digital",
      description: "Como comunicar seu posicionamento nos canais digitais modernos",
      type: "pdf",
      category: "communication",
      duration: "22 min",
      pages: 18,
      downloadCount: 1123,
      tags: ["digital", "comunicação", "canais"]
    },
    {
      id: 6,
      title: "Workshop: Definindo Personas",
      description: "Guia prático para criar personas eficazes para seu posicionamento",
      type: "video",
      category: "strategy",
      duration: "41 min",
      downloadCount: 978,
      tags: ["personas", "workshop", "prático"]
    },
    {
      id: 7,
      title: "Checklist de Posicionamento",
      description: "Lista completa para validar se seu posicionamento está correto",
      type: "checklist",
      category: "fundamentals",
      duration: "10 min",
      downloadCount: 1890,
      tags: ["checklist", "validação", "posicionamento"]
    },
    {
      id: 8,
      title: "Métricas de Posicionamento",
      description: "Como medir e acompanhar a eficácia do seu posicionamento de marca",
      type: "pdf",
      category: "strategy",
      duration: "25 min",
      pages: 15,
      downloadCount: 756,
      tags: ["métricas", "acompanhamento", "kpis"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <File className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "template":
        return <FileText className="h-5 w-5" />;
      case "case":
        return <Users className="h-5 w-5" />;
      case "checklist":
        return <BookOpen className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "pdf":
        return "bg-destructive/10 text-destructive";
      case "video":
        return "bg-accent/10 text-accent";
      case "template":
        return "bg-success/10 text-success";
      case "case":
        return "bg-primary/10 text-primary";
      case "checklist":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resumos e Materiais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesse nossa biblioteca completa de materiais de estudo, templates e recursos práticos
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por título, descrição ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="default">
              <Filter className="h-4 w-4 mr-2" />
              Filtros Avançados
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Total de Materiais</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent mb-1">12</div>
              <div className="text-sm text-muted-foreground">Vídeo Aulas</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-success mb-1">8</div>
              <div className="text-sm text-muted-foreground">Templates</div>
            </CardContent>
          </Card>
          <Card className="text-center border-border">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-destructive mb-1">15.2k</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </CardContent>
          </Card>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <Card key={material.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(material.type)}`}>
                    {getTypeIcon(material.type)}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {material.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-200">
                  {material.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {material.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {material.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{material.downloadCount.toLocaleString()} downloads</span>
                  {material.pages && <span>{material.pages} páginas</span>}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Abrir
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMaterials.length === 0 && (
          <div className="text-center py-12">
            <div className="p-4 bg-muted/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Nenhum material encontrado</h3>
            <p className="text-muted-foreground">Tente ajustar os filtros ou termos de busca</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resumos;