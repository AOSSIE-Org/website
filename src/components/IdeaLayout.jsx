import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export function IdeaLayout({
  children,
  meta,
  isRssFeed = false,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title}`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 mb-20">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mt-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:hover:border-2 hover:border-2 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:left-10 lg:mb-0 xl:-top-1.5 xl:left-0"
              >
                <FontAwesomeIcon className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400" icon={faArrowLeft} />
              </button>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
              </header>
              <Prose className="mt-8 font-mono">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
