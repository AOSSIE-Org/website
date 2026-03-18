'use client'

import { useRef } from 'react'
import { TimelineElement } from './TimelineElement'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  return (
    <div className="py-12" id="timeline">
      <motion.h2
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-bold font-mono text-center mb-12 text-zinc-900 dark:text-zinc-100"
      >
        Our <span className="text-[#00843D] dark:text-yellow-400">Journey</span>
      </motion.h2>

      <div className="max-w-3xl mx-auto px-4">
        <ol ref={containerRef} className="relative">

          {/* background track line */}
          <div className="absolute left-[-1px] top-0 h-full w-[3px] rounded-full bg-zinc-200 dark:bg-zinc-700" />

          {/* highlighted animated line */}
          <motion.div
            className="absolute left-[-1px] top-0 w-[3px] rounded-full origin-top bg-yellow-400"
            style={{ height: lineHeight, opacity: lineOpacity }}
          />

          {/* travelling dot */}
          <motion.div
            className="absolute -left-[7px] w-[15px] h-[15px] rounded-full z-10 bg-yellow-400"
            style={{ top: glowY }}
          >
            {/* pulsing ring 1 */}
            <motion.span
              animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full bg-yellow-400"
            />
            {/* pulsing ring 2 — offset */}
            <motion.span
              animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 rounded-full bg-yellow-300"
            />
          </motion.div>

          <TimelineElement index={0}
            title="AOSSIE's First Projects" time="2011"
            description="3 of AOSSIE's first projects (Skeptik/Scavenger, Carbon Footprint for Google Maps and Mind the Word) were started by Dr. Bruno Woltzenlogel Paleo and started participating in GSoC under the CSE@TU-Wien org."
          />
          <TimelineElement index={1}
            title="AOSSIE's Creation" time="2016"
            description="Dr. Bruno Woltzenlogel Paleo created the Australian Open Source Software Innovation and Education (AOSSIE) while he was a researcher at the Australian National University."
          />
          <TimelineElement index={2}
            title="First GSoC Participation" time="2016"
            description="We participated in Google Summer of Code for the first time, mentoring students from around the world. Our Agora voting project became our fourth project."
          />
          <TimelineElement index={3}
            title="AOSSIE's Independence" time="2017"
            description="AOSSIE was established as an independent not-for-profit charity organization."
          />
          <TimelineElement index={4}
            title="Pace Acceleration" time="2020"
            description="In 2020, AOSSIE accelerated its innovation pace and started several new projects, especially using emerging technologies such as blockchains and AI."
          />
          <TimelineElement index={5}
            title="Stability Nexus Spin-Off" time="2022"
            description="In 2022, AOSSIE's blockchain projects were grouped under the Stability Nexus sub-organization."
          />
          <TimelineElement index={6}
            title="Becoming an AI-Powered AI-Ready Organization" time="2025--2026"
            description="AOSSIE is radically transforming its processes to fully benefit from AI productivity boosts while protecting itself from AI slop."
          />
        </ol>
      </div>
    </div>
  )
}
