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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="relative px-6 py-16 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BookOpen className="mr-2 h-4 w-4" />
              Material Exclusivo
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Biblioteca de <span className="text-primary">Estudos</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Acesse conteúdos curados e materiais premium para acelerar sua jornada de posicionamento digital
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: 'Módulos', value: resumos.length, icon: FileText },
              { label: 'Lições', value: totalLessons, icon: BookOpen },
              { label: 'Horas', value: `${totalDuration}h`, icon: Clock },
              { label: 'Avaliação', value: averageRating, icon: Star }
            ].map((stat, index) => (
              <div key={index} className="rounded-2xl bg-card/50 p-6 text-center backdrop-blur-sm border border-border/50">
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content List */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {resumos.map((resumo, index) => (
              <div key={resumo.id} className="group relative overflow-hidden rounded-3xl bg-card/70 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-card/90 hover:shadow-xl">
                <div className="flex flex-col">
                  {/* Hero Section */}
                  <div className="px-8 pt-8 pb-6">
                    <div className="mb-6 max-w-3xl">
                      <div className="mb-4 flex items-center gap-3">
                        <Badge className={`${getCategoryColor(resumo.category)} backdrop-blur-sm`}>
                          {resumo.category}
                        </Badge>
                        {resumo.isNew && (
                          <Badge className="bg-emerald-500/90 text-white backdrop-blur-sm">
                            Novo
                          </Badge>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{resumo.author}</span>
                        </div>
                      </div>

                      <h1 className="font-bold text-foreground text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">
                        {resumo.title}
                      </h1>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {resumo.description}. Este material foi desenvolvido especificamente para profissionais que desejam aprofundar seus conhecimentos e aplicar estratégias práticas em seus projetos.
                      </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full h-64 md:h-80 bg-muted rounded-2xl overflow-hidden">
                      <img 
                        className="size-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                        src={resumo.image} 
                        alt={resumo.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                          <Play className="h-10 w-10 text-white fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-8 pb-8">
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                      <div className="lg:pr-8">
                        <h2 className="font-semibold text-xl md:text-2xl text-foreground mb-4">
                          Transforme seu conhecimento em resultados práticos
                        </h2>
                      </div>

                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Este módulo oferece uma abordagem estruturada e prática, baseada em métodos comprovados e casos reais de sucesso. Você aprenderá não apenas a teoria, mas como aplicar cada conceito no seu dia a dia profissional.
                        </p>
                        <p className="text-muted-foreground">
                          Com exemplos práticos, templates prontos e exercícios interativos, este conteúdo foi pensado para acelerar sua curva de aprendizado e gerar resultados imediatos em seus projetos.
                        </p>
                        <p className="text-muted-foreground">
                          Ideal para profissionais que buscam se destacar no mercado digital e construir uma base sólida para o crescimento sustentável de seus negócios ou carreiras.
                        </p>

                        {/* Meta Information */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{resumo.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>{resumo.lessons} lições</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{resumo.rating}/5.0</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1 h-12 rounded-xl font-medium group/btn">
                            <Play className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                            Começar Agora
                          </Button>
                          <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl hover:bg-primary hover:text-primary-foreground">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Section */}
            <div className="mt-12 rounded-3xl border-2 border-dashed border-muted-foreground/20 bg-gradient-to-br from-muted/20 to-transparent p-12 text-center transition-all duration-300 hover:border-primary/40">
              <div className="mx-auto max-w-md space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Mais Conteúdo em Breve
                </h3>
                <p className="text-muted-foreground">
                  Novos materiais e recursos estão sendo desenvolvidos para enriquecer ainda mais sua experiência de aprendizado.
                </p>
                <Button variant="outline" className="group">
                  Me Notificar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumos;