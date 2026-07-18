import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Sempre que a rota mudar, envia um pageview para o GA4
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search 
    });
  }, [location]); // O hook dispara novamente se a 'location' mudar

  return null; // Este componente não renderiza nada na tela
};