import Head from 'next/head'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { getAllIdeas } from '@/helper/getAllIdeas'

function Article({ article }) {
  return (
    // <article className="h-72 max-lg:w-72 max-xl:w-60 w-72 sm:mb-0 mb-10">
    <article className="md:grid md:grid-cols-4 md:grid-flow-col md:items-baseline sm:mt-0 mt-5">
      <Card className="md:col-span-3">
        <Card.Title href={`/ideas/2023/${article.slug}`}>
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
          content="Idea List for GSOC"
        />
      </Head>
      <Container className="mt-20 mb-28">
        {/* <SectionHeading number='2' className='mt-5'>Idea List</SectionHeading> */}
        <div className="">
          {/* <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Idea List
          </h1> */}
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>Explore the world of open-source possibilities with AOSSIE&apos;s <b>Idea List</b>. As part of Google Summer of Code, we offer a unique opportunity for developers to explore new ideas,  a wide variety of projects for developers to choose from and contribute to. From developing new features to fixing critical bugs, our idea list is your go-to destination for finding your next big project and kickstart your open-source journey.</p>
        </div>
        <Container.Inner>
          <div className="mt-10 sm:mt-20 flex justify-center">
            {/* <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 mt-10 sm:justify-evenly items-center"> */}
            <div className="grid md:grid-rows-4 md:grid-flow-col gap-6 gap-y-8">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
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
