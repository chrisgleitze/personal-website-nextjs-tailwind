import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Podcast() {
  return (
    <>
      <Head>
        <title>Podcast - Christian Gleitze</title>
        <meta name="description" content="XXX" />
      </Head>
      <SimpleLayout
        title="Podcast"
        intro="I don't do my podcast anymore because I want to focus on Frontend Engineering. Though I put a lot of work into the podcast and I think it's still worth listening to. It's about lessons & stories from founders and other people who go their own way: With my guests I connected the dots in their lives and jobs. I dove deep into their life lessons, their successes and failures."
      >
        <div className="mt-4 w-full">
          <iframe
            className="h-60 w-full"
            src="https://open.spotify.com/embed/show/68Ojkgjc3ybfwcpfLnKnau"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="mt-8 w-full">
          <iframe
            className="h-60 w-full"
            src="https://embed.podcasts.apple.com/de/podcast/the-connecting-dots-podcast/id1479050991"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div className="mt-8 flex w-full justify-center">
          <iframe
            className="h-60 w-full sm:w-3/4 lg:w-1/2"
            src="https://www.youtube.com/embed/videoseries?si=Es1QKUCeFrsRPBda&amp;list=PL6JJo0QYr8F5Qx-h-UPJiVfQzZYcYH-_U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </SimpleLayout>
    </>
  )
}
