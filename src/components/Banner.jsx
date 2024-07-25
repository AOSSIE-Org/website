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
              <Link href="/apply" className="group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-black px-8 py-3 text-black dark:text-white focus:outline-none font-mono font-semibold ">
                <span className="absolute right-0 flex-shrink-0 translate-x-full rounded-full border border-current bg-white p-1 text-black transition-transform group-hover:-translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="rgb(0,132,61)"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="font-mono font-semibold transition-all group-hover:mr-6">
                  Apply to GSoC with AOSSIE
                </span>
              </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}
