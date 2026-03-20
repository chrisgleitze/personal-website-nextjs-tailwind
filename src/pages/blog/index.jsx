import { useState } from 'react'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { CategoryFilter } from '@/components/CategoryFilter'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>{article.title}</Card.Title>
        <Card.Description>{article.description}</Card.Description>
      </Card>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles =
    activeCategory === 'All'
      ? articles
      : articles.filter((article) =>
          Array.isArray(article.category)
            ? article.category.includes(activeCategory)
            : article.category === activeCategory,
        )

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
        intro="I don't use AI to write my texts because I love to write."
      >
        <div>
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className="mt-12 flex max-w-3xl flex-col space-y-16">
            {filteredArticles.map((article) => (
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
