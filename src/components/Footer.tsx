import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer style={{
      padding: '2rem 1rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(0,0,0,0.15)',
    }}>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', margin: 0 }}>
        &copy; {currentYear} Breno Silva Barros Rangel. {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;