import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { About, Certifications, Contact, Education, Footer, Skills, Value } from '@/components/Sections';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';

const Skip = () => {
  const { language } = useLanguage();
  return <a className="skip" href="#conteudo">{language === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}</a>;
};

const Index = () => (
  <LanguageProvider>
    <Skip />
    <Navigation />
    <main id="conteudo">
      <Hero />
      <About />
      <Value />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
    <Footer />
  </LanguageProvider>
);

export default Index;
