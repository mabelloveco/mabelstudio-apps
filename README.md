# Free Gift Tiers - Shopify App

A Shopify app that automatically provides gifts based on customer spend tiers.

## Environment Variables

Copy `env.production.sample` to `.env.production` and fill in:

- `SHOPIFY_API_KEY` - Your app's API key
- `SHOPIFY_API_SECRET` - Your app's API secret
- `SHOPIFY_SCOPES` - Required scopes (write_products,read_themes)
- `SHOPIFY_APP_URL` - Production app URL
- `BILLING_TEST_MODE` - Set to true for testing

## Development

```bash
npm install
npm run dev
```

## Production Deployment

Deploy to Netlify with custom domain: `free-gift-tiers.mabelstudio.co`

## Submission QA

1. Fresh dev-store install from production link
2. OAuth without 3P cookies
3. Create a tier record
4. Approve test charge
5. Uninstall cleanup
6. Reinstall no stale session

## Health Check

- URL: `https://free-gift-tiers.mabelstudio.co/api/health`
- Response: `{"status": "ok"}`
