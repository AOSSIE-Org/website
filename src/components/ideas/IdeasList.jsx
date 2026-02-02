'use client'

import Grid from '@mui/material/Grid'
import { IdeaCard } from './IdeaCard'

export function IdeasList({ articles, year }) {
  return (
    <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
      {articles.map((article) => (
        <IdeaCard key={article.slug} article={article} year={year} />
      ))}
    </Grid>
  )
}
