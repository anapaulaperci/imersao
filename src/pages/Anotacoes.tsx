import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Settings, Folder, File } from "lucide-react";

const Anotacoes = () => {
  const [selectedNote, setSelectedNote] = useState<number | null>(1);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Anotações da Imersão - Dia 1",
      preview: "Principais conceitos sobre posicionamento digital...",
      content: "# Anotações da Imersão - Dia 1\n\n## Principais conceitos sobre posicionamento digital\n\nEscreva aqui suas anotações da primeira palestra...",
      lastModified: "2 min atrás"
    },
    {
      id: 2,
      title: "Estratégias de Branding",
      preview: "Como construir uma marca forte no mercado...",
      content: "# Estratégias de Branding\n\n## Como construir uma marca forte\n\nSuas anotações sobre branding...",
      lastModified: "1 hora atrás"
    }
  ]);

  const [currentContent, setCurrentContent] = useState(notes[0]?.content || "");

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Nova Anotação",
      preview: "Comece a escrever...",
      content: "# Nova Anotação\n\n",
      lastModified: "agora"
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote.id);
    setCurrentContent(newNote.content);
  };

  const updateNoteContent = (content: string) => {
    setCurrentContent(content);
    if (selectedNote) {
      setNotes(notes.map(note => 
        note.id === selectedNote 
          ? { 
              ...note, 
              content,
              preview: content.slice(0, 50) + "...",
              lastModified: "agora"
            }
          : note
      ));
    }
  };

  return (
    <div className="h-screen bg-background flex">
      {/* Sidebar - Lista de anotações */}
      <div className="w-80 border-r border-border/50 bg-muted/20 flex flex-col">
        {/* Header da sidebar */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Anotações
            </h2>
            <Button size="sm" onClick={createNewNote} className="h-8 w-8 p-0">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Buscar anotações..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* Lista de anotações */}
        <div className="flex-1 overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => {
                setSelectedNote(note.id);
                setCurrentContent(note.content);
              }}
              className={`p-4 border-b border-border/30 cursor-pointer transition-colors hover:bg-muted/40 ${
                selectedNote === note.id ? 'bg-primary/10 border-l-4 border-l-primary' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <File className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-sm truncate">
                    {note.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {note.preview}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {note.lastModified}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer da sidebar */}
        <div className="p-4 border-t border-border/50">
          <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
        </div>
      </div>

      {/* Editor principal */}
      <div className="flex-1 flex flex-col">
        {/* Header do editor */}
        <div className="h-16 border-b border-border/50 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {notes.find(n => n.id === selectedNote)?.lastModified}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Exportar
            </Button>
            <Button size="sm">
              Salvar
            </Button>
          </div>
        </div>

        {/* Área de escrita */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <textarea
              value={currentContent}
              onChange={(e) => updateNoteContent(e.target.value)}
              placeholder="Comece a escrever suas anotações..."
              className="w-full h-full min-h-[calc(100vh-200px)] resize-none border-none bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-lg leading-relaxed font-mono"
              style={{
                fontFamily: "'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace",
                lineHeight: '1.8'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anotacoes;