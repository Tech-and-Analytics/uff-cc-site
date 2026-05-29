import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Configuracoes() {
  // Estados separados para a senha atual e a nova senha.
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // Previne o recarregamento da página.
    
    // Aqui ocorreria a chamada para a API no backend para salvar a senha.
    
    // Limpa os campos após o envio.
    setCurrentPassword("")
    setNewPassword("")
  }

  return (
    <form onSubmit={handleSave} className="grid gap-6">
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-2xl font-semibold text-foreground">Configurações de Conta</h2>
        <p className="mt-1 text-sm text-neutral-medium">
          Personalização da experiência e segurança.
        </p>

        <div className="mt-6 space-y-4 max-w-md">
          <div>
            <Label htmlFor="currentPassword" className="mb-2 block text-sm">Senha atual</Label>
            {/* type="password" garante que o texto fique oculto (com bolinhas ou asteriscos). */}
            <Input id="currentPassword" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="h-11 border-input" />
          </div>

          <div>
            <Label htmlFor="newPassword" className="mb-2 block text-sm">Nova senha</Label>
            <Input id="newPassword" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="h-11 border-input" />
          </div>
        </div>

        <Button type="submit" className="mt-6 h-11 bg-brand-dark hover:bg-brand-primary text-white font-semibold">
          Atualizar senha
        </Button>
      </section>
    </form>
  )
}