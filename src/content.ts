/*
 * Todo o texto e todos os links do portfólio ficam aqui.
 * Para editar uma frase, um link ou um projeto, mexa só neste arquivo.
 */
import breno from '@/assets/breno.webp';
import pipeline from '@/assets/projects/pipeline.webp';
import titanic from '@/assets/projects/titanic.webp';
import sdLight from '@/assets/projects/servicedesk-light.webp';
import sdDark from '@/assets/projects/servicedesk-dark.webp';
import qLight from '@/assets/projects/qualidade-light.webp';
import qDark from '@/assets/projects/qualidade-dark.webp';

export type Language = 'pt' | 'en';

/* ---------- links (os mesmos nos dois idiomas) ---------- */
export const LINKS = {
  email: 'brenoosbr@outlook.com',
  whatsapp: 'https://wa.me/5522997789693?text=Ol%C3%A1%20Breno,%20vim%20do%20seu%20portf%C3%B3lio!',
  linkedin: 'https://www.linkedin.com/in/brenosilvarangel/',
  github: 'https://github.com/Oberon-23',
  kaggle: 'https://www.kaggle.com/brenosilvabarros',
  cv: '/Breno_Barros_DataAnalyst_Jr.pdf',
  // Painéis publicados na Vercel: confira se os endereços batem com os do seu painel da Vercel.
  painelServiceDesk: 'https://painel-servicedesk-rotalume.vercel.app',
  painelQualidade: 'https://painel-qualidade-rotalume.vercel.app',
  repoPipeline: 'https://github.com/Oberon-23/service-desk-analytics-mvp',
  kagglePipeline: 'https://www.kaggle.com/code/brenosilvabarros/an-lise-de-chamados-de-service-desk-itsm-real',
  repoServiceDesk: 'https://github.com/Oberon-23/painel-servicedesk-rotalume',
  repoQualidade: 'https://github.com/Oberon-23/painel-qualidade-rotalume',
  repoTitanic: 'https://github.com/Oberon-23/titanic-eda-analise-exploratoria',
  kaggleTitanic: 'https://www.kaggle.com/code/brenosilvabarros/titanic-eda-an-lise-explorat-ria-completa',
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
  nav: { about: string; value: string; skills: string; projects: string; education: string; contact: string; menu: string; theme: string; system: string; light: string; dark: string; language: string };
  hero: { kicker: string; title: string; intro: string; ctaProjects: string; ctaCv: string; ctaLinkedin: string; photoAlt: string; status: string; statusText: string; highlights: { title: string; text: string }[] };
  about: { title: string; paragraphs: string[]; facts: { value: string; label: string }[] };
  value: { title: string; lead: string; items: { title: string; text: string }[] };
  skills: { title: string; lead: string; groups: { title: string; items: string[] }[] };
  projects: { title: string; lead: string; question: string; details: string; close: string; items: Project[] };
  education: { title: string; degrees: { course: string; school: string; status: string }[]; certTitle: string; certs: { name: string; issuer: string; date?: string }[] };
  contact: { title: string; text: string; email: string; cv: string };
  footer: string;
}

const IMG = {
  pipeline: { light: pipeline, dark: pipeline },
  sd: { light: sdLight, dark: sdDark },
  q: { light: qLight, dark: qDark },
  titanic: { light: titanic, dark: titanic },
};

