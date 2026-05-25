import { Navbar } from "./Navbar"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">
          UFF Consulting Club
        </h1>

        <Navbar />
      </div>
    </header>
  )
}