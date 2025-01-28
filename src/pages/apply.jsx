import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Banner } from '@/components/Banner';
import { Container } from '@/components/Container'
import GSoC from '@/images/logo.svg'

export default function About() {
  const timelineSteps = [
    {
      step: 1,
      title: "Join us on Discord",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      step: 2,
      title: "Start Contributing",
      description: "Contributors must submit proposals by following a structured approach. Here’s what you need to know to make an impact.",
    },
    {
      step: 3,
      title: "Choose an Idea",
      description: "Be part of the open source community by choosing projects that suit your expertise and contribute to the growth of the industry.",
    },
    {
      step: 4,
      title: "Discuss with Mentors",
      description: "Ensure you follow up with your mentors and track progress regularly during the mentorship period.",
    },
    {
      step: 5,
      title: "Submit Application",
      description: "Final evaluations are an important part of your journey as a GSoC contributor. Celebrate your success and keep contributing!",
    },
  ];

  // Define custom positions for contributors
  const contributorPositions = [
    { top: '5%', left: '35%' },   // Contributor 1
    { top: '5%', left: '55%' },   // Contributor 2
    { top: '25%', left: '15%' },   // Contributor 3
    { top: '25%', left: '75%' },   // Contributor 4
    { top: '50%', left: '5%' },   // Contributor 5
    { top: '50%', left: '85%' },   // Contributor 6
    { top: '70%', left: '20%' },  // Contributor 7
    { top: '65%', left: '45%' },  // Contributor 8
    { top: '70%', left: '70%' },  // Contributor 9 (added between 7th and 8th)
  ];

  const styles = {
    bannerWrapper: {
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      position: 'relative',
      overflow: 'hidden',
    },
  };

  return (
    <>
      <Head>
        <title>Application Timeline</title>
        <meta name="description" content="How to apply for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
        <Container.Inner className="mt-16">
          <div className="flex flex-col items-center justify-center">
            {/* Top Section */}
            <div className="relative w-full h-screen flex items-center justify-center">
              <div className="text-center z-10">
                <h1 className="text-6xl font-bold text-green-600 dark:text-yellow-400 mt-[-10px] mb-20">1000+</h1>
                <p className="text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 text-center mb-20">contributors join every year</p>
              </div>
              {/* Floating Images */}
              <div className="absolute w-full h-full overflow-hidden">
                {['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', '/8.png', '/9.png'].map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Contributor ${index + 1}`}
                    className="absolute w-20 h-20 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      top: contributorPositions[index].top,  // Custom top position
                      left: contributorPositions[index].left,  // Custom left position
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Timeline Section */}
            <div className="py-16 px-8">
              <h2 className="text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 text-center -mt-40 mb-20">
                Learn how to join Google Summer of Code and gain real-world experience in open source. Follow our step-by-step application timeline to contribute to projects shaping the future of technology. Apply now and be part of something great!
              </h2>

              {/* Full Width Wrapper for Timeline */}
              <div className="w-full mt-16">
                <div className="flex justify-between gap-6 w-full mx-auto">
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="timeline-step flex flex-col items-center w-[18%] mb-8">
                      {/* Step Circle with Outer and Inner Border */}
                      <div className="relative flex items-center justify-center w-24 h-24 rounded-full mb-4">
                        {/* Outer Blue Border Circle */}
                        <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full border-2 border-blue-500">
                          {/* Inner Green Border Circle */}
                          <div className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full border-8 border-green-600 dark:border-yellow-400">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-2xl font-bold text-green-600 dark:text-yellow-400">0{step.step}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step Label */}
                      <p className="text-sm font-semibold text-green-600 dark:text-yellow-400 mt-0">{step.title}</p>

                      {/* Step Description */}
                      <p className="mt-4 text-sm font-mono text-zinc-600 dark:text-zinc-400 text-center">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* GSoC Section */}
              <div className="mt-20 relative block rounded-3xl dark:bg-white/70 bg-zinc-400/20 p-8 pb-16 shadow-xl">
                <Image src={GSoC} width={700} className='mx-auto' />
                <div className='mt-10 flex justify-center gap-6 flex-col sm:flex-row'>
                  <Link className="order-1 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/">
                    <span className="font-mono font-semibold text-center">
                      View 2025 Program Announcements
                    </span>
                  </Link>
                  <Link className="order-2 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/programs/2025">
                    <span className="font-mono font-semibold text-center">
                      View 2025 Program Timeline
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container.Inner>
      </Container>
      <div style={styles.bannerWrapper}>
        <Container.Outer className="mt-28">
          <Banner />
        </Container.Outer>
      </div>
    </>
  );
}

