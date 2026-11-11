import { ArrowDown, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LINKS, PHOTO } from '@/content';

/** Destaca a última palavra-chave do título ("decisão" / "decisions") com a cor de destaque. */
function Title({ text }: { text: string }) {
  const m = text.match(/^(.*\s)(\S+)(\.)$/);
  if (!m) return <>{text}</>;
  return <>{m[1]}<em>{m[2]}</em>{m[3]}</>;
}

/** Divide a linha do topo em duas metades; no celular cada metade ocupa uma linha. */
function Kicker({ text }: { text: string }) {
  const parts = text.split(' · ');
  const mid = Math.ceil(parts.length / 2);
  return (
    <p className="eyebrow kicker">
      <span className="kg">{parts.slice(0, mid).join(' · ')}</span>
      <span className="ksep" aria-hidden="true"> · </span>
      <span className="kg">{parts.slice(mid).join(' · ')}</span>
    </p>
  );
}

const Hero = () => {
  const { c } = useLanguage();
  const h = c.hero;
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Kicker text={h.kicker} />
            <h1><Title text={h.title} /></h1>
            <p className="hero-intro">{h.intro}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projetos"><ArrowDown />{h.ctaProjects}</a>
              <a className="btn" href="#contato"><MessageCircle />{h.ctaContact}</a>
              <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />{h.ctaLinkedin}</a>
            </div>
          </div>
          <div className="photo">
            <img src={PHOTO} alt={h.photoAlt} width={640} height={800} />
            <div className="photo-tag"><b><span className="dot" aria-hidden="true" />{h.status}</b></div>
          </div>
        </div>
        <div className="highlights">
          {h.highlights.map((x) => (
            <div key={x.title} className="card highlight"><i aria-hidden="true" /><b>{x.title}</b><span>{x.text}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
