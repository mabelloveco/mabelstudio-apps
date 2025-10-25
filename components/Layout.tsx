import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = "Mabel Studio - Shopify Apps for Growing Businesses",
  description = "Build powerful Shopify apps that help merchants grow their business. Free Gift Tiers, analytics, and more tools for e-commerce success."
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mabelstudio.co" />
        <meta property="og:image" content="https://mabelstudio.co/og-image.jpg" />
        <meta property="og:site_name" content="Mabel Studio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://mabelstudio.co/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mabel Studio" />
        <link rel="canonical" href="https://mabelstudio.co" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        {/* Skip Link */}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <Link href="/" className="logo">
                Mabel Studio
              </Link>
              
              <nav className="nav">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="#features" className="nav-link">
                  Features
                </Link>
                <Link href="#pricing" className="nav-link">
                  Pricing
                </Link>
                <Link href="https://apps.shopify.com/partners/mabel-studio" className="nav-link">
                  All Apps
                </Link>
                <a 
                  href="https://apps.shopify.com/free-gift-tiers" 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install App
                </a>
              </nav>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main id="main" className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div>
                <div className="footer-brand">Mabel Studio</div>
                <p style={{ color: '#9ca3af', marginBottom: 'var(--space-lg)' }}>
                  Building powerful apps for Shopify merchants to grow their business.
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <a href="#" className="footer-link" aria-label="Twitter">
                    Twitter
                  </a>
                  <a href="#" className="footer-link" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                  <a href="#" className="footer-link" aria-label="GitHub">
                    GitHub
                  </a>
                </div>
              </div>
              
              <div>
                <h4 style={{ color: 'white', marginBottom: 'var(--space-md)' }}>Product</h4>
                <div className="footer-links">
                  <Link href="#features" className="footer-link">
                    Features
                  </Link>
                  <Link href="#pricing" className="footer-link">
                    Pricing
                  </Link>
                  <a 
                    href="https://apps.shopify.com/free-gift-tiers" 
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Install App
                  </a>
                </div>
              </div>
              
              <div>
                <h4 style={{ color: 'white', marginBottom: 'var(--space-md)' }}>Support</h4>
                <div className="footer-links">
                  <Link href="/free-gift-tiers/privacy.html" className="footer-link">
                    Privacy Policy
                  </Link>
                  <Link href="/free-gift-tiers/terms.html" className="footer-link">
                    Terms of Service
                  </Link>
                  <Link href="/free-gift-tiers/support.html" className="footer-link">
                    Support
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2024 Mabel Studio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
