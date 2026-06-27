// Define a estrutura de uma alternativa individual de uma questão
export interface Alternativa {
  id: string;      // Ex: "A", "B", "C"
  texto: string;   // O texto descritivo da alternativa
}

// Define a estrutura completa de uma questão do simulado
export interface Questao {
  id: number;              // Número identificador da questão (Ex: 1, 2, 3...)
  enunciado: string;       // O texto ou problema da pergunta
  alternativas: Alternativa[]; // Lista com as opções de escolha
  respostaCorreta: string; // O ID da alternativa correta (Ex: "B")
  dica?: string;           // Dica opcional para ajudar o usuário [cite: 217]
}

// Define a estrutura principal do Simulado, mapeada com o banco de dados [cite: 343]
export interface Simulado {
  contentId: string;       // Identificador único no banco de dados [cite: 343]
  title: string;           // Título principal do simulado [cite: 343]
  category: string;        // Classificação temática (Ex: Raciocínio Lógico) [cite: 343]
  difficulty: "Fácil" | "Médio" | "Difícil"; // Níveis de dificuldade da plataforma [cite: 186, 343]
  estimatedTime: string;   // Tempo médio estimado de duração (Ex: "3 horas") [cite: 343]
  progressStatus: "Não iniciado" | "Em andamento" | "Concluído"; // Estado do usuário no teste [cite: 181, 343]
  questoes: Questao[];     // Matriz contendo todas as perguntas do simulado
}