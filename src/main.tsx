import ReactDOM from "react-dom/client"
import ReactGA from "react-ga4" // Importe a biblioteca

import "./index.css"
import { AppRoutes } from "./routes/AppRoutes"

// Inicialize o GA4 com o seu ID e o modo debug para testes locais
ReactGA.initialize([
  {
    trackingId: "G-6C67B2DNV2",
    gaOptions: {
      debug_mode: true 
    }
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppRoutes />
)