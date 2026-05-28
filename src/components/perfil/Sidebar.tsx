import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  ArrowRight,
  BookMarked,
  ChartLine,
  FileText,
  User,
} from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { to: "/configuracoes", label: "Configurações", icon: ChartLine },
  { to: "/perfil", label: "Usuario", icon: User },
  { to: "/historico", label: "Historico", icon: BookMarked },
  { to: "/indicadores", label: "Indicadores de Evolução", icon: FileText },
] as const

export function Sidebar() {

  return (
    <nav
      className={cn(
        "relative z-[2] flex min-h-screen flex-col justify-between bg-sidebar text-sidebar-foreground transition-all duration-500",
      )}
    >
      <div className="p-3">
        <div className="mb-6 flex items-center gap-2">
          <div className="size-[50px] shrink-0 rounded-[20px] bg-sidebar-accent object-cover" />
          <div
            className={cn(
              "flex flex-col overflow-hidden whitespace-nowrap transition-all duration-[600ms]",
            )}
            > 
          </div>
        </div>
      </div>
    </nav>
  )
}
