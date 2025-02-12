import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllIdeas } from '@/helper/getAllIdeas2024'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:grid-flow-col md:items-baseline sm:mt-0 mt-5">
      <Card className="md:col-span-3">
        <Card.Title href={`/ideas/2023/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta href={`/ideas/2024/${article.slug}`}>Read More</Card.Cta>
      </Card>
    </article>
  )
}

export default function Ideas({ articles }) {
  return (
    <>
      <Head>
        <title>
          Idea List
        </title>
        <meta
          name="description"
          content="Idea List for GSOC 2023"
        />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="flex justify-center items-center w-full">
        <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
           AOSSIE&apos;s{' '}
            <b>Idea List</b>. for {' '}
            <b>Google Summer of Code 2024</b>
          </p>
        </div>
        <Container.Inner>
          <div className="mt-10 sm:mt-20 flex justify-center">
            <div className="grid gap-6 gap-y-20 md:grid-cols-3">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className='text-center mt-16'>
            <Link href="/ideas" className="mx-auto order-2 group rounded-lg items-center overflow-hidden bg-zinc-800 dark:bg-white px-8 py-3 dark:text-black text-white focus:outline-none" >
              <span className="font-mono font-semibold text-center">
                Go Back
              </span>
            </Link>
          </div>
        </Container.Inner>
      </Container>
    </>
    )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllIdeas()).map(({ component, ...meta }) => meta),
    },
  }
}