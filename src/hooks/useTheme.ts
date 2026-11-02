import { useEffect, useState } from 'react';

export type ThemePref = 'system' | 'light' | 'dark';
const KEY = 'portfolio-theme';

function read(): ThemePref {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'light' || v === 'dark' || v === 'system') return v;
  } catch { /* sem armazenamento */ }
  return 'system';
}

/** Mesmo comportamento dos painéis: "Sistema" segue o aparelho; Claro e Escuro fixam o tema. */
export default function useTheme() {
  const [pref, setPref] = useState<ThemePref>(read);

  useEffect(() => {
    const root = document.documentElement;
    if (pref === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', pref);
    try { localStorage.setItem(KEY, pref); } catch { /* ignora */ }
  }, [pref]);

  return { pref, setPref };
}
