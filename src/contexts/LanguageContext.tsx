import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { CONTENT, type Language } from '@/content';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  c: (typeof CONTENT)['pt'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const KEY = 'portfolio-lang';

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch { /* sem armazenamento */ }
  return 'pt';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    try { localStorage.setItem(KEY, language); } catch { /* ignora */ }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, c: CONTENT[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
