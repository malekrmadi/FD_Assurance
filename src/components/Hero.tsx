import heroImage from '../assets/hero-business.jpg';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Des solutions d'assurance adaptées à vos besoins.
          </h1>
          <p className="hero-subtitle">
            FD Assurance accompagne particuliers et professionnels dans le choix de garanties fiables et compétitives.
          </p>
          <div className="hero-actions">
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Demander un devis
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, '#contact')}
            >
              Être contacté
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img 
            src={heroImage} 
            alt="Protection et sécurité - FD Assurance" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
