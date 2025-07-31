import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Paperclip, Smile, Mic, Send } from "lucide-react";

const Anotacoes = () => {
  const [newNote, setNewNote] = useState("");

  const handleSendNote = () => {
    if (newNote.trim()) {
      // Aqui você pode adicionar a lógica para salvar a nota
      console.log("Nova nota:", newNote);
      setNewNote("");
    }
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
      <Card className="min-h-[calc(100vh-120px)]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-5 w-5" />
            Minhas Anotações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Área para anotações existentes */}
            <div className="space-y-3">
              <div className="p-4 border rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">Suas anotações aparecerão aqui...</p>
              </div>
            </div>

            {/* Textarea com botões */}
            <div className="relative">
              <textarea 
                id="note-textarea" 
                className="max-h-36 p-3 pe-32 block w-full bg-white border-gray-200 md:text-sm leading-4 rounded-lg resize-none focus:outline-hidden focus:border-blue-600 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700 dark:focus:ring-neutral-600 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" 
                placeholder="Digite sua anotação..." 
                rows={1}
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />

              {/* Button Group */}
              <div className="absolute top-1/2 end-3 z-10 -translate-y-1/2">
                <div className="flex items-center gap-x-1">
                  {/* Attach Button */}
                  <Button 
                    type="button" 
                    size="sm"
                    variant="ghost"
                    className="flex justify-center items-center size-6 text-sm text-gray-600 hover:bg-gray-100 rounded-full dark:text-neutral-400 dark:hover:bg-neutral-800"
                  >
                    <Paperclip className="shrink-0 size-3.5" />
                    <span className="sr-only">Anexar arquivo</span>
                  </Button>

                  {/* Emoji Button */}
                  <Button 
                    type="button" 
                    size="sm"
                    variant="ghost"
                    className="flex justify-center items-center size-6 text-sm text-gray-600 hover:bg-gray-100 rounded-full dark:text-neutral-400 dark:hover:bg-neutral-800"
                  >
                    <Smile className="shrink-0 size-3.5" />
                    <span className="sr-only">Adicionar emoji</span>
                  </Button>

                  {/* Voice Button */}
                  <Button 
                    type="button" 
                    size="sm"
                    variant="ghost"
                    className="flex justify-center items-center size-6 text-sm text-gray-600 hover:bg-gray-100 rounded-full dark:text-neutral-400 dark:hover:bg-neutral-800"
                  >
                    <Mic className="shrink-0 size-3.5" />
                    <span className="sr-only">Enviar mensagem de voz</span>
                  </Button>

                  {/* Send Button */}
                  <Button 
                    type="button" 
                    size="sm"
                    onClick={handleSendNote}
                    className="inline-flex shrink-0 justify-center items-center size-6 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500"
                  >
                    <span className="sr-only">Enviar</span>
                    <Send className="shrink-0 size-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Anotacoes;