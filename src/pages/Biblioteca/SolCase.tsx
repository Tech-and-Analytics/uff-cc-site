import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, CheckCircle2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { caseMock } from "./mockCases";

export function SolCase() {
  // Mock dos dados do case (em produção, viria pela rota/ID)
  const { id } = useParams<{ id: string }>();
  const caseItem = caseMock.find((c) => c.id === id);

  if(!caseItem) {
    return (
      <main className="flex flex-1 items-center justify-center p-10">
        <h1 className="text-2xl font-bold text-brand-dark">Case não encontrado.</h1>
      </main>
    )
  }

  const numericTime = typeof caseItem.estimatedTime === 'number' 
    ? caseItem.estimatedTime 
    : parseInt(String(caseItem.estimatedTime).replace(/\D/g, '')) || 30; 

  // Lógica do Timer (Contagem Regressiva)
  const [timeLeft, setTimeLeft] = useState(numericTime * 60);
  const [isActive, setIsActive] = useState(false);
  const [solution, setSolution] = useState("");

  useEffect(() => {
    let interval: number | undefined;
  
  if (isActive && timeLeft > 0) {
    // window.setInterval garante que o retorno será o 'number' esperado pelo browser
    interval = window.setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);
  } else if (timeLeft === 0) {
    setIsActive(false);
  }

  // Usamos window.clearInterval também
  return () => window.clearInterval(interval);
}, [isActive, timeLeft]);

  // Formatação do tempo (MM:SS)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(numericTime * 60);
  };

  return (
    <main className="flex flex-1 flex-col lg:flex-row gap-8 p-10">
      
      {/* Coluna da Esquerda: Leitura do Case */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-[32px] font-bold text-brand-dark">
            {caseItem.title}
          </h1>
          <p className="mt-4 text-neutral-medium leading-relaxed whitespace-pre-wrap">
            {caseItem.content}
          </p>
        </div>

        {/* Painel do Timer */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col items-center justify-center space-y-4">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Tempo Restante
          </span>
          <div className={`text-6xl font-bold font-mono tracking-tight ${timeLeft < 300 ? 'text-red-500' : 'text-card-foreground'}`}>
            {formatTime(timeLeft)}
          </div>
          
          <div className="flex gap-4 mt-2">
            <button 
              onClick={toggleTimer}
              className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-medium text-secondary-foreground hover:bg-neutral-200"
            >
              {isActive ? <><Pause size={18} /> Pausar</> : <><Play size={18} /> Iniciar</>}
            </button>
            <button 
              onClick={resetTimer}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-medium text-muted-foreground hover:bg-muted"
            >
              <RotateCcw size={18} /> Reiniciar
            </button>
          </div>
        </div>
      </div>

      {/* Coluna da Direita: Área de Resposta */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 rounded-2xl border border-border bg-card shadow-sm flex flex-col overflow-hidden">
          <div className="bg-muted px-6 py-4 border-b border-border">
            <h3 className="font-semibold text-card-foreground">Sua Resolução</h3>
          </div>
          
          <textarea
            className="flex-1 w-full p-6 text-sm focus:outline-none resize-none"
            placeholder="Comece a digitar sua estratégia aqui..."
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            disabled={!isActive && timeLeft === numericTime * 60} // Opcional: só permite digitar se o timer iniciou
          />
          
          <div className="p-4 border-t border-border flex justify-end bg-card">
            <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-medium text-white transition-colors hover:bg-brand-medium">
              <CheckCircle2 size={20} />
              Enviar Solução
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}