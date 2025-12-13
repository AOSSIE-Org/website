import Link from 'next/link'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

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
                <Link aria-label="Follow on Twitter" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://twitter.com/aossie_org'>
                  <FontAwesomeIcon icon={faTwitter} size='xl' />
                </Link>
                <Link aria-label="Follow on Facebook" className=' text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href="https://facebook.com/aossie">
                  <FontAwesomeIcon icon={faFacebookF} size="xl" />
                </Link>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
