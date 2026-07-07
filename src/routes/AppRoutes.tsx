import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Layout } from "@/layouts/Layout"
import { DashboardLayout } from "@/layouts/DashboardLayout"

import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Cases } from "@/pages/Cases"
import { Contact } from "@/pages/Contact"
import { NotFound } from "@/pages/NotFound"
import { Login } from "@/pages/Login"

import { Dashboard } from "@/pages/Dashboard/Dashboard"
import { Biblioteca } from "@/pages/Biblioteca"
import { Simulado } from "@/pages/Simulados/TelaSimulados"
import { Perfil } from "@/pages/Perfil/Perfil"
import { Trilhas } from "@/pages/Trilhas/Trilhas"
import { TelaMaterial } from "@/pages/Trilhas/TelaMaterial"
import { AnalyticsTracker } from "@/AnalyticsTracker"

export function AppRoutes() {
  return (
    <BrowserRouter>
    <AnalyticsTracker/>
      <Routes>

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulado" element={<Simulado />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/trilhas" element={<Trilhas />} />
          <Route path="/material/:id" element={<TelaMaterial />} />
        </Route>

        {/* SITE NORMAL */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contato" element={<Contact />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}