import Image from "next/image";

export function CardEffect({ heading, content, logo }) {
  return (
    <a
      href="#"
      className="group block relative h-[22rem] w-72 cursor-pointer"
    >
      <div
        className="relative flex h-full justify-center items-center rounded-3xl border-2 border-gray-400
        dark:border-gray-200 bg-white dark:bg-gray-800 p-8 shadow-xl
        transition-all duration-300 ease-out transform
        group-hover:-translate-y-3 group-hover:scale-105
        group-hover:shadow-2xl group-hover:bg-green-100 dark:group-hover:bg-yellow-400"
      >
        {/* Logo + Title */}
        <div className="text-center transition-opacity duration-300 group-hover:opacity-0">
          <Image
            src={logo}
            width={150}
            height={150}
            className="mx-auto"
            alt={`${heading} project logo`}
          />

          <h2 className="mt-4 text-3xl font-extrabold font-mono text-[#00843D] dark:text-yellow-400">
            {heading}
          </h2>
        </div>

        {/* Hover Content */}
        <div
          className="absolute inset-0 flex items-center justify-center
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100 dark:text-zinc-300"
        >
          <p className="font-mono text-center w-56">{content}</p>
        </div>
      </div>
    </a>
  );
}