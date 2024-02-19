import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Podcast() {
  return (
    <>
      <Head>
        <title>Podcast - Christian Gleitze</title>
        <meta
          name="description"
          content="The Connecting Dots Podcast is about lessons & stories from founders and other people who go their own way: With my guests I connected the dots in their lives and jobs."
        />
      </Head>
      <SimpleLayout
        title="Podcast"
        intro="I don't do my podcast anymore because I want to focus on Frontend Engineering. Though I put a lot of work into the podcast and I think it's still worth listening to. It's about lessons & stories from founders and other people who go their own way: With my guests I connected the dots in their lives and jobs. I dove deep into their life lessons, their successes and failures."
      >
        <div className="mt-4 w-full">
          <iframe
            className="h-60 w-full"
            src="https://open.spotify.com/embed/show/68Ojkgjc3ybfwcpfLnKnau"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="mt-8 w-full">
          <iframe
            className="h-60 w-full"
            src="https://embed.podcasts.apple.com/de/podcast/the-connecting-dots-podcast/id1479050991"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="mt-8 flex w-full justify-center">
          <iframe
            className="h-80 w-full"
            src="https://www.youtube.com/embed/videoseries?si=Es1QKUCeFrsRPBda&amp;list=PL6JJo0QYr8F5Qx-h-UPJiVfQzZYcYH-_U"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            I also produced podcasts for clients. One of them was the podcast
            &#39;Kinderwunschzeit&#39; that I produced for the Federal Ministry
            of Family Affairs in 2022. It&apos;s about the topic of fertility
            and the wish to have children. You&apos;ll find links to all podcast
            players{' '}
            <a
              href="https://www.informationsportal-kinderwunsch.de/kiwu/kinderwunschzeit/podcast-kinderwunsch"
              class="text-teal-400 underline hover:no-underline"
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
