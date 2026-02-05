import { Link } from 'react-router-dom';
import './Solutions.css';

const solutions = [
  {
    id: 'auto',
    title: 'Assurance Auto',
    path: '/assurance-auto',
    description: 'Protection complète pour votre véhicule, adaptée à votre usage et à votre budget.',
    icon: (
      <svg viewBox="0 0 24 24" className="solution-icon">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="17" r="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="17" r="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'habitation',
    title: 'Assurance Habitation',
    path: '/assurance-habitation',
    description: 'Sécurisez votre logement et vos biens contre tous les risques du quotidien.',
    icon: (
      <svg viewBox="0 0 24 24" className="solution-icon">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'sante',
    title: 'Santé & Prévoyance',
    path: '/sante-prevoyance',
    description: 'Couverture santé et prévoyance pour vous protéger, vous et vos proches.',
    icon: (
      <svg viewBox="0 0 24 24" className="solution-icon">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'rc',
    title: 'Responsabilité Civile',
    path: '/responsabilite-civile',
    description: 'Protection contre les dommages causés à autrui dans le cadre de vos activités.',
    icon: (
      <svg viewBox="0 0 24 24" className="solution-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <div className="section-title">
          <h2>Nos solutions <span className="text-orange">d'assurance</span></h2>
          <p>Des garanties adaptées à chaque situation, pour particuliers et professionnels.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to={solution.path}
              className="solution-card card"
            >
              <div className="solution-icon-wrapper">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <span className="solution-link">
                En savoir plus
                <svg viewBox="0 0 24 24" className="icon" width="16" height="16">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
