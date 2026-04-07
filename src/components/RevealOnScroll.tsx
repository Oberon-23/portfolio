import useScrollReveal from '@/hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const RevealOnScroll = ({
  children,
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;