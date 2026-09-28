import React from 'react';
import { Indicador, EIXOS_ESTRATEGICOS } from '../data/strategicData';
import { X, Target, Layers, Compass, CheckCircle2 } from 'lucide-react';

interface IndicatorDetailModalProps {
  indicador: Indicador | null;
  onClose: () => void;
}

export const IndicatorDetailModal: React.FC<IndicatorDetailModalProps> = ({
  indicador,
  onClose,
}) => {
  if (!indicador) return null;

  const eixo = EIXOS_ESTRATEGICOS.find(e => e.id === indicador.eixoId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-2xs no-print">
      <div className="bg-white rounded-2xl border border-[#B4B4B4]/40 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#323232] hover:bg-zinc-100 hover:text-[#FF0032] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono font-extrabold text-sm px-2.5 py-0.5 rounded bg-[#FF0032] text-white">
            Indicador #{indicador.id}
          </span>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
            indicador.perspectiva === 'Sustentabilidade'
              ? 'bg-amber-100 text-amber-900'
              : indicador.perspectiva === 'Processos Internos'
              ? 'bg-blue-100 text-blue-900'
              : 'bg-zinc-100 text-zinc-800'
          }`}>
            {indicador.perspectiva}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-[#323232] leading-snug mb-4">
          {indicador.nome}
        </h3>

        {/* Details Grid */}
        <div className="space-y-3 mb-6">
          <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40 flex items-start gap-3">
            <Target className="w-4 h-4 text-[#FF0032] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] block">
                Prioridade Gestão de Pessoas 2027
              </span>
              <span className="text-xs font-bold text-[#323232]">
                {indicador.prioridadeGP2027}
              </span>
            </div>
          </div>

          <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40 flex items-start gap-3">
            <Compass className="w-4 h-4 text-[#FF0032] shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] block">
                Premissa Institucional Vinculada
              </span>
              <span className="text-xs font-bold text-[#323232]">
                {indicador.premissa2027}
              </span>
            </div>
          </div>

          {eixo && (
            <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40 flex items-start gap-3">
              <Layers className="w-4 h-4 text-[#FF0032] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] block">
                  Eixo de Atuação da Gestão de Pessoas
                </span>
                <span className="text-xs font-bold text-[#323232]">
                  Eixo {eixo.codigo} – {eixo.titulo}
                </span>
                <p className="text-[11px] text-[#323232]/70 mt-1">
                  Premissa institucional: {eixo.premissaInstitucional}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#B4B4B4]/30 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3]">
            <CheckCircle2 className="w-4 h-4 text-[#FF0032]" />
            <span>Matriz Oficial de Indicadores Santa Casa BH</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#323232] hover:bg-black text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Fechar Detalhes
          </button>
        </div>
      </div>
    </div>
  );
};
