export interface Indicador {
  id: number;
  nome: string;
  perspectiva: 'Aprendizado e Inovação' | 'Processos Internos' | 'Sustentabilidade';
  premissa2027: string;
  prioridadeGP2027: string;
  eixoId: string;
}

export interface EixoEstrategico {
  id: string;
  codigo: string;
  titulo: string;
  premissaInstitucional: string;
  premissasRelacionadas: string[];
  objetivosEstrategicos: string[];
  prioridades2027: string;
  prioridadesList: string[];
  indicadoresNomes: string[];
  notaGovernança?: string;
  destaque: string;
}

export interface PremissaInstitucional {
  codigo: string;
  nome: string;
  descricaoCompleta: string;
  eixosConectados: string[];
}

export const INSTITUTIONAL_INFO = {
  titulo: 'PREMISSAS 2027',
  subtitulo: 'Superintendência de Gestão de Pessoas',
  status: 'Proposta para validação – 2027',
  entidade: 'Santa Casa BH',
  alinhamento: 'Mapa Estratégico 2026-2030 e diretrizes institucionais',
  logoUrl: 'https://attachments.gupy.io/production/companies/12115/career/29248/images/2023-07-13_20-29_companyLogoUrl.png',
  cores: {
    vermelho: '#FF0032',
    cinzaEscuro: '#323232',
    cinzaMedio: '#B4B4B4',
    cinzaClaro: '#A3A3A3',
  }
};

export const PREMISSAS_INSTITUCIONAIS: PremissaInstitucional[] = [
  {
    codigo: 'P3',
    nome: 'Processos, automação, IA e dados',
    descricaoCompleta: 'P3 – Processos, automação, IA e dados',
    eixosConectados: ['1.4']
  },
  {
    codigo: 'P4',
    nome: 'Excelência assistencial, acesso e integração',
    descricaoCompleta: 'P4 – Excelência assistencial, acesso e integração',
    eixosConectados: ['1.5']
  },
  {
    codigo: 'P5',
    nome: 'Segurança institucional e riscos',
    descricaoCompleta: 'P5 – Segurança institucional e riscos',
    eixosConectados: ['1.2']
  },
  {
    codigo: 'P6',
    nome: 'Governança, planejamento e legado',
    descricaoCompleta: 'P6 – Governança, planejamento e legado',
    eixosConectados: ['1.5']
  },
  {
    codigo: 'P7',
    nome: 'Pessoas, produtividade e sustentabilidade humana',
    descricaoCompleta: 'P7 – Pessoas, produtividade e sustentabilidade humana',
    eixosConectados: ['1.1', '1.2', '1.3', '1.4']
  }
];

export const EIXOS_ESTRATEGICOS: EixoEstrategico[] = [
  {
    id: '1.1',
    codigo: '1.1',
    titulo: 'Desenvolver pessoas e reter talentos',
    premissaInstitucional: 'P7 – Pessoas, produtividade e sustentabilidade humana',
    premissasRelacionadas: ['P7'],
    objetivosEstrategicos: [
      '1.1 Desenvolver pessoas e reter talentos',
      '2.3 Potencializar a performance das unidades de negócio',
      '4.1 Assegurar a sustentabilidade econômica, social e ambiental'
    ],
    prioridades2027: 'Mapeamento de posições e competências críticas; dimensionamento adequado; ampliação da capacidade produtiva sem crescimento desordenado do quadro; desenvolvimento de competências e lideranças; sucessão; movimentação e aproveitamento interno; experiência, desempenho e retenção.',
    prioridadesList: [
      'Mapeamento de posições e competências críticas',
      'Dimensionamento adequado',
      'Ampliação da capacidade produtiva sem crescimento desordenado do quadro',
      'Desenvolvimento de competências e lideranças',
      'Sucessão',
      'Movimentação e aproveitamento interno',
      'Experiência, desempenho e retenção'
    ],
    indicadoresNomes: [
      '% DE POSIÇÕES/COMPETÊNCIAS CRÍTICAS COM COBERTURA ADEQUADA',
      'ÍNDICE DE PRODUTIVIDADE DA FORÇA DE TRABALHO',
      '% TURNOVER GLOBAL',
      'FOLHA DE PAGAMENTO X RECEITA LÍQUIDA',
      '% DE APROVEITAMENTO INTERNO (CORPORATIVO)',
      '% DE VAGAS FECHADAS NO PRAZO',
      'FOLHA DE PAGAMENTO X DESPESAS',
      '% DE ADESÃO TREINAMENTO INSTITUCIONAL GLOBAL',
      'AVALIAÇÃO DE DESEMPENHO',
      'INDICADORES DE DESENVOLVIMENTO DE LIDERANÇA',
      'CUMPRIMENTO DE PLANO DE TREINAMENTO SETORIAIS',
      'ÍNDICE DE DESEMPENHO EM COMPETÊNCIAS CRÍTICAS (IDCC)'
    ],
    destaque: 'Foco na produtividade qualificada, sucessão e sustentabilidade financeira do quadro.'
  },
  {
    id: '1.2',
    codigo: '1.2',
    titulo: 'Promover o bem-estar e segurança do trabalhador',
    premissaInstitucional: 'P5 – Segurança institucional e riscos + P7 – Pessoas, produtividade e sustentabilidade humana',
    premissasRelacionadas: ['P5', 'P7'],
    objetivosEstrategicos: [
      '1.2 Promover o bem-estar e segurança do trabalhador',
      '2.4 Atuar com excelência, segurança e qualidade.'
    ],
    prioridades2027: 'Fortalecimento das ações preventivas de saúde e segurança; atuação sobre absenteísmo e afastamentos; identificação e tratamento de riscos relacionados às pessoas; integração de dados de saúde, segurança, clima e absenteísmo.',
    prioridadesList: [
      'Fortalecimento das ações preventivas de saúde e segurança',
      'Atuação sobre absenteísmo e afastamentos',
      'Identificação e tratamento de riscos relacionados às pessoas',
      'Integração de dados de saúde, segurança, clima e absenteísmo'
    ],
    indicadoresNomes: [
      'EFETIVIDADE DE BEM-ESTAR E SEGURANÇA',
      'CLIMA ORGANIZACIONAL',
      'ABSENTEÍSMO GLOBAL',
      'ABSENTEÍSMO POR ATESTADO MÉDICO/ODONTOLÓGICO GLOBAL',
      'ACIDENTES DO TRABALHO SCBH',
      '% DE ALCANCE DO MOVIMENTO MENTE EM FOCO'
    ],
    destaque: 'Prevenção ativa, saúde integral, mitigação de riscos humanos e mitigação de absenteísmo.'
  },
  {
    id: '1.3',
    codigo: '1.3',
    titulo: 'Consolidar a diversidade, equidade e inclusão',
    premissaInstitucional: 'P7 – Pessoas, produtividade e sustentabilidade humana',
    premissasRelacionadas: ['P7'],
    objetivosEstrategicos: [
      '1.3 Consolidar a diversidade, equidade e inclusão.'
    ],
    prioridades2027: 'Fortalecimento da diversidade, equidade e inclusão; acompanhamento da representatividade; ampliação da inclusão de pessoas com deficiência; conexão da DEI com desenvolvimento e retenção.',
    prioridadesList: [
      'Fortalecimento da diversidade, equidade e inclusão',
      'Acompanhamento da representatividade',
      'Ampliação da inclusão de pessoas com deficiência',
      'Conexão da DEI com desenvolvimento e retenção'
    ],
    indicadoresNomes: [
      '% DE PCD INSTITUCIONAL',
      'INDICADORES DE DESENVOLVIMENTO DE LIDERANÇA',
      'CLIMA ORGANIZACIONAL'
    ],
    destaque: 'Representatividade conectada à retenção e desenvolvimento de lideranças inclusivas.'
  },
  {
    id: '1.4',
    codigo: '1.4',
    titulo: 'Impulsionar a inovação, modernização e transformação digital',
    premissaInstitucional: 'P3 – Processos, automação, IA e dados + P7 – Pessoas, produtividade e sustentabilidade humana',
    premissasRelacionadas: ['P3', 'P7'],
    objetivosEstrategicos: [
      '1.4 Impulsionar a inovação, modernização e transformação digital',
      '2.3 Potencializar a performance das unidades de negócio',
      '2.4 Atuar com excelência, segurança e qualidade.'
    ],
    prioridades2027: 'Otimização de processos; ampliação do uso de automação e IA; redução de retrabalho; melhoria da experiência nos processos de RH; uso de dados para decisões; mensuração dos ganhos gerados pela transformação.',
    prioridadesList: [
      'Otimização de processos',
      'Ampliação do uso de automação e IA',
      'Redução de retrabalho',
      'Melhoria da experiência nos processos de RH',
      'Uso de dados para decisões',
      'Mensuração dos ganhos gerados pela transformação'
    ],
    indicadoresNomes: [
      '% DE INICIATIVAS DE AUTOMAÇÃO/IA COM BENEFÍCIO MENSURADO E COMPROVADO',
      'HORAS DE CAPACIDADE LIBERADAS POR AUTOMAÇÃO/IA',
      '% DE REDUÇÃO DE RETRABALHO NOS PROCESSOS PRIORIZADOS',
      '% DE DESEMPENHO ORÇAMENTÁRIO'
    ],
    destaque: 'Ganhos mensurados de capacidade, redução de retrabalho e rigor orçamentário via tecnologia.'
  },
  {
    id: '1.5',
    codigo: '1.5',
    titulo: 'Aprimorar a integração entre assistência, ensino, pesquisa e o ecossistema de conhecimento',
    premissaInstitucional: 'P4 – Excelência assistencial, acesso e integração + P6 – Governança, planejamento e legado',
    premissasRelacionadas: ['P4', 'P6'],
    objetivosEstrategicos: [
      '1.5 Aprimorar a integração entre assistência, ensino, pesquisa e o ecossistema de conhecimento.'
    ],
    prioridades2027: 'Atuação integrada com as áreas responsáveis por assistência, ensino e pesquisa; fortalecimento da governança da integração; conexão entre pessoas, competências e o ecossistema de conhecimento.',
    prioridadesList: [
      'Atuação integrada com as áreas responsáveis por assistência, ensino e pesquisa',
      'Fortalecimento da governança da integração',
      'Conexão entre pessoas, competências e o ecossistema de conhecimento'
    ],
    indicadoresNomes: [
      'ÍNDICE DE INTEGRAÇÃO ENTRE ASSISTÊNCIA, ENSINO, PESQUISA E ECOSSISTEMA DE CONHECIMENTO (já em estruturação)'
    ],
    notaGovernança: 'Para P4 e P6, cuja atuação da Gestão de Pessoas ocorre principalmente por interface institucional no objetivo 1.5, é mantido o indicador de integração já previsto no Planejamento Estratégico, sem criação desnecessária de novas medidas.',
    destaque: 'Interface institucional e governança compartilhada no ecossistema do conhecimento.'
  }
];

