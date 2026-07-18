export interface Case {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    difficulty: "Iniciante" | "Intermediário" | "Avançado",
    estimatedTime: string,
    content: string
}