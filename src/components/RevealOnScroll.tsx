import useScrollReveal from '@/hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const RevealOnScroll = ({ children, delay = 0 }: RevealOnScrollProps) => {
  const { ref, isVisible, initialized } = useScrollReveal();
  if (reduced) return <div>{children}</div>;
  return (
    <div
      ref={ref}
      style={{
        opacity: !initialized || isVisible ? 1 : 0,
        transform: !initialized || isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: initialized ? `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
