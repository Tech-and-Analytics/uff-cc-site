import { useContext } from "react"

import { DashboardContext } from "./DashboardProvider"

export function useDashboard() {
  const context = useContext(DashboardContext)

  if (!context) {
    throw new Error(
      "useDashboard deve ser utilizado dentro de DashboardProvider."
    )
  }

  return context
}