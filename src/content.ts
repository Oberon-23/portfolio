/*
 * Todo o texto e todos os links do portfólio ficam aqui.
 * Para editar uma frase, um link ou um projeto, mexa só neste arquivo.
 */
import breno from '@/assets/breno.webp';
import pipeline from '@/assets/projects/pipeline.webp';
import logLight from '@/assets/projects/logistica-light.webp';
import logDark from '@/assets/projects/logistica-dark.webp';
import qLight from '@/assets/projects/qualidade-light.webp';
import qDark from '@/assets/projects/qualidade-dark.webp';
import sgqLight from '@/assets/projects/sgq-light.webp';
import sgqDark from '@/assets/projects/sgq-dark.webp';
import sdLight from '@/assets/projects/servicedesk-light.webp';
import sdDark from '@/assets/projects/servicedesk-dark.webp';
import paLight from '@/assets/projects/people-light.webp';
import paDark from '@/assets/projects/people-dark.webp';

export type Language = 'pt' | 'en';

/* ---------- links (os mesmos nos dois idiomas) ---------- */
export const LINKS = {
  email: 'brenoosbr@outlook.com',
  whatsapp: 'https://wa.me/5522997789693?text=Ol%C3%A1%20Breno,%20vim%20do%20seu%20portf%C3%B3lio!',
  linkedin: 'https://www.linkedin.com/in/brenosilvarangel/',
  github: 'https://github.com/Oberon-23',
  kaggle: 'https://www.kaggle.com/brenosilvabarros',
  // Painéis publicados na Vercel: confira se os endereços batem com os do seu painel da Vercel.
  painelQualidade: 'https://painel-qualidade-rotalume.vercel.app',
  repoPipeline: 'https://github.com/Oberon-23/service-desk-analytics-mvp',
  kagglePipeline: 'https://www.kaggle.com/code/brenosilvabarros/an-lise-de-chamados-de-service-desk-itsm-real',
  repoQualidade: 'https://github.com/Oberon-23/painel-qualidade-rotalume',
  painelLogistica: 'https://painel-logistica-rotalume.vercel.app',
  repoLogistica: 'https://github.com/Oberon-23/painel-logistica-rotalume',
  sgq: 'https://sqgrotalume.vercel.app',
  repoSgq: 'https://github.com/Oberon-23/SGQ-Rotalume',
  painelPeople: 'https://painel-people-analytics.vercel.app',
  repoPeople: 'https://github.com/Oberon-23/painel-people-analytics',
  painelServiceDesk: 'https://painel-servicedesk-rotalume.vercel.app',
  repoServiceDesk: 'https://github.com/Oberon-23/painel-servicedesk-rotalume',
};

export const PHOTO = breno;

export interface ProjectLink { label: string; href: string; kind: 'demo' | 'github' | 'kaggle' }
export interface Project {
  id: string;
  category: string;
  title: string;
  question: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  image: { light: string; dark: string; alt: string };
  badge?: string;
  details: { heading: string; items: string[] }[];
}

interface Content {
  nav: { about: string; value: string; skills: string; projects: string; education: string; certs: string; contact: string; menu: string; theme: string; system: string; light: string; dark: string; language: string };
  hero: { kicker: string; title: string; intro: string; ctaProjects: string; ctaContact: string; ctaLinkedin: string; photoAlt: string; status: string; highlights: { title: string; text: string }[] };
  about: { title: string; paragraphs: string[]; facts: { value: string; label: string }[] };
  value: { title: string; lead: string; items: { title: string; text: string }[] };
  skills: { title: string; lead: string; groups: { title: string; items: string[] }[] };
  projects: { title: string; lead: string; question: string; details: string; close: string; more: string; less: string; items: Project[] };
  education: { title: string; degrees: { course: string; school: string; period: string; status: string }[]; certTitle: string; certs: { name: string; issuer: string; date?: string }[] };
  contact: { title: string; text: string; email: string };
  ui: { more: string; less: string };
  footer: string;
}

const IMG = {
  pipeline: { light: pipeline, dark: pipeline },
  log: { light: logLight, dark: logDark },
  q: { light: qLight, dark: qDark },
  sgq: { light: sgqLight, dark: sgqDark },
  sd: { light: sdLight, dark: sdDark },
  pa: { light: paLight, dark: paDark },
};

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: { about: 'Sobre', value: 'Como ajudo', skills: 'Competências', projects: 'Projetos', education: 'Formação', certs: 'Certificações', contact: 'Contato', menu: 'Menu', theme: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Escuro', language: 'Idioma' },
    hero: {
      kicker: 'Dados · Processos · Melhoria contínua · Tecnologia',
      title: 'Dados de operação que viram melhoria.',
      intro: 'Sou o Breno, estudante de Engenharia de Produção e pós-graduado em Data Analytics & IA. Uso dados para entender problemas, organizar processos e acompanhar se a melhoria funcionou.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Fale comigo',
      ctaLinkedin: 'LinkedIn',
      photoAlt: 'Foto de Breno Silva',
      status: 'Aberto a oportunidades',
      highlights: [
        { title: 'Dados e painéis', text: 'Power BI, Excel, SQL e Python para medir e decidir' },
        { title: 'Processos', text: 'Mapeamento, SIPOC, padronização e indicadores de processo' },
        { title: 'Melhoria contínua', text: 'PDCA, Pareto, Lean Six Sigma e gestão da qualidade' },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Sou estudante de Engenharia de Produção, pós-graduado em Data Analytics & IA e formado em Análise e Desenvolvimento de Sistemas. Essa combinação junta a visão de processo da engenharia com as ferramentas de dados.',
        'Gosto de começar entendendo o problema antes de escolher a ferramenta: olhar para os dados, achar a causa e medir se a mudança funcionou. Uso Power BI, SQL, Python e React para transformar isso em painéis e sistemas que as pessoas conseguem usar.',
        'Os projetos deste portfólio partem de uma empresa fictícia e de uma base pública real, e mostram como eu penso, do dado até a decisão.',
      ],
      facts: [
        { value: '6', label: 'projetos no portfólio, do dado à decisão' },
        { value: '3', label: 'formações: Análise e Desenvolvimento de Sistemas, Data Analytics & IA e Engenharia de Produção (em curso)' },
        { value: 'Dados', label: 'como ponto de partida para entender e melhorar processos' },
      ],
    },
    value: {
      title: 'Como ajudo a operação',
      lead: 'Três frentes em que eu gero resultado, do problema na operação até a ação que resolve.',
      items: [
        { title: 'Melhoria contínua com método', text: 'Pareto, Ishikawa, 5 Porquês, CEP e PDCA para ir do sintoma à causa raiz e acompanhar se a ação de fato funcionou.' },
        { title: 'Indicadores que a gestão entende', text: 'OEE, OTIF, não conformidades e prazos em painéis com meta, situação e uma frase em português simples no topo.' },
        { title: 'Processos padronizados e rastreáveis', text: 'Fluxos com etapa, responsável e evidência, do registro do problema até a verificação de eficácia, como pede a ISO 9001.' },
      ],
    },
    skills: {
      title: 'Competências',
      lead: 'Ferramentas e métodos que uso nos projetos e no trabalho.',
      groups: [
        { title: 'Qualidade', items: ['Lean Six Sigma', 'ISO 9001:2015', 'PDCA', 'CEP', 'Pareto e Ishikawa', '5 Porquês e 5W2H', 'Gestão de riscos'] },
        { title: 'Processos', items: ['Mapeamento de processos', 'SIPOC', 'Padronização', 'Indicadores de processo', 'OEE', 'Scrum'] },
        { title: 'BI e planilhas', items: ['Power BI', 'DAX', 'Excel avançado', 'Macros (VBA)'] },
        { title: 'Dados', items: ['SQL', 'Python', 'pandas', 'DuckDB', 'Modelagem dimensional'] },
        { title: 'Desenvolvimento', items: ['React', 'TypeScript', 'JavaScript', 'Git'] },
      ],
    },
    projects: {
      title: 'Projetos em destaque',
      lead: 'Cada projeto parte de uma pergunta da operação. O sistema e os painéis contam a história de uma mesma empresa fictícia, o Grupo Rotalume, olhando para áreas diferentes: a qualidade da fábrica, as pessoas, a logística de entrega e o atendimento de TI. Os cenários foram colocados de propósito para a análise encontrar; o pipeline usa uma base pública real.',
      question: 'Pergunta',
      details: 'Detalhes',
      close: 'Fechar',
      more: 'Ver mais projetos',
      less: 'Ver menos projetos',
      items: [
        {
          id: 'sgq',
          category: 'Sistema web · Gestão da qualidade',
          title: 'SGQ Rotalume: sistema de gestão da qualidade',
          question: 'Como tirar a qualidade das planilhas e garantir o PDCA do registro da não conformidade até a eficácia?',
          description: 'Sistema web alinhado à ISO 9001:2015 com sete módulos: não conformidades, processos com SIPOC, riscos e oportunidades, auditorias internas, documentos, indicadores e análise crítica pela direção. Tem perfis de acesso, histórico de alterações e relatórios em PDF.',
          tags: ['React', 'TypeScript', 'ISO 9001', 'PDCA', 'Ishikawa', '5W2H'],
          links: [
            { label: 'Abrir sistema', href: LINKS.sgq, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoSgq, kind: 'github' },
          ],
          image: { ...IMG.sgq, alt: 'Painel do SGQ Rotalume com pendências, indicadores e não conformidades' },
          badge: 'Dados fictícios',
          details: [
            { heading: 'O que foi feito', items: ['Não conformidades em 5 etapas do PDCA, com 5 Porquês, Ishikawa 6M e plano 5W2H. O sistema não deixa avançar sem causa raiz nem encerrar sem evidência de eficácia.', 'Matriz de riscos 5×5, checklist de auditoria por requisito da ISO e análise crítica montada automaticamente a partir dos outros módulos.', 'Relatório de não conformidade (RNC), relatório de auditoria e ata de análise crítica em PDF, prontos para assinar.'] },
            { heading: 'Pensado como produto', items: ['Quatro perfis (gestão da qualidade, dono de processo, auditor e leitor), com histórico de quem alterou o quê, quando e o valor anterior.', 'Minhas pendências, notificações de prazo e busca geral em todos os módulos.', 'Camada de dados pronta para trocar o navegador por um banco de dados, com testes automáticos rodando no GitHub.'] },
          ],
        },
        {
          id: 'qualidade',
          category: 'Dashboard · Qualidade industrial',
          title: 'Qualidade e processos',
          question: 'A fábrica está eficiente? O processo está estável? Quais defeitos atacar primeiro?',
          description: 'OEE em cascata, cartas de controle X̄-R com regras de Western Electric, Pareto de defeitos e quadro PDCA de ações corretivas.',
          tags: ['CEP', 'OEE', 'Pareto', 'PDCA', 'ISO 9001', 'React'],
          links: [
            { label: 'Abrir painel', href: LINKS.painelQualidade, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoQualidade, kind: 'github' },
          ],
          image: { ...IMG.q, alt: 'Carta de controle do painel de qualidade' },
          badge: 'Dados fictícios',
          details: [
            { heading: 'O que foi feito', items: ['OEE por linha, decomposto em disponibilidade, performance e qualidade.', 'Carta X̄-R com limites calculados e regras de Western Electric para separar variação normal de causa especial.', 'Cpk sinalizado como não confiável quando o processo sai de controle, apontando para o Ppk.', 'Causa raiz pelos 6M do Ishikawa e ações corretivas no ciclo PDCA (ISO 9001:2015, cláusula 10.2).'] },
            { heading: 'Cenários simulados', items: ['Desgaste de ferramenta, equipe nova sem padronização e umidade afetando a pintura.'] },
          ],
        },
        {
          id: 'people',
          category: 'Dados e segurança da informação',
          title: 'People Analytics com segurança no banco',
          question: 'Como mostrar indicadores de RH sem que cada pessoa veja mais dados do que deveria?',
          description: 'Painel de RH (turnover, absenteísmo, clima e igualdade salarial) em que o banco de dados decide o que cada perfil recebe. A mesma consulta devolve 523, 345, 158 ou 0 registros, conforme quem pergunta.',
          tags: ['LGPD', 'PostgreSQL', 'RLS', 'Auditoria', 'Next.js', 'TypeScript'],
          links: [
            { label: 'Abrir painel', href: LINKS.painelPeople, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoPeople, kind: 'github' },
          ],
          image: { ...IMG.pa, alt: 'Visão geral do painel de People Analytics' },
          badge: 'Dados fictícios',
          details: [
            { heading: 'O que foi feito', items: ['Permissão por linha (Row Level Security) no PostgreSQL: a diretora vê a empresa, o HRBP a diretoria dele, a gerente a equipe e o analista só grupos.', 'Salário e CPF liberados por perfil, com CPF mascarado; médias de grupos com menos de 5 pessoas ficam ocultas para não revelar ninguém.', 'Sessão assinada que o próprio banco confere e registro de todo acesso a dado pessoal, que o aplicativo não consegue apagar.'] },
            { heading: 'Como provar', items: ['Uma página roda ao vivo 11 tentativas de burlar as regras, como ler a tabela direto, trocar o usuário da sessão e apagar a auditoria. Todas são barradas ou filtradas pelo banco.', '21 testes automáticos contra um PostgreSQL real, rodando no GitHub a cada mudança.'] },
          ],
        },
        {
          id: 'pipeline',
          category: 'Análise de processo · Base real',
          title: 'Gargalos e retrabalho em um processo real',
          question: 'Onde o processo perde tempo, quando a demanda chega e onde há retrabalho?',
          description: 'Pipeline em Python e SQL que transforma o log de 141 mil eventos de um processo de atendimento real (base pública da UCI) em indicadores de prazo, retrabalho e picos de demanda, com testes de qualidade dos dados.',
          tags: ['SQL', 'Python', 'DuckDB', 'Power BI', 'Qualidade de dados'],
          links: [
            { label: 'GitHub', href: LINKS.repoPipeline, kind: 'github' },
            { label: 'Notebook no Kaggle', href: LINKS.kagglePipeline, kind: 'kaggle' },
          ],
          image: { ...IMG.pipeline, alt: 'Mapa de calor da demanda por dia da semana e hora' },
          details: [
            { heading: 'O que foi feito', items: ['Ingestão fiel do log bruto (Bronze), limpeza e modelo estrela (Silver) e cinco tabelas analíticas (Gold) exportadas para o Power BI.', 'Dez testes automáticos de qualidade de dados: chave única, datas coerentes, integridade entre tabelas e outros.', 'Versão exploratória em notebook, publicada no Kaggle.'] },
            { heading: 'Por que é relevante', items: ['Roda contra a base real de 24.918 casos sem nenhum ajuste no SQL.', 'Na base real, um teste falha: o prazo calculado concorda só 81,4% com o campo original, porque a regra de prazo da empresa não é conhecida. Isso está documentado, não escondido.'] },
          ],
        },
        {
          id: 'logistica',
          category: 'Dashboard · Qualidade do processo logístico',
          title: 'Logística: nível de serviço e falhas de entrega',
          question: 'As entregas chegam no prazo e completas? Onde e por que o processo falha?',
          description: 'Painel de nível de serviço (OTIF), prazo, custo de frete e produtividade de 3 centros de distribuição e 5 transportadoras, com uma frase no topo que diz onde está o problema.',
          tags: ['OTIF', 'Indicadores de processo', 'Análise de falhas', 'React', 'TypeScript'],
          links: [
            { label: 'Abrir painel', href: LINKS.painelLogistica, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoLogistica, kind: 'github' },
          ],
          image: { ...IMG.log, alt: 'Visão geral do painel de logística com OTIF, prazo, frete e avarias' },
          badge: 'Dados fictícios',
          details: [
            { heading: 'O que foi feito', items: ['OTIF (no prazo e completo) como indicador principal, em vez de só atraso médio: pune tanto o atraso quanto a entrega incompleta.', 'Frete sobre o valor transportado e custo por kg, por região e por transportadora, ao lado da produtividade de cada CD (linhas separadas por hora), para não reduzir custo escondendo perda de produtividade.', 'Motivos de falha, avarias e estoque, com filtros de período, CD e região.'] },
            { heading: 'Cenários simulados', items: ['Uma transportadora barata, mas que mais atrasa: a decisão real entre custo e confiabilidade.', 'Troca de sistema de armazém (WMS) em um CD, com queda temporária de produtividade, pico de Black Friday e alta do diesel.'] },
          ],
        },
        {
          id: 'servicedesk',
          category: 'Dashboard · Qualidade do atendimento',
          title: 'Service Desk: prazos, fila e satisfação',
          question: 'Os chamados são resolvidos no prazo? O que está para vencer e do que os usuários reclamam?',
          description: 'Painel de central de serviço com uma operação ao vivo (fila, analistas em pausa e nível de serviço minuto a minuto), SLA de resposta e resolução, fila com prazo consumido, desempenho por analista e comentários da pesquisa de satisfação agrupados em temas com ação sugerida.',
          tags: ['ITIL 4', 'SLA', 'Erlang C', 'CSAT', 'React', 'TypeScript'],
          links: [
            { label: 'Abrir painel', href: LINKS.painelServiceDesk, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoServiceDesk, kind: 'github' },
          ],
          image: { ...IMG.sd, alt: 'Visão geral do painel de Service Desk com prazos, satisfação e canais' },
          badge: 'Dados fictícios',
          details: [
            { heading: 'O que foi feito', items: ['Operação ao vivo: simulação de um dia útil com fila por canal e unidade, estado de cada analista (atendimento, pausa, almoço) com alerta de pausa estourada, e dimensionamento por Erlang C comparado à escala.', 'SLA de resposta e de resolução por prioridade, mediana do tempo de resolução, resolução no primeiro contato (FCR), reabertura e CSAT, como na prática de ITIL 4.', 'Fila com o quanto do prazo cada chamado já consumiu e mapa de calor da chegada por dia e hora, para agir antes de vencer e montar a escala.', 'Comentários da pesquisa agrupados em temas, cada um com uma ação de melhoria sugerida, e um assistente que responde perguntas comuns com os próprios números do painel.'] },
            { heading: 'Cenários simulados', items: ['Migração de e-mail que dobra os chamados e derruba a satisfação.', 'Portal de autoatendimento que reduz os chamados de senha, e uma queda de VPN com 64 chamados em uma manhã.'] },
          ],
        },
      ],
    },
    education: {
      title: 'Formação',
      degrees: [
        { course: 'Pós-graduação em Data Analytics & IA', school: 'Preditiva Analytics', period: 'ago. 2025 – jul. 2026', status: 'Concluído' },
        { course: 'Engenharia de Produção', school: 'UNIGRAN · Bacharelado', period: 'fev. 2026 – dez. 2029 (previsão)', status: 'Em andamento' },
        { course: 'Análise e Desenvolvimento de Sistemas', school: 'UNIGRAN EAD · Tecnólogo', period: 'fev. 2023 – jul. 2025', status: 'Concluído' },
      ],
      certTitle: 'Certificações',
      certs: [
        { name: 'Lean Six Sigma Yellow Belt', issuer: 'FM2S', date: 'mar. 2026' },
        { name: 'Metodologia Lean', issuer: 'FM2S', date: 'mai. 2026' },
        { name: 'Gestão da Qualidade', issuer: 'FM2S', date: 'abr. 2026' },
        { name: 'Análise e Melhoria de Processos', issuer: 'Enap', date: 'out. 2026' },
        { name: 'Mapeamento e Automação de Processos', issuer: 'Enap', date: 'out. 2026' },
        { name: 'Gestão de Riscos', issuer: 'Enap', date: 'out. 2026' },
        { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', date: 'nov. 2026' },
        { name: 'Kanban Essentials Certified (KEC)', issuer: 'SCRUMstudy', date: 'nov. 2026' },
        { name: 'OKR Fundamentals Certified (OKRFC)', issuer: 'SCRUMstudy', date: 'nov. 2026' },
        { name: 'Microsoft Excel para Análise de Dados', issuer: 'Preditiva Analytics', date: 'ago. 2026' },
        { name: 'Excel Avançado & Power BI', issuer: 'Preditiva Analytics', date: 'ago. 2026' },
        { name: 'SQL para Análise de Dados', issuer: 'Preditiva Analytics', date: 'ago. 2026' },
        { name: 'Inteligência Artificial', issuer: 'EBAC', date: 'ago. 2026' },
      ],
    },
    ui: { more: 'Ver mais', less: 'Ver menos' },
    contact: {
      title: 'Vamos conversar',
      text: 'Estou aberto a oportunidades em dados, processos e melhoria contínua. Se quiser trocar uma ideia sobre um projeto ou uma vaga, é só chamar.',
      email: 'Enviar e-mail',
    },
    footer: 'Todos os direitos reservados.',
  },

  en: {
    nav: { about: 'About', value: 'How I help', skills: 'Skills', projects: 'Projects', education: 'Education', certs: 'Certifications', contact: 'Contact', menu: 'Menu', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark', language: 'Language' },
    hero: {
      kicker: 'Data · Processes · Continuous improvement · Technology',
      title: 'Operational data that turns into improvement.',
      intro: "I'm Breno, a Production Engineering student with a postgraduate degree in Data Analytics & AI. I use data to understand problems, organize processes and check whether the improvement worked.",
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      ctaLinkedin: 'LinkedIn',
      photoAlt: 'Photo of Breno Silva',
      status: 'Open to opportunities',
      highlights: [
        { title: 'Data and dashboards', text: 'Power BI, Excel, SQL and Python to measure and decide' },
        { title: 'Processes', text: 'Process mapping, SIPOC, standardization and process KPIs' },
        { title: 'Continuous improvement', text: 'PDCA, Pareto, Lean Six Sigma and quality management' },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        "I'm a Production Engineering student with a postgraduate degree in Data Analytics & AI and a degree in Systems Analysis and Development. This mix brings together engineering's process view and data tools.",
        'I like to understand the problem before choosing the tool: look at the data, find the cause and measure whether the change worked. I use Power BI, SQL, Python and React to turn that into dashboards and systems people can actually use.',
        'The projects in this portfolio start from a fictional company and a real public dataset, and show how I think, from data to decision.',
      ],
      facts: [
        { value: '6', label: 'portfolio projects, from data to decision' },
        { value: '3', label: 'degrees: Systems Analysis and Development, Data Analytics & AI and Production Engineering (in progress)' },
        { value: 'Data', label: 'as the starting point to understand and improve processes' },
      ],
    },
    value: {
      title: 'How I help operations',
      lead: 'Three areas where I deliver results, from the problem on the floor to the action that fixes it.',
      items: [
        { title: 'Continuous improvement with method', text: 'Pareto, Ishikawa, 5 Whys, SPC and PDCA to go from symptom to root cause and check whether the action actually worked.' },
        { title: 'KPIs management understands', text: 'OEE, OTIF, nonconformities and deadlines in dashboards with targets, status and a plain-language sentence on top.' },
        { title: 'Standardized, traceable processes', text: 'Workflows with stage, owner and evidence, from logging the problem to verifying effectiveness, as ISO 9001 requires.' },
      ],
    },
    skills: {
      title: 'Skills',
      lead: 'Tools and methods I use in projects and at work.',
      groups: [
        { title: 'Quality', items: ['Lean Six Sigma', 'ISO 9001:2015', 'PDCA', 'SPC', 'Pareto and Ishikawa', '5 Whys and 5W2H', 'Risk management'] },
        { title: 'Processes', items: ['Process mapping', 'SIPOC', 'Standardization', 'Process KPIs', 'OEE', 'Scrum'] },
        { title: 'BI and spreadsheets', items: ['Power BI', 'DAX', 'Advanced Excel', 'Macros (VBA)'] },
        { title: 'Data', items: ['SQL', 'Python', 'pandas', 'DuckDB', 'Dimensional modeling'] },
        { title: 'Development', items: ['React', 'TypeScript', 'JavaScript', 'Git'] },
      ],
    },
    projects: {
      title: 'Featured projects',
      lead: 'Each project starts from an operational question. The system and the dashboards tell the story of one fictional company, Grupo Rotalume, from different angles: factory quality, people, delivery logistics and IT support. The scenarios were planted on purpose for the analysis to find; the pipeline uses a real public dataset.',
      question: 'Question',
      details: 'Details',
      close: 'Close',
      more: 'See more projects',
      less: 'See fewer projects',
      items: [
        {
          id: 'sgq',
          category: 'Web system · Quality management',
          title: 'SGQ Rotalume: quality management system',
          question: 'How do you get quality out of spreadsheets and enforce PDCA from nonconformity to proven effectiveness?',
          description: 'Web system aligned with ISO 9001:2015 with seven modules: nonconformities, processes with SIPOC, risks and opportunities, internal audits, documents, KPIs and management review. It has access roles, a change history and PDF reports.',
          tags: ['React', 'TypeScript', 'ISO 9001', 'PDCA', 'Ishikawa', '5W2H'],
          links: [
            { label: 'Open system', href: LINKS.sgq, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoSgq, kind: 'github' },
          ],
          image: { ...IMG.sgq, alt: 'SGQ Rotalume dashboard with pending items, KPIs and nonconformities' },
          badge: 'Fictional data',
          details: [
            { heading: 'What was built', items: ['Nonconformities in 5 PDCA stages, with 5 Whys, a 6M Ishikawa diagram and a 5W2H action plan. The system blocks moving on without a root cause and closing without evidence of effectiveness.', 'A 5×5 risk matrix, an internal audit checklist by ISO clause and a management review assembled automatically from the other modules.', 'Nonconformity report, audit report and management review minutes as PDFs, ready to sign.'] },
            { heading: 'Built like a product', items: ['Four roles (quality manager, process owner, auditor and reader), with a history of who changed what, when, and the previous value.', 'My pending items, deadline notifications and a global search across every module.', 'A data layer ready to swap the browser for a database, with automated tests running on GitHub.'] },
          ],
        },
        {
          id: 'qualidade',
          category: 'Dashboard · Industrial quality',
          title: 'Quality and processes',
          question: 'Is the plant efficient? Is the process stable? Which defects should we tackle first?',
          description: 'Cascading OEE, X̄-R control charts with Western Electric rules, defect Pareto and a PDCA board of corrective actions.',
          tags: ['SPC', 'OEE', 'Pareto', 'PDCA', 'ISO 9001', 'React'],
          links: [
            { label: 'Open dashboard', href: LINKS.painelQualidade, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoQualidade, kind: 'github' },
          ],
          image: { ...IMG.q, alt: 'Control chart of the quality dashboard' },
          badge: 'Fictional data',
          details: [
            { heading: 'What was done', items: ['OEE per line, broken down into availability, performance and quality.', 'X̄-R chart with computed limits and Western Electric rules to separate common from special-cause variation.', 'Cpk flagged as unreliable when the process is out of control, pointing to Ppk instead.', 'Root cause by the 6Ms of Ishikawa and corrective actions in the PDCA cycle (ISO 9001:2015, clause 10.2).'] },
            { heading: 'Simulated scenarios', items: ['Tool wear, a new untrained shift and humidity affecting painting.'] },
          ],
        },
        {
          id: 'people',
          category: 'Data and information security',
          title: 'People Analytics with security in the database',
          question: 'How do you show HR metrics without anyone seeing more data than they should?',
          description: 'HR dashboard (turnover, absenteeism, engagement and pay equity) where the database decides what each profile receives. The same query returns 523, 345, 158 or 0 records depending on who asks.',
          tags: ['LGPD', 'PostgreSQL', 'RLS', 'Audit trail', 'Next.js', 'TypeScript'],
          links: [
            { label: 'Open dashboard', href: LINKS.painelPeople, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoPeople, kind: 'github' },
          ],
          image: { ...IMG.pa, alt: 'People Analytics dashboard overview' },
          badge: 'Fictional data',
          details: [
            { heading: 'What was built', items: ['Row Level Security in PostgreSQL: the HR director sees the company, the HRBP their directorate, the manager their team and the analyst only groups.', 'Salary and national ID released by profile, with the ID masked; averages of groups under 5 people are hidden so no one can be identified.', 'A signed session that the database itself checks, and a log of every access to personal data that the app cannot delete.'] },
            { heading: 'How it is proven', items: ['A page runs 11 live attempts to bypass the rules, such as reading the table directly, swapping the session user and deleting the audit log. All are blocked or filtered by the database.', '21 automated tests against a real PostgreSQL, running on GitHub on every change.'] },
          ],
        },
        {
          id: 'pipeline',
          category: 'Process analysis · Real data',
          title: 'Bottlenecks and rework in a real process',
          question: 'Where does the process lose time, when does demand arrive and where is there rework?',
          description: 'Python and SQL pipeline that turns the 141k-event log of a real service process (UCI public dataset) into lead time, rework and demand-peak KPIs, with data quality tests.',
          tags: ['SQL', 'Python', 'DuckDB', 'Power BI', 'Data quality'],
          links: [
            { label: 'GitHub', href: LINKS.repoPipeline, kind: 'github' },
            { label: 'Kaggle notebook', href: LINKS.kagglePipeline, kind: 'kaggle' },
          ],
          image: { ...IMG.pipeline, alt: 'Heatmap of demand by weekday and hour' },
          details: [
            { heading: 'What was done', items: ['Faithful raw-log ingestion (Bronze), cleaning and star schema (Silver) and five analytical tables (Gold) exported to Power BI.', 'Ten automated data quality tests: unique key, consistent dates, referential integrity and more.', 'Exploratory notebook version published on Kaggle.'] },
            { heading: 'Why it matters', items: ['Runs on the real 24,918-case dataset with no SQL changes.', "On the real data one test fails: the computed deadline only matches the original field 81.4% of the time, because the company's deadline policy is unknown. This is documented, not hidden."] },
          ],
        },
        {
          id: 'logistica',
          category: 'Dashboard · Logistics process quality',
          title: 'Logistics: service level and delivery failures',
          question: 'Do deliveries arrive on time and in full? Where and why does the process fail?',
          description: 'Service level (OTIF), lead time, freight cost and productivity dashboard for 3 distribution centers and 5 carriers, with a sentence on top that says where the problem is.',
          tags: ['OTIF', 'Process KPIs', 'Failure analysis', 'React', 'TypeScript'],
          links: [
            { label: 'Open dashboard', href: LINKS.painelLogistica, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoLogistica, kind: 'github' },
          ],
          image: { ...IMG.log, alt: 'Logistics dashboard overview with OTIF, lead time, freight and damage' },
          badge: 'Fictional data',
          details: [
            { heading: 'What was built', items: ['OTIF (on time, in full) as the main KPI instead of average delay alone: it penalizes both late and incomplete deliveries.', 'Freight as a share of shipped value and cost per kg, by region and carrier, next to each DC\'s productivity (lines picked per hour), so costs are not cut by hiding a productivity drop.', 'Failure reasons, damage and inventory, with period, DC and region filters.'] },
            { heading: 'Simulated scenarios', items: ['A cheap carrier that is late most often: the real trade-off between cost and reliability.', 'A warehouse management system (WMS) migration at one DC with a temporary productivity drop, a Black Friday peak and a diesel price increase.'] },
          ],
        },
        {
          id: 'servicedesk',
          category: 'Dashboard · Service quality',
          title: 'Service Desk: deadlines, queue and satisfaction',
          question: 'Are tickets resolved on time? What is about to breach, and what do users complain about?',
          description: 'Service desk dashboard with a live operations view (queue, agents on break and service level minute by minute), response and resolution SLA, a queue showing how much of each deadline is used up, per-analyst performance and satisfaction-survey comments grouped into themes with a suggested action.',
          tags: ['ITIL 4', 'SLA', 'Erlang C', 'CSAT', 'React', 'TypeScript'],
          links: [
            { label: 'Open dashboard', href: LINKS.painelServiceDesk, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoServiceDesk, kind: 'github' },
          ],
          image: { ...IMG.sd, alt: 'Service Desk dashboard overview with SLA, satisfaction and channels' },
          badge: 'Fictional data',
          details: [
            { heading: 'What was built', items: ['Live operations: a simulated workday with the queue by channel and site, each agent\'s state (handling, break, lunch) with overrun alerts, and Erlang C staffing compared with the schedule.', 'Response and resolution SLA by priority, median resolution time, first contact resolution (FCR), reopen rate and CSAT, following ITIL 4 practice.', 'A queue showing how much of each deadline is used up and a heat map of arrivals by weekday and hour, to act before breaches and plan staffing.', 'Survey comments grouped into themes, each with a suggested improvement, and an assistant that answers common questions with the dashboard\'s own numbers.'] },
            { heading: 'Simulated scenarios', items: ['An e-mail migration that doubles tickets and drops satisfaction.', 'A self-service portal that cuts password tickets, and a VPN outage with 64 tickets in one morning.'] },
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      degrees: [
        { course: 'Postgraduate degree in Data Analytics & AI', school: 'Preditiva Analytics', period: 'Aug 2025 – Jul 2026', status: 'Completed' },
        { course: 'Production Engineering', school: "UNIGRAN · Bachelor's degree", period: 'Feb 2026 – Dec 2029 (expected)', status: 'In progress' },
        { course: 'Systems Analysis and Development', school: 'UNIGRAN EAD · Technology degree', period: 'Feb 2023 – Jul 2025', status: 'Completed' },
      ],
      certTitle: 'Certifications',
      certs: [
        { name: 'Lean Six Sigma Yellow Belt', issuer: 'FM2S', date: 'Mar 2026' },
        { name: 'Lean Methodology', issuer: 'FM2S', date: 'May 2026' },
        { name: 'Quality Management', issuer: 'FM2S', date: 'Apr 2026' },
        { name: 'Process Analysis and Improvement', issuer: 'Enap', date: 'Oct 2026' },
        { name: 'Process Mapping and Automation', issuer: 'Enap', date: 'Oct 2026' },
        { name: 'Risk Management', issuer: 'Enap', date: 'Oct 2026' },
        { name: 'Scrum Fundamentals Certified (SFC)', issuer: 'SCRUMstudy', date: 'Nov 2026' },
        { name: 'Kanban Essentials Certified (KEC)', issuer: 'SCRUMstudy', date: 'Nov 2026' },
        { name: 'OKR Fundamentals Certified (OKRFC)', issuer: 'SCRUMstudy', date: 'Nov 2026' },
        { name: 'Microsoft Excel for Data Analysis', issuer: 'Preditiva Analytics', date: 'Aug 2026' },
        { name: 'Advanced Excel & Power BI', issuer: 'Preditiva Analytics', date: 'Aug 2026' },
        { name: 'SQL for Data Analysis', issuer: 'Preditiva Analytics', date: 'Aug 2026' },
        { name: 'Artificial Intelligence', issuer: 'EBAC', date: 'Aug 2026' },
      ],
    },
    ui: { more: 'Show more', less: 'Show less' },
    contact: {
      title: "Let's talk",
      text: "I'm open to opportunities in data, processes and continuous improvement. If you want to talk about a project or a role, just reach out.",
      email: 'Send an email',
    },
    footer: 'All rights reserved.',
  },
};
