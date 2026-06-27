import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-brand-primary bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">

        {/* Marca */}
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
          <img
            src="/logoPreta.png"
            alt="UFF Consulting Club"
            className="h-12 w-auto"
          />

            <div>
              <h2 className="text-lg font-bold">
                UFF Consulting Club
              </h2>
            </div>
          </Link>

          <p className="max-w-sm text-sm text-brand-light text-justify">
            Transformando conhecimento acadêmico em soluções reais para o mercado,
            conectando talentos e oportunidades através da consultoria.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-vibrant">
            Navegação
          </h3>

          <Link
            to="/"
            className="text-sm text-brand-light transition-colors hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/sobre"
            className="text-sm text-brand-light transition-colors hover:text-white"
          >
            Sobre
          </Link>

          <Link
            to="/cases"
            className="text-sm text-brand-light transition-colors hover:text-white"
          >
            Cases
          </Link>

          <Link
            to="/contato"
            className="text-sm text-brand-light transition-colors hover:text-white"
          >
            Contato
          </Link>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-vibrant">
            Contato
          </h3>

          <p className="text-sm text-brand-light">
            contato@uffconsultingclub.com.br
          </p>

          <p className="text-sm text-brand-light">
            Niterói • Rio de Janeiro
          </p>

          <div className="flex gap-6 pt-2">
            <a
              href="https://br.linkedin.com/company/uff-consulting-club"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-light transition-colors hover:text-white"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/uffconsultingclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-light transition-colors hover:text-white"
            >
              <FaInstagram size={18} />
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-brand-primary">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-center text-xs text-brand-light">
            © {new Date().getFullYear()} UFF Consulting Club. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}