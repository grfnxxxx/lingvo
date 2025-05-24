import { useTranslation } from 'react-i18next';
import '../styles/News.css';

function News() {
  const { t } = useTranslation();
  return (
    <div className="news">
      <h1>{t('news.title')}</h1>
      <ul>
        <li>{t('news.articles.0')}</li>
        <li>{t('news.articles.1')}</li>
        <li>{t('news.articles.2')}</li>
        <li>{t('news.articles.3')}</li>
      </ul>
    </div>
  );
}

export default News;