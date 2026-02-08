import Link from 'next/link'

const iconMap = {
    github: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
    ),
    gitlab: (props) => (
        <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M503.5 204.6L442.8 17.5c-4.1-12.6-21.9-12.6-26 0l-60.7 187.1H155.9L95.2 17.5c-4.1-12.6-21.9-12.6-26 0L8.5 204.6c-4.9 15 1 31.6 14.7 38.6L256 501.1l232.8-257.9c13.7-7 19.6-23.6 14.7-38.6z" />
        </svg>
    ),
    discord: (props) => (
        <svg
            viewBox="0 0 127.14 96.36"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.31,80.21h0A105.73,105.73,0,0,0,32.47,96.36,77.7,77.7,0,0,0,39.2,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.73,11.1,105.32,105.32,0,0,0,32.19-16.14h0C130,46.85,121,23.36,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
        </svg>
    ),
    mail: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 .5l8 5 8-5V6l-8 5-8-5v.5z" />
        </svg>
    ),
    x: (props) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
    ),
}

export default function CardContact({ href, title, description, type,target }) {
    const Icon = iconMap[type]

    return (
        <Link
            href={href}
            aria-label={title}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="group relative rounded-3xl border border-zinc-200/70 bg-white p-6 transition
                 hover:border-green-500/60 hover:bg-green-50
                 dark:border-zinc-800 dark:bg-zinc-900/50
                 dark:hover:border-yellow-400/40 dark:hover:bg-zinc-900"
        >
            <div className="flex items-start gap-4">
                <div
                    className="rounded-xl bg-zinc-100 p-2 transition
                     group-hover:bg-green-100
                     dark:bg-zinc-800 dark:group-hover:bg-yellow-400/10"
                >
                    <Icon className="h-5 w-5 text-zinc-700 transition
                           group-hover:text-green-600
                           dark:text-zinc-300 dark:group-hover:text-yellow-400" />
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-zinc-900 transition
                         group-hover:text-green-700
                         dark:text-zinc-100 dark:group-hover:text-yellow-400">
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 transition
                        group-hover:text-green-600
                        dark:text-zinc-400 dark:group-hover:text-yellow-300">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
