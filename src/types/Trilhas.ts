// Define o tipo específico de cada item dentro de uma trilha
export type TipoConteudo = "material_texto" | "videoaula" | "simulado";

// Estrutura de um item individual dentro da trilha
export interface ItemTrilha {
  id: string;
  titulo: string;
  tipo: TipoConteudo;
  tempoEstimado: string;
  concluido: boolean; // Define se o usuário já finalizou este item específico
}

// Estrutura principal da Trilha de Aprendizagem
export interface Trilha {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  progressoAtual: number; // Porcentagem de 0 a 100
  totalModulos: number;
  itens: ItemTrilha[]; // Array contendo a lista de conteúdos e questões
}

//estrutura do material das trilhas
export interface MaterialDetalhado {
  id: string;
  titulo: string;
  categoria: string;
  tipo: "material_texto" | "videoaula";
  conteudoHTML: string;
  videoUrl?: string; 
  proximoItemId?: string;
}