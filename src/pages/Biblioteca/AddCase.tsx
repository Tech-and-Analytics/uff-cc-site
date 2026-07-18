import { useState } from "react";
import { Save } from "lucide-react";

export function AddCase() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageUrl: "",
        difficulty: "",
        estimatedTime: 30, //em minutos
        content: ""    
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Case salvo: ", formData);
    };

    return(
        <main className="flex flex-1 flex-col p-10 max-w-4xl mx-auto">
            <h1 className="text-[40px] font-bold text-brand-dark mb-8">
                Criar Novo Case
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
                        
                <div className="grid gap-6 md:grid-cols-2">
                {/* Título */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-card-foreground">Título do Case</label>
                    <input 
                    type="text"
                    className="rounded-lg border border-border px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Ex: Expansão de Startup SaaS"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                </div>

                {/* URL da Imagem */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-card-foreground">URL da Imagem da Capa</label>
                    <input 
                    type="text"
                    className="rounded-lg border border-border px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="https://exemplo.com/imagem.jpg"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                    />
                </div>

                {/* Dificuldade */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-card-foreground">Dificuldade</label>
                    <select 
                    className="rounded-lg border border-border px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    value={formData.difficulty}
                    onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                    >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    </select>
                </div>

                {/* Tempo Estimado */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-card-foreground">Tempo Estimado (minutos)</label>
                    <input 
                    type="number"
                    className="rounded-lg border border-border px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    value={formData.estimatedTime}
                    onChange={(e) => setFormData({...formData, estimatedTime: Number(e.target.value)})}
                    />
                </div>
                </div>

                {/* Resumo/Descrição */}
                <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-card-foreground">Breve Descrição (Card)</label>
                <textarea 
                    rows={2}
                    className="rounded-lg border border-border px-4 py-2 text-sm focus:border-primary focus:outline-none resize-none"
                    placeholder="Resumo que aparecerá no card da biblioteca..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
                </div>

                {/* Conteúdo Completo */}
                <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-card-foreground">Conteúdo Completo do Case</label>
                <textarea 
                    rows={8}
                    className="rounded-lg border border-border px-4 py-2 text-sm focus:border-primary focus:outline-none"
                    placeholder="Descreva todo o cenário, os dados da empresa e o desafio proposto..."
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                />
                </div>

                <div className="flex justify-end pt-4">
                <button 
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-brand-medium"
                >
                    <Save size={20} />
                    Salvar Case
                </button>
                </div>
            </form>        
        </main>
    )
}