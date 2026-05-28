import { ProgressSection } from "@/components/dashboard/ProgressSection"
import { StatusCards } from "@/components/dashboard/StatusCards"
import { defaultDashboardData } from "@/lib/dashboard"

export function Dashboard() {
  const { progressoAtual, metricas } = defaultDashboardData

  return (
    <main className="flex flex-1 flex-col gap-8 p-10">
      <section>
        <ProgressSection progressoAtual={progressoAtual} />
        <StatusCards metricas={metricas} />
      </section>

      <section className="flex-1" />
    </main>
  )
}
