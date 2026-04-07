import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      const t = setTimeout(() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isMenuOpen]);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => setIsMenuOpen(false), 300);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  const toggleMenu = () => {
    if (isMenuOpen) closeMenu();
    else openMenu();
  };

  const navItems = [
    { href: '#home', label: t('nav.home'), num: '01' },
    { href: '#about', label: t('nav.about'), num: '02' },
    { href: '#technology', label: t('nav.technology'), num: '03' },
    { href: '#portfolio', label: t('nav.portfolio'), num: '04' },
  ];

  const FullscreenMenu = () => createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Backdrop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10, 5, 20, 0.97)',
        backdropFilter: 'blur(24px)',
        transition: 'opacity 0.3s ease',
        opacity: isVisible ? 1 : 0,
      }} />

      {/* Orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(233,97,94,0.15) 0%, transparent 70%)',
        transition: 'opacity 0.4s ease',
        opacity: isVisible ? 1 : 0,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '-5%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,153,86,0.1) 0%, transparent 70%)',
        transition: 'opacity 0.4s ease',
        opacity: isVisible ? 1 : 0,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column',
        height: '100%', padding: '6rem 2rem 3rem',
      }}>

        {/* Top divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(233,97,94,0.6), transparent)',
          marginBottom: '2.5rem',
          transition: 'transform 0.4s ease, opacity 0.4s ease',
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          opacity: isVisible ? 1 : 0,
          transformOrigin: 'center',
        }} />

        {/* Nav items */}
        <nav style={{ flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item, i) => (
              <li
                key={item.href}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  transition: `opacity 0.3s ease ${isVisible ? i * 55 : 0}ms, transform 0.3s cubic-bezier(0.4,0,0.2,1) ${isVisible ? i * 55 : 0}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                }}
              >
                <a
                  href={item.href}
                  onClick={closeMenu}
                  style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    textDecoration: 'none', color: 'white', gap: '1rem',
                  }}
                  onMouseEnter={(e) => {
                    const label = e.currentTarget.querySelector('.nav-label') as HTMLElement;
                    const num = e.currentTarget.querySelector('.nav-num') as HTMLElement;
                    if (label) { label.style.background = 'linear-gradient(90deg, #e9615e, #ec9956)'; label.style.webkitBackgroundClip = 'text'; label.style.webkitTextFillColor = 'transparent'; }
                    if (num) num.style.color = '#ec9956';
                  }}
                  onMouseLeave={(e) => {
                    const label = e.currentTarget.querySelector('.nav-label') as HTMLElement;
                    const num = e.currentTarget.querySelector('.nav-num') as HTMLElement;
                    if (label) { label.style.background = ''; label.style.webkitTextFillColor = 'white'; }
                    if (num) num.style.color = 'rgba(255,255,255,0.25)';
                  }}
                >
                  <span className="nav-num" style={{
                    fontSize: '0.65rem', fontWeight: 500,
                    color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em',
                    transition: 'color 0.2s ease', minWidth: '2rem',
                  }}>
                    {item.num}
                  </span>
                  <span className="nav-label" style={{
                    flex: 1, fontSize: '1.6rem', fontWeight: 700,
                    letterSpacing: '-0.02em', transition: 'all 0.2s ease',
                  }}>
                    {item.label}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.2 }}>
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom: só o botão Contato centralizado */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2rem',
          transition: `opacity 0.3s ease ${isVisible ? '220ms' : '0ms'}, transform 0.3s ease ${isVisible ? '220ms' : '0ms'}`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        }}>
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '0.7rem 2.5rem', fontSize: '0.875rem', fontWeight: 600,
              color: 'white', borderRadius: '9999px', textDecoration: 'none',
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, hsl(1 60% 64%), hsl(25 65% 64%))',
            }}
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 border-b ${
          isScrolled
            ? 'backdrop-blur-xl bg-white/10 border-white/20 shadow-lg shadow-black/10'
            : 'backdrop-blur-md bg-white/5 border-white/10'
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-2 text-white" onClick={closeMenu}>
              <div className="portfolio-logo">B</div>
              <span className="text-xl font-semibold">Breno</span>
            </a>

            <ul className="hidden md:flex items-center gap-8">
              <li><a href="#home" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.about')}</a></li>
              <li><a href="#technology" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.technology')}</a></li>
              <li><a href="#portfolio" className="text-white hover:text-secondary transition-colors duration-300">{t('nav.portfolio')}</a></li>
            </ul>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Globe size={16} className="text-white" />
                <span className="text-sm font-medium text-white">{language === 'pt' ? 'EN' : 'PT'}</span>
              </button>
              <a href="#contact" className="btn-portfolio">{t('nav.contact')}</a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Globe size={14} className="text-white" />
                <span className="text-xs font-medium text-white">{language === 'pt' ? 'EN' : 'PT'}</span>
              </button>

              <button
                onClick={toggleMenu}
                className="text-white relative w-8 h-8 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <span style={{
                  position: 'absolute',
                  transition: 'opacity 0.2s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'rotate(180deg) scale(0.4)' : 'rotate(0deg) scale(1)',
                }}>
                  <Menu size={24} />
                </span>
                <span style={{
                  position: 'absolute',
                  transition: 'opacity 0.2s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.4)',
                }}>
                  <X size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <FullscreenMenu />
    </>
  );
};

export default Navigation;