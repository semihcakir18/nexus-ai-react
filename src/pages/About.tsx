import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="content">
      <div className="content-container">
        <h1 className="page-title">About Nexus Technology AI</h1>

        <div className="section">
          <h2 className="section-title">Our Mission</h2>
          <div className="section-content">
            <p>
              At Nexus Technology AI, we're on a mission to revolutionize e-commerce logistics by putting privacy first.
              We believe that protecting your personal information shouldn't come at the cost of convenience.
            </p>
            <p>
              Through our flagship products, <strong style={{ color: 'var(--color-light-blue)' }}>Janus</strong> and
              <strong style={{ color: '#10b981' }}> WhatsCargo</strong>, we're building a future where every online purchase
              is secure, private, and effortless.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">The Challenge We're Solving</h2>
          <div className="section-content">
            <p>
              Every day, millions of people share their phone numbers, emails, and home addresses with courier services.
              This data is often stored indefinitely, shared with third parties, and can be leaked or misused.
            </p>
            <p>
              <strong>The consequences are real:</strong>
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginTop: '0.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>3.4 billion phishing emails sent daily using leaked shipping data</li>
              <li style={{ marginBottom: '0.5rem' }}>10 million compromised accounts from the Middle East on the dark web</li>
              <li style={{ marginBottom: '0.5rem' }}>Zero control over your data after package delivery</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Our Solution</h2>
          <div className="section-content">
            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong style={{ color: 'var(--color-light-blue)', fontSize: '1.25rem' }}>Janus - Virtual Identity Protection</strong>
            </p>
            <p>
              Janus creates disposable virtual identities for every delivery. Couriers never see your real phone number or email.
              Once your package arrives, the virtual identity is automatically deleted. No data trails. No tracking. Complete privacy.
            </p>

            <p style={{ marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-sm)' }}>
              <strong style={{ color: '#10b981', fontSize: '1.25rem' }}>WhatsCargo - Automated Logistics on WhatsApp</strong>
            </p>
            <p>
              WhatsCargo brings logistics automation directly to WhatsApp, the world's most popular messaging platform.
              It detects courier messages, verifies their legitimacy, and automatically shares your location—all processed
              locally on your device. No cloud uploads. No data exposure.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Our Impact</h2>
          <div className="section-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
              <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '12px', border: '1px solid rgba(98, 159, 173, 0.2)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-light-blue)', marginBottom: '0.5rem' }}>40K+</div>
                <div style={{ opacity: 0.9, fontSize: '0.875rem' }}>Active Subscribers</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '12px', border: '1px solid rgba(98, 159, 173, 0.2)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-light-blue)', marginBottom: '0.5rem' }}>12M+</div>
                <div style={{ opacity: 0.9, fontSize: '0.875rem' }}>Projected SAR Revenue</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '12px', border: '1px solid rgba(98, 159, 173, 0.2)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-light-blue)', marginBottom: '0.5rem' }}>15+</div>
                <div style={{ opacity: 0.9, fontSize: '0.875rem' }}>Industry Partnerships</div>
              </div>
              <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '12px', border: '1px solid rgba(98, 159, 173, 0.2)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-light-blue)', marginBottom: '0.5rem' }}>100%</div>
                <div style={{ opacity: 0.9, fontSize: '0.875rem' }}>Identity Shielding</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Leadership Team</h2>
          <div className="section-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
              <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '16px', border: '1px solid rgba(98, 159, 173, 0.2)' }}>
                <div style={{ width: '100px', height: '100px', background: 'rgba(98, 159, 173, 0.2)', border: '2px solid rgba(98, 159, 173, 0.4)', borderRadius: '50%', margin: '0 auto var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, color: 'var(--color-light-blue)' }}>FA</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.5rem' }}>Fahad Abalkhail</h4>
                <p style={{ color: 'var(--color-light-blue)', marginBottom: '0.5rem', fontWeight: 600 }}>Co-Founder & CGO</p>
                <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>20+ years in Sales & Marketing</p>
              </div>

              <div style={{ textAlign: 'center', padding: 'var(--spacing-md)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '16px', border: '1px solid rgba(98, 159, 173, 0.2)' }}>
                <div style={{ width: '100px', height: '100px', background: 'rgba(98, 159, 173, 0.2)', border: '2px solid rgba(98, 159, 173, 0.4)', borderRadius: '50%', margin: '0 auto var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, color: 'var(--color-light-blue)' }}>VB</div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.5rem' }}>Veysel Baydogan</h4>
                <p style={{ color: 'var(--color-light-blue)', marginBottom: '0.5rem', fontWeight: 600 }}>Co-Founder & CPO</p>
                <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>25+ years in Tech, IoT/AI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Our Values</h2>
          <div className="section-content">
            <p><strong>Privacy First:</strong> We believe privacy is a fundamental right, not a luxury feature.</p>
            <p><strong>User Control:</strong> You own your data. You decide what to share and when to delete it.</p>
            <p><strong>Transparency:</strong> We're open about how our technology works and what data we process.</p>
            <p><strong>Innovation:</strong> We constantly push boundaries to make logistics smarter and more secure.</p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Join Our Mission</h2>
          <div className="section-content">
            <p>
              Whether you're a user looking for privacy, a business seeking logistics solutions, or an investor
              interested in the future of e-commerce security, we'd love to connect.
            </p>
            <p style={{ marginTop: 'var(--spacing-md)' }}>
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex' }}>Get in Touch</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
