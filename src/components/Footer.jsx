import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>{t('footer.contact')}: lingvoplus@gmail.com | +7 908 517 50 43</p>
      <p>{t('footer.address')}: {t('footer.city')}</p>
      <p>{t('footer.created')}</p>
    </footer>
  );
}

export default Footer;