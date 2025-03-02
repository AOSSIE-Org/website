import Head from 'next/head'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllIdeas } from '@/helper/getAllIdeas2022'

function Article({ article }) {
    return (
        <article className="md:grid md:grid-cols-4 md:grid-flow-col md:items-baseline sm:mt-0 mt-5">
            <Card className="md:col-span-3 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105">
                <Card.Title href={`/ideas/2024/${article.slug}`} className="text-xl font-semibold text-green-600 dark:text-yellow-400 hover:underline">
                    {article.title}
                </Card.Title>
                <Card.Description className="text-lg text-zinc-600 dark:text-zinc-400 mt-2">
                    {article.description}
                </Card.Description>
                <Card.Cta className="mt-4 text-green-600 dark:text-yellow-400 hover:text-green-700 dark:hover:text-yellow-500 transition-colors">
                    Read More
                </Card.Cta>
            </Card>
        </article>
    )
}

export default function Ideas({ articles }) {
    return (
        <>
            <Head>
                <title>Idea List</title>
                <meta name="description" content="Idea List for GSOC 2024" />
            </Head>
            <Container className="mt-20 mb-28">
                <div className="text-center">
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 mx-auto sm:w-3/4">
                        Explore the world of open-source possibilities with AOSSIE&apos;s <b>Idea List</b>. As part of Google Summer of Code, we offer a unique opportunity for developers to explore new ideas, a wide variety of projects for developers to choose from and contribute to. From developing new features to fixing critical bugs, our idea list is your go-to destination for finding your next big project and kickstart your open-source journey.
                    </p>
                </div>
                <Container.Inner>
                    <div className="mt-10 sm:mt-20 flex justify-center">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
                            {articles.map((article) => (
                                <Article key={article.slug} article={article} />
                            ))}
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <Link href="/ideas" passHref>
                            <button className="mx-auto group rounded-lg bg-zinc-800 text-white dark:bg-white dark:text-black px-8 py-3 text-lg font-semibold focus:outline-none hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors">
                                Go Back
                            </button>
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
