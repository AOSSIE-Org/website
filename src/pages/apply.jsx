import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { TimelineElement } from '@/components/TimelineElement'
import GSoC from '@/images/logo.svg'


export default function About() {
  return (
    <>
      <Head>
        <title>
          Application Timeline
        </title>
        <meta
          name="description"
          content="How to apply for GSOC"
        />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="mt-5">
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code. <br></br> Our application timeline is your step-by-step guide to becoming a part of our open-source community and contributing to projects that are shaping the future of technology. From submitting your proposal to final evaluations, we&apos;ll walk you through the process every step of the way. Don&apos;t miss this opportunity to be a part of something great and apply now!</p>
        </div>
        <Container.Inner className='mt-16'>
          <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
            <TimelineElement
              title="Join us on Discord"
              description="Join the AOSSIE community on Discord and connect with other developers, mentors, and organizers. Our Discord server is a great place to ask questions, share ideas, and get support throughout the Google Summer of Code application process. From proposal writing tips to coding advice, our community is here to help you succeed. Don't go through the process alone, join us on Discord now!"
              button="Join Discord"
              link='https://discord.com/invite/6mFZ2S846n'
            />
            <TimelineElement
              title="Start Contributing"
              description="Contribute to the project and make your mark on open-source development with AOSSIE. By making a Pull Request (PR) to one of our existing projects, you'll have the opportunity to showcase your skills and demonstrate your understanding of the project. This will also give you an opportunity to work with the mentors and get familiar with the project before the official GSoC coding period starts. This is a great way to get started and increase your chances of being selected for the program."
              button="Contribute"
              link='https://gitlab.com/aossie'
            />
            <TimelineElement
              title="Write a Draft Application"
              description="Select an Idea and write a draft application that expands this ideas with your own proposals and showcases how you will execute and complete your project . This is your chance to demonstrate your understanding of the project, your skills, and your passion for open-source development. Our mentors will provide feedback and help you refine your proposal, increasing your chances of being selected for the program."
              button="Choose an Idea"
              link='/ideas'
            />
            <TimelineElement
              title="Discuss with Mentors"
              description="By having a discussion with our mentors, you'll have the opportunity to ask questions, get feedback, and fine-tune your proposal. This will ensure that your proposal is well-aligned with the project goals and that you fully understand the expectations for the project. Our mentors will provide guidance and support to help you craft the best possible proposal, increasing your chances of being selected for the program."
              classCondition='hidden'
            />
            <TimelineElement
              title="Submit Final Application"
              description="By submitting your final application for GSoC, you'll be taking the last step in your journey to becoming a part of our community and contributing to projects that are shaping the future of technology. Make sure to submit your application before the deadline and include all the details correctly that are asked by Google. Wait for the selection process to take place and cross your fingers!"
              classCondition='hidden'
            />
          </ol>

          <div className="mt-20 relative block rounded-3xl dark:bg-white/70 bg-zinc-400/20 p-8 pb-16 shadow-xl">
            <Image src={GSoC} width={700} className='mx-auto' />
            {/* <h3 className="text-4xl font-bold">100+</h3> */}
            {/* <h1 className="mt-4 text-4xl font-mono font-black text-gray-500">
              2024 Program Timeline
            </h1> */}
            <div className='mt-10 flex justify-center gap-6 flex-col sm:flex-row'>
              <Link className=" order-1 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/">
                <span className="font-mono font-semibold text-center">
                  View 2024 Program Announcements
                </span>
              </Link>
              <Link className="order-2 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/programs/2024">
                <span className="font-mono font-semibold text-center">
                  View 2024 Program Timeline
                </span>
              </Link>
            </div>
          </div>

        </Container.Inner>
      </Container>
    </>
    )
}