export const INDICADORES_CONSOLIDADOS: Indicador[] = [
  {
    id: 1,
    nome: '% DE POSIÇÕES/COMPETÊNCIAS CRÍTICAS COM COBERTURA ADEQUADA',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolver pessoas e reter talentos',
    eixoId: '1.1'
  },
  {
    id: 2,
    nome: 'ÍNDICE DE PRODUTIVIDADE DA FORÇA DE TRABALHO',
    perspectiva: 'Processos Internos',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Capacidade e produtividade',
    eixoId: '1.1'
  },
  {
    id: 3,
    nome: '% TURNOVER GLOBAL',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolvimento e retenção',
    eixoId: '1.1'
  },
  {
    id: 4,
    nome: 'FOLHA DE PAGAMENTO X RECEITA LÍQUIDA',
    perspectiva: 'Sustentabilidade',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Capacidade e produtividade',
    eixoId: '1.1'
  },
  {
    id: 5,
    nome: '% DE APROVEITAMENTO INTERNO (CORPORATIVO)',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolvimento e retenção',
    eixoId: '1.1'
  },
  {
    id: 6,
    nome: '% DE VAGAS FECHADAS NO PRAZO',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Capacidade e produtividade',
    eixoId: '1.1'
  },
  {
    id: 7,
    nome: 'FOLHA DE PAGAMENTO X DESPESAS',
    perspectiva: 'Sustentabilidade',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Capacidade e produtividade',
    eixoId: '1.1'
  },
  {
    id: 8,
    nome: '% DE ADESÃO TREINAMENTO INSTITUCIONAL GLOBAL',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolvimento e retenção',
    eixoId: '1.1'
  },
  {
    id: 9,
    nome: 'AVALIAÇÃO DE DESEMPENHO',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolvimento e retenção',
    eixoId: '1.1'
  },
  {
    id: 10,
    nome: 'INDICADORES DE DESENVOLVIMENTO DE LIDERANÇA',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolvimento e retenção',
    eixoId: '1.1'
  },
  {
    id: 11,
    nome: 'CUMPRIMENTO DE PLANO DE TREINAMENTO SETORIAIS',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Desenvolvimento e retenção',
    eixoId: '1.1'
  },
  {
    id: 12,
    nome: 'ÍNDICE DE DESEMPENHO EM COMPETÊNCIAS CRÍTICAS (IDCC)',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.1 – Competências críticas',
    eixoId: '1.1'
  },
  {
    id: 13,
    nome: 'ABSENTEÍSMO GLOBAL',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P5 + P7',
    prioridadeGP2027: '1.2 – Saúde, segurança e sustentabilidade humana',
    eixoId: '1.2'
  },
  {
    id: 14,
    nome: 'ABSENTEÍSMO POR ATESTADO MÉDICO/ODONTOLÓGICO GLOBAL',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P5 + P7',
    prioridadeGP2027: '1.2 – Saúde, segurança e sustentabilidade humana',
    eixoId: '1.2'
  },
  {
    id: 15,
    nome: 'EFETIVIDADE DE BEM-ESTAR E SEGURANÇA',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P5 + P7',
    prioridadeGP2027: '1.2 – Saúde, segurança e sustentabilidade humana',
    eixoId: '1.2'
  },
  {
    id: 16,
    nome: 'CLIMA ORGANIZACIONAL',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P5 + P7',
    prioridadeGP2027: '1.2 – Bem-estar e segurança',
    eixoId: '1.2'
  },
  {
    id: 17,
    nome: 'ACIDENTES DO TRABALHO SCBH',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P5 + P7',
    prioridadeGP2027: '1.2 – Saúde e segurança',
    eixoId: '1.2'
  },
  {
    id: 18,
    nome: '% DE ALCANCE DO MOVIMENTO MENTE EM FOCO',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.2 – Sustentabilidade humana',
    eixoId: '1.2'
  },
  {
    id: 19,
    nome: '% DE PCD INSTITUCIONAL',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P7',
    prioridadeGP2027: '1.3 – Diversidade, equidade e inclusão',
    eixoId: '1.3'
  },
  {
    id: 20,
    nome: '% DE INICIATIVAS DE AUTOMAÇÃO/IA COM BENEFÍCIO MENSURADO E COMPROVADO',
    perspectiva: 'Processos Internos',
    premissa2027: 'P3',
    prioridadeGP2027: '1.4 – Processos, IA e dados',
    eixoId: '1.4'
  },
  {
    id: 21,
    nome: 'HORAS DE CAPACIDADE LIBERADAS POR AUTOMAÇÃO/IA',
    perspectiva: 'Processos Internos',
    premissa2027: 'P3',
    prioridadeGP2027: '1.4 – Processos, IA e dados',
    eixoId: '1.4'
  },
  {
    id: 22,
    nome: '% DE REDUÇÃO DE RETRABALHO NOS PROCESSOS PRIORIZADOS',
    perspectiva: 'Processos Internos',
    premissa2027: 'P3',
    prioridadeGP2027: '1.4 – Processos, IA e dados',
    eixoId: '1.4'
  },
  {
    id: 23,
    nome: '% DE DESEMPENHO ORÇAMENTÁRIO',
    perspectiva: 'Sustentabilidade',
    premissa2027: 'P3 + P7',
    prioridadeGP2027: '1.4 – Transformação e sustentabilidade',
    eixoId: '1.4'
  },
  {
    id: 24,
    nome: 'ÍNDICE DE INTEGRAÇÃO ENTRE ASSISTÊNCIA, ENSINO, PESQUISA E ECOSSISTEMA DE CONHECIMENTO (já em estruturação)',
    perspectiva: 'Aprendizado e Inovação',
    premissa2027: 'P4 + P6',
    prioridadeGP2027: '1.5 – Integração, governança e conhecimento',
    eixoId: '1.5'
  }
];

