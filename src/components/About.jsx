import { useTranslation } from 'react-i18next';
import '../styles/About.css';

function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <h1>{t('about.title')}</h1>
      <p>{t('about.mission')}</p>
      <p>{t('about.students')}</p>
      <p>{t('about.approach')}</p>
    </div>
  );
}

export default About;