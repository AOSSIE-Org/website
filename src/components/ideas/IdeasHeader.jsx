'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/shared/Container'
import Link from 'next/link'

export function IdeasHeader({ validIdeasData, currentYear = 2025, children }) {
    return (
        <Container className="mt-20 mb-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="ideas-text flex items-center justify-center pt-5 relative"
            >
                <h5 className='font-bold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 font-mono leading-tight mb-6 text-center'> 
                  <span className="text-[#00843D] dark:text-yellow-400">Think.</span> Build. Ship.
                </h5>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400 text-center max-w-4xl mx-auto"
            >
              Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
              <b>Idea List</b>. As part of{' '}
              <b>Google Summer of Code {currentYear}</b>, we offer
              a unique opportunity for developers to explore new ideas, a wide
              variety of projects for developers to choose from and contribute to.
              From developing new features to fixing critical bugs, our idea list
              is your go-to destination for finding your next big project and
              kickstart your open-source journey.
            </motion.p>
            <Container.Inner>
              <div className="mt-10 sm:mt-20">
                 {children}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-20 py-12 bg-zinc-50 dark:bg-zinc-800/20 rounded-2xl text-center"
              >
                <h2 className="text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100">
                  Have an Idea?
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-mono max-w-2xl mx-auto px-4">
                  We are always open to new and innovative ideas. If you have a project in mind that aligns with our mission, we&apos;d love to hear from you.
                </p>
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="mailto:aossie.oss@gmail.com"
                    className="inline-block rounded-md border border-transparent bg-[#00843D] px-8 py-3 text-base font-medium text-white hover:bg-[#006e32] md:py-4 md:px-10 md:text-lg font-mono dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 transition-colors"
                  >
                    Submit Your Idea
                  </Link>
                </motion.div>
              </motion.div>
            </Container.Inner>
        </Container>
    )
}
