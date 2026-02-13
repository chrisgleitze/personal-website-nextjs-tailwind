export default {
  async fetch(request, env) {
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 })
    }

    // Read current counts
    const totalViews = parseInt((await env.STATS.get('total_views')) || '0')
    const uniqueVisitors = parseInt(
      (await env.STATS.get('unique_visitors')) || '0'
    )

    // Check for returning visitor cookie
    const cookies = request.headers.get('Cookie') || ''
    const isReturning = cookies.includes('_vid=1')

    // Increment total views
    const newTotalViews = totalViews + 1
    await env.STATS.put('total_views', newTotalViews.toString())

    // Increment unique visitors only if no cookie
    let newUniqueVisitors = uniqueVisitors
    if (!isReturning) {
      newUniqueVisitors = uniqueVisitors + 1
      await env.STATS.put('unique_visitors', newUniqueVisitors.toString())
    }

    const body = JSON.stringify({
      totalViews: newTotalViews,
      uniqueVisitors: newUniqueVisitors,
    })

    return new Response(body, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        // Set cookie for 30 days if new visitor
        ...(!isReturning && {
          'Set-Cookie':
            '_vid=1; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000',
        }),
      },
    })
  },
}
