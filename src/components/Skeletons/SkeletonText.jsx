import { Skeleton } from './Skeleton'

export function SkeletonText({ lines = 3, className }) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          height="1rem"
          width={index === lines - 1 ? '75%' : '100%'}
          className="mb-2 last:mb-0"
        />
      ))}
    </div>
  )
}
