import Layout from '../components/Layout';

export default function Support() {
  return (
    <Layout
      title="Support — Mabel Studio"
      description="Get help with Mabel Studio apps. Find documentation, contact support, and get the most out of your Shopify apps."
      canonical="https://mabelstudio.co/support"
    >
      <section className="hero">
        <div className="container">
          <h1>Support</h1>
          <p className="hero-subtitle">
            We're here to help you get the most out of your Mabel Studio apps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <div className="card-body">
                <h3>Documentation</h3>
                <p>Comprehensive guides and tutorials to help you set up and configure your apps.</p>
                <a href="#" className="btn btn-primary">View Documentation</a>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <h3>Contact Support</h3>
                <p>Need help? Our support team is here to assist you with any questions or issues.</p>
                <a href="mailto:support@mabelstudio.co" className="btn btn-secondary">Email Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>How do I install an app?</h3>
              <p>Visit the Shopify App Store, find the Mabel Studio app you want, and click "Add app". Follow the installation prompts to complete setup.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Can I customize the apps?</h3>
              <p>Yes, all our apps come with customization options to match your brand. Check the app settings for design and configuration options.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>What if I need help with setup?</h3>
              <p>Our support team is available to help with setup and configuration. Contact us at support@mabelstudio.co for personalized assistance.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Are there any compatibility issues?</h3>
              <p>Our apps are designed to work with all Shopify themes and are regularly tested for compatibility. If you encounter any issues, please contact support.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

