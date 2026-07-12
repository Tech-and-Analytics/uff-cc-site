import { CaseCard } from "@/components/CaseCard";
import { Link } from "react-router-dom";
import { caseMock } from "@/pages/Biblioteca/mockCases";

export function Biblioteca() {
  return (
    <main className="flex flex-1 flex-col p-10">
      <h1 className="text-[40px] font-bold text-brand-dark">
        Biblioteca
      </h1>

      <p className="mt-2 text-neutral-medium">
        Explore os conteúdos disponíveis na plataforma.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseMock.map((caseItem) => (
          <Link to={`/case/${caseItem.id}`} key={caseItem.id}>
            <CaseCard
            id={caseItem.id}
            title={caseItem.title}
            description={caseItem.description}
            imageUrl={caseItem.imageUrl}
            difficulty={caseItem.difficulty}
            estimatedTime={caseItem.estimatedTime}
            content={caseItem.content}/>
          </Link>
        ))}
      </div>
      
      <section className="mt-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold text-brand-dark mb-4">Ações Rápidas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card do Formulário */}
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center justify-between shadow-sm">
            <div>
              <h3 className="font-bold text-foreground">Adicionar novo Case</h3>
            </div>
            
            {/* O BOTÃO COM O LINK EXTERNO */}
            <Link 
            to="/adicionar" 
            className="bg-brand-dark hover:bg-brand-primary text-white font-medium px-4 py-2 rounded-md transition-colors"
            >
              Adicionar case
            </Link>
          </div>

          {/* Você pode adicionar outros cards úteis aqui no futuro (ex: Suporte, Grupo do WhatsApp) */}
        </div>
      </section>
    </main>
  );
}