import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Nexus Technology AI</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            Leading the revolution in privacy-first logistics automation. Secure your identity with Janus and simplify your deliveries.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/projects" className="footer-link">Products</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Connect</h3>
          <ul className="footer-links">
            <li style={{ opacity: 0.8 }}>Email: contact@nexustechai.com</li>
            <li style={{ opacity: 0.8 }}>Location: Riyadh, Saudi Arabia</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexus Technology AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
