import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

function Services() {
  const { t } = useTranslation();
  return (
    <div className="services">
      <h1>{t('services.title')}</h1>
      <table>
        <thead>
          <tr>
            <th>{t('services.course')}</th>
            <th>{t('services.description')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t('services.courses.0')}</td>
            <td>{t('services.descriptions.0')}</td>
          </tr>
          <tr>
            <td>{t('services.courses.1')}</td>
            <td>{t('services.descriptions.1')}</td>
          </tr>
          <tr>
            <td>{t('services.courses.2')}</td>
            <td>{t('services.descriptions.2')}</td>
          </tr>
          <tr>
            <td>{t('services.courses.3')}</td>
            <td>{t('services.descriptions.3')}</td>
          </tr>
          <tr>
            <td>{t('services.courses.4')}</td>
            <td>{t('services.descriptions.4')}</td>
          </tr>
        </tbody>
      </table>
      <a href="/brochure.pdf" download className="download-button">{t('services.download')}</a>
    </div>
  );
}

export default Services;