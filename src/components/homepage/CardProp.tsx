import type { ReactNode } from "react"

interface Card{
    numero: string
    icone: ReactNode
    texto: string
}

export function CardProp({ numero, icone, texto }: Card) {
    return (
        <div className="bg-secondary rounded-xl p-8 flex flex-col items-center gap-4">
            <span className="text-4xl font-bold text-brand-dark">
                {numero}
            </span>
            {icone } 
            <p className="text-sm text-center text-brand-dark">
                {texto}
            </p>
        </div>
    )
}