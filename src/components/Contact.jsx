import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.phone')}: +7 908 517 50 43</p>
      <p>{t('contact.email')}: lingvoplus@gmail.com</p>
      <p>{t('contact.address')}: {t('contact.city')}</p>
    </div>
  );
}

export default Contact;