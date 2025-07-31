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

      {/* Hero */}
      <div className="bg-background">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-12 md:pb-24">
          {/* Brands */}
          <div className="mb-3 py-1 px-3 inline-flex items-center gap-x-1.5 bg-muted/20 border border-border text-foreground text-sm rounded-full">
            <div className="-ms-2 flex items-center -space-x-3">
              <div className="size-7 flex shrink-0 justify-center items-center bg-primary/10 rounded-full">
                <svg className="shrink-0 size-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z" fill="#36C5F0"></path><path fillRule="evenodd" clip-rule="evenodd" d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z" fill="#2EB67D"></path><path fillRule="evenodd" clip-rule="evenodd" d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z" fill="#ECB22E"></path><path fillRule="evenodd" clip-rule="evenodd" d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z" fill="#E01E5A"></path></svg>
              </div>
              <div className="size-7 flex shrink-0 justify-center items-center bg-primary/10 rounded-full">
                <svg className="shrink-0 size-5" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_12670_125260)"><path d="M20.9373 16.007C20.9379 17.1608 20.7297 18.3053 20.3229 19.385C19.2428 19.7917 18.0981 20.0002 16.9439 20.0004H16.9304C15.7419 19.9989 14.6032 19.7816 13.5524 19.3855C13.1454 18.3056 12.937 17.161 12.9374 16.007V15.993C12.9369 14.8394 13.1448 13.6952 13.5512 12.6155C14.6313 12.208 15.7762 11.9995 16.9306 12H16.9441C18.0983 11.9994 19.2431 12.2079 20.3231 12.6154C20.7299 13.6949 20.938 14.8392 20.9374 15.9929V16.0069L20.9373 16.007ZM32.7152 13.3334H23.3757L29.9793 6.72925C29.461 6.00115 28.8828 5.31757 28.2508 4.68563V4.68512C27.6188 4.05386 26.9354 3.47621 26.2077 2.95813L19.6036 9.56225V0.22275C18.7252 0.074991 17.8361 0.000484612 16.9454 0L16.9289 0C16.0229 0.0005 15.1356 0.0775 14.2708 0.22275V9.56225L7.66669 2.95813C6.93887 3.47607 6.25577 4.05413 5.62456 4.68625L5.62106 4.68875C4.99013 5.3199 4.41277 6.00242 3.89494 6.72925L10.4996 13.3334H1.16019C1.16019 13.3334 0.937439 15.0875 0.937439 15.9945V16.0055C0.937439 16.9125 1.01431 17.8014 1.16019 18.6666H10.4997L3.89506 25.2708C4.93402 26.7288 6.20869 28.0034 7.66669 29.0424L14.2708 22.4377V31.7778C15.1482 31.9248 16.0362 31.9991 16.9258 32H16.9484C17.8381 31.9992 18.7261 31.9249 19.6034 31.7778V22.4377L26.2082 29.0424C26.9357 28.5241 27.619 27.9463 28.2508 27.3149L28.2523 27.3134C28.8835 26.6814 29.4611 25.9982 29.9793 25.2708L23.3747 18.6666H32.7152C32.8606 17.8029 32.9364 16.9166 32.9374 16.0116V15.9884C32.9364 15.0834 32.8606 14.1971 32.7152 13.3334Z" fill="#FF4A00"></path></g><defs><clipPath id="clip0_12670_125260"><rect width="32" height="32" fill="white" transform="translate(0.937439)"></rect></clipPath></defs></svg>
              </div>
              <div className="size-7 flex shrink-0 justify-center items-center bg-primary/10 rounded-full">
                <svg className="shrink-0 size-5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.536 0H6.464C2.892 0 0 2.892 0 6.464V25.54C0 29.108 2.892 32 6.464 32H25.54C29.108 32 32.004 29.108 32.004 25.536V6.464C32 2.892 29.108 0 25.536 0Z" fill="url(#paint0_linear_4403_2024)"></path><path d="M15.864 7.352L16.512 6.232C16.912 5.532 17.804 5.296 18.504 5.696C19.204 6.096 19.44 6.988 19.04 7.688L12.796 18.496H17.312C18.776 18.496 19.596 20.216 18.96 21.408H5.72C4.912 21.408 4.264 20.76 4.264 19.952C4.264 19.144 4.912 18.496 5.72 18.496H9.432L14.184 10.26L12.7 7.684C12.3 6.984 12.536 6.1 13.236 5.692C13.936 5.292 14.82 5.528 15.228 6.228L15.864 7.352ZM10.248 22.908L8.848 25.336C8.448 26.036 7.556 26.272 6.856 25.872C6.156 25.472 5.92 24.58 6.32 23.88L7.36 22.08C8.536 21.716 9.492 21.996 10.248 22.908ZM22.304 18.504H26.092C26.9 18.504 27.548 19.152 27.548 19.96C27.548 20.768 26.9 21.416 26.092 21.416H23.988L25.408 23.88C25.808 24.58 25.572 25.464 24.872 25.872C24.172 26.272 23.288 26.036 22.88 25.336C20.488 21.188 18.692 18.084 17.5 16.016C16.28 13.912 17.152 11.8 18.012 11.084C18.968 12.724 20.396 15.2 22.304 18.504Z" fill="white"></path><defs><linearGradient id="paint0_linear_4403_2024" x1="16.002" y1="0" x2="16.002" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#18BFFB"></stop><stop offset="1" stopColor="#2072F3"></stop></linearGradient></defs></svg>
              </div>
            </div>

            100+ histórias de sucesso
          </div>
          {/* End Brands */}

          <h1 className="font-semibold text-foreground text-5xl md:text-6xl">
            <span className="text-primary">Imersão de Posicionamento,</span> produção de conteúdo e vendas.
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-muted-foreground text-lg">
              Por: Ana Paula Perci e Convidados.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 xl:px-0">
          <div className="h-100 md:h-150 bg-[url('https://images.unsplash.com/photo-1743360543515-d3b506e6d3c2?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat relative rounded-xl">
            {/* Card */}
            <div className="absolute bottom-0 start-0 end-0 max-w-xs p-6 md:start-auto">
              <svg className="shrink-0 size-8 mb-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.00012207 32H32.0001V0H0.00012207V32Z" fill="#E60012"/>
                <path d="M18.1935 14.1437H27.2813V12.1342H18.1935V14.1437ZM19.1982 6.40096H26.2765V4.37859H19.1982V6.40096ZM11.7939 4.37859H5.72034V6.40096H9.76512V12.1342H4.71882V14.1437H13.8131V12.1342H11.7939V4.37859ZM25.2589 25.6006H20.2061V19.877H25.2589V25.6006ZM27.2812 17.8482H18.1934V27.6247H27.2812V17.8482ZM5.72034 17.8482L4.6898 22.7429H6.70897L7.32018 19.877H11.3746L10.1877 25.6006H4.10439L3.70764 27.6246H11.7939L13.8131 17.8482H5.72034Z" fill="white"/>
              </svg>
              <h3 className="text-lg font-semibold text-white sm:text-2xl">Ana Paula Perci</h3>
              <p className="mt-1 text-white">Especialista em Posicionamento de Marca</p>
            </div>
            {/* End Card */}

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