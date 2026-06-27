import { Link } from "react-router-dom";

import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary bg-brand-dark text-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          {/* Substituir pela logo oficial futuramente */}
          <img
            src="/logoPreta.png"
            alt="UFF Consulting Club"
            className="h-12 w-auto"
          />

          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none">
              UFF Consulting Club
            </span>
          </div>
        </Link>

        {/* Navegação */}
        <Navbar />
      </div>
    </header>
  );
}