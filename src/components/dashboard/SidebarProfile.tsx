import { User } from "lucide-react"

import { cn } from "@/lib/utils"

interface SidebarProfileProps {
  collapsed: boolean
}

export function SidebarProfile({
  collapsed,
}: SidebarProfileProps) {
  return (
    <div className="mb-8 flex items-center">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sidebar-accent">
        <User className="h-6 w-6" />
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          collapsed
            ? "ml-0 max-w-0 opacity-0"
            : "ml-3 max-w-[180px] opacity-100"
        )}
      >
        <p className="truncate text-sm font-semibold">
          Nome do Usuário
        </p>

        <p className="truncate text-xs text-sidebar-foreground/70">
          Ciência da Computação
        </p>
      </div>
    </div>
  )
}