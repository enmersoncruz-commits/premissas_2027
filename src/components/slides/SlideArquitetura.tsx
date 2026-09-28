import React from 'react';
import { EIXOS_ESTRATEGICOS } from '../../data/strategicData';
import { Network, ArrowRight } from 'lucide-react';

export const SlideArquitetura: React.FC = () => {
  return (
    <div className="relative min-h-[580px] h-full flex flex-col justify-between p-6 sm:p-10 bg-white rounded-2xl border border-[#B4B4B4]/40 shadow-xs overflow-hidden">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#B4B4B4]/30 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0032]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF0032]">
              02. Arquitetura Estratégica
            </span>
          </div>
          <span className="text-xs font-semibold text-[#A3A3A3]">
            Visão Integrada de Desdobramento
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
              Conexões: Premissas ➔ Eixos ➔ Objetivos ➔ Indicadores
            </h2>
            <p className="text-xs sm:text-sm text-[#323232]/80">
              Mapeamento de causa-efeito e governança entre as premissas institucionais e a entrega de Gestão de Pessoas.
            </p>
          </div>
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="my-auto py-2">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {EIXOS_ESTRATEGICOS.map((eixo) => (
            <div
              key={eixo.id}
              className="flex flex-col justify-between p-3.5 rounded-xl border border-[#B4B4B4]/40 bg-[#F8F9FA] hover:border-[#FF0032] hover:bg-white transition-all shadow-xs group"
            >
              {/* Eixo badge & Premissa link */}
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-[#323232] text-white">
                    Eixo {eixo.codigo}
                  </span>
                  <span className="text-[10px] font-bold text-[#FF0032] bg-[#FF0032]/10 px-1.5 py-0.5 rounded">
                    {eixo.premissasRelacionadas.join(' + ')}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-[#323232] leading-snug mb-2 group-hover:text-[#FF0032] transition-colors">
                  {eixo.titulo}
                </h3>

                {/* Objetivos Estratégicos Vinculados */}
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold text-[#A3A3A3] block mb-1">
                    Objs. Vinculados
                  </span>
                  <div className="space-y-1">
                    {eixo.objetivosEstrategicos.map((obj, i) => (
                      <div key={i} className="text-[10px] text-[#323232] bg-white p-1 rounded border border-[#B4B4B4]/20 leading-tight">
                        {obj}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Indicadores summary count */}
              <div className="pt-2 border-t border-[#B4B4B4]/30 mt-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#323232]">
                    {eixo.indicadoresNomes.length} {eixo.indicadoresNomes.length === 1 ? 'Indicador' : 'Indicadores'}
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FF0032] opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="mt-1 h-1 w-full bg-[#B4B4B4]/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FF0032]"
                    style={{ width: `${(eixo.indicadoresNomes.length / 12) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transversal Guideline Ribbon Banner */}
        <div className="mt-4 p-3 bg-gradient-to-r from-[#323232] via-[#2A2A2A] to-[#323232] text-white rounded-xl flex items-center justify-between gap-4 border border-black/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-[#FF0032] text-white px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
              Eixo Transversal
            </span>
            <span className="text-xs font-medium text-white/90">
              <strong>Sustentabilidade Econômica:</strong> Conecta produtividade, absenteísmo, retenção, automação, horas liberadas, relação folha/receita, folha/despesas e orçamento.
            </span>
          </div>
          <div className="text-[11px] text-[#B4B4B4] whitespace-nowrap hidden lg:block">
            Sem criar 5ª premissa de RH
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Matriz de alinhamento 100% aderente ao Planejamento Estratégico Santa Casa BH</span>
        </div>
        <span>5 Eixos · 5 Premissas · 24 Indicadores Oficiais</span>
      </div>
    </div>
  );
};
