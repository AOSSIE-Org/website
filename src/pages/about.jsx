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
                We are a not-for-profit umbrella organization for open-source projects registered in Australia as a charity. We believe the open-source philosophy provides a resource-efficient channel to transfer knowledge and achieve innovation and education.
              </p>
              <p>
                Since 2016, we have been mentoring from 10 to 20 students per year within the Google Summer of Code programme. Our selection process is competitive and typically only 10% to 20% of students who apply to be mentored by us are accepted. Most of our alumni become long-term contributors to our projects and to the open-source ecosystem as a whole, and go on to have sucessful careers in the academic world or in the open-source industry.
              </p>
              <p>
                Our organization is open and welcomes contributions from everyone. Browse our project repos and start submitting pull requests. 
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
