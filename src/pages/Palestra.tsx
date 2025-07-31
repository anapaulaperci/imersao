import { useParams, Navigate, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { User, ArrowLeft, ChevronRight } from "lucide-react";

const Palestra = () => {
  const { id } = useParams();
  
  const resumos = [
    {
      id: 1,
      title: "Palestra 01",
      description: "Principais conceitos sobre como posicionar sua marca no ambiente digital e construir uma presença sólida online.",
      author: "Ana Paula Perci",
      category: "Fundamentos",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
      isNew: true
    },
    {
      id: 2,
      title: "Palestra 02",
      description: "Como identificar e analisar seus concorrentes para criar vantagens competitivas sustentáveis.",
      author: "Ana Paula Perci", 
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 3,
      title: "Palestra 03",
      description: "Técnicas avançadas para identificar, segmentar e compreender profundamente seu público ideal.",
      author: "Ana Paula Perci",
      category: "Público",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 4,
      title: "Palestra 04",
      description: "Como criar uma proposta de valor única que diferencia seu negócio no mercado competitivo.",
      author: "Ana Paula Perci",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=200&fit=crop&crop=center",
      isNew: true
    },
    {
      id: 5,
      title: "Palestra 05",
      description: "Aprenda a contar a história da sua marca de forma envolvente e memorável para seu público.",
      author: "Ana Paula Perci",
      category: "Fundamentos",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop&crop=center",
      isNew: false
    },
    {
      id: 6,
      title: "Palestra 06",
      description: "Como medir e acompanhar o sucesso das suas estratégias de posicionamento de marca.",
      author: "Ana Paula Perci",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=200&fit=crop&crop=center",
      isNew: true
    },
    {
      id: 7,
      title: "Palestra 07",
      description: "Estratégias avançadas para consolidar e expandir seu posicionamento no mercado digital.",
      author: "Ana Paula Perci",
      category: "Estratégia",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      isNew: true
    }
  ];

  const resumo = resumos.find(r => r.id === parseInt(id || ''));
  
  if (!resumo) {
    return <Navigate to="/resumos" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Fundamentos": "bg-primary/10 text-primary border-primary/20",
      "Estratégia": "bg-success/10 text-success border-success/20", 
      "Público": "bg-accent/10 text-accent-foreground border-accent/20"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground border-muted";
  };

  const otherResumes = resumos.filter(r => r.id !== resumo.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="px-4 sm:px-6 lg:px-8 pt-6">
            <Link 
              to="/resumos" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para Material de Estudos
            </Link>
          </div>

          {/* Hero */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="pt-10 md:pt-20 pb-14 md:pb-20">
              {/* Heading */}
              <div className="mb-10 max-w-xl mx-auto text-center">
                <h1 className="font-bold text-foreground text-4xl md:text-5xl mb-5">
                  {resumo.title}
                </h1>

                <p className="mt-5 text-sm md:text-lg text-muted-foreground">
                  {resumo.description}
                </p>
                
                {/* Meta info */}
                <div className="mt-6 flex justify-center items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-3 w-3 text-primary" />
                    </div>
                    <span><strong>Instrutor:</strong> {resumo.author}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={`${getCategoryColor(resumo.category)} text-xs`}>
                      {resumo.category}
                    </Badge>
                  </div>
                  {resumo.isNew && (
                    <>
                      <span>·</span>
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 text-xs">
                        Novo
                      </Badge>
                    </>
                  )}
                </div>
              </div>
              {/* End Heading */}

              <div className="w-full h-64 md:h-96 bg-muted rounded-xl overflow-hidden">
                <img 
                  className="w-full h-full object-cover rounded-xl" 
                  src={resumo.image} 
                  alt={resumo.title} 
                />
              </div>
            </div>
          </div>
          {/* End Hero */}

          {/* Title Description */}
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
              <div className="lg:pe-[20%]">
                <h2 className="font-semibold text-2xl md:text-3xl text-foreground">
                  Conteúdo em desenvolvimento
                </h2>
              </div>
              {/* End Col */}

              <div className="space-y-5">
                <p className="text-muted-foreground">
                  Este material está sendo preparado especialmente para você. Em breve, todo o conteúdo detalhado estará disponível.
                </p>
                <p className="text-muted-foreground">
                  Enquanto isso, acompanhe nossos outros materiais disponíveis e fique atento às atualizações.
                </p>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            
            <div className="mt-12 p-8 bg-muted/30 rounded-xl text-center">
              <p className="text-muted-foreground text-sm mb-6">
                <strong>Material Exclusivo da Imersão Posicionamento 2024</strong><br />
                Conteúdo desenvolvido especialmente para acelerar sua jornada profissional
              </p>
              
              {/* User Rating */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-3">Avalie este conteúdo:</p>
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="group/star"
                    >
                      <svg className="h-5 w-5 text-muted-foreground hover:text-yellow-400 transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* End Title Description */}
        </div>

        {/* Sidebar - Other Lectures */}
        <div className="hidden xl:block w-80 border-l border-border bg-muted/20">
          <div className="sticky top-0 p-6 h-screen overflow-y-auto">
            <h3 className="font-semibold text-lg text-foreground mb-6">
              Outras Palestras
            </h3>
            
            <div className="space-y-4">
              {otherResumes.map((lecture) => (
                <Link
                  key={lecture.id}
                  to={`/palestra/${lecture.id}`}
                  className="block group"
                >
                  <article className="p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-background/80 transition-all duration-200">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <img 
                          src={lecture.image} 
                          alt={lecture.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className={`${getCategoryColor(lecture.category)} text-xs`}>
                            {lecture.category}
                          </Badge>
                          {lecture.isNew && (
                            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 text-xs">
                              Novo
                            </Badge>
                          )}
                        </div>
                        
                        <h4 className="font-medium text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                          {lecture.title}
                        </h4>
                        
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {lecture.description}
                        </p>
                        
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs text-muted-foreground">{lecture.author}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Palestra;