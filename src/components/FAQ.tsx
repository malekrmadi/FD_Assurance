import { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "Comment FD Assurance analyse-t-elle les besoins de ses clients ?",
        answer: "Notre analyse repose sur une écoute active et une étude personnalisée de votre situation globale. Nous ne nous contentons pas de remplir un formulaire ; nous échangeons avec vous pour comprendre vos priorités, votre budget et les risques spécifiques que vous souhaitez couvrir. C'est cette approche humaine qui nous permet de construire une protection qui vous correspond vraiment."
    },
    {
        question: "Quelle est la valeur ajoutée d'un courtier indépendant dans le choix des garanties ?",
        answer: "Contrairement à un agent général lié à une seule compagnie, le courtier indépendant travaille pour vous, pas pour l'assureur. Notre valeur ajoutée réside dans notre capacité à comparer objectivement des dizaines d'offres du marché, à négocier les tarifs grâce à notre volume d'affaires et à vous conseiller sur les clauses parfois complexes des contrats."
    },
    {
        question: "Comment FD Assurance sélectionne-t-elle les solutions proposées ?",
        answer: "Nous sélectionnons nos partenaires assureurs sur trois critères fondamentaux : la solidité financière de la compagnie, la clarté des garanties proposées et, surtout, la qualité de leur gestion des sinistres. Notre indépendance nous permet d'écarter les solutions qui ne remplissent pas nos exigences de qualité pour nos clients."
    },
    {
        question: "En quoi l'accompagnement fait-il la différence dans la durée ?",
        answer: "L'assurance ne s'arrête pas à la signature du contrat. Notre accompagnement prend tout son sens lors de la gestion des sinistres (où nous défendons vos intérêts face à l'assureur) et lors de vos changements de vie. Nous effectuons une veille régulière sur vos contrats pour s'assurer qu'ils restent compétitifs et adaptés."
    },
    {
        question: "Comment adapter une assurance à l'évolution de sa situation ?",
        answer: "La vie n'est pas figée : mariage, déménagement, nouvel emploi, achat de matériel... Chaque changement peut impacter vos besoins de couverture. Nous préconisons un point régulier avec nos clients pour ajuster les garanties. Grâce à la flexibilité de nos partenaires, nous pouvons modifier vos contrats ou en trouver de nouveaux quasi instantanément."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section" id="faq">
            <div className="container">
                <div className="section-title">
                    <h2>Questions Fréquentes</h2>
                    <p>Mieux comprendre notre approche et notre expertise de courtier.</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className="faq-icon"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
