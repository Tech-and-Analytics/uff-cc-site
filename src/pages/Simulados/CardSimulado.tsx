import {type Simulado } from "@/types/Simulado";
import { Button } from "@/components/ui/button";

// Declara as propriedades que o card precisa receber do componente pai
interface CardSimuladoProps {
  simulado: Simulado;
  onIniciar: (simulado: Simulado) => void; // Função que será chamada para abrir o simulado
}

export function CardSimulado({ simulado, onIniciar }: CardSimuladoProps) {
  // Define a cor da tag de dificuldade dinamicamente com base no valor [cite: 198]
  const obterCorDificuldade = (dif: string) => {
    if (dif === "Fácil") return "text-green-600 bg-green-50";
    if (dif === "Médio") return "text-amber-600 bg-amber-50";
    return "text-red-600 bg-red-50"; // Padrão para difícil [cite: 204]
  };

  return (
    // Estrutura do Card de Conteúdo baseada nas especificações visuais [cite: 127]
    <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        {/* Subtítulo da Categoria [cite: 129, 343] */}
        <span className="text-xs font-bold tracking-wider text-brand-medium block mb-2">
          {simulado.category}
        </span>
        
        {/* Título Principal [cite: 130, 343] */}
        <h3 className="text-xl font-bold text-brand-dark mb-4">
          {simulado.title}
        </h3>
        
        {/* Metadados informativos (Tempo e Dificuldade) [cite: 132, 138, 343] */}
        <div className="flex flex-wrap gap-2 items-center text-xs mb-6">
          <span className="text-neutral-medium flex items-center gap-1">
            <span>⏱️</span> {simulado.estimatedTime}
          </span>
          <span className={`px-2 py-0.5 rounded-full font-medium ${obterCorDificuldade(simulado.difficulty)}`}>
            {simulado.difficulty}
          </span>
          <span className="text-neutral-light">|</span>
          <span className="text-neutral-medium font-medium">
            {simulado.progressStatus}
          </span>
        </div>
      </div>

      {/* Botão de Ação do Card [cite: 137, 139] */}
      <Button
        onClick={() => onIniciar(simulado)}
        className="w-full h-11 border border-brand-dark bg-transparent text-brand-dark hover:bg-brand-light/20 transition-colors font-medium rounded-lg flex items-center justify-center gap-1"
      >
        {simulado.progressStatus === "Concluído" ? "Revisar >" : "Acessar >"} [cite: 137, 139]
      </Button>
    </div>
  );
}