type ProgressSectionProps = {
  progressoAtual: number
}

export function ProgressSection({ progressoAtual }: ProgressSectionProps) {
  return (
    <div className="mb-8 flex w-full flex-col gap-2">
      <h3 className="text-2xl font-medium text-brand-dark">Meu progresso</h3>
      <div className="h-2 w-full overflow-hidden rounded bg-neutral-light">
        <div
          className="h-full rounded-[10px] bg-brand-dark transition-[width] duration-[400ms] ease-in-out"
          style={{ width: `${progressoAtual}%` }}
        />
      </div>
      <span className="text-xs text-neutral-medium">
        {progressoAtual}% completo
      </span>
    </div>
  )
}
