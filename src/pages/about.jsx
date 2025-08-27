import Head from 'next/head';
import { Container } from '@/components/Container';
import { Banner } from '@/components/Banner';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function About() {
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
    plugins: { legend: { display: false } },
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

  // ...rest of your component
}