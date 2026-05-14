import { useEffect, useRef, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    // Se está na viewport, mantém visível
    if (rect.top < window.innerHeight) {
      setIsVisible(true);
      setInitialized(true);
      return;
    }

    // Só esconde e anima elementos que estão abaixo da viewport
    setIsVisible(false);
    setInitialized(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible, initialized };
};

export default useScrollReveal;