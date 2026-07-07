import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { SEO } from "@/components/SEO"

export function Login() {
  const [showError, setShowError] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setShowError(true)
  }

  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <SEO title="Login" noindex={true} />
      <main className="flex flex-1 flex-col items-center justify-center bg-brand-dark p-10 text-white md:p-10">
        <div className="mb-6 flex h-20 w-[180px] items-center justify-center text-center text-xs">
          LOGO
        </div>
        <h1 className="text-[32px] font-semibold">UFF Consulting CLub</h1>
      </main>

      <section className="flex flex-1 items-center justify-center bg-background p-10 md:p-10">
        <div className="flex w-full max-w-[400px] flex-col">
          <header className="mb-8">
            <h2 className="mb-2 text-[32px] font-semibold text-brand-dark">
              Acessar plataforma
            </h2>
            <p className="text-neutral-medium">
              Insira suas credenciais para continuar
            </p>
          </header>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col">
            <div className="mb-5 flex flex-col">
              <Label htmlFor="email" className="mb-2 text-base text-foreground">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="h-12 rounded-lg px-4 text-base"
              />
            </div>

            <div className="mb-5 flex flex-col">
              <Label
                htmlFor="password"
                className="mb-2 text-base text-foreground"
              >
                Senha
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
                className="h-12 rounded-lg px-4 text-base"
              />
            </div>

            <div className="-mt-3 mb-5 flex justify-end">
              <a
                href="#"
                className="text-sm font-medium text-primary no-underline hover:underline"
              >
                Esqueceu sua senha?
              </a>
            </div>

            <div
              className={cn(
                "mb-2 rounded-lg border border-error-text bg-error-bg px-4 py-3 text-sm leading-snug text-error-text",
                !showError && "hidden"
              )}
              role="alert"
            >
              E-mail ou senha inválidos. Tente novamente.
            </div>

            <Button
              type="submit"
              className="h-12 w-full rounded-lg text-base font-semibold"
            >
              Entrar
            </Button>
          </form>

          <footer className="mt-6 text-center text-sm leading-normal text-neutral-medium">
            Não tem uma conta?
            <br />
            <a
              href="#"
              className="font-medium text-primary no-underline hover:underline"
            >
              Entre em contato com o administrador
            </a>
            <br />
            <Link
              to="/dashboard"
              className="mt-4 inline-block text-sm text-primary hover:underline"
            >
              Ir para o dashboard (demo)
            </Link>
          </footer>
        </div>
      </section>
    </div>
  )
}
