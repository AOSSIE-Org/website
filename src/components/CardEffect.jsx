import Image from 'next/image'

export function CardEffect({heading, content, logo}) {
    return (
        <a className="group relative block h-auto sm:w-72 md:w-full lg:w-72 cursor-pointer">

            {/* <span className="absolute inset-0 border-2 rounded-lg border-dashed border-black dark:border-zinc-300"></span> */}

            {/* <div className="relative flex h-full transform items-end border-4 rounded-lg border-black dark:border-zinc-300 bg-transparent dark:bg-transparent transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"> */}
            {/* <div className="relative shadow-xl flex h-full justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800/40 md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#9ca3af] dark:group-hover:shadow-[8px_8px_0_0_#e5e7eb]"> */}
            <div className="relative shadow-xl flex h-full justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8">
                <div className="px-8 pb-4 self-center transition-opacity group-hover:absolute group-hover:opacity-0">
                    <Image
                        src= {logo}
                        width={150}
                        unoptimized
                        className='mx-auto'
                        alt='Project Logo'
                    />
                    <h2 className="ml-0 leading-9 text-4xl text-center flex font-extrabold justify-center font-mono text-[#00843D] dark:text-yellow-400">{heading}</h2>
                </div>
                <div className=" md:relative 
                md:opacity-100 
                lg:absolute lg:opacity-0 lg:group-hover:relative lg:group-hover:opacity-100
                self-center pr-6 transition-opacity dark:text-zinc-300">
                    <p className="mt-4 font-mono w-full sm:max-w-sm">{content}</p>
                </div>
            </div>
        </a>
    )
}