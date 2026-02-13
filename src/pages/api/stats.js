// Local dev fallback — in production, the Cloudflare Worker handles this route
let totalViews = 0
let uniqueVisitors = 0
const seen = new Set()

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

  totalViews++

  if (!seen.has(ip)) {
    seen.add(ip)
    uniqueVisitors++
  }

  res.json({ totalViews, uniqueVisitors })
}
