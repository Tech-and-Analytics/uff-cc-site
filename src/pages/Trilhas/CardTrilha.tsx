import type { Trilha } from "@/types/Trilhas"
import { Button } from "@/components/ui/button";

interface CardTrilhaProps {
  trilha: Trilha;
  onAbrir: (trilha: Trilha) => void;
}

export function CardTrilha({ trilha, onAbrir }: CardTrilhaProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        {/* Categoria temática */}
        <span className="text-xs font-bold tracking-wider text-brand-medium block mb-2">
          {trilha.categoria}
        </span>
        
        {/* Título e Descrição */}
        <h3 className="text-xl font-bold text-brand-dark mb-2">
          {trilha.titulo}
        </h3>
        <p className="text-sm text-neutral-medium mb-6 line-clamp-2">
          {trilha.descricao}
        </p>

        {/* Indicador de Progresso Visual */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="font-semibold text-neutral-medium">Progresso</span>
            <span className="font-bold text-brand-primary">{trilha.progressoAtual}%</span>
          </div>
          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
            <div 
              className="bg-brand-primary h-full transition-all duration-500" 
              style={{ width: `${trilha.progressoAtual}%` }}
            />
          </div>
          <p className="text-xs text-neutral-medium mt-2">
            {trilha.totalModulos} conteúdos disponíveis
          </p>
        </div>
      </div>

      {/* Botão padronizado de ação Outline/Primário */}
      <Button 
        onClick={() => onAbrir(trilha)}
        className={`w-full h-11 font-semibold rounded-lg flex items-center justify-center transition-colors ${
          trilha.progressoAtual > 0 
            ? "bg-brand-dark hover:bg-brand-primary text-white" 
            : "border border-brand-dark bg-transparent text-brand-dark hover:bg-brand-light/20"
        }`}
      >
        {trilha.progressoAtual > 0 ? "Continuar Trilha" : "Iniciar Trilha"}
      </Button>
    </div>
  );
}