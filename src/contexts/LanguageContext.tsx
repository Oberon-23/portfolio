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
    'hero.role': 'Analista de Dados',
    'hero.description': 'Analista de Dados com foco em transformar dados em insights que apoiam decisões estratégicas de negócios. Experiência prática em limpeza e preparação de dados, análise exploratória, automação com SQL e Python, além de criação de dashboards interativos em Power BI e Excel para visualização clara de informações.',
    'hero.cta': 'Ver Projetos',
    'hero.about': 'Sobre Mim',
    
    // About
    'about.title': 'Um pouco sobre mim',
    'about.description': 'Sou movido pela curiosidade de entender o que os dados escondem. Combino visão técnica de desenvolvimento com mentalidade analítica para transformar números em narrativas que fazem sentido para o negócio. Trabalho com Python, SQL, Power BI e Excel — não só como ferramentas, mas como linguagens para contar histórias com dados.',
    'about.download': 'Baixar CV',
    
    // Technology
    'tech.title': 'Tecnologias & Stacks',
    'tech.frontend': 'Front-End',
    'tech.dataAnalysis': 'Análise de Dados',
    
    // Portfolio
    'portfolio.title': 'Meus Projetos',
    'portfolio.description': 'Aqui estão alguns projetos que representam minha jornada em Análise de Dados. Cada um deles reflete meu desenvolvimento com ferramentas como Power BI, Excel, Python e SQL, enquanto sigo aprimorando minha capacidade de transformar dados em insights claros e relevantes.',
    'portfolio.viewProject': 'Ver Projeto',
    
    // Projects
    'project.dashboard.title': 'Titanic - Análise Exploratória de Dados',
    'project.dashboard.description': 'Análise exploratória completa do dataset do Titanic com 891 registros, investigando padrões de sobrevivência por sexo, classe e idade.',
    'project.automation.title': 'Automação Python',
    'project.automation.description': 'Script de automação para limpeza e processamento de dados, reduzindo o tempo de análise em 70%.',
    'project.kpis.title': 'Análise de KPIs',
    'project.kpis.description': 'Dashboard interativo para monitoramento de KPIs empresariais com alertas automáticos.',
    'project.forecast.title': 'Previsão de Demanda',
    'project.forecast.description': 'Modelo de machine learning para previsão de demanda usando dados históricos de vendas.',
    'project.etl.title': 'ETL Pipeline',
    'project.etl.description': 'Pipeline de ETL automatizado para integração de múltiplas fontes de dados.',
    'project.report.title': 'Relatório Executivo',
    'project.report.description': 'Relatório automatizado para diretoria com insights de negócio e recomendações estratégicas.',
    
    // Contact
    'contact.title': 'Venha conversar comigo!',
    'contact.description': 'Aberto a oportunidades como Analista de Dados e colaborações. Vamos conversar sobre como transformar dados em decisões?',
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
    'hero.role': 'Data Analyst',
    'hero.description': 'Data Analyst focused on transforming data into decisions. I work with data cleaning and preparation, exploratory analysis, SQL and Python automation, as well as interactive dashboards in Power BI and Excel. I am always looking to learn and grow in the data field.',
    'hero.cta': 'View Projects',
    'hero.about': 'About Me',
    
    // About
    'about.title': 'A little about me',
    'about.description': 'Im driven by the curiosity of uncovering what data hides. I combine a technical development background with an analytical mindset to turn numbers into narratives that make sense for the business. I work with Python, SQL, Power BI, and Excel — not just as tools, but as languages for telling stories with data.',
    'about.download': 'Download CV',
    
    // Technology
    'tech.title': 'Technologies & Stacks',
    'tech.frontend': 'Front-End',
    'tech.dataAnalysis': 'Data Analysis',
    
    // Portfolio
    'portfolio.title': 'My Projects',
    'portfolio.description': 'Here are some projects that represent my journey in Data Analysis. Each one reflects my development with tools like Power BI, Excel, Python and SQL, while I continue to improve my ability to transform data into clear and relevant insights.',
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
    'contact.description': 'Open to opportunities as a Data Analyst and collaborations. Let\'s talk about how to transform data into decisions?',
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