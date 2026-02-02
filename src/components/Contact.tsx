import { useState } from 'react';
import contactImage from '../assets/contact.jpg';
import './Contact.css';

const insuranceTypes = [
  { value: '', label: 'Sélectionnez un type d\'assurance' },
  { value: 'auto', label: 'Assurance Auto' },
  { value: 'habitation', label: 'Assurance Habitation' },
  { value: 'sante', label: 'Santé & Prévoyance' },
  { value: 'rc', label: 'Responsabilité Civile' },
  { value: 'autre', label: 'Autre' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        type: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">Demandez votre devis</h2>
            <p className="contact-text">
              Remplissez le formulaire ci-contre et nous vous recontacterons
              dans les plus brefs délais pour étudier votre demande.
            </p>

            <div className="contact-image-wrapper">
              <img
                src={contactImage}
                alt="Contact FD Assurance"
                className="contact-image"
              />
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Téléphone fixe</h4>
                  <p>01 47 33 20 20</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Téléphone portable</h4>
                  <p>06 98 80 96 50</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Emails</h4>
                  <p>devis@fdassurance.com</p>
                  <p>info@fdassurance.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg viewBox="0 0 24 24" className="icon">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4>Adresse</h4>
                  <p>27 Bd Voltaire, 92600 – Asnières, France</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <svg viewBox="0 0 24 24" className="icon-lg">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Demande envoyée !</h3>
                <p>Nous vous recontacterons dans les plus brefs délais.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="nom">Nom complet</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="form-input"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="votre@email.fr"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="telephone">Téléphone</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className="form-input"
                      placeholder="06 12 34 56 78"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="type">Type d'assurance</label>
                    <select
                      id="type"
                      name="type"
                      className="form-select"
                      value={formData.type}
                      onChange={handleChange}
                      required
                    >
                      {insuranceTypes.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Décrivez votre besoin..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
