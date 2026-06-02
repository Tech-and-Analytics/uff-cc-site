import type { Trilha } from "@/types/Trilhas"
import { Button } from "@/components/ui/button";

interface TrilhaViewProps {
  trilha: Trilha;
  onVoltar: () => void;
}

export function TrilhaView({ trilha, onVoltar }: TrilhaViewProps) {
  
  // Função auxiliar para retornar o ícone correto dependendo do tipo do conteúdo
  const renderizarIcone = (tipo: string) => {
    switch (tipo) {
      case "videoaula": return "▶️";
      case "material_texto": return "📄";
      case "simulado": return "📝";
      default: return "📚";
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-background">
      {/* Cabeçalho de Navegação */}
      <Button 
        variant="ghost" 
        onClick={onVoltar} 
        className="w-fit text-sm text-neutral-medium hover:text-brand-dark px-0 mb-2"
      >
        ← Voltar para Trilhas
      </Button>

      {/* Banner de Apresentação da Trilha */}
      <div className="rounded-2xl bg-brand-dark p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-wider text-brand-light block mb-2">
            {trilha.categoria}
          </span>
          <h2 className="text-3xl font-bold mb-3">{trilha.titulo}</h2>
          <p className="text-brand-light text-sm leading-relaxed">
            {trilha.descricao}
          </p>
        </div>
        <div className="bg-white/10 p-4 rounded-xl text-center min-w-[120px]">
          <span className="block text-3xl font-bold text-white mb-1">{trilha.progressoAtual}%</span>
          <span className="text-xs text-brand-light uppercase font-semibold">Concluído</span>
        </div>
      </div>

      {/* Listagem de Módulos (Conteúdos e Questões) */}
      <div className="mt-4 border border-border rounded-2xl bg-card overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border bg-muted/30">
          <h3 className="text-lg font-bold text-brand-dark">Conteúdos da Trilha</h3>
          <p className="text-sm text-neutral-medium mt-1">
            Siga a ordem estruturada abaixo para melhor aproveitamento.
          </p>
        </div>

        <div className="flex flex-col">
          {trilha.itens.map((item, index) => (
            <div 
              key={item.id}
              className="flex items-center justify-between p-5 border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Checkbox visual customizado demonstrando se está concluído */}
                <div className={`h-6 w-6 rounded-full flex items-center justify-center border ${
                  item.concluido 
                    ? "bg-green-500 border-green-500 text-white" 
                    : "border-neutral-light bg-transparent"
                }`}>
                  {item.concluido && <span className="text-xs">✓</span>}
                </div>
                
                <div>
                  <h4 className={`text-base font-semibold ${item.concluido ? "text-neutral-medium line-through" : "text-foreground"}`}>
                    {index + 1}. {item.titulo}
                  </h4>
                  <div className="flex gap-3 text-xs text-neutral-medium mt-1">
                    <span>{renderizarIcone(item.tipo)} {item.tipo.replace("_", " ")}</span>
                    <span>•</span>
                    <span>⏱️ {item.tempoEstimado}</span>
                  </div>
                </div>
              </div>

              {/* Ação Dinâmica baseada no estado do conteúdo */}
              <Button 
                variant={item.concluido ? "outline" : "default"}
                className={`text-xs h-9 px-4 ${
                  !item.concluido ? "bg-brand-primary hover:bg-brand-dark text-white" : "border-border"
                }`}
              >
                {item.concluido ? "Revisar" : "Acessar"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}