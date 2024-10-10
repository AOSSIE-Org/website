import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '@/components/Container';
import { TimelineElement } from '@/components/TimelineElement';
import GSoC from '@/images/logo.svg';

export default function About() {
  // State to manage expanded sections
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (title) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title], // Toggle the selected section
    }));
  };

  return (
    <>
      <Head>
        <title>Application Timeline</title>
        <meta name="description" content="How to apply for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="mt-5">
          <p className='text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7'>
            Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code. 
            <br /> 
            Our application timeline is your step-by-step guide to becoming a part of our open-source community and contributing to projects that are shaping the future of technology. 
            From submitting your proposal to final evaluations, we&apos;ll walk you through the process every step of the way. Don&apos;t miss this opportunity to be a part of something great and apply now!
          </p>
        </div>
        <Container.Inner className='mt-16'>
          <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
            {["Join us on Discord", "Start Contributing", "Write a Draft Application", "Discuss with Mentors", "Submit Final Application"].map((title, index) => (
              <li key={index} className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{title}</h3>
                  {/* Button only visible on mobile */}
                  {title !== "Submit Final Application" && (
                    <button 
                      onClick={() => toggleSection(title)} 
                      className="text-blue-600 md:hidden px-4 py-2 rounded-lg border border-blue-600 bg-white dark:bg-zinc-800 hover:bg-blue-600 hover:text-white focus:outline-none transition duration-300">
                      {expandedSections[title] ? "See Less" : "See More"}
                    </button>
                  )}
                </div>
                {/* Show detailed information on desktop and expanded section on mobile */}
                <div className={`mt-2 ${expandedSections[title] || title === "Submit Final Application" ? 'block' : 'hidden md:block'}`}>
                  <TimelineElement
                    title={title}
                    description={getDescription(title)} // Function to get descriptions based on the title
                    button={getButton(title)} // Function to get buttons based on the title
                    link={getLink(title)} // Function to get links based on the title
                  />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-20 relative block rounded-3xl dark:bg-white/70 bg-zinc-400/20 p-8 pb-16 shadow-xl">
            <Image src={GSoC} width={700} className='mx-auto' />
            <div className='mt-10 flex justify-center gap-6 flex-col sm:flex-row'>
              <Link className="order-1 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/">
                <span className="font-mono font-semibold text-center">View 2024 Program Announcements</span>
              </Link>
              <Link className="order-2 group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-zinc-800 px-8 py-3 text-black dark:text-white focus:outline-none" href="https://summerofcode.withgoogle.com/programs/2024">
                <span className="font-mono font-semibold text-center">View 2024 Program Timeline</span>
              </Link>
            </div>
          </div>
        </Container.Inner>
      </Container>
    </>
  );
}

// Helper functions to get description, button text, and links
const getDescription = (title) => {
  switch (title) {
    case "Join us on Discord":
      return "Join the AOSSIE community on Discord and connect with other developers, mentors, and organizers...";
    case "Start Contributing":
      return "Contribute to the project and make your mark on open-source development with AOSSIE...";
    case "Write a Draft Application":
      return "Select an Idea and write a draft application that expands this idea...";
    case "Discuss with Mentors":
      return "By having a discussion with our mentors, you'll have the opportunity to ask questions...";
    case "Submit Final Application":
      return "By submitting your final application for GSoC, you'll be taking the last step in your journey...";
    default:
      return "";
  }
};

const getButton = (title) => {
  switch (title) {
    case "Join us on Discord":
      return "Join Discord";
    case "Start Contributing":
      return "Contribute";
    case "Write a Draft Application":
      return "Choose an Idea";
    case "Discuss with Mentors":
    case "Submit Final Application":
      return ""; // No button for these sections
    default:
      return "";
  }
};

const getLink = (title) => {
  switch (title) {
    case "Join us on Discord":
      return 'https://discord.com/invite/6mFZ2S846n';
    case "Start Contributing":
      return 'https://gitlab.com/aossie';
    case "Write a Draft Application":
      return '/ideas';
    case "Discuss with Mentors":
    case "Submit Final Application":
      return '#'; // No link for these sections
    default:
      return '#';
  }
};
