import React from 'react';
import { X, Check } from 'lucide-react';

export interface SlideItem {
  id: number;
  title: string;
  category: string;
}

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideItem[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-2xs transition-opacity no-print">
      <div 
        className="w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#B4B4B4]/40"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#B4B4B4]/40 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-extrabold text-[#323232] tracking-tight">
              Índice da Apresentação
            </h3>
            <p className="text-xs text-[#A3A3A3]">
              11 slides executivos estruturados
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#323232] hover:bg-zinc-100 hover:text-[#FF0032] transition-colors cursor-pointer"
            title="Fechar índice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slides List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2">
          {slides.map((s, idx) => {
            const isSelected = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF0032]/5 border-[#FF0032] text-[#323232] shadow-2xs'
                    : 'bg-white border-[#B4B4B4]/30 hover:border-[#323232]/30 text-[#323232]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                    isSelected ? 'bg-[#FF0032] text-white' : 'bg-[#F8F9FA] text-[#323232] border border-[#B4B4B4]/30'
                  }`}>
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] block truncate">
                      {s.category}
                    </span>
                    <span className={`text-xs font-bold block truncate ${
                      isSelected ? 'text-[#FF0032]' : 'text-[#323232]'
                    }`}>
                      {s.title}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-[#FF0032] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#B4B4B4]/30 bg-[#F8F9FA] text-[11px] text-[#A3A3A3] flex items-center justify-between">
          <span>Navegue com setas ← → ou Espaço</span>
          <span className="font-semibold text-[#323232]">Santa Casa BH</span>
        </div>
      </div>
    </div>
  );
};
