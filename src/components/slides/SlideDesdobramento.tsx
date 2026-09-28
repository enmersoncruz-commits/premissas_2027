import React from 'react';
import { PROXIMO_DESDOBRAMENTO, INSTITUTIONAL_INFO } from '../../data/strategicData';
import { GitFork, CheckCircle2, ChevronRight, Check } from 'lucide-react';

export const SlideDesdobramento: React.FC = () => {
  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-6 sm:p-10 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#B4B4B4]/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0032]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0032]">
              05. Governança & Roteiro
            </span>
          </div>
          <span className="text-xs font-semibold text-[#A3A3A3]">
            Desdobramento Tático 2027
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight mb-2">
          {PROXIMO_DESDOBRAMENTO.titulo}
        </h2>
        <p className="text-sm sm:text-base text-[#323232]/80 leading-relaxed max-w-4xl">
          {PROXIMO_DESDOBRAMENTO.texto}
        </p>
      </div>

      {/* 3 Step Roadmap */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROXIMO_DESDOBRAMENTO.etapas.map((etapa, idx) => (
            <div
              key={idx}
              className="relative p-5 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40 flex flex-col justify-between hover:border-[#FF0032] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-[#FF0032] font-mono">
                    {etapa.ordem}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] bg-white px-2 py-0.5 rounded border border-[#B4B4B4]/20">
                    Fase {idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#323232] mb-2 leading-snug">
                  {etapa.instancia}
                </h3>
                <p className="text-xs text-[#323232]/80 leading-relaxed">
                  {etapa.acao}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#B4B4B4]/20 flex items-center gap-1.5 text-[11px] text-[#A3A3A3]">
                {idx < 2 ? (
                  <span className="flex items-center gap-1 text-[#323232] font-medium">
                    Próxima etapa <ChevronRight className="w-3.5 h-3.5 text-[#FF0032]" />
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[#FF0032] font-semibold">
                    Ciclo 2027 Operacionalizado <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Sign-off Box */}
      <div className="p-5 bg-white rounded-xl border border-[#B4B4B4]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={INSTITUTIONAL_INFO.logoUrl}
            alt="Santa Casa BH"
            referrerPolicy="no-referrer"
            className="h-10 w-auto object-contain"
          />
          <div className="h-8 w-px bg-[#B4B4B4]/40 hidden sm:block" />
          <div>
            <p className="text-xs font-bold text-[#323232]">
              {PROXIMO_DESDOBRAMENTO.assinatura}
            </p>
            <p className="text-[11px] text-[#A3A3A3]">
              Proposta submetida para validação da alta liderança
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF0032] text-white text-xs font-semibold rounded-md">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Alinhado ao Ciclo 2027</span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <GitFork className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Desdobramento em OKRs, Projetos, Ações e Indicadores de Resultado</span>
        </div>
        <span>Santa Casa BH · 2026–2030</span>
      </div>
    </div>
  );
};
