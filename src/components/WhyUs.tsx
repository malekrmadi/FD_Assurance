import './WhyUs.css';

const advantages = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="advantage-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Indépendance totale',
    description: 'Aucun lien exclusif avec les assureurs. Nous choisissons les meilleures offres pour vous.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="advantage-icon">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Gain de temps',
    description: 'Nous comparons et négocions pour vous auprès de multiples assureurs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="advantage-icon">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Solutions personnalisées',
    description: 'Des garanties adaptées à votre profil, vos besoins et votre budget.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="advantage-icon">
        <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Optimisation des coûts',
    description: 'Le juste niveau de couverture au meilleur prix, sans surpayer.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="advantage-icon">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Suivi et accompagnement',
    description: 'Un interlocuteur dédié pour vos questions et la gestion de vos sinistres.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="advantage-icon">
        <path d="M12 15l-2 5L9 9l11-1-5 2 5 5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.21 15H2L9 3l1 1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Expertise reconnue',
    description: 'Une connaissance approfondie du marché et des réglementations pour vous conseiller efficacement.',
  },
];

const WhyUs = () => {
  return (
    <section id="avantages" className="section whyus">
      <div className="container">
        <div className="section-title">
          <h2>Pourquoi choisir <span className="text-orange">FD Assurance</span> ?</h2>
          <p>Des avantages concrets pour une assurance en toute sérénité.</p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-item">
              <div className="advantage-icon-wrapper">
                {advantage.icon}
              </div>
              <div className="advantage-content">
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
