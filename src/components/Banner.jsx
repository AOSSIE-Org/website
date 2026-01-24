import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';

export function Banner() {
  return (
    <section aria-label="Apply Banner" className="scroll-mt-14 bg-gradient-to-r from-primary via-primary-accent to-primary-dark dark:from-yellow-400 dark:to-yellow-400 sm:scroll-mt-32 shadow-xl-soft">
      <div className="overflow-hidden lg:relative">
        <ContainerPattern size="md" className="relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10">
          <Pattern className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 animate-pulse" />
          <Pattern className="absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible animate-pulse" />
          <div>
            <h2 className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto drop-shadow-xl">
              Launch into AOSSIE&apos;s open-source world through GSoC!
            </h2>
            <p className="mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono">
              Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code.
            </p>
            <div className="mt-8">
              <Link href="/apply" legacyBehavior>
                <a className="group relative rounded-2xl inline-flex items-center overflow-hidden bg-white dark:bg-black px-10 py-4 text-black dark:text-white focus:outline-none font-mono font-bold shadow-md-soft transition-all duration-400 ease-in-expo hover:bg-primary hover:text-white hover:scale-105 dark:hover:bg-yellow-400 dark:hover:text-black">
                  <span className="z-10 relative">Apply to GSoC with AOSSIE</span>
                  <span className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-400 ease-in-expo group-hover:w-full opacity-20 rounded-2xl"></span>
                </a>
              </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}
