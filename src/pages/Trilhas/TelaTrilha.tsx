import { useState } from "react";
import { LISTA_DE_TRILHAS } from "./mockTrilhas";
import type { Trilha } from "@/types/Trilhas"
import { CardTrilha } from "./CardTrilha";
import { TrilhaView } from "./TrilhaView";

export function TelaTrilhas() {
  // Estado para armazenar qual trilha está aberta no momento
  const [trilhaAtiva, setTrilhaAtiva] = useState<Trilha | null>(null);

  // Renderiza a visualização interna da trilha se houver uma selecionada
  if (trilhaAtiva) {
    return (
      <main className="flex flex-1 flex-col p-10 bg-background max-w-5xl mx-auto w-full">
        <TrilhaView 
          trilha={trilhaAtiva} 
          onVoltar={() => setTrilhaAtiva(null)} 
        />
      </main>
    );
  }

  // Visualização Padrão: Vitrine de Trilhas
  return (
    <main className="flex flex-1 flex-col p-10 bg-background max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="text-[40px] font-bold text-brand-dark">Trilhas de Aprendizagem</h1>
        <p className="mt-2 text-sm text-neutral-medium">
          Siga jornadas guiadas combinando materiais técnicos, leituras e simulados para alavancar seu aprendizado.
        </p>
      </header>

      {/* Grid responsivo: organiza os cards automaticamente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LISTA_DE_TRILHAS.map((trilha) => (
          <CardTrilha 
            key={trilha.id} 
            trilha={trilha} 
            onAbrir={(trilhaSelecionada) => setTrilhaAtiva(trilhaSelecionada)} 
          />
        ))}
      </div>
    </main>
  );
}