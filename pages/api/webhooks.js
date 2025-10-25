import { verifyWebhook } from '../../lib/verify-webhook'

export const config = { api: { bodyParser: false } }

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawBody = JSON.stringify(req.body)
  const signature = req.headers['x-shopify-hmac-sha256']
  
  if (!verifyWebhook(rawBody, signature, process.env.SHOPIFY_WEBHOOK_SECRET || process.env.SHOPIFY_API_SECRET)) {
    return res.status(401).end()
  }
  
  const { shop } = req.body
  // TODO: Clean up shop data, tokens, theme assets
  console.log('App uninstalled:', shop)
  
  res.status(200).end()
}
