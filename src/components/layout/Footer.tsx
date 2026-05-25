import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        
        {/* Logo + descrição */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            UFF Consulting Club
          </h2>

          <p className="text-sm text-muted-foreground">
            Transformando conhecimento acadêmico em soluções reais para o mercado.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            Navegação
          </h3>

          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-brand-primary"
          >
            Home
          </Link>

          <Link
            to="/sobre"
            className="text-sm text-muted-foreground hover:text-brand-primary"
          >
            Sobre
          </Link>

          <Link
            to="/cases"
            className="text-sm text-muted-foreground hover:text-brand-primary"
          >
            Cases
          </Link>

          <Link
            to="/contato"
            className="text-sm text-muted-foreground hover:text-brand-primary"
          >
            Contato
          </Link>
        </div>

        {/* Contato / social */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-foreground">
            Contato
          </h3>

          <p className="text-sm text-muted-foreground">
            contato@uffcc.com
          </p>

          <p className="text-sm text-muted-foreground">
            Niterói, RJ
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-brand-primary"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-brand-primary"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} UFF Consulting Club. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}