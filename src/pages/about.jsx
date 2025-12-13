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

  // Detect dark mode preference on page load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const data = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], // Include '0' on the x-axis
    datasets: [
      {
        label: 'Number of Completed Projects',
        data: [4, 8, 12, 9, 9, 11, 8, 6, 18], // Start data points from '2017', leave '0' as null
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
        grid: {
          display: true,
          color: '#FFCC00',
        },
        ticks: {
          callback: (value, index) => data.labels[index], // Match x-axis labels
        },
      },
      y: {
        beginAtZero: true, // Start y-axis from 0
        ticks: {
          stepSize: 5, // Increment y-axis labels by 5
        },
        grid: {
          display: true,
          color: '#FFCC00',
        },
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
    section: {
      margin: '30px 0',
    },
    title: {
      fontSize: '2.5rem',
      color: '#32a852',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
      textAlign: 'center',
      marginTop: '20px', // More space below ABOUT
      marginBottom: '40px', // Increased spacing
    },
    highlight: {
      color: '#32a852',
      fontWeight: 'bold',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '30px', // More space between stats and paragraph
    },
    statItem: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#32a852', // Make stats bold
    },
    statNumber: {
      fontSize: '2rem',
      color: '#FFCC00',
      fontWeight: 'bold', // Make stats numbers bold
    },
    statLabel: {
      fontSize: '1rem',
      marginBottom: '20px',
    },
    graphLabel: {
      textAlign: 'center',
      color: '#32a852',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    bannerWrapper: {
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      position: 'relative',
      overflow: 'hidden',
    },
    gsocSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px', // Gap after GSOC Logo and heading
    },
    orgText: {
      textAlign: 'center',
      fontSize: '1.1rem',
      marginBottom: '20px', // Gap below Australian Umbrella Org
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
          Our Projects, where we showcase our tech wizardry and code-slinging skills!! Be a part of our community and
          contribute to meaningful projects that are <span className="text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 font-bold">making a difference</span>. Explore
          our selection of projects and find the perfect opportunity to showcase your skills and{' '}
          <span className="text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 font-bold">make an impact</span>.
        </p>
        <div style={styles.stats}>
          <div className="text-green-600 dark:text-zinc-400 text-lg font-mono leading-7 font-bold">
            <h2 style={styles.statNumber}>34+</h2>
            <p style={styles.statLabel}>Active Projects</p>
          </div>
          <div className="text-green-600 dark:text-zinc-400 text-lg font-mono leading-7 font-bold">
            <h2 style={styles.statNumber}>500+</h2>
            <p style={styles.statLabel}>Total Contributors</p>
          </div>
          <div className="text-green-600 dark:text-zinc-400 text-lg font-mono leading-7 font-bold">
            <h2 style={styles.statNumber}>3800+</h2>
            <p style={styles.statLabel}>Community Count</p>
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
            marginBottom: '20px', // Adds space below this section
          }}
        >
          <div className='m-3 w-[60px] h-[60px]  bg-cover bg-[url("/contribution.png")] dark:bg-[url("/contribution-dark.png")]'></div>
          <h1 className="font-mono text-2xl md:text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl">
            GSOC CONTRIBUTION
          </h1>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7">Australian Umbrella Org for Open-Source Projects</p>
        <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
          <Line data={data} options={options} />
        </div>
        <p className="text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 font-bold">----- Number of Completed Projects Year Wise -----</p>
      </section>

      <section style={styles.section}>
        <div className="text-center">
          <h2 className="font-mono text-4xl md:text-5xl font-extrabold tracking-tighter text-[#00843D] dark:text-yellow-400">
            AOSSIE 10 Years
          </h2>
          <p className="mt-2 font-mono text-lg text-zinc-600 dark:text-zinc-400">
            2015025 · Decade of Innovation & Education
          </p>
          <div className="mt-6">
            <a
              href="mailto:aossie.oss@gmail.com?subject=AOSSIE%2010%20Years%20T-Shirt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[#00843D] px-6 py-3 font-mono font-semibold text-white transition hover:scale-[1.02] hover:shadow-md dark:bg-yellow-400 dark:text-black"
            >
              Get the Anniversary T-Shirt
            </a>
          </div>
        </div>
      </section>

      <div style={styles.bannerWrapper}>
        <Container.Outer className="mt-28">
          <Banner />
        </Container.Outer>
      </div>
    </div>
  );
}
