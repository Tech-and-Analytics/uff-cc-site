import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ProgressSection } from "@/pages/Dashboard/ProgressSection"
import { StatusCards } from "@/pages/Dashboard/StatusCards"
import { SEO } from "@/components/SEO"
// Importe a sua lista de trilhas (ajuste o caminho conforme a sua pasta real)
import { LISTA_DE_TRILHAS } from "@/pages/Trilhas/mockTrilhas" 
// O defaultDashboardData ainda pode ser importado se você quiser manter a média de acertos estática por enquanto
//import { defaultDashboardData } from "@/pages/Dashboard/dashboard"

export function Dashboard() {
  
  // 1. Contadores para os Cards (Trilhas inteiras)
  let trilhasConcluidas = 0
  let trilhasEmAndamento = 0
  let trilhasNaoIniciadas = 0

  // 2. Contadores para a Barra de Progresso (Aulas/Conteúdos individuais)
  let totalItensGlobais = 0
  let concluidosGlobais = 0

  // Varremos cada trilha para aplicar as regras
  LISTA_DE_TRILHAS.forEach((trilha) => {
    const totalItens = trilha.itens.length
    const concluidos = trilha.itens.filter((item) => item.concluido).length

    // Soma para a barra de progresso geral
    totalItensGlobais += totalItens
    concluidosGlobais += concluidos

    // Regra de Status da Trilha
    if (totalItens > 0) {
      if (concluidos === totalItens) {
        // Só é "Concluída" se TODOS os itens estiverem marcados
        trilhasConcluidas++
      } else if (concluidos > 0) {
        // Se tem pelo menos 1 feito, mas não todos, está "Em andamento"
        trilhasEmAndamento++
      } else {
        // Se nenhum foi feito (0), está "Não iniciada"
        trilhasNaoIniciadas++
      }
    }
  })

  // Calcula a porcentagem geral 
  const progressoGeral = totalItensGlobais === 0 
    ? 0 
    : Math.round((concluidosGlobais / totalItensGlobais) * 100)

  // Atualiza as métricas dinamicamente para os StatusCards
  const metricasDinamicas = {
    concluidos: trilhasConcluidas,
    emAndamento: trilhasEmAndamento,
    naoIniciados: trilhasNaoIniciadas,
    //mediaAcertos: defaultDashboardData.metricas.mediaAcertos, // Mantém estático por enquanto
  }

  return (
    <main className="flex flex-1 flex-col gap-8 p-10 bg-background">
      <SEO title="Meu Dashboard" noindex={true}/>
      <section>
        {/* Passa o nosso novo valor calculado para a barra */}
        <ProgressSection progressoAtual={progressoGeral} />
        
        {/* Passa as métricas dinâmicas para os cards superiores */}
        <StatusCards metricas={metricasDinamicas} />
      </section>

      {/* Área de Trilhas incorporada no espaço flex-1 restante */}
      <section className="flex-1 mt-2">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">Trilhas de Aprendizagem</h2>
            <p className="text-sm text-neutral-medium mt-1">
              Continue de onde parou ou explore novos conteúdos estruturados.
            </p>
          </div>
          
          <Button asChild className="bg-brand-dark hover:bg-brand-primary text-white font-semibold h-10 px-6">
            <Link to="/Trilhas" >
              Acessar Trilhas
            </Link>
          </Button>
            
        </div>

        <div className="rounded-2xl border border-border bg-card p-10 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="h-16 w-16 mb-4 text-brand-medium">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground">Explore suas jornadas</h3>
          <p className="mt-2 mb-6 text-sm text-neutral-medium max-w-md mx-auto">
            Você possui trilhas de aprendizagem disponíveis para impulsionar seu conhecimento em consultoria estratégica.
          </p>
          
          <Button asChild variant="outline" className="border-brand-dark text-brand-dark font-medium hover:bg-brand-light/20">
            <Link to="/trilhas" >
              Ver todas as trilhas disponíveis
            </Link>
          </Button>
        </div>
      </section>
      <section className="mt-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold text-brand-dark mb-4">Ações Rápidas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card do Formulário */}
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="font-bold text-foreground">Feedback da Plataforma</h3>
              <p className="text-sm text-neutral-medium mt-1">
                Ajude-nos a melhorar. Preencha nosso formulário de avaliação.
              </p>
            </div>
            
            {/* O BOTÃO COM O LINK EXTERNO */}
            <Button asChild className="bg-brand-dark hover:bg-brand-primary text-white font-medium ml-4 shrink-0">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeCYUq5tF6YuOPyLCqTSDz1Yv_6CiGckak_N4cYwEYQu--XsQ/viewform?usp=publish-editor" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Abrir Formulário ↗
              </a>
            </Button>
          </div>

          {/* Você pode adicionar outros cards úteis aqui no futuro (ex: Suporte, Grupo do WhatsApp) */}
        </div>
      </section>
    </main>
  )
}