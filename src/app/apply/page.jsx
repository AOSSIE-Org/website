import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/shared/Container'
import { TimelineElement } from '@/components/about/TimelineElement'
import GSoC from '@/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb, faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: 'Application Timeline',
  description: 'How to apply for GSOC',
}

export default function Apply() {
  return (
    <>
      <Container.Outer className="mt-20 mb-28 ">
        <div className='overflow-x-hidden'>
          <div className="mt-5 mx-4 md:mx-16 text-center md:text-left">
            <h5 className='font-bold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 font-mono leading-tight mb-6'> 
              Your Journey to <span className="text-[#00843D] dark:text-yellow-400">Open Source</span>
            </h5>
            <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-8 max-w-4xl'>
              Our application timeline is your step-by-step guide to becoming a part of our open-source community and contributing to projects that are shaping the future of technology. From submitting your proposal to final evaluations, we&apos;ll walk you through the process every step of the way. Don&apos;t miss this opportunity to be a part of something great and apply now!
            </p>
          </div>

          {/* New Horizontal Timeline Steps */}
          <div className="hidden md:flex justify-between items-start mt-20 mb-20 relative mx-4 md:mx-16">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-700 -z-10 mt-1"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-[#fafafa] dark:bg-zinc-900 px-2 lg:px-4 z-10 box-decoration-clone">
              <div className="w-20 h-20 rounded-full bg-[#00843D] dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black mb-6 shadow-lg transform transition hover:scale-110 duration-300">
                <FontAwesomeIcon icon={faDiscord} className="w-10 h-10" />
              </div>
              <p className="font-bold font-mono text-center text-lg dark:text-zinc-200">Join Discord</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-[#fafafa] dark:bg-zinc-900 px-2 lg:px-4 z-10 box-decoration-clone">
              <div className="w-20 h-20 rounded-full bg-[#00843D] dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black mb-6 shadow-lg transform transition hover:scale-110 duration-300">
                 <FontAwesomeIcon icon={faGitlab} className="w-10 h-10" />
              </div>
              <p className="font-bold font-mono text-center text-lg dark:text-zinc-200">Start Contributing</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-[#fafafa] dark:bg-zinc-900 px-2 lg:px-4 z-10 box-decoration-clone">
              <div className="w-20 h-20 rounded-full bg-[#00843D] dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black mb-6 shadow-lg transform transition hover:scale-110 duration-300">
                 <FontAwesomeIcon icon={faLightbulb} className="w-10 h-10" />
              </div>
              <p className="font-bold font-mono text-center text-lg dark:text-zinc-200">Choose Idea</p>
            </div>

             {/* Step 4 */}
            <div className="flex flex-col items-center bg-[#fafafa] dark:bg-zinc-900 px-2 lg:px-4 z-10 box-decoration-clone">
              <div className="w-20 h-20 rounded-full bg-[#00843D] dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black mb-6 shadow-lg transform transition hover:scale-110 duration-300">
                 <FontAwesomeIcon icon={faComments} className="w-10 h-10" />
              </div>
              <p className="font-bold font-mono text-center text-lg dark:text-zinc-200">Discuss</p>
            </div>

             {/* Step 5 */}
            <div className="flex flex-col items-center bg-[#fafafa] dark:bg-zinc-900 px-2 lg:px-4 z-10 box-decoration-clone">
              <div className="w-20 h-20 rounded-full bg-[#00843D] dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black mb-6 shadow-lg transform transition hover:scale-110 duration-300">
                 <FontAwesomeIcon icon={faPaperPlane} className="w-10 h-10" />
              </div>
              <p className="font-bold font-mono text-center text-lg dark:text-zinc-200">Submit App</p>
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
                description="Share your draft application with our mentors and get feedback on your proposal. Our mentors are experienced developers who have been through the GSoC process before and can provide valuable insights to help you improve your application. Discussing your proposal with mentors also demonstrates your commitment to the project and your willingness to learn and improve."
                button="Mentors List"
                link="https://github.com/orgs/AOSSIE-Org/people"
              />
              <TimelineElement
                title="Submit Application"
                description="Submit your final application to Google Summer of Code before the deadline. Make sure to double-check your application and ensure that you have included all the necessary information. Good luck!"
                button="Apply Now"
                link="https://summerofcode.withgoogle.com/"
              />
            </ol>
          </Container.Inner>
        </div>
      </Container.Outer>
    </>
  )
}
