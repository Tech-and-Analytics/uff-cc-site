import { useState } from "react";
import type { Trilha } from "@/types/Trilhas"
import type { ItemTrilha } from "@/types/Trilhas";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { LISTA_DE_TRILHAS } from "./mockTrilhas";

interface TrilhaViewProps {
  trilha: Trilha;
  onVoltar: () => void;
}
//componente filho - exibe os dados de uma única trilha
export function TrilhaView({ trilha, onVoltar }: TrilhaViewProps) {
  
  const navigate = useNavigate();

  const [itens, setItens] = useState<ItemTrilha[]>(trilha.itens);
  
  const alternarConclusao = (idItem: string) => {
    setItens((itensAntigos) => {
      //ATUALIZACAO DO MOCK - fazer alteracoes quando tiver bd
      // Gera a nova lista de itens para a tela atual
      const novosItens = itensAntigos.map((item: ItemTrilha) => {
        if (item.id === idItem) {
          return { ...item, concluido: !item.concluido };
        }
        return item;
      });
      
      // Busca a trilha que estamos editando direto na "base de dados" em memória
      const trilhaNoBanco = LISTA_DE_TRILHAS.find((t) => t.id === trilha.id);
      
      if (trilhaNoBanco) {
        // Encontra o item específico e altera o valor de conclusão dele no banco
        const itemNoBanco = trilhaNoBanco.itens.find((i) => i.id === idItem);
        if (itemNoBanco) {
          itemNoBanco.concluido = !itemNoBanco.concluido;
        }

        // Recalcula o progresso e já salva na trilha raiz no banco
        const total = trilhaNoBanco.itens.length;
        const concluidos = trilhaNoBanco.itens.filter((i) => i.concluido).length;
        trilhaNoBanco.progressoAtual = total === 0 ? 0 : Math.round((concluidos / total) * 100);
      }
      // Retorna a lista atualizada para o React desenhar a tela
      return novosItens;
    });
  };
  
  // Função que roteia o usuário com base no tipo do item
  const handleAcessarConteudo = (item: ItemTrilha) => {
    if (item.tipo === "simulado") {
      // Se for simulado, manda para a rota de simulados com o ID
      navigate(`/simulado/${item.id}`);
    } else {
      // Se for texto ou vídeo, manda para a tela genérica de material
      navigate(`/material/${item.id}`);
    }
  }

  // Função auxiliar para retornar o ícone correto dependendo do tipo do conteúdo
  const renderizarIcone = (tipo: string) => {
    switch (tipo) {
      case "videoaula": return "▶️";
      case "material_texto": return "📄";
      case "simulado": return "📝";
      default: return "📚";
    }
  };

  const totalItens = itens.length;
  const itensConcluidos = itens.filter((item) => item.concluido).length;
  const progressoDinamico = totalItens === 0 ? 0 : Math.round((itensConcluidos / totalItens) * 100);

  return (
    <div className="flex flex-col gap-6 bg-background">
      <Button variant="ghost" onClick={onVoltar} className="w-fit text-sm text-neutral-medium hover:text-brand-dark px-0 mb-2">
        ← Voltar para Trilhas
      </Button>

      {/* banner de apresentacao da trilha */}
      <div className="rounded-2xl bg-brand-dark p-8 text-white flex justify-between items-center gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-wider text-brand-light block mb-2">
            {trilha.categoria}
          </span>
          <h2 className="text-3xl font-bold mb-3">{trilha.titulo}</h2>
          <p className="text-brand-light text-sm leading-relaxed mb-6">{trilha.descricao}</p>
          {/*Barra de progresso */}
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="font-semibold text-brand-light">Seu progresso atual</span>
              <span className="font-bold text-white">{progressoDinamico}%</span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-brand-vibrant h-full transition-all duration-500 ease-out" 
                style={{ width: `${progressoDinamico}%` }}
              />
            </div>
          </div>
        </div>
        {/* Bloco lateral com o grande número de porcentagem */}
        <div className="bg-white/10 p-6 rounded-xl text-center min-w-[140px] flex flex-col items-center justify-center">
          <span className="block text-4xl font-bold text-white mb-1">{progressoDinamico}%</span>
          <span className="text-xs text-brand-light uppercase font-semibold">Concluído</span>
        </div>
      </div>

      <div className="mt-4 border border-border rounded-2xl bg-card overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border bg-muted/30">
          <h3 className="text-lg font-bold text-brand-dark">Conteúdos da Trilha</h3>
        </div>

        <div className="flex flex-col">
          {/* 3. Agora iteramos sobre a variável de ESTADO (itens) e não mais sobre a prop fixa */}
          {itens.map((item: ItemTrilha, index ) => (
            <div key={item.id} className="flex items-center justify-between p-5 border-b border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                
                {/* 4. Transformamos o checkbox visual em um botão interativo */}
                <button 
                  onClick={() => alternarConclusao(item.id)}
                  className={`h-6 w-6 rounded-full flex items-center justify-center border transition-all cursor-pointer hover:ring-2 hover:ring-brand-light ${
                    item.concluido 
                      ? "bg-green-500 border-green-500 text-white" 
                      : "border-neutral-light bg-transparent"
                  }`}
                  aria-label={item.concluido ? "Desmarcar conteúdo" : "Marcar como concluído"}
                >
                  {item.concluido && <span className="text-xs">✓</span>}
                </button>
                
                <div>
                  <h4 className={`text-base font-semibold transition-all ${item.concluido ? "text-neutral-medium line-through" : "text-foreground"}`}>
                    {index + 1}. {item.titulo}
                  </h4>
                  <div className="flex gap-3 text-xs text-neutral-medium mt-1">
                    <span>{renderizarIcone(item.tipo)} {item.tipo.replace("_", " ")}</span>
                    <span>•</span>
                    <span>⏱️ {item.tempoEstimado}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => handleAcessarConteudo(item)}
                variant={item.concluido ? "outline" : "default"}
                className={`text-xs h-9 px-4 ${!item.concluido ? "bg-brand-primary hover:bg-brand-dark text-white" : "border-border"}`}
              >
                {item.concluido ? "Revisar" : "Acessar"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}