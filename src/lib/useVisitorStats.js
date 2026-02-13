// Cloudflare connected visitor statistics
import { useEffect, useState } from 'react'

// Historical counts from Cloudflare Analytics before Worker was set up (2026-02-13)
const HISTORICAL_VISITORS = 180
const HISTORICAL_PAGE_VIEWS = 180

export function useVisitorStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) =>
        setStats({
          uniqueVisitors: data.uniqueVisitors + HISTORICAL_VISITORS,
          totalViews: data.totalViews + HISTORICAL_PAGE_VIEWS,
        })
      )
      .catch(() => {})
  }, [])

  return stats
}
