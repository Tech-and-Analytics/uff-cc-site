import type { Trilha } from "@/types/Trilhas"

export const LISTA_DE_TRILHAS: Trilha[] = [
  {
    id: "trilha-001",
    titulo: "Graduate Management Admission Test - GMAT",
    categoria: "GESTÃO E NEGÓCIOS",
    descricao: "Domine as principais ferramentas de diagnóstico empresarial e resolução de cases.",
    progressoAtual: 0,
    totalModulos: 4,
    itens: [
      {
        id: "item-1",
        titulo: "Introdução à Análise de Dados no Varejo",
        tipo: "videoaula",
        tempoEstimado: "15 min",
        concluido: false,
      },
      {
        id: "item-2",
        titulo: "Frameworks de Resolução de Problemas (Apostila)",
        tipo: "material_texto",
        tempoEstimado: "45 min",
        concluido: false,
      },
      {
        id: "item-3",
        titulo: "Quiz Prático: Diagrama de Ishikawa",
        tipo: "simulado",
        tempoEstimado: "20 min",
        concluido: false,
      }
    ]
  },
  {
    id: "trilha-002",
    titulo: "Nivelamento em Finanças Corporativas",
    categoria: "FINANÇAS",
    descricao: "Aprenda a analisar DREs, Balanços Patrimoniais e calcular o Valuation de empresas.",
    progressoAtual: 0,
    totalModulos: 5,
    itens: [
      {
        id: "item-4",
        titulo: "Balanço Patrimonial Descomplicado",
        tipo: "material_texto",
        tempoEstimado: "30 min",
        concluido: false,
      }
    ]
  }
];