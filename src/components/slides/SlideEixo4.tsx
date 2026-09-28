import React from 'react';
import { EIXOS_ESTRATEGICOS, INDICADORES_CONSOLIDADOS } from '../../data/strategicData';
import { Cpu, Target, CpuIcon, CheckCircle2 } from 'lucide-react';

export const SlideEixo4: React.FC = () => {
  const eixo = EIXOS_ESTRATEGICOS.find(e => e.id === '1.4')!;
  const indicadores = INDICADORES_CONSOLIDADOS.filter(ind => ind.eixoId === '1.4');

  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-6 sm:p-10 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#B4B4B4]/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black px-2 py-0.5 rounded bg-[#FF0032] text-white">
              EIXO {eixo.codigo}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#323232]">
              Aprendizado e Inovação
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FF0032] bg-[#FF0032]/10 px-2 py-0.5 rounded">
              {eixo.premissaInstitucional}
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight mb-2">
          {eixo.titulo}
        </h2>

        {/* Strategic Objectives Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3A3A3] shrink-0">
            Objetivos Estratégicos:
          </span>
          {eixo.objetivosEstrategicos.map((obj, i) => (
            <span
              key={i}
              className="text-xs font-medium text-[#323232] bg-[#F8F9FA] px-2.5 py-1 rounded-md border border-[#B4B4B4]/30"
            >
              {obj}
            </span>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="my-auto py-2 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Prioridades 2027 (5 cols) */}
        <div className="lg:col-span-5 bg-[#F8F9FA] p-5 rounded-xl border border-[#B4B4B4]/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-[#FF0032]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#323232]">
                Prioridades 2027
              </h3>
            </div>
            <ul className="space-y-2.5">
              {eixo.prioridadesList.map((pri, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#323232] leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#FF0032] shrink-0 mt-0.5" />
                  <span>{pri}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-[#B4B4B4]/30 text-[11px] text-[#323232]/80 italic">
            Foco na mensuração dos ganhos gerados pela transformação, liberação efetiva de capacidade e disciplina orçamentária.
          </div>
        </div>

        {/* Right Column: 4 Indicadores (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF0032]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#323232]">
                  Indicadores Vinculados (4)
                </h3>
              </div>
              <span className="text-[11px] text-[#A3A3A3]">
                Matriz Consolidada #20 a #23
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {indicadores.map((ind) => (
                <div
                  key={ind.id}
                  className="p-3 bg-white rounded-lg border border-[#B4B4B4]/30 hover:border-[#FF0032] transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#FF0032]">
                      #{ind.id}
                    </span>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.2 rounded ${
                      ind.perspectiva === 'Sustentabilidade'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-blue-100 text-blue-900'
                    }`}>
                      {ind.perspectiva}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#323232] leading-tight">
                    {ind.nome}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-zinc-100 text-[10px] text-[#A3A3A3]">
                    <span>Premissa: {ind.premissa2027}</span>
                    <span className="truncate max-w-[120px]">{ind.prioridadeGP2027}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <CpuIcon className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Premissas P3 (Automação, IA e Dados) + P7 (Sustentabilidade Humana)</span>
        </div>
        <span>Superintendência de Gestão de Pessoas | Santa Casa BH</span>
      </div>
    </div>
  );
};
