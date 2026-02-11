import Image from 'next/image'

export function CardEffect({ heading, content, logo }) {
    return (
        <a
            className="
        group relative block h-[22rem] w-72 cursor-pointer
        transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-2
      "
        >
            {/* Soft glow */}
            <div
                aria-hidden="true"
                className="
          absolute inset-0 rounded-3xl
          bg-gradient-to-br from-emerald-200/40 via-transparent to-emerald-300/40
          opacity-0 blur-2xl
          transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:opacity-100
        "
            />

            {/* Card */}
            <div
                className="
          relative z-10 flex h-full flex-col items-center justify-center
          rounded-3xl border border-zinc-200 dark:border-zinc-700
          bg-white/95 dark:bg-zinc-900/90 backdrop-blur
          shadow-md
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:shadow-2xl
        "
            >
                {/* Front (logo + title) */}
                <div
                    className="
            px-8 text-center
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:opacity-0 group-hover:-translate-y-6
          "
                >
                    <Image
                        src={logo}
                        width={140}
                        height={140}
                        unoptimized
                        className="mx-auto"
                        alt="Project Logo"
                    />
                    <h2 className="mt-3 text-3xl font-extrabold font-mono text-[#00843D] dark:text-yellow-400">
                        {heading}
                    </h2>
                </div>

                {/* Back (description) */}
                <div
                    className="
            absolute px-8 text-center opacity-0 translate-y-6
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:opacity-100 group-hover:translate-y-0
            dark:text-zinc-300
          "
                >
                    <p className="font-mono text-sm leading-relaxed">
                        {content}
                    </p>
                </div>
            </div>
        </a>
    )
}
