import { ArrowRight, BookOpen, Briefcase, Users } from "lucide-react";

export function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
          <span className="mb-4 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium">
            UFF Consulting Club
          </span>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight">
            Desenvolva sua carreira em consultoria e
            estratégia.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-brand-light">
            Aprenda com conteúdos estruturados, estude cases reais e
            desenvolva habilidades que o mercado procura.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl bg-brand-vibrant px-6 py-3 font-semibold text-brand-dark transition hover:bg-brand-light">
              Começar agora
            </button>

            <button className="rounded-xl border border-brand-light px-6 py-3 font-semibold transition hover:bg-brand-primary">
              Conhecer mais
            </button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-foreground">
              O que é a UFF Consulting Club?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Uma plataforma voltada para o desenvolvimento de estudantes
              interessados em consultoria, negócios e resolução
              de problemas reais.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border p-8 shadow-sm">
              <Users className="mb-4 text-brand-primary" size={40} />

              <h3 className="mb-2 text-xl font-semibold">
                Comunidade
              </h3>

              <p className="text-muted-foreground">
                Conecte-se com estudantes e profissionais que compartilham
                dos mesmos objetivos.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-8 shadow-sm">
              <BookOpen className="mb-4 text-brand-primary" size={40} />

              <h3 className="mb-2 text-xl font-semibold">
                Conteúdo
              </h3>

              <p className="text-muted-foreground">
                Trilhas de aprendizado estruturadas para acelerar seu
                desenvolvimento.
              </p>
            </div>

            <div className="rounded-2xl border border-border p-8 shadow-sm">
              <Briefcase className="mb-4 text-brand-primary" size={40} />

              <h3 className="mb-2 text-xl font-semibold">
                Mercado
              </h3>

              <p className="text-muted-foreground">
                Prepare-se para processos seletivos e desafios reais de
                consultoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="border-y border-border bg-muted py-12">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Empresas Parceiras
            </h2>

            <p className="mt-2 text-muted-foreground">
              Organizações que apoiam o desenvolvimento dos nossos membros.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
            
            <img
              src="/partners/empresa1.svg"
              alt="Empresa1"
              className="mx-auto h-12 object-contain grayscale transition hover:grayscale-0"
            />

            <img
              src="/partners/Empresa2.svg"
              alt="Empresa2"
              className="mx-auto h-12 object-contain grayscale transition hover:grayscale-0"
            />

            <img
              src="/partners/Empresa3.svg"
              alt="Empresa3"
              className="mx-auto h-12 object-contain grayscale transition hover:grayscale-0"
            />

            <img
              src="/partners/Empresa4.svg"
              alt="Empresa4"
              className="mx-auto h-12 object-contain grayscale transition hover:grayscale-0"
            />

            <img
              src="/partners/Empresa5.svg"
              alt="Empresa5"
              className="mx-auto h-12 object-contain grayscale transition hover:grayscale-0"
            />

            <img
              src="/partners/Empresa6.svg"
              alt="Empresa6"
              className="mx-auto h-12 object-contain grayscale transition hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-brand-dark">500+</h3>
            <p className="mt-2 black font-bold">Estudantes impactados</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand-dark">50+</h3>
            <p className="mt-2 black font-bold">Cases desenvolvidos</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand-dark">20+</h3>
            <p className="mt-2 black font-bold">Parceiros</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-brand-dark">95%</h3>
            <p className="mt-2 black font-bold">Satisfação dos usuários</p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold">
                Cases em destaque
              </h2>

              <p className="mt-2 text-muted-foreground">
                Exemplos de desafios que ajudam a desenvolver pensamento estratégico.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 h-40 rounded-xl bg-brand-light" />

                <h3 className="mb-2 text-xl font-semibold">
                  Case {item}
                </h3>

                <p className="mb-4 text-muted-foreground">
                  Descrição resumida do case e seus objetivos.
                </p>

                <button className="flex items-center gap-2 font-medium text-brand-primary">
                  Ver detalhes
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Comece sua jornada hoje.
          </h2>

          <p className="mt-4 text-brand-light">
            Desenvolva competências que fazem diferença no mercado e
            construa seu diferencial profissional.
          </p>

          <button className="mt-8 rounded-xl bg-brand-vibrant px-8 py-4 font-semibold text-brand-dark transition hover:bg-brand-light">
            Criar conta
          </button>
        </div>
      </section>
    </main>
  );
}