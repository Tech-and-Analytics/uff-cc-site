import { Checklist } from "../components/checklist/Checklist";

const onboardingTasks = [
  {
    id: 1,
    title: "Criar conta na plataforma",
    completed: true,
  },
  {
    id: 2,
    title: "Completar perfil",
    completed: false,
  },
  {
    id: 3,
    title: "Assistir aula introdutória",
    completed: false,
  },
  {
    id: 4,
    title: "Realizar primeiro case",
    completed: false,
  },
];

export function Biblioteca() {
  return (
    <main className="flex flex-1 flex-col p-10">
      <h1 className="text-[40px] font-bold text-brand-dark">
        Biblioteca
      </h1>

      <p className="mt-2 text-neutral-medium">
        Explore conteúdos e acompanhe seu progresso.
      </p>

      <div className="mt-10 max-w-3xl">
        <Checklist
          title="Primeiros Passos"
          items={onboardingTasks}
        />
      </div>
    </main>
  );
}