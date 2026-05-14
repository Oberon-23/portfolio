import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#technology', label: 'Tecnologias' },
    { href: '#portfolio', label: 'Portfólio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-background/80' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="portfolio-logo">B</div>
            <span className="text-xl font-semibold">Breno</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#home" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.home')}</a></li>
            <li><a href="#about" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.about')}</a></li>
            <li><a href="#technology" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.technology')}</a></li>
            <li><a href="#portfolio" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.portfolio')}</a></li>
          </ul>

          {/* Language Toggle & CTA - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Change language"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            <a href="#contact" className="btn-portfolio">
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="py-4 space-y-4 bg-gradient-to-r from-primary to-secondary rounded-lg mb-4">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-white hover:bg-white/20 transition-colors duration-300">{t('nav.home')}</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-white hover:bg-white/20 transition-colors duration-300">{t('nav.about')}</a></li>
            <li><a href="#technology" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-white hover:bg-white/20 transition-colors duration-300">{t('nav.technology')}</a></li>
            <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2 text-white hover:bg-white/20 transition-colors duration-300">{t('nav.portfolio')}</a></li>
            <li className="px-6 space-y-3">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors w-full justify-center"
                aria-label="Change language"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === 'pt' ? 'EN' : 'PT'}</span>
              </button>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-portfolio w-full block text-center"
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;