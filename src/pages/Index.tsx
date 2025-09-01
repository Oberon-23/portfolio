import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechCarousel from '@/components/TechCarousel';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <TechCarousel />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
