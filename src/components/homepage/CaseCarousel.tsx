import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"; 

interface CardData {
  id: string | number;
  text: string;
  image: string;
}

interface SlideProps {
  slides: CardData[];
}

export function CaseCarousel({ slides }: SlideProps) {
  const [current, setCurrent] = useState(0);

  const cardWidth = 196; 
  const itemsPerView = 4; 
  const maxIndex = Math.max(0, slides.length - itemsPerView);

  let previousSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">

      {/* 1. Removido o overflow-hidden daqui para os botões poderem "vazar" para fora */}
      <div className="relative">
        
        {/* 2. Container com overflow-hidden APENAS para mascarar os cards que deslizam */}
        <div className="overflow-hidden px-2 py-4">
          <div
            className="flex gap-4 transition-transform ease-out duration-500"
            style={{
              transform: `translateX(-${current * cardWidth}px)`,
            }}
          >
            {slides.map((s) => {
              return (
                <div key={s.id} className="flex flex-col gap-3 shrink-0">
                  <img 
                    src={s.image} 
                    alt={s.text}
                    className="w-[180px] h-[180px] bg-brand-light object-cover rounded-xl shadow-sm"
                  />
                  <p className="text-brand-dark font-medium text-sm pl-1">
                    {s.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Container dos Botões */}
        <div className="absolute top-[100px] -translate-y-1/2 w-full flex justify-between items-center pointer-events-none z-10">
          
          {/* Botão Esquerda */}
          {/* Ajuste o -ml-* para definir o quanto ele sobrepõe a imagem */}
          <div className="pointer-events-auto -ml-7">
            {current > 0 && (
              <button 
                onClick={previousSlide}
                className="bg-brand-dark text-white p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-brand-dark transition-colors"
              >
                <BsChevronLeft strokeWidth={1} size={20} />
              </button>
            )}
          </div>

          {/* Botão Direita */}
          {/* Ajuste o -mr-* para definir o quanto ele sobrepõe a imagem */}
          <div className="pointer-events-auto -mr-7">
            {current < maxIndex && (
              <button 
                onClick={nextSlide}
                className="bg-brand-dark text-white p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-brand-dark transition-colors"
              >
                <BsChevronRight strokeWidth={1} size={20} />
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}