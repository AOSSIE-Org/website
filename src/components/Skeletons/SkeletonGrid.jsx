import { SkeletonCard } from './SkeletonCard'

export function SkeletonGrid({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index}>
          <SkeletonCard />
        </span>
      ))}
    </div>
  )
}
