import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "@/style/tailwind.css";
import "focus-visible";

function usePrevious(value) {
  let ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      {/* Content with Animation */}
      <div className="relative">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={router.pathname}
            initial={router.pathname === "/projects" ? { y: 50, opacity: 0 } : { opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={router.pathname === "/projects" ? { y: -50, opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <Component previousPathname={previousPathname} {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
