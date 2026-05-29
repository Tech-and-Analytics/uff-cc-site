import { ArrowRight } from "lucide-react";

interface CaseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  estimatedTime: string;
}

export function CaseCard({
  title,
  description,
  imageUrl,
  difficulty,
  estimatedTime,
}: CaseCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-6">
        <div className="mb-4 flex gap-2">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {difficulty}
          </span>

          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {estimatedTime}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-card-foreground">
          {title}
        </h3>

        <p className="mb-6 line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>

        <button className="flex items-center gap-2 font-medium text-primary transition-colors hover:text-brand-medium">
          Ver Case
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}