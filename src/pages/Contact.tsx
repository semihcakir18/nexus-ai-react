export function Contact() {
  return (
    <div className="content">
      <div className="content-container">
        <h1 className="page-title">Contact Us</h1>

        <div className="section">
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-content">
            <p>
              Have questions about our products or want to learn more about how Nexus Technology AI can help
              protect your privacy? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Contact Information</h2>
          <div className="section-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
              <div style={{ padding: 'var(--spacing-lg)', background: 'rgba(33, 94, 97, 0.2)', borderLeft: '4px solid var(--color-light-blue)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-light-blue)', marginBottom: 'var(--spacing-sm)' }}>Email</h3>
                <p style={{ fontSize: '1.125rem' }}>contact@nexustechai.com</p>
              </div>

              <div style={{ padding: 'var(--spacing-lg)', background: 'rgba(33, 94, 97, 0.2)', borderLeft: '4px solid var(--color-light-blue)', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-light-blue)', marginBottom: 'var(--spacing-sm)' }}>Location</h3>
                <p style={{ fontSize: '1.125rem' }}>Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Business Inquiries</h2>
          <div className="section-content">
            <p>
              For partnership opportunities, investment inquiries, or enterprise solutions,
              please reach out to us via email. Our team will get back to you within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
