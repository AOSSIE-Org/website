import clsx from 'clsx'
import { useState, useEffect } from 'react'

export function TimelineElement({
  title,
  description,
  button,
  time,
  link,
  classCondition,
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <li className="mb-10 ml-6">
      <span className="absolute -left-3 flex h-6 w-6 scale-150 items-center justify-center rounded-full bg-green-100 ring-8 ring-white dark:bg-yellow-900 dark:ring-zinc-900">
        {/* ... SVG content ... */}
      </span>

      <h3 className="mb-1 ml-2 flex items-center font-mono text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
        {title}
      </h3>
      <time className="mb-2 block font-mono text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {time}
      </time>

      {isMobile ? (
        <>
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mb-2 font-mono text-sm font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </button>
            {isExpanded && (
              <p className="mt-2 ml-2 font-mono text-base font-normal tracking-tight text-gray-500 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="mb-4 ml-2 font-mono text-base font-normal tracking-tight text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}

      <div className="mt-4">
        <a
          href={link}
          className={clsx(
            classCondition,
            'inline-flex items-center rounded-lg border-2 border-gray-200 bg-white px-4 py-2 font-mono text-sm font-bold text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:text-green-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-600 dark:bg-zinc-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
          )}
        >
          {button}
        </a>
      </div>
    </li>
  )
}
