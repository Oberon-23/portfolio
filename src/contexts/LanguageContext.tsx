import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Sobre',
    'nav.technology': 'Tecnologias',
    'nav.portfolio': 'Portfólio',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Breno',
    'hero.role': 'Análises Operacionais',
    'hero.description': 'Estudante de Engenharia de Produção com foco em Análise Operacional, Melhoria Contínua e Gestão da Qualidade. Experiência em monitoramento de KPIs, suporte operacional e análise de dados aplicada a operações industriais e de serviços utilizando Power BI, SQL, Python e Excel.',
    'hero.cta': 'Ver Projetos',
    'hero.about': 'Sobre Mim',
    
    // About
    'about.title': 'Um pouco sobre mim',
    'about.description': 'Sou movido pelo desafio de melhorar operações por meio de dados, otimização de processos e iniciativas de melhoria contínua. Minha trajetória combina experiência operacional, pensamento analítico e tecnologia para apoiar a tomada de decisão e a excelência operacional. Utilizo Power BI, SQL, Python e Excel para transformar dados operacionais em insights aplicáveis a ambientes industriais e corporativos.',
    'about.download': 'Baixar CV',
    
    // Technology
    'tech.title': 'Tecnologias & Stacks',
    'tech.frontend': 'Front-End',
    'tech.dataAnalysis': 'Análise de Dados',
    
    // Portfolio
    'portfolio.title': 'Meus Projetos',
    'portfolio.description': 'Aqui estão alguns projetos que representam minha trajetória em Análise Operacional, Engenharia e melhoria contínua orientada por dados. Cada projeto reflete minha experiência com indicadores operacionais, análise de dados, otimização de processos e visualização de informações utilizando Power BI, Python, SQL e Excel aplicados a contextos industriais e corporativos.',
    'portfolio.viewProject': 'Ver Projeto',
    
    // Projects
    'project.analysis.title': 'Titanic - Análise Exploratória de Dados',
    'project.analysis.description': 'Análise exploratória completa do dataset do Titanic com 891 registros, investigando padrões de sobrevivência por sexo, classe e idade.',
    'project.dashboard.title': 'Manutenção Preditiva - AI4I Dataset',
    'project.dashboard.description': 'Análise exploratória do dataset AI4I 2020 com 10.000 registros de sensores industriais, investigando padrões de falha por tipo de equipamento, temperatura e desgaste de ferramenta.',
    'project.kpis.title': 'Dashboard KPIs Operacionais',
    'project.kpis.description': 'Dashboard interativo com dados reais de produção de Petróleo e Gás Natural no Brasil entre 2020 e 2024, monitorando KPIs operacionais como volume produzido, variação anual e desempenho por bacia.',
  
    // Contact
    'contact.title': 'Venha conversar comigo!',
    'contact.description': 'Aberto a oportunidades em Engenharia de Produção, Análise Operacional, Gestão da Qualidade e Melhoria Contínua. Vamos conversar sobre operações orientadas por dados e otimização industrial.',
    'contact.cta': 'Entrar em Contato',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.technology': 'Technologies',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Breno',
    'hero.role': 'Operational Data Analytics',
    'hero.description': 'Production Engineering student focused on Operational Data Analytics, Continuous Improvement, and Quality Management. Experience in KPI monitoring, operational support, and data analysis applied to industrial and service operations using Power BI, SQL, Python, and Excel.',
    'hero.cta': 'View Projects',
    'hero.about': 'About Me',
    
    // About
    'about.title': 'A little about me',
    'about.description': 'I am driven by the challenge of improving operations through data, process optimization, and continuous improvement initiatives. My background combines operational experience, analytical thinking, and technology to support decision-making and operational excellence. I work with Power BI, SQL, Python, and Excel to transform operational data into actionable insights for industrial and business environments.',
    'about.download': 'Download CV',
    
    // Technology
    'tech.title': 'Technologies & Stacks',
    'tech.frontend': 'Front-End',
    'tech.dataAnalysis': 'Data Analysis',
    
    // Portfolio
    'portfolio.title': 'My Projects',
    'portfolio.description': 'Here are some projects that represent my journey in Operational Analytics, Engineering, and data-driven continuous improvement. Each project reflects my experience with operational KPIs, data analysis, process optimization, and data visualization using Power BI, Python, SQL, and Excel applied to industrial and business environments.',
    'portfolio.viewProject': 'View Project',
    
    // Projects
    'project.dashboard.title': 'Titanic - Exploratory Data Analysis',
    'project.dashboard.description': 'Complete exploratory analysis of the Titanic dataset with 891 records, investigating survival patterns by sex, class and age.',
    'project.automation.title': 'Python Automation',
    'project.automation.description': 'Automation script for data cleaning and processing, reducing analysis time by 70%.',
    'project.kpis.title': 'KPI Analysis',
    'project.kpis.description': 'Interactive dashboard for monitoring business KPIs with automatic alerts.',
    'project.forecast.title': 'Demand Forecasting',
    'project.forecast.description': 'Machine learning model for demand forecasting using historical sales data.',
    'project.etl.title': 'ETL Pipeline',
    'project.etl.description': 'Automated ETL pipeline for integrating multiple data sources.',
    'project.report.title': 'Executive Report',
    'project.report.description': 'Automated report for executives with business insights and strategic recommendations.',
    
    // Contact
    'contact.title': 'Let\'s talk!',
    'contact.description': 'Open to opportunities in Production Engineering, Operational Analytics, Quality Management, and Continuous Improvement. Let’s connect and discuss data-driven operations, process optimization, and industrial performance improvement.',
    'contact.cta': 'Get in Touch',
    
    // Footer
    'footer.rights': 'All rights reserved.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};