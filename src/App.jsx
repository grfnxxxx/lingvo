import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import News from './components/News';
import About from './components/About'; 
import Contact from './components/Contact';
import Services from './components/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import Left from './assets/left.png';
import Right from './assets/right.jpg';

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
      <div className="app-container">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} changeLanguage={changeLanguage} />
        <main className="main-content">
          <section className="sidebar-left">
            <nav className="desktop-nav">
              <ul>
                <li><Link to="/" className="nav-link">{t('nav.home')}</Link></li>
                <li><Link to="/news" className="nav-link">{t('nav.news')}</Link></li>
                <li><Link to="/about" className="nav-link">{t('nav.about')}</Link></li>
                <li><Link to="/contact" className="nav-link">{t('nav.contact')}</Link></li>
                <li><Link to="/services" className="nav-link">{t('nav.services')}</Link></li>
              </ul>
            </nav>
            <div className="banner">
              <img src={Left} alt="Left" />
            </div>
          </section>
          <article className="main-article">
            <Routes>
              <Route path="/lingvo/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </article>
          <aside className="sidebar-right">
            <div className="tag-cloud">
              <h3>{t('tags')}</h3>
              <div className="tags">
                {['English', 'Spanish', 'French', 'Chinese', 'Learning', 'Courses'].map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="banner">
              <img src={Right} alt="Right" />
            </div>
          </aside>
        </main>
        <Footer />
      </div>
  );
}

export default App;
