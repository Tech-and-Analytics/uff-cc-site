interface SidebarProps {
  abaAtiva: string
  setAbaAtiva: (aba: string) => void;
}

export function Sidebar({ abaAtiva, setAbaAtiva }: SidebarProps) {
  const itensMenu = [ 
    { id: "informacoes", label: "Informações Pessoais" },
    { id: "historico", label: "Histórico de Simulados" },
    { id: "configuracoes", label: "Configurações de Conta" },
    { id: "indicadores", label: "Indicadores de Evolução" }
  ]

  return (
    // 1. ASIDE: 
    // - Mobile: w-full, h-auto, borda inferior (border-b) e margin-bottom (mb-6)
    // - Desktop (md:): w-64, borda direita (border-r), remove borda inferior e aplica altura mínima
    <aside className="w-full h-auto mb-6 border-b pb-4 md:mb-0 md:pb-0 md:border-b-0 md:w-64 md:border-r border-border md:pr-4 md:h-full md:min-h-[calc(100vh-80px)] shrink-0">
      
      {/* 2. NAV: 
      // - Mobile: flex-row (horizontal) com overflow-x-auto
      // - Desktop (md:): flex-col (vertical) sem overflow */}
      <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible custom-scrollbar">
        
        {itensMenu.map((item) => (
          <button
            key={item.id} 
            onClick={() => setAbaAtiva(item.id)} 
            // 3. BOTÃO:
            // - Adicionado 'whitespace-nowrap' para o texto não quebrar no celular
            // - O resto das suas classes e lógicas originais foram mantidos!
            className={`flex whitespace-nowrap items-center gap-3 px-4 py-3 rounded-lg text-[12px] text-left transition-colors ${
              abaAtiva === item.id
                ? "bg-brand-light/30 text-brand-dark font-semibold"
                : "text-neutral-medium hover:bg-muted"
            }`}
          >
            {item.label}
          </button>
        ))}

      </nav>
    </aside>
  )
}