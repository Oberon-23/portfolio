import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const orbs = [
    { size: 50, top: '0px', left: '0px', color: 'rgba(233,97,94,0.5)', delay: '0s', anim: 'animate-pulse-slow' },
    { size: 28, top: '0px', right: '60px', color: 'rgba(236,153,86,0.4)', delay: '0.5s', anim: 'animate-pulse-slow' },
    { size: 18, top: '20%', left: '4px', color: 'rgba(236,153,86,0.35)', delay: '0.3s', anim: 'animate-float' },
    { size: 14, top: '10%', right: '4px', color: 'rgba(233,97,94,0.3)', delay: '1.2s', anim: 'animate-float' },
    { size: 22, top: '50%', left: '4px', color: 'rgba(233,97,94,0.25)', delay: '0.7s', anim: 'animate-pulse-slow' },
    { size: 18, top: '40%', right: '4px', color: 'rgba(233,97,94,0.3)', delay: '0.8s', anim: 'animate-float' },
    { size: 34, bottom: '30px', left: '4px', color: 'rgba(236,153,86,0.35)', delay: '1.5s', anim: 'animate-pulse-slow' },
    { size: 44, bottom: '0px', right: '0px', color: 'rgba(236,153,86,0.5)', delay: '1s', anim: 'animate-pulse-slow' },
    { size: 20, bottom: '0px', left: '30%', color: 'rgba(233,97,94,0.3)', delay: '0.4s', anim: 'animate-float' },
    { size: 12, bottom: '15%', right: '4px', color: 'rgba(236,153,86,0.25)', delay: '2s', anim: 'animate-pulse-slow' },
    { size: 16, top: '70%', left: '4px', color: 'rgba(233,97,94,0.2)', delay: '1.8s', anim: 'animate-float' },
    { size: 10, top: '0px', left: '45%', color: 'rgba(236,153,86,0.3)', delay: '0.6s', anim: 'animate-pulse-slow' },
  ];

  return (
    <section id="about" className="section-container">
      <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto', padding: '2rem 0' }}>

        {orbs.map((orb, i) => (
          <div
            key={i}
            className={orb.anim}
            style={{
              position: 'absolute',
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              filter: orb.size > 30 ? 'blur(1px)' : 'none',
              animationDelay: orb.delay,
              pointerEvents: 'none',
              zIndex: 1,
              ...(orb.top !== undefined ? { top: orb.top } : {}),
              ...(orb.bottom !== undefined ? { bottom: orb.bottom } : {}),
              ...(orb.left !== undefined ? { left: orb.left } : {}),
              ...(orb.right !== undefined ? { right: orb.right } : {}),
            }}
          />
        ))}

        <div
          className="animate-float"
          style={{
            position: 'relative',
            zIndex: 2,
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(233, 97, 94, 0.35)',
            boxShadow: '0 0 40px rgba(233, 97, 94, 0.08), inset 0 0 60px rgba(255,255,255,0.02)',
            padding: 'clamp(1.5rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 3rem)',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(236,153,86,0.6), transparent)',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: '30%', right: '30%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(233,97,94,0.4), transparent)',
          }} />
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(233,97,94,0.06), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: '180px', height: '180px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,153,86,0.06), transparent 70%)',
            pointerEvents: 'none',
          }} />

          <h2 style={{
            fontSize: 'clamp(1.4rem, 5vw, 2.25rem)',
            fontWeight: 700, color: 'white',
            marginBottom: '1rem', position: 'relative',
          }}>
            {t('about.title')}
          </h2>

          <div style={{
            width: '50px', height: '3px', borderRadius: '9999px',
            background: 'linear-gradient(90deg, #e9615e, #ec9956)',
            margin: '0 auto 1.5rem',
          }} />

          <p style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
            lineHeight: '1.8',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            position: 'relative',
          }}>
            {t('about.description')}
          </p>

          <div style={{ position: 'relative' }}>
            <a href="/Breno_Barros_DataAnalyst_Jr.pdf" download className="btn-portfolio">
              <Download size={18} style={{ marginRight: '0.5rem' }} />
              {t('about.download')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;