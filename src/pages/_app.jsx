import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

// const GA_ID = 'G-7F9GFP91BK'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  const nextRouter = useRouter()
  let previousPathname = usePrevious(router.pathname)

  // Track SPA route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (!window.gtag) return
      window.gtag('config', GA_ID, {
        page_path: url,
      })
    }

    nextRouter.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      nextRouter.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [nextRouter.events])

  return (
    <>
      <Head>
        <title>Christian Gleitze</title>
      </Head>

      {/* Google Analytics (GA4) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-7F9GFP91BK`}
      />

      <Script
        id="ga-init"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7F9GFP91BK', {
            anonymize_ip: true,
          });
        `}
      </Script>

      {/* Background frame */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      {/* Page layout */}
      <div className="relative">
        <Header />
        <main>
          <Component
            previousPathname={previousPathname}
            {...pageProps}
          />
        </main>
        <Footer />
      </div>
    </>
  )
}
