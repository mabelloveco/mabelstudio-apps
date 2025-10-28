export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  description: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Everything you need to know to set up Free Gift Tiers',
    items: [
      {
        id: 'install-app',
        question: 'How do I install Free Gift Tiers?',
        answer: 'Visit the Shopify App Store, search for "Free Gift Tiers", and click "Add app". Follow the installation prompts to complete setup. The app will automatically integrate with your store.',
        category: 'getting-started'
      },
      {
        id: 'first-setup',
        question: 'What do I need to do after installation?',
        answer: 'After installation, you\'ll need to: 1) Configure your first gift tier with spending thresholds, 2) Select which products to offer as gifts, 3) Customize the appearance to match your brand, and 4) Test the setup in a test order.',
        category: 'getting-started'
      },
      {
        id: 'theme-compatibility',
        question: 'Does it work with all Shopify themes?',
        answer: 'Yes, Free Gift Tiers works with any Shopify theme. We provide customization options and CSS overrides to ensure perfect integration with your store\'s design.',
        category: 'getting-started'
      },
      {
        id: 'free-trial',
        question: 'Is there a free trial?',
        answer: 'Yes, you can try Free Gift Tiers free for 14 days with full access to all features. No credit card required to start your trial.',
        category: 'getting-started'
      }
    ]
  },
  {
    id: 'configuration',
    title: 'Configuration & Setup',
    description: 'Advanced setup and customization options',
    items: [
      {
        id: 'multiple-tiers',
        question: 'Can I create multiple gift tiers?',
        answer: 'Absolutely! You can create unlimited gift tiers with different spending thresholds and rewards. This allows you to encourage larger purchases with progressive incentives.',
        category: 'configuration'
      },
      {
        id: 'customize-appearance',
        question: 'How do I customize the appearance?',
        answer: 'Use our built-in customization options in the app dashboard, or add custom CSS to match your brand perfectly. We provide detailed styling guides and examples.',
        category: 'configuration'
      },
      {
        id: 'schedule-campaigns',
        question: 'Can I schedule gift tier campaigns?',
        answer: 'Yes, you can schedule campaigns for specific dates and times to align with your marketing calendar, seasonal promotions, or special events.',
        category: 'configuration'
      },
      {
        id: 'customer-targeting',
        question: 'Can I target specific customer groups?',
        answer: 'Yes, you can set up customer targeting based on purchase history, customer tags, location, or other criteria to create personalized gift tier experiences.',
        category: 'configuration'
      },
      {
        id: 'product-selection',
        question: 'How do I choose which products to offer as gifts?',
        answer: 'You can select from your entire product catalog, specific collections, or individual products. You can also set inventory limits and exclude certain products.',
        category: 'configuration'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    items: [
      {
        id: 'gifts-not-appearing',
        question: 'Why aren\'t gifts appearing in the cart?',
        answer: 'Check that: 1) Your cart total meets the spending threshold, 2) The selected products are in stock, 3) The campaign is active and scheduled correctly, and 4) There are no conflicting apps or theme customizations.',
        category: 'troubleshooting'
      },
      {
        id: 'theme-conflicts',
        question: 'The app conflicts with my theme. What should I do?',
        answer: 'Contact our support team with your theme name and specific issues. We provide custom CSS solutions and can work with your developer to ensure perfect integration.',
        category: 'troubleshooting'
      },
      {
        id: 'performance-issues',
        question: 'Is the app affecting my store\'s performance?',
        answer: 'Free Gift Tiers is optimized for performance and shouldn\'t impact your store speed. If you notice issues, check for conflicting apps or contact support for optimization tips.',
        category: 'troubleshooting'
      },
      {
        id: 'mobile-display',
        question: 'The gift tiers don\'t display properly on mobile. How can I fix this?',
        answer: 'Our app is fully responsive, but some themes may need custom CSS adjustments. Contact support with your theme details for mobile-specific styling solutions.',
        category: 'troubleshooting'
      },
      {
        id: 'inventory-sync',
        question: 'Gift products show as out of stock when they\'re available. Why?',
        answer: 'This usually happens when inventory tracking is enabled for gift products. Disable inventory tracking for products you want to offer as gifts, or contact support for inventory management solutions.',
        category: 'troubleshooting'
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Understanding your gift tier performance',
    items: [
      {
        id: 'dashboard-metrics',
        question: 'What metrics can I track in the dashboard?',
        answer: 'Track conversion rates, average order value increases, most popular gifts, campaign performance, and customer engagement metrics to optimize your gift tier strategy.',
        category: 'analytics'
      },
      {
        id: 'export-reports',
        question: 'Can I export reports for analysis?',
        answer: 'Yes, you can export detailed reports in CSV format for further analysis in Excel, Google Sheets, or other analytics tools.',
        category: 'analytics'
      },
      {
        id: 'optimization-tips',
        question: 'How can I optimize my gift tier performance?',
        answer: 'Focus on: 1) Testing different spending thresholds, 2) Offering high-value gifts that customers actually want, 3) A/B testing different gift options, and 4) Analyzing which tiers drive the most conversions.',
        category: 'analytics'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Account',
    description: 'Pricing, billing, and account management',
    items: [
      {
        id: 'pricing-plans',
        question: 'What are the pricing plans?',
        answer: 'We offer flexible pricing based on your store\'s monthly orders. Plans start at $9.99/month for stores with up to 500 orders, with custom enterprise pricing available for larger stores.',
        category: 'billing'
      },
      {
        id: 'billing-cycle',
        question: 'How does billing work?',
        answer: 'Billing is monthly and automatically charged to your payment method. You can upgrade, downgrade, or cancel your subscription anytime from your account dashboard.',
        category: 'billing'
      },
      {
        id: 'uninstall-app',
        question: 'How do I uninstall the app?',
        answer: 'You can uninstall anytime from your Shopify admin with one click. All data is automatically deleted within 30 days of uninstallation, and you won\'t be charged for future billing cycles.',
        category: 'billing'
      },
      {
        id: 'refund-policy',
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with Free Gift Tiers, contact support within 30 days of your first payment for a full refund.',
        category: 'billing'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support & Contact',
    description: 'Getting help and contacting our team',
    items: [
      {
        id: 'contact-support',
        question: 'How can I contact support?',
        answer: 'You can reach our support team at support@mabelstudio.co or through the in-app chat. We typically respond within 24 hours and offer priority support for enterprise customers.',
        category: 'support'
      },
      {
        id: 'response-time',
        question: 'What is your support response time?',
        answer: 'We aim to respond to all support requests within 24 hours during business days. Enterprise customers receive priority support with faster response times.',
        category: 'support'
      },
      {
        id: 'setup-assistance',
        question: 'Do you offer setup assistance?',
        answer: 'Yes! We provide free setup assistance for all customers. Contact support to schedule a personalized setup session with our team.',
        category: 'support'
      },
      {
        id: 'feature-requests',
        question: 'Can I request new features?',
        answer: 'Absolutely! We love hearing from our customers. Submit feature requests through the app dashboard or email us at feedback@mabelstudio.co.',
        category: 'support'
      }
    ]
  }
];

export const videoTutorials = [
  {
    id: 'quick-start',
    title: 'Quick Start Guide',
    description: 'Get up and running with Free Gift Tiers in under 5 minutes',
    duration: '4:32',
    embedId: 'dQw4w9WgXcQ' // Placeholder - replace with actual video ID
  },
  {
    id: 'advanced-setup',
    title: 'Advanced Configuration',
    description: 'Learn how to create sophisticated multi-tier campaigns',
    duration: '8:15',
    embedId: 'dQw4w9WgXcQ' // Placeholder - replace with actual video ID
  },
  {
    id: 'customization',
    title: 'Customization & Styling',
    description: 'Match your gift tiers to your brand with custom styling',
    duration: '6:42',
    embedId: 'dQw4w9WgXcQ' // Placeholder - replace with actual video ID
  },
  {
    id: 'analytics',
    title: 'Analytics & Optimization',
    description: 'Understand your data and optimize for better results',
    duration: '7:28',
    embedId: 'dQw4w9WgXcQ' // Placeholder - replace with actual video ID
  }
];
