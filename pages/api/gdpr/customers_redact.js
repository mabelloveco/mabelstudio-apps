import { verifyWebhook } from '../../../lib/verify-webhook'

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawBody = JSON.stringify(req.body)
  const signature = req.headers['x-shopify-hmac-sha256']
  
  if (!verifyWebhook(rawBody, signature, process.env.SHOPIFY_WEBHOOK_SECRET || process.env.SHOPIFY_API_SECRET)) {
    return res.status(401).end()
  }

  const { customer, shop } = req.body;
  
  // Log GDPR customer redact request
  console.log(`GDPR customer redact for customer: ${customer.id} in shop: ${shop.domain}`);
  
  // TODO: Implement actual data redaction logic
  // For now, just log and return 200
  res.status(200).json({ received: true });
}
