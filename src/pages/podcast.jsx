import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Podcast() {
  return (
    <>
      <Head>
        <title>Podcast - Christian Gleitze</title>
        <meta
          name="description"
          content="The Connecting Dots Podcast is about lessons and stories from founders and other people who go their own way: With my guests I connected the dots in their lives and jobs."
        />
      </Head>
      <SimpleLayout
        title="The Connecting Dots Podcast"
        intro="For the Connecting Dots Podcast I talk to founders and other people who go their own way: I connect the dots in their lives and jobs to understand their lessons and stories."
      >
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Spotify
        </h1>
        <div className="mt-4 w-full pb-8">
          <iframe
            className="h-60 w-full"
            src="https://open.spotify.com/embed/show/68Ojkgjc3ybfwcpfLnKnau?utm_source=generator&theme=0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Apple Podcasts
        </h1>
        <div className="mt-8 w-full pb-8">
          <iframe
            className="h-96 w-full"
            src="https://embed.podcasts.apple.com/us/podcast/the-connecting-dots-podcast/id1479050991?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          YouTube
        </h1>
        <div className="mt-8 flex w-full justify-center pb-8">
          <iframe
            className="h-96 w-full"
            src="https://www.youtube.com/embed/videoseries?si=PbPlwLt0OLB4Xxz0&amp;list=PL6JJo0QYr8F4gRNHYXiO2kCj5R7iRw43e"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <hr className="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-100 dark:bg-gray-700 md:my-10" />
        <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
          <h1 className="pb-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Other people&apos;s podcasts
          </h1>
          <p>
            I also produced podcasts for other people. One client was the German
            Federal Ministry of Family Affairs. For them I produced the podcast
            &#39;Kinderwunschzeit&#39; in 2022. It&apos;s about the wish to have
            children from a psychological and medical perspective. You&apos;ll
            find links to all podcast players{' '}
            <a
              href="https://www.informationsportal-kinderwunsch.de/kiwu/kinderwunschzeit/podcast"
              class="text-teal-400 underline hover:no-underline"
              target="_blank" rel="noreferrer noopener"
            >
              here
            </a>
            .
          </p>
        </div>
      </SimpleLayout>
    </>
  )
}
