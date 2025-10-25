import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy — Mabel Studio"
      description="Learn how Mabel Studio protects your privacy and handles your data. Our commitment to data protection and privacy."
      canonical="https://mabelstudio.co/privacy"
    >
      <section className="hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="hero-subtitle">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at support@mabelstudio.co</p>
            </div>
            
            <div style={{ 
              padding: 'var(--space-lg)', 
              background: 'var(--color-bg-light)', 
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
