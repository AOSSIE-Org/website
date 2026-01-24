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
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-700 bg-secondary dark:bg-secondary-dark">
      <Container.Outer>
        <div className="pt-10 pb-10">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
              <div className="flex gap-7 text-base font-semibold font-mono text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/ideas">Ideas</NavLink>
                <NavLink href="/apply">Apply</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono mt-4 sm:mt-0">
                &copy; 2016-2025 AOSSIE. All rights reserved.
              </p>
              <div className="flex gap-7">
                {/** SocialLink component for DRY markup */}
                {[
                  {
                    href: 'mailto:aossie.oss@gmail.com',
                    label: 'Contact by Mail',
                    icon: faEnvelope,
                  },
                  {
                    href: 'https://gitlab.com/aossie',
                    label: 'Follow on GitLab',
                    icon: faGitlab,
                  },
                  {
                    href: 'https://github.com/AOSSIE-Org',
                    label: 'Follow on GitHub',
                    icon: faGithub,
                  },
                  {
                    href: 'https://discord.gg/hjUhu33uAn',
                    label: 'Join on Discord',
                    icon: faDiscord,
                  },
                  {
                    href: 'https://twitter.com/aossie_org',
                    label: 'Follow on Twitter',
                    icon: faTwitter,
                  },
                ].map(({ href, label, icon }) => (
                  <SocialLink key={href} href={href} ariaLabel={label} icon={icon} />
                ))}
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

// DRY SocialLink component
function SocialLink({ href, ariaLabel, icon }) {
  return (
    <Link
      aria-label={ariaLabel}
      className="text-zinc-400 hover:text-primary focus:text-primary dark:text-zinc-400 dark:hover:text-yellow-400 dark:focus:text-yellow-400 transition-colors duration-300 outline-none"
      href={href}
    >
      <FontAwesomeIcon icon={icon} size="xl" />
    </Link>
  );
}
