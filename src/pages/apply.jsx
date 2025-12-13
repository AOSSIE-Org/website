import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { TimelineElement } from '@/components/TimelineElement'
import GSoC from '@/images/logo.svg'

export default function Apply() {
  return (
    <>
      <Head>
        <title>Application Timeline</title>
        <meta name="description" content="How to apply for GSOC" />

        <style>{`
  /* Timeline step styles */
  .timeline-step {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .timeline-horizontal {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 1rem;
    padding: 2rem 2rem;
    position: relative;
    min-height: 180px; /* minimum height to accommodate images (120px) + text + spacing */
    z-index: 1;
  }

  /* Timeline dot - connection indicator */
  .timeline-dot {
    width: 12px; /* sized to be prominent but not overwhelming */
    height: 12px;
    background-color: black;
    border: 4px solid white;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
  }

  .dark .timeline-dot {
    background-color: white;
    border-color: rgb(24, 24, 27);
  }

  /* Mobile: hide horizontal elements, use vertical stacked UI */
  @media (max-width: 768px) {
    .timeline-horizontal-line,
    .timeline-horizontal {
      display: none;
    }
  }
`}</style>


      </Head>

      <Container.Outer className="mt-20 mb-28 ">
        <div className='overflow-x-hidden'>
          <div className="mt-5 mx-4 md:mx-16">
            <h5 className='font-bold text-2xl text-zinc-600  dark:text-zinc-400 text-lg font-mono leading-7'> Learn how to apply for an <span className="text-[#3C982C] dark:text-yellow-400">opportunity</span> to work on open-source projects and gain<span className="text-[#3C982C] dark:text-yellow-400"> real-world experience</span> through Google Summer of Code.</h5>
            <p className='text-zinc-600 mt-4  dark:text-zinc-400 text-lg font-mono leading-7'>
              Our application timeline is your step-by-step guide to becoming a part of our open-source community and contributing to projects that are shaping the future of technology. From submitting your proposal to final evaluations, we&apos;ll walk you through the process every step of the way. Don&apos;t miss this opportunity to be a part of something great and apply now!
            </p>
          </div>



          <div className='w-full mt-8 block'>
            {/* Desktop timeline: horizontal connected line with evenly spaced steps */}
            <div className='hidden md:block relative px-4 md:px-16 py-8'>
              <div className='absolute inset-x-[5%] top-1/2 -translate-y-1/2 h-[3px] bg-black dark:bg-white' aria-hidden="true"></div>
              <div className='timeline-horizontal'>
                <div className='timeline-step'>
                  <div className='timeline-dot' aria-hidden="true"></div>
                  <Image src="/ele1.svg" alt="Join us on Discord" width={120} height={120} quality={100} />
                  <p className='font-bold p-2 text-center text-xs md:text-sm dark:text-white mt-2'>Join us on Discord</p>
                </div>
                <div className='timeline-step'>
                  <div className='timeline-dot' aria-hidden="true"></div>
                  <Image src="/ele2.svg" alt="Start Contributing" width={120} height={120} quality={100} />
                  <p className='font-bold p-2 text-center text-xs md:text-sm dark:text-white mt-2'>Start Contributing</p>
                </div>
                <div className='timeline-step'>
                  <div className='timeline-dot' aria-hidden="true"></div>
                  <Image src="/ele3.svg" alt="Choose an idea" width={120} height={120} quality={100} />
                  <p className='font-bold p-2 text-center text-xs md:text-sm dark:text-white mt-2'>Choose an idea</p>
                </div>
                <div className='timeline-step'>
                  <div className='timeline-dot' aria-hidden="true"></div>
                  <Image src="/ele4.svg" alt="Discuss with mentor" width={120} height={120} quality={100} />
                  <p className='font-bold p-2 text-center text-xs md:text-sm dark:text-white mt-2'>Discuss with mentor</p>
                </div>
                <div className='timeline-step'>
                  <div className='timeline-dot' aria-hidden="true"></div>
                  <Image src="/ele5.svg" alt="Submit final application" width={120} height={120} quality={100} />
                  <p className='font-bold p-2 text-center text-xs md:text-sm dark:text-white mt-2'>Submit final application</p>
                </div>
              </div>
            </div>

            {/* Mobile timeline - vertical stacked layout */}
            <div className='md:hidden mt-4 px-4 space-y-6'>
              <div className='flex flex-col items-center'>
                <Image src="/ele1.svg" alt="Join us on Discord" width={100} height={100} quality={100} />
                <p className='font-bold p-2 text-center text-sm dark:text-white'>Join us on Discord</p>
              </div>
              <div className='h-8 w-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto'></div>
              <div className='flex flex-col items-center'>
                <Image src="/ele2.svg" alt="Start Contributing" width={100} height={100} quality={100} />
                <p className='font-bold p-2 text-center text-sm dark:text-white'>Start Contributing</p>
              </div>
              <div className='h-8 w-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto'></div>
              <div className='flex flex-col items-center'>
                <Image src="/ele3.svg" alt="Choose an idea" width={100} height={100} quality={100} />
                <p className='font-bold p-2 text-center text-sm dark:text-white'>Choose an idea</p>
              </div>
              <div className='h-8 w-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto'></div>
              <div className='flex flex-col items-center'>
                <Image src="/ele4.svg" alt="Discuss with mentor" width={100} height={100} quality={100} />
                <p className='font-bold p-2 text-center text-sm dark:text-white'>Discuss with mentor</p>
              </div>
              <div className='h-8 w-1 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto'></div>
              <div className='flex flex-col items-center'>
                <Image src="/ele5.svg" alt="Submit final application" width={100} height={100} quality={100} />
                <p className='font-bold p-2 text-center text-sm dark:text-white'>Submit final application</p>
              </div>
            </div>
          </div>


          <Container.Inner className='mt-4 mx-4 md:m-16'>
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
              <TimelineElement
                title="Join us on Discord"
                description="Join the AOSSIE community on Discord and connect with other developers, mentors, and organizers. Our Discord server is a great place to ask questions, share ideas, and get support throughout the Google Summer of Code application process. From proposal writing tips to coding advice, our community is here to help you succeed. Don't go through the process alone, join us on Discord now!"
                button="Join Discord"
                link="https://discord.gg/hjUhu33uAn"
              />
              <TimelineElement
                title="Start Contributing"
                description="Contribute to the project and make your mark on open-source development with AOSSIE. By making a Pull Request (PR) to one of our existing projects, you'll have the opportunity to showcase your skills and demonstrate your understanding of the project. This will also give you an opportunity to work with the mentors and get familiar with the project before the official GSoC coding period starts. This is a great way to get started and increase your chances of being selected for the program."
                button="Contribute"
                link="https://gitlab.com/aossie"
              />
              <TimelineElement
                title="Write a Draft Application"
                description="Select an Idea and write a draft application that expands this idea with your own proposals and showcases how you will execute and complete your project. This is your chance to demonstrate your understanding of the project, your skills, and your passion for open-source development. Our mentors will provide feedback and help you refine your proposal, increasing your chances of being selected for the program."
                button="Choose an Idea"
                link="/ideas"
              />
              <TimelineElement
                title="Discuss with Mentors"
                description="By having a discussion with our mentors, you'll have the opportunity to ask questions, get feedback, and fine-tune your proposal. This will ensure that your proposal is well-aligned with the project goals and that you fully understand the expectations for the project. Our mentors will provide guidance and support to help you craft the best possible proposal, increasing your chances of being selected for the program."
                classCondition="hidden"
              />
              <TimelineElement
                title="Submit Final Application"
                description="By submitting your final application for GSoC, you'll be taking the last step in your journey to becoming a part of our community and contributing to projects that are shaping the future of technology. Make sure to submit your application before the deadline and include all the details correctly that are asked by Google. Wait for the selection process to take place and cross your fingers!"
                classCondition="hidden"
              />
            </ol>

            <div className="mt-20 relative block rounded-3xl dark:bg-white/70 bg-zinc-400/20 p-8 pb-16 shadow-xl">
              <Image src={GSoC} alt='gsoc' width={500} height={350} className="mx-auto" />
              <div className="mt-10 flex justify-center gap-6 flex-col sm:flex-row">
                <Link className="order-1 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/">
                  <span className="font-mono font-semibold text-center">
                    View GSoC Program Announcements
                  </span>
                </Link>
              </div>
            </div>

          </Container.Inner>
        </div>
      </Container.Outer>
    </>
  );
}
