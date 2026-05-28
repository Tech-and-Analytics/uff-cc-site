import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Layout } from "@/layouts/Layout"
import { DashboardLayout } from "@/layouts/DashboardLayout"

import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Cases } from "@/pages/Cases"
import { Contact } from "@/pages/Contact"
import { NotFound } from "@/pages/NotFound"
import { Login } from "@/pages/Login"
import { Dashboard } from "@/pages/Dashboard"
import { Biblioteca } from "@/pages/Biblioteca"
import { Simulado } from "@/pages/Simulado"
import { Perfil } from "@/pages/Perfil"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulado" element={<Simulado />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/biblioteca" element={<Biblioteca />}/>
        </Route>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contato" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
