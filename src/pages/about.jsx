import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import BlackLogo from '@/images/logo_black.png'

export default function About() {
  return (
    <>
      <Head>
        <title>About - AOSSIE </title>
        <meta
          name="description"
          content="About AOSSIE"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={BlackLogo}
                alt="AOSSIE Logo"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-black object-cover dark:bg-zinc-800 shadow-xl drop-shadow-xl shadow-zinc-900/30 dark:shadow-zinc-400/10"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-black font-mono tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              AOSSIE
            </h1>
            <div className="mt-6 space-y-7 text-base font-mono text-zinc-600 dark:text-zinc-400">
              <p>
              We are an Australian not-for-profit umbrella organization for open-source projects. We believe the open-source philosophy provides a resource-efficient channel to transfer knowledge and achieve innovation and education.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sequi rerum possimus, eligendi recusandae eaque commodi, culpa deleniti pariatur ut iure sed qui? Ea alias magni esse rem? Adipisci?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sequi rerum possimus, eligendi recusandae eaque commodi, culpa deleniti pariatur ut iure sed qui? Ea alias magni esse rem? Adipisci?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem! Eaque reiciendis repellendus rerum exercitationem, quasi facilis deleniti et totam impedit aliquid hic quas, ipsum corrupti suscipit voluptatibus officia saepe.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
          </div>
        </div>
      </Container>
    </>
  )
}
