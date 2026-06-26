import {
  BookMarked,
  ChartLine,
  FileText,
  User,
  type LucideIcon,
} from "lucide-react"

export interface NavigationItem {
  label: string
  href: string
  icon: LucideIcon
}

export const navigation: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: ChartLine,
  },
  {
    label: "Perfil",
    href: "/perfil",
    icon: User,
  },
  {
    label: "Biblioteca",
    href: "/biblioteca",
    icon: BookMarked,
  },
  {
    label: "Simulados",
    href: "/simulado",
    icon: FileText,
  },
]