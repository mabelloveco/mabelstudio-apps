import { useState } from 'react';
import Layout from '../../components/Layout';
import { faqCategories, videoTutorials } from '../../lib/faq-data';

export default function FreeGiftTiersSupport() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@mabelstudio.co?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout
      title="Free Gift Tiers Support — Mabel Studio"
      description="Get help with Free Gift Tiers app. Find documentation, troubleshooting guides, and contact support for your Shopify gift tier automation."
      canonical="https://mabelstudio.co/support/free-gift-tiers"
    >
      <section className="hero">
        <div className="container">
          <h1>Free Gift Tiers Support</h1>
          <p className="hero-subtitle">
            Everything you need to succeed with gift tier automation
          </p>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card support-card">
              <div className="card-body">
                <div className="support-icon">📚</div>
                <h3>Documentation</h3>
                <p>Comprehensive guides and tutorials to help you master Free Gift Tiers</p>
                <a href="#faq" className="btn btn-primary">Browse FAQ</a>
              </div>
            </div>
            
            <div className="card support-card">
              <div className="card-body">
                <div className="support-icon">🎥</div>
                <h3>Video Tutorials</h3>
                <p>Step-by-step video guides for setup, configuration, and optimization</p>
                <a href="#tutorials" className="btn btn-primary">Watch Videos</a>
              </div>
            </div>
            
            <div className="card support-card">
              <div className="card-body">
                <div className="support-icon">💬</div>
                <h3>Contact Support</h3>
                <p>Get personalized help from our expert support team</p>
                <a href="#contact" className="btn btn-secondary">Get Help</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section id="tutorials" className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            Video Tutorials
          </h2>
          
          <div className="grid grid-2">
            {videoTutorials.map((tutorial) => (
              <div key={tutorial.id} className="card video-card">
                <div className="video-thumbnail">
                  <div className="play-button">▶</div>
                  <div className="video-duration">{tutorial.duration}</div>
                </div>
                <div className="card-body">
                  <h3>{tutorial.title}</h3>
                  <p>{tutorial.description}</p>
                  <button className="btn btn-primary">Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="faq-container">
            {faqCategories.map((category) => (
              <div key={category.id} className="faq-category">
                <button
                  className="faq-category-header"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={openCategory === category.id}
                >
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className="faq-toggle">
                    {openCategory === category.id ? '−' : '+'}
                  </span>
                </button>
                
                {openCategory === category.id && (
                  <div className="faq-category-content">
                    {category.items.map((faq) => (
                      <div key={faq.id} className="faq-item">
                        <button
                          className="faq-question"
                          onClick={() => toggleFAQ(faq.id)}
                          aria-expanded={openFAQ === faq.id}
                        >
                          <h4>{faq.question}</h4>
                          <span className="faq-toggle">
                            {openFAQ === faq.id ? '−' : '+'}
                          </span>
                        </button>
                        
                        {openFAQ === faq.id && (
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
              Contact Support
            </h2>
            
            <div className="grid grid-2">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>Our support team is here to help you succeed with Free Gift Tiers.</p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <strong>Email Support</strong>
                    <a href="mailto:support@mabelstudio.co">support@mabelstudio.co</a>
                    <small>Response within 24 hours</small>
                  </div>
                  
                  <div className="contact-method">
                    <strong>Setup Assistance</strong>
                    <p>Free personalized setup sessions</p>
                    <small>Schedule through email</small>
                  </div>
                  
                  <div className="contact-method">
                    <strong>Enterprise Support</strong>
                    <p>Priority support for high-volume stores</p>
                    <small>Faster response times</small>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="Setup Help">Setup Help</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--space-lg)' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2xl)', maxWidth: '600px', margin: '0 auto var(--space-2xl)' }}>
            Join thousands of merchants who are increasing their average order value with Free Gift Tiers.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://apps.shopify.com/free-gift-tiers" 
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Install Free Gift Tiers app"
            >
              Install Free App
            </a>
            <a 
              href="mailto:support@mabelstudio.co" 
              className="btn btn-secondary btn-lg"
              aria-label="Email support team"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
