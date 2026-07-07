import { LogOut, Settings } from "lucide-react"

import { cn } from "@/lib/utils"

interface SidebarFooterProps {
  collapsed: boolean
}

export function SidebarFooter({
  collapsed,
}: SidebarFooterProps) {
  return (
    <div className="mt-auto border-t border-sidebar-border pt-4">
      <div className="space-y-2">
        <button
          type="button"
          className={cn(
            "flex h-11 w-full items-center rounded-xl text-sidebar-foreground transition-colors hover:bg-sidebar-accent",
            collapsed ? "justify-center" : "gap-3 px-4"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />

          <span
            className={cn(
              "overflow-hidden whitespace-nowrap transition-all duration-300",
              collapsed
                ? "max-w-0 opacity-0"
                : "max-w-[160px] opacity-100"
            )}
          >
            Configurações
          </span>
        </button>

        <button
          type="button"
          className={cn(
            "flex h-11 w-full items-center rounded-xl text-red-500 transition-colors hover:bg-red-500/10",
            collapsed ? "justify-center" : "gap-3 px-4"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />

          <span
            className={cn(
              "overflow-hidden whitespace-nowrap transition-all duration-300",
              collapsed
                ? "max-w-0 opacity-0"
                : "max-w-[160px] opacity-100"
            )}
          >
            Sair
          </span>
        </button>
      </div>
    </div>
  )
}