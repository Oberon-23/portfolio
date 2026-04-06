import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X } from 'lucide-react';
import projectImage from '@/assets/project-placeholder.jpg.jpg';
import titanicImage from '@/assets/TitanicProject.jpg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: t('project.dashboard.title'),
      description: t('project.dashboard.description'),
      image: titanicImage,
      link: 'https://www.kaggle.com/code/brenosilvabarros/titanic-eda-an-lise-explorat-ria-completa',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      id: 2,
      title: t('project.automation.title'),
      description: t('project.automation.description'),
      image: projectImage,
      link: '#',
      technologies: ['Python', 'Pandas', 'NumPy'],
    },
    {
      id: 3,
      title: t('project.kpis.title'),
      description: t('project.kpis.description'),
      image: projectImage,
      link: '#',
      technologies: ['Power BI', 'DAX', 'SQL'],
    },
    {
      id: 4,
      title: t('project.forecast.title'),
      description: t('project.forecast.description'),
      image: projectImage,
      link: '#',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib'],
    },
    {
      id: 5,
      title: t('project.etl.title'),
      description: t('project.etl.description'),
      image: projectImage,
      link: '#',
      technologies: ['Python', 'SQL', 'Power Query'],
    },
    {
      id: 6,
      title: t('project.report.title'),
      description: t('project.report.description'),
      image: projectImage,
      link: '#',
      technologies: ['Power BI', 'Excel', 'PowerPoint'],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="portfolio-card group">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary/80 text-white text-xs rounded">
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={() => setSelectedProject(project)}
          className="self-start flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 text-sm"
        >
          <ExternalLink size={16} />
          {t('portfolio.viewProject')}
        </button>
      </div>
    </div>
  );

  const Modal = () => createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
      onClick={() => setSelectedProject(null)}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '32rem',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          background: 'linear-gradient(135deg, hsl(353 50% 22%), hsl(229 41% 15%))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedProject!.image}
          alt={selectedProject!.title}
          style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
        />

        <button
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            padding: '0.375rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        <div style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.75rem' }}>
            {selectedProject!.title}
          </h3>
          <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.6' }}>
            {selectedProject!.description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {selectedProject!.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: '0.25rem 0.5rem',
                  backgroundColor: 'hsla(1, 60%, 64%, 0.8)',
                  color: 'white',
                  fontSize: '0.75rem',
                  borderRadius: '0.25rem',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={selectedProject!.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-portfolio"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <ExternalLink size={16} style={{ marginRight: '0.5rem' }} />
            {t('portfolio.viewProject')}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <section id="portfolio" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-header">{t('portfolio.title')}</h2>
        <p className="section-description mt-4">{t('portfolio.description')}</p>
      </div>

      {isMobile ? (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {selectedProject && <Modal />}
    </section>
  );
};

export default Portfolio;
