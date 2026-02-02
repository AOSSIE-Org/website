import Image from 'next/image';

const teamMembers = [
  {
    name: 'Bruno',
    role: 'Founder & Admin',
    description: 'Leading AOSSIE since inception.',
    image: '/images/default.png' // Fallback
  },
  {
    name: 'Mentors',
    role: 'Core Contributors',
    description: 'Our dedicated team of mentors who guide students.',
    image: '/images/default.png'
  }
];

export function Team() {
  return (
    <div className="py-12 bg-zinc-50 dark:bg-zinc-800/20" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold font-mono text-zinc-900 dark:text-zinc-100">
            Our <span className="text-[#00843D] dark:text-yellow-400">Team</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-500 dark:text-zinc-400 font-mono">
            The people who make AOSSIE possible.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center">
             {/* Since I don't have real images/names, I will make a generic "Contributors" card style */}
             <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center">
                <p className="text-lg text-zinc-600 dark:text-zinc-300 font-mono mb-8">
                    AOSSIE is run by a dedicated group of volunteers, mentors, and administrators who are passionate about open source.
                </p>
             </div>
        </div>
      </div>
    </div>
  );
}
