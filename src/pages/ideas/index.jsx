import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { getAllIdeas } from '@/helper/getAllIdeas';

function Article({ article }) {
  return (
    <article className="mt-5 sm:mt-0 md:grid md:grid-flow-col md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/ideas/2024/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        {/* <Card.Cta>Know More</Card.Cta> */}
      </Card>
    </article>
  );
}

function Dropdown({ options, isVisible }) {
  if (!isVisible) return null;
  return (
    <ul className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      {options.map((option, index) => (
        <li key={index} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          {option.name}
        </li>
      ))}
    </ul>
  );
}

export default function Ideas({ articles }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const options = [
    { name: 'Agora Vote API V2', description: 'Agora API is a vote counting API written using Scala 2 and Play Framework.' },
    { name: 'Agora Vote IOS', description: 'Agora Vote App is an IOS application that lets user create elections, invite voters, vote and view results ...' },
    { name: 'Monumento', description: 'Monumento is a social media for sharing landmarks, visited places and visualizing their 3D models right from a mobile device ...' },
    { name: 'Resonate App', description: 'An open source social voice platform' }
  ];
  

  return (
    <>
      <Head>
        <title>Idea List</title>
        <meta name="description" content="Idea List for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="">
          <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
            <b>Idea List</b>. As part of Google Summer of Code, we offer
            a unique opportunity for developers to explore new ideas,  a wide
            variety of projects for developers to choose from and contribute to.
            From developing new features to fixing critical bugs, our idea list
            is your go-to destination for finding your next big project and
            kickstart your open-source journey.
          </p>
          <div className="relative">
            <button
              onClick={() => setDropdownVisible(!isDropdownVisible)}
              className="mt-4 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Show Ideas
            </button>
            <Dropdown options={options} isVisible={isDropdownVisible} />
          </div>
        </div>
        <Container.Inner>
          <div className="mt-10 flex justify-center sm:mt-20">
            <div className="grid gap-6 gap-y-8 md:grid-flow-col md:grid-rows-4">
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link
              className="group order-2 mx-auto items-center overflow-hidden rounded-lg bg-zinc-800 px-8 py-3 text-white focus:outline-none dark:bg-white dark:text-black"
              href="/ideas/2023"
            >
              <span className="text-center font-mono font-semibold">
                View 2023 Idea List
              </span>
            </Link>
          </div>
        </Container.Inner>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllIdeas()).map(({ component, ...meta }) => meta),
    },
  };
}
