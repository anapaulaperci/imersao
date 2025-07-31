import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Clock, User } from "lucide-react";

const Resumos = () => {
  const resumos = [
    {
      id: 1,
      title: "Estratégias de Posicionamento Digital",
      description: "Principais conceitos sobre como posicionar sua marca no ambiente digital e construir uma presença sólida online.",
      author: "Ana Paula Perci",
      duration: "15 min",
      category: "Fundamentos"
    },
    {
      id: 2,
      title: "Análise de Concorrência",
      description: "Como identificar e analisar seus concorrentes para criar vantagens competitivas sustentáveis.",
      author: "Ana Paula Perci", 
      duration: "20 min",
      category: "Estratégia"
    },
    {
      id: 3,
      title: "Definindo seu Público-Alvo",
      description: "Técnicas avançadas para identificar, segmentar e compreender profundamente seu público ideal.",
      author: "Ana Paula Perci",
      duration: "18 min", 
      category: "Público"
    },
    {
      id: 4,
      title: "Construção de Proposta de Valor",
      description: "Como criar uma proposta de valor única que diferencia seu negócio no mercado competitivo.",
      author: "Ana Paula Perci",
      duration: "25 min",
      category: "Estratégia"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Fundamentos": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Estratégia": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", 
      "Público": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Resumos</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Conteúdos essenciais para seu aprendizado
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumos.map((resumo) => (
          <Card key={resumo.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resumo.category)}`}>
                  {resumo.category}
                </span>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  {resumo.duration}
                </div>
              </div>
              <CardTitle className="text-lg leading-6">
                {resumo.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {resumo.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <User className="h-4 w-4 mr-1" />
                  {resumo.author}
                </div>
                <div className="flex items-center text-primary">
                  <FileText className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Ver resumo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Card de adicionar novo resumo */}
      <Card className="border-dashed border-2 hover:border-primary transition-colors duration-300 cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Novo conteúdo em breve
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Estamos sempre adicionando novos resumos e materiais de estudo
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resumos;