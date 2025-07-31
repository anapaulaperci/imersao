import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, FileText, CheckSquare, User, ArrowRight, Star, Target, Zap } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Cronograma Estruturado",
      description: "Organize seus estudos com um cronograma personalizado",
      color: "text-accent",
      path: "/cronograma"
    },
    {
      icon: FileText,
      title: "Resumos Completos",
      description: "Acesse materiais de estudo organizados e resumos práticos",
      color: "text-primary",
      path: "/resumos"
    },
    {
      icon: CheckSquare,
      title: "Checklist de Progresso",
      description: "Acompanhe seu progresso com checklists interativos",
      color: "text-success",
      path: "/checklist"
    },
    {
      icon: User,
      title: "Perfil Personalizado",
      description: "Gerencie suas informações e acompanhe estatísticas",
      color: "text-foreground",
      path: "/perfil"
    }
  ];

  const stats = [
    { icon: Star, value: "100+", label: "Conteúdos" },
    { icon: Target, value: "95%", label: "Taxa de Sucesso" },
    { icon: Zap, value: "24/7", label: "Acesso" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-glow to-accent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Imersão Posicionamento
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-in">
              Domine as estratégias de posicionamento de marca com nosso programa completo de estudos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/cronograma">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/resumos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-lg">
                  Ver Conteúdos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas completas para acelerar seu aprendizado em posicionamento de marca
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border hover:border-primary/20">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                        <feature.icon className={`h-8 w-8 ${feature.color} group-hover:text-primary transition-colors duration-300`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a centenas de profissionais que já transformaram suas carreiras
          </p>
          <Link to="/cronograma">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
              Iniciar Imersão
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;