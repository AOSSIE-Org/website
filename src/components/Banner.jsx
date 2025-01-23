import Link from 'next/link';
import { ContainerPattern } from '@/components/ContainerPattern';
import { Pattern } from '@/components/Pattern';

export function Banner() {
  return (
    <section
      aria-label="Apply Banner"
      className="scroll-mt-14 bg-[#00843D] dark:bg-yellow-400 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <ContainerPattern
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 pt-24 pb-8 sm:py-10 lg:static lg:grid-cols-2"
        >
          <Pattern className="absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <Pattern className="invisible absolute -top-32 left-0 mt-2 w-full sm:visible sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Launch into AOSSIE&apos;s open-source world through GSoC!
            </h2>
            <p className="mt-4 font-mono text-lg font-medium tracking-tighter text-white dark:text-black">
              Learn how to apply for an opportunity to work on open-source
              projects and gain real-world experience through Google Summer of
              Code.
            </p>
            <div className="mt-5">
              <Link href="/apply" legacyBehavior>
                <a className="group relative inline-flex items-center overflow-hidden rounded-lg bg-white px-8 py-3 font-mono font-semibold text-black transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00843D] hover:to-green-500 hover:text-white focus:outline-none dark:bg-black dark:text-white dark:hover:from-green-500 dark:hover:to-blue-500">
                  <span className="absolute inset-0 translate-x-full bg-[#FED41E] transition-transform duration-500 ease-out group-hover:translate-x-0 dark:bg-green-500"></span>
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
  )
}
