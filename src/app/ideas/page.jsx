import { getIdeas } from '@/lib/ideas'
import { IdeasDisplay } from '@/components/ideas/IdeasDisplay'
import { IdeasHeader } from '@/components/ideas/IdeasHeader'
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
    <IdeasHeader validIdeasData={validIdeasData}>
      <IdeasDisplay ideasData={validIdeasData} />
    </IdeasHeader>
  )
}
