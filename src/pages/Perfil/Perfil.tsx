import { useState } from "react"
// Importamos todos os sub-componentes que criamos.
import { Sidebar } from  "@/pages/Perfil/ProfileSidebar"
import { InformacoesPessoais } from "@/pages/Perfil/InformacoesPessoais"
import { Configuracoes } from "@/pages/Perfil/Configuracoes"
import { Historico } from "@/pages/Perfil/Historico"
import { Indicadores } from "@/pages/Perfil/Indicadores"

export function Perfil() {
  // O estado 'abaAtiva' guarda o ID de qual aba está selecionada.
  // Começa com 'informacoes' por padrão.
  const [abaAtiva, setAbaAtiva] = useState("informacoes")

  // Esta função analisa o valor de 'abaAtiva' e retorna (renderiza) o componente correto.
  // É o equivalente a um sistema de rotas, mas ocorrendo internamente em uma única página.
  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case "informacoes": return <InformacoesPessoais />
      case "historico": return <Historico />
      case "configuracoes": return <Configuracoes />
      case "indicadores": return <Indicadores />
      default: return <InformacoesPessoais /> // Caso de falha (fallback)
    }
  }

  return (
    // Container principal da página de Perfil.
    <main className="flex flex-1 flex-col p-10 bg-background max-w-7xl mx-auto w-full">
      
      {/* Cabeçalho estático, sempre ficará visível no topo */}
      <header className="mb-8 md:mb-8">{/*mb mobile md desktop */}
        <h1 className="text-3xl md:text-[40px] font-bold text-brand-dark">Meu Perfil</h1>
        <p className="mt-1 md:mt-2 text-sm text-neutral-medium">
          Gerencie suas informações e acompanhe seu progresso.
        </p>
      </header>

      {/* Container que divide a tela em duas colunas no Desktop (md:flex-row) */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Passamos o estado e a função de atualizar o estado para a Sidebar.
            Assim, a Sidebar sabe quem está selecionado e pode avisar o Perfil.tsx quando houver um clique. */}
        <Sidebar abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />
        
        {/* A coluna da direita, que ocupa todo o espaço restante (flex-1).
            Aqui chamamos a função que vai injetar o componente selecionado. */}
        <div className="flex-1">
          {renderizarConteudo()}
        </div>
        
      </div>
    </main>
  )
}