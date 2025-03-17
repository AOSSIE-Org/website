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
  return (
    <footer className="mt-16 py-10">
      <Container.Outer>
        <Container.Inner>
          <div className="flex flex-wrap font-mono justify-between text-center md:text-left items-start gap-8 md:gap-12">
            
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <img
                alt="AOSSIE Logo"
                loading="lazy"
                width="120"
                height="100"
                className="w-32 h-auto"
                src="/logo1.png"
              />
            </div>

            <div className="flex flex-wrap  justify-between  md:gap-20 gap-8 w-full md:w-auto"> 
              {/* Navigation Section */}
              <div className="w-full sm:w-auto text-left max-sm:text-center x-12">
                <h3 className="text-lg font-semibold font-mono text-zinc-800 dark:text-zinc-200">
                  Quick Links
                </h3>
                <div className="text-md mt-3 flex flex-col gap-2 text-left max-sm:text-center font-mono text-zinc-600 dark:text-zinc-400">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/ideas">Ideas</NavLink>
                  <NavLink href="/apply">Apply</NavLink>
                  {/* Place the policy page here */}
                  <NavLink href="/privacy-policy">Privacy Policy</NavLink> 
                </div>
              </div>

              {/* Contact Section */}
              <div className="w-full sm:w-auto text-center">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  Contact Us
                </h3>
                <div className="text-md mt-3 font-mono text-zinc-800 dark:text-zinc-200">
                  <p>
                    <a
                      href="mailto:aossie.oss@gmail.com"
                      className="hover:text-[#00843D] dark:hover:text-yellow-400 text-zinc-600 dark:text-zinc-400"
                    >
                      aossie.oss@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="w-full sm:w-auto text-center">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-6 justify-center">
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
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center font-mono text-sm text-zinc-400 dark:text-zinc-500">
            &copy; 2016-2025 AOSSIE. All rights reserved.
          </div>
        </Container.Inner>
      </Container.Outer>
    </footer>
  )
}
