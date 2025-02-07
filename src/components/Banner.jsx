import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';

export function Banner() {
  return (
    <section aria-label="Apply Banner" className="scroll-mt-14 bg-[#00843D] dark:bg-yellow-400 sm:scroll-mt-32">
      <div className="overflow-hidden lg:relative bg-[#00843D] dark:bg-yellow-400">
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
                <a className="group relative inline-block text-lg  hover:text-white">
                  <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-4 py-3 transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-white">
                    <span className="absolute inset-0 h-full w-full rounded-lg bg-white px-4 py-3 hover:text-white"></span>
                    <span className="absolute left-0 -ml-2 h-48 w-72 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-black transition-all duration-300 ease-in-out group-hover:-rotate-180 dark:bg-black"></span>
                    <span className="relative font-mono font-semibold hover:text-white">
                      Apply to GSoC with AOSSIE
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 mb-3 mr-2 h-14 w-full rounded-lg bg-black transition-all duration-200 ease-linear group-hover:m-0 dark:bg-black"
                    data-rounded="rounded-lg"
                  ></span>
                </a>
              </Link>
            </div>
          </div>
        </ContainerPattern>
      </div>
    </section>
  );
}
