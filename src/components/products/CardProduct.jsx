'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBook } from '@fortawesome/free-solid-svg-icons';

export function CardProduct({ product }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col items-center p-6 bg-white dark:bg-zinc-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700 hover:border-[#00843D] dark:hover:border-yellow-400"
    >
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={product.logo}
          alt={product.name}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-2">
        {product.name}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-center font-mono text-sm mb-6 flex-grow">
        {product.description}
      </p>
      
      <div className="flex gap-4">
         <motion.a
          href={product.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-700 text-[#00843D] dark:text-yellow-400 font-mono text-sm font-semibold hover:bg-[#00843D] hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors"
        >
          <FontAwesomeIcon icon={faDownload} />
          Download
        </motion.a>
        <Link
          href={`/products/${product.slug}`}
          legacyBehavior
        >
            <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-700 text-[#00843D] dark:text-yellow-400 font-mono text-sm font-semibold hover:bg-[#00843D] hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black transition-colors"
            >
                <FontAwesomeIcon icon={faBook} />
                Guide
            </motion.a>
        </Link>
      </div>
    </motion.div>
  );
}