export const CONTENT: Record<Language, Content> = {
  pt: {
    nav: { about: 'Sobre', value: 'Como ajudo', skills: 'Competências', projects: 'Projetos', education: 'Formação', contact: 'Contato', menu: 'Menu', theme: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Escuro', language: 'Idioma' },
    hero: {
      kicker: 'Análise de dados · Qualidade · Operações',
      title: 'Dados de operação que viram decisão.',
      intro: 'Sou o Breno, pós-graduado em Data Analytics & IA e estudante de Engenharia de Produção. Transformo dados do dia a dia da operação (chamados, produção, qualidade) em indicadores, painéis e análises que mostram onde agir.',
      ctaProjects: 'Ver projetos',
      ctaCv: 'Currículo',
      ctaLinkedin: 'LinkedIn',
      photoAlt: 'Foto de Breno Silva',
      status: 'Aberto a oportunidades',
      statusText: 'Dados, qualidade e processos',
      highlights: [
        { title: 'Python e SQL', text: 'Limpeza, modelagem e pipelines reprodutíveis' },
        { title: 'Power BI e painéis', text: 'Indicadores com meta, contexto e leitura simples' },
        { title: 'Qualidade e melhoria', text: 'PDCA, CEP, Pareto e Lean Six Sigma' },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Trabalho como analista de suporte corporativo em um projeto do setor de óleo e gás, onde também sou o ponto focal de qualidade da equipe. Além do atendimento, crio macros, planilhas e painéis em Power BI que ajudam a supervisão a acompanhar os indicadores.',
        'Sou formado em Análise e Desenvolvimento de Sistemas, pós-graduado em Data Analytics & IA e curso Engenharia de Produção. Essa combinação junta a visão de processo da engenharia com as ferramentas de dados: primeiro entender o problema da operação, depois escolher a ferramenta.',
        'Na minha equipe, criei um programa de reconhecimento da qualidade baseado em PDCA e em indicadores de satisfação, que conecta o que medimos ao que fazemos para melhorar.',
      ],
      facts: [
        { value: '141 mil', label: 'eventos reais de ServiceNow analisados no projeto de pipeline' },
        { value: '4', label: 'projetos publicados, com código aberto no GitHub' },
        { value: 'PDCA', label: 'como método para ir do indicador à ação' },
      ],
    },
    value: {
      title: 'Como ajudo com dados',
      lead: 'Três frentes em que eu gero resultado, do dado bruto até a decisão.',
      items: [
        { title: 'Indicadores que a gestão entende', text: 'Painéis com meta, situação e uma frase em português simples no topo, para quem decide perceber em segundos o que está fora do esperado.' },
        { title: 'Dados confiáveis do início ao fim', text: 'Pipelines em Python e SQL com camadas, testes de qualidade e documentação, para que o número do painel seja o mesmo da origem.' },
        { title: 'Melhoria contínua com método', text: 'Pareto, Ishikawa, CEP e PDCA para ir do sintoma à causa raiz e acompanhar se a ação de fato funcionou.' },
      ],
    },
    skills: {
      title: 'Competências',
      lead: 'Ferramentas e métodos que uso nos projetos e no trabalho.',
      groups: [
        { title: 'Dados', items: ['Python', 'pandas', 'SQL', 'DuckDB', 'Jupyter', 'Modelagem dimensional'] },
        { title: 'BI e visualização', items: ['Power BI', 'DAX', 'Excel avançado', 'Macros (VBA)', 'Matplotlib e Seaborn', 'Chart.js'] },
        { title: 'Qualidade e processos', items: ['Lean Six Sigma', 'ISO 9001:2015', 'PDCA', 'CEP', 'Pareto e Ishikawa', 'OEE'] },
        { title: 'Operações e gestão', items: ['ITIL 4', 'ServiceNow', 'Scrum'] },
        { title: 'Desenvolvimento', items: ['HTML e CSS', 'JavaScript', 'React', 'TypeScript', 'Git'] },
      ],
    },
    projects: {
      title: 'Projetos em destaque',
      lead: 'Cada projeto parte de uma pergunta de negócio. Os painéis usam dados fictícios com cenários colocados de propósito; o pipeline e o Titanic usam bases públicas reais.',
      question: 'Pergunta',
      details: 'Detalhes',
      close: 'Fechar',
      items: [
        {
          id: 'pipeline',
          category: 'Engenharia de dados · Base real',
          title: 'Service Desk Analytics',
          question: 'Onde o suporte perde tempo, quando a demanda chega e onde há retrabalho?',
          description: 'Pipeline em camadas (Bronze, Silver e Gold) em Python e SQL sobre DuckDB, que transforma 141 mil eventos reais de ServiceNow (base pública da UCI) em indicadores de SLA, retrabalho e picos de demanda.',
          tags: ['Python', 'SQL', 'DuckDB', 'pandas', 'Power BI'],
          links: [
            { label: 'GitHub', href: LINKS.repoPipeline, kind: 'github' },
            { label: 'Notebook no Kaggle', href: LINKS.kagglePipeline, kind: 'kaggle' },
          ],
          image: { ...IMG.pipeline, alt: 'Mapa de calor com os chamados por dia da semana e hora' },
          details: [
            { heading: 'O que foi feito', items: ['Ingestão fiel do log bruto (Bronze), limpeza e modelo estrela (Silver) e cinco tabelas analíticas (Gold) exportadas para o Power BI.', 'Dez testes automáticos de qualidade de dados: chave única, datas coerentes, integridade entre tabelas e outros.', 'Versão exploratória em notebook, publicada no Kaggle.'] },
            { heading: 'Por que é relevante', items: ['Roda contra a base real de 24.918 incidentes sem nenhum ajuste no SQL.', 'Na base real, um teste falha: o SLA calculado concorda só 81,4% com o campo original, porque a política de SLA da empresa não é conhecida. Isso está documentado, não escondido.'] },
          ],
        },
        {
          id: 'servicedesk',
          category: 'Dashboard · Inteligência artificial',
          title: 'Service Desk com assistente de IA',
          question: 'Estamos cumprindo o prazo? O que está vencido? Do que os usuários reclamam?',
          description: 'Painel de SLA, fila, equipe e satisfação com um assistente que responde perguntas consultando os próprios dados do painel e mostra de onde veio cada número.',
          tags: ['JavaScript', 'Chart.js', 'IA (tool use)', 'ITIL 4'],
          links: [
            { label: 'Abrir painel', href: LINKS.painelServiceDesk, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoServiceDesk, kind: 'github' },
          ],
          image: { ...IMG.sd, alt: 'Tela do assistente de IA do painel de Service Desk' },
          badge: 'Dados fictícios',
          details: [
            { heading: 'O que foi feito', items: ['Indicadores de ITSM: SLA de resposta e resolução, resolução no primeiro contato, reabertura e CSAT.', 'Assistente que usa cinco ferramentas de consulta (indicadores, quebra por dimensão, fila, comentários e tendência) em vez de inventar números.', 'Fora do Claude, funciona em modo demonstração, com respostas calculadas no navegador e sem chave de API no código.'] },
            { heading: 'Cenários simulados', items: ['Migração de e-mail que derruba a satisfação, portal de autoatendimento que reduz chamados de senha e uma queda de VPN.'] },
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
          id: 'titanic',
          category: 'Análise exploratória',
          title: 'Titanic: o que explica a sobrevivência',
          question: 'Quais fatores influenciaram a sobrevivência no naufrágio?',
          description: 'Análise exploratória dos 891 passageiros: tratamento de dados ausentes, análises univariada e bivariada e matriz de correlação.',
          tags: ['Python', 'pandas', 'Matplotlib', 'Seaborn'],
          links: [
            { label: 'Notebook no Kaggle', href: LINKS.kaggleTitanic, kind: 'kaggle' },
            { label: 'GitHub', href: LINKS.repoTitanic, kind: 'github' },
          ],
          image: { ...IMG.titanic, alt: 'Mapa de calor da taxa de sobrevivência por classe e sexo' },
          details: [
            { heading: 'Principais achados', items: ['Mulheres tiveram cerca de 74% de sobrevivência, contra 19% dos homens.', 'Na 1ª classe, a sobrevivência foi de cerca de 63%; na 3ª, de 24%.', 'Os dados confirmam a prioridade "mulheres e crianças primeiro".'] },
          ],
        },
      ],
    },
    education: {
      title: 'Formação',
      degrees: [
        { course: 'Pós-graduação em Data Analytics & IA', school: 'Preditiva Analytics', status: 'Concluído' },
        { course: 'Engenharia de Produção', school: 'UNIGRAN', status: 'Em andamento' },
        { course: 'Análise e Desenvolvimento de Sistemas', school: 'Graduação tecnológica', status: 'Concluído' },
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
        { name: 'Excel Avançado & Power BI', issuer: 'Udemy', date: 'set. 2026' },
        { name: 'SQL para Análise de Dados', issuer: 'Udemy' },
        { name: 'Inteligência Artificial', issuer: 'EBAC', date: 'ago. 2026' },
      ],
    },
    contact: {
      title: 'Vamos conversar',
      text: 'Estou aberto a oportunidades em análise de dados, qualidade e melhoria contínua. Se quiser trocar uma ideia sobre um projeto ou uma vaga, é só chamar.',
      email: 'Enviar e-mail',
      cv: 'Baixar currículo',
    },
    footer: 'Todos os direitos reservados.',
  },

  en: {
    nav: { about: 'About', value: 'How I help', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact', menu: 'Menu', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark', language: 'Language' },
    hero: {
      kicker: 'Data analytics · Quality · Operations',
      title: 'Operational data that turns into decisions.',
      intro: "I'm Breno, a Data Analytics & AI postgraduate and Production Engineering student. I turn everyday operational data (tickets, production, quality) into KPIs, dashboards and analyses that show where to act.",
      ctaProjects: 'See projects',
      ctaCv: 'Résumé',
      ctaLinkedin: 'LinkedIn',
      photoAlt: 'Photo of Breno Silva',
      status: 'Open to opportunities',
      statusText: 'Data, quality and processes',
      highlights: [
        { title: 'Python and SQL', text: 'Cleaning, modeling and reproducible pipelines' },
        { title: 'Power BI and dashboards', text: 'KPIs with targets, context and plain-language reading' },
        { title: 'Quality and improvement', text: 'PDCA, SPC, Pareto and Lean Six Sigma' },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        "I work as a corporate support analyst on an oil and gas project, where I'm also my team's quality focal point. Besides user support, I build macros, spreadsheets and Power BI dashboards that help supervisors track KPIs.",
        "I hold a degree in Systems Analysis and Development and a postgraduate degree in Data Analytics & AI, and I'm studying Production Engineering. This mix brings together engineering's process view and data tools: understand the operational problem first, then pick the tool.",
        'On my team, I created a quality recognition program based on PDCA and satisfaction metrics, linking what we measure to what we do to improve.',
      ],
      facts: [
        { value: '141k', label: 'real ServiceNow events analyzed in the pipeline project' },
        { value: '4', label: 'published projects, open source on GitHub' },
        { value: 'PDCA', label: 'as the method to go from KPI to action' },
      ],
    },
    value: {
      title: 'How I help with data',
      lead: 'Three areas where I deliver results, from raw data to decision.',
      items: [
        { title: 'KPIs management understands', text: 'Dashboards with targets, status and a plain-language sentence on top, so decision makers see in seconds what is off track.' },
        { title: 'Reliable data end to end', text: 'Layered Python and SQL pipelines with data quality tests and documentation, so the number on the dashboard matches the source.' },
        { title: 'Continuous improvement with method', text: 'Pareto, Ishikawa, SPC and PDCA to go from symptom to root cause and check whether the action actually worked.' },
      ],
    },
    skills: {
      title: 'Skills',
      lead: 'Tools and methods I use in projects and at work.',
      groups: [
        { title: 'Data', items: ['Python', 'pandas', 'SQL', 'DuckDB', 'Jupyter', 'Dimensional modeling'] },
        { title: 'BI and visualization', items: ['Power BI', 'DAX', 'Advanced Excel', 'Macros (VBA)', 'Matplotlib and Seaborn', 'Chart.js'] },
        { title: 'Quality and processes', items: ['Lean Six Sigma', 'ISO 9001:2015', 'PDCA', 'SPC', 'Pareto and Ishikawa', 'OEE'] },
        { title: 'Operations and management', items: ['ITIL 4', 'ServiceNow', 'Scrum'] },
        { title: 'Development', items: ['HTML and CSS', 'JavaScript', 'React', 'TypeScript', 'Git'] },
      ],
    },
    projects: {
      title: 'Featured projects',
      lead: 'Each project starts from a business question. The dashboards use fictional data with deliberately planted scenarios; the pipeline and Titanic use real public datasets.',
      question: 'Question',
      details: 'Details',
      close: 'Close',
      items: [
        {
          id: 'pipeline',
          category: 'Data engineering · Real data',
          title: 'Service Desk Analytics',
          question: 'Where does support lose time, when does demand arrive and where is there rework?',
          description: 'Layered pipeline (Bronze, Silver and Gold) in Python and SQL on DuckDB that turns 141k real ServiceNow events (UCI public dataset) into SLA, rework and demand-peak KPIs.',
          tags: ['Python', 'SQL', 'DuckDB', 'pandas', 'Power BI'],
          links: [
            { label: 'GitHub', href: LINKS.repoPipeline, kind: 'github' },
            { label: 'Kaggle notebook', href: LINKS.kagglePipeline, kind: 'kaggle' },
          ],
          image: { ...IMG.pipeline, alt: 'Heatmap of tickets by weekday and hour' },
          details: [
            { heading: 'What was done', items: ['Faithful raw-log ingestion (Bronze), cleaning and star schema (Silver) and five analytical tables (Gold) exported to Power BI.', 'Ten automated data quality tests: unique key, consistent dates, referential integrity and more.', 'Exploratory notebook version published on Kaggle.'] },
            { heading: 'Why it matters', items: ['Runs on the real 24,918-incident dataset with no SQL changes.', "On the real data one test fails: the computed SLA only matches the original field 81.4% of the time, because the company's SLA policy is unknown. This is documented, not hidden."] },
          ],
        },
        {
          id: 'servicedesk',
          category: 'Dashboard · Artificial intelligence',
          title: 'Service Desk with an AI assistant',
          question: 'Are we meeting deadlines? What is overdue? What are users complaining about?',
          description: "SLA, queue, team and satisfaction dashboard with an assistant that answers questions by querying the dashboard's own data and shows where each number came from.",
          tags: ['JavaScript', 'Chart.js', 'AI (tool use)', 'ITIL 4'],
          links: [
            { label: 'Open dashboard', href: LINKS.painelServiceDesk, kind: 'demo' },
            { label: 'GitHub', href: LINKS.repoServiceDesk, kind: 'github' },
          ],
          image: { ...IMG.sd, alt: 'AI assistant screen of the Service Desk dashboard' },
          badge: 'Fictional data',
          details: [
            { heading: 'What was done', items: ['ITSM KPIs: response and resolution SLA, first contact resolution, reopen rate and CSAT.', 'An assistant that uses five query tools (KPIs, breakdown, queue, comments and trend) instead of making numbers up.', 'Outside Claude it runs in demo mode, with answers computed in the browser and no API key in the code.'] },
            { heading: 'Simulated scenarios', items: ['An email migration that lowers satisfaction, a self-service portal that cuts password tickets and a VPN outage.'] },
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
          id: 'titanic',
          category: 'Exploratory analysis',
          title: 'Titanic: what explains survival',
          question: 'Which factors influenced survival in the shipwreck?',
          description: 'Exploratory analysis of 891 passengers: missing-data treatment, univariate and bivariate analysis and a correlation matrix.',
          tags: ['Python', 'pandas', 'Matplotlib', 'Seaborn'],
          links: [
            { label: 'Kaggle notebook', href: LINKS.kaggleTitanic, kind: 'kaggle' },
            { label: 'GitHub', href: LINKS.repoTitanic, kind: 'github' },
          ],
          image: { ...IMG.titanic, alt: 'Heatmap of survival rate by class and sex' },
          details: [
            { heading: 'Key findings', items: ['Women had about 74% survival, versus 19% for men.', 'First class survival was about 63%; third class, 24%.', 'The data confirms the "women and children first" priority.'] },
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      degrees: [
        { course: 'Postgraduate degree in Data Analytics & AI', school: 'Preditiva Analytics', status: 'Completed' },
        { course: 'Production Engineering', school: 'UNIGRAN', status: 'In progress' },
        { course: 'Systems Analysis and Development', school: 'Technology degree', status: 'Completed' },
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
        { name: 'Advanced Excel & Power BI', issuer: 'Udemy', date: 'Sep 2026' },
        { name: 'SQL for Data Analysis', issuer: 'Udemy' },
        { name: 'Artificial Intelligence', issuer: 'EBAC', date: 'Aug 2026' },
      ],
    },
    contact: {
      title: "Let's talk",
      text: "I'm open to opportunities in data analytics, quality and continuous improvement. If you want to talk about a project or a role, just reach out.",
      email: 'Send an email',
      cv: 'Download résumé',
    },
    footer: 'All rights reserved.',
  },
};
