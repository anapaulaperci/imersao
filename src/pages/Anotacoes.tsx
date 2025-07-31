import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Search, FileText, Bold, Italic, Link, List, AlignLeft, File } from "lucide-react";

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
  };

  const handleUpdateNote = useCallback((id: number, title: string, content: string) => {
    setNotes(prevNotes => 
      prevNotes.map(note => 
        note.id === id 
          ? { 
              ...note, 
              title,
              content,
              preview: content.slice(0, 50) + "...",
              lastModified: "agora"
            }
          : note
      )
    );
  }, []);

  const selectedNoteData = notes.find(note => note.id === selectedNote);

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
            <Input 
              type="text"
              placeholder="Buscar anotações..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Lista de anotações */}
        <div className="flex-1 overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => setSelectedNote(note.id)}
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
      </div>

      {/* Editor principal */}
      <div className="flex-1 flex flex-col">
        {selectedNoteData ? (
          <>
            {/* Toolbar */}
            <div className="border-b border-border p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Italic className="h-4 w-4" />
                </Button>
                <div className="w-px h-6 bg-border mx-2" />
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Link className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <AlignLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="h-full flex flex-col">
                <Input
                  value={selectedNoteData.title}
                  onChange={(e) => handleUpdateNote(selectedNoteData.id, e.target.value, selectedNoteData.content)}
                  className="text-2xl font-bold text-foreground mb-6 border-none p-0 focus-visible:ring-0 bg-transparent"
                  placeholder="Título da nota"
                />
                <Textarea
                  value={selectedNoteData.content}
                  onChange={(e) => handleUpdateNote(selectedNoteData.id, selectedNoteData.title, e.target.value)}
                  placeholder="Comece a escrever..."
                  className="flex-1 border-none p-0 text-base leading-relaxed resize-none focus-visible:ring-0 font-mono"
                  style={{ minHeight: "400px" }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Selecione uma anotação
              </h3>
              <p className="text-muted-foreground">
                Escolha uma anotação da lista ou crie uma nova
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Anotacoes;