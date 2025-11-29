import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'



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
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-10">
          <Container.Inner>
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
                <Link aria-label="Join on Discord" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://discord.gg/hjUhu33uAn'>
                  <FontAwesomeIcon icon={faDiscord} size='xl' />
                </Link>
                <Link
  aria-label="Follow on X (Twitter)"
  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
  href="https://twitter.com/aossie_org"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"  
    className="h-6 w-6"      
    aria-hidden="true"
  >
    {<svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
</svg>}
    {<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>}
  </svg>
</Link>



              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
