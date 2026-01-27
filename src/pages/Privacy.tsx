export function Privacy() {
  return (
    <div className="content">
      <div className="content-container">
        <h1 className="page-title">Privacy Policy</h1>

        <p style={{ opacity: 0.7, marginBottom: 'var(--spacing-lg)', fontSize: '0.95rem' }}>
          Last updated: January 2026
        </p>

        <div className="section">
          <p className="section-content">
            At Nexus Technology AI, your privacy is our primary mission. This policy describes how Janus and WhatsCargo handle your data.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">1. Data Collection</h2>
          <div className="section-content">
            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
              <strong style={{ color: 'var(--color-light-blue)' }}>Janus:</strong> We generate virtual identities. We do not store your original phone number or email longer than necessary to create the virtual bridge. Once a package is delivered, the connection is purged.
            </p>
            <p>
              <strong style={{ color: '#10b981' }}>WhatsCargo:</strong> All message processing happens <strong>locally on your Android device</strong>. We do not upload your WhatsApp messages or contacts to our servers.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">2. Data Usage</h2>
          <div className="section-content">
            <p>
              We use data solely to facilitate logistics communication. We do not sell your personal data to third-party marketers.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">3. User Rights</h2>
          <div className="section-content">
            <p>
              You have the right to delete your account and all associated virtual data at any time via the app settings.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">4. Third-Party Services</h2>
          <div className="section-content">
            <p>
              Our services may integrate with third-party logistics providers. While we ensure your virtual identity protects your real information, we recommend reviewing the privacy policies of any courier services you use.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">5. Security Measures</h2>
          <div className="section-content">
            <p style={{ marginBottom: 'var(--spacing-sm)' }}>
              We employ enterprise-grade security to protect your data:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginBottom: 'var(--spacing-sm)' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>End-to-End Encryption:</strong> All communication between your device and the Janus engine is encrypted using AES-256.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Zero-Knowledge Local Processing:</strong> WhatsCargo processes logistics intent on-device, meaning we never "see" your messages.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Identity Isolation:</strong> Every delivery gets a unique virtual token, preventing couriers from building a profile based on your history.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Regular Audits:</strong> Our infrastructure undergoes quarterly security assessments by independent third parties.</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">6. Children's Privacy</h2>
          <div className="section-content">
            <p>
              Our services are not intended for users under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">7. International Data Transfers</h2>
          <div className="section-content">
            <p>
              Your data may be processed in data centers located in various countries. We ensure that all transfers comply with applicable data protection regulations.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">8. Changes to This Policy</h2>
          <div className="section-content">
            <p>
              We may update this privacy policy from time to time. We will notify you of any significant changes via email or through the app.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">9. Contact Us</h2>
          <div className="section-content">
            <p>
              If you have questions about this privacy policy, please contact us:
            </p>
            <p style={{ marginTop: 'var(--spacing-sm)' }}>
              Email: <a href="mailto:privacy@nexustechai.com" style={{ color: 'var(--color-light-blue)', textDecoration: 'underline' }}>privacy@nexustechai.com</a><br />
              Address: Riyadh, Saudi Arabia
            </p>
          </div>
        </div>

        {/* Cookie Policy Section */}
        <div style={{ marginTop: 'var(--spacing-xl)', padding: 'var(--spacing-lg)', background: 'rgba(98, 159, 173, 0.05)', border: '1px solid rgba(98, 159, 173, 0.2)', borderRadius: '16px' }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--color-light-blue)', marginBottom: 'var(--spacing-md)' }}>Cookie Policy</h2>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            We believe in minimal data tracking. Our website and apps use only essential cookies.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-cream)', marginBottom: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)' }}>1. Essential Cookies</h3>
          <p style={{ opacity: 0.9, marginBottom: 'var(--spacing-md)' }}>
            Required for the functionality of our dashboard and login systems. These do not track your browsing habits.
          </p>

          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-cream)', marginBottom: 'var(--spacing-sm)' }}>2. Analytical Cookies</h3>
          <p style={{ opacity: 0.9 }}>
            We use anonymous telemetry to improve app performance. No personal identifiers are linked to this data. You can manage your preferences at any time through your browser settings or within the Nexus AI mobile app settings page.
          </p>
        </div>
      </div>
    </div>
  );
}
