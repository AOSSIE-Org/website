import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div className={clsx(className, 'prose prose-code:p-2 prose-code:bg-slate-300 dark:prose-code:bg-slate-100 dark:prose-code:text-zinc-800 prose-h2:mt-0 prose-li:mt-0 prose-headings:mt-0 prose-li:mb-2 prose-headings:font-extrabold prose-h3:mb-6 dark:prose-invert')}>{children}</div>
  )
}
