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
              max-width: 800px;
              margin: 0 auto;
              padding: 40px 20px;
              background: #fafafa;
              color: #333;
            }
            .header {
              border-bottom: 1px solid #e0e0e0;
              padding-bottom: 30px;
              margin-bottom: 30px;
            }
            .category {
              background: #f0f0f0;
              color: #666;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              display: inline-block;
              margin-bottom: 20px;
            }
            .title {
              font-size: 42px;
              font-weight: 700;
              margin: 0 0 20px 0;
              line-height: 1.2;
            }
            .meta {
              color: #666;
              font-size: 14px;
              margin-bottom: 30px;
            }
            .author {
              font-weight: 500;
            }
            .content {
              font-size: 18px;
              line-height: 1.8;
            }
            .section {
              margin: 40px 0;
            }
            .section h2 {
              font-size: 24px;
              font-weight: 600;
              margin: 30px 0 15px 0;
            }
            .section h3 {
              font-size: 20px;
              font-weight: 600;
              margin: 25px 0 10px 0;
            }
            .highlights {
              background: #f8f9fa;
              border-left: 4px solid #0066cc;
              padding: 20px;
              margin: 30px 0;
              border-radius: 4px;
            }
            .image-container {
              text-align: center;
              margin: 40px 0;
            }
            .image-container img {
              max-width: 100%;
              border-radius: 8px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="category">${resumo.category}</div>
            <h1 class="title">${resumo.title}</h1>
            <div class="meta">
              <span class="author">${resumo.author}</span> • 
              ${resumo.duration} de leitura • 
              ${resumo.lessons} lições
            </div>
          </div>

          <div class="image-container">
            <img src="${resumo.image}" alt="${resumo.title}" />
          </div>

          <div class="content">
            <div class="highlights">
              <strong>Resumo:</strong> ${resumo.description}
            </div>

            <div class="section">
              <h2>Introdução</h2>
              <p>Este material foi cuidadosamente desenvolvido para profissionais que desejam aprofundar seus conhecimentos em posicionamento de marca e aplicar estratégias práticas em seus projetos. Ao longo desta palestra, você descobrirá insights valiosos e metodologias comprovadas que podem transformar a forma como você aborda o posicionamento digital.</p>
            </div>

            <div class="section">
              <h2>Principais Tópicos Abordados</h2>
              <h3>1. Fundamentos do Posicionamento</h3>
              <p>Compreenda os pilares fundamentais que sustentam uma estratégia de posicionamento eficaz. Desde a análise do mercado até a identificação de oportunidades únicas, este módulo estabelece as bases para todo o processo estratégico.</p>

              <h3>2. Análise Competitiva</h3>
              <p>Aprenda a mapear o cenário competitivo de forma sistemática, identificando gaps de mercado e oportunidades de diferenciação. Utilize ferramentas práticas para posicionar sua marca de forma única e memorável.</p>

              <h3>3. Definição de Proposta de Valor</h3>
              <p>Desenvolva uma proposta de valor clara e convincente que ressoe com seu público-alvo. Descubra como articular os benefícios únicos que sua marca oferece de maneira que gere conexão emocional e racional.</p>

              <h3>4. Implementação Prática</h3>
              <p>Transforme conceitos em ações concretas através de frameworks testados e metodologias práticas. Aprenda a criar um plano de implementação que garanta resultados mensuráveis e sustentáveis.</p>
            </div>

            <div class="section">
              <h2>Metodologia</h2>
              <p>Nossa abordagem combina teoria fundamentada com aplicação prática imediata. Cada conceito apresentado vem acompanhado de exemplos reais, casos de estudo e exercícios que permitem a aplicação imediata do conhecimento adquirido.</p>
              
              <p>Os participantes têm acesso a templates, checklists e ferramentas que facilitam a implementação das estratégias em seus próprios contextos profissionais, garantindo que o aprendizado se traduza em resultados tangíveis.</p>
            </div>

            <div class="section">
              <h2>Resultados Esperados</h2>
              <p>Ao final desta palestra, você estará equipado com:</p>
              <ul>
                <li>Uma compreensão profunda dos fundamentos do posicionamento estratégico</li>
                <li>Ferramentas práticas para análise competitiva e identificação de oportunidades</li>
                <li>Metodologias comprovadas para desenvolvimento de propostas de valor únicas</li>
                <li>Um plano de ação personalizado para implementação em seus projetos</li>
                <li>Acesso a recursos exclusivos e materiais complementares</li>
              </ul>
            </div>

            <div class="section">
              <h2>Para Quem é Este Conteúdo</h2>
              <p>Este material é ideal para empreendedores, gestores de marketing, consultores, freelancers e qualquer profissional que deseje:</p>
              <ul>
                <li>Fortalecer o posicionamento de sua marca ou negócio</li>
                <li>Desenvolver estratégias de diferenciação competitiva</li>
                <li>Criar propostas de valor mais atrativas e eficazes</li>
                <li>Implementar processos estruturados de posicionamento</li>
                <li>Acelerar o crescimento através de posicionamento estratégico</li>
              </ul>
            </div>

            <div class="highlights">
              <strong>Nota importante:</strong> Este conteúdo faz parte da Imersão Posicionamento 2024 e representa anos de experiência prática condensados em um formato acessível e acionável. Aproveite cada insight e aplique os conhecimentos em seus projetos para maximizar os resultados.
            </div>
          </div>
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