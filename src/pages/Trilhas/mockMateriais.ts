export const LISTA_DE_MATERIAIS = [
  {
    id: "item-1",
    titulo: "Frameworks de Resolução de Problemas",
    categoria: "GESTÃO E NEGÓCIOS",
    tipo: "videoaula", 
    videoUrl: "https://youtu.be/uF3VGAvakv4?si=Q7EoeuniLAWsilQJ",
    conteudoHTML: `
      <h2>Introdução a GMAT</h2>
      <p>GMAT é o principal exame padronizado utilizado por escolas de negócios e programas de MBA no mundo todo.</p>
      <br/>
    `,
    proximoItemId: "item-2"
  },
  {
    id: "item-2", 
    titulo: "Frameworks de Resolução de Problemas (Apostila)",
    categoria: "GESTÃO E NEGÓCIOS",
    tipo: "material_texto",
    videoUrl: null, 
    conteudoHTML: "<h2>Conteúdo indisponível</h2>",
    proximoItemId: "item-3"
  }
  // Para criar um 3º conteúdo, basta adicionar um novo bloco aqui!
];