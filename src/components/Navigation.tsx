import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import useTheme, { type ThemePref } from '@/hooks/useTheme';

const Controls = ({ pref, setPref }: { pref: ThemePref; setPref: (v: ThemePref) => void }) => {
  const { language, setLanguage, c } = useLanguage();
  const themes: [ThemePref, string][] = [['system', c.nav.system], ['light', c.nav.light], ['dark', c.nav.dark]];
  return (
    <div className="controls">
      <div className="seg" role="group" aria-label={c.nav.language}>
        {(['pt', 'en'] as const).map((l) => (
          <button key={l} type="button" aria-pressed={language === l} onClick={() => setLanguage(l)}>{l.toUpperCase()}</button>
        ))}
      </div>
      <div className="seg" role="group" aria-label={c.nav.theme}>
        {themes.map(([v, label]) => (
          <button key={v} type="button" aria-pressed={pref === v} onClick={() => setPref(v)}>{label}</button>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const { c } = useLanguage();
  const { pref, setPref } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['#sobre', c.nav.about], ['#competencias', c.nav.skills],
    ['#projetos', c.nav.projects], ['#formacao', c.nav.education], ['#certificacoes', c.nav.certs], ['#contato', c.nav.contact],
  ];

  return (
    <header className={`header${scrolled || open ? ' scrolled' : ''}`}>
      <div className="wrap">
        <div className="header-in">
          <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">B</span>
            Breno Silva
          </a>
          <nav className="nav" aria-label="Principal">
            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <Controls pref={pref} setPref={setPref} />
          <button type="button" className="menu-btn" aria-expanded={open} aria-controls="menu-mobile" aria-label={c.nav.menu} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div id="menu-mobile" className="mobile-panel" hidden={!open}>
          <nav aria-label="Principal">
            {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          </nav>
          <Controls pref={pref} setPref={setPref} />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
