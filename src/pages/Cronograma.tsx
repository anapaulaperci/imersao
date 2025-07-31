import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Search, 
  Filter, 
  Plus,
  ChevronDown,
  ChevronUp,
  User,
  Mic,
  Wrench,
  Coffee
} from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Cronograma = () => {
  const [selectedDay, setSelectedDay] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const days = [
    { id: "all", name: "Todos os Dias" },
    { id: "2024-02-15", name: "15 Fev - Quinta" },
    { id: "2024-02-16", name: "16 Fev - Sexta" },
    { id: "2024-02-17", name: "17 Fev - Sábado" }
  ];

  const tracks = [
    { id: "all", name: "Todas as Trilhas", color: "bg-muted" },
    { id: "branding", name: "Branding", color: "bg-primary" },
    { id: "digital", name: "Marketing Digital", color: "bg-accent" },
    { id: "strategy", name: "Estratégia", color: "bg-success" },
    { id: "workshop", name: "Workshops", color: "bg-warning" }
  ];

  const activityTypes = [
    { id: "palestra", name: "Palestra", icon: Mic, color: "bg-primary" },
    { id: "workshop", name: "Workshop", icon: Wrench, color: "bg-warning" },
    { id: "networking", name: "Networking", icon: Users, color: "bg-success" },
    { id: "coffee", name: "Coffee Break", icon: Coffee, color: "bg-accent" }
  ];

  const events = [
    {
      id: "1",
      title: "Abertura: O Futuro do Posicionamento de Marca",
      speaker: "Maria Silva",
      speakerRole: "CEO da BrandStrategy",
      time: "09:00",
      duration: "45 min",
      date: "2024-02-15",
      track: "branding",
      type: "palestra",
      location: "Auditório Principal",
      capacity: 500,
      registered: 420,
      description: "Uma visão abrangente sobre as tendências e inovações que estão moldando o futuro do posicionamento de marca no mercado global.",
      objectives: [
        "Compreender as principais tendências do mercado",
        "Identificar oportunidades de inovação",
        "Aplicar novos frameworks de posicionamento"
      ],
      isLive: false,
      isUpcoming: true
    },
    {
      id: "2",
      title: "Workshop: Criando uma Estratégia de Posicionamento",
      speaker: "João Santos",
      speakerRole: "Head of Strategy na Innovate Co",
      time: "10:00",
      duration: "90 min",
      date: "2024-02-15",
      track: "strategy",
      type: "workshop",
      location: "Sala Workshop A",
      capacity: 50,
      registered: 48,
      description: "Workshop prático para desenvolver uma estratégia de posicionamento completa do zero.",
      objectives: [
        "Mapear o mercado competitivo",
        "Definir proposta de valor única",
        "Criar messaging framework"
      ],
      isLive: true,
      isUpcoming: false
    },
    {
      id: "3",
      title: "Coffee Break & Networking",
      speaker: "",
      speakerRole: "",
      time: "11:30",
      duration: "30 min",
      date: "2024-02-15",
      track: "all",
      type: "coffee",
      location: "Hall Principal",
      capacity: 500,
      registered: 500,
      description: "Momento para networking e conexões entre os participantes.",
      objectives: [],
      isLive: false,
      isUpcoming: false
    },
    {
      id: "4",
      title: "Posicionamento Digital: Estratégias para o Mundo Online",
      speaker: "Ana Costa",
      speakerRole: "Digital Marketing Director",
      time: "12:00",
      duration: "60 min",
      date: "2024-02-15",
      track: "digital",
      type: "palestra",
      location: "Auditório Principal",
      capacity: 500,
      registered: 385,
      description: "Como adaptar estratégias de posicionamento para o ambiente digital e maximizar o impacto online.",
      objectives: [
        "Dominar ferramentas digitais",
        "Criar presença online consistente",
        "Medir resultados digitais"
      ],
      isLive: false,
      isUpcoming: false
    },
    {
      id: "5",
      title: "Painel: Cases de Sucesso no Posicionamento",
      speaker: "Vários Especialistas",
      speakerRole: "Líderes de Mercado",
      time: "14:00",
      duration: "75 min",
      date: "2024-02-16",
      track: "branding",
      type: "palestra",
      location: "Auditório Principal",
      capacity: 500,
      registered: 467,
      description: "Análise de cases reais de empresas que revolucionaram seu posicionamento de marca.",
      objectives: [
        "Analisar casos reais",
        "Extrair insights práticos",
        "Aplicar lições aprendidas"
      ],
      isLive: false,
      isUpcoming: false
    }
  ];

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getActivityType = (typeId: string) => {
    return activityTypes.find(type => type.id === typeId) || activityTypes[0];
  };

  const getTrack = (trackId: string) => {
    return tracks.find(track => track.id === trackId) || tracks[0];
  };

  const filteredEvents = events.filter(event => {
    const matchesDay = selectedDay === "all" || event.date === selectedDay;
    const matchesTrack = selectedTrack === "all" || event.track === selectedTrack;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDay && matchesTrack && matchesSearch;
  });

  const groupedEvents = filteredEvents.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  const addToCalendar = (event: typeof events[0]) => {
    const startDate = new Date(`${event.date}T${event.time}:00`);
    const endDate = new Date(startDate.getTime() + parseInt(event.duration) * 60000);
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Calendar className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cronograma do Evento
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe toda a programação da Imersão Posicionamento 2024
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por título ou palestrante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Filter Button */}
            <Button variant="outline" size="default">
              <Filter className="h-4 w-4 mr-2" />
              Filtros Avançados
            </Button>
          </div>

          {/* Day Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground flex items-center">
              Dias:
            </span>
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDay === day.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {day.name}
              </button>
            ))}
          </div>

          {/* Track Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-muted-foreground flex items-center">
              Trilhas:
            </span>
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedTrack === track.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${track.color}`}></div>
                {track.name}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {Object.entries(groupedEvents).map(([date, dayEvents]) => (
            <div key={date} className="relative">
              {/* Day Header */}
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold">
                  {format(new Date(date), "EEEE, dd 'de' MMMM", { locale: ptBR })}
                </div>
                <div className="ml-4 h-0.5 bg-border flex-1"></div>
              </div>

              {/* Timeline Events */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

                <div className="space-y-6">
                  {dayEvents.map((event, index) => {
                    const activityType = getActivityType(event.type);
                    const track = getTrack(event.track);
                    const ActivityIcon = activityType.icon;
                    const isExpanded = expandedCards[event.id];

                    return (
                      <div key={event.id} className="relative">
                        {/* Timeline Node */}
                        <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-background ${activityType.color} flex items-center justify-center z-10`}>
                          <ActivityIcon className="h-4 w-4 text-white" />
                        </div>

                        {/* Event Card */}
                        <div className="ml-12">
                          <Card className={`transition-all duration-300 hover:shadow-lg border-l-4 ${
                            event.isLive ? 'border-l-success shadow-md animate-pulse' :
                            event.isUpcoming ? 'border-l-warning' :
                            'border-l-muted'
                          }`}>
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <Badge className={`${activityType.color} text-white`}>
                                      {activityType.name}
                                    </Badge>
                                    {event.track !== "all" && (
                                      <Badge variant="outline" className="border-border">
                                        <div className={`w-2 h-2 rounded-full ${track.color} mr-1`}></div>
                                        {track.name}
                                      </Badge>
                                    )}
                                    {event.isLive && (
                                      <Badge className="bg-success text-success-foreground animate-pulse">
                                        AO VIVO
                                      </Badge>
                                    )}
                                    {event.isUpcoming && (
                                      <Badge className="bg-warning text-warning-foreground">
                                        EM BREVE
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <CardTitle className="text-xl leading-tight mb-2">
                                    {event.title}
                                  </CardTitle>
                                  
                                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {event.time} ({event.duration})
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4" />
                                      {event.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Users className="h-4 w-4" />
                                      {event.registered}/{event.capacity}
                                    </div>
                                  </div>

                                  {event.speaker && (
                                    <div className="flex items-center gap-2 mt-3">
                                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                        <User className="h-4 w-4 text-primary" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-sm">{event.speaker}</div>
                                        <div className="text-xs text-muted-foreground">{event.speakerRole}</div>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="flex flex-col gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => addToCalendar(event)}
                                    className="whitespace-nowrap"
                                  >
                                    <Plus className="h-4 w-4 mr-1" />
                                    Calendário
                                  </Button>
                                  
                                  {event.description && (
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => toggleCard(event.id)}
                                      className="whitespace-nowrap"
                                    >
                                      {isExpanded ? (
                                        <>
                                          <ChevronUp className="h-4 w-4 mr-1" />
                                          Menos
                                        </>
                                      ) : (
                                        <>
                                          <ChevronDown className="h-4 w-4 mr-1" />
                                          Detalhes
                                        </>
                                      )}
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </CardHeader>

                            {isExpanded && (
                              <CardContent className="pt-0 border-t border-border">
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-medium text-foreground mb-2">Descrição</h4>
                                    <p className="text-muted-foreground">{event.description}</p>
                                  </div>

                                  {event.objectives.length > 0 && (
                                    <div>
                                      <h4 className="font-medium text-foreground mb-2">Objetivos</h4>
                                      <ul className="space-y-1">
                                        {event.objectives.map((objective, idx) => (
                                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            {objective}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  <div className="flex gap-3 pt-4">
                                    <Button size="sm" className="flex-1">
                                      Participar
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                      Mais Informações
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            )}
                          </Card>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="p-4 bg-muted/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">Nenhum evento encontrado</h3>
            <p className="text-muted-foreground">Tente ajustar os filtros ou termos de busca</p>
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h3 className="font-medium text-foreground mb-4">Legenda</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activityTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${type.color} flex items-center justify-center`}>
                    <Icon className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">{type.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cronograma;