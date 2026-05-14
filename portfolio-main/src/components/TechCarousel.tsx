import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'data';
}

const TechCarousel = () => {
  const frontendCarouselRef = useRef<HTMLDivElement>(null);
  const dataCarouselRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const frontendTechs: TechItem[] = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'frontend' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend' },
    { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', category: 'frontend' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'frontend' },
  ];

  const dataTechs: TechItem[] = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'data' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'data' },
    { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', category: 'data' },
    { name: 'Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg', category: 'data' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', category: 'data' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', category: 'data' },
  ];

  useEffect(() => {
    const setupCarousel = (ref: React.RefObject<HTMLDivElement>, techs: TechItem[]) => {
      if (!ref.current) return;

      const carousel = ref.current;
      const firstSet = carousel.querySelector('.tech-set:first-child') as HTMLElement;
      
      if (!firstSet) return;

      const clone = firstSet.cloneNode(true) as HTMLElement;
      carousel.appendChild(clone);
    };

    setupCarousel(frontendCarouselRef, frontendTechs);
    setupCarousel(dataCarouselRef, dataTechs);
  }, []);

  const TechBadge = ({ tech }: { tech: TechItem }) => (
    <div className="tech-badge flex-shrink-0 min-w-max">
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-7 h-7 object-contain"
        onError={(e) => {
          // Fallback for broken images
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-sm font-semibold">{tech.name}</span>
    </div>
  );

  return (
    <section id="technology" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-header">{t('tech.title')}</h2>
      </div>

      <div className="space-y-16">
        {/* Frontend Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-secondary mb-8">{t('tech.frontend')}</h3>
          <div className="relative overflow-hidden">
            <div 
              ref={frontendCarouselRef}
              className="flex gap-6 animate-slide-infinite hover:pause-animation"
            >
              <div className="tech-set flex gap-6">
                {frontendTechs.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data Analysis Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-secondary mb-8">{t('tech.dataAnalysis')}</h3>
          <div className="relative overflow-hidden">
            <div 
              ref={dataCarouselRef}
              className="flex gap-6 animate-slide-infinite hover:pause-animation"
              style={{ animationDirection: 'reverse' }}
            >
              <div className="tech-set flex gap-6">
                {dataTechs.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechCarousel;