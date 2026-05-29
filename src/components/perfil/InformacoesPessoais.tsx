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

export function InformacoesPessoais(){
    // useState cria uma variável de estado ('form') e uma função para atualizá-la ('setForm').
    const [form, setForm] = useState<ProfileForm>({
        fullName: "Ana Carolina Silva",
        email: "ana.silva@consultoria.com",
        phone: "(11) 98765-4321",
        course: "Gestão Estratégica",
        semester: "Avançado",
        bio: "Consultora Sênior com foco em Estratégia.",
    })

    const [feedback, setFeedback] = useState("") // Estado para armazenar a mensagem de sucesso após salvar o formulário.

    // Função auxiliar para atualizar um campo específico do formulário sem apagar os outros.
  // Ela pega o estado anterior (prev), copia tudo (...prev) e substitui apenas o campo alterado.
    function updateField(field: keyof ProfileForm, value: String){
        setForm((prev) => ({...prev, [field]: value}))
    }

    function handleSave(event: FormEvent<HTMLFormElement>){
        event.preventDefault() //Evita q a pagina recarregue ao enviar o form
        setFeedback("Ação concluída! Seu cadastro foi atualizado com sucesso.")
    }

    return (
        <form onSubmit={handleSave} className="grid gap-6">
            <section className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-2xl font-semibold text-foreground">Informações Pessoais</h2>
                <p className="mt-1 text-sm text-neutral-medium">Seus dados cadastrais na plataforma</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {/* Cada campo do formulário é composto por uma Label (rótulo) e um Input. */}
                    <div className="md:col-span-2">
                        <Label htmlFor="fullName" className="mb-2 block text-sm">Nome completo</Label>
                        <Input 
                        id="fullName" 
                        value={form.fullName} // O valor exibido vem do estado.
                        onChange={(e) => updateField("fullName", e.target.value)} // Quando o usuário digita, o estado é atualizado.
                        className="h-11 border-input" 
                    />
                </div>

                <div>
                    <Label htmlFor="email" className="mb-2 block text-sm"></Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="h-11 border-input" />
                </div>

                <div>
                    <Label htmlFor="phone" className="mb-2 block text-sm">Telefone</Label>
                    <Input id="phone" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="h-11 border-input" />
                </div>

                {/*botões de ação do formulário*/}
                <div className="md:col-span-2 flex justify-start gap-4 mt-4">
                    {/* type="submit" faz com que o botão dispare o onSubmit do form */}
                    <Button type="submit" className="h-11 bg-brand-dark hover:bg-brand-primary text-white font-semibold">
                    Salvar alterações
                    </Button>
                    <Button type="button" variant="outline" className="h-11 border-border text-foreground">
                    Cancelar
                    </Button>
                </div>

                {/* Renderização condicional: A mensagem verde só aparece se a variável 'feedback' tiver algum texto. */}
                {feedback && (
                    <p className="md:col-span-2 mt-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 font-medium">
                    {feedback}
                    </p>
                )}

                </div>
            </section>
        </form>
    )
}