import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="flex items-center gap-8">
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/cases">Cases</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  )
}