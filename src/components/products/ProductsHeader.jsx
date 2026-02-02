'use client'

import { motion } from 'framer-motion'

export function ProductsHeader() {
    return (
        <header className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          >
            Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
          >
            Explore our ready-to-use applications.
          </motion.p>
        </header>
    )
}
