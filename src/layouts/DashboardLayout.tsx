import { Outlet } from "react-router-dom"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { DashboardProvider } from "@/components/dashboard/DashboardProvider"
import { Sidebar } from "@/components/dashboard/Sidebar"

export function DashboardLayout() {
  return (
    <DashboardProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <DashboardHeader />

          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </DashboardProvider>
  )
}