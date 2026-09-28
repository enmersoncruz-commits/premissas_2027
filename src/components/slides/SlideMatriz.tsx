import React, { useState } from 'react';
import { INDICADORES_CONSOLIDADOS, Indicador } from '../../data/strategicData';
import { Table, Filter } from 'lucide-react';

interface SlideMatrizProps {
  onSelectIndicador?: (indicador: Indicador) => void;
}

export const SlideMatriz: React.FC<SlideMatrizProps> = ({ onSelectIndicador }) => {
  const [perspectivaFilter, setPerspectivaFilter] = useState<string>('Todas');

  const filtered = INDICADORES_CONSOLIDADOS.filter(ind => {
    if (perspectivaFilter === 'Todas') return true;
    return ind.perspectiva === perspectivaFilter;
  });

  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs overflow-hidden">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#B4B4B4]/30 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0032]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0032]">
              03. Matriz de Medição
            </span>
          </div>
          <span className="text-xs font-semibold text-[#A3A3A3]">
            24 Indicadores Preservados e Reorganizados
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#323232] tracking-tight">
              Matriz Consolidada de Indicadores 2027
            </h2>
            <p className="text-xs text-[#323232]/80">
              Distribuição por Perspectiva, Premissa Institucional e Prioridade da Gestão de Pessoas.
            </p>
          </div>

          {/* Perspective Filter Pills */}
          <div className="flex items-center gap-1 bg-[#F8F9FA] p-1 rounded-lg border border-[#B4B4B4]/40">
            <Filter className="w-3 h-3 text-[#A3A3A3] ml-1.5" />
            {['Todas', 'Aprendizado e Inovação', 'Processos Internos', 'Sustentabilidade'].map((p) => {
              const count = p === 'Todas' 
                ? INDICADORES_CONSOLIDADOS.length 
                : INDICADORES_CONSOLIDADOS.filter(i => i.perspectiva === p).length;
              return (
                <button
                  key={p}
                  onClick={() => setPerspectivaFilter(p)}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                    perspectivaFilter === p
                      ? 'bg-[#323232] text-white shadow-2xs'
                      : 'text-[#323232] hover:bg-zinc-200'
                  }`}
                >
                  {p === 'Todas' ? 'Todos' : p} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="my-auto py-1 max-h-[380px] overflow-y-auto border border-[#B4B4B4]/30 rounded-xl bg-white shadow-2xs">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="sticky top-0 bg-[#F8F9FA] border-b border-[#B4B4B4]/40 z-10">
            <tr>
              <th className="py-2.5 px-3 font-mono font-bold text-[#323232] w-12 text-center">#</th>
              <th className="py-2.5 px-3 font-bold text-[#323232]">Indicador</th>
              <th className="py-2.5 px-3 font-bold text-[#323232] w-48">Perspectiva</th>
              <th className="py-2.5 px-3 font-bold text-[#323232] w-28 text-center">Premissa 2027</th>
              <th className="py-2.5 px-3 font-bold text-[#323232] w-64">Prioridade GP 2027</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filtered.map((ind) => (
              <tr
                key={ind.id}
                onClick={() => onSelectIndicador && onSelectIndicador(ind)}
                className="hover:bg-[#FF0032]/5 transition-colors cursor-pointer group"
              >
                <td className="py-2 px-3 font-mono font-bold text-[#FF0032] text-center">
                  {ind.id}
                </td>
                <td className="py-2 px-3 font-bold text-[#323232] group-hover:text-[#FF0032] transition-colors">
                  {ind.nome}
                </td>
                <td className="py-2 px-3">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                    ind.perspectiva === 'Sustentabilidade'
                      ? 'bg-amber-100 text-amber-900'
                      : ind.perspectiva === 'Processos Internos'
                      ? 'bg-blue-100 text-blue-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}>
                    {ind.perspectiva}
                  </span>
                </td>
                <td className="py-2 px-3 text-center">
                  <span className="font-semibold text-xs text-[#323232] bg-zinc-100 px-2 py-0.5 rounded">
                    {ind.premissa2027}
                  </span>
                </td>
                <td className="py-2 px-3 text-xs text-[#323232]/80">
                  {ind.prioridadeGP2027}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Official Footnote from Source Document */}
      <div className="mt-3 p-2.5 bg-[#F8F9FA] rounded-lg border border-[#B4B4B4]/30 text-[11px] text-[#323232]/80 leading-relaxed">
        <strong>Nota oficial:</strong> Os indicadores foram preservados e reorganizados conforme os objetivos estratégicos 1.1 a 1.5 e suas respectivas premissas. P4 e P6 são contempladas no eixo 1.5 por meio de interface institucional, conforme o Planejamento Estratégico 2027.
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <Table className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Exibindo {filtered.length} de {INDICADORES_CONSOLIDADOS.length} indicadores</span>
        </div>
        <span>Superintendência de Gestão de Pessoas | Santa Casa BH</span>
      </div>
    </div>
  );
};
