import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components/dashboard/Sidebar"

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col bg-background">
        <Outlet />
      </div>
    </div>
  )
}
