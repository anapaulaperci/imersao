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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/7433a794-51a8-45eb-81be-aeaccb87a06f.png" 
                  alt="Logo" 
                  className="w-4 h-4 object-contain"
                />
              </div>
              Sem pressa e sem pausa
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Imersão de Posicionamento,
              </span>
              <br />
              <span className="text-gray-800">
                produção de conteúdo e vendas.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium">
              Por: Ana Paula Perci e Convidados.
            </p>

            {/* CTA Button */}
            <Link to="/cronograma">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Começar Jornada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Hero Image */}
            <div className="mt-16 relative">
              <div className="relative max-w-4xl mx-auto">
                <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1743360543515-d3b506e6d3c2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        type="button" 
                        className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Speakers
            </h2>
            <Button 
              variant="outline" 
              className="bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 px-6 py-2"
            >
              See all speakers
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
            {speakers.map((speaker, index) => (
              <a 
                key={index}
                href={speaker.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer text-center"
              >
                <div className="transition-all duration-300">
                  <div className="relative mb-8">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                      <img 
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold text-2xl text-gray-900">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {speaker.description}
                    </p>
                    {speaker.bio && (
                      <p className="text-xs text-gray-500 line-clamp-3 max-w-xs mx-auto leading-relaxed mt-2">
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
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-purple-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para começar sua 
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"> jornada?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a centenas de profissionais que já transformaram suas carreiras
            </p>
            <Link to="/cronograma">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Iniciar Imersão
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;