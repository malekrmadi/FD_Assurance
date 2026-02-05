import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import liabilityCover from '../assets/liability-cover.jpg';
import liabilityDetail from '../assets/liability-detail.jpg';
import './AssuranceAuto.css'; // Using the same CSS for consistency

const ResponsabiliteCivile = () => {
    return (
        <>
            <Header />
            <main className="insurance-page">
                {/* Hero Section */}
                <section
                    className="insurance-hero"
                    style={{ backgroundImage: `url(${liabilityCover})` }}
                >
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">Responsabilité <span className="text-orange">Civile</span></h1>
                            <p className="hero-subtitle">
                                Face aux dommages causés à autrui, ne restez pas sans protection.
                                FD Assurance sécurise votre responsabilité au quotidien.
                            </p>
                            <a href="#contact-section" className="btn btn-primary">
                                Contactez-nous pour plus de détails
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section Détail */}
                <section className="section insurance-detail">
                    <div className="container">
                        <div className="detail-grid">
                            <div className="detail-image-wrapper">
                                <img src={liabilityDetail} alt="Détail Responsabilité Civile" className="detail-image" />
                            </div>
                            <div className="detail-content">
                                <h2>Protéger votre avenir financier face à <span className="text-orange">l'imprévu</span></h2>
                                <p>
                                    Que ce soit par inattention, par imprudence ou par négligence, nous pouvons tous causer
                                    un préjudice à un tiers. La Responsabilité Civile est l'obligation de réparer ces dommages.
                                </p>
                                <p>
                                    Sans une couverture adéquate, les conséquences financières de ces actes peuvent être
                                    dévastatrices pour votre patrimoine. FD Assurance vous aide à souscrire les garanties
                                    nécessaires pour couvrir les dommages corporels, matériels et immatériels.
                                </p>
                                <p>
                                    Nos experts analysent vos activités personnelles et professionnelles pour garantir
                                    que chaque risque est anticipé et correctement assuré.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Présentation (modifiée) */}
                <section className="section section-alt insurance-intro">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Une protection indispensable pour tous et partout</h2>
                            <p>
                                Au-delà du cadre familial, nous proposons des solutions de Responsabilité Civile Pro (RC Pro)
                                spécifiques pour les professions libérales et les artisans. Notre rôle est de vérifier
                                les doublons et d'optimiser vos plafonds d'indemnisation pour une sécurité maximale.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Notre accompagnement */}
                <section className="section section-alt insurance-support">
                    <div className="container">
                        <div className="section-title">
                            <h2>Notre <span className="text-orange">accompagnement</span></h2>
                            <p>Une expertise juridique et assurantielle à votre service</p>
                        </div>

                        <div className="support-grid">
                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Défense de vos intérêts</h3>
                                <p>Assistance juridique pour vous défendre face aux réclamations de tiers.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Protection familiale</h3>
                                <p>Extension des garanties à l'ensemble des membres de votre foyer.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                                        <line x1="12" y1="16" x2="12.01" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Vérification des doublons</h3>
                                <p>Analyse de vos autres contrats pour éviter de payer deux fois pour la même protection.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Assistance sinistre</h3>
                                <p>Aide à la rédaction des protocoles d'accord et suivi des indemnisations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Points clés & garanties */}
                <section className="section insurance-guarantees">
                    <div className="container">
                        <div className="section-title">
                            <h2>Points clés & <span className="text-orange">garanties</span></h2>
                            <p>Les piliers de votre protection civile</p>
                        </div>

                        <div className="guarantees-content">
                            <div className="guarantee-block">
                                <h3>Dommages Corporels</h3>
                                <p>Prise en charge des frais médicaux et préjudices physiques causés à un tiers.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Dommages Matériels</h3>
                                <p>Remboursement ou réparation des biens appartenant à autrui que vous auriez endommagés.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Dommages Immatériels</h3>
                                <p>Couverture des pertes financières consécutives à un dommage matériel ou corporel.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>RC Scolaire et Extra-scolaire</h3>
                                <p>Garanties spécifiques pour vos enfants lors de leurs activités quotidiennes.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Défense et Recours</h3>
                                <p>Prise en charge des frais de justice et honoraires d'avocat si un litige survient.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Garanties Sportives</h3>
                                <p>Protection lors de la pratique de sports de loisir (hors sports à risques spécifiques).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cadre & informations */}
                <section className="section section-alt insurance-info">
                    <div className="container">
                        <div className="info-box">
                            <h3>Cadre légal</h3>
                            <p>
                                La Responsabilité Civile est souvent incluse dans votre contrat d'assurance habitation.
                                Cependant, les plafonds d'indemnisation et les exclusions varient fortement d'un assureur à l'autre.
                            </p>
                            <p>
                                Pour les professions libérales ou les artisans, une RC Professionnelle (RC Pro) spécifique
                                est indispensable pour couvrir les erreurs ou omissions liées à l'activité métier.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section id="contact-section" className="section insurance-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Protégez votre avenir et votre patrimoine</h2>
                            <p>Contactez FD Assurance pour une étude personnalisée de vos risques</p>
                            <div className="cta-buttons">
                                <Link to="/#contact" className="btn btn-primary">
                                    Contactez-nous pour plus de détails
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

export default ResponsabiliteCivile;
