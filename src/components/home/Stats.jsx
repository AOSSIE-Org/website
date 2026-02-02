'use client'

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Container } from '@/components/shared/Container';

function Counter({ end, duration, label }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="flex flex-col items-center">
      <span className="text-4xl font-extrabold font-mono text-[#00843D] dark:text-yellow-400">
        {count}+
      </span>
      <span className="mt-2 text-lg text-zinc-600 dark:text-zinc-400 font-mono">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  return (
    <Container.Outer className="my-20">
      <motion.div 
        className="py-16 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <Counter end={10} duration={2000} label="Years of Innovation" />
            <Counter end={20} duration={2000} label="Projects" />
            <Counter end={100} duration={2000} label="Contributors" />
          </div>
        </div>
      </motion.div>
    </Container.Outer>
  );
}
