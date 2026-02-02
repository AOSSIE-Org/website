'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ContainerPattern } from '@/components/shared/ContainerPattern';
import { Pattern } from '@/components/shared/Pattern';

export function Banner() {
  return (
    <motion.section
      aria-label="Apply Banner"
      className="scroll-mt-14 bg-[#00843D] dark:bg-yellow-400 sm:scroll-mt-32"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="overflow-hidden lg:relative">
        <ContainerPattern size="md" className="relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3"
          >
             <Pattern />
          </motion.div>
          <motion.div
             initial={{ x: -50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.6 }}
             className="absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible"
          >
             <Pattern />
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Launch into AOSSIE&apos;s open-source world through GSoC!
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono">
              Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-5">
              <Link href="/apply" legacyBehavior>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-black px-8 py-3 text-black dark:text-white focus:outline-none font-mono font-semibold">
                  Apply to GSoC with AOSSIE
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>
        </ContainerPattern>
      </div>
    </motion.section>
  );
}
