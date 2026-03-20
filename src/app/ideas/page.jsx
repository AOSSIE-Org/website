import { IdeasDisplay } from '@/components/ideas/IdeasDisplay'
import { IdeasHeader } from '@/components/ideas/IdeasHeader'
import { fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas'
import { getIdeas } from '@/lib/ideas'

export const metadata = {
  title: 'Idea List',
  description: 'Idea List for GSOC',
}

export const revalidate = 3600

export default async function IdeasPage() {
  const currentYear = getCurrentYear()
  const years = Array.from({ length: currentYear - 2022 + 1 }, (_, i) => currentYear - i)
  
  const ideasData = await Promise.all(years.map(async (year) => {
    const localArticles = await getIdeas(year.toString())
    const githubArticles = await fetchIdeasFromGitHub(year)
    
    // Merge and remove duplicates by slug (case-insensitive)
    const articles = [...localArticles]
    githubArticles.forEach(gi => {
      if (!articles.some(li => li.slug.toLowerCase() === gi.slug.toLowerCase())) {
        articles.push(gi)
      }
    })
    
    return {
      year: year.toString(),
      articles: articles.sort((a, b) => (a.title || '').localeCompare(b.title || ''))
    }
  }))

  const validIdeasData = ideasData.filter(data => data.articles.length > 0)

  return (
    <IdeasHeader validIdeasData={validIdeasData} currentYear={currentYear}>
      <IdeasDisplay ideasData={validIdeasData} />
    </IdeasHeader>
  )
}
