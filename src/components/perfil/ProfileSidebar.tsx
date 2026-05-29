interface SidebarProps{
  abaAtiva: string
  setAbaAtiva: (aba: string) => void;
}

export function Sidebar({abaAtiva, setAbaAtiva}: SidebarProps){
  const itensMenu = [ //array de objetos contendo os dados do menu
    {id: "informacoes", label: "Informações Pessoais"},
    {id: "historico", label: "Histórico de Simulados"},
    {id: "configuracoes", label: "Configurações de Conta"},
    {id: "indicadores", label: "Indicadores de Evolução"}
  ]


  return (
    // 'aside' é uma tag para barras laterais.
    <aside className="w-64 border-r border-border pr-4 h-full min-h-[calc(100vh-80px)]">
      <nav className="flex flex-col gap-2">
        {/* Usamos o .map() para percorrer a lista de itens e renderizar um botão para cada um */}
        {itensMenu.map((item) => (
          <button
            key={item.id} 
            onClick={() => setAbaAtiva(item.id)} // Ao clicar, avisa o componente pai qual item foi selecionado.
            // A classe (className) muda dinamicamente. Se o item atual for o selecionado, 
            // aplicamos o fundo roxo claro e texto em negrito. Caso contrário, usamos a cor neutra.
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[12px] text-left transition-colors ${
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