import ReactDOM from "react-dom/client"

import { HelmetProvider } from "react-helmet-async"

import "./index.css"

import { AppRoutes } from "./routes/AppRoutes"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <AppRoutes />
  </HelmetProvider>
)