import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
      </Card>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Blog - Christian Gleitze</title>
        <meta
          name="description"
          content="In my blog I write about programming, technology and culture."
        />
      </Head>
      <SimpleLayout
        title="Blog"
        intro="My thoughts on AI, programming, podcasting and much more. I love writing, so I don't write with the help of AI."
      >
        <div>
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article
                key={article.slug}
                article={article}
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
