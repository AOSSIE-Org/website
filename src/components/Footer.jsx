import Link from 'next/link'

import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub, faGitlab, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

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
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-16">
      <Container.Outer>
        <div className="pt-10 pb-10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              
              {/* Navigation Links */}
              <div className="flex gap-5 text-md font-semibold font-mono text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/ideas">Ideas</NavLink>
                <NavLink href="/apply">Apply</NavLink>
              </div>

              {/* Copyright */}
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                &copy; 2016-{currentYear} AOSSIE. All rights reserved.
              </p>

              {/* Social Icons with Hover Tooltips */}
              <div className="flex gap-6">

                <Link
                  aria-label="Contact by email"
                  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
                  href="mailto:aossie.oss@gmail.com"
                >
                  <span title="Send email to AOSSIE">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  </span>
                </Link>

                <Link
                  aria-label="AOSSIE on GitLab"
                  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
                  href="https://gitlab.com/aossie"
                >
                  <span title="Visit AOSSIE on GitLab">
                    <FontAwesomeIcon icon={faGitlab} size="xl" />
                  </span>
                </Link>

                <Link
                  aria-label="AOSSIE on GitHub"
                  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
                  href="https://github.com/AOSSIE-Org"
                >
                  <span title="Visit AOSSIE on GitHub">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                  </span>
                </Link>

                <Link
                  aria-label="Join the AOSSIE Discord"
                  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
                  href="https://discord.gg/hjUhu33uAn"
                >
                  <span title="Join AOSSIE on Discord">
                    <FontAwesomeIcon icon={faDiscord} size="xl" />
                  </span>
                </Link>

                <Link
                  aria-label="AOSSIE on X"
                  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
                  href="https://twitter.com/aossie_org"
                >
                  <span title="Follow AOSSIE on X">
                    <FontAwesomeIcon icon={faXTwitter} size="xl" />
                  </span>
                </Link>

                <Link
                  aria-label="AOSSIE YouTube channel"
                  className="text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition"
                  href="https://www.youtube.com/@AOSSIE-Org"
                >
                  <span title="Visit AOSSIE on YouTube">
                    <FontAwesomeIcon icon={faYoutube} size="xl" />
                  </span>
                </Link>

              </div>

            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}