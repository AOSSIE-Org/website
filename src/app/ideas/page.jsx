import { getIdeas } from '@/lib/ideas'
import { IdeasDisplay } from '@/components/ideas/IdeasDisplay'
import { Container } from '@/components/shared/Container'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'

export const metadata = {
  title: 'Idea List',
  description: 'Idea List for GSOC',
}

export default async function IdeasPage() {
  const ideasDir = path.join(process.cwd(), 'src/app/ideas')
  
  // Get all year directories
  const years = fs.readdirSync(ideasDir)
    .filter(file => /^\d{4}$/.test(file) && fs.statSync(path.join(ideasDir, file)).isDirectory())
    // Sort descending (2025, 2024, ...)
    .sort((a, b) => b.localeCompare(a))

  // Fetch ideas for all years
  const ideasQueries = years.map(async (year) => {
    const articles = await getIdeas(year)
    return { year, articles }
  })
  
  const ideasData = await Promise.all(ideasQueries)
  
  // Filter out years that might be empty
  const validIdeasData = ideasData.filter(data => data.articles.length > 0)

  return (
    <>
      <Container className="mt-20 mb-28">
        <div className="ideas-text flex items-center justify-center mb-8 relative">
          <div
            className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/logo.png')] bg-[url('/logo.png')] absolute left-10"
            alt="GSOC Logo"
          ></div>


          <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-5xl md:text-5xl lg:text-6xl text-center">
            IDEAS
          </h1>

          <div
            className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center absolute right-10"
            style={{ backgroundImage: "url('/logo.png')" }}
            aria-label="Logo"
          ></div>

        </div>
        <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400 text-center max-w-4xl mx-auto">
          Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
          <b>Idea List</b>. As part of{' '}
          <b>Google Summer of Code 2025</b>, we offer
          a unique opportunity for developers to explore new ideas, a wide
          variety of projects for developers to choose from and contribute to.
          From developing new features to fixing critical bugs, our idea list
          is your go-to destination for finding your next big project and
          kickstart your open-source journey.
        </p>
        <Container.Inner>
          <div className="mt-10 sm:mt-20">
             <IdeasDisplay ideasData={validIdeasData} />
          </div>

          <div className="mt-20 py-12 bg-zinc-50 dark:bg-zinc-800/20 rounded-2xl text-center">
            <h2 className="text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100">
              Have an Idea?
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-mono max-w-2xl mx-auto px-4">
              We are always open to new and innovative ideas. If you have a project in mind that aligns with our mission, we&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <Link
                href="mailto:aossie.oss@gmail.com"
                className="inline-block rounded-md border border-transparent bg-[#00843D] px-8 py-3 text-base font-medium text-white hover:bg-[#006e32] md:py-4 md:px-10 md:text-lg font-mono dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 transition-colors"
              >
                Submit Your Idea
              </Link>
            </div>
          </div>
        </Container.Inner>
      </Container>
    </>
  )
}
