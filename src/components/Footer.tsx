import logoMain from '../assets/logo_orange.jfif';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img src={logoMain} alt="FD Assurance Logo" className="footer-logo-img" />
            </a>
            <p className="footer-tagline">
              FD Assurance – particuliers & professionnels.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Navigation</h4>
            <nav className="footer-nav">
              <a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')}>Solutions</a>
              <a href="#cabinet" onClick={(e) => scrollToSection(e, '#cabinet')}>Le cabinet</a>
              <a href="#avantages" onClick={(e) => scrollToSection(e, '#avantages')}>Avantages</a>
              <a href="#approche" onClick={(e) => scrollToSection(e, '#approche')}>Notre approche</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact-info">
              <p>
                <strong>Adresse :</strong><br />
                27 Bd Voltaire<br />
                92600 – Asnières<br />
                France
              </p>
              <p>
                <strong>Téléphone fixe :</strong><br />
                01 47 33 20 20
              </p>
              <p>
                <strong>Téléphone portable :</strong><br />
                06 98 80 96 50
              </p>
              <p>
                <strong>Emails :</strong><br />
                devis@fdassurance.com<br />
                info@fdassurance.com
              </p>
            </div>
          </div>

          <div className="footer-legal">
            <h4 className="footer-title">Légal</h4>
            <nav className="footer-nav">
              <a href="#">Mentions légales</a>
              <a href="#">Politique de confidentialité</a>
              <a href="#">CGU</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} FD Assurance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
