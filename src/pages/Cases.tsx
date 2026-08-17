import { SEO } from "@/components/SEO"
import { CaseCarousel } from "@/components/homepage/CaseCarousel"

export function Cases() {
  const myCards = [
    { id: 1, text: "Case 1", image: "https://picsum.photos/600/400?2" }, 
    { id: 2, text: "Case 2", image: "https://picsum.photos/600/400?2"},
    { id: 3, text: "Case 3", image: "https://picsum.photos/600/400?2"},
    { id: 4, text: "Case 4", image: "https://picsum.photos/600/400?2"},
    { id: 5, text: "Case 5", image: "https://picsum.photos/600/400?2"},
    { id: 6, text: "Case 6", image: "https://picsum.photos/600/400?2"},
    { id: 7, text: "Case 7", image: "https://picsum.photos/600/400?2"},
    { id: 8, text: "Case 8", image: "https://picsum.photos/600/400?2"},
    { id: 9, text: "Case 9", image: "https://picsum.photos/600/400?2"},
  ];

  return (
    <main className="p-6">
      <SEO title="Cases" description="Teste seu conhecimento com nossos Cases."/>

      <section className="py-20">
        <h1 className="max-w-4xl px-20 max-w-4xl text-5xl font-black font-black text-brand-dark">Cases</h1>
        <CaseCarousel slides={myCards}/>
      </section>

    </main>
  )
}