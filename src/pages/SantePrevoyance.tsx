import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import healthCover from '../assets/healthcover.jpg';
import healthDetail from '../assets/health-detail.jpg';
import './AssuranceAuto.css'; // Using the same CSS for consistency

const SantePrevoyance = () => {
    return (
        <>
            <Header />
            <main className="insurance-page">
                {/* Hero Section */}
                <section
                    className="insurance-hero"
                    style={{ backgroundImage: `url(${healthCover})` }}
                >
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">Santé & <span className="text-orange">Prévoyance</span></h1>
                            <p className="hero-subtitle">
                                Prenez soin de vous et de vos proches. FD Assurance vous propose des solutions
                                complètes pour couvrir vos frais de santé et anticiper les aléas de la vie.
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
                                <img src={healthDetail} alt="Détail Santé & Prévoyance" className="detail-image" />
                            </div>
                            <div className="detail-content">
                                <h2>Votre capital <span className="text-orange">santé</span> est votre bien le plus précieux</h2>
                                <p>
                                    Face à l'évolution des remboursements de la Sécurité Sociale, disposer d'une excellente
                                    complémentaire santé est devenu indispensable pour garantir l'accès aux meilleurs soins
                                    pour toute la famille.
                                </p>
                                <p>
                                    Au-delà du remboursement des soins, la prévoyance permet de maintenir votre niveau de vie
                                    et celui de vos proches en cas d'imprévus (arrêt de travail, invalidité).
                                </p>
                                <p>
                                    Chez FD Assurance, nous analysons vos besoins réels (optique, dentaire, hospitalisation)
                                    pour vous proposer une couverture qui vous ressemble, sans payer pour des garanties inutiles.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Présentation (modifiée) */}
                <section className="section section-alt insurance-intro">
                    <div className="container">
                        <div className="intro-content">
                            <h2>Un accompagnement humain pour des enjeux essentiels</h2>
                            <p>
                                Nous ne nous contentons pas de vous proposer un contrat. Notre valeur ajoutée réside dans
                                le conseil durable et l'adaptation constante de vos garanties à votre situation familiale
                                et professionnelle, avec une attention particulière pour les indépendants et les dirigeants.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Notre accompagnement */}
                <section className="section section-alt insurance-support">
                    <div className="container">
                        <div className="section-title">
                            <h2>Notre <span className="text-orange">accompagnement</span></h2>
                            <p>Un conseil humain pour des enjeux de vie essentiels</p>
                        </div>

                        <div className="support-grid">
                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Bilan personnalisé</h3>
                                <p>Analyse de vos dépenses de santé actuelles et futures pour calibrer vos garanties.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Protection familiale</h3>
                                <p>Solutions dédiées pour protéger conjoint et enfants contre les coups durs.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Offres TNS & Entreprises</h3>
                                <p>Accompagnement spécifique pour les indépendants et les dirigeants d'entreprise.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Suivi des prestations</h3>
                                <p>Assistance pour comprendre vos décomptes et optimiser votre reste à charge.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Points clés & garanties */}
                <section className="section insurance-guarantees">
                    <div className="container">
                        <div className="section-title">
                            <h2>Points clés & <span className="text-orange">garanties</span></h2>
                            <p>Des garanties solides pour votre futur</p>
                        </div>

                        <div className="guarantees-content">
                            <div className="guarantee-block">
                                <h3>Hospitalisation</h3>
                                <p>Prise en charge des frais de séjour, honoraires médicaux et chambre particulière.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Soins courants</h3>
                                <p>Remboursement des consultations, analyses et médicaments en complément de la SS.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Optique et Dentaire</h3>
                                <p>Forfaits adaptés pour vos lunettes, lentilles et prothèses dentaires.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Maintien de salaire</h3>
                                <p>Indemnités journalières en cas d'arrêt de travail prolongé.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Rente Invalidité</h3>
                                <p>Versement d'une rente si vous ne pouvez plus exercer votre activité professionnelle.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Capital Décès</h3>
                                <p>Soutien financier immédiat versé à vos bénéficiaires désignés.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cadre & informations */}
                <section className="section section-alt insurance-info">
                    <div className="container">
                        <div className="info-box">
                            <h3>Bon à savoir</h3>
                            <p>
                                La loi Hamon et la résiliation infra-annuelle vous permettent de changer de mutuelle à tout
                                moment après un an de contrat. FD Assurance s'occupe de toutes les démarches de résiliation
                                pour vous.
                            </p>
                            <p>
                                Pour la prévoyance, plus on souscrit tôt, moins les cotisations sont élevées et plus les
                                déclarations de santé sont simplifiées.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section id="contact-section" className="section insurance-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Anticipez l'avenir dès aujourd'hui</h2>
                            <p>Contactez FD Assurance pour une étude personnalisée de vos besoins</p>
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

export default SantePrevoyance;
