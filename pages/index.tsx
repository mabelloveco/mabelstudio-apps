import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout
      title="Mabel Studio — Shopify apps that help merchants grow"
      description="Build powerful Shopify apps that help merchants grow their business. Free Gift Tiers, analytics, and more tools for e-commerce success."
      canonical="https://mabelstudio.co/"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Shopify apps that help merchants grow
          </h1>
          <p className="hero-subtitle">
            Build powerful tools that increase revenue, optimize operations, and scale your business with our suite of Shopify apps.
          </p>
          <div className="hero-ctas">
            <a 
              href="https://apps.shopify.com/free-gift-tiers"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install Free Gift Tiers
            </a>
            <a 
              href="/apps"
              className="btn btn-secondary btn-lg"
            >
              View all apps
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Everything you need to grow your Shopify store</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Powerful apps and tools designed to help merchants increase revenue, optimize operations, and scale their business.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon">
                🎯
              </div>
              <h3>Smart thresholds</h3>
              <p>Automatically set gift tiers based on cart value to encourage higher purchases and increase average order value.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                ⚡
              </div>
              <h3>Instant setup</h3>
              <p>Get up and running in minutes with our one-click installation and intuitive configuration process.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                📊
              </div>
              <h3>Real-time analytics</h3>
              <p>Track performance with detailed insights on gift tier effectiveness and customer behavior patterns.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                🛒
              </div>
              <h3>Cart integration</h3>
              <p>Seamlessly integrates with your existing cart and checkout flow without disrupting the customer experience.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                🎨
              </div>
              <h3>Customizable design</h3>
              <p>Match your brand with fully customizable gift tier displays that blend perfectly with your store design.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">
                🔒
              </div>
              <h3>GDPR-ready</h3>
              <p>Built with privacy in mind, ensuring compliance with data protection regulations and customer trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Trusted by growing businesses</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              See what store owners are saying about Mabel Studio apps.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="testimonial">
              <blockquote className="testimonial-quote">
                "The Free Gift Tiers app has transformed how we approach upselling. Our average order value increased by 23% in just two months."
              </blockquote>
              <div className="testimonial-author">Sarah Chen</div>
              <div className="testimonial-role">E-commerce Director</div>
            </div>
            
            <div className="testimonial">
              <blockquote className="testimonial-quote">
                "Setup was incredibly easy and the results were immediate. Our customers love the clear incentive to reach the next tier."
              </blockquote>
              <div className="testimonial-author">Marcus Rodriguez</div>
              <div className="testimonial-role">Store Owner</div>
            </div>
            
            <div className="testimonial">
              <blockquote className="testimonial-quote">
                "Finally, a gift tier solution that actually works with our existing workflow. The analytics help us optimize constantly."
              </blockquote>
              <div className="testimonial-author">Jennifer Park</div>
              <div className="testimonial-role">Marketing Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to grow your Shopify store?
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-xl)'
            }}>
              Join thousands of stores already using Mabel Studio apps to grow their business.
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

