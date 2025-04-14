import clsx from 'clsx'

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex cursor-pointer items-center rounded-full py-1 px-4 text-[#00843D] dark:text-yellow-400 ring-1 ring-inset ring-[#00843D] dark:ring-yellow-400'
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
