import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <Link {...props}>
      {children}
    </Link>
  );
};

Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
  const TitleComponent = href ? 'a' : Component;

  return (
    <TitleComponent
      href={href}
      className="text-lg font-semibold font-mono tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      {children}
    </TitleComponent>
  );
};

Card.Description = function CardDescription({ children }) {
  return (
    <p className="mt-2 text-sm font-mono text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children }) {
  return (
    <div
      className="flex items-center text-sm font-semibold text-[#00843D] dark:text-yellow-400"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) {
  const EyebrowComponent = decorate ? 'div' : Component;

  return (
    <EyebrowComponent
      className={clsx(
        className,
        'mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </EyebrowComponent>
  );
};
