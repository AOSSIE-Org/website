import clsx from 'clsx'

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        'text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-yellow-400 flex items-center gap-3 mb-8 animate-fade-in',
        className
      )}
      {...props}
    >
      {number && (
        <span className="font-mono text-lg font-black text-primary-accent dark:text-yellow-400 drop-shadow" aria-hidden="true">
          {number}
        </span>
      )}
      <span className="ml-3 text-xl md:text-2xl font-semibold font-mono tracking-tighter">
        {children}
      </span>
    </h2>
  )
}
