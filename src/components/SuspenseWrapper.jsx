import { Suspense } from 'react'
import { Skeleton } from './Skeletons'

export function SuspenseWrapper({ children, fallback = null }) {
  const defaultFallback = (
    <div className="flex items-center justify-center min-h-[400px]" role="status" aria-busy="true" aria-live="polite">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#00843D] dark:border-yellow-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-16 bg-gray-200 dark:bg-gray-700 mb-8" />
      <div className="space-y-4">
        <Skeleton height="3rem" width="60%" className="mx-auto" />
        <Skeleton height="1.5rem" width="80%" className="mx-auto" />
        <Skeleton height="1.5rem" width="70%" className="mx-auto" />
      </div>
    </div>
  )
}