export const DIRETRIZ_TRANSVERSAL = {
  titulo: 'Sustentabilidade Econômica',
  definicao: 'Sustentabilidade econômica permanece como dimensão transversal, relacionando produtividade da força de trabalho, retenção e aproveitamento interno, absenteísmo, automação, liberação de capacidade, relação folha x receita, relação folha x despesas e desempenho orçamentário. A organização por eixos não cria uma quinta premissa de RH e mantém a conexão com a estratégia institucional.',
  elementosConectados: [
    { termo: 'Produtividade da força de trabalho', indicadorRelacionado: '#2 ÍNDICE DE PRODUTIVIDADE DA FORÇA DE TRABALHO' },
    { termo: 'Retenção e aproveitamento interno', indicadorRelacionado: '#3 % TURNOVER GLOBAL e #5 % DE APROVEITAMENTO INTERNO' },
    { termo: 'Absenteísmo', indicadorRelacionado: '#13 ABSENTEÍSMO GLOBAL e #14 ABSENTEÍSMO POR ATESTADO' },
    { termo: 'Automação e IA', indicadorRelacionado: '#20 % DE INICIATIVAS COM BENEFÍCIO COMPROVADO' },
    { termo: 'Liberação de capacidade', indicadorRelacionado: '#21 HORAS DE CAPACIDADE LIBERADAS POR AUTOMAÇÃO/IA' },
    { termo: 'Relação Folha x Receita Líquida', indicadorRelacionado: '#4 FOLHA DE PAGAMENTO X RECEITA LÍQUIDA' },
    { termo: 'Relação Folha x Despesas', indicadorRelacionado: '#7 FOLHA DE PAGAMENTO X DESPESAS' },
    { termo: 'Desempenho Orçamentário', indicadorRelacionado: '#23 % DE DESEMPENHO ORÇAMENTÁRIO' }
  ],
  principioGovernança: 'A organização por eixos não cria uma quinta premissa de RH e mantém a conexão estrita com a estratégia institucional.'
};

