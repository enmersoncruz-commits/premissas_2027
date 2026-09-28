import React from 'react';
import { EIXOS_ESTRATEGICOS, INDICADORES_CONSOLIDADOS } from '../../data/strategicData';
import { GraduationCap, Target, ShieldCheck, CheckCircle2, Info } from 'lucide-react';

export const SlideEixo5: React.FC = () => {
  const eixo = EIXOS_ESTRATEGICOS.find(e => e.id === '1.5')!;
  const indicador = INDICADORES_CONSOLIDADOS.find(ind => ind.id === 24)!;

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

          {/* Institutional note callout */}
          <div className="mt-5 p-3.5 bg-white rounded-lg border border-[#B4B4B4]/40">
            <div className="flex items-start gap-2 text-xs text-[#323232]">
              <Info className="w-4 h-4 text-[#FF0032] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Interface Institucional:</strong> A atuação de Gestão de Pessoas ocorre de modo compartilhado e articulador com as áreas responsáveis por assistência, ensino e pesquisa da Santa Casa BH.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Indicadores & Governança (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3">
          {/* Indicador Principal Card */}
          <div className="p-4 bg-white rounded-xl border-2 border-[#FF0032] shadow-xs">
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-xs font-mono font-bold text-[#FF0032] bg-[#FF0032]/10 px-2 py-0.5 rounded">
                Indicador Estruturante #{indicador.id}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-800">
                {indicador.perspectiva}
              </span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-[#323232] leading-snug mb-1.5">
              {indicador.nome}
            </h4>
            <div className="flex items-center justify-between text-[11px] text-[#A3A3A3] pt-1.5 border-t border-zinc-100">
              <span>Premissa: {indicador.premissa2027}</span>
              <span className="font-medium text-[#323232]">Prioridade: 1.5 – Integração, governança e conhecimento</span>
            </div>
          </div>

          {/* Indicadores Conectados no Documento para o Eixo 1.5 */}
          <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#323232] block mb-1.5">
              Indicadores Conectados no Eixo 1.5 (Conforme Documento Oficial):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[10px]">
              <div className="p-1.5 bg-white rounded border border-[#B4B4B4]/20 text-[#323232] font-medium leading-tight">
                • HORAS DE CAPACIDADE LIBERADAS POR AUTOMAÇÃO/IA
              </div>
              <div className="p-1.5 bg-white rounded border border-[#B4B4B4]/20 text-[#323232] font-medium leading-tight">
                • % DE REDUÇÃO DE RETRABALHO NOS PROCESSOS PRIORIZADOS
              </div>
              <div className="p-1.5 bg-white rounded border border-[#B4B4B4]/20 text-[#323232] font-medium leading-tight">
                • % DE DESEMPENHO ORÇAMENTÁRIO
              </div>
            </div>
          </div>

          {/* Racional de Preservação Exclusivo P4 + P6 */}
          <div className="p-3.5 bg-[#323232] text-white rounded-xl border border-black/10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF0032] block mb-1">
              Diretriz de Racionalidade de Medidas
            </span>
            <p className="text-[11px] text-[#B4B4B4] leading-relaxed">
              &quot;Para P4 e P6, cuja atuação da Gestão de Pessoas ocorre principalmente por interface institucional no objetivo 1.5, é mantido o indicador de integração já previsto no Planejamento Estratégico, sem criação desnecessária de novas medidas.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-[#B4B4B4]/20 flex items-center justify-between text-[11px] text-[#A3A3A3]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Premissas P4 (Excelência Assistencial) + P6 (Governança, Planejamento e Legado)</span>
        </div>
        <span>Superintendência de Gestão de Pessoas | Santa Casa BH</span>
      </div>
    </div>
  );
};
