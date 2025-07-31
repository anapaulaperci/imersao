import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Clock, User, Play, Star, ArrowRight, Download } from "lucide-react";

const Resumos = () => {
  const [userRatings, setUserRatings] = useState<{[key: number]: number}>({});

  const handleRating = (resumoId: number, rating: number) => {
    setUserRatings(prev => ({
      ...prev,
      [resumoId]: rating
    }));
  };

  const renderStars = (resumoId: number, currentRating: number) => {
    const userRating = userRatings[resumoId] || 0;
    
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(resumoId, star)}
            className="group/star"
          >
            <Star 
              className={`h-4 w-4 transition-colors cursor-pointer ${
                star <= userRating 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-300 hover:text-yellow-300'
              }`}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {userRating > 0 ? `${userRating}/5` : `${currentRating}/5.0`}
        </span>
      </div>
    );
  };

  const openPalestraContent = (resumo: typeof resumos[0]) => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${resumo.title} - Material de Estudos</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background: #fafafa;
              color: #333;
            }
            .dark body {
              background: #1a1a1a;
              color: #e5e5e5;
            }
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }
            @media (min-width: 640px) {
              .container {
                padding: 0 1.5rem;
              }
            }
            @media (min-width: 1024px) {
              .container {
                padding: 0 2rem;
              }
            }
          </style>
        </head>
        <body>
          <!-- Hero -->
          <div class="container">
            <div style="padding-top: 2.5rem; padding-bottom: 3.5rem;">
              <!-- Heading -->
              <div style="margin-bottom: 2.5rem; max-width: 36rem; margin-left: auto; margin-right: auto; text-align: center;">
                <h1 style="font-weight: 700; color: #1f2937; font-size: 2.25rem; margin: 0 0 1.25rem 0; line-height: 1.2;">
                  ${resumo.title}
                </h1>
                <p style="margin-top: 1.25rem; font-size: 1rem; color: #374151; line-height: 1.6;">
                  ${resumo.description}. Este material exclusivo da Imersão Posicionamento 2024 oferece insights práticos e estratégias comprovadas para transformar sua abordagem profissional.
                </p>
                
                <!-- Meta info -->
                <div style="margin-top: 1.5rem; display: flex; justify-content: center; gap: 1.5rem; font-size: 0.875rem; color: #6b7280;">
                  <span><strong>Instrutor:</strong> ${resumo.author}</span>
                  <span><strong>Duração:</strong> ${resumo.duration}</span>
                  <span><strong>Categoria:</strong> ${resumo.category}</span>
                </div>
              </div>
              <!-- End Heading -->

              <div style="width: 100%; height: 16rem; background: #f3f4f6; border-radius: 0.75rem; margin-bottom: 2rem; overflow: hidden;">
                <img style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.75rem;" src="${resumo.image}" alt="${resumo.title}" />
              </div>
              
              @media (min-width: 768px) {
                <div style="width: 100%; height: 24rem; background: #f3f4f6; border-radius: 0.75rem; margin-bottom: 2rem; overflow: hidden;">
                  <img style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.75rem;" src="${resumo.image}" alt="${resumo.title}" />
                </div>
              }
            </div>
          </div>
          <!-- End Hero -->

          <!-- Title Description -->
          <div class="container">
            <!-- Grid -->
            <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem;">
              <div style="padding-right: 20%;">
                <h2 style="font-weight: 600; font-size: 1.5rem; color: #1f2937; margin: 0 0 1.5rem 0;">
                  Transforme teoria em resultados práticos através de estratégias comprovadas
                </h2>
              </div>
              <!-- End Col -->

              <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                <p style="color: #6b7280; line-height: 1.7;">
                  Esta palestra foi desenvolvida especificamente para profissionais que buscam excelência em posicionamento de marca. Com base em mais de uma década de experiência no mercado, apresentamos metodologias testadas e frameworks práticos que você pode implementar imediatamente em seus projetos.
                </p>
                <p style="color: #6b7280; line-height: 1.7;">
                  Ao longo do conteúdo, você descobrirá como identificar oportunidades únicas de posicionamento, desenvolver propostas de valor irresistíveis e criar estratégias de diferenciação que realmente funcionam no mercado atual. Cada conceito é acompanhado de exemplos reais e casos de sucesso.
                </p>
                <p style="color: #6b7280; line-height: 1.7;">
                  Nossa abordagem vai além da teoria tradicional, oferecendo ferramentas práticas, templates prontos e exercícios aplicáveis que garantem a implementação eficaz das estratégias apresentadas. Ideal para empreendedores, gestores e consultores que desejam resultados mensuráveis.
                </p>
                
                <!-- Seção de Destaques -->
                <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 1.5rem; margin: 2rem 0; border-radius: 0.5rem;">
                  <h3 style="font-weight: 600; font-size: 1.125rem; color: #1f2937; margin: 0 0 1rem 0;">
                    Principais tópicos abordados:
                  </h3>
                  <ul style="margin: 0; padding-left: 1.5rem; color: #374151;">
                    <li style="margin-bottom: 0.5rem;">Fundamentos estratégicos do posicionamento de marca</li>
                    <li style="margin-bottom: 0.5rem;">Análise competitiva e identificação de oportunidades</li>
                    <li style="margin-bottom: 0.5rem;">Desenvolvimento de propostas de valor diferenciadas</li>
                    <li style="margin-bottom: 0.5rem;">Implementação prática e mensuração de resultados</li>
                    <li style="margin-bottom: 0.5rem;">Cases reais e aplicações no mercado atual</li>
                  </ul>
                </div>

                <!-- Metodologia -->
                <div style="margin-top: 2rem;">
                  <h3 style="font-weight: 600; font-size: 1.25rem; color: #1f2937; margin: 0 0 1rem 0;">
                    Metodologia Aplicada
                  </h3>
                  <p style="color: #6b7280; line-height: 1.7;">
                    Utilizamos uma abordagem prática e orientada a resultados, combinando frameworks conceituais sólidos com aplicação imediata. Cada módulo inclui exercícios práticos, ferramentas de trabalho e templates que facilitam a implementação das estratégias em contextos reais.
                  </p>
                </div>

                <!-- Resultados Esperados -->
                <div style="margin-top: 2rem;">
                  <h3 style="font-weight: 600; font-size: 1.25rem; color: #1f2937; margin: 0 0 1rem 0;">
                    Resultados Esperados
                  </h3>
                  <p style="color: #6b7280; line-height: 1.7;">
                    Ao final desta palestra, você terá adquirido conhecimentos práticos para desenvolver estratégias de posicionamento eficazes, ferramentas para análise competitiva aprofundada e a capacidade de criar propostas de valor que realmente diferenciam sua marca no mercado.
                  </p>
                </div>
              </div>
              <!-- End Col -->
            </div>
            <!-- End Grid -->
            
            <div style="margin-top: 3rem; padding: 2rem; background: #f1f5f9; border-radius: 0.75rem; text-align: center;">
              <p style="color: #64748b; font-size: 0.875rem; margin: 0;">
                <strong>Material Exclusivo da Imersão Posicionamento 2024</strong><br>
                Conteúdo desenvolvido especialmente para acelerar sua jornada profissional
              </p>
            </div>
          </div>
          <!-- End Title Description -->
          
          <script>
            @media (min-width: 1024px) {
              document.querySelector('[style*="grid-template-columns: 1fr"]').style.gridTemplateColumns = '1fr 1fr';
              document.querySelector('[style*="gap: 1.25rem"]').style.gap = '2.5rem';
            }
          </script>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  const resumos = [
    {
      id: 1,
      title: "Palestra 01",
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
      title: "Palestra 02",
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
      title: "Palestra 03",
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
      title: "Palestra 04",
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
      title: "Palestra 05",
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
      title: "Palestra 06",
      description: "Como medir e acompanhar o sucesso das suas estratégias de posicionamento de marca.",
      author: "Ana Paula Perci",
      duration: "30 min",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=200&fit=crop&crop=center",
      rating: 4.8,
      lessons: 18,
      isNew: true
    },
    {
      id: 7,
      title: "Palestra 07",
      description: "Estratégias avançadas para consolidar e expandir seu posicionamento no mercado digital.",
      author: "Ana Paula Perci",
      duration: "28 min",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      rating: 4.9,
      lessons: 16,
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section - Medium Style */}
      <div className="border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-normal text-foreground mb-6 leading-tight">
            Material de <span className="italic">Estudos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma coleção de materiais exclusivos para sua jornada de posicionamento digital
          </p>
        </div>
      </div>

      {/* Content Area - Medium Style Feed */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {resumos.map((resumo, index) => (
            <article key={resumo.id} className="group cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Content */}
                <div className="flex-1 order-2 md:order-1">
                  {/* Category & Author */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{resumo.author}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">·</span>
                    <Badge variant="secondary" className={`${getCategoryColor(resumo.category)} text-xs`}>
                      {resumo.category}
                    </Badge>
                    {resumo.isNew && (
                      <>
                        <span className="text-sm text-muted-foreground">·</span>
                        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 text-xs">
                          Novo
                        </Badge>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                    {resumo.title}
                  </h2>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 line-clamp-3">
                    {resumo.description}. Este material foi desenvolvido especificamente para profissionais que desejam aprofundar seus conhecimentos e aplicar estratégias práticas em seus projetos.
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{resumo.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{resumo.lessons} lições</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                      <Button 
                        className="group/btn"
                        onClick={() => openPalestraContent(resumo)}
                      >
                        <BookOpen className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        Abrir
                      </Button>
                    </div>
                  </div>

                  {/* User Rating */}
                  <div className="mt-6 pt-6 border-t border-border/40">
                    <p className="text-sm text-muted-foreground mb-3">Avalie este conteúdo:</p>
                    {renderStars(resumo.id, resumo.rating)}
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 md:order-2 md:w-48 md:flex-shrink-0">
                  <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg bg-muted">
                    <img 
                      src={resumo.image} 
                      alt={resumo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                        <Play className="h-5 w-5 text-gray-900 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Load More / Coming Soon */}
          <div className="border-t border-border/40 pt-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <BookOpen className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Mais conteúdo em breve
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Novos materiais estão sendo preparados. Continue acompanhando para ter acesso aos próximos lançamentos.
              </p>
              <Button variant="outline" className="mt-4">
                <ArrowRight className="h-4 w-4 mr-2" />
                Me notificar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumos;