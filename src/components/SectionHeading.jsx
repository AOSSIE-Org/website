import clsx from 'clsx'

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'py-1text-[#00843D] dark:text-yellow-400 text-center pb-4'
      )}
      {...props}
    >
      <span className="font-mono text-base font-semibold" aria-hidden="true">
      </span>
      {/* <span className="ml-3 h-3.5 w-px bg-blue-600/20 dark:bg-white" /> */}
      <span className="ml-3 text-base font-semibold font-mono tracking-tighter">
        {children}
      </span>
    </h2>
  )
}
