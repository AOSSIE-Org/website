import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';

export function Banner() {
  return (
    <section aria-label="Apply Banner" className="scroll-mt-14 bg-[#00843D] dark:bg-yellow-400 sm:scroll-mt-32">
      <div className="overflow-hidden lg:relative">
        <ContainerPattern size="md" className="relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10">
          <Pattern className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <Pattern className="absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible" />
          <div>
            <h2 className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Launch into AOSSIE&apos;s open-source world through GSoC!
            </h2>
            <p className="mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono">
              Learn how to apply for an opportunity to work on open-source projects and gain real-world experience through Google Summer of Code.
            </p>
            <div className="mt-5">
            <Link href="/apply" legacyBehavior>
            <a 
              href="/apply" 
              className="group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-black px-8 py-3 text-black dark:text-white focus:outline-none font-mono font-semibold 
                transition-all duration-300 ease-in-out
                transform hover:scale-105 hover:shadow-lg
                relative
                before:absolute before:inset-0 
                before:bg-yellow-100 dark:before:bg-yellow-200
                before:scale-x-0 before:origin-left
                before:transition-transform before:duration-300 before:ease-in-out
                hover:before:scale-x-100
                hover:text-black dark:hover:text-black
                focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-300"
                >
                <span className="relative z-10">
                  Apply to GSoC with AOSSIE
                </span>
             </a>
             </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}
