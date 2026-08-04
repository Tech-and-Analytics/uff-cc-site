import { SEO } from "@/components/SEO"

import { Mail } from "lucide-react"
import { Globe } from "lucide-react"

export function Contact() {
  return (
    <main className="min-h-screen bg-background py-12">
        <SEO title="Contato" description="Entre em contato conosco pelos seguintes canais."/>
        <section className="bg-white text-brand-dark">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-5 text-center">
            <h1 className="max-w-4xl text-5xl font-black">UFF Consulting Club</h1>
            <h2 className="max-w-4xl text-lg">Tranformando potencial acadêmico em trajetória profissional</h2>
          </div>
        </section>

        <section className="bg-brand-dark text-white py-10 mt-12 items-center flex-col text-center-mx-auto flex">
          <h1 className="text-3xl font-bold py-4">Contato</h1>
          <div className="flex flex-row gap-4 py-2">  
            <Mail size={30}/>
            <h2 className="text-xl leading-relaxed text-white">contato@uffconsultingclub.com</h2>
          </div>
          <div className="flex flex-row gap-4">  
            <Globe size={30}/>
            <h2 className="text-xl leading-relaxed text-white">uffconsultingclub.com.br</h2>
          </div>
          <h1 className="text-xl font-bold mt-10 mb-4">Acompanhe nossas redes sociais</h1>
          <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-2">
              <img src="public\instagramIcon.png" className="size-7"/>
              <a href="https://www.instagram.com/uffconsultingclub?igsh=MWhhZDVtbndhZ3dmcg==" className="text-xl leading-relaxed text-white transition-colors duration-200 hover:text-brand-vibrant">@uffconsultingclub</a>
            </div>
            <div className="flex flex-row gap-2">
              <img src="public\linkedinIcon.png" className="size-7"/>
              <a href="https://www.linkedin.com/company/uff-consulting-club/" className="text-xl leading-relaxed text-white transition-colors duration-200 hover:text-brand-vibrant">UFF Consulting Club</a>
            </div>
            </div>
        </section>
    </main>
  )
}