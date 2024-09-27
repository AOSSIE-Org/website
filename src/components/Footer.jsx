import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDiscord, faGithub, faGitlab, faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons'

function NavLink({ href, children, label }) {
  return (
    <a
      href={href}
      className="transition hover:text-[#00843D] dark:hover:text-yellow-400"
      aria-label={label}
    >
      {children}
    </a>
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
                <NavLink href="/about" label="About">About</NavLink>
                <NavLink href="/projects" label="Projects">Projects</NavLink>
                <NavLink href="/ideas" label="Ideas">Ideas</NavLink>
                <NavLink href="/apply" label="Apply">Apply</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                &copy; 2016-{currentYear} AOSSIE. All rights reserved.
              </p>
              <div className="flex gap-6">
                <NavLink aria-label="Contact by Mail" href='mailto:aossie.oss@gmail.com' label="Contact by Mail">
                  <FontAwesomeIcon icon={faEnvelope} size='xl' />
                </NavLink>
                <a aria-label="Follow on GitLab" className='text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://gitlab.com/aossie'>
                  <FontAwesomeIcon icon={faGitlab} size='xl' />
                </a>
                <a aria-label="Follow on GitHub" className='text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://github.com/AOSSIE-Org'>
                  <FontAwesomeIcon icon={faGithub} size='xl' />
                </a>
                <a aria-label="Join on Discord" className='text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://discord.com/invite/6mFZ2S846n'>
                  <FontAwesomeIcon icon={faDiscord} size='xl' />
                </a>
                <a aria-label="Follow on Twitter" className='text-zinc-400 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition' href='https://twitter.com/aossie_org'>
                  <FontAwesomeIcon icon={faTwitter} size='xl' />
                </a>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
