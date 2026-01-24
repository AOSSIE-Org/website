

import { useEffect, useRef } from 'react'

// Accessibility: Skip to content link
function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 rounded bg-primary px-4 py-2 text-white dark:bg-primary-accent focus:outline-none focus:ring-4 focus:ring-primary-accent"
      tabIndex={0}
    >
      Skip to main content
    </a>
  )
}
import { Header } from '@/components/Header'

import '@/style/tailwind.css'
import 'focus-visible'
import { Footer } from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <SkipToContent />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main id="main-content">
          <PageTransition router={router}>
            <Component previousPathname={previousPathname} {...pageProps} />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </>
  )
}
