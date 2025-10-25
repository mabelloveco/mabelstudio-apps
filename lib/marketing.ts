export const MARKETING = {
  headline: "Increase average order value with intelligent gift incentives",
  subhead: "Set smart thresholds. Motivate larger carts. Grow revenue.",
  ctaPrimaryHref: "https://apps.shopify.com/free-gift-tiers",
  ctaPrimaryText: "Start free trial",
  ctaSecondaryHref: "#demo",
  ctaSecondaryText: "Watch demo",
  metrics: { 
    aovLiftPct: 0, 
    storesCount: 0 
  },
  showGuarantee: false,
  features: [
    {
      title: "Smart thresholds",
      description: "Automatically calculate optimal gift tiers based on your store's data and customer behavior patterns."
    },
    {
      title: "Instant setup",
      description: "Get started in minutes with our intuitive dashboard. No technical knowledge required."
    },
    {
      title: "Real-time analytics",
      description: "Track performance with detailed insights on gift tier effectiveness and revenue impact."
    },
    {
      title: "A/B testing",
      description: "Test different gift strategies to find what works best for your unique customer base."
    },
    {
      title: "Cart integration",
      description: "Seamlessly integrates with your existing checkout flow without disrupting the customer experience."
    },
    {
      title: "Segments",
      description: "Target different customer segments with personalized gift offers and thresholds."
    }
  ],
  testimonials: [
    {
      quote: "This app has transformed how we approach customer incentives. The results speak for themselves.",
      author: "Sarah Chen",
      role: "E-commerce Director"
    },
    {
      quote: "Finally, a gift tier solution that actually works with our existing setup. Setup was incredibly easy.",
      author: "Marcus Rodriguez",
      role: "Store Owner"
    },
    {
      quote: "The analytics alone make this worth it. We can see exactly how our gift tiers are performing.",
      author: "Jennifer Park",
      role: "Marketing Manager"
    }
  ],
  pricing: [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for small stores getting started",
      features: [
        "Up to 3 gift tiers",
        "Basic analytics",
        "Email support",
        "Standard setup"
      ],
      cta: "Get started",
      popular: false
    },
    {
      name: "Growth",
      price: "$29",
      period: "per month",
      description: "For growing businesses that need more control",
      features: [
        "Unlimited gift tiers",
        "Advanced analytics",
        "A/B testing",
        "Priority support",
        "Custom segments"
      ],
      cta: "Start trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large stores with complex needs",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Dedicated support",
        "Advanced reporting",
        "White-label options"
      ],
      cta: "Contact sales",
      popular: false
    }
  ]
} as const;
