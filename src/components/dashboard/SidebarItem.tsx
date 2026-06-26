import { NavLink } from "react-router-dom"

import { cn } from "@/lib/utils"

import type { NavigationItem } from "./navigation"

interface SidebarItemProps {
  item: NavigationItem
  collapsed: boolean
  onClick?: () => void
}

export function SidebarItem({
  item,
  collapsed,
  onClick,
}: SidebarItemProps) {
  const Icon = item.icon

  return (
    <li>
      <NavLink
        to={item.href}
        onClick={onClick}
        className={({ isActive }) =>
          cn(
            "group flex h-11 items-center rounded-xl transition-all duration-200",
            collapsed ? "justify-center px-2" : "gap-3 px-4",
            isActive
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          )
        }
      >
        <Icon className="h-5 w-5 shrink-0" />

        <span
          className={cn(
            "overflow-hidden whitespace-nowrap transition-all duration-300",
            collapsed
              ? "max-w-0 opacity-0"
              : "max-w-[160px] opacity-100"
          )}
        >
          {item.label}
        </span>
      </NavLink>
    </li>
  )
}