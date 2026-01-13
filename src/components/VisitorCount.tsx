'use client'

import { useEffect, useState } from 'react'

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://visitor-counter.christian-gleitze.workers.dev/')
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null))
  }, [])

  if (count === null) {
    return <span></span>
  }

  return (
    <span>
      Page views of this website: {count.toLocaleString('de-DE')} (since
      2026-01-13)
    </span>
  )
}
