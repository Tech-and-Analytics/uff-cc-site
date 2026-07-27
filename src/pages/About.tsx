import { SEO } from "@/components/SEO"

export function About() {
  return (
      <main className="min-h-screen bg-background py-24">
        <SEO title="Sobre" description="Conheça o UFF Consulting Club e nosso propósito."/>
        
        <section className="mx-auto max-w-7xl px-6">
      
            <h1 className="text-4xl font-bold">Sobre Nós</h1>
            <div className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              <p>Somos uma organização estudantil formada no curso de Engenharia de Produção da 
                Universidade Federal Fluminense dedicada a preparar alunos para carreiras de sucesso 
                em consultoria. Oferecemos uma ampla gama de recursos e atividades, facilitamos 
                networking com profissionais do setor e ex-alunos, proporcionando oportunidades 
                valiosas para conexões e mentoria. Além disso, promovemos projetos práticos para 
                aplicação de conhecimentos, garantimos acesso a materiais de estudo e guias de 
                carreira, bem como palestras com líderes da indústria. 
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 ">
            <img 
              src="public\foto1.jpg" 
              alt="Membros do UFF Consulting Club em visita" 
              className="h-80 w-full rounded-2xl object-cover shadow-lg sm:mt-12"
            />            <img 
              src="public\foto2.jpg" 
              alt="Apresentação de resolução de cases" 
              className="h-80 w-full rounded-2xl object-cover shadow-lg sm:mt-12"
            />
          </div>
        </section>
      </main>
      
  )
}