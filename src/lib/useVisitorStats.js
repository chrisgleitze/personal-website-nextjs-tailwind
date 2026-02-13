// Cloudflare connected visitor statistics
import { useEffect, useState } from 'react'

export function useVisitorStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then(setStats)
      .catch(() => {})
  }, [])

  return stats
}
