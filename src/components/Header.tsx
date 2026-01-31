import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import logoNavbar from '../assets/fd-assurance-logo-navbar.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const insuranceLinks = [
    { to: '/assurance-auto', label: 'Assurance Auto' },
    { to: '/assurance-habitation', label: 'Assurance Habitation' },
    { to: '/sante-prevoyance', label: 'Santé & Prévoyance' },
    { to: '/responsabilite-civile', label: 'Responsabilité Civile' },
  ];

  const navLinks = [
    { href: '#cabinet', label: 'Le cabinet' },
    { href: '#avantages', label: 'Avantages' },
    { href: '#approche', label: 'Notre approche' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate there with the anchor
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={closeMenus}>
          <img src={logoNavbar} alt="FD Assurance Logo" className="navbar-logo" />
        </Link>

        <nav className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="nav-link nav-dropdown-trigger"
              onClick={handleDropdownClick}
              aria-expanded={isDropdownOpen}
            >
              Nos offres
              <svg
                className={`dropdown-icon ${isDropdownOpen ? 'is-open' : ''}`}
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`dropdown-menu ${isDropdownOpen ? 'is-open' : ''}`}>
              {insuranceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="dropdown-item"
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="header-cta btn btn-primary"
          onClick={(e) => scrollToSection(e, '#contact')}
        >
          Demander un devis
        </a>

        <button
          className="header-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'is-open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
