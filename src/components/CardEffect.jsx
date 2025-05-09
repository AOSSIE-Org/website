import Image from 'next/image'

export function CardEffect({heading, content, logo}) {
    return (
<a
  className="group relative block h-[22rem] max-lg:w-72 max-xl:w-60 w-72 cursor-pointer hover:cursor-default"
>
  <div className="relative shadow-xl flex h-full justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
    
    <div className="px-8 pb-4 self-center transition-opacity group-hover:absolute group-hover:opacity-0">
      <Image
        src={logo}
        width={150}
        unoptimized
        className="mx-auto"
        alt="Project Logo"
      />
      <h2 className="ml-0 leading-9 text-4xl text-center flex font-extrabold justify-center font-mono text-[#00843D] dark:text-yellow-400">
        {heading}
      </h2>
    </div>
    
    <div className="absolute self-center pr-6 lg:scale-90 lg:pb-0 lg:pl-3 lg:pr-0 xl:pl-0 md:p-0 md:scale-95 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 dark:text-zinc-300">
      <p className="mt-4 font-mono sm:w-100 w-52">{content}</p>
    </div>
    
  </div>
</a>


    )
}