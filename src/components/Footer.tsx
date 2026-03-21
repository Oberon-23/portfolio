import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 text-center border-t border-white/10 bg-black/20">
      <p className="text-muted-foreground">
        &copy; {currentYear} Breno Silva Barros Rangel. {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;