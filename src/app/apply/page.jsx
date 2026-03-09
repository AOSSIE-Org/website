import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/shared/Container'
import { TimelineElement } from '@/components/about/TimelineElement'
import { ApplyHeader } from '@/components/apply/ApplyHeader'
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
      <ApplyHeader>
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
      </ApplyHeader>
    </>
  )
}
