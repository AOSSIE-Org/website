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
        <title>Application Timeline</title>
        <meta name="description" content="How to apply for GSOC" />

        <style>{`
  .relative {
    position: relative;
  }

  /* Line for elements on the left */
  .line-left {
    position: absolute;
    top: 42%;
    width: 40%;
    height: 2px;
    background-color: black;
    transform: translateX(-20%);
  }

  /* Line for elements on the right */
  .line-right {
    position: absolute;
    top: 42%;
    left: 50%;
    width: 55%;
    height: 2px;
    background-color: black;
  }

  /* Dark Mode - change the line color to white */
  .dark .line-left {
    background-color: white;
  }

  .dark .line-right {
    background-color: white;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .line-left, .line-right {
      display:none
    }
  }

  /* Further small screen adjustments for very small devices */
  @media (max-width: 480px) {
    .line-left, .line-right {
      display:none
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



          <div className='w-full mt-8 hidden sm:block'>
            <div className='relative flex space-x-10 justify-end mt-4 md:mt-8 md:p-8'>
              <div className='line-right'></div>
              <div className='relative'>
                <Image src="/ele1.svg" alt="Join us on Discord" width={170} height={170} /> {/* Adjust width and height */}
                <p className='font-bold p-3 m-auto dark:text-white'>Join us on Discord</p>
              </div>
              <div className='relative'>
                <Image src="/ele2.svg" alt="Start Contributing" width={170} height={170} /> {/* Adjust width and height */}
                <p className='font-bold p-3 m-auto dark:text-white'>Start Contributing</p>
              </div>
              <div className='relative'>
                <Image src="/ele3.svg" alt="Choose an idea" width={170} height={170} /> {/* Adjust width and height */}
                <p className='font-bold p-3 m-auto dark:text-white'>Choose an idea</p>
              </div>
            </div>

            <div className='relative flex space-x-10 justify-start mt-4 md:mt-8 md:p-8'>
              <div className='line-left'></div>
              <div className='relative'>
                <Image src="/ele4.svg" alt="Discuss with mentor" width={170} height={170} /> {/* Adjust width and height */}
                <p className='font-bold p-3 m-auto dark:text-white'>Discuss with mentor</p>
              </div>
              <div className='relative'>
                <Image src="/ele5.svg" alt="Submit final application" width={170} height={170} /> {/* Adjust width and height */}
                <p className='font-bold p-3 m-auto dark:text-white'>Submit final application</p>
              </div>
            </div>
          </div>


          <Container.Inner className='mt-4 mx-4 md:m-16'>
            <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
              <TimelineElement
                title="Join us on Discord"
                description="Join the AOSSIE community on Discord and connect with other developers, mentors, and organizers. Our Discord server is a great place to ask questions, share ideas, and get support throughout the Google Summer of Code application process. From proposal writing tips to coding advice, our community is here to help you succeed. Don't go through the process alone, join us on Discord now!"
                button="Join Discord"
                link="https://discord.gg/xnmAPS7zqB"
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
