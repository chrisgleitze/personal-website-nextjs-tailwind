import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import clsx from 'clsx'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import EmailObfuscated from '@/components/EmailObfuscated'
import { useVisitorStats } from '@/lib/useVisitorStats'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function YouTubeEmbed() {
  return (
    <div className="mt-16 flex justify-center sm:mt-20">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6x_e5zbnlRs?si=Ot9MXtSyXDn33czs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default function Home({ articles }) {
  const stats = useVisitorStats()

  return (
    <>
      <Head>
        <title>Christian Gleitze - Software Engineer</title>
        <meta
          name="description"
          content="I'm Chris, a Software Engineer based in Frankfurt, Germany."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi! I&apos;m Chris,
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            a{' '}
            <span className="text-normal font-bold">
              Full-Stack Software Engineer
            </span>{' '}
            in Frankfurt, Germany. I{' '}
            <span className="text-normal font-bold">
              develop apps, websites and other software
            </span>
            , in the past for clients like DZ Bank, startups like Lofino and
            other companies.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            For <span className="text-normal font-bold">Frontend</span> work I
            use JavaScript, TypeScript and React, for{' '}
            <span className="text-normal font-bold">Backend</span> work PHP. I
            also have extensive experience with Content Management Systems (like
            Adobe Experience Manager), Linux and coding tools like Vim/Neovim.
            In{' '}
            <a
              href="\projects"
              className="text-teal-400 underline hover:no-underline"
            >
              my coding portfolio
            </a>{' '}
            and on{' '}
            <a
              href="https://github.com/chrisgleitze"
              className="text-teal-400 underline hover:no-underline"
            >
              my GitHub profile
            </a>{' '}
            you find some of my projects.{' '}
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.youtube.com/@connectingdotscoding"
              className="text-teal-400 underline hover:no-underline"
            >
              On YouTube
            </a>{' '}
            I publish coding videos. In my blog I write about AI, programming,
            podcasting and other interests of mine. You&apos;ll find both below.{' '}
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            You can get in touch with me by sending an e-mail to:{' '}
            <EmailObfuscated />
          </p>
          {stats && (
            <p className="mt-6 text-base font-medium text-zinc-400 dark:text-zinc-500">
              page views: {stats.pageViews.toLocaleString()}{' '}
              <span className="font-normal">(since 2026-01-13 on the whole website)</span>
            </p>
          )}
        </div>
      </Container>
      <Photos />
      <YouTubeEmbed />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article
                key={article.slug}
                article={article}
              />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24"></div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
