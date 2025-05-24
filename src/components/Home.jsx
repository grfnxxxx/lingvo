import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home">
      <h1>{t('home.title')}</h1>
      <p className="slogan">{t('home.slogan')}</p>
      <div className="advantages">
        <h2>Наши преимущества:</h2>
        <ul>
          {t('home.advantages', { returnObjects: true }).map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;