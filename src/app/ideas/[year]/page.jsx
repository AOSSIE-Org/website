import { getIdeas } from '@/lib/ideas'
import { IdeasList } from '@/components/ideas/IdeasList'
import { Container } from '@/components/shared/Container'

export async function generateMetadata({ params }) {
  return {
    title: `Idea List ${params.year}`,
    description: `Idea List for GSOC ${params.year}`,
  }
}

export async function generateStaticParams() {
   // Define the years we support
  return [
    { year: '2022' },
    { year: '2023' },
    { year: '2024' },
    { year: '2025' },
  ]
}

export default async function YearIdeasPage({ params }) {
  const { year } = params
  const articles = await getIdeas(year)
  
  if (!articles) {
      return (
          <Container className="mt-32">
              <h1 className="text-center text-4xl font-bold">Ideas not found for {year}</h1>
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
