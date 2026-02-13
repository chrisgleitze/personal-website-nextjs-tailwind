// Cloudflare Analytics visitor statistics
import { useEffect, useState } from 'react'

const STATS_URL = 'https://visitor-counter.christian-gleitze.workers.dev'

export function useVisitorStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch(STATS_URL)
      .then((res) => res.json())
      .then((data) =>
        setStats({
          pageViews: data.totalViews,
        })
      )
      .catch(() => {})
  }, [])

  return stats
}
