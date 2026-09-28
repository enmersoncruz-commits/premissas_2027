import React, { useEffect } from 'react';
import { SlideCapa } from './slides/SlideCapa';
import { SlideContexto } from './slides/SlideContexto';
import { SlideArquitetura } from './slides/SlideArquitetura';
import { SlideEixo1 } from './slides/SlideEixo1';
import { SlideEixo2 } from './slides/SlideEixo2';
import { SlideEixo3 } from './slides/SlideEixo3';
import { SlideEixo4 } from './slides/SlideEixo4';
import { SlideEixo5 } from './slides/SlideEixo5';
import { SlideMatriz } from './slides/SlideMatriz';
import { SlideTransversal } from './slides/SlideTransversal';
import { SlideDesdobramento } from './slides/SlideDesdobramento';
import { SlideDrawer, SlideItem } from './SlideDrawer';
import { Indicador } from '../data/strategicData';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface SlideViewerProps {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  totalSlides: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  onSelectIndicador: (ind: Indicador) => void;
}

export const SLIDE_LIST: SlideItem[] = [
  { id: 1, title: 'Capa Institucional Executiva', category: 'Abertura' },
  { id: 2, title: '1. Direcionamento da Proposta', category: 'Contexto Estratégico' },
  { id: 3, title: 'Arquitetura & Conexões Institucionais', category: 'Visão Integrada' },
  { id: 4, title: 'Eixo 1.1 – Desenvolver pessoas e reter talentos', category: 'Aprendizado e Inovação' },
  { id: 5, title: 'Eixo 1.2 – Promover o bem-estar e segurança', category: 'Aprendizado e Inovação' },
  { id: 6, title: 'Eixo 1.3 – Consolidar a diversidade e inclusão', category: 'Aprendizado e Inovação' },
  { id: 7, title: 'Eixo 1.4 – Impulsionar a inovação e digital', category: 'Aprendizado e Inovação' },
  { id: 8, title: 'Eixo 1.5 – Aprimorar a integração assistencial', category: 'Aprendizado e Inovação' },
  { id: 9, title: '2. Matriz Consolidada dos 24 Indicadores', category: 'Medição & Metas' },
  { id: 10, title: '3. Diretriz Transversal – Sustentabilidade Econômica', category: 'Governança' },
  { id: 11, title: '4. Próximo Desdobramento & OKRs', category: 'Encerramento' },
];

export const SlideViewer: React.FC<SlideViewerProps> = ({
  currentSlide,
  setCurrentSlide,
  totalSlides,
  isDrawerOpen,
  setIsDrawerOpen,
  onSelectIndicador,
}) => {

  const handlePrev = () => {
    setCurrentSlide(curr => Math.max(curr - 1, 0));
  };

  const handleNext = () => {
    setCurrentSlide(curr => Math.min(curr + 1, totalSlides - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlide(curr => Math.min(curr + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide(curr => Math.max(curr - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, setCurrentSlide]);

  // Render current slide component
  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <SlideCapa onStartPresentation={() => setCurrentSlide(1)} />;
      case 1:
        return <SlideContexto />;
      case 2:
        return <SlideArquitetura />;
      case 3:
        return <SlideEixo1 />;
      case 4:
        return <SlideEixo2 />;
      case 5:
        return <SlideEixo3 />;
      case 6:
        return <SlideEixo4 />;
      case 7:
        return <SlideEixo5 />;
      case 8:
        return <SlideMatriz onSelectIndicador={onSelectIndicador} />;
      case 9:
        return <SlideTransversal />;
      case 10:
        return <SlideDesdobramento />;
      default:
        return <SlideCapa />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col items-center">
      
      {/* Slide Presentation Container with 16:9 proportional styling */}
      <div className="w-full relative">
        
        {/* Progress Bar Top */}
        <div className="w-full h-1 bg-[#B4B4B4]/20 rounded-full mb-3 overflow-hidden no-print">
          <div
            className="h-full bg-[#FF0032] transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Slide Frame */}
        <div className="w-full min-h-[620px] transition-all duration-200">
          {renderSlideContent(currentSlide)}
        </div>

        {/* Floating Lateral Nav Arrows for Desktop (Subtle & Executive) */}
        <div className="absolute inset-y-0 -left-4 sm:-left-5 flex items-center no-print pointer-events-none">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="pointer-events-auto p-2 rounded-full bg-white/90 hover:bg-white text-[#323232] hover:text-[#FF0032] border border-[#B4B4B4]/40 shadow-md transition-all disabled:opacity-0 disabled:pointer-events-none"
            title="Slide Anterior (←)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute inset-y-0 -right-4 sm:-right-5 flex items-center no-print pointer-events-none">
          <button
            onClick={handleNext}
            disabled={currentSlide === totalSlides - 1}
            className="pointer-events-auto p-2 rounded-full bg-white/90 hover:bg-white text-[#323232] hover:text-[#FF0032] border border-[#B4B4B4]/40 shadow-md transition-all disabled:opacity-0 disabled:pointer-events-none"
            title="Próximo Slide (→ ou Espaço)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Bar / Controller */}
      <div className="mt-4 flex items-center justify-between w-full max-w-2xl px-4 py-2 bg-white rounded-xl border border-[#B4B4B4]/40 shadow-xs no-print text-xs text-[#323232]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-1.5 font-bold hover:text-[#FF0032] transition-colors cursor-pointer"
          >
            <Menu className="w-4 h-4 text-[#FF0032]" />
            <span className="hidden sm:inline">Índice:</span>
            <span className="truncate max-w-[200px] text-[#323232]">
              {SLIDE_LIST[currentSlide]?.title}
            </span>
          </button>
        </div>

        {/* Slide Dots / Indicator */}
        <div className="flex items-center gap-1">
          {SLIDE_LIST.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === i
                  ? 'w-6 bg-[#FF0032]'
                  : 'w-2 bg-[#B4B4B4]/50 hover:bg-[#323232]'
              }`}
              title={`Ir para Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="font-mono text-xs font-semibold text-[#A3A3A3] tabular-nums">
          <span className="text-[#323232] font-bold">{currentSlide + 1}</span> / {totalSlides}
        </div>
      </div>

      {/* Slide Drawer Modal */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        slides={SLIDE_LIST}
        currentSlide={currentSlide}
        onSelectSlide={(idx) => setCurrentSlide(idx)}
      />

      {/* Hidden Print All Slides Section (Visible only when window.print() is called) */}
      <div className="hidden print:block w-full space-y-12">
        {SLIDE_LIST.map((_, idx) => (
          <div key={idx} className="print-page-break w-full min-h-[680px]">
            {renderSlideContent(idx)}
          </div>
        ))}
      </div>

    </div>
  );
};
