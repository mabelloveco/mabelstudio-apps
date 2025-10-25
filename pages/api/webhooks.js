export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic, shop } = req.body;
  
  // Log webhook for debugging
  console.log(`Webhook received: ${topic} for shop: ${shop}`);
  
  // Handle app/uninstalled
  if (topic === 'app/uninstalled') {
    // Mark shop as uninstalled and purge tokens
    console.log(`App uninstalled for shop: ${shop}`);
    // TODO: Implement actual cleanup logic
  }
  
  res.status(200).json({ received: true });
}
