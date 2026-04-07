import useScrollReveal from '@/hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const RevealOnScroll = ({
  children,
  delay = 0,
}: RevealOnScrollProps) => {
  const { ref, isVisible, initialized } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: !initialized || isVisible ? 1 : 0,
        transform: !initialized || isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: initialized ? `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;