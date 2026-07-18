import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description?: string
  image?: string
  noindex?: boolean // Usado para páginas privadas (Dashboard, Perfil)
}

export function SEO({ 
  title, 
  description = "Plataforma de preparação da UFF Consulting Club.", 
  image = "https://seusite.com/imagem-padrao.jpg",
  noindex = false 
}: SEOProps) {
  
  const siteTitle = `${title} | UFF Consulting Club`

  return (
    <Helmet>
      {/* Tags Básicas para o Google */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {/* Controle de Indexação (Robôs) */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook / WhatsApp (Tags para partilha de links) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}