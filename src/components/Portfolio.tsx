import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import projectImage from '@/assets/project-placeholder.jpg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;axxxxz
  image: string;
  link: string;
  technologies: string[];
}

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: t('project.dashboard.title'),
      description: t('project.dashboard.description'),
      image: projectImage,
      link: '#',
      technologies: ['Power BI', 'SQL', 'Excel']
    },
    {
      id: 2,
      title: t('project.automation.title'),
      description: t('project.automation.description'),
      image: projectImage,
      link: '#',
      technologies: ['Python', 'Pandas', 'NumPy']
    },
    {
      id: 3,
      title: t('project.kpis.title'),
      description: t('project.kpis.description'),
      image: projectImage,
      link: '#',
      technologies: ['Power BI', 'DAX', 'SQL']
    },
    {
      id: 4,
      title: t('project.forecast.title'),
      description: t('project.forecast.description'),
      image: projectImage,
      link: '#',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib']
    },
    {
      id: 5,
      title: t('project.etl.title'),
      description: t('project.etl.description'),
      image: projectImage,
      link: '#',
      technologies: ['Python', 'SQL', 'Power Query']
    },
    {
      id: 6,
      title: t('project.report.title'),
      description: t('project.report.description'),
      image: projectImage,
      link: '#',
      technologies: ['Power BI', 'Excel', 'PowerPoint']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="portfolio-card group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-200 text-sm mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/80 text-white text-xs rounded">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="self-start flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
        >
          <ExternalLink size={16} />
          {t('portfolio.viewProject')}
        </a>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-header">{t('portfolio.title')}</h2>
        <p className="section-description mt-4">
          {t('portfolio.description')}
        </p>
      </div>

      {isMobile ? (
        // Mobile Carousel
        <div className="relative">
          <div
            ref={carouselRef}
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 btn-portfolio p-2"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 btn-portfolio p-2"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;