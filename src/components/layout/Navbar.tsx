import { User } from "lucide-react"
import { Link } from "react-router-dom";

export function Navbar() {
  const navItem =
    "font-medium text-white transition-colors duration-200 hover:text-brand-vibrant";

  return (
    <nav className="flex items-center gap-8">
      <Link className={navItem} to="/">
        Home
      </Link>

      <Link className={navItem} to="/sobre">
        Sobre
      </Link>

      <Link className={navItem} to="/cases">
        Cases
      </Link>

      <Link className={navItem} to="/contato">
        Contato
      </Link>

      <Link
        to="/login"
        className="rounded-full p-2 text-white transition-colors hover:bg-brand-primary">
        <User size={30} />
      </Link>
    </nav>
  );
}