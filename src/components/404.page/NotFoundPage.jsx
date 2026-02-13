import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faGitlab,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col justify-between">
      
      {/* 404 Content */}
      <Container className="mt-4 mb-2 sm:mt-8 sm:mb-4">
        <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200/70 bg-white/90 p-6 text-center shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:ring-white/10 sm:p-8">
          
          <SectionHeading className="mx-auto">
            404 Error
          </SectionHeading>

          <h1 className="mt-4 font-mono text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Page not found
          </h1>

          <p className="mt-3 font-mono text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            The route you visited does not exist. Click the AOSSIE logo below to
            return to the home page.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/"
              aria-label="Back to AOSSIE home"
              className="rounded-2xl border border-zinc-300/80 bg-white/70 p-4 shadow-sm transition hover:border-[#00843D] dark:border-zinc-700 dark:bg-zinc-800/70 dark:hover:border-yellow-400"
            >
              <Image
                src="/logo1.png"
                width={90}
                height={90}
                alt="AOSSIE Logo"
                className="mx-auto"
                priority
              />
            </Link>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Container.Outer>
        <div className="w-full px-4 pb-4 pt-4 sm:px-6 lg:px-8">
          
          {/* Footer Row */}
          <div className="flex w-full flex-col gap-y-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            
            {/* Left Links */}
            <div className="flex justify-center gap-4 text-xs font-semibold font-mono text-zinc-800 dark:text-zinc-200 sm:text-sm md:justify-start">
              <Link
                href="/about"
                className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
              >
                Projects
              </Link>

              <Link
                href="/ideas"
                className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
              >
                Ideas
              </Link>

              <Link
                href="/apply"
                className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
              >
                Apply
              </Link>
            </div>

            {/* Copyright — centered */}
            <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 sm:text-xs">
              &copy; 2016-{new Date().getFullYear()} AOSSIE. All rights reserved.
            </p>

            {/* Icons */}
            <div className="flex items-center justify-center gap-5 md:justify-end">
              <Link
                aria-label="Contact by Mail"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="mailto:aossie.oss@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} size="sm" />
              </Link>
              <Link
                aria-label="Follow on GitLab"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="https://gitlab.com/aossie"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGitlab} size="sm" />
              </Link>
              <Link
                aria-label="Follow on GitHub"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="https://github.com/AOSSIE-Org"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="sm" />
              </Link>
              <Link
                aria-label="Join on Discord"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="https://discord.gg/hjUhu33uAn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} size="sm" />
              </Link>
              <Link
                aria-label="Follow on Twitter"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="https://twitter.com/aossie_org"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="sm" />
              </Link>
              <Link
                aria-label="Follow on LinkedIn"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="https://www.linkedin.com/company/aossie"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="sm" />
              </Link>
              <Link
                aria-label="Subscribe on YouTube"
                className="text-zinc-300 transition hover:text-[#00843D] dark:text-zinc-300 dark:hover:text-yellow-400"
                href="https://www.youtube.com/@aossie"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} size="sm" />
              </Link>
            </div>

          </div>
        </div>
      </Container.Outer>
    </div>
  )
}
