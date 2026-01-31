import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AssuranceAuto.css';

const AssuranceAuto = () => {
    return (
        <>
            <Header />
            <main className="insurance-page">
                {/* Hero Section */}
                <section className="insurance-hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">Assurance Auto</h1>
                            <p className="hero-subtitle">
                                Protégez votre véhicule avec une assurance auto adaptée à vos besoins et à votre budget.
                                FD Assurance vous accompagne pour trouver la meilleure couverture.
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
                            <h2>Une protection complète pour votre véhicule</h2>
                            <p>
                                L'assurance automobile est obligatoire pour circuler en toute légalité. Au-delà de cette obligation,
                                elle vous protège financièrement en cas d'accident, de vol ou de dommages. Que vous recherchiez
                                une assurance au tiers, intermédiaire ou tous risques, FD Assurance analyse vos besoins pour vous
                                proposer les garanties les plus adaptées.
                            </p>
                            <p>
                                En tant que courtier indépendant, nous comparons les offres de multiples assureurs pour vous garantir
                                le meilleur rapport qualité-prix. Notre expertise vous permet d'éviter les pièges des contrats
                                inadaptés et de bénéficier d'une couverture sur mesure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Notre accompagnement */}
                <section className="section section-alt insurance-support">
                    <div className="container">
                        <div className="section-title">
                            <h2>Notre accompagnement</h2>
                            <p>Ce que FD Assurance met en place pour votre assurance auto</p>
                        </div>

                        <div className="support-grid">
                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Analyse personnalisée</h3>
                                <p>Étude approfondie de votre profil de conducteur, de votre véhicule et de vos habitudes de conduite.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Comparaison multi-assureurs</h3>
                                <p>Nous sollicitons plusieurs compagnies pour vous présenter les meilleures offres du marché.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Optimisation des garanties</h3>
                                <p>Conseil sur les garanties essentielles et les options utiles selon votre situation.</p>
                            </div>

                            <div className="support-card">
                                <div className="support-icon">
                                    <svg viewBox="0 0 24 24" className="icon icon-lg">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3>Gestion des sinistres</h3>
                                <p>Accompagnement complet en cas d'accident : déclaration, suivi et défense de vos intérêts.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Points clés & garanties */}
                <section className="section insurance-guarantees">
                    <div className="container">
                        <div className="section-title">
                            <h2>Points clés & garanties</h2>
                            <p>Les éléments essentiels de votre assurance auto</p>
                        </div>

                        <div className="guarantees-content">
                            <div className="guarantee-block">
                                <h3>Responsabilité Civile (obligatoire)</h3>
                                <p>Couvre les dommages causés à autrui (blessures, dégâts matériels). C'est le minimum légal.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Garantie Vol et Incendie</h3>
                                <p>Protection contre le vol de votre véhicule, les tentatives d'effraction et les dommages causés par un incendie.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Garantie Dommages tous accidents</h3>
                                <p>Prise en charge des réparations de votre véhicule, même si vous êtes responsable de l'accident.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Protection du conducteur</h3>
                                <p>Indemnisation en cas de blessures corporelles, quelle que soit votre responsabilité.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Assistance et dépannage</h3>
                                <p>Remorquage, véhicule de remplacement, rapatriement en cas de panne ou d'accident.</p>
                            </div>

                            <div className="guarantee-block">
                                <h3>Garanties optionnelles</h3>
                                <p>Bris de glace, protection juridique, valeur à neuf, prêt de volant, etc.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cadre & informations */}
                <section className="section section-alt insurance-info">
                    <div className="container">
                        <div className="info-box">
                            <h3>Cadre & informations générales</h3>
                            <p>
                                Les informations présentées sur cette page sont données à titre indicatif et ne constituent pas
                                un engagement contractuel. Les garanties, franchises et tarifs varient selon les assureurs et
                                votre profil. FD Assurance s'engage à vous fournir une information claire et transparente lors
                                de l'étude de votre dossier.
                            </p>
                            <p>
                                Chaque contrat d'assurance est unique et doit être adapté à votre situation personnelle.
                                Nous vous invitons à nous contacter pour obtenir une étude personnalisée et un devis gratuit.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section id="contact-section" className="section insurance-cta">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Prêt à protéger votre véhicule ?</h2>
                            <p>Contactez FD Assurance pour obtenir un devis personnalisé et gratuit</p>
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

export default AssuranceAuto;
