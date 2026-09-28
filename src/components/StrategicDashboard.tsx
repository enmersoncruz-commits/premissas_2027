import React, { useState, useMemo } from 'react';
import { 
  INDICADORES_CONSOLIDADOS, 
  EIXOS_ESTRATEGICOS, 
  PREMISSAS_INSTITUCIONAIS, 
  DIRETRIZ_TRANSVERSAL, 
  PROXIMO_DESDOBRAMENTO, 
  Indicador 
} from '../data/strategicData';
import { 
  Search, 
  Layers, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Table,
  Sparkles,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface StrategicDashboardProps {
  onSelectIndicador: (ind: Indicador) => void;
  onGoToSlide: (slideIndex: number) => void;
}

export const StrategicDashboard: React.FC<StrategicDashboardProps> = ({
  onSelectIndicador,
  onGoToSlide,
}) => {
  const [activeTab, setActiveTab] = useState<'conexoes' | 'matriz' | 'eixos' | 'transversal'>('conexoes');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPerspectiva, setSelectedPerspectiva] = useState<string>('Todas');
  const [selectedPremissa, setSelectedPremissa] = useState<string>('Todas');
  const [selectedEixo, setSelectedEixo] = useState<string>('Todos');

  // Filtered indicators
  const filteredIndicadores = useMemo(() => {
    return INDICADORES_CONSOLIDADOS.filter(ind => {
      const matchesSearch = ind.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            ind.prioridadeGP2027.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPersp = selectedPerspectiva === 'Todas' || ind.perspectiva === selectedPerspectiva;
      const matchesPremissa = selectedPremissa === 'Todas' || ind.premissa2027.includes(selectedPremissa);
      const matchesEixo = selectedEixo === 'Todos' || ind.eixoId === selectedEixo;

      return matchesSearch && matchesPersp && matchesPremissa && matchesEixo;
    });
  }, [searchQuery, selectedPerspectiva, selectedPremissa, selectedEixo]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedPerspectiva('Todas');
    setSelectedPremissa('Todas');
    setSelectedEixo('Todos');
  };

  const hasActiveFilters = searchQuery !== '' || selectedPerspectiva !== 'Todas' || selectedPremissa !== 'Todas' || selectedEixo !== 'Todos';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Executive Intro Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B4B4B4]/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF0032] uppercase tracking-wider mb-2">
            <span>Santa Casa BH</span>
            <span>·</span>
            <span>Superintendência de Gestão de Pessoas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#323232] tracking-tight">
            Painel Executivo de Conexões Estratégicas 2027
          </h1>
          <p className="text-xs sm:text-sm text-[#323232]/80 mt-1 max-w-3xl leading-relaxed">
            Navegue pela matriz consolidada, premissas institucionais (P3, P4, P5, P6, P7), 5 eixos de atuação e os 24 indicadores oficiais com rigor metodológico.
          </p>
        </div>

        {/* Quick Stats Pill Island replacement: Clean Unboxed Figures */}
        <div className="flex items-center gap-6 divide-x divide-[#B4B4B4]/40 shrink-0">
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#FF0032] font-mono block">
              5
            </span>
            <span className="text-[11px] font-semibold text-[#A3A3A3] uppercase tracking-wider">
              Eixos GP
            </span>
          </div>
          <div className="text-center pl-6">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#323232] font-mono block">
              5
            </span>
            <span className="text-[11px] font-semibold text-[#A3A3A3] uppercase tracking-wider">
              Premissas
            </span>
          </div>
          <div className="text-center pl-6">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#323232] font-mono block">
              24
            </span>
            <span className="text-[11px] font-semibold text-[#A3A3A3] uppercase tracking-wider">
              Indicadores
            </span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-[#B4B4B4]/40 pb-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('conexoes')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'conexoes'
              ? 'bg-[#323232] text-white shadow-xs'
              : 'text-[#323232] hover:bg-zinc-100'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Mapa de Conexões (Eixos & Premissas)</span>
        </button>

        <button
          onClick={() => setActiveTab('matriz')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'matriz'
              ? 'bg-[#323232] text-white shadow-xs'
              : 'text-[#323232] hover:bg-zinc-100'
          }`}
        >
          <Table className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Matriz Consolidada dos 24 Indicadores</span>
        </button>

        <button
          onClick={() => setActiveTab('eixos')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'eixos'
              ? 'bg-[#323232] text-white shadow-xs'
              : 'text-[#323232] hover:bg-zinc-100'
          }`}
        >
          <Compass className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Detalhamento dos 5 Eixos</span>
        </button>

        <button
          onClick={() => setActiveTab('transversal')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'transversal'
              ? 'bg-[#323232] text-white shadow-xs'
              : 'text-[#323232] hover:bg-zinc-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF0032]" />
          <span>Sustentabilidade Econômica & Governança</span>
        </button>
      </div>

      {/* Tab 1: Mapa de Conexões */}
      {activeTab === 'conexoes' && (
        <div className="space-y-6">
          {/* Premissas Row */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#323232] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FF0032]" />
                <span>Premissas Institucionais do Planejamento 2027</span>
              </h2>
              <span className="text-[11px] text-[#A3A3A3]">
                Clique para filtrar os eixos relacionados
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {PREMISSAS_INSTITUCIONAIS.map((p) => {
                const isSelected = selectedPremissa === p.codigo;
                return (
                  <button
                    key={p.codigo}
                    onClick={() => setSelectedPremissa(isSelected ? 'Todas' : p.codigo)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#323232] text-white border-black shadow-md'
                        : 'bg-white border-[#B4B4B4]/40 hover:border-[#FF0032]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-black px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#FF0032] text-white' : 'bg-zinc-100 text-[#323232]'
                      }`}>
                        {p.codigo}
                      </span>
                      <span className={`text-[10px] ${isSelected ? 'text-zinc-400' : 'text-[#A3A3A3]'}`}>
                        Eixo {p.eixosConectados.join(', ')}
                      </span>
                    </div>
                    <h3 className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#323232]'}`}>
                      {p.nome}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5 Eixos Cards */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#323232] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FF0032]" />
                <span>Os 5 Eixos de Atuação da Gestão de Pessoas</span>
              </h2>
              {selectedPremissa !== 'Todas' && (
                <button
                  onClick={() => setSelectedPremissa('Todas')}
                  className="text-xs text-[#FF0032] font-semibold hover:underline cursor-pointer"
                >
                  Limpar filtro de premissa
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {EIXOS_ESTRATEGICOS.map((eixo) => {
                const isMatchingPremissa = selectedPremissa === 'Todas' || eixo.premissasRelacionadas.includes(selectedPremissa);
                const slideNum = eixo.codigo === '1.1' ? 3 : eixo.codigo === '1.2' ? 4 : eixo.codigo === '1.3' ? 5 : eixo.codigo === '1.4' ? 6 : 7;

                return (
                  <div
                    key={eixo.id}
                    className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                      isMatchingPremissa
                        ? 'bg-white border-[#B4B4B4]/40 shadow-xs'
                        : 'bg-zinc-50 border-zinc-200 opacity-40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-black px-2 py-0.5 rounded bg-[#323232] text-white">
                          Eixo {eixo.codigo}
                        </span>
                        <span className="text-[10px] font-bold text-[#FF0032] bg-[#FF0032]/10 px-1.5 py-0.5 rounded">
                          {eixo.premissasRelacionadas.join(' + ')}
                        </span>
                      </div>

                      <h3 className="text-xs font-bold text-[#323232] leading-snug mb-2">
                        {eixo.titulo}
                      </h3>

                      <div className="space-y-1.5 mb-3">
                        <span className="text-[10px] uppercase font-bold text-[#A3A3A3] block">
                          Objetivos Vinculados:
                        </span>
                        {eixo.objetivosEstrategicos.map((obj, i) => (
                          <div key={i} className="text-[10px] text-[#323232] bg-[#F8F9FA] p-1.5 rounded border border-[#B4B4B4]/20 leading-tight">
                            {obj}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#B4B4B4]/30 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#323232]">
                          {eixo.indicadoresNomes.length} {eixo.indicadoresNomes.length === 1 ? 'indicador' : 'indicadores'}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedEixo(eixo.codigo);
                            setActiveTab('matriz');
                          }}
                          className="text-[11px] text-[#FF0032] font-bold hover:underline cursor-pointer"
                        >
                          Ver na matriz
                        </button>
                      </div>

                      <button
                        onClick={() => onGoToSlide(slideNum)}
                        className="w-full py-1.5 bg-[#F8F9FA] hover:bg-[#323232] hover:text-white text-[#323232] text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer border border-[#B4B4B4]/30"
                      >
                        <span>Abrir Slide {eixo.codigo}</span>
                        <ArrowRight className="w-3 h-3 text-[#FF0032]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Racional de Governança Institucional Card */}
          <div className="p-5 bg-[#323232] text-white rounded-2xl border border-black/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF0032] block">
                Racional de Governança e Interface Institucional (P4 e P6)
              </span>
              <p className="text-xs text-[#B4B4B4] max-w-4xl leading-relaxed">
                Para P4 (Excelência assistencial) e P6 (Governança, planejamento e legado), cuja atuação da Gestão de Pessoas ocorre principalmente por interface institucional no objetivo 1.5, é mantido o indicador de integração já previsto no Planejamento Estratégico, sem criação desnecessária de novas medidas.
              </p>
            </div>
            <button
              onClick={() => onGoToSlide(7)}
              className="px-4 py-2 bg-[#FF0032] hover:bg-[#D9002B] text-white text-xs font-bold rounded-lg transition-colors shrink-0 cursor-pointer"
            >
              Ver Eixo 1.5 no Slide
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Matriz Consolidada dos 24 Indicadores */}
      {activeTab === 'matriz' && (
        <div className="bg-white p-6 rounded-2xl border border-[#B4B4B4]/40 shadow-xs space-y-4">
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filtrar por nome do indicador ou prioridade..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#B4B4B4]/40 bg-[#F8F9FA] focus:outline-none focus:border-[#FF0032] transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Perspectiva Selector */}
              <select
                value={selectedPerspectiva}
                onChange={(e) => setSelectedPerspectiva(e.target.value)}
                className="text-xs font-medium text-[#323232] bg-[#F8F9FA] px-2.5 py-1.5 rounded-lg border border-[#B4B4B4]/40 focus:outline-none focus:border-[#FF0032]"
              >
                <option value="Todas">Todas as Perspectivas</option>
                <option value="Aprendizado e Inovação">Aprendizado e Inovação (17)</option>
                <option value="Processos Internos">Processos Internos (4)</option>
                <option value="Sustentabilidade">Sustentabilidade (3)</option>
              </select>

              {/* Premissa Selector */}
              <select
                value={selectedPremissa}
                onChange={(e) => setSelectedPremissa(e.target.value)}
                className="text-xs font-medium text-[#323232] bg-[#F8F9FA] px-2.5 py-1.5 rounded-lg border border-[#B4B4B4]/40 focus:outline-none focus:border-[#FF0032]"
              >
                <option value="Todas">Todas as Premissas</option>
                <option value="P7">Premissa P7</option>
                <option value="P5">Premissa P5</option>
                <option value="P3">Premissa P3</option>
                <option value="P4">Premissa P4</option>
                <option value="P6">Premissa P6</option>
              </select>

              {/* Eixo Selector */}
              <select
                value={selectedEixo}
                onChange={(e) => setSelectedEixo(e.target.value)}
                className="text-xs font-medium text-[#323232] bg-[#F8F9FA] px-2.5 py-1.5 rounded-lg border border-[#B4B4B4]/40 focus:outline-none focus:border-[#FF0032]"
              >
                <option value="Todos">Todos os Eixos</option>
                <option value="1.1">Eixo 1.1</option>
                <option value="1.2">Eixo 1.2</option>
                <option value="1.3">Eixo 1.3</option>
                <option value="1.4">Eixo 1.4</option>
                <option value="1.5">Eixo 1.5</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 text-xs text-[#FF0032] font-semibold hover:underline cursor-pointer px-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Redefinir</span>
                </button>
              )}
            </div>
          </div>

          {/* Indicators Table */}
          <div className="overflow-x-auto border border-[#B4B4B4]/30 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#F8F9FA] border-b border-[#B4B4B4]/40">
                <tr>
                  <th className="py-2.5 px-3 font-mono font-bold text-[#323232] w-12 text-center">#</th>
                  <th className="py-2.5 px-3 font-bold text-[#323232]">Indicador</th>
                  <th className="py-2.5 px-3 font-bold text-[#323232] w-44">Perspectiva</th>
                  <th className="py-2.5 px-3 font-bold text-[#323232] w-24 text-center">Premissa 2027</th>
                  <th className="py-2.5 px-3 font-bold text-[#323232] w-64">Prioridade GP 2027</th>
                  <th className="py-2.5 px-3 font-bold text-[#323232] w-20 text-center">Detalhes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filteredIndicadores.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-xs text-[#A3A3A3]">
                      Nenhum indicador encontrado com os filtros selecionados.
                    </td>
                  </tr>
                ) : (
                  filteredIndicadores.map((ind) => (
                    <tr
                      key={ind.id}
                      className="hover:bg-[#FF0032]/5 transition-colors group cursor-pointer"
                      onClick={() => onSelectIndicador(ind)}
                    >
                      <td className="py-2.5 px-3 font-mono font-bold text-[#FF0032] text-center">
                        {ind.id}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-[#323232] group-hover:text-[#FF0032] transition-colors">
                        {ind.nome}
                      </td>
                      <td className="py-2.5 px-3">
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
                      <td className="py-2.5 px-3 text-center">
                        <span className="font-semibold text-xs text-[#323232] bg-zinc-100 px-2 py-0.5 rounded">
                          {ind.premissa2027}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-xs text-[#323232]/80">
                        {ind.prioridadeGP2027}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="text-zinc-400 group-hover:text-[#FF0032] transition-colors">
                          <ExternalLink className="w-3.5 h-3.5 inline" />
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg border border-[#B4B4B4]/30 text-[11px] text-[#323232]/80 leading-relaxed">
            <strong>Nota oficial da fonte:</strong> Os indicadores foram preservados e reorganizados conforme os objetivos estratégicos 1.1 a 1.5 e suas respectivas premissas. P4 e P6 são contempladas no eixo 1.5 por meio de interface institucional, conforme o Planejamento Estratégico 2027.
          </div>
        </div>
      )}

      {/* Tab 3: Detalhamento dos 5 Eixos */}
      {activeTab === 'eixos' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EIXOS_ESTRATEGICOS.map((eixo) => (
              <div
                key={eixo.id}
                className="bg-white p-5 rounded-2xl border border-[#B4B4B4]/40 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded bg-[#FF0032] text-white">
                      EIXO {eixo.codigo}
                    </span>
                    <span className="text-xs font-bold text-[#323232] bg-[#F8F9FA] px-2 py-0.5 rounded border border-[#B4B4B4]/30">
                      {eixo.premissaInstitucional}
                    </span>
                  </div>

                  <h3 className="text-sm font-extrabold text-[#323232] mb-3 leading-snug">
                    {eixo.titulo}
                  </h3>

                  {/* Prioridades 2027 */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] block mb-1.5">
                      Prioridades 2027:
                    </span>
                    <ul className="space-y-1.5">
                      {eixo.prioridadesList.map((pri, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#323232] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0032] shrink-0 mt-0.5" />
                          <span>{pri}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Indicadores List */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3] block mb-1.5">
                      Indicadores Vinculados ({eixo.indicadoresNomes.length}):
                    </span>
                    <div className="space-y-1">
                      {eixo.indicadoresNomes.map((nome, i) => (
                        <div key={i} className="text-[11px] font-medium text-[#323232] bg-[#F8F9FA] p-1.5 rounded border border-[#B4B4B4]/20 leading-tight">
                          {nome}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {eixo.notaGovernança && (
                  <div className="mt-4 pt-3 border-t border-[#B4B4B4]/30 text-[11px] text-[#323232]/80 italic">
                    {eixo.notaGovernança}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Sustentabilidade Econômica & Governança */}
      {activeTab === 'transversal' && (
        <div className="space-y-6">
          {/* Diretriz Transversal */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B4B4B4]/40 shadow-xs space-y-4">
            <div>
              <span className="text-xs font-bold text-[#FF0032] uppercase tracking-wider block mb-1">
                3. Diretriz Transversal
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#323232] tracking-tight">
                {DIRETRIZ_TRANSVERSAL.titulo}
              </h2>
              <p className="text-xs sm:text-sm text-[#323232]/80 mt-2 leading-relaxed max-w-4xl">
                {DIRETRIZ_TRANSVERSAL.definicao}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {DIRETRIZ_TRANSVERSAL.elementosConectados.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/30"
                >
                  <span className="text-[10px] font-mono text-[#FF0032] font-bold block mb-1">
                    Conexão 0{idx + 1}
                  </span>
                  <h3 className="text-xs font-bold text-[#323232] mb-1">
                    {item.termo}
                  </h3>
                  <p className="text-[10px] text-[#A3A3A3]">
                    {item.indicadorRelacionado}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-zinc-100 rounded-xl border border-[#B4B4B4]/30 text-xs text-[#323232] leading-relaxed">
              <strong>Princípio de Gestão:</strong> {DIRETRIZ_TRANSVERSAL.principioGovernança}
            </div>
          </div>

          {/* Próximo Desdobramento */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B4B4B4]/40 shadow-xs space-y-4">
            <div>
              <span className="text-xs font-bold text-[#FF0032] uppercase tracking-wider block mb-1">
                4. Próximo Desdobramento
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#323232] tracking-tight">
                {PROXIMO_DESDOBRAMENTO.titulo}
              </h2>
              <p className="text-xs sm:text-sm text-[#323232]/80 mt-2 leading-relaxed max-w-4xl">
                {PROXIMO_DESDOBRAMENTO.texto}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {PROXIMO_DESDOBRAMENTO.etapas.map((et, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#F8F9FA] rounded-xl border border-[#B4B4B4]/30"
                >
                  <span className="text-lg font-black text-[#FF0032] font-mono block mb-1">
                    {et.ordem}
                  </span>
                  <h3 className="text-xs font-bold text-[#323232] mb-1">
                    {et.instancia}
                  </h3>
                  <p className="text-xs text-[#323232]/70 leading-relaxed">
                    {et.acao}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#B4B4B4]/30 flex items-center justify-between text-xs text-[#A3A3A3]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF0032]" />
                <span className="font-semibold text-[#323232]">{PROXIMO_DESDOBRAMENTO.assinatura}</span>
              </div>
              <span>Ciclo Estratégico 2026–2030</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
