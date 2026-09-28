import React from 'react';
import { INSTITUTIONAL_INFO } from '../../data/strategicData';
import { ArrowRight, Layers, ShieldCheck, Target, ChevronRight } from 'lucide-react';

interface SlideCapaProps {
  onStartPresentation?: () => void;
}

export const SlideCapa: React.FC<SlideCapaProps> = ({ onStartPresentation }) => {
  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-8 sm:p-12 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs overflow-hidden">
      {/* Decorative Red Accent Bars strictly adhering to #FF0032 and corporate lines */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#FF0032]" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#FF0032]/5 pointer-events-none" />
      <div className="absolute top-1/2 -right-8 w-40 h-40 rounded-full border border-[#B4B4B4]/30 pointer-events-none" />

      {/* Header zone with logo and status badge */}
      <div className="flex items-start justify-between gap-4 z-10">
        <div className="flex items-center gap-4">
          <img
            src={INSTITUTIONAL_INFO.logoUrl}
            alt="Santa Casa BH"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 w-auto object-contain"
          />
          <div className="h-10 w-px bg-[#B4B4B4]/40" />
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#A3A3A3]">
              Santa Casa BH
            </p>
            <p className="text-sm font-bold text-[#323232]">
              Superintendência de Gestão de Pessoas
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#323232] text-white text-xs font-semibold rounded-md tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#FF0032]" />
          <span>PROPOSTA PARA VALIDAÇÃO – 2027</span>
        </div>
      </div>

      {/* Central Content */}
      <div className="my-auto py-8 z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF0032] mb-3">
          <span>Planejamento Estratégico Institucional</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Ciclo 2026–2030</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#323232] leading-none mb-4">
          PREMISSAS <span className="text-[#FF0032]">2027</span>
        </h1>

        <p className="text-lg sm:text-xl font-medium text-[#323232]/90 max-w-3xl leading-relaxed mb-6">
          Proposta de desdobramento das Premissas Estratégicas 2027 para a 
          <strong className="text-[#323232] font-semibold"> Superintendência de Gestão de Pessoas</strong>, 
          alinhada ao <strong className="text-[#323232] font-semibold">Mapa Estratégico 2026-2030</strong> e às diretrizes institucionais.
        </p>

        {/* 3 Executive Pillars Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40">
            <div className="flex items-center gap-2 text-[#FF0032] mb-1 font-semibold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>5 Eixos Estratégicos</span>
            </div>
            <p className="text-xs text-[#323232] leading-snug">
              Desdobramento nos objetivos de Aprendizado e Inovação 1.1 a 1.5.
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40">
            <div className="flex items-center gap-2 text-[#FF0032] mb-1 font-semibold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>5 Premissas de Interface</span>
            </div>
            <p className="text-xs text-[#323232] leading-snug">
              Integração das premissas P3, P4, P5, P6 e P7 com foco em sustentabilidade humana.
            </p>
          </div>

          <div className="p-4 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40">
            <div className="flex items-center gap-2 text-[#FF0032] mb-1 font-semibold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>24 Indicadores Oficiais</span>
            </div>
            <p className="text-xs text-[#323232] leading-snug">
              Medidas preservadas e estruturadas em Aprendizado, Processos e Sustentabilidade.
            </p>
          </div>
        </div>
      </div>

      {/* Footer zone with actionable trigger */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#B4B4B4]/30 z-10">
        <div className="text-xs text-[#A3A3A3] flex items-center gap-2">
          <span>Santa Casa BH</span>
          <span>·</span>
          <span>Superintendência de Gestão de Pessoas</span>
          <span>·</span>
          <span className="text-[#323232] font-semibold">Ciclo 2027</span>
        </div>

        {onStartPresentation && (
          <button
            onClick={onStartPresentation}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#FF0032] hover:bg-[#D9002B] text-white font-semibold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <span>Iniciar Apresentação Executiva</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
