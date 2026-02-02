'use client'

import { TimelineElement } from './TimelineElement'
import { motion } from 'framer-motion'

export function Timeline() {
  return (
    <div className="py-12" id="timeline">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-mono text-center mb-12 text-zinc-900 dark:text-zinc-100"
        >
            Our <span className="text-[#00843D] dark:text-yellow-400">Journey</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto px-4">
            <ol className="relative border-l border-zinc-200 dark:border-zinc-700">
                <TimelineElement
                    title="AOSSIE Founded"
                    time="2016"
                    description="Australian Open Source Software Innovation and Education (AOSSIE) was established as a not-for-profit umbrella organization."
                />
                <TimelineElement
                    title="First GSoC Participation"
                    time="2017"
                    description="We participated in Google Summer of Code for the first time, mentoring students from around the world."
                />
                 <TimelineElement
                    title="Expanding Horizons"
                    time="2020"
                    description="Launched several key projects including Agora Blockchain and Social Street Smart."
                />
                <TimelineElement
                    title="Present Day"
                    time="2026"
                    description="Continuing to innovate in permissioned blockchain, healthcare technology, and educational tools."
                />
            </ol>
        </div>
    </div>
  )
}
