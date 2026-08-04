import { SEO } from "@/components/SEO"
import { CardProp } from "@/components/homepage/CardProp";
import { Carousel } from "@/components/homepage/Carousel"

import {  Pencil } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Users } from "lucide-react";
import { Share2 } from "lucide-react";

export function About() {
  let slides = [
     "/foto1.jpg",
     "/foto2.jpg"]
  
  return (
      <main className="min-h-screen bg-background py-12">
        <SEO title="Sobre" description="Conheça o UFF Consulting Club e nosso propósito."/>
        {/*cabecalho */}
        <section className="bg-white text-brand-dark">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-5 text-center">
            <h1 className="max-w-4xl text-5xl font-black">UFF Consulting Club</h1>
            <h2 className="max-w-4xl text-lg">Tranformando potencial acadêmico em trajetória profissional</h2>
          </div>
        </section>

        {/*carrossel */}
        <section className="bg-brand-dark text-white py-10 mt-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 px-10">
            
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">Sobre nós</h2>
              <h3 className="py-3 text-lg leading-relaxed text-white">Fundado em Abril de 2024, o UFF Consulting Club tem como objetivo reunir e capacitar alunos(as) da UFF interessados(as) em atuar na área de consultoria estratégica, a fim de garantir a eles preparação para as etapas dos processos seletivos e contato com o mercado</h3>
            </div>
            <div className="w-full lg:w-1/2 ">
              <Carousel slides={slides} />
            </div>
          </div>
        </section>

        {/*propositos */}
        <section className="bg-white text-brand-dark py-15">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
            <h1 className="max-w-4xl text-5xl font-black">Propósitos</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-8">
            <CardProp
              numero = "1"
              icone = {<Pencil size={80}/>}
              texto="Preparar membros para prestarem os processos seletivos das consultorias;"
            />
            <CardProp
              numero = "2"
              icone = {<BookOpen size={80}/>}
              texto="Promover conhecimento a respeito do mercado de consultoria;"
            />
            <CardProp
              numero = "3"
              icone = {<Users size={80}/>}
              texto="Capacitar membros par o mercado de trabalho no geral;"
            />
            <CardProp
              numero = "4"
              icone = {<Share2 size={80}/>}
              texto="Enriquecer a comunidade da UFF a partir do networking com empresas do setor de Consultoria Estratéca."
            />

          </div>
        </section>
      </main>
      
  );
}