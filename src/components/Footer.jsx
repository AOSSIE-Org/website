import Link from 'next/link'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-16 relative bg-[#fff7cc] dark:bg-zinc-900">
      <div className="absolute -top-8 left-0 w-full sm:px-8" aria-hidden="true">
        <div className="mx-auto max-w-7xl lg:px-8">
          <svg
            viewBox="0 0 1440 74"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-8 text-[#FED41E] dark:text-yellow-400"
            fill="currentColor"
          >
            <path d="M0 48C120 72 240 24 360 48C480 72 600 24 720 48C840 72 960 24 1080 48C1200 72 1320 24 1440 48V74H0V48Z"></path>
          </svg>
        </div>
      </div>
      <Container.Outer>
        <div className="mx-auto max-w-7xl lg:px-8 pt-10 pb-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-5 text-md font-semibold font-mono text-zinc-800 dark:text-zinc-200">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/ideas">Ideas</NavLink>
              <NavLink href="/apply">Apply</NavLink>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
              &copy; 2016-2025 AOSSIE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link aria-label="Contact by Mail" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='mailto:aossie.oss@gmail.com'>
                <FontAwesomeIcon icon={faEnvelope} size='xl' />
              </Link>
              <Link aria-label="Follow on GitLab" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://gitlab.com/aossie'>
                <FontAwesomeIcon icon={faGitlab} size='xl' />
              </Link>
              <Link aria-label="Follow on GitHub" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://github.com/AOSSIE-Org'>
                <FontAwesomeIcon icon={faGithub} size='xl' />
              </Link>
              <Link aria-label="Follow on LinkedIn" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://www.linkedin.com/company/aossie/'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
              </Link>
              <Link aria-label="Join on Discord" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://discord.gg/hjUhu33uAn'>
                <FontAwesomeIcon icon={faDiscord} size='xl' />
              </Link>
              <Link aria-label="Follow on X" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://twitter.com/aossie_org'>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22" className="fill-current">
                  <path d="M18.244 3H21L13.323 12.725 21.429 21H15.928L10.833 15.43 5.112 21H3L11.15 11.837 3.286 3H8.934L13.66 8.12 18.244 3Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container.Outer>
    </footer>
  )
}
