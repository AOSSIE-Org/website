'use client'

import { useState } from 'react'
import { IdeasList } from '@/components/ideas/IdeasList'

export function IdeasDisplay({ ideasData }) {
  const [showAll, setShowAll] = useState(false)
  
  // Show last 3 years initially
  const initialCount = 3
  const displayedData = showAll ? ideasData : ideasData.slice(0, initialCount)
  const hasMore = ideasData.length > initialCount && !showAll

  return (
    <div className="space-y-20">
      {displayedData.map(({ year, articles }) => (
        <div key={year} className="relative">
          <h2 className="text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100 mb-10 text-left border-l-4 pl-4 border-[#32a852] dark:border-yellow-400">
            {year} Ideas
          </h2>
          <IdeasList articles={articles} year={year} />
        </div>
      ))}
      
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="group order-2 mx-auto items-center overflow-hidden rounded-lg bg-zinc-800 px-8 py-3 text-white focus:outline-none dark:bg-white dark:text-black font-mono font-semibold transition-transform hover:scale-105"
          >
            Show All Ideas
          </button>
        </div>
      )}
    </div>
  )
}
