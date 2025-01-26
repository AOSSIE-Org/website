import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllIdeas } from '@/helper/getAllIdeas2022'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:grid-flow-col md:items-baseline sm:mt-0 mt-5">
      <Card className="md:col-span-3">
        <Card.Title className="bg-red-300" href={`/ideas/2023/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read More</Card.Cta>
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
        <div className="">
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>Explore the world of open-source possibilities with AOSSIE&apos;s <b>Idea List</b>. As part of Google Summer of Code, we offer a unique opportunity for developers to explore new ideas,  a wide variety of projects for developers to choose from and contribute to. From developing new features to fixing critical bugs, our idea list is your go-to destination for finding your next big project and kickstart your open-source journey.</p>
        </div>
        <Container.Inner>
          <div className="mt-10 sm:mt-20 flex justify-center">
            <div className="grid md:grid-rows-4 md:grid-flow-col gap-6 gap-y-8">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className='text-center mt-16 '>
            <Link className="inline-block order-2 mx-auto items-center overflow-hidden bg-zinc-800 hover:bg-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out rounded-lg px-8 py-3 text-white hover:text-black focus:outline-none dark:bg-white dark:text-black dark:hover:bg-yellow-400 dark:hover:text-black hover:border-b-4 hover:font-extrabolde" href="/ideas">
              <span className="font-mono font-semibold text-center ">
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
