import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AssuranceAuto.css'; // Using the same CSS for consistency

const AssuranceHabitation = () => {
    return (
        <>
            <Header />
            <main className="insurance-page">
                {/* Hero Section */}
                <section className="insurance-hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">Assurance Habitation</h1>
                            <p className="hero-subtitle">
                                Protégez votre foyer et vos biens précieux. FD Assurance vous aide à trouver
                                la couverture idéale pour votre maison ou votre appartement.
                            </p>
                            <a href="#contact-section" className="btn btn-primary">
                                Obtenir un devis gratuit
                            </a>
                        </div>
                    </div>
                </section>

                {/* Présentation */}
                <section className="section insurance-intro">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Sérénité et sécurité pour votre logement</h2>
                            <p>
                                Votre foyer est bien plus qu'un simple toit. C'est l'endroit où vous construisez votre vie.
                                Une bonne assurance habitation est essentielle pour faire face aux imprévus : dégâts des eaux,
                                incendie, vol ou catastrophes naturelles.
                            </p>
                            <p>
                                FD Assurance vous accompagne pour décrypter les contrats Multirisques Habitation (MRH) et
                                sélectionner les options qui comptent vraiment pour vous, que vous soyez propriétaire,
                                locataire ou propriétaire non-occupant.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Notre accompagnement */}
                <section className="section section-alt insurance-support">
                    <div className="container">
                        <div className="section-title">
                            <h2>Notre accompagnement</h2>
                            <p>Une expertise dédiée à la protection de votre patrimoine</p>
                        </div>

                        <div className="support-grid">
                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Évaluation des biens</h3>
                                <p>Conseils pour estimer au plus juste la valeur de votre capital mobilier.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Analyse des risques</h3>
                                <p>Identification des spécificités de votre logement (piscine, dépendances, objets d'art).</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Négociation tarifaire</h3>
                                <p>Accès à des tarifs préférentiels auprès des plus grandes compagnies d'assurance.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Assistance 24/7</h3>
                                <p>Mise en relation rapide avec des artisans agréés en cas d'urgence domestique.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Points clés & garanties */}
                <section className="section insurance-guarantees">
                    <div className="container">
                        <div className="section-title">
                            <h2>Points clés & garanties</h2>
                            <p>L'essentiel de votre contrat Multirisques Habitation</p>
                        </div>

                        <div className="guarantees-content">
                            <div className="guarantee-block">
                                <h3>Incendie et risques annexes</h3>
                                <p>Couverture des dommages causés par le feu, la fumée ou la foudre.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Dégâts des eaux</h3>
                                <p>Indemnisation des dommages causés par des fuites, ruptures de canalisations ou infiltrations.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Vol, Vandalisme et Détériorations</h3>
                                <p>Protection de vos biens en cas de cambriolage ou d'actes de malveillance.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Bris de Glace</h3>
                                <p>Remplacement des fenêtres, baies vitrées et parfois même des plaques vitrocéramiques.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Responsabilité Civile Vie Privée</h3>
                                <p>Réparation des dommages que vous ou les membres de votre foyer pourriez causer à des tiers.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Catastrophes Naturelles</h3>
                                <p>Garantie légale couvrant les événements climatiques d'intensité exceptionnelle.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cadre & informations */}
                <section className="section section-alt insurance-info">
                    <div className="container">
                        <div className="info-box">
                            <h3>Informations importantes</h3>
                            <p>
                                Le niveau de franchise (reste à votre charge en cas de sinistre) influence directement le montant
                                de votre cotisation. Nous vous aidons à trouver le bon équilibre selon vos capacités financières.
                            </p>
                            <p>
                                Pensez à signaler tout changement de situation (travaux, nouvel équipement, départ d'un enfant)
                                pour que votre contrat reste toujours en parfaite adéquation avec votre réalité.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section id="contact-section" className="section insurance-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Votre foyer mérite la meilleure protection</h2>
                            <p>Contactez FD Assurance pour une étude gratuite et sans engagement</p>
                            <div className="cta-buttons">
                                <Link to="/#contact" className="btn btn-primary">
                                    Demander un devis
                                </Link>
                                <Link to="/" className="btn btn-secondary">
                                    Retour à l'accueil
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AssuranceHabitation;
