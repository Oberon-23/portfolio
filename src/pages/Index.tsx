import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechCarousel from '@/components/TechCarousel';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import RevealOnScroll from '@/components/RevealOnScroll';

const Index = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ overflowX: 'hidden' }}>
        <Navigation />
        <Hero />
        <RevealOnScroll direction="up">
          <About />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={100}>
          <TechCarousel />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={100}>
          <Portfolio />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={100}>
          <Contact />
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={100}>
          <Footer />
        </RevealOnScroll>
      </div>
    </LanguageProvider>
  );
};

export default Index;