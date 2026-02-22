import { forwardRef } from 'react'
import clsx from 'clsx'

const Skeleton = forwardRef(function Skeleton(
  { className, variant = 'rectangular', width, height, ...props },
  ref
) {
  const variantStyles = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded',
  }

  return (
    <div
      ref={ref}
      className={clsx(
        'animate-pulse bg-gray-200 dark:bg-gray-700',
        variantStyles[variant],
        className
      )}
      style={{ width, height }}
      {...props}
    />
  )
})

export { Skeleton }
