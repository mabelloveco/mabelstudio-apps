export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { customer, shop } = req.body;
  
  // Log GDPR data request
  console.log(`GDPR data request for customer: ${customer.id} in shop: ${shop.domain}`);
  
  // TODO: Implement actual data export logic
  // For now, just log and return 200
  res.status(200).json({ received: true });
}
