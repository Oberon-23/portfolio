import { Download, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LINKS } from '@/content';
import { KaggleIcon } from '@/components/Icons';
import RevealOnScroll from '@/components/RevealOnScroll';

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
  return (
    <section id="competencias" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">03</p>
          <h2 className="h2">{c.skills.title}</h2>
          <p className="lead">{c.skills.lead}</p>
          <div className="card skills">
            {c.skills.groups.map((g) => (
              <div key={g.title} className="skill-row">
                <h3>{g.title}</h3>
                <ul className="chips">{g.items.map((it) => <li key={it} className="chip">{it}</li>)}</ul>
              </div>
            ))}
          </div>
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
  return (
    <section id="certificacoes" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">06</p>
          <h2 className="h2">{e.certTitle}</h2>
          <div className="card certs" style={{ marginTop: 28 }}>
            <ul className="cert-list">
              {e.certs.map((x) => (
                <li key={x.name}><b>{x.name}</b><span>{x.issuer}{x.date ? ` · ${x.date}` : ''}</span></li>
              ))}
            </ul>
          </div>
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
              <a className="btn primary" href={`mailto:${LINKS.email}`}><Mail />{c.contact.email}</a>
              <a className="btn" href={LINKS.cv} download><Download />{c.contact.cv}</a>
              {socials.map((s) => (
                <a key={s.label} className="btn icon-btn" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>{s.icon}</a>
              ))}
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
