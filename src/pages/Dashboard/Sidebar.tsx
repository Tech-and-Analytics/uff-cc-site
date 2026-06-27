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
  { to: "/dashboard", label: "Dashboard", icon: ChartLine },
  { to: "/perfil", label: "Usuario", icon: User },
  { to: "/biblioteca", label: "Biblioteca", icon: BookMarked },
  { to: "/simulado", label: "Simulados", icon: FileText },
] as const

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn(
        "relative z-[2] flex min-h-screen flex-col justify-between bg-sidebar text-sidebar-foreground transition-all duration-500",
        open ? "min-w-[15%]" : "min-w-[82px]"
      )}
    >
      <div className="p-3">
        <div className="mb-6 flex items-center gap-2">
          <div className="size-[50px] shrink-0 rounded-[20px] bg-sidebar-accent object-cover" />
          <div
            className={cn(
              "flex flex-col overflow-hidden whitespace-nowrap transition-all duration-[600ms]",
              open ? "w-[150px]" : "h-0 w-0"
            )}
          >
            <span className="text-sm">Nome do User</span>
            <span className="text-xs text-sidebar-foreground">Mais infos</span>
          </div>
        </div>

        <ul className="flex list-none flex-col gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  cn(
                    "flex cursor-pointer items-center justify-center rounded-lg p-3.5 text-sidebar-foreground no-underline transition-colors",
                    open && "justify-start gap-3.5",
                    isActive
                      ? "bg-sidebar-primary"
                      : "hover:bg-sidebar-accent"
                  )
                }
              >
                <Icon className="size-5 shrink-0" />
                <span
                  className={cn(
                    "overflow-hidden text-sm text-ellipsis whitespace-nowrap transition-all duration-[600ms]",
                    open ? "w-[150px]" : "h-0 w-0"
                  )}
                >
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="absolute top-[30px] -right-2.5 flex size-5 cursor-pointer items-center justify-center rounded-full border-none bg-sidebar-accent text-sidebar-foreground"
          aria-label={open ? "Recolher menu" : "Expandir menu"}
        >
          <ArrowRight
            className={cn(
              "size-3 transition-transform duration-300",
              open && "rotate-180"
            )}
          />
        </button>
      </div>
    </nav>
  )
}
