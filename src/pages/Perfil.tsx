import { useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type ProfileForm = {
  fullName: string
  email: string
  phone: string
  course: string
  semester: string
  bio: string
}

const initialProfile: ProfileForm = {
  fullName: "Nome do Usuario",
  email: "usuario@id.uff.br",
  phone: "(21) 99999-9999",
  course: "Engenharia de Producao",
  semester: "6",
  bio: "Interessado em estrategia, dados e consultoria.",
}

export function Perfil() {
  const [form, setForm] = useState<ProfileForm>(initialProfile)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [feedback, setFeedback] = useState("")

  function updateField(field: keyof ProfileForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFeedback("Perfil atualizado com sucesso.")
    setCurrentPassword("")
    setNewPassword("")
  }

  return (
    <main className="flex flex-1 flex-col gap-8 p-10">
      <header>
        <h1 className="text-[40px] font-bold text-brand-dark">Meu Perfil</h1>
        <p className="mt-2 text-neutral-medium">
          Gerencie suas informações e acompanhe seu progresso.
        </p>
      </header>

      <form onSubmit={handleSave} className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border bg-card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-foreground">Dados pessoais</h2>
          <p className="mt-1 text-sm text-neutral-medium">
            Essas informacoes aparecem no seu perfil dentro da plataforma.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <Label htmlFor="fullName" className="mb-2 block">
                Nome completo
              </Label>
              <Input
                id="fullName"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="h-11"
              />
            </div>

            <div>
              <Label htmlFor="email" className="mb-2 block">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="h-11"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="mb-2 block">
                Telefone
              </Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="h-11"
              />
            </div>

            <div>
              <Label htmlFor="course" className="mb-2 block">
                Curso
              </Label>
              <Input
                id="course"
                value={form.course}
                onChange={(event) => updateField("course", event.target.value)}
                className="h-11"
              />
            </div>

            <div>
              <Label htmlFor="semester" className="mb-2 block">
                Periodo
              </Label>
              <Input
                id="semester"
                value={form.semester}
                onChange={(event) => updateField("semester", event.target.value)}
                className="h-11"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="bio" className="mb-2 block">
                Bio
              </Label>
              <textarea
                id="bio"
                value={form.bio}
                onChange={(event) => updateField("bio", event.target.value)}
                className="min-h-[110px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Seguranca</h2>
          <p className="mt-1 text-sm text-neutral-medium">
            Atualize a senha da sua conta.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="currentPassword" className="mb-2 block">
                Senha atual
              </Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="h-11"
              />
            </div>

            <div>
              <Label htmlFor="newPassword" className="mb-2 block">
                Nova senha
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="h-11"
              />
            </div>
          </div>

          <Button type="submit" className="mt-6 h-11 w-full font-semibold">
            Salvar alteracoes
          </Button>

          {feedback ? (
            <p className="mt-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
              {feedback}
            </p>
          ) : null}
        </section>
      </form>
    </main>
  )
}
