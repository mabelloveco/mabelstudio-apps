import Layout from '../components/Layout';
import { MARKETING } from '../lib/marketing';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            {MARKETING.headline}
          </h1>
          <p className="hero-subtitle">
            {MARKETING.subhead}
          </p>
          <div className="hero-ctas">
            <a 
              href={MARKETING.ctaPrimaryHref}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {MARKETING.ctaPrimaryText}
            </a>
            <a 
              href={MARKETING.ctaSecondaryHref}
              className="btn btn-secondary btn-lg"
            >
              {MARKETING.ctaSecondaryText}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Everything you need to boost AOV</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Powerful features designed to help you increase average order value through intelligent gift incentives.
            </p>
          </div>
          
          <div className="grid grid-3">
            {MARKETING.features.map((feature, index) => (
              <div key={index} className="card feature-card">
                <div className="feature-icon">
                  {index === 0 && '🎯'}
                  {index === 1 && '⚡'}
                  {index === 2 && '📊'}
                  {index === 3 && '🧪'}
                  {index === 4 && '🛒'}
                  {index === 5 && '👥'}
                </div>
                <h3 style={{ marginBottom: 'var(--space-md)' }}>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Trusted by growing businesses</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              See what store owners are saying about Free Gift Tiers.
            </p>
          </div>
          
          <div className="grid grid-3">
            {MARKETING.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section features">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2>Simple, transparent pricing</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
          
          <div className="grid grid-3">
            {MARKETING.pricing.map((plan, index) => (
              <div key={index} className={`card pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="pricing-badge">Most Popular</div>}
                <div className="card-body">
                  <h3 style={{ marginBottom: 'var(--space-sm)' }}>{plan.name}</h3>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <span style={{ fontSize: 'var(--font-size-4xl)', fontWeight: '700' }}>
                      {plan.price}
                    </span>
                    {plan.period !== 'forever' && (
                      <span style={{ color: 'var(--color-text-light)' }}>/{plan.period}</span>
                    )}
                  </div>
                  <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-lg)' }}>
                    {plan.description}
                  </p>
                  
                  <ul style={{ listStyle: 'none', marginBottom: 'var(--space-xl)' }}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        padding: 'var(--space-sm) 0',
                        borderBottom: '1px solid var(--color-border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)'
                      }}>
                        <span style={{ color: 'var(--color-primary)' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={plan.name === 'Enterprise' ? 'mailto:sales@mabelstudio.co' : MARKETING.ctaPrimaryHref}
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%' }}
                    target={plan.name === 'Enterprise' ? undefined : '_blank'}
                    rel={plan.name === 'Enterprise' ? undefined : 'noopener noreferrer'}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
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
              Ready to increase your AOV?
            </h2>
            <p style={{ 
              fontSize: 'var(--font-size-lg)', 
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-xl)'
            }}>
              Join thousands of stores already using Free Gift Tiers to grow their revenue.
            </p>
            <a 
              href={MARKETING.ctaPrimaryHref}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {MARKETING.ctaPrimaryText}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
