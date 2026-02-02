import Link from 'next/link'

import { Container } from '@/components/shared/Container'
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
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-12 pt-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
              
              {/* Brand and Description */}
              <div className="md:col-span-2">
                <h3 className="font-mono text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">AOSSIE</h3> 
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono max-w-md leading-relaxed">
                  Australian Open Source Software Innovation and Education (AOSSIE) is a not-for-profit umbrella organization dedicated to open-source innovation. We believe in the power of code to educate and innovate.
                </p>
              </div>

              {/* Navigation Links */}
              <div>
                 <h3 className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase mb-4">Navigation</h3>
                 <div className="flex flex-col gap-3 font-mono text-sm text-zinc-600 dark:text-zinc-400">
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/projects">Our Projects</NavLink>
                    <NavLink href="/ideas">Project Ideas</NavLink>
                    <NavLink href="/apply">How to Apply</NavLink>
                 </div>
              </div>

               {/* Social Links */}
              <div>
                <h3 className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider uppercase mb-4">Connect</h3>
                <div className="flex gap-6">
                  <Link aria-label="Contact by Mail" className='text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='mailto:aossie.oss@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} size='xl' />
                  </Link>
                  <Link aria-label="Follow on GitLab" className='text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://gitlab.com/aossie'>
                    <FontAwesomeIcon icon={faGitlab} size='xl' />
                  </Link>
                  <Link aria-label="Follow on GitHub" className='text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://github.com/AOSSIE-Org'>
                    <FontAwesomeIcon icon={faGithub} size='xl' />
                  </Link>
                  <Link aria-label="Join on Discord" className='text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://discord.gg/hjUhu33uAn'>
                    <FontAwesomeIcon icon={faDiscord} size='xl' />
                  </Link>
                  <Link aria-label="Follow on Twitter" className='text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://twitter.com/aossie_org'>
                    <FontAwesomeIcon icon={faTwitter} size='xl' />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 sm:flex-row border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                &copy; 2016-{new Date().getFullYear()} AOSSIE. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  <span>Code of Conduct</span>
                  <span>Privacy Policy</span>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
