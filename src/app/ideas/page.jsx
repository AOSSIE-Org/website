import { IdeasDisplay } from '@/components/ideas/IdeasDisplay'
import { IdeasHeader } from '@/components/ideas/IdeasHeader'
import { fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas'

export const metadata = {
  title: 'Idea List',
  description: 'Idea List for GSOC',
}

export default async function IdeasPage() {
  const currentYear = getCurrentYear()
  const articles = await fetchIdeasFromGitHub(currentYear)
  
  const validIdeasData = [
    {
      year: currentYear.toString(),
      articles
    }
  ]

  return (
    <IdeasHeader validIdeasData={validIdeasData} currentYear={currentYear}>
      <IdeasDisplay ideasData={validIdeasData} />
    </IdeasHeader>
  )
}
