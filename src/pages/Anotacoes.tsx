import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Bold, Italic, Underline, Strikethrough, Link, List, ListOrdered, Quote, Code, Info } from "lucide-react";

const Anotacoes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="relative px-6 py-16 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <FileText className="mr-2 h-4 w-4" />
              Suas Anotações
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Anotações da <span className="text-primary">Imersão</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Faça aqui suas anotações da imersão
            </p>
          </div>
        </div>
      </div>

      {/* Editor Section */}
      <div className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-0 bg-card/70 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Rich Text Editor */}
              <div className="bg-background border border-border rounded-xl overflow-hidden">
                <div id="hs-editor-tiptap">
                  <div data-hs-editor-field className="min-h-[400px] p-6 text-foreground">
                    <p className="text-muted-foreground">Comece a escrever suas anotações aqui...</p>
                  </div>

                  {/* Toolbar */}
                  <div className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-t border-border">
                    <div className="flex flex-wrap align-middle gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-bold
                      >
                        <Bold className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-italic
                      >
                        <Italic className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-underline
                      >
                        <Underline className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-strike
                      >
                        <Strikethrough className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-link
                      >
                        <Link className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-ol
                      >
                        <ListOrdered className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-ul
                      >
                        <List className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-blockquote
                      >
                        <Quote className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="size-8 hover:bg-muted" 
                        type="button" 
                        data-hs-editor-code
                      >
                        <Code className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-end">
                      <Button className="py-2 px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                        Salvar
                      </Button>
                    </div>
                  </div>
                  {/* End Toolbar */}
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <p className="inline-flex gap-x-2 text-xs text-muted-foreground">
                  <Info className="h-3 w-3 mt-0.5" />
                  Suas anotações são salvas automaticamente
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Anotacoes;