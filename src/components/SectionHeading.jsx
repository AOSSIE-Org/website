import clsx from 'clsx'

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'text-3xl font-bold text-[#00843D] dark:text-yellow-400 tracking-tight'
      )}
      {...props}
    >
      {number && (
        <span className="mr-2 font-mono text-xl font-semibold" aria-hidden="true">
          {number}.
        </span>
      )}
      <span>{children}</span>
    </h2>
  )
}
