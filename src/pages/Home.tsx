import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Empowering Logistics with Intelligent Privacy Engines</h1>
            <p className="hero-description">
              Nexus Technology AI develops cutting-edge privacy and automation tools for the modern e-commerce landscape. Secure your identity with Janus and automate your cargo with WhatsCargo.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="hero-cta">
                Our Solutions →
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <img src="/ailogo.png" alt="Nexus AI Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-header">
            <h2 className="section-heading">The Global Privacy Threat</h2>
            <p className="section-subheading">
              Every online purchase exposes your personal data to a vast network of third parties
            </p>
          </div>

          <div className="problem-grid">
            <div className="stat-card">
              <div className="stat-icon warning">!</div>
              <h3 className="stat-number">3.4B+</h3>
              <h4 className="stat-title">Phishing Emails Daily</h4>
              <p className="stat-description">
                Using leaked shipping data to trick users into clicking malicious links
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-icon warning">×</div>
              <h3 className="stat-number">10M+</h3>
              <h4 className="stat-title">Leaked Accounts</h4>
              <p className="stat-description">
                Compromised Middle East accounts circulating on the dark web
              </p>
            </div>

            <div className="stat-card highlight">
              <div className="stat-icon danger">◆</div>
              <h3 className="stat-number">0%</h3>
              <h4 className="stat-title">Data Control</h4>
              <p className="stat-description">
                You have zero control over your data after package delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="section-subheading">
              The principles that guide everything we build
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">◇</div>
              <h3 className="value-title">Privacy First</h3>
              <p className="value-description">
                We believe privacy is a fundamental right, not a luxury feature
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">◈</div>
              <h3 className="value-title">User Control</h3>
              <p className="value-description">
                You own your data. You decide what to share and when to delete it
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">◐</div>
              <h3 className="value-title">Transparency</h3>
              <p className="value-description">
                We're open about how our technology works and what data we process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2 className="section-heading">Leadership Team</h2>
            <p className="section-subheading">The founders driving the next generation of Nexus AI technology</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <span className="avatar-initials">FA</span>
              </div>
              <h4 className="team-name">Fahad Abalkhail</h4>
              <p className="team-role">Co-Founder & CGO</p>
              <p className="team-experience">20+ years Sales & Marketing</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">
                <span className="avatar-initials">VB</span>
              </div>
              <h4 className="team-name">Veysel Baydogan</h4>
              <p className="team-role">Co-Founder & CPO</p>
              <p className="team-experience">25+ years Tech, IoT/AI</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
