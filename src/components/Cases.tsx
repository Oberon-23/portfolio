import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealOnScroll from '@/components/RevealOnScroll';

const reduced = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Número que sobe de `from` até `to` quando entra na tela (sem animação se o usuário pediu menos movimento). */
const Counter = ({ from = 0, to, unit }: { from?: number; to: number; unit: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(reduced() ? to : from);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const dur = 1600;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { io.disconnect(); run(); }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [from, to]);

  return <span ref={ref} aria-label={`${to}${unit}`}>{value}{unit}</span>;
};

const Cases = () => {
  const { c } = useLanguage();
  const k = c.cases;
  return (
    <section id="cases" className="section">
      <div className="wrap">
        <RevealOnScroll>
          <p className="eyebrow">05</p>
          <h2 className="h2">{k.title}</h2>
          <p className="lead">{k.lead}</p>
          <div className="cases">
            {k.items.map((x) => (
              <article key={x.id} className="card case">
                <p className="case-cat">{x.category}</p>
                <h3>{x.title}</h3>
                <p className="case-situation">{x.situation}</p>
                <div className="case-metric">
                  {x.metric.from !== undefined && (
                    <>
                      <div className="case-num before">
                        <small>{k.before}</small>
                        <b>{x.metric.from}{x.metric.unit}</b>
                      </div>
                      <ArrowRight className="case-arrow" aria-hidden="true" />
                    </>
                  )}
                  <div className="case-num after">
                    <small>{x.metric.from !== undefined ? k.after : k.result}</small>
                    <b><Counter from={x.metric.from} to={x.metric.to} unit={x.metric.unit} /></b>
                  </div>
                  <p className="case-metric-label"><strong>{x.metric.label}</strong> · {x.metric.period}</p>
                </div>
                <ol className="pdca">
                  {x.stages.map((st) => (
                    <li key={st.letter}>
                      <span className="pdca-letter" aria-hidden="true">{st.letter}</span>
                      <b>{st.title}</b>
                      <span>{st.text}</span>
                    </li>
                  ))}
                </ol>
                <p className="case-takeaway">{x.takeaway}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Cases;
