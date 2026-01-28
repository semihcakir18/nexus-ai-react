import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Nexus<span style={{ color: 'var(--color-light-blue)', fontWeight: 400, fontSize: '0.9rem', marginLeft: '0.25rem' }}>AI</span>
        </Link>

        <button className="navbar-toggle" aria-label="Toggle menu" onClick={toggleMenu}>
          <span>☰</span>
        </button>

        <ul className={`navbar-menu ${isMenuActive ? 'active' : ''}`}>
          <li><NavLink to="/" className="navbar-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/projects" className="navbar-link" onClick={closeMenu}>Products</NavLink></li>
          <li><NavLink to="/about" className="navbar-link" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/leadership" className="navbar-link" onClick={closeMenu}>Leaders</NavLink></li>
          <li><NavLink to="/contact" className="navbar-link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        <Link to="/contact" className="navbar-cta">
          Get Started →
        </Link>
      </div>
    </nav>
  );
}
