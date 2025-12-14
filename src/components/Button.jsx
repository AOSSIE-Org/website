import Link from 'next/link'

export function Button({ href = '#', children, className = '', ariaLabel = '', variant = 'primary', ...props }) {
  const variantClasses =
    variant === 'light'
      ? 'bg-white text-black dark:bg-black dark:text-white'
      : 'bg-[#00843D] text-white dark:bg-yellow-400 dark:text-zinc-900'

  return (
    <Link href={href} legacyBehavior>
      <a
        aria-label={ariaLabel}
        className={`group relative inline-flex items-center overflow-hidden rounded-lg px-8 py-3 focus:outline-none active:bg-[#00843D] ${variantClasses} ${className}`}
        {...props}
      >
        <span className="absolute right-0 flex-shrink-0 translate-x-full rounded-full border border-current bg-white p-1 text-black transition-transform group-hover:-translate-x-4">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
        <span className="font-mono font-semibold transition-all group-hover:mr-6">{children}</span>
      </a>
    </Link>
  )
}

export default Button
