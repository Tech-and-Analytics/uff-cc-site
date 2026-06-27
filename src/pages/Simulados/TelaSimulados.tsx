import { useState } from "react";
import { LISTA_DE_SIMULADOS } from "./mockSimulados";
import {type Simulado } from "@/types/Simulado";
import { CardSimulado } from "./CardSimulado";
import { SimuladoPlayer } from "./SimuladoPlayer";

export function Simulado() {
  // Estado que monitora se há um simulado aberto em tela de execução ativa (null significa nenhum)
  const [simuladoAtivo, setSimuladoAtivo] = useState<Simulado | null>(null);

  // Se o usuário clicou em acessar algum simulado, renderiza o Player Ativo isolando a tela [cite: 199]
  if (simuladoAtivo) {
    return (
      <div className="p-6 max-w-7xl mx-auto w-full transition-all">
        <SimuladoPlayer 
          simulado={simuladoAtivo} 
          onVoltar={() => setSimuladoAtivo(null)} // Ao voltar, limpa o estado e reabre a listagem
        />
      </div>
    );
  }

  // Se 'simuladoAtivo' for null, renderiza a vitrine de conteúdos padrão da plataforma 
  return (
    <main className="flex flex-1 flex-col p-10 bg-background max-w-7xl mx-auto w-full">
      {/* Título Institucional da Seção como Heading 1 (40px) [cite: 16] */}
      <header className="mb-8">
        <h1 className="text-[40px] font-bold text-brand-dark">Biblioteca de Simulados</h1> 
        <p className="mt-2 text-sm text-neutral-medium">
          Acesse testes técnicos estruturados para validar o alinhamento com a arquitetura de dados operacionais.
        </p>
      </header>

      {/* Grid Responsivo Inteligente: Reorganização automática baseada em breakpoints [cite: 333, 336] */}
      {/* Mobile: 1 coluna | Tablet: 2 colunas | Desktop: 3 colunas [cite: 339] */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LISTA_DE_SIMULADOS.map((simulado) => (
          <CardSimulado 
            key={simulado.contentId} 
            simulado={simulado} 
            onIniciar={(sim) => setSimuladoAtivo(sim)} // injeta o simulado selecionado no estado ativo
          />
        ))}
      </div>
    </main>
  );
}