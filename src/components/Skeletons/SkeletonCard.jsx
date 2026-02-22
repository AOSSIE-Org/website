import { Skeleton } from './Skeleton'
import { SkeletonText } from './SkeletonText'

export function SkeletonCard() {
  return (
    <div className="relative shadow-xl flex h-[22rem] justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8">
      <div className="px-8 pb-4 self-center w-full">
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <Skeleton height="2.25rem" width="80%" className="mx-auto mb-2" />
        <SkeletonText lines={3} className="mt-4" />
      </div>
    </div>
  )
}
