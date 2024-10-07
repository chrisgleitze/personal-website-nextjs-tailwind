import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum - Christian Gleitze</title>
        <meta
          name="description"
          content="Impressum"
        />
      </Head>
      <SimpleLayout
        title="Impressum"
        intro="Impressum"
      >
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Impressum
        </h1>
        <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
          <h1 className="pb-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Lorem Ipsum
          </h1>
          <p>
            I also produced podcasts for other people. One client was the German.
          </p>
        </div>
      </SimpleLayout>
    </>
  )
}
