'use client'

import { useRef } from 'react'
import { Container } from '@/components/shared/Container'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb, faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export function ApplyHeader({ children }) {
    const { scrollY } = useScroll();
    const smoothScroll = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const translateX = useTransform(smoothScroll, [0, 800], [0, -30]);

    // ref goes on the <ol> directly — same as the PR reference
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 60%"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const glowY      = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const steps = [
        { icon: faDiscord, label: "Join Discord" },
        { icon: faGithub, label: "Start Contributing" },
        { icon: faLightbulb, label: "Choose Idea" },
        { icon: faComments, label: "Discuss" },
        { icon: faPaperPlane, label: "Submit App" },
    ];

    return (
        <Container.Outer className="mt-20 mb-28">
            <div className='overflow-x-hidden'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-5 mb-12 mx-4 md:mx-16 text-center flex flex-col items-center justify-center"
                >
                    <h5 className='font-bold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 font-mono leading-tight mb-6 text-center'>
                        Your Journey to <span className="text-[#00843D] dark:text-yellow-400">Open Source</span>
                    </h5>
                    <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-8 max-w-4xl text-center'>
                        Our application timeline is your step-by-step guide to becoming a part of our open-source community and contributing to projects that are shaping the future of technology. From submitting your proposal to final evaluations, we&apos;ll walk you through the process every step of the way. Don&apos;t miss this opportunity to be a part of something great and apply now!
                    </p>
                </motion.div>

                {/* Horizontal Timeline Steps */}
                <motion.div
                    style={{ x: translateX }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
                    }}
                    className="hidden md:flex justify-between items-start mt-20 mb-20 relative mx-4 md:mx-16"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-8 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-700 -z-10 mt-1 origin-left"
                    />
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col items-center bg-white dark:bg-zinc-900 px-2 lg:px-4 z-10"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="w-20 h-20 rounded-full bg-[#00843D] dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black mb-6 shadow-lg"
                            >
                                <FontAwesomeIcon icon={step.icon} className="w-10 h-10" />
                            </motion.div>
                            <p className="font-bold font-mono text-center text-lg dark:text-zinc-200">{step.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <Container.Inner className='mt-4 mx-4 md:m-16'>
                    <ol ref={containerRef} className="relative">

                        {/* background track line */}
                        <div className="absolute left-[-1px] top-0 h-full w-[3px] rounded-full bg-zinc-200 dark:bg-zinc-700" />

                        {/* animated yellow fill */}
                        <motion.div
                            className="absolute left-[-1px] top-0 w-[3px] rounded-full origin-top bg-yellow-400"
                            style={{ height: lineHeight }}
                        />

                        {/* travelling dot with pulsing rings */}
                        <motion.div
                            className="absolute -left-[7px] w-[15px] h-[15px] rounded-full z-10 bg-yellow-400"
                            style={{ top: glowY }}
                        >
                            <motion.span
                                animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 rounded-full bg-yellow-400"
                            />
                            <motion.span
                                animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                                className="absolute inset-0 rounded-full bg-yellow-300"
                            />
                        </motion.div>

                        {children}
                    </ol>
                </Container.Inner>
            </div>
        </Container.Outer>
    )
}
