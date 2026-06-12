// src/pages/Material/index.tsx

import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LISTA_DE_MATERIAIS } from "./mockMateriais" // Importamos o nosso banco de dados

export function TelaMaterial() {
  // 1. O React Router captura a variável dinâmica da URL
  // Ex: se a URL for /material/item-2, id será "item-2"
  const { id } = useParams()
  const navigate = useNavigate()

  // 2. Buscamos na nossa lista qual material tem esse ID específico
  const material = LISTA_DE_MATERIAIS.find((item) => item.id === id)

  // 3. Tratamento de Erro: E se o usuário digitar uma URL de um material que não existe?
  if (!material) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-4">Conteúdo não encontrado</h2>
        <Button onClick={() => navigate("/trilhas")}>Voltar para as Trilhas</Button>
      </div>
    )
  }

  // 4. Se encontrou, renderiza o "Molde" preenchendo com os dados do material encontrado
  return (
    <main className="flex flex-1 flex-col p-10 bg-background max-w-4xl mx-auto w-full">
      <nav className="mb-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="text-sm text-neutral-medium px-0">
          ← Voltar
        </Button>
      </nav>

      <header className="mb-10 border-b border-border pb-8">
        <span className="text-xs font-bold text-brand-medium block mb-2">
          {material.categoria}
        </span>
        <h1 className="text-[32px] font-bold text-brand-dark leading-tight">
          {material.titulo}
        </h1>
      </header>

      <article className="prose prose-neutral max-w-none text-foreground leading-relaxed">
        
        {/* Renderiza o vídeo apenas se for videoaula E tiver o link */}
        {material.tipo === "videoaula" && material.videoUrl ? (
          <div className="w-full aspect-video rounded-xl mb-8 overflow-hidden">
            <iframe
              width="100%" height="100%" src={material.videoUrl}
              title={material.titulo} frameBorder="0" allowFullScreen
            />
          </div>
        ) : null}

        {/* Renderiza o texto do banco de dados */}
        <div dangerouslySetInnerHTML={{ __html: material.conteudoHTML }} />
      </article>

      <footer className="mt-16 pt-8 border-t flex justify-between items-center">
        <Button variant="outline">Marcar dúvida</Button>
        <Button 
          onClick={() => {
            material.proximoItemId ? navigate(`/material/${material.proximoItemId}`) : navigate("/trilhas")
          }}
          className="bg-brand-dark hover:bg-brand-primary text-white"
        >
          Concluir e Avançar →
        </Button>
      </footer>
    </main>
  )
}