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
                    title="AOSSIE's First Projects"
                    time="2011"
                    description="3 of AOSSIE's first projects (Skeptik/Scavenger, Carbon Footprint for Google Maps and Mind the Word) were started by Dr. Bruno Woltzenlogel Paleo and started participating in GSoC under the CSE@TU-Wien org."
                />
                <TimelineElement
                    title="AOSSIE's Creation"
                    time="2016"
                    description="Dr. Bruno Woltzenlogel Paleo created the Australian Open Source Software Innovation and Education (AOSSIE) while he was a researcher at the Australian National University."
                />
                <TimelineElement
                    title="First GSoC Participation"
                    time="2016"
                    description="We participated in Google Summer of Code for the first time, mentoring students from around the world. Our Agora voting project became our fourth project."
                />
                <TimelineElement
                    title="AOSSIE's Independence"
                    time="2017"
                    description="AOSSIE was established as an independent not-for-profit charity organization."
                />
                <TimelineElement
                    title="Pace Acceleration"
                    time="2020"
                    description="In 2020, AOSSIE accelerated its innovation pace and started several new projects, especially using emerging technologies such as blockchains and AI."
                />
                <TimelineElement
                    title="Stability Nexus Spin-Off"
                    time="2022"
                    description="In 2022, AOSSIE's blockchain projects were grouped under the Stability Nexus sub-organization."
                />
                <TimelineElement
                    title="Becoming an AI-Powered AI-Ready Organization"
                    time="2025--2026"
                    description="AOSSIE is radically transforming its processes to fully benefit from AI productivity boosts while protecting itself from AI slop."
                />
            </ol>
        </div>
    </div>
  )
}
