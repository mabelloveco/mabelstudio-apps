import jwt from 'jsonwebtoken'

export async function verifySession(req) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return null
  
  try {
    return jwt.verify(token, process.env.SHOPIFY_API_SECRET)
  } catch {
    return null
  }
}
