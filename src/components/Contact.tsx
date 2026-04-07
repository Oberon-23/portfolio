import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" />
  </svg>
);

const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/5522997789693?text=Ol%C3%A1%20Breno,%20vim%20do%20seu%20portf%C3%B3lio!',
      hoverColor: 'hover:bg-green-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/brenosilvarangel/',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Oberon-23/Oberon-23',
      hoverColor: 'hover:bg-gray-700',
    },
    {
      name: 'Kaggle',
      icon: null,
      href: 'https://www.kaggle.com/brenosilvabarros',
      hoverColor: 'hover:bg-cyan-500',
    },
    {
      name: 'E-mail',
      icon: Mail,
      href: 'mailto:brenoosbr@outlook.com',
      hoverColor: 'hover:bg-red-500',
    },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 pt-20 pb-8 text-center">
      <div className="portfolio-logo text-2xl mb-8 mx-auto">B</div>
      <h2 className="section-header mb-4">{t('contact.title')}</h2>
      <p className="section-description mb-12">{t('contact.description')}</p>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 ${social.hoverColor} hover:shadow-lg`}
              aria-label={social.name}
            >
              {IconComponent ? (
                <IconComponent size={24} className="text-white transition-colors duration-300" />
              ) : (
                <span className="text-white transition-colors duration-300">
                  <KaggleIcon />
                </span>
              )}
            </a>
          );
        })}
      </div>

      <div className="mt-12">
        <a href="mailto:brenoosbr@outlook.com" className="btn-portfolio text-lg px-8 py-4">
          <Mail size={20} className="mr-2" />
          {t('contact.cta')}
        </a>
      </div>
    </section>
  );
};

export default Contact;