import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Container } from '@/components/Container';
import { Banner } from '@/components/Banner';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Number of Completed Projects',
        data: [4, 8, 12, 9, 9, 11, 8, 6, 18],
        fill: false,
        borderColor: '#32a852',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'category',
        grid: { display: true, color: '#FFCC00' },
        ticks: { callback: (value, index) => data.labels[index] },
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
        grid: { display: true, color: '#FFCC00' },
      },
    },
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    section: { margin: '30px 0' },
    bannerWrapper: {
  width: '100%',
  maxWidth: '100%',
  marginLeft: 0,
  position: 'relative',
  overflow: 'hidden',
},
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>About Us - Projects and Contributions</title>
        <meta name="description" content="Learn about our projects, contributions, and impact in the open-source community." />
      </Head>

      <section style={styles.section}>
        <h1 style={{ marginBottom: '20px' }} className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl">
          ABOUT
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7">
          Our Projects, where we showcase our tech wizardry...
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div className="text-green-600 dark:text-zinc-400 text-lg font-mono leading-7 font-bold">
            <h2 style={{ fontSize: '2rem', color: '#FFCC00', fontWeight: 'bold' }}>34+</h2>
            <p>Active Projects</p>
          </div>
          <div className="text-green-600 dark:text-zinc-400 text-lg font-mono leading-7 font-bold">
            <h2 style={{ fontSize: '2rem', color: '#FFCC00', fontWeight: 'bold' }}>500+</h2>
            <p>Total Contributors</p>
          </div>
          <div className="text-green-600 dark:text-zinc-400 text-lg font-mono leading-7 font-bold">
            <h2 style={{ fontSize: '2rem', color: '#FFCC00', fontWeight: 'bold' }}>3800+</h2>
            <p>Community Count</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <div
            className='m-3 w-[60px] h-[60px] bg-cover bg-[url("/contribution.png")] dark:bg-[url("/contribution-dark.png")]'
            role="img"
            aria-label="Contribution icon — circular symbol representing open-source GSOC contributions with a hand"
          ></div>

          <h1 className="font-mono text-2xl md:text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl">
            GSOC CONTRIBUTION
          </h1>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7">
          Australian Umbrella Org for Open-Source Projects
        </p>

        {/* FULL ACCESSIBLE CHART WRAPPER */}
        <figure
          role="img"
          aria-label="Line chart showing number of AOSSIE completed projects per year from 2016 to 2024, with peaks in 2018 and 2024."
          style={{ width: '100%', height: '400px', marginBottom: '20px' }}
        >
          <Line
            data={data}
            options={options}
            aria-hidden="false"
          />
          {/* Fallback for screen readers */}
          <figcaption className="sr-only">
            Number of completed projects by year: 2016 - 4 projects, 2017 - 8, 2018 - 12, 2019 - 9, 2020 - 9, 
            2021 - 11, 2022 - 8, 2023 - 6, 2024 - 18.
          </figcaption>
        </figure>

        <p className="text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 font-bold">
          ----- Number of Completed Projects Year Wise -----
        </p>
      </section>

      <div style={styles.bannerWrapper}>
        <Container.Outer className="mt-28">
          <Banner />
        </Container.Outer>
      </div>
    </div>
  );
}