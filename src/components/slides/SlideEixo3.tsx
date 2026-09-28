import React from 'react';
import { EIXOS_ESTRATEGICOS, INDICADORES_CONSOLIDADOS } from '../../data/strategicData';
import { Users2, Target, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const SlideEixo3: React.FC = () => {
  const eixo = EIXOS_ESTRATEGICOS.find(e => e.id === '1.3')!;
  const indPcd = INDICADORES_CONSOLIDADOS.find(ind => ind.id === 19)!;

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
            Objetivo Estratégico:
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
        {/* Left Column: Prioridades 2027 (6 cols) */}
        <div className="lg:col-span-6 bg-[#F8F9FA] p-5 rounded-xl border border-[#B4B4B4]/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-[#FF0032]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#323232]">
                Prioridades 2027
              </h3>
            </div>
            <ul className="space-y-3.5">
              {eixo.prioridadesList.map((pri, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#323232] leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-[#FF0032] shrink-0 mt-0.5" />
                  <span>{pri}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-[#B4B4B4]/30 text-xs text-[#323232]/90 leading-relaxed italic">
            <strong>Foco da Superintendência:</strong> Ampliação e contratação de PcD institucional, acolhimento e valorização de grupos de afinidades, e liderança inclusiva integrada ao clima organizacional.
          </div>
        </div>

        {/* Right Column: Indicadores Vinculados (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users2 className="w-4 h-4 text-[#FF0032]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#323232]">
                  Indicadores Vinculados
                </h3>
              </div>
              <span className="text-[11px] text-[#A3A3A3]">
                Articulação Direta & Conexões
              </span>
            </div>

            <div className="space-y-3">
              {/* Core Indicador Eixo 1.3 */}
              <div className="p-4 bg-white rounded-xl border-2 border-[#FF0032] shadow-xs">
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-mono font-bold text-[#FF0032] bg-[#FF0032]/10 px-2 py-0.5 rounded">
                    Indicador #{indPcd.id}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-800">
                    {indPcd.perspectiva}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#323232] leading-tight mb-1">
                  {indPcd.nome}
                </h4>
                <p className="text-xs text-[#A3A3A3]">
                  Prioridade GP 2027: {indPcd.prioridadeGP2027}
                </p>
              </div>

              {/* Indicadores Conectados previstos no documento para o eixo 1.3 */}
              <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40">
                <div className="flex items-center gap-2 text-xs font-bold text-[#323232] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF0032]" />
                  <span>Indicadores Conectados no Documento</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-white rounded border border-[#B4B4B4]/20">
                    <span className="text-[10px] font-mono text-[#FF0032] block font-bold">#10</span>
                    <strong className="text-[11px] text-[#323232] block">INDICADORES DE DESENVOLVIMENTO DE LIDERANÇA</strong>
                    <span className="text-[10px] text-[#A3A3A3]">Conexão da DEI com lideranças inclusivas</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-[#B4B4B4]/20">
                    <span className="text-[10px] font-mono text-[#FF0032] block font-bold">#16</span>
                    <strong className="text-[11px] text-[#323232] block">CLIMA ORGANIZACIONAL</strong>
                    <span className="text-[10px] text-[#A3A3A3]">Percepção de equidade e ambiente acolhedor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Premissa P7 – Pessoas, produtividade e sustentabilidade humana</span>
        </div>
        <span>Superintendência de Gestão de Pessoas | Santa Casa BH</span>
      </div>
    </div>
  );
};
