import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram } from "lucide-react";

const Home = () => {
  const speakers = [
    {
      name: "Ana Paula Perci",
      description: "Especialista em Posicionamento de Marca",
      instagram: "https://www.instagram.com/anapaulaperci/",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Camilo Coutinho",
      description: "Estrategista digital e autoridade em Video Marketing",
      bio: "Sou estrategista especializado em vídeo marketing e criação de conteúdo de vendas, com a missão de transformar qualquer mensagem em vídeos que realmente convertem, em qualquer plataforma. Autor do livro Vídeos que Vendem Mais (2020), ajudo empresas e criadores a dominarem o poder das suas marcas e empresas em conteúdos que impulsionam resultados.",
      instagram: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Melina Dantas",
      description: "Palestrante Convidada",
      instagram: "#",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Sabrina",
      description: "Palestrante Convidada",
      instagram: "#",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe18b8"
    },
    {
      name: "Victor",
      description: "Palestrante Convidado",
      instagram: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <div className="min-h-screen relative">

      {/* Hero */}
      <div className="bg-background">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-12 md:pb-24">
          {/* Brands */}
          <div className="mb-3 py-1 px-3 inline-flex items-center gap-x-1.5 bg-muted/20 border border-border text-foreground text-sm rounded-full">
            <div className="-ms-2 flex items-center -space-x-3">
              <div className="size-7 flex shrink-0 justify-center items-center bg-primary/10 rounded-full">
                <img 
                  src="/lovable-uploads/7433a794-51a8-45eb-81be-aeaccb87a06f.png" 
                  alt="Logo" 
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>

            Sem pressa e sem pausa
          </div>
          {/* End Brands */}

          <h1 className="font-semibold text-foreground text-5xl md:text-6xl">
            <span className="text-primary">Imersão de Posicionamento,</span> produção de conteúdo e vendas.
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-xl font-semibold text-foreground">
              Por: Ana Paula Perci e Convidados.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 xl:px-0">
          <div className="h-100 md:h-150 bg-[url('https://images.unsplash.com/photo-1743360543515-d3b506e6d3c2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat relative rounded-xl">
            {/* Play Button */}
            <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
              <button type="button" className="size-16 flex shrink-0 justify-center items-center bg-primary text-primary-foreground rounded-full hover:scale-115 focus:outline-hidden focus:scale-115 transition-all duration-200">
                <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
              </button>
            </div>
            {/* End Play Button */}
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Speakers Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Palestrantes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça os especialistas que compartilharão seus conhecimentos na imersão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {speakers.map((speaker, index) => (
              <a 
                key={index}
                href={speaker.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer text-center"
              >
                <div className="transition-all duration-300 hover:-translate-y-2">
                  <div className="relative mb-4">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-white/90 rounded-full shadow-lg">
                        <Instagram className="h-4 w-4 text-pink-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {speaker.description}
                    </p>
                    {speaker.bio && (
                      <p className="text-xs text-muted-foreground line-clamp-3 max-w-xs mx-auto">
                        {speaker.bio}
                      </p>
                    )}
                  </div>
                </div>
              </a>
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