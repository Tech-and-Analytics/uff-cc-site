import { Menu } from "lucide-react"
import { useLocation } from "react-router-dom"

import { useDashboard } from "./useDashboard"

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/perfil": "Perfil",
  "/biblioteca": "Biblioteca",
  "/simulado": "Simulados",
}

export function DashboardHeader() {
  const { openSidebar } = useDashboard()
  const { pathname } = useLocation()

  const title = pageTitles[pathname] ?? "Dashboard"

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={openSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted md:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h1 className="text-xl font-semibold">{title}</h1>

          <p className="text-sm text-muted-foreground">
            Bem-vindo ao dashboard.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Avatar, notificações e ações futuras */}
      </div>
    </header>
  )
}