import { useEffect, useRef } from 'react'
import { Header } from '@/components/Header'
import '@/style/tailwind.css'
import 'focus-visible'
import { Footer } from '@/components/Footer'
import React from 'react';
import Scroll from 'smooth-scroll';

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function MyApp({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  useEffect(() => {
    const scroll = new Scroll('a[href*="#"]', {
      speed: 500,
      easing: 'easeInOutQuad',
    });

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp;
