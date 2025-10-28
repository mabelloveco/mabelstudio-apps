import Layout from '../components/Layout';
import Link from 'next/link';

export default function Apps() {
  return (
    <Layout
      title="Apps — Mabel Studio"
      description="Discover our suite of Shopify apps designed to help merchants grow their business. Free Gift Tiers and more powerful tools."
      canonical="https://mabelstudio.co/apps"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Our Apps</h1>
          <p className="hero-subtitle">
            Powerful Shopify apps designed to help merchants increase revenue, optimize operations, and scale their business.
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {/* Free Gift Tiers App */}
            <div className="card app-card">
              <div className="card-body">
                <div className="app-icon">🎁</div>
                <h3>Free Gift Tiers</h3>
                <p>Increase average order value with smart gift thresholds that encourage customers to spend more.</p>
                <ul style={{ 
                  listStyle: 'none', 
                  marginBottom: 'var(--space-lg)',
                  padding: 0
                }}>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>✓</span>
                    Smart threshold calculation
                  </li>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>✓</span>
                    Real-time analytics
                  </li>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-primary)' }}>✓</span>
                    Customizable design
                  </li>
                </ul>
                <Link href="/apps/free-gift-tiers" className="btn btn-primary" style={{ width: '100%' }}>
                  View details
                </Link>
              </div>
            </div>

            {/* Coming Soon App 1 */}
            <div className="card app-card">
              <div className="card-body">
                <div className="app-icon">📊</div>
                <h3>Analytics Pro</h3>
                <p>Advanced analytics and reporting tools to help you understand your store's performance and customer behavior.</p>
                <ul style={{ 
                  listStyle: 'none', 
                  marginBottom: 'var(--space-lg)',
                  padding: 0
                }}>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                    Custom dashboards
                  </li>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                    Automated reports
                  </li>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                    Customer insights
                  </li>
                </ul>
                <div className="btn btn-secondary" style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}>
                  Coming soon
                </div>
              </div>
            </div>

            {/* Coming Soon App 2 */}
            <div className="card app-card">
              <div className="card-body">
                <div className="app-icon">🚀</div>
                <h3>Growth Tools</h3>
                <p>A comprehensive suite of growth-focused tools to help you scale your Shopify store effectively.</p>
                <ul style={{ 
                  listStyle: 'none', 
                  marginBottom: 'var(--space-lg)',
                  padding: 0
                }}>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                    A/B testing
                  </li>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                    Conversion optimization
                  </li>
                  <li style={{ padding: 'var(--space-xs) 0', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>•</span>
                    Growth tracking
                  </li>
                </ul>
                <div className="btn btn-secondary" style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed' }}>
                  Coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            textAlign: 'center', 
            background: 'var(--color-bg-light)',
            padding: 'var(--space-3xl)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border-light)'
          }}>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>
              Ready to get started?
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-xl)'
            }}>
              Install our apps and start growing your Shopify store today.
            </p>
            <a 
              href="https://apps.shopify.com/free-gift-tiers"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Free Gift Tiers
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

