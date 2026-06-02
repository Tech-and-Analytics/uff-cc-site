import type { DashboardMetrics } from "@/lib/dashboard"
import { cn } from "@/lib/utils"

type StatusCardsProps = {
  metricas: DashboardMetrics
}

const cards = [
  { key: "concluidos" as const, icon: "✔️", label: "Concluídos" },
  { key: "emAndamento" as const, icon: "⏱️", label: "Em andamento" },
  { key: "naoIniciados" as const, icon: "🕒", label: "Não iniciados" },
] as const

export function StatusCards({ metricas }: StatusCardsProps) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ key, icon, label }) => (
        <div
          key={key}
          className="rounded-lg border border-neutral-light bg-[#F8F9FA] p-6"
        >
          <span className="text-xl">{icon}</span>
          <h3 className="mt-2 text-2xl font-medium text-foreground">
            {metricas[key]}
          </h3>
          <p className="text-neutral-medium">{label}</p>
        </div>
      ))}

      <div
        className={cn(
          "rounded-lg border border-neutral-light bg-[#F8F9FA] p-6",
          "ring-2 ring-brand-primary/20"
        )}
      >
        <span className="text-xl">📈</span>
        <h3 className="mt-2 text-2xl font-medium text-foreground">
          {metricas.mediaAcertos}%
        </h3>
        <p className="text-neutral-medium">Média de acertos</p>
      </div>
    </div>
  )
}
