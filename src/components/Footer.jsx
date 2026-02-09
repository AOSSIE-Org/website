import Link from 'next/link'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
  const currentYear = new Date().getFullYear();
  
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
                <NavLink href="/contact">Contact</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                &copy; 2016-{currentYear} AOSSIE. All rights reserved.
              </p>
              
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
