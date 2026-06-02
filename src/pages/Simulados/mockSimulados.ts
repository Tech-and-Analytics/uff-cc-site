import {type Simulado } from "@/types/Simulado";

// Array centralizado que armazena todos os simulados do sistema
export const LISTA_DE_SIMULADOS: Simulado[] = [
  {
    contentId: "sim-001",
    title: "Matemática Financeira Avançada",
    category: "RACIOCÍNIO LÓGICO", // Categoria em caixa alta conforme o padrão visual [cite: 129]
    difficulty: "Difícil",
    estimatedTime: "1h 20min",
    progressStatus: "Concluído",
    questoes: [
      {
        id: 1,
        enunciado: "Uma empresa de consultoria foi contratada para diagnosticar a queda de eficiência operacional de um cliente do setor varejista. Qual das seguintes ferramentas de análise seria MAIS adequada para identificar gargalos nos processos internos? [cite: 209, 210]",
        alternativas: [
          { id: "A", texto: "Análise SWOT (Forças, Fraquezas, Oportunidades, Ameaças)" },
          { id: "B", texto: "Diagrama de Ishikawa" },
          { id: "C", texto: "Análise de Gargalos por Fluxograma" },
          { id: "D", texto: "Matriz BCG" }
        ],
        respostaCorreta: "B",
        dica: "Considere as ferramentas focadas puramente no diagnóstico detalhado de processos causais e operacionais."
      }
      // Para adicionar mais questões a este simulado, basta clonar o bloco acima aqui dentro
    ]
  }
  /* FUTURA ADIÇÃO: Para colocar um terceiro simulado no sistema mais tarde,
    basta abrir uma vírgula aqui e colar um novo objeto seguindo o mesmo padrão!
  */
];