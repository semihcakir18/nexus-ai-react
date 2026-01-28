import { Link } from 'react-router-dom';

export function Leadership() {
  return (
    <div className="content">
      <div className="content-container">
        <h1 className="page-title">Leadership Team</h1>
        
        <div className="section">
          <p className="section-subheading" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
            Meet the visionaries driving Nexus AI technology forward, bringing decades of experience in technology, marketing, and logistics to secure your digital future.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', marginTop: 'var(--spacing-xl)' }}>
            <div className="team-card" style={{ padding: 'var(--spacing-xl)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '24px', border: '1px solid rgba(98, 159, 173, 0.2)', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', background: 'rgba(98, 159, 173, 0.2)', border: '2px solid rgba(98, 159, 173, 0.4)', borderRadius: '50%', margin: '0 auto var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-light-blue)' }}>FA</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.5rem' }}>Fahad Abalkhail</h4>
              <p style={{ color: 'var(--color-light-blue)', marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>Co-Founder & CGO</p>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                With over 20 years of experience in Sales and Marketing, Fahad leads our growth strategy and global outreach, ensuring Nexus AI solutions reach those who need them most.
              </p>
            </div>

            <div className="team-card" style={{ padding: 'var(--spacing-xl)', background: 'rgba(98, 159, 173, 0.05)', borderRadius: '24px', border: '1px solid rgba(98, 159, 173, 0.2)', textAlign: 'center' }}>
              <div style={{ width: '120px', height: '120px', background: 'rgba(98, 159, 173, 0.2)', border: '2px solid rgba(98, 159, 173, 0.4)', borderRadius: '50%', margin: '0 auto var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-light-blue)' }}>VB</div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.5rem' }}>Veysel Baydogan</h4>
              <p style={{ color: 'var(--color-light-blue)', marginBottom: '1rem', fontWeight: 600, fontSize: '1.1rem' }}>Co-Founder & CPO</p>
              <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                Aris brings 25+ years of expertise in Tech, IoT, and AI. As Chief Product Officer, he oversees the architectural design and technical innovation of Janus and WhatsCargo.
              </p>
            </div>
          </div>
        </div>

        <div className="section" style={{ marginTop: 'var(--spacing-xl)', textAlign: 'center' }}>
          <h2 className="section-title">Our Vision</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto var(--spacing-md)', opacity: 0.9 }}>
            We are committed to building a world where privacy is not an afterthought but the foundation of every digital interaction. Join us as we redefine logistics security.
          </p>
          <div style={{ marginTop: 'var(--spacing-lg)' }}>
            <Link to="/contact" className="navbar-cta" style={{ display: 'inline-block' }}>Partner With Us →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