export const PROXIMO_DESDOBRAMENTO = {
  titulo: 'Próximo Desdobramento',
  texto: 'Após validação da Superintendência, as prioridades poderão ser desdobradas pelas Gerências e Coordenações em OKRs, projetos, ações e indicadores de resultado para composição do Plano da Gestão 2027.',
  etapas: [
    {
      ordem: '01',
      instancia: 'Superintendência de Gestão de Pessoas',
      acao: 'Validação executiva da proposta de desdobramento das Premissas 2027.'
    },
    {
      ordem: '02',
      instancia: 'Gerências e Coordenações',
      acao: 'Desdobramento em OKRs táticos, projetos estruturantes e planos de ação.'
    },
    {
      ordem: '03',
      instancia: 'Plano de Gestão 2027',
      acao: 'Definição de metas, iniciativas prioritárias e indicadores de resultado consolidados.'
    }
  ],
  assinatura: 'Superintendência de Gestão de Pessoas | Santa Casa BH'
};

export const DIRECIONAMENTO_PROPOSTA = {
  titulo: 'Direcionamento da Proposta',
  subtitulo: 'Alinhamento Estratégico 2026-2030 e Diretrizes Institucionais',
  resumo: 'Considerando as nove Premissas Estratégicas 2027 e o Mapa Estratégico 2026-2030, a Gestão de Pessoas organiza sua atuação nos cinco objetivos estratégicos de Aprendizado e Inovação sob sua interface: 1.1, 1.2, 1.3, 1.4 e 1.5.',
  premissasContempladas: [
    { premissa: 'P3', nome: 'Processos, automação, IA e dados', papel: 'Modernização digital, processos e liberação de capacidade' },
    { premissa: 'P4', nome: 'Excelência assistencial, acesso e integração', papel: 'Interface no objetivo 1.5 e ecossistema de conhecimento' },
    { premissa: 'P5', nome: 'Segurança institucional e riscos', papel: 'Segurança e prevenção a riscos humanos no objetivo 1.2' },
    { premissa: 'P6', nome: 'Governança, planejamento e legado', papel: 'Interface no objetivo 1.5 e governança da integração' },
    { premissa: 'P7', nome: 'Pessoas, produtividade e sustentabilidade humana', papel: 'Espinha dorsal de RH presente em quase todos os eixos (1.1, 1.2, 1.3, 1.4)' }
  ],
  racionalPreservacao: 'Os indicadores existentes são preservados e reorganizados abaixo de seus respectivos objetivos e premissas. Para P4 e P6, cuja atuação da Gestão de Pessoas ocorre principalmente por interface institucional no objetivo 1.5, é mantido o indicador de integração já previsto no Planejamento Estratégico, sem criação desnecessária de novas medidas.'
};
