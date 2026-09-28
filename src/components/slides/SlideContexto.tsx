import React from 'react';
import { PREMISSAS_INSTITUCIONAIS, DIRECIONAMENTO_PROPOSTA } from '../../data/strategicData';
import { Compass, CheckCircle2, AlertCircle } from 'lucide-react';

export const SlideContexto: React.FC = () => {
  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-6 sm:p-10 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#B4B4B4]/30 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0032]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0032]">
              01. Contexto & Fundamentação
            </span>
          </div>
          <span className="text-xs font-semibold text-[#A3A3A3]">
            Mapa Estratégico 2026–2030
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight mb-2">
          {DIRECIONAMENTO_PROPOSTA.titulo}
        </h2>
        <p className="text-sm sm:text-base text-[#323232]/80 leading-relaxed max-w-4xl">
          {DIRECIONAMENTO_PROPOSTA.resumo}
        </p>
      </div>

      {/* Grid of 5 Premissas de Interface */}
      <div className="my-auto py-4">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4 text-[#FF0032]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#323232]">
            As 5 Premissas Institucionais com Interface na Gestão de Pessoas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {PREMISSAS_INSTITUCIONAIS.map((prem) => (
            <div
              key={prem.codigo}
              className={`p-4 rounded-xl border transition-all ${
                prem.codigo === 'P7'
                  ? 'bg-[#FF0032]/5 border-[#FF0032] shadow-xs'
                  : 'bg-[#F8F9FA] border-[#B4B4B4]/40 hover:border-[#323232]/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-base font-black px-2 py-0.5 rounded ${
                  prem.codigo === 'P7' ? 'bg-[#FF0032] text-white' : 'bg-[#323232] text-white'
                }`}>
                  {prem.codigo}
                </span>
                <span className="text-[11px] text-[#A3A3A3] font-mono">
                  Eixo {prem.eixosConectados.join(', ')}
                </span>
              </div>
              <h4 className="text-xs font-bold text-[#323232] leading-snug mb-1">
                {prem.nome}
              </h4>
              <p className="text-[11px] text-[#323232]/70 leading-tight">
                {prem.codigo === 'P7' && 'Eixo central de RH presente nos eixos 1.1, 1.2, 1.3 e 1.4.'}
                {prem.codigo === 'P3' && 'Base tecnológica, automação, IA e processos no eixo 1.4.'}
                {prem.codigo === 'P5' && 'Segurança institucional e mitigação de riscos humanos no eixo 1.2.'}
                {prem.codigo === 'P4' && 'Interface institucional no objetivo 1.5 e assistência.'}
                {prem.codigo === 'P6' && 'Governança, planejamento e legado articulados no eixo 1.5.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Racional de Governança Callout */}
      <div className="p-4 bg-[#323232] text-white rounded-xl border border-black/10">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#FF0032] shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-bold text-white block mb-0.5 uppercase tracking-wide">
              Racional de Governança e Preservação de Medidas
            </span>
            <p className="text-[#B4B4B4]">
              {DIRECIONAMENTO_PROPOSTA.racionalPreservacao}
            </p>
          </div>
        </div>
      </div>

      {/* Footer slide note */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Alinhamento rigoroso com os 5 objetivos estratégicos de Aprendizado e Inovação</span>
        </div>
        <span>Superintendência de Gestão de Pessoas | Santa Casa BH</span>
      </div>
    </div>
  );
};
