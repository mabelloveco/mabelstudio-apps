export const MARKETING = {
  headline: "Build powerful Shopify apps that help merchants grow",
  subhead: "Create intelligent solutions for e-commerce success. Analytics, automation, and growth tools.",
  ctaPrimaryHref: "https://apps.shopify.com/partners/mabel-studio",
  ctaPrimaryText: "View our apps",
  ctaSecondaryHref: "#demo",
  ctaSecondaryText: "Watch demo",
  metrics: { 
    aovLiftPct: 0, 
    storesCount: 0 
  },
  showGuarantee: false,
  features: [
    {
      title: "Free Gift Tiers",
      description: "Increase AOV with intelligent gift incentives. Smart thresholds, real-time analytics, and A/B testing."
    },
    {
      title: "Analytics Suite",
      description: "Comprehensive insights into store performance, customer behavior, and revenue optimization."
    },
    {
      title: "Automation Tools",
      description: "Streamline operations with automated workflows, notifications, and customer engagement."
    },
    {
      title: "Custom Solutions",
      description: "Tailored app development for unique business needs and complex requirements."
    },
    {
      title: "Easy Integration",
      description: "Seamless Shopify integration with minimal setup and maximum compatibility."
    },
    {
      title: "Expert Support",
      description: "Dedicated support team with deep Shopify and e-commerce expertise."
    }
  ],
  testimonials: [
    {
      quote: "Mabel Studio's apps have transformed our e-commerce operations. The results speak for themselves.",
      author: "Sarah Chen",
      role: "E-commerce Director"
    },
    {
      quote: "Finally, Shopify apps that actually work with our existing setup. Integration was incredibly easy.",
      author: "Marcus Rodriguez",
      role: "Store Owner"
    },
    {
      quote: "The analytics and automation tools alone make this worth it. We can see exactly how our store is performing.",
      author: "Jennifer Park",
      role: "Marketing Manager"
    }
  ],
  pricing: [
    {
      name: "Free Apps",
      price: "Free",
      period: "forever",
      description: "Essential tools for small stores",
      features: [
        "Free Gift Tiers app",
        "Basic analytics",
        "Email support",
        "Standard setup"
      ],
      cta: "Get started",
      popular: false
    },
    {
      name: "Pro Apps",
      price: "From $29",
      period: "per month",
      description: "Advanced features for growing businesses",
      features: [
        "All free apps included",
        "Advanced analytics suite",
        "A/B testing tools",
        "Priority support",
        "Custom integrations"
      ],
      cta: "View apps",
      popular: true
    },
    {
      name: "Custom Development",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for enterprise needs",
      features: [
        "Everything in Pro",
        "Custom app development",
        "Dedicated support",
        "Advanced reporting",
        "White-label options"
      ],
      cta: "Contact sales",
      popular: false
    }
  ]
} as const;