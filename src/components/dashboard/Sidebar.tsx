import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"

import { useDashboard } from "./useDashboard"
import { navigation } from "./navigation"
import { SidebarFooter } from "./SidebarFooter"
import { SidebarItem } from "./SidebarItem"
import { SidebarProfile } from "./SidebarProfile"

export function Sidebar() {
  const {
    sidebarOpen,
    closeSidebar,
    toggleSidebar,
  } = useDashboard()

  const collapsed = !sidebarOpen

  return (
    <>
      {/* Overlay Mobile */}
      <div
        onClick={closeSidebar}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden",
          sidebarOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "w-64",
          "md:sticky md:translate-x-0",
          collapsed ? "md:w-20" : "md:w-64"
        )}
      >
        <div className="relative flex h-full flex-col p-4">
          <SidebarProfile collapsed={collapsed} />

          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <SidebarItem
                  key={item.href}
                  item={item}
                  collapsed={collapsed}
                  onClick={closeSidebar}
                />
              ))}
            </ul>
          </nav>

          <SidebarFooter collapsed={collapsed} />

          {/* Botão Desktop */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="absolute -right-3 top-8 hidden h-7 w-7 items-center justify-center rounded-full border border-sidebar-border bg-background shadow-md transition-all hover:scale-105 md:flex"
            aria-label={
              collapsed ? "Expandir menu" : "Recolher menu"
            }
          >
            <ArrowLeft
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                collapsed && "rotate-180"
              )}
            />
          </button>
        </div>
      </aside>
    </>
  )
}