import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, MessageSquare, FileText, Lightbulb, Zap, Star, Send, Bot } from "lucide-react";
import { useState } from "react";

const IA = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: "Olá! Sou sua assistente de IA especializada em posicionamento de marca. Como posso ajudar você hoje?",
      timestamp: new Date()
    }
  ]);

  const suggestions = [
    {
      icon: Lightbulb,
      title: "Análise de Posicionamento",
      description: "Analise minha estratégia atual de posicionamento",
      prompt: "Preciso de uma análise completa da minha estratégia de posicionamento atual. Me ajude a identificar pontos fortes e oportunidades de melhoria."
    },
    {
      icon: FileText,
      title: "Criação de Personas",
      description: "Crie personas detalhadas para meu negócio",
      prompt: "Me ajude a criar personas detalhadas para meu negócio. Quais informações você precisa para desenvolver perfis completos dos meus clientes ideais?"
    },
    {
      icon: Zap,
      title: "Proposta de Valor",
      description: "Desenvolva uma proposta de valor única",
      prompt: "Quero desenvolver uma proposta de valor única e diferenciada. Me oriente sobre como identificar e comunicar o valor único que ofereço ao mercado."
    },
    {
      icon: Star,
      title: "Diferenciação Competitiva",
      description: "Identifique oportunidades de diferenciação",
      prompt: "Como posso me diferenciar da concorrência? Me ajude a identificar oportunidades únicas de posicionamento no meu mercado."
    }
  ];

  const handleSendMessage = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: prompt,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setPrompt("");

    // Simular resposta da IA (aqui você integraria com uma API real)
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "assistant",
        content: "Obrigada pela sua pergunta! Com base na minha especialização em posicionamento de marca, vou te ajudar a desenvolver uma estratégia sólida. Para começar, preciso entender melhor seu contexto atual...",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setPrompt(suggestion.prompt);
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-2xl">
            <Brain className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          IA Assistant - Posicionamento
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sua assistente especializada em estratégias de posicionamento de marca
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Chat com IA</CardTitle>
                  <CardDescription>
                    Converse com nossa especialista em posicionamento
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  placeholder="Digite sua pergunta sobre posicionamento..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="flex-1 resize-none"
                  rows={2}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading || !prompt.trim()}
                  className="px-4"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Sugestões Rápidas
              </CardTitle>
              <CardDescription>
                Clique para usar como ponto de partida
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <suggestion.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{suggestion.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {suggestion.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recursos da IA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Brain className="h-3 w-3 mr-1" />
                  Análise Estratégica
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <FileText className="h-3 w-3 mr-1" />
                  Criação de Conteúdo
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  Insights Personalizados
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  <Zap className="h-3 w-3 mr-1" />
                  Respostas Instantâneas
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dicas de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Seja específico em suas perguntas</p>
              <p>• Compartilhe contexto sobre seu negócio</p>
              <p>• Use as sugestões como ponto de partida</p>
              <p>• Faça perguntas de acompanhamento</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IA;