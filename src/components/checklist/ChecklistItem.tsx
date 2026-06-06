import { CheckCircle2, Circle } from "lucide-react";

interface ChecklistItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

export function ChecklistItem({
  title,
  completed,
  onToggle,
}: ChecklistItemProps) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-3 rounded-lg border border-border p-4 text-left transition hover:bg-muted"
    >
      {completed ? (
        <CheckCircle2
          size={22}
          className="text-brand-primary"
        />
      ) : (
        <Circle
          size={22}
          className="text-neutral-medium"
        />
      )}

      <span
        className={
          completed
            ? "font-medium line-through text-muted-foreground"
            : "font-medium"
        }
      >
        {title}
      </span>
    </button>
  );
}