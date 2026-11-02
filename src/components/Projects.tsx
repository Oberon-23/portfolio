import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, Github, LayoutDashboard, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Project, ProjectLink } from '@/content';
import { KaggleIcon } from '@/components/Icons';
import RevealOnScroll from '@/components/RevealOnScroll';

const LinkBtn = ({ l, primary }: { l: ProjectLink; primary?: boolean }) => (
  <a className={`btn small${primary ? ' primary' : ''}`} href={l.href} target="_blank" rel="noopener noreferrer">
    {l.kind === 'github' ? <Github /> : l.kind === 'kaggle' ? <KaggleIcon /> : <LayoutDashboard />}
    {l.label}
    <ExternalLink style={{ width: 13, height: 13, opacity: 0.6 }} aria-hidden="true" />
  </a>
);

const Media = ({ p }: { p: Project }) => (
  <div className="project-media">
    <img className="img-light" src={p.image.light} alt={p.image.alt} loading="lazy" width={1200} height={750} />
    <img className="img-dark" src={p.image.dark} alt="" aria-hidden="true" loading="lazy" width={1200} height={750} />
    {p.badge && <span className="badge">{p.badge}</span>}
  </div>
);

const Modal = ({ p, onClose }: { p: Project; onClose: () => void }) => {
  const { c } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus(); };
  }, [onClose]);
  return createPortal(
    <div className="overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="card modal" role="dialog" aria-modal="true" aria-labelledby={`m-${p.id}`}>
        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label={c.projects.close}><X size={18} /></button>
        <span className="project-cat">{p.category}</span>
        <h3 id={`m-${p.id}`}>{p.title}</h3>
        <div className="question"><small>{c.projects.question}</small>{p.question}</div>
        {p.details.map((d) => (
          <div key={d.heading}>
            <h4>{d.heading}</h4>
            <ul>{d.items.map((it) => <li key={it.slice(0, 24)}>{it}</li>)}</ul>
          </div>
        ))}
        <ul className="chips" style={{ marginTop: 20 }}>{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        <div className="project-foot">{p.links.map((l, i) => <LinkBtn key={l.href} l={l} primary={i === 0} />)}</div>
      </div>
    </div>,
    document.body,
  );
};

const Card = ({ p, featured, onOpen }: { p: Project; featured?: boolean; onOpen: () => void }) => {
  const { c } = useLanguage();
  return (
    <article className={`card project${featured ? ' featured' : ''}`}>
      <Media p={p} />
      <div className="project-body">
        <span className="project-cat">{p.category}</span>
        <h3>{p.title}</h3>
        <div className="question"><small>{c.projects.question}</small>{p.question}</div>
        <p className="desc">{p.description}</p>
        <ul className="chips">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        <div className="project-foot">
          {p.links.map((l, i) => <LinkBtn key={l.href} l={l} primary={i === 0} />)}
          <button type="button" className="btn small" onClick={onOpen}>{c.projects.details}</button>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { c } = useLanguage();
  const [open, setOpen] = useState<Project | null>(null);
  const items = c.projects.items;
  const current = open ? items.find((x) => x.id === open.id) ?? null : null;
  const close = useCallback(() => setOpen(null), []);
  return (
    <section id="projetos" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">04</p>
          <h2 className="h2">{c.projects.title}</h2>
          <p className="lead">{c.projects.lead}</p>
        </RevealOnScroll>
        <div className="projects">
          {items.map((p, i) => (
            <Card key={p.id} p={p} featured={i === 0 || (i === items.length - 1 && (items.length - 1) % 2 === 1)} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>
      {current && <Modal p={current} onClose={close} />}
    </section>
  );
};

export default Projects;
