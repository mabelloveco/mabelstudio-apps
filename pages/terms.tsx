import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout
      title="Terms of Service — Mabel Studio"
      description="Read our terms of service for using Mabel Studio apps. Understand your rights and responsibilities when using our services."
      canonical="https://mabelstudio.co/terms"
    >
      <section className="hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="hero-subtitle">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using Mabel Studio apps, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Use License</h2>
              <p>Permission is granted to temporarily use our apps for personal and commercial use. This is the grant of a license, not a transfer of title.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Disclaimer</h2>
              <p>The materials on our apps are provided on an 'as is' basis. Mabel Studio makes no warranties, expressed or implied, and hereby disclaims all other warranties.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Limitations</h2>
              <p>In no event shall Mabel Studio or its suppliers be liable for any damages arising out of the use or inability to use our apps.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Accuracy of Materials</h2>
              <p>The materials appearing on our apps could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Modifications</h2>
              <p>Mabel Studio may revise these terms of service at any time without notice. By using our apps, you are agreeing to be bound by the current version of these terms.</p>
            </div>
            
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at support@mabelstudio.co</p>
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

