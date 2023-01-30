import glob from 'fast-glob'
import * as path from 'path'

async function importIdea(ideaFilename) {
  let { meta, default: component } = await import(
    `../pages/ideas/2022/${ideaFilename}`
  )
  return {
    slug: ideaFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllIdeas() {
  let ideaFilenames = await glob(['*.mdx','*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/ideas/2022'),
  })

  let ideas = await Promise.all(ideaFilenames.map(importIdea))

  return ideas
}
