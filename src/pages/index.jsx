import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { CardEffect } from '@/components/CardEffect'
import { Banner } from '@/components/Banner'
import projects from '@/helper/projects'


export default function Home() {
  const [randomProjects, setRandomProjects] = useState(projects);

  useEffect(() => {
    setRandomProjects(projects.sort(() => 0.5 - Math.random()).slice(0, 3));
  }, []);
  return (
    <>
      <Head>
        <title>
          AOSSIE
        </title>
        <meta
          name="description"
          content="AOSSIE Website"
        />
      </Head>
      <Container className='mt-9'>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 self-center">
            <Image
              src = '/logo1.png'
              width = {320}
              height = {300}
              className='mx-auto scale-110'
              alt="AOSSIE Logo"
            />
          </div>
          <div className="flex-1 sm:ml-10 lg:ml-0 lg:mt-0 mt-10">
            <div className="max-w-xl">
              <h1 className="text-6xl sm:text-6xl md:text-5xl font-mono lg:text-6xl font-extrabold tracking-tighter text-[#00843D] dark:text-yellow-400">
                We Innovate <br /> We Educate
              </h1>
              <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 leading-7 font-mono ">
                We are an Australian not-for-profit umbrella organization for open-source projects. We believe the open-source philosophy provides a resource-efficient channel to transfer knowledge and achieve innovation and education.
              </p>
              <div className="mt-6 flex gap-6 ml-4">
                <Link aria-label="Contact by Mail" className=' text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='mailto:aossie.oss@gmail.com'>
                  <FontAwesomeIcon icon={faEnvelope} size='2xl' />
                </Link>
                <Link aria-label="Follow on GitLab" className=' text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://gitlab.com/aossie'>
                  <FontAwesomeIcon icon={faGitlab} size='2xl' />
                </Link>
                <Link aria-label="Follow on GitHub" className=' text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://github.com/AOSSIE-Org'>
                  <FontAwesomeIcon icon={faGithub} size='2xl' />
                </Link>
                <Link aria-label="Join on Discord" className=' text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://discord.com/invite/6mFZ2S846n'>
                  <FontAwesomeIcon icon={faDiscord} size='2xl' />
                </Link>
                <Link aria-label="Follow on Twitter" className=' text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://twitter.com/aossie_org'>
                  <FontAwesomeIcon icon={faTwitter} size='2xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-16'>
          <Link href="/about" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden transition-colors duration-300 ease-in-out border-2 border-gray-900 rounded-lg dark:group-hover:text-black group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
              <span className="absolute left-0 w-72 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#00843D] dark:bg-yellow-400 group-hover:-rotate-180 ease-in-out"></span>
              <span className="relative font-mono text-xl font-black tracking-tighter">Learn More About Us</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-14 mb-3 mr-2 transition-all duration-200 ease-linear bg-[#00843D] dark:bg-yellow-400 rounded-lg group-hover:m-0" data-rounded="rounded-lg"></span>
          </Link>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className='grid grid-cols-12'>
              <div className=' bg-[#00843D] dark:bg-yellow-400 hidden md:flex p-2 w-12 h-12 items-center justify-center -left-2 top-2 transform translate-x-px relative rounded-full'>
                <svg aria-hidden="true" role="img" className="text-white dark:text-black scale-125 font-extrabold" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" ><path d="M7.25 6a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5A.75.75 0 007.25 6zM12 6a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 0012 6zm4 .75a.75.75 0 011.5 0v9.5a.75.75 0 01-1.5 0v-9.5z"></path><path fillRule="evenodd" d="M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2H3.75zM3.5 3.75a.25.25 0 01.25-.25h16.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25V3.75z"></path></svg>
              </div>
              <div className='col-span-8 lg:col-start-2 lg:-ml-6 self-center mt-3'>
                <h1 className='text-3xl font-black tracking-tighter text-zinc-800 dark:text-white font-mono capitalize'>projects</h1>
              </div>
            </div>


            <p className=' text-lg text-zinc-600 dark:text-zinc-400 font-mono '>Our Projects, where we showcase our tech wizardry and code-slinging skills!! <br></br> Be a part of our community and contribute to meaningful projects that are making a difference. Explore our selection of projects and find the perfect opportunity to showcase your skills and make an impact.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-6 sm:gap-0 mt-10 sm:justify-evenly items-center' >
            <Container.Inner>
              <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {randomProjects.map((project) => (
                  <span key={project.name}>
                    <CardEffect heading={project.name} logo={project.logo} content={project.description} />
                  </span>
                ))}
              </div>
            </Container.Inner>
          </div>
          <div className='text-center mt-12'>
            <Link className="group relative rounded-lg inline-flex items-center overflow-hidden bg-[#00843D] dark:bg-yellow-400 px-8 py-3 text-white dark:text-zinc-900 focus:outline-none active:bg-[#00843D]" href="/projects">
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4 flex-shrink-0 rounded-full border border-current bg-white p-1 text-black">
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
      <Container.Outer className='mt-28'>
        <Banner />
      </Container.Outer>
    </>
  )
}
