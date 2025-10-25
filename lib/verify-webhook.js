import crypto from 'crypto'

export function verifyWebhook(rawBody, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('base64')
  return hash === signature
}
