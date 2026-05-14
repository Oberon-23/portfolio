import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/5522997789693?text=Ol%C3%A1%20Breno,%20vim%20do%20seu%20portf%C3%B3lio!',
      color: 'hover:bg-green-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/brenosilvarangel/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Oberon-23/Oberon-23',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'E-mail',
      icon: Mail,
      href: 'mailto:brenoosbr@outlook.com',
      color: 'hover:bg-red-500'
    }
  ];

  return (
    <section id="contact" className="section-container text-center">
      {/* Logo */}
      <div className="portfolio-logo text-2xl mb-8 mx-auto">B</div>
      
      <h2 className="section-header mb-4">{t('contact.title')}</h2>
      
      <p className="section-description mb-12">
        {t('contact.description')}
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 ${social.color} hover:shadow-lg`}
              aria-label={social.name}
            >
              <IconComponent 
                size={24} 
                className="text-white group-hover:text-white transition-colors duration-300" 
              />
            </a>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <a
          href="mailto:brenoosbr@outlook.com"
          className="btn-portfolio text-lg px-8 py-4"
        >
          <Mail size={20} className="mr-2" />
          {t('contact.cta')}
        </a>
      </div>
    </section>
  );
};

export default Contact;