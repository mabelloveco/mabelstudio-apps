import { verifySession } from '../../lib/verify-session'

export default async (req, res) => {
  const session = await verifySession(req)
  if (!session && process.env.NODE_ENV === 'production') {
    return res.status(401).end()
  }
  res.status(200).json({ status: "ok" })
}
