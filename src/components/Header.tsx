import React from 'react';
import { INSTITUTIONAL_INFO } from '../data/strategicData';
import { 
  Tv, 
  LayoutGrid, 
  Maximize2, 
  Minimize2, 
  Printer, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  Menu
} from 'lucide-react';

interface HeaderProps {
  currentMode: 'slides' | 'dashboard';
  setCurrentMode: (mode: 'slides' | 'dashboard') => void;
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onToggleDrawer: () => void;
  isDrawerOpen: boolean;
  elapsedTime: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  setCurrentMode,
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  isFullscreen,
  onToggleFullscreen,
  onToggleDrawer,
  isDrawerOpen,
  elapsedTime,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#B4B4B4]/40 shadow-xs select-none no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand & Institutional Identity */}
        <div className="flex items-center gap-3 min-w-0">
          <img 
            src={INSTITUTIONAL_INFO.logoUrl} 
            alt="Santa Casa BH" 
            referrerPolicy="no-referrer"
            className="h-9 w-auto object-contain shrink-0" 
            onError={(e) => {
              // Graceful fallback if image is unreachable
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.logo-fallback')) {
                const span = document.createElement('span');
                span.className = 'logo-fallback font-bold text-xs bg-[#FF0032] text-white px-2 py-1 rounded tracking-wider';
                span.innerText = 'SANTA CASA BH';
                parent.prepend(span);
              }
            }}
          />
          <div className="h-6 w-px bg-[#B4B4B4]/50 hidden sm:block shrink-0" />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-[#323232] truncate">
                PREMISSAS 2027
              </span>
              <span className="hidden md:inline text-xs text-[#A3A3A3]">/</span>
              <span className="hidden md:inline text-xs font-medium text-[#323232]/80 truncate">
                Superintendência de Gestão de Pessoas
              </span>
            </div>
          </div>
        </div>

        {/* Zone 2: Navigation & Mode Switcher */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-[#F8F9FA] p-1 rounded-lg border border-[#B4B4B4]/40">
            <button
              onClick={() => setCurrentMode('slides')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                currentMode === 'slides'
                  ? 'bg-white text-[#FF0032] shadow-xs border border-[#B4B4B4]/30'
                  : 'text-[#323232] hover:text-black'
              }`}
              title="Apresentação em slides executivos"
            >
              <Tv className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Apresentação</span>
            </button>
            <button
              onClick={() => setCurrentMode('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                currentMode === 'dashboard'
                  ? 'bg-white text-[#FF0032] shadow-xs border border-[#B4B4B4]/30'
                  : 'text-[#323232] hover:text-black'
              }`}
              title="Painel interativo e matriz de indicadores"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Painel de Conexões</span>
            </button>
          </div>

          {/* Slide Navigator Controls (When in slide mode) */}
          {currentMode === 'slides' && (
            <div className="flex items-center gap-1 bg-[#F8F9FA] px-2 py-1 rounded-lg border border-[#B4B4B4]/40">
              <button
                onClick={onPrevSlide}
                disabled={currentSlide === 0}
                className="p-1 text-[#323232] hover:text-[#FF0032] disabled:opacity-30 disabled:hover:text-[#323232] transition-colors"
                title="Slide Anterior (Seta Esquerda)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-medium text-[#323232] px-1 tabular-nums">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button
                onClick={onNextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="p-1 text-[#323232] hover:text-[#FF0032] disabled:opacity-30 disabled:hover:text-[#323232] transition-colors"
                title="Próximo Slide (Seta Direita / Espaço)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Zone 3: Executive Utilities & Actions */}
        <div className="flex items-center gap-2">
          {/* Presentation Timer */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#323232]/70 font-mono bg-[#F8F9FA] px-2.5 py-1.5 rounded border border-[#B4B4B4]/40 tabular-nums">
            <Clock className="w-3.5 h-3.5 text-[#FF0032]" />
            <span>{elapsedTime}</span>
          </div>

          {/* Drawer Button */}
          {currentMode === 'slides' && (
            <button
              onClick={onToggleDrawer}
              className={`p-2 rounded-lg border transition-colors ${
                isDrawerOpen 
                  ? 'bg-[#FF0032]/10 border-[#FF0032] text-[#FF0032]' 
                  : 'bg-white border-[#B4B4B4]/40 text-[#323232] hover:bg-[#F8F9FA]'
              }`}
              title="Índice de Slides"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg border border-[#B4B4B4]/40 bg-white text-[#323232] hover:bg-[#F8F9FA] hover:text-[#FF0032] transition-colors"
            title={isFullscreen ? 'Sair da Tela Cheia (Esc)' : 'Tela Cheia (F)'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Print/Export Button */}
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#323232] hover:bg-black rounded-lg transition-colors shadow-xs"
            title="Imprimir ou exportar apresentação executiva em PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Exportar PDF</span>
          </button>
        </div>

      </div>
    </header>
  );
};
