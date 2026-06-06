interface ChecklistProgressProps {
  completed: number;
  total: number;
}

export function ChecklistProgress({
  completed,
  total,
}: ChecklistProgressProps) {
  const percentage =
    total > 0
      ? (completed / total) * 100
      : 0;

  return (
    <div className="mb-6">
      <div className="mb-2 flex justify-between">
        <span className="font-medium">
          Progresso
        </span>

        <span className="text-sm text-muted-foreground">
          {completed}/{total}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-neutral-light">
        <div
          className="h-full rounded-full bg-brand-primary transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}