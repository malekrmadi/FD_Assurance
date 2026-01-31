import processImage from '../assets/process-consulting.jpg';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Analyse des besoins',
    description: 'Nous étudions votre situation, vos risques et vos attentes pour comprendre précisément vos besoins.',
  },
  {
    number: '02',
    title: 'Sélection des solutions',
    description: 'Nous comparons les offres du marché et sélectionnons les garanties les plus adaptées à votre profil.',
  },
  {
    number: '03',
    title: 'Mise en place',
    description: 'Nous gérons toutes les formalités de souscription pour une mise en place simple et rapide.',
  },
  {
    number: '04',
    title: 'Suivi continu',
    description: 'Nous restons à vos côtés pour la gestion de vos contrats et l\'évolution de vos besoins.',
  },
];

const Process = () => {
  return (
    <section id="approche" className="section section-alt process">
      <div className="container">
        <div className="section-title">
          <h2>Notre approche</h2>
          <p>Une méthodologie claire et structurée pour vous accompagner efficacement.</p>
        </div>
        
        <div className="process-content">
          <div className="process-image-wrapper">
            <img 
              src={processImage} 
              alt="Consultation et accompagnement" 
              className="process-image"
            />
          </div>
          
          <div className="process-timeline">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
