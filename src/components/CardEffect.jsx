import Image from 'next/image'
import Link from 'next/link'

export function CardEffect({ heading, content, logo }) {
  return (
    <Link
      href="#"
      className="group relative block h-[22rem] w-72 cursor-pointer max-xl:w-60 max-lg:w-72"
    >
      {/* <span className="absolute inset-0 border-2 rounded-lg border-dashed border-black dark:border-zinc-300"></span> */}

      {/* <div className="relative flex h-full transform items-end border-4 rounded-lg border-black dark:border-zinc-300 bg-transparent dark:bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"> */}
      {/* <div className="relative shadow-xl flex h-full justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800/40 md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#9ca3af] dark:group-hover:shadow-[8px_8px_0_0_#e5e7eb]"> */}
      <div className="relative flex h-full justify-center rounded-3xl border-2 border-gray-400 bg-white p-8 px-16 shadow-xl dark:border-gray-200 dark:bg-gray-800 md:p-8 lg:py-8 lg:px-0 xl:p-8">
        <div className="self-center px-8 pb-4 transition-opacity group-hover:absolute group-hover:opacity-0">
          <Image
            src={logo}
            width={150}
            unoptimized
            className="mx-auto"
            alt="Project Logo"
          />
          <h2 className="ml-0 flex justify-center text-center font-mono text-4xl font-extrabold leading-9 text-[#00843D] dark:text-yellow-400">
            {heading}
          </h2>
        </div>
        <div className="absolute self-center pr-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 dark:text-zinc-300 md:scale-95 md:p-0 lg:scale-90 lg:pb-0 lg:pl-3 lg:pr-0 xl:pl-0">
          <p className="sm:w-100 mt-4 w-52 font-mono">{content}</p>
        </div>
      </div>
    </Link>
  )
}
