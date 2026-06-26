import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react"

interface DashboardContextData {
  sidebarOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
}

export const DashboardContext = createContext({} as DashboardContextData)

interface DashboardProviderProps {
  children: ReactNode
}

export function DashboardProvider({
  children,
}: DashboardProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = useCallback(() => {
    setSidebarOpen(true)
  }, [])

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false)
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  const value = useMemo(
    () => ({
      sidebarOpen,
      openSidebar,
      closeSidebar,
      toggleSidebar,
    }),
    [sidebarOpen, openSidebar, closeSidebar, toggleSidebar]
  )

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}