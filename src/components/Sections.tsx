import { useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LINKS } from '@/content';
import { KaggleIcon } from '@/components/Icons';
import RevealOnScroll from '@/components/RevealOnScroll';

/** Botão "Ver mais" que só aparece no celular; no computador tudo fica visível. */
const MoreButton = ({ open, hidden, onToggle }: { open: boolean; hidden: number; onToggle: () => void }) => {
  const { c } = useLanguage();
  return (
    <button type="button" className={`btn more-btn${open ? ' open' : ''}`} aria-expanded={open} onClick={onToggle}>
      {open ? c.ui.less : `${c.ui.more} (${hidden})`}<ChevronDown aria-hidden="true" />
    </button>
  );
};

function useCollapse() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggle = () => {
    if (open) ref.current?.scrollIntoView({ block: 'start' });
    setOpen((o) => !o);
  };
  return { open, toggle, ref };
}

const SKILLS_VISIBLE = 2;
const CERTS_VISIBLE = 4;

export const About = () => {
  const { c } = useLanguage();
  return (
    <section id="sobre" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">01</p>
          <h2 className="h2">{c.about.title}</h2>
          <div className="about-grid">
            <div className="about-text">{c.about.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
            <div className="facts">
              {c.about.facts.map((f) => <div key={f.label} className="card fact"><b>{f.value}</b><span>{f.label}</span></div>)}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export const Value = () => {
  const { c } = useLanguage();
  return (
    <section id="valor" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">02</p>
          <h2 className="h2">{c.value.title}</h2>
          <p className="lead">{c.value.lead}</p>
          <div className="value-grid">
            {c.value.items.map((v, i) => (
              <div key={v.title} className="card value"><span className="num">0{i + 1}</span><h3>{v.title}</h3><p>{v.text}</p></div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export const Skills = () => {
  const { c } = useLanguage();
  const { open, toggle, ref } = useCollapse();
  const hidden = Math.max(0, c.skills.groups.length - SKILLS_VISIBLE);
  return (
    <section id="competencias" className="section" ref={ref}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">03</p>
          <h2 className="h2">{c.skills.title}</h2>
          <p className="lead">{c.skills.lead}</p>
          <div className={`card skills collapsible${open ? ' open' : ''}`}>
            {c.skills.groups.map((g, i) => (
              <div key={g.title} className={`skill-row${i >= SKILLS_VISIBLE ? ' extra' : ''}`}>
                <h3>{g.title}</h3>
                <ul className="chips">{g.items.map((it) => <li key={it} className="chip">{it}</li>)}</ul>
              </div>
            ))}
          </div>
          {hidden > 0 && <MoreButton open={open} hidden={hidden} onToggle={toggle} />}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export const Education = () => {
  const { c } = useLanguage();
  const e = c.education;
  const done = (s: string) => /conclu|complet/i.test(s);
  return (
    <section id="formacao" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">05</p>
          <h2 className="h2">{e.title}</h2>
          <div className="card degrees" style={{ marginTop: 28 }}>
            {e.degrees.map((d) => (
              <div key={d.course} className="degree">
                <b>{d.course}</b>
                <span>{d.school}</span>
                <small>{d.period}</small>
                <em className={`status${done(d.status) ? ' done' : ''}`}>{d.status}</em>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export const Certifications = () => {
  const { c } = useLanguage();
  const e = c.education;
  const { open, toggle, ref } = useCollapse();
  const hidden = Math.max(0, e.certs.length - CERTS_VISIBLE);
  return (
    <section id="certificacoes" className="section" ref={ref}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">06</p>
          <h2 className="h2">{e.certTitle}</h2>
          <div className="card certs" style={{ marginTop: 28 }}>
            <ul className={`cert-list collapsible${open ? ' open' : ''}`}>
              {e.certs.map((x, i) => (
                <li key={x.name} className={i >= CERTS_VISIBLE ? 'extra' : undefined}><b>{x.name}</b><span>{x.issuer}{x.date ? ` · ${x.date}` : ''}</span></li>
              ))}
            </ul>
          </div>
          {hidden > 0 && <MoreButton open={open} hidden={hidden} onToggle={toggle} />}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export const Contact = () => {
  const { c } = useLanguage();
  const socials = [
    { label: 'LinkedIn', href: LINKS.linkedin, icon: <Linkedin /> },
    { label: 'GitHub', href: LINKS.github, icon: <Github /> },
    { label: 'Kaggle', href: LINKS.kaggle, icon: <KaggleIcon /> },
    { label: 'WhatsApp', href: LINKS.whatsapp, icon: <MessageCircle /> },
  ];
  return (
    <section id="contato" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <div className="card contact">
            <p className="eyebrow">07</p>
            <h2 className="h2">{c.contact.title}</h2>
            <p>{c.contact.text}</p>
            <div className="contact-actions">
              <div className="contact-main">
                <a className="btn primary" href={`mailto:${LINKS.email}`}><Mail />{c.contact.email}</a>
              </div>
              <div className="contact-social">
                {socials.map((s) => (
                  <a key={s.label} className="btn icon-btn" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>{s.icon}</a>
                ))}
              </div>
            </div>
            <span className="contact-mail">{LINKS.email}</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export const Footer = () => {
  const { c, language } = useLanguage();
  return (
    <footer className="footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Breno Silva Barros Rangel. {c.footer}</span>
        <a href="#inicio">↑ {language === 'pt' ? 'Voltar ao topo' : 'Back to top'}</a>
      </div>
    </footer>
  );
};
