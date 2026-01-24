import clsx from "clsx"

export function TimelineElement({ title, description, button, time, link, classCondition }) {
    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3 ring-8 ring-white dark:ring-secondary-dark dark:bg-primary-accent/20 scale-150">
                <svg aria-hidden="true" className="w-3 h-3 text-primary dark:text-primary-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
            </span>
            <h3 className="flex font-mono tracking-tighter items-center mb-1 text-xl font-bold text-gray-900 dark:text-white ml-2">{title}</h3>
            <time className="block mb-2 font-mono text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
            <p className="mb-4 font-mono tracking-tight text-base font-normal text-gray-500 dark:text-gray-400 ml-2">{description}</p>
            <a href={link} className={clsx(classCondition,"inline-flex font-mono items-center px-4 py-2 text-sm font-bold text-secondary-dark bg-white border-2 border-secondary rounded-lg hover:bg-secondary hover:text-primary focus:z-10 focus:ring-2 focus:outline-none focus:ring-primary focus:text-primary dark:bg-secondary-dark dark:text-secondary dark:border-secondary dark:hover:text-white dark:hover:bg-primary dark:focus:ring-primary-accent")}>{button}</a>
        </li>
    )
}
