import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ProgressSection } from "@/pages/Dashboard/ProgressSection"
import { StatusCards } from "@/pages/Dashboard/StatusCards"
import { defaultDashboardData } from "@/lib/dashboard"

export function Dashboard() {
  const { progressoAtual, metricas } = defaultDashboardData
  
  // Inicializamos o hook de navegação do React Router
  const navigate = useNavigate()

  return (
    <main className="flex flex-1 flex-col gap-8 p-10 bg-background">
      <section>
        <ProgressSection progressoAtual={progressoAtual} />
        <StatusCards metricas={metricas} />
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
          
          {/* Botão primário chamando a rota de trilhas */}
          <Button 
            onClick={() => navigate("/Trilhas")}
            className="bg-brand-dark hover:bg-brand-primary text-white font-semibold h-10 px-6"
          >
            Acessar Trilhas
          </Button>
        </div>

        {/* Estado Vazio (Empty State) ou Banner Promocional para a área de trilhas. 
          No futuro, você pode substituir esta div pelos "Cards de Trilha" resumidos.
        */}
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
          
          {/* Botão secundário (outline) também chamando a rota */}
          <Button 
            variant="outline"
            onClick={() => navigate("/trilhas")}
            className="border-brand-dark text-brand-dark font-medium hover:bg-brand-light/20"
          >
            Ver todas as trilhas disponíveis
          </Button>
        </div>
      </section>
    </main>
  )
}