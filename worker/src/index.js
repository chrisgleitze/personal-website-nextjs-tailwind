const ZONE_ID = 'f21cde80e2ab02cbb490e6a5d9540131'
const START_DATE = '2026-01-13'
const ALLOWED_ORIGINS = [
  'https://christiangleitze.com',
  'http://localhost:3000',
]

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : '',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 })
    }

    try {
      const today = new Date().toISOString().split('T')[0]

      const query = `query {
        viewer {
          zones(filter: { zoneTag: "${ZONE_ID}" }) {
            httpRequests1dGroups(limit: 50, filter: { date_geq: "${START_DATE}", date_leq: "${today}" }) {
              sum { pageViews }
              uniq { uniques }
            }
          }
        }
      }`

      const response = await fetch('https://api.cloudflare.com/client/v4/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.CF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()
      const groups = data?.data?.viewer?.zones?.[0]?.httpRequests1dGroups?.[0]

      if (!groups) {
        return new Response(JSON.stringify({ error: 'No analytics data' }), {
          status: 502,
          headers: corsHeaders,
        })
      }

      const body = JSON.stringify({
        uniqueVisitors: groups.uniq.uniques,
        totalViews: groups.sum.pageViews,
      })

      return new Response(body, { headers: corsHeaders })
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Failed to fetch analytics' }), {
        status: 500,
        headers: corsHeaders,
      })
    }
  },
}
