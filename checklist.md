# Partner Dashboard Checklist

## App Configuration
- [ ] App URL: `https://free-gift-tiers.mabelstudio.co`
- [ ] Redirect URL: `https://free-gift-tiers.mabelstudio.co/auth/callback`
- [ ] Embedded: Yes
- [ ] Scopes: write_products, read_themes

## Webhooks
- [ ] app/uninstalled → `/api/webhooks`
- [ ] customers/data_request → `/api/gdpr/data_request`
- [ ] customers/redact → `/api/gdpr/customers_redact`
- [ ] shop/redact → `/api/gdpr/shop_redact`

## Legal Pages
- [ ] Privacy: `https://mabelloveco.github.io/mabelstudio-apps/free-gift-tiers/privacy.html`
- [ ] Terms: `https://mabelloveco.github.io/mabelstudio-apps/free-gift-tiers/terms.html`
- [ ] Support: `https://mabelloveco.github.io/mabelstudio-apps/free-gift-tiers/support.html`

## Assets Required
- [ ] 3 screenshots (1280×720)
- [ ] App icon (1200×1200)
- [ ] Short description
- [ ] Long description

## Billing
- [ ] Recurring plan configured
- [ ] 7-day trial enabled
- [ ] Pricing clearly displayed

## Automated Checks
- [ ] All webhooks return 200
- [ ] Health endpoint working
- [ ] No third-party cookies
- [ ] Session tokens only
