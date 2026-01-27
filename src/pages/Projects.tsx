import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <div className="content">
      <div className="content-container">
        <h1 className="page-title">The Nexus Product Suite</h1>
        <p style={{ textAlign: 'center', fontSize: '1.125rem', opacity: 0.8, marginBottom: 'var(--spacing-lg)' }}>
          Universal protection and automation for the global logistics ecosystem.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)' }}>
          {/* Janus */}
          <div className="project-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1, fontSize: '6rem' }}>🛡️</div>

            <div style={{ width: '64px', height: '64px', background: 'var(--color-light-blue)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-md)', fontSize: '2rem' }}>
              🛡️
            </div>

            <h3 className="project-title" style={{ fontSize: '2rem' }}>Janus</h3>

            <p className="project-description" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: 'var(--spacing-md)' }}>
              The privacy powerhouse. <strong>Janus</strong> creates Virtual Identities for every transaction, ensuring your real phone number and email are never exposed to third-party couriers or databases.
            </p>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--color-light-blue)', fontSize: '1.25rem' }}>✓</span>
                <span>Disposable Virtual Contact Info</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--color-light-blue)', fontSize: '1.25rem' }}>✓</span>
                <span>AI-Managed Communications</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--color-light-blue)', fontSize: '1.25rem' }}>✓</span>
                <span>Post-Delivery Data Erasure</span>
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }}>Explore Janus</button>
          </div>

          {/* WhatsCargo */}
          <div className="project-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1, fontSize: '6rem' }}>💬</div>

            <div style={{ width: '64px', height: '64px', background: '#10b981', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-md)', fontSize: '2rem' }}>
              🚚
            </div>

            <h3 className="project-title" style={{ fontSize: '2rem', color: '#10b981' }}>WhatsCargo</h3>

            <p className="project-description" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: 'var(--spacing-md)' }}>
              Logistics automation on the world's most popular messaging app. <strong>WhatsCargo</strong> detects logistics intent and automates coordinate sharing and courier verification locally on-device.
            </p>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                <span>Real-time Cargo Intent Detection</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                <span>Local On-Device Encryption</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                <span>Instant Live Location Replies</span>
              </div>
            </div>

            <Link to="/whatscargo" className="btn" style={{ width: '100%', background: '#10b981', color: 'white', borderColor: '#10b981' }}>
              Go WhatsCargo
            </Link>
          </div>
        </div>

        {/* Additional Info Section */}
        <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'rgba(98, 159, 173, 0.05)', border: '1px solid rgba(98, 159, 173, 0.2)', borderRadius: '16px' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-light-blue)', marginBottom: 'var(--spacing-md)' }}>Why Choose Nexus?</h3>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, opacity: 0.9 }}>
            In the rapidly evolving world of e-commerce logistics, protecting your personal information is more critical than ever.
            Nexus Technology AI combines cutting-edge privacy technology with seamless automation to give you complete control
            over your data while simplifying your delivery experience.
          </p>
        </div>
      </div>
    </div>
  );
}
