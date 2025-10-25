import Layout from '../../components/Layout';
import Image from 'next/image';

export default function FreeGiftTiers() {
  return (
    <Layout
      title="Free Gift Tiers — Shopify Gift Thresholds | Mabel Studio"
      description="Increase average order value with smart gift thresholds. Free Gift Tiers helps merchants encourage higher purchases with customizable gift tier displays."
      canonical="https://mabelstudio.co/apps/free-gift-tiers"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Free Gift Tiers</h1>
          <p className="hero-subtitle">
            Increase average order value with smart gift thresholds that encourage customers to spend more and unlock exclusive rewards.
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Powerful features for growing stores</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to implement effective gift tiers and increase your average order value.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart thresholds</h3>
              <p>Automatically set gift tiers based on cart value to encourage higher purchases and increase average order value.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant setup</h3>
              <p>Get up and running in minutes with our one-click installation and intuitive configuration process.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">📊</div>
              <h3>Real-time analytics</h3>
              <p>Track performance with detailed insights on gift tier effectiveness and customer behavior patterns.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">🛒</div>
              <h3>Cart integration</h3>
              <p>Seamlessly integrates with your existing cart and checkout flow without disrupting the customer experience.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Customizable design</h3>
              <p>Match your brand with fully customizable gift tier displays that blend perfectly with your store design.</p>
            </div>
            
            <div className="card feature-card">
              <div className="feature-icon">🔒</div>
              <h3>GDPR-ready</h3>
              <p>Built with privacy in mind, ensuring compliance with data protection regulations and customer trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>How it works</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Get started in three simple steps and begin increasing your average order value immediately.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--color-primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto var(--space-lg)',
                color: 'white',
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700'
              }}>
                1
              </div>
              <h3>Install the app</h3>
              <p>One-click installation from the Shopify App Store. No technical setup required.</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--color-primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto var(--space-lg)',
                color: 'white',
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700'
              }}>
                2
              </div>
              <h3>Configure your tiers</h3>
              <p>Set up your gift thresholds and customize the display to match your brand perfectly.</p>
            </div>
            
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--color-primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto var(--space-lg)',
                color: 'white',
                fontSize: 'var(--font-size-xl)',
                fontWeight: '700'
              }}>
                3
              </div>
              <h3>Watch sales grow</h3>
              <p>Monitor your analytics and see your average order value increase as customers reach for the next tier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>See it in action</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Beautiful, customizable gift tier displays that integrate seamlessly with your store.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--space-lg)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/mockup-dashboard.png"
                alt="Free Gift Tiers dashboard showing analytics and configuration options"
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/mockup-dashboard.png"
                alt="Gift tier display on product page showing progress to next reward"
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Frequently asked questions</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to know about Free Gift Tiers.
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>How quickly can I set up gift tiers?</h3>
              <p>Setup takes just a few minutes. Install the app, configure your thresholds, and customize the display to match your brand. No technical knowledge required.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Can I customize the appearance?</h3>
              <p>Yes, the gift tier display is fully customizable. Match your brand colors, fonts, and styling to create a seamless experience for your customers.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>What analytics are available?</h3>
              <p>Track conversion rates, average order value increases, and customer behavior patterns. Get insights on which gift tiers are most effective for your store.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Does it work with all themes?</h3>
              <p>Free Gift Tiers is compatible with all Shopify themes. The app uses standard Shopify APIs and integrates seamlessly with your existing store design.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Is there a free trial?</h3>
              <p>Yes, you can try Free Gift Tiers free for 14 days. No credit card required. See the results for yourself before committing to a plan.</p>
            </div>
            
            <div className="faq-item" style={{ 
              marginBottom: 'var(--space-lg)', 
              padding: 'var(--space-lg)', 
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border-light)'
            }}>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>What support is available?</h3>
              <p>We provide comprehensive documentation, email support, and a knowledge base. Our team is here to help you succeed with your gift tier strategy.</p>
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
              Ready to increase your average order value?
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-xl)'
            }}>
              Join thousands of stores already using Free Gift Tiers to grow their business.
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
