import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Layout } from "@/layouts/Layout"

import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Cases } from "../pages/Cases"
import { Contact } from "../pages/Contact"
import { NotFound } from "../pages/NotFound"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas com Layout (Header/Footer fixos) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<About />} />

          <Route path="/cases" element={<Cases />} />

          <Route path="/contato" element={<Contact />} />
        </Route>

        {/* 404 fora do layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}