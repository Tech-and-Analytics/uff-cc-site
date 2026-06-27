import { useState } from "react";
import {type Simulado } from "@/types/Simulado";
import { Button } from "@/components/ui/button";

interface SimuladoPlayerProps {
  simulado: Simulado;
  onVoltar: () => void; // Função para sair do simulado e voltar para a listagem
}

export function SimuladoPlayer({ simulado, onVoltar }: SimuladoPlayerProps) {
  // Estado que rastreia o índice da questão que está sendo exibida atualmente
  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState(0);
  
  // Estado que grava as respostas selecionadas pelo usuário (Chave: ID da questão, Valor: Letra selecionada)
  const [respostasUsuario, setRespostasUsuario] = useState<Record<number, string>>({});
  
  // Estado para controlar a exibição da dica de cada questão
  const [mostrarDica, setMostrarDica] = useState(false);

  const questaoAtual = simulado.questoes[indiceQuestaoAtual];
  const totalQuestoes = simulado.questoes.length;
  
  // Calcula o progresso atual em porcentagem para alimentar a barra visual [cite: 202, 221]
  const porcentagemProgresso = Math.round(((indiceQuestaoAtual + 1) / totalQuestoes) * 100);

  // Função que captura a alternativa clicada pelo usuário
  const selecionarAlternativa = (alternativaId: string) => {
    setRespostasUsuario(prev => ({
      ...prev,
      [questaoAtual.id]: alternativaId
    }));
  };

  return (
    <div className="flex flex-col gap-6 bg-background p-2">
      {/* Barra Superior do Player [cite: 15, 199] */}
      <header className="flex justify-between items-center border-b border-border pb-4">
        <div>
          <h2 className="text-xl font-bold text-brand-dark">{simulado.title}</h2>
          <p className="text-xs text-neutral-medium">{simulado.category} - Nível {simulado.difficulty}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Mostrador do Timer unificado [cite: 202, 222] */}
          <div className="bg-brand-light/20 text-brand-dark px-3 py-1.5 rounded-lg font-mono font-bold text-sm">
            ⏱️ 01:15:00
          </div>
          <Button variant="ghost" onClick={onVoltar} className="text-sm text-neutral-medium hover:text-brand-dark">
            Sair do simulado
          </Button>
        </div>
      </header>

      {/* Grid Principal Layout: Painel da Questão (Esquerda) e Navegação Rápida (Direita) [cite: 205, 224] */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Painel Centralizado da Pergunta (Ocupa 2 de 3 colunas) [cite: 205] */}
        <div className="lg:col-span-2 border border-border rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-neutral-medium">
              Questão {indiceQuestaoAtual + 1} de {totalQuestoes} [cite: 206]
            </span>
            <span className="text-xs font-bold text-brand-primary">{porcentagemProgresso}% completo</span>
          </div>

          {/* Linha de progresso visual adaptativa [cite: 202, 221] */}
          <div className="w-full bg-muted h-1.5 rounded-full mb-6">
            <div 
              className="bg-brand-primary h-1.5 rounded-full transition-all duration-300" 
              style={{ width: `${porcentagemProgresso}%` }}
            />
          </div>

          {/* Enunciado da Pergunta [cite: 202, 209] */}
          <p className="text-base font-medium text-foreground mb-6 leading-relaxed">
            {questaoAtual.enunciado}
          </p>

          {/* Listagem de Alternativas Interativas [cite: 202] */}
          <div className="space-y-3 mb-6">
            {questaoAtual.alternativas.map((alt) => {
              const estaSelecionada = respostasUsuario[questaoAtual.id] === alt.id;
              return (
                <button
                  key={alt.id}
                  onClick={() => selecionarAlternativa(alt.id)}
                  className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex gap-3 ${
                    estaSelecionada
                      ? "border-brand-primary bg-brand-light/20 font-medium" // Estado Selecionado [cite: 232]
                      : "border-border hover:border-brand-medium hover:bg-muted" // Estado Padrão
                  }`}
                >
                  <span className={`font-bold ${estaSelecionada ? "text-brand-dark" : "text-brand-medium"}`}>
                    {alt.id})
                  </span>
                  <span className="text-foreground">{alt.texto}</span>
                </button>
              );
            })}
          </div>

          {/* Box de Dica Condicional de Acessibilidade [cite: 18, 217] */}
          {questaoAtual.dica && (
            <div className="mb-6">
              <button 
                onClick={() => setMostrarDica(!mostrarDica)}
                className="text-xs font-semibold text-brand-medium hover:underline flex items-center gap-1"
              >
                💡 {mostrarDica ? "Ocultar dica institucional" : "Visualizar dica de processo"}
              </button>
              {mostrarDica && (
                <div className="mt-2 p-4 bg-purple-50/50 border border-brand-light/30 rounded-xl text-xs text-brand-dark leading-relaxed">
                  {questaoAtual.dica}
                </div>
              )}
            </div>
          )}

          {/* Rodapé Interno de Controle Operacional [cite: 202] */}
          <div className="flex justify-between items-center border-t border-border pt-4 mt-8">
            <Button
              disabled={indiceQuestaoAtual === 0}
              onClick={() => { setIndiceQuestaoAtual(prev => prev - 1); setMostrarDica(false); }}
              variant="outline"
              className="h-10 border-border text-xs font-semibold text-neutral-medium"
            >
              ← Questão anterior [cite: 218, 219]
            </Button>
            
            <Button
              onClick={() => alert("Questão marcada para revisão posterior.")}
              variant="ghost"
              className="text-xs font-medium text-neutral-medium hover:text-brand-dark"
            >
              ⭐ Marcar para revisão [cite: 220]
            </Button>

            <Button
              onClick={() => {
                if (indiceQuestaoAtual < totalQuestoes - 1) {
                  setIndiceQuestaoAtual(prev => prev + 1);
                  setMostrarDica(false);
                } else {
                  alert("Simulado finalizado! Suas respostas foram salvas na base de dados.");
                  onVoltar();
                }
              }}
              className="h-10 bg-brand-dark hover:bg-brand-primary text-white text-xs font-semibold px-4 rounded-lg"
            >
              {indiceQuestaoAtual === totalQuestoes - 1 ? "Finalizar Simulado" : "Próxima questão →"} [cite: 245]
            </Button>
          </div>
        </div>

        {/* Menu Lateral Direito de Navegação Rápida (Ocupa 1 coluna) [cite: 224, 225] */}
        <div className="border border-border rounded-2xl bg-card p-6 shadow-sm">
          <h3 className="text-sm font-bold text-brand-dark mb-2">Navegação Rápida</h3> [cite: 225]
          <p className="text-xs text-neutral-medium mb-4">{totalQuestoes} questões disponíveis</p>

          {/* Grid de Blocos Numéricos [cite: 233] */}
          <div className="grid grid-cols-4 gap-2">
            {simulado.questoes.map((q, idx) => {
              const respondida = respostasUsuario[q.id] !== undefined;
              const ativa = idx === indiceQuestaoAtual;

              return (
                <button
                  key={q.id}
                  onClick={() => { setIndiceQuestaoAtual(idx); setMostrarDica(false); }}
                  className={`h-10 w-full rounded-lg text-xs font-bold transition-all ${
                    ativa 
                      ? "bg-brand-dark text-white border-2 border-brand-vibrant" // Ativa no momento
                      : respondida 
                      ? "bg-brand-light/40 text-brand-dark border border-brand-medium" // Respondida anteriormente
                      : "bg-muted text-neutral-medium border border-border hover:bg-neutral-200" // Não respondida
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}