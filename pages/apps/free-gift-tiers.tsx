import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function FreeGiftTiers() {
  return (
    <Layout
      title="Free Gift Tiers — Shopify Gift Thresholds | Mabel Studio"
      description="Motivate larger carts with automatic gift tiers. Simple setup, customizable design."
      canonical="https://mabelstudio.co/apps/free-gift-tiers"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Free Gift Tiers for Shopify
          </h1>
          <p className="hero-subtitle">
            Reward customers when they hit spend thresholds.
          </p>
          <div className="hero-ctas">
            <a 
              href="https://apps.shopify.com/free-gift-tiers" 
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Install Free Gift Tiers on Shopify"
            >
              Install on Shopify
            </a>
            <a 
              href="#features" 
              className="btn btn-secondary btn-lg"
              aria-label="View app features"
            >
              See features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            Powerful Features
          </h2>
          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon">🎁</div>
              <h3>Auto-add gifts</h3>
              <p>Automatically add gifts to cart when customers reach spending thresholds. Support for GWP and BOGO offers.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">📈</div>
              <h3>Cart upsell</h3>
              <p>Increase average order value with strategic cross-sell and upsell opportunities at checkout.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Multi-tier triggers</h3>
              <p>Set multiple spending tiers with different rewards to encourage larger purchases.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Scheduling</h3>
              <p>Schedule campaigns for specific dates and times to align with your marketing calendar.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">👥</div>
              <h3>Audience targeting</h3>
              <p>Target specific customer segments with personalized gift offers and messaging.</p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Theme customization</h3>
              <p>Customize the design with CSS to match your store's branding and aesthetic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            How it Works
          </h2>
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'var(--color-accent)' }}>1</div>
              <h3>Set tiers</h3>
              <p>Configure spending thresholds and choose which gifts to offer at each level.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'var(--color-accent)' }}>2</div>
              <h3>Customer unlocks gift</h3>
              <p>When customers add items to their cart, they automatically see available gifts.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div className="feature-icon" style={{ backgroundColor: 'var(--color-accent)' }}>3</div>
              <h3>Revenue increases</h3>
              <p>Higher average order values and improved customer satisfaction drive growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            See it in Action
          </h2>
          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <Image
                src="/mockup-dashboard.png"
                alt="Free Gift Tiers dashboard showing tier configuration"
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
              />
            </div>
            <div className="card" style={{ padding: 'var(--space-lg)' }}>
              <Image
                src="/mockup-dashboard.png"
                alt="Free Gift Tiers customer experience at checkout"
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card faq-item" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="card-body">
                <h3>How many gift tiers can I create?</h3>
                <p>You can create unlimited gift tiers with different spending thresholds and rewards.</p>
              </div>
            </div>
            <div className="card faq-item" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="card-body">
                <h3>Does it work with all themes?</h3>
                <p>Yes, Free Gift Tiers works with any Shopify theme and includes customization options.</p>
              </div>
            </div>
            <div className="card faq-item" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="card-body">
                <h3>Can I combine with other discounts?</h3>
                <p>Gift tiers work alongside your existing discount codes and promotions without conflicts.</p>
              </div>
            </div>
            <div className="card faq-item" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="card-body">
                <h3>Is there a free trial?</h3>
                <p>Yes, you can try Free Gift Tiers free for 14 days with full access to all features.</p>
              </div>
            </div>
            <div className="card faq-item" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="card-body">
                <h3>How do I uninstall the app?</h3>
                <p>You can uninstall anytime from your Shopify admin with one click. No data is retained.</p>
              </div>
            </div>
            <div className="card faq-item" style={{ marginBottom: 'var(--space-lg)' }}>
              <div className="card-body">
                <h3>What support is available?</h3>
                <p>We provide email support and documentation to help you get the most from the app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ background: 'var(--color-bg-light)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>
            Ready to Increase Your Average Order Value?
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2xl)', maxWidth: '600px', margin: '0 auto var(--space-2xl)' }}>
            Start rewarding your customers today with automatic gift tiers that drive larger purchases.
          </p>
          <a 
            href="https://apps.shopify.com/free-gift-tiers" 
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Install Free Gift Tiers on Shopify"
          >
            Install on Shopify
          </a>
        </div>
      </section>
    </Layout>
  );
}