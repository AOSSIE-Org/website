'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Banner } from '@/components/Banner';
import { Timeline } from '@/components/Timeline';
import { Team } from '@/components/Team';
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
  };
  
 return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div style={styles.container}>
          <div style={styles.section}>
            <h1 style={styles.title} className='font-mono font-black'>ABOUT US</h1>
            <p style={styles.paragraph} className='text-zinc-600 dark:text-zinc-400 font-mono'>
              <span style={styles.highlight}>AOSSIE</span> (Australian Open
              Source Software Innovation and Education) is a not-for-profit
              umbrella organization for open-source projects. We believe the
              open-source philosophy provides a resource-efficient channel to
              transfer knowledge and achieve innovation and education.
            </p>
          </div>
          <div style={styles.section}>
            <div style={{ height: '400px', width: '100%' }}>
              <Line data={data} options={options} />
            </div>
            
            <div style={styles.stats}>
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                  width: '200px',
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#32a852' }}>8</div>
                <div style={{ fontSize: '1.2rem', color: isDarkMode ? '#ccc' : '#555' }}> years completed</div>
              </div>
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                  width: '200px',
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#32a852' }}>80+</div>
                <div style={{ fontSize: '1.2rem', color: isDarkMode ? '#ccc' : '#555' }}>projects completed</div>
              </div>
              <div
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                  width: '200px',
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#32a852' }}>70+</div>
                <div style={{ fontSize: '1.2rem', color: isDarkMode ? '#ccc' : '#555' }}>contributors</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
            <Timeline />
        </div>
        
        <div className="mt-24 mb-24">
           <Team />
        </div>

      </Container>
      
      <Container.Outer className="mt-16">
         <Banner />
      </Container.Outer>
    </>
  );
}
