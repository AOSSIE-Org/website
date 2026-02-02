'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Banner } from '@/components/shared/Banner';
import { Timeline } from '@/components/about/Timeline';
import { Team } from '@/components/about/Team';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stats, setStats] = useState({
    years: 8,
    projects: 80,
    contributors: 70,
    graphData: { 
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'], 
      data: [4, 8, 12, 9, 9, 11, 8, 6, 18] 
    }
  });

  // Detect dark mode preference on page load and fetch stats
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);

    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        if (!data.error) {
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  const data = {
    labels: stats.graphData.labels, // Include '0' on the x-axis
    datasets: [
      {
        label: 'Number of Repositories',
        data: stats.graphData.data, // Start data points from '2017', leave '0' as null
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
      <Container className="mt-4 sm:mt-8">
        <div style={styles.container}>
          <div style={styles.section}>
            <motion.h1 
              style={styles.title} 
              className='font-mono font-black'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT US
            </motion.h1>
            <motion.p 
              style={styles.paragraph} 
              className='text-zinc-600 dark:text-zinc-400 font-mono'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span style={styles.highlight}>AOSSIE</span> (Australian Open
              Source Software Innovation and Education) is a not-for-profit
              umbrella organization for open-source projects. We believe the
              open-source philosophy provides a resource-efficient channel to
              transfer knowledge and achieve innovation and education.
            </motion.p>
          </div>
          <div style={styles.section}>
            <motion.div 
              style={{ height: '400px', width: '100%' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Line data={data} options={options} />
            </motion.div>
            
            <motion.div 
              style={styles.stats}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                  width: '200px',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#32a852' }}>{stats.years}</div>
                <div style={{ fontSize: '1.2rem', color: isDarkMode ? '#ccc' : '#555' }}> years completed</div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                  width: '200px',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#32a852' }}>{stats.projects}</div>
                <div style={{ fontSize: '1.2rem', color: isDarkMode ? '#ccc' : '#555' }}>projects completed</div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
                  width: '200px',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#32a852' }}>{stats.contributors}+</div>
                <div style={{ fontSize: '1.2rem', color: isDarkMode ? '#ccc' : '#555' }}>contributors</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <Timeline />
        </motion.div>
        
        <motion.div 
          className="mt-24 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <Team />
        </motion.div>
      </Container>
    </>
  );
}
