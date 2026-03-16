'use client'

import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/shared/Container';
import { Timeline } from '@/components/about/Timeline';
import { Team } from '@/components/about/Team';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { motion, useInView } from 'framer-motion';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler, Legend);

// ── animated counter ──────────────────────────────────────────────────────────
function AnimatedNumber({ target, duration = 1800 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const numeric = parseInt(String(target).replace(/\D/g, ''), 10) || 0;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(ease * numeric));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  const suffix = String(target).replace(/[0-9]/g, '');
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function About() {
  const [stats, setStats] = useState({
    years: 10,
    projects: 203,
    contributors: 7600,
    graphData: {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      data: [4, 8, 12, 9, 9, 11, 8, 6, 18, 22],
    },
  });

  const [chartKey, setChartKey] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const chartRef = useRef(null);
  const graphRef = useRef(null);
  const graphInView = useInView(graphRef, { once: true, margin: '-80px' });

  // re-trigger chart animation each time it enters view
  useEffect(() => {
    if (!graphInView) return;
    setChartKey((k) => k + 1);
    drawProgress.current = 0;
    const start = performance.now();
    const duration = 4000;
    const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      drawProgress.current = easeInOutQuart(t);
      chartRef.current?.update('none');
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [graphInView]);

  // track dark mode for tick label colors
  useEffect(() => {
    const html = document.documentElement;
    const update = () => setIsDark(html.classList.contains('dark'));
    update();
    const observer = new MutationObserver(update);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const json = await res.json();
        if (!json.error) setStats(json);
      } catch (e) {
        console.error('Failed to fetch stats:', e);
      }
    };
    fetchStats();
  }, []);

  // ── gradient fill factory ────────────────────────────────────────────────
  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0,   'rgba(0,132,61,0.35)');
    gradient.addColorStop(0.5, 'rgba(0,132,61,0.12)');
    gradient.addColorStop(1,   'rgba(0,132,61,0.0)');
    return gradient;
  };

  const rawData = [4, 8, 12, 9, 9, 11, 8, 6, 18, 22];
  const labels  = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Completed Projects',
        data: rawData,
        fill: true,
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return 'transparent';
          return getGradient(c, chartArea);
        },
        borderColor: '#00843D',
        borderWidth: 4,
        tension: 0.45,
        pointRadius: 6,
        pointHoverRadius: 9,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#00843D',
        pointBorderWidth: 2.5,
        pointHoverBackgroundColor: '#00843D',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
      },
    ],
  };

  const drawProgress = useRef(0);

  const leftToRightPlugin = {
    id: 'leftToRight',
    beforeDatasetsDraw(chart) {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;
      const { left, right, top, bottom } = chartArea;
      const clipX = left + (right - left) * drawProgress.current;
      ctx.save();
      ctx.beginPath();
      ctx.rect(left, top, clipX - left, bottom - top);
      ctx.clip();
    },
    afterDatasetsDraw(chart) {
      chart.ctx.restore();
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(24,24,27,0.92)',
        titleColor: '#00843D',
        bodyColor: '#e4e4e7',
        borderColor: '#00843D',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 10,
        displayColors: false,
        titleFont: { size: 13, weight: 'bold', family: 'monospace' },
        bodyFont: { size: 14, family: 'monospace' },
        callbacks: {
          title: ([item]) => `Year: ${item.label}`,
          label: (item) => `  Projects: ${item.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(254,212,30,0.25)', lineWidth: 3, drawBorder: false },
        ticks: { color: isDark ? '#ffffff' : '#18181b', font: { size: 12, weight: 'normal', family: 'monospace' } },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
          color: isDark ? '#ffffff' : '#18181b',
          font: { size: 12, weight: 'normal', family: 'monospace' },
        },
        grid: { color: 'rgba(254,212,30,0.25)', lineWidth: 3, drawBorder: false },
        border: { display: false },
      },
    },
  };

  return (
    <>
      <Container className="mt-4 sm:mt-16 mb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* intro text */}
          <div className="my-8">
            <motion.p
              className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-mono mt-5 mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#32a852] font-bold">AOSSIE</span> (Australian Open
              Source Software Innovation and Education) is a not-for-profit
              organization dedicated to project-based innovation-focused and
              research-intensive education. Our projects are free and open-source.
            </motion.p>
          </div>

          <div className="my-8 space-y-12">

            {/* ── graph ──────────────────────────────────────────────────── */}
            <motion.div
              ref={graphRef}
              initial={{ opacity: 0, y: 40 }}
              animate={graphInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full"
            >

              {/* chart */}
              <div className="w-full h-[280px] md:h-[360px]">
                <Line key={chartKey} ref={chartRef} data={data} options={options} plugins={[leftToRightPlugin]} />
              </div>

              <p className="mt-3 text-center text-xs font-mono font-bold text-zinc-600 dark:text-zinc-300 tracking-widest uppercase">
                Year
              </p>
            </motion.div>

            {/* ── stats cards ────────────────────────────────────────────── */}
            <motion.div
              className="flex flex-wrap justify-around gap-6 mt-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              {[
                { value: stats.years,             label: 'years' },
                { value: stats.projects,           label: 'projects' },
                { value: 203,                      label: 'repos' },
                { value: '88',                     label: 'mentors' },
                { value: `${stats.contributors}+`, label: 'contributors' },
                { value: '7500+',                  label: 'community members' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg
                             border border-zinc-100 dark:border-zinc-700
                             w-full sm:w-48 lg:w-56 cursor-pointer
                             transition-shadow duration-300
                             hover:shadow-[#00843D]/20 dark:hover:shadow-[#FED41E]/20"
                >
                  <div className="text-4xl font-bold font-mono text-[#00843D] dark:text-[#FED41E]">
                    <AnimatedNumber target={item.value} />
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-mono uppercase tracking-wider">
                    {item.label}
                  </div>
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
