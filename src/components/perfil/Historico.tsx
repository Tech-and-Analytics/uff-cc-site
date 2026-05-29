// Historico.tsx
import { Button } from "@/components/ui/button"

export function Historico() {
  return (
    // Estrutura centralizada usando Flexbox (flex flex-col items-center justify-center)
    <section className="rounded-2xl border border-border bg-card p-10 flex flex-col items-center justify-center text-center">
      <div className="h-16 w-16 mb-4 text-neutral-light">
        {/* Ícone SVG de calendário. Em produção, você poderia usar uma biblioteca como Lucide React. */}
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-foreground">Histórico vazio</h2>
      <p className="mt-2 mb-6 text-sm text-neutral-medium max-w-sm">
        Você ainda não concluiu nenhum simulado. Os simulados finalizados aparecerão aqui.
      </p>
      {/* Botão outline (vazado) como sugerido no design system */}
      <Button variant="outline" className="border-border text-brand-dark font-medium hover:bg-brand-light/20">
        Ir para simulados disponíveis
      </Button>
    </section>
  )
}