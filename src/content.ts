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
  hero: { kicker: string; title: string; intro: string; ctaProjects: string; ctaContact: string; ctaLinkedin: string; photoAlt: string; status: string; statusText: string; highlights: { title: string; text: string }[] };
  about: { title: string; paragraphs: string[]; facts: { value: string; label: string }[] };
  value: { title: string; lead: string; items: { title: string; text: string }[] };
  skills: { title: string; lead: string; groups: { title: string; items: string[] }[] };
  projects: { title: string; lead: string; question: string; details: string; close: string; items: Project[] };
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
};

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: { about: 'Sobre', value: 'Como ajudo', skills: 'Competências', projects: 'Projetos', education: 'Formação', certs: 'Certificações', contact: 'Contato', menu: 'Menu', theme: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Escuro', language: 'Idioma' },
    hero: {
      kicker: 'Qualidade · Processos · Melhoria contínua · Análise de dados',
      title: 'Dados de operação que viram melhoria.',
      intro: 'Sou o Breno, estudante de Engenharia de Produção, pós-graduado em Data Analytics & IA e ponto focal de qualidade na minha equipe. Uso dados da operação para achar a causa dos problemas, padronizar processos e acompanhar se a melhoria funcionou.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Fale comigo',
      ctaLinkedin: 'LinkedIn',
      photoAlt: 'Foto de Breno Silva',
      status: 'Aberto a oportunidades',
      statusText: 'Qualidade e processos',
      highlights: [
        { title: 'Qualidade e melhoria', text: 'PDCA, CEP, Pareto, ISO 9001 e Lean Six Sigma' },
        { title: 'Processos', text: 'Mapeamento, SIPOC, padronização e indicadores de processo' },
        { title: 'Dados e painéis', text: 'Power BI, Excel, SQL e Python para medir e decidir' },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Sou o ponto focal de qualidade de uma equipe de 18 pessoas em um projeto de óleo e gás na Bacia de Campos. Acompanho os indicadores de qualidade e satisfação com a supervisão e crio planilhas, macros e painéis em Power BI para o controle dos resultados.',
        'Curso Engenharia de Produção, sou pós-graduado em Data Analytics & IA e formado em Análise e Desenvolvimento de Sistemas. Essa combinação junta a visão de processo da engenharia com as ferramentas de dados: primeiro entender o problema da operação, depois escolher a ferramenta.',
        'Na minha equipe, criei um programa de reconhecimento da qualidade baseado em PDCA e em indicadores de satisfação, que conecta o que medimos ao que fazemos para melhorar.',
      ],
      facts: [
        { value: '18', label: 'pessoas na equipe em que sou ponto focal de qualidade' },
        { value: 'ISO 9001', label: 'como base do sistema de gestão da qualidade que desenvolvi' },
        { value: 'PDCA', label: 'como método para ir do indicador à ação' },
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
      lead: 'Cada projeto parte de uma pergunta da operação. O sistema e os painéis usam dados fictícios de uma fábrica, a Rotalume, com cenários colocados de propósito; o pipeline usa uma base pública real.',
      question: 'Pergunta',
      details: 'Detalhes',
      close: 'Fechar',
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
          tags: ['CEP', 'OEE', 'Pareto', 'PDCA', 'ISO 9001'],
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
          tags: ['OTIF', 'Indicadores de processo', 'Análise de falhas', 'Chart.js'],
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
        { name: 'Microsoft Excel para Análise de Dados', issuer: 'Preditiva Analytics', date: 'ago. 2026' },
        { name: 'Excel Avançado & Power BI', issuer: 'Preditiva Analytics', date: 'ago. 2026' },
        { name: 'SQL para Análise de Dados', issuer: 'Preditiva Analytics', date: 'ago. 2026' },
        { name: 'Inteligência Artificial', issuer: 'EBAC', date: 'ago. 2026' },
      ],
    },
    ui: { more: 'Ver mais', less: 'Ver menos' },
    contact: {
      title: 'Vamos conversar',
      text: 'Estou aberto a oportunidades em qualidade, processos e melhoria contínua na indústria. Se quiser trocar uma ideia sobre um projeto ou uma vaga, é só chamar.',
      email: 'Enviar e-mail',
    },
    footer: 'Todos os direitos reservados.',
  },

  en: {
    nav: { about: 'About', value: 'How I help', skills: 'Skills', projects: 'Projects', education: 'Education', certs: 'Certifications', contact: 'Contact', menu: 'Menu', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark', language: 'Language' },
    hero: {
      kicker: 'Quality · Processes · Continuous improvement · Data analytics',
      title: 'Operational data that turns into improvement.',
      intro: "I'm Breno, a Production Engineering student, Data Analytics & AI postgraduate and my team's quality focal point. I use operational data to find the root cause of problems, standardize processes and check whether the improvement worked.",
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      ctaLinkedin: 'LinkedIn',
      photoAlt: 'Photo of Breno Silva',
      status: 'Open to opportunities',
      statusText: 'Quality and processes',
      highlights: [
        { title: 'Quality and improvement', text: 'PDCA, SPC, Pareto, ISO 9001 and Lean Six Sigma' },
        { title: 'Processes', text: 'Process mapping, SIPOC, standardization and process KPIs' },
        { title: 'Data and dashboards', text: 'Power BI, Excel, SQL and Python to measure and decide' },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        "I'm the quality focal point of an 18-person team on an oil and gas project in the Campos Basin, Brazil. I track quality and satisfaction KPIs with the supervisors and build spreadsheets, macros and Power BI dashboards to monitor results.",
        "I'm studying Production Engineering, hold a postgraduate degree in Data Analytics & AI and a degree in Systems Analysis and Development. This mix brings together engineering's process view and data tools: understand the operational problem first, then pick the tool.",
        'On my team, I created a quality recognition program based on PDCA and satisfaction metrics, linking what we measure to what we do to improve.',
      ],
      facts: [
        { value: '18', label: 'people on the team where I am the quality focal point' },
        { value: 'ISO 9001', label: 'as the basis of the quality management system I built' },
        { value: 'PDCA', label: 'as the method to go from KPI to action' },
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
      lead: 'Each project starts from an operational question. The system and the dashboards use fictional data from a factory, Rotalume, with deliberately planted scenarios; the pipeline uses a real public dataset.',
      question: 'Question',
      details: 'Details',
      close: 'Close',
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
          tags: ['SPC', 'OEE', 'Pareto', 'PDCA', 'ISO 9001'],
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
          tags: ['OTIF', 'Process KPIs', 'Failure analysis', 'Chart.js'],
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
        { name: 'Microsoft Excel for Data Analysis', issuer: 'Preditiva Analytics', date: 'Aug 2026' },
        { name: 'Advanced Excel & Power BI', issuer: 'Preditiva Analytics', date: 'Aug 2026' },
        { name: 'SQL for Data Analysis', issuer: 'Preditiva Analytics', date: 'Aug 2026' },
        { name: 'Artificial Intelligence', issuer: 'EBAC', date: 'Aug 2026' },
      ],
    },
    ui: { more: 'Show more', less: 'Show less' },
    contact: {
      title: "Let's talk",
      text: "I'm open to opportunities in quality, processes and continuous improvement in industry. If you want to talk about a project or a role, just reach out.",
      email: 'Send an email',
    },
    footer: 'All rights reserved.',
  },
};
