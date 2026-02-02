'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function CardEffect({heading, content, logo}) {
    return (
        <motion.a 
            initial={{ opacity: 0, rotateY: -90 }} 
            whileInView={{ opacity: 1, rotateY: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative block h-[22rem] max-lg:w-72 max-xl:w-60 w-72 cursor-pointer [perspective:1000px]">
             <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full shadow-xl flex flex-col items-center justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 [backface-visibility:hidden]">
                    <div className="px-8 pb-4">
                        <Image
                            src={logo}
                            width={150}
                            unoptimized
                            className='mx-auto'
                            alt='Project Logo'
                        />
                        <h2 className="mt-2 leading-9 text-4xl text-center flex font-extrabold justify-center font-mono text-[#00843D] dark:text-yellow-400">{heading}</h2>
                    </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full shadow-xl flex items-center justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                     <div className="p-6 flex items-center justify-center h-full">
                        <p className="font-mono text-center text-zinc-600 dark:text-zinc-300">
                             {content}
                        </p>
                    </div>
                </div>
            </div>
        </motion.a>
    )
}