import clsx from "clsx"

export function TimelineElement({ title, description, button, time, link, classCondition }) {
    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-yellow-900 scale-150">
                <svg aria-hidden="true" className="w-3 h-3 text-green-800 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
            </span>
            <h3 className="flex font-mono tracking-tighter items-center mb-1 text-xl font-bold text-gray-900 dark:text-white ml-2">{title}</h3>
            <time className="block mb-2 font-mono text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{time}</time>
            <p className="mb-4 font-mono tracking-tight text-base font-normal text-gray-500 dark:text-gray-400 ml-2">{description}</p>
            <a href={link} className={clsx(classCondition,"inline-flex font-mono items-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:outline-none focus:ring-gray-300 focus:text-green-700 dark:bg-zinc-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700")}>{button}</a>
        </li>
    )
}
