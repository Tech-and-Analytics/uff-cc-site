import { CaseCard } from "../components/CaseCard";

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
        <CaseCard
          title="Expansão de Startup SaaS"
          description="Desenvolva uma estratégia de crescimento para uma startup de tecnologia em fase de escala."
          imageUrl="https://picsum.photos/600/400?1"
          difficulty="Intermediário"
          estimatedTime="45 min"
        />

        <CaseCard
          title="Transformação Digital"
          description="Ajude uma empresa tradicional a implementar soluções digitais e melhorar sua eficiência operacional."
          imageUrl="https://picsum.photos/600/400?2"
          difficulty="Avançado"
          estimatedTime="60 min"
        />

        <CaseCard
          title="Estratégia de Marketing"
          description="Estruture um plano de aquisição de clientes para uma empresa em crescimento."
          imageUrl="https://picsum.photos/600/400?3"
          difficulty="Iniciante"
          estimatedTime="30 min"
        />
      </div>
    </main>
  );
}