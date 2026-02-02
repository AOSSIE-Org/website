import glob from 'fast-glob'
import path from 'path'

export async function getIdeas(year) {
  const ideasDir = path.join(process.cwd(), `src/app/ideas/${year}`)
  const files = await glob('**/page.mdx', { cwd: ideasDir })

  const ideas = await Promise.all(files.map(async (file) => {
    const slug = path.dirname(file)
    
    // We dynamically import the MDX page to get the metadata
    // Note: This relies on Webpack correctly handling the dynamic import globbing
    // The path must align with how Webpack sees the source files
    try {
        const mod = await import(`@/app/ideas/${year}/${slug}/page.mdx`)
        return {
            slug,
            ...(mod.meta || mod.metadata)
        }
    } catch (e) {
        console.error(`Failed to import idea for year ${year}, slug ${slug}`, e)
        return null
    }
  }))

  return ideas.filter(idea => idea !== null)
}
