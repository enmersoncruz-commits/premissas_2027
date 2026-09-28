import React from 'react';
import { DIRETRIZ_TRANSVERSAL } from '../../data/strategicData';
import { Coins, CheckCircle, ShieldAlert } from 'lucide-react';

export const SlideTransversal: React.FC = () => {
  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-6 sm:p-10 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#B4B4B4]/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0032]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0032]">
              04. Diretriz Transversal
            </span>
          </div>
          <span className="text-xs font-semibold text-[#A3A3A3]">
            Dimensão Integradora Institucional
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight mb-2">
          {DIRETRIZ_TRANSVERSAL.titulo}
        </h2>
        <p className="text-sm sm:text-base text-[#323232]/80 leading-relaxed max-w-4xl">
          {DIRETRIZ_TRANSVERSAL.definicao}
        </p>
      </div>

      {/* 8 Connected Levers in a 4x2 grid */}
      <div className="my-auto py-2">
        <div className="flex items-center gap-2 mb-3">
          <Coins className="w-4 h-4 text-[#FF0032]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#323232]">
            As 8 Alavancas da Sustentabilidade Econômica na Gestão de Pessoas
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DIRETRIZ_TRANSVERSAL.elementosConectados.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40 hover:border-[#FF0032] transition-colors shadow-2xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-[#FF0032]">
                  Alavanca 0{idx + 1}
                </span>
                <CheckCircle className="w-3.5 h-3.5 text-[#323232]/40" />
              </div>
              <h4 className="text-xs font-bold text-[#323232] mb-1.5 leading-snug">
                {item.termo}
              </h4>
              <p className="text-[10px] font-medium text-[#A3A3A3] leading-tight">
                {item.indicadorRelacionado}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Governança Card */}
      <div className="p-4 bg-[#323232] text-white rounded-xl border border-black/10">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#FF0032] shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-bold text-white block mb-0.5 uppercase tracking-wide">
              Princípio de Arquitetura Institucional
            </span>
            <p className="text-[#B4B4B4]">
              {DIRETRIZ_TRANSVERSAL.principioGovernança} A dimensão econômica atua como resultado sinérgico entre eficiência operacional, bem-estar das equipes e excelência dos processos.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF0032]" />
          <span>Equilíbrio entre sustentabilidade financeira e sustentabilidade humana</span>
        </div>
        <span>Superintendência de Gestão de Pessoas | Santa Casa BH</span>
      </div>
    </div>
  );
};
