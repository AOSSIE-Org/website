import clsx from 'clsx';

export function SectionHeading({ number, children, className, ...props }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full py-1 px-4 text-[#00843D] dark:text-yellow-400 ring-1 ring-inset ring-[#00843D] dark:ring-yellow-400'
      )}
      style={{
        marginBottom: '1rem', // Adds spacing below the heading for better layout flow
        paddingLeft: '1.25rem', // Slight adjustment for better content alignment
        paddingRight: '1.25rem',
      }}
      {...props}
    >
      <span
        className="font-mono text-base font-semibold"
        aria-hidden="true"
        style={{
          marginRight: '0.75rem', // Space between number and content
        }}
      >
        {number}
      </span>
      <span className="ml-3 text-base font-semibold font-mono tracking-tighter">
        {children}
      </span>
    </h2>
  );
}
