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

 return (
    <>
      <Container className="mt-4 sm:mt-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="my-8">
            <motion.h1 
              className="text-4xl md:text-5xl font-mono font-black text-[#32a852]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ABOUT US
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-mono mt-5 mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#32a852] font-bold">AOSSIE</span> (Australian Open
              Source Software Innovation and Education) is a not-for-profit
              umbrella organization for open-source projects. We believe the
              open-source philosophy provides a resource-efficient channel to
              transfer knowledge and achieve innovation and education.
            </motion.p>
          </div>

          <div className="my-8 space-y-12">
            <motion.div 
              className="w-full h-[300px] md:h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Line data={data} options={options} />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-around gap-6 mt-8"
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
             {/* Stats Cards */}
             {[
               { value: stats.years, label: 'years completed' },
               { value: stats.projects, label: 'projects completed' },
               { value: `${stats.contributors}+`, label: 'contributors' }
             ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg w-full sm:w-48 lg:w-56 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold text-[#32a852]">{item.value}</div>
                  <div className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">{item.label}</div>
                </motion.div>
             ))}
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
