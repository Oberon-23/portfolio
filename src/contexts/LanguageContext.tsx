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
    'hero.description': 'Analista de Dados, focado em transformar dados em decisões. Trabalho com limpeza e preparação de dados, análise exploratória, SQL e automações em Python, além de dashboards interativos em Power BI e Excel. Estou sempre buscando aprender e crescer na área de dados.',
    'hero.cta': 'Ver Projetos',
    'hero.about': 'Sobre Mim',
    
    // About
    'about.title': 'Um pouco sobre mim',
    'about.description': 'Atuei como Engenheiro de Software (Front-End), com foco em integração de APIs, performance e entrega de produtos digitais. Atualmente, venho aplicando Python, SQL, Power BI e Excel em projetos de coleta, tratamento, análise e visualização de dados. Meu objetivo é criar soluções concretas, reutilizáveis e úteis para o negócio, com comunicação clara e documentação adequada.',
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
    'project.dashboard.title': 'Dashboard de Vendas',
    'project.dashboard.description': 'Análise completa de dados de vendas com Power BI, incluindo métricas de performance, tendências sazonais e insights estratégicos.',
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
    'about.description': 'I worked as a Software Engineer (Front-End), focusing on API integration, performance and digital product delivery. Currently, I have been applying Python, SQL, Power BI and Excel in data collection, treatment, analysis and visualization projects. My goal is to create concrete, reusable and useful business solutions with clear communication and adequate documentation.',
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
    'project.dashboard.title': 'Sales Dashboard',
    'project.dashboard.description': 'Complete sales data analysis with Power BI, including performance metrics, seasonal trends and strategic insights.',
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