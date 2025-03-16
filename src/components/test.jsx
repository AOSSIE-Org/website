import Link from 'next/link'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faGitlab,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

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
        <Container.Inner>
          <div className="flex flex-wrap items-start lg:gap-20 text-center md:gap-12 md:text-left">
            {/* Logo Section */} 
            <div className="flex justify-center md:justify-start">
              <img
                alt="AOSSIE Logo"
                loading="lazy"
                width="120"
                height="100"
                className="h-auto w-32"
                src="/logo1.png"
              />
            </div>

            <div className="flex flex-wrap justify-between">
              {/* Navigation Section */}
              <div className="w-full text-left sm:w-auto">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  Quick Links
                </h3>
                <div className="text-md mt-3 flex flex-col gap-2 font-mono text-zinc-800 dark:text-zinc-200">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/ideas">Ideas</NavLink>
                  <NavLink href="/apply">Apply</NavLink>
                  <NavLink href="/privacy-policy">Privacy Policy</NavLink>
                </div>
              </div>
            </div>


            <div className="flex md:flex-row md:gap-7 flex-col gap-4 justify-between">
              {/* Contact Section */}
              <div className="w-full text-left sm:w-auto">
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                  Contact Us
                </h3>
                <div className="text-md mt-3 font-mono text-zinc-800 dark:text-zinc-200">
                  <p>
                    <a
                      href="mailto:aossie.oss@gmail.com"
                      className="hover:text-[#00843D] dark:hover:text-yellow-400"
                    >
                      aossie.oss@gmail.com
                    </a>
                  </p>
                </div>
              </div>

               {/* Social Media Section */}
            <div className="text-left sm:w-auto">
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-6">
                <Link href="mailto:aossie.oss@gmail.com" aria-label="Mail">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    className="text-zinc-400 hover:text-[#00843D] dark:hover:text-yellow-400"
                  />
                </Link>
                <Link href="https://gitlab.com/aossie" aria-label="GitLab">
                  <FontAwesomeIcon
                    icon={faGitlab}
                    size="xl"
                    className="text-zinc-400 hover:text-[#00843D] dark:hover:text-yellow-400"
                  />
                </Link>
                <Link href="https://github.com/AOSSIE-Org" aria-label="GitHub">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    className="text-zinc-400 hover:text-[#00843D] dark:hover:text-yellow-400"
                  />
                </Link>
                <Link href="https://discord.gg/hjUhu33uAn" aria-label="Discord">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    size="xl"
                    className="text-zinc-400 hover:text-[#00843D] dark:hover:text-yellow-400"
                  />
                </Link>
                <Link
                  href="https://twitter.com/aossie_org"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    className="text-zinc-400 hover:text-[#00843D] dark:hover:text-yellow-400"
                  />
                </Link>
              </div>
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