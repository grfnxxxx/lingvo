import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

function Header({ isMenuOpen, setIsMenuOpen, changeLanguage }) {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">Лингво+</Link>
      </div>
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg viewBox="0 0 24 24" className={isMenuOpen ? 'open' : ''}>
          {isMenuOpen ? (
            <>
              <path className="line" d="M6 18L18 6" />
              <path className="line" d="M6 6L18 18" />
            </>
          ) : (
            <>
              <path className="line" d="M4 6h16" />
              <path className="line" d="M4 12h16" />
              <path className="line" d="M4 18h16" />
            </>
          )}
        </svg>
      </button>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="nav-link">{t('nav.home')}</Link></li>
            <li><Link to="/news" onClick={() => setIsMenuOpen(false)} className="nav-link">{t('nav.news')}</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="nav-link">{t('nav.about')}</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="nav-link">{t('nav.contact')}</Link></li>
            <li><Link to="/services" onClick={() => setIsMenuOpen(false)} className="nav-link">{t('nav.services')}</Link></li>
          </ul>
        </nav>
        <div className="lang-switcher">
          <button onClick={() => changeLanguage('ru')} className="lang-button">Русский</button>
          <button onClick={() => changeLanguage('en')} className="lang-button">English</button>
        </div>
      </div>
      <div className="desktop-lang-switcher">
        <button onClick={() => changeLanguage('ru')} className="lang-button">Русский</button>
        <button onClick={() => changeLanguage('en')} className="lang-button">English</button>
      </div>
    </header>
  );
}

export default Header;