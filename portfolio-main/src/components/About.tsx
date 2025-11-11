import { Download } from 'lucide-react';
import aboutImage from '@/assets/breno-about.jpg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative max-w-md mx-auto">
            <img
              src={aboutImage}
              alt="Foto sobre mim"
              className="w-full aspect-square object-cover rounded-full shadow-2xl"
            />
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-8 -translate-y-8 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/20 rounded-full translate-x-6 translate-y-6 animate-pulse-slow delay-500"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="section-header md:text-left mb-6">
            {t('about.title')}
          </h2>
          <p className="section-description md:text-left md:mx-0 mb-8 text-lg">
            {t('about.description')}
          </p>
          <div className="flex justify-center md:justify-start">
            <a 
              href="#" 
              download
              className="btn-portfolio"
            >
              <Download size={20} className="mr-2" />
              {t('about.download')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;