import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Clock, User, Play, Star, ArrowRight, Download } from "lucide-react";

const Resumos = () => {
  const resumos = [
    {
      id: 1,
      title: "Estratégias de Posicionamento Digital",
      description: "Principais conceitos sobre como posicionar sua marca no ambiente digital e construir uma presença sólida online.",
      author: "Ana Paula Perci",
      duration: "15 min",
      category: "Fundamentos",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
      rating: 4.9,
      lessons: 8,
      isNew: true
    },
    {
      id: 2,
      title: "Análise de Concorrência",
      description: "Como identificar e analisar seus concorrentes para criar vantagens competitivas sustentáveis.",
      author: "Ana Paula Perci", 
      duration: "20 min",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop&crop=center",
      rating: 4.8,
      lessons: 12,
      isNew: false
    },
    {
      id: 3,
      title: "Definindo seu Público-Alvo",
      description: "Técnicas avançadas para identificar, segmentar e compreender profundamente seu público ideal.",
      author: "Ana Paula Perci",
      duration: "18 min", 
      category: "Público",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center",
      rating: 4.7,
      lessons: 10,
      isNew: false
    },
    {
      id: 4,
      title: "Construção de Proposta de Valor",
      description: "Como criar uma proposta de valor única que diferencia seu negócio no mercado competitivo.",
      author: "Ana Paula Perci",
      duration: "25 min",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=200&fit=crop&crop=center",
      rating: 4.9,
      lessons: 15,
      isNew: true
    },
    {
      id: 5,
      title: "Brand Storytelling",
      description: "Aprenda a contar a história da sua marca de forma envolvente e memorável para seu público.",
      author: "Ana Paula Perci",
      duration: "22 min",
      category: "Fundamentos",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop&crop=center",
      rating: 4.6,
      lessons: 9,
      isNew: false
    },
    {
      id: 6,
      title: "Métricas de Posicionamento",
      description: "Como medir e acompanhar o sucesso das suas estratégias de posicionamento de marca.",
      author: "Ana Paula Perci",
      duration: "30 min",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=200&fit=crop&crop=center",
      rating: 4.8,
      lessons: 18,
      isNew: true
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Fundamentos": "bg-primary/10 text-primary border-primary/20",
      "Estratégia": "bg-success/10 text-success border-success/20", 
      "Público": "bg-accent/10 text-accent-foreground border-accent/20"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground border-muted";
  };

  const totalLessons = resumos.reduce((acc, resumo) => acc + resumo.lessons, 0);
  const totalDuration = resumos.reduce((acc, resumo) => acc + parseInt(resumo.duration), 0);
  const averageRating = (resumos.reduce((acc, resumo) => acc + resumo.rating, 0) / resumos.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Material de Estudo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdos exclusivos e materiais de apoio para sua jornada de posicionamento
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{resumos.length}</div>
              <div className="text-sm text-muted-foreground">Módulos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{totalLessons}</div>
              <div className="text-sm text-muted-foreground">Lições</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">{totalDuration}h</div>
              <div className="text-sm text-muted-foreground">Conteúdo</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-current" />
                {averageRating}
              </div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </CardContent>
          </Card>
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="w-full space-y-5">
            {resumos.map((resumo) => (
              <div key={resumo.id} className="group flex justify-start gap-x-3">
                {/* Avatar */}
                <div className="shrink-0 mt-auto">
                  <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Chat Bubble */}
                <div className="max-w-2xl">
                  <p className="mb-1.5 ps-2.5 text-xs text-muted-foreground">{resumo.author}</p>

                  <div className="space-y-1">
                    {/* Message */}
                    <div className="group/bubble flex justify-start gap-x-2">
                      <div className="text-start bg-primary/5 dark:bg-primary/10 inline-block rounded-xl pt-3 pb-2 px-4 border border-primary/10">
                        <div className="text-sm text-foreground">
                          
                          {/* Image Preview */}
                          <div className="mb-3 py-2 px-1 relative cursor-default bg-muted/50 before:bg-primary before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full rounded-lg overflow-hidden">
                            <div 
                              className="h-32 bg-cover bg-center rounded-md"
                              style={{ backgroundImage: `url(${resumo.image})` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-md" />
                              
                              {/* Badges on image */}
                              <div className="absolute top-2 left-2 flex gap-1">
                                <Badge variant="secondary" className={`${getCategoryColor(resumo.category)} border text-xs`}>
                                  {resumo.category}
                                </Badge>
                                {resumo.isNew && (
                                  <Badge className="bg-success text-success-foreground text-xs">
                                    Novo
                                  </Badge>
                                )}
                              </div>

                              {/* Play overlay */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                                  <Play className="h-4 w-4 text-white fill-current" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                            {resumo.title}
                          </h3>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {resumo.description}
                          </p>

                          {/* Meta info */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {resumo.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="h-3 w-3" />
                                {resumo.lessons} lições
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-current text-yellow-500" />
                                {resumo.rating}
                              </div>
                            </div>
                          </div>

                          {/* Action buttons */}
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 group/btn">
                              <Play className="h-3 w-3 mr-1.5 transition-transform group-hover/btn:scale-110" />
                              Iniciar
                            </Button>
                            <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                              <Download className="h-3 w-3 mr-1.5" />
                              Baixar
                            </Button>
                          </div>

                          <span className="block mt-2">
                            <span className="text-[11px] text-muted-foreground italic">Material exclusivo</span>
                          </span>
                        </div>
                      </div>

                      {/* More Dropdown */}
                      <div className="lg:opacity-0 lg:group-hover/bubble:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="size-8 text-muted-foreground hover:bg-muted">
                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1"/>
                            <circle cx="12" cy="5" r="1"/>
                            <circle cx="12" cy="19" r="1"/>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <Card className="group border-dashed border-2 border-muted-foreground/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-muted/20 to-muted/10">
              <CardContent className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Novos Conteúdos em Breve
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Estamos sempre criando novos materiais para enriquecer sua jornada de aprendizado
                  </p>
                </div>
                <Button variant="outline" className="group/btn">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4 pt-8">
          <div className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Pronto para acelerar seu aprendizado?
            </h3>
            <p className="text-muted-foreground mb-4">
              Acesse todos os materiais e transforme seu posicionamento de marca
            </p>
            <Button size="lg" className="group">
              Explorar Tudo
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumos;