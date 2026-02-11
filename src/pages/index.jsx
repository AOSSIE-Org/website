/**
 * Home Page – AOSSIE Website
 * ---------------------------------------------------------
 * This file defines the main landing page (Home component)
 * of the AOSSIE website built using Next.js and React.
 *
 * Responsibilities:
 * - Render hero/landing section with logo and tagline
 * - Display organization description
 * - Provide social media links (Email, GitHub, GitLab, Discord, X)
 * - Randomly select and display featured projects
 * - Show project statistics and call-to-action buttons
 * - Render banner section at the bottom
 *
 * Technologies used:
 * - Next.js (Head, Image, Link)
 * - React Hooks (useState, useEffect)
 * - Tailwind CSS for styling
 * - FontAwesome for icons
 */

// Next.js core components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// React hooks
import { useState, useEffect } from 'react'

// Custom layout and UI components
import { Container } from '@/components/Container'
import { CardEffect } from '@/components/CardEffect'
import { Banner } from '@/components/Banner'
import Journey from '@/components/Journey'

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faGitlab,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Helper data
import projects from '@/helper/projects'

/**
 * Home Component
 * ---------------------------------------------------------
 * This is the default exported React component for the
 * website's home ("/") route.
 *
 * State:
 * - randomProjects: Stores a randomly selected subset
 *   of projects to be displayed on the home page.
 *
 * Lifecycle:
 * - On initial render, projects are shuffled and
 *   3 random projects are selected.
 *
 * @returns {JSX.Element} Rendered home page UI
 */
export default function Home() {
  /**
   * State to store randomly selected projects
   * Initialized with full projects list
   */
  const [randomProjects, setRandomProjects] = useState(projects)

  /**
   * useEffect Hook
   * -----------------------------------------------------
   * Runs once when component mounts.
   * Randomizes the projects list and selects
   * the first 3 projects for display.
   */
  useEffect(() => {
    setRandomProjects(
      projects.sort(() => 0.5 - Math.random()).slice(0, 3)
    )
  }, [])

  return (
    <>
      {/* Page metadata for SEO */}
      <Head>
        <title>AOSSIE</title>
        <meta name="description" content="AOSSIE Website" />
      </Head>

      {/* ================= HERO SECTION ================= */}
      <Container.Outer className="mt-9 relative">
        <div className="relative">

          {/* Background image for desktop screens */}
          <div className="hidden absolute md:block z-0
            bg-[url('../images/background.png')]
            dark:bg-[url('../images/background-dark.png')]
            right-0 top-[-230px] w-full h-[-webkit-fill-available]
            bg-cover bg-center mb-20">
          </div>

          {/* Main hero content */}
          <div className="flex flex-col sm:flex-row relative z-10 mb-8">

            {/* Organization logo */}
            <div className="flex-1 self-center">
              <Image
                src="./logo1.png"
                width={320}
                height={300}
                className="mx-auto scale-110 m-4"
                alt="AOSSIE Logo"
              />
            </div>

            {/* Hero text and CTA */}
            <div className="mt-10 flex-1 sm:ml-10 lg:ml-0 lg:mt-0 pt-8">
              <div className="max-w-xl ml-12">

                {/* Main heading */}
                <h1 className="font-mono text-6xl font-extrabold tracking-tighter
                  text-[#00843d] md:text-[#FED41E] dark:text-[#FED41E]
                  md:dark:text-black">
                  We Innovate <br /> We Educate
                </h1>

                {/* Organization description */}
                <p className="mt-8 font-mono text-xl leading-7 text-zinc-600 dark:text-zinc-400">
                  We are an Australian not-for-profit umbrella organization for
                  open-source projects. We believe the open-source philosophy
                  provides a resource-efficient channel to transfer knowledge and
                  achieve innovation and education.
                </p>

                {/* Social media links */}
                <div className="mt-6 ml-4 flex gap-6">
                  <Link aria-label="Contact by Mail" href="mailto:aossie.oss@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                  </Link>
                  <Link aria-label="Follow on GitLab" href="https://gitlab.com/aossie">
                    <FontAwesomeIcon icon={faGitlab} size="2xl" />
                  </Link>
                  <Link aria-label="Follow on GitHub" href="https://github.com/AOSSIE-Org">
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                  </Link>
                  <Link aria-label="Join on Discord" href="https://discord.gg/hjUhu33uAn">
                    <FontAwesomeIcon icon={faDiscord} size="2xl" />
                  </Link>
                  <Link aria-label="Follow on X" href="https://x.com/aossie_org">
                    <FontAwesomeIcon icon={faXTwitter} size="2xl" />
                  </Link>
                </div>

                {/* Learn More CTA */}
                <div className="mt-12">
                  <Link href="/about">
                    Learn More About Us
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Statistics band */}
          <div className="hidden sm:flex justify-between p-8 text-center bg-[#3C982C] text-white">
            <div>
              <h6>Active Projects</h6>
              <p>34+</p>
            </div>
            <div>
              <h6>Total Contributors</h6>
              <p>500+</p>
            </div>
            <div>
              <h6>Community Count</h6>
              <p>2000+</p>
            </div>
          </div>
        </div>
      </Container.Outer>

      {/* ================= PROJECTS SECTION ================= */}
      <Container className="mt-24">

        {/* Section heading */}
        <h1 className="text-center text-5xl font-mono font-black">
          Projects
        </h1>

        {/* Projects description */}
        <p className="text-center mt-6 font-mono text-lg">
          Explore our open-source projects and contribute to
          meaningful solutions that make a difference.
        </p>

        {/* Random project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {randomProjects.map((project) => (
            <CardEffect
              key={project.name}
              heading={project.name}
              logo={project.logo}
              content={project.description}
            />
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="mt-12 text-center">
          <Link href="/projects">
            View All Projects
          </Link>
        </div>
      </Container>

      {/* ================= BANNER SECTION ================= */}
      <Container.Outer className="mt-28">
        <Banner />
      </Container.Outer>
    </>
  )
}
