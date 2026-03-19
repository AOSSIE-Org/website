import { getIdeas } from '@/lib/ideas'
import { fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas'
import { IdeasList } from '@/components/ideas/IdeasList'
import { Container } from '@/components/shared/Container'

export async function generateMetadata({ params }) {
  const { year } = params
  return {
    title: `Idea List ${year}`,
    description: `Idea List for GSOC ${year}`,
  }
}

export async function generateStaticParams() {
  const currentYear = getCurrentYear()
  const years = Array.from({ length: currentYear - 2022 + 1 }, (_, i) => (2022 + i).toString())
  return years.map(year => ({ year }))
}

export default async function YearIdeasPage({ params }) {
  const { year } = params
  const localArticles = await getIdeas(year)
  const githubArticles = await fetchIdeasFromGitHub(year)
  
  // Merge and remove duplicates by slug
  const allArticles = [...localArticles]
  githubArticles.forEach(gi => {
    if (!allArticles.some(li => li.slug.toLowerCase() === gi.slug.toLowerCase())) {
        allArticles.push(gi)
    }
  })

  const articles = allArticles.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
  
  if (articles.length === 0) {
      return (
          <Container className="mt-32">
              <h1 className="text-center text-4xl font-bold font-mono">Ideas not found for {year}</h1>
          </Container>
      )
  }

  return (
    <Container className="mt-20 mb-28">
         <div className="flex justify-center items-center w-full mb-8">
            <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400 text-center">
                AOSSIE&apos;s{' '}
                <b>Idea List</b> for{' '}
                <b>Google Summer of Code {year}</b>
            </p>
        </div>
        <Container.Inner>
            <div className="mt-10 sm:mt-20 flex justify-center">
                <IdeasList articles={articles} year={year} />
            </div>
        </Container.Inner>
    </Container>
  )
}
