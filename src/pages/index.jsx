import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faGitlab,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { CardEffect } from '@/components/CardEffect'
import { Banner } from '@/components/Banner'
import projects from '@/helper/projects'
import Journey from '@/components/Journey'

export default function Home() {
  const [randomProjects, setRandomProjects] = useState(projects)

  useEffect(() => {
    setRandomProjects(projects.sort(() => 0.5 - Math.random()).slice(0, 3))
  }, [])
  return (
    <>
      <Head>
        <title>AOSSIE</title>
        <meta name="description" content="AOSSIE Website" />
      </Head>

      <Container.Outer className="mt-9 relative">
        <div className="relative">

          {/* Background Image */}
          <div className=" hidden  absolute md:block z-0 bg-[url('../images/background.png')] dark:bg-[url('../images/background-dark.png')] right-0 top-[-230px] w-full h-[-webkit-fill-available] bg-cover bg-center mb-20"></div>

          {/* Main Content */}
          <div className="flex flex-col sm:flex-row relative z-10 mb-8">
            <div className="flex-1 self-center">
              <Image
                src="./logo1.png"
                width={320}
                height={300}
                className="mx-auto scale-110 m-4"
                alt="AOSSIE Logo"
              />
            </div>
            <div className="mt-10 flex-1 sm:ml-10 lg:ml-0 lg:mt-0 pt-8">
              <div className="max-w-xl ml-12">
                <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#00843d] md:text-[#FED41E] dark:text-[#FED41E] md:dark:text-black sm:text-6xl md:text-5xl lg:text-6xl">
                  We Innovate <br /> We Educate
                </h1>
                <p className="mt-8 font-mono text-xl leading-7 text-zinc-600 dark:text-[rgb(161 161 170/var(--tw-text-opacity))]  md:dark:text-[#FED41E]">
                  We are an Australian not-for-profit umbrella organization for
                  open-source projects. We believe the open-source philosophy
                  provides a resource-efficient channel to transfer knowledge and
                  achieve innovation and education.
                </p>
                <div className="mt-6 ml-4 flex gap-6">
                  <Link
                    aria-label="Contact by Mail"
                    className="text-zinc-500 transition hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400"
                    href="mailto:aossie.oss@gmail.com"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                  </Link>
                  <Link
                    aria-label="Follow on GitLab"
                    className="text-zinc-500 transition hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400"
                    href="https://gitlab.com/aossie"
                  >
                    <FontAwesomeIcon icon={faGitlab} size="2xl" />
                  </Link>
                  <Link
                    aria-label="Follow on GitHub"
                    className="text-zinc-500 transition hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400"
                    href="https://github.com/AOSSIE-Org"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                  </Link>
                  <Link
                    aria-label="Join on Discord"
                    className="text-zinc-500 transition hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400"
                    href="https://discord.gg/hjUhu33uAn"
                  >
                    <FontAwesomeIcon icon={faDiscord} size="2xl" />
                  </Link>
                  <Link
                    aria-label="Follow on Twitter"
                    className="text-zinc-500 transition hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400"
                    href="https://twitter.com/aossie_org"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2xl" />
                  </Link>
                </div>
                <div className="mt-12 mx-4 md:mx-0 md:mt-8 text-left ">
                  <Link href="/about" className="group relative inline-block text-lg">
                    <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black">
                      <span className="absolute inset-0 h-full w-full rounded-lg bg-white px-5 py-3"></span>
                      <span className="absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#00843D] transition-all duration-300 ease-in-out group-hover:-rotate-180 dark:bg-yellow-400"></span>
                      <span className="relative font-mono text-xl font-black tracking-tighter">
                        Learn More About Us
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 mb-3 mr-2 h-14 w-full rounded-lg bg-[#00843D] transition-all duration-200 ease-linear group-hover:m-0 dark:bg-yellow-400"
                      data-rounded="rounded-lg"
                    ></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Green Band with Counts */}
          <div className="hidden bg-[#3C982C] relative dark:text-black sm:flex flex-col md:flex-row justify-between p-4 sm:p-8 px-4 sm:px-16 text-center border border-white text-white dark:bg-yellow-400 z-20">
            <div className="mb-4 sm:mb-0">
              <h6 className="text-xl">Active Projects</h6>
              <p className="font-semibold text-2xl">34+</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h6 className="text-xl">Total Contributors</h6>
              <p className="font-semibold text-2xl">500+</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h6 className="text-xl">Community Count</h6>
              <p className="font-semibold text-2xl">2000+</p>
            </div>
          </div>

        </div>
      </Container.Outer>


      <Container className="mt-24 md:mt-28">
        <div className="mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 ">
            <div className="flex text-center items-center justify-center">
              <div className=" relative top-2 hidden h-12 w-12 translate-x-px transform items-center justify-center rounded-full bg-[#00843D] p-2 dark:bg-yellow-400 md:flex">
                <svg
                  aria-hidden="true"
                  role="img"
                  className="scale-125 font-extrabold text-white dark:text-black"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M7.25 6a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5A.75.75 0 007.25 6zM12 6a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 0012 6zm4 .75a.75.75 0 011.5 0v9.5a.75.75 0 01-1.5 0v-9.5z"></path>
                  <path
                    fillRule="evenodd"
                    d="M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2H3.75zM3.5 3.75a.25.25 0 01.25-.25h16.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25V3.75z"
                  ></path>
                </svg>
              </div>
              <div className="col-span-8 mt-3 self-center lg:col-start-2">
                <h1 className="font-mono pl-3 text-5xl font-black capitalize tracking-tighter text-zinc-800 dark:text-white">
                  projects
                </h1>
              </div>
            </div>

            <p className=" font-mono text-lg text-zinc-600 dark:text-zinc-400 text-center ">
              Our Projects, where we showcase our tech wizardry and
              code-slinging skills!! <br></br> Be a part of our community and
              contribute to meaningful projects that are <span className="text-[#3C982C] dark:text-yellow-400">making a difference</span>.
              Explore our selection of projects and find the perfect opportunity
              to showcase your skills and <span className="text-[#3C982C] dark:text-yellow-400">make an impact</span>.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-evenly sm:gap-0">
            <Container.Inner>
              <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {randomProjects.map((project) => (
                  <span key={project.name}>
                    <CardEffect
                      heading={project.name}
                      logo={project.logo}
                      content={project.description}
                    />
                  </span>
                ))}
              </div>
            </Container.Inner>
          </div>
          <div className="mt-12 text-center">
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded-lg bg-[#00843D] px-8 py-3 text-white focus:outline-none active:bg-[#00843D] dark:bg-yellow-400 dark:text-zinc-900"
              href="/projects"
            >
              <span className="absolute right-0 flex-shrink-0 translate-x-full rounded-full border border-current bg-white p-1 text-black transition-transform group-hover:-translate-x-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <span className="font-mono font-semibold transition-all group-hover:mr-6">
                View All Projects
              </span>
            </Link>
          </div>
        </div>
      </Container>


      <Container.Outer className="mt-28">
        <Banner />
      </Container.Outer>
    </>
  )
}
