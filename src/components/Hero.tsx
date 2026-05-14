import heroImage from '@/assets/breno-about.jpg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="section-container pt-32" style={{ overflow: 'hidden' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('hero.title')}<br />
            <span className="text-secondary">{t('hero.role')}</span>
          </h1>
          <p className="section-description md:text-left md:mx-0 mb-8 text-lg">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#portfolio" className="btn-portfolio">
              {t('hero.cta')}
            </a>
            <a
              href="#about"
              className="px-6 py-3 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {t('hero.about')}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative">
          <div className="relative max-w-md mx-auto">
            <img
              src={heroImage}
              alt="Foto de Breno"
              className="w-full rounded-3xl shadow-2xl animate-float"
            />

            {/* Bolinha topo direita */}
            <div
              className="animate-pulse-slow"
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, hsl(1 60% 64%), hsl(25 65% 64%))',
                opacity: 0.2,
                willChange: 'transform',
                transform: 'translateZ(0)',
              }}
            />

            {/* Bolinha baixo esquerda */}
            <div
              className="animate-pulse-slow"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-40px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, hsl(25 65% 64%), hsl(1 60% 64%))',
                opacity: 0.3,
                willChange: 'transform',
                transform: 'translateZ(0)',
                animationDelay: '1s',
              }}
            />
          </div>

          {/* Background text */}
          <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-90 text-6xl font-bold opacity-10 pointer-events-none">
            BRENO
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;