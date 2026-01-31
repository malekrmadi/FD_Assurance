import aboutImage from '../assets/about-office.jpg';
import './About.css';

const features = [
  {
    title: 'Cabinet indépendant',
    description: 'Liberté totale dans le choix des solutions proposées.',
  },
  {
    title: 'Analyse des besoins',
    description: 'Étude personnalisée de votre situation et de vos risques.',
  },
  {
    title: 'Solutions optimisées',
    description: 'Garanties adaptées au meilleur rapport qualité-prix.',
  },
  {
    title: 'Accompagnement',
    description: 'Suivi et assistance tout au long de vos contrats.',
  },
];

const About = () => {
  return (
    <section id="cabinet" className="section section-alt about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img 
              src={aboutImage} 
              alt="Bureau moderne FD Assurance" 
              className="about-image"
            />
          </div>
          
          <div className="about-content">
            <h2 className="about-title">Le cabinet FD Assurance</h2>
            <p className="about-text">
              FD Assurance est un cabinet de courtage indépendant spécialisé dans l'accompagnement 
              des particuliers et des professionnels. Notre mission : vous aider à identifier 
              les garanties dont vous avez réellement besoin et à trouver les solutions les plus 
              adaptées à votre situation.
            </p>
            <p className="about-text">
              Grâce à notre indépendance vis-à-vis des compagnies d'assurance, nous vous proposons 
              une analyse objective et des solutions personnalisées, sans parti pris.
            </p>
            
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" className="icon">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="about-feature-content">
                    <h4 className="about-feature-title">{feature.title}</h4>
                    <p className="about-feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
