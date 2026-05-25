import { Link } from "react-router-dom"

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-3xl font-bold">
        404 - Página não encontrada
      </h1>

      <p className="text-muted-foreground">
        A página que você tentou acessar não existe.
      </p>

      <Link
        to="/"
        className="text-brand-primary hover:underline"
      >
        Voltar para Home
      </Link>
    </div>
  )
}