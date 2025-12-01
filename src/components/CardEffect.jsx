import { useState } from "react";
import Image from "next/image";

export function CardEffect({ heading, content, logo, href }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => setIsFlipped((prev) => !prev);

  const wrapperProps = href
    ? { href }
    : {
        role: "button",
        tabIndex: 0,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        },
      };

  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block h-[22rem] max-lg:w-72 max-xl:w-60 w-72 cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={`
          relative shadow-xl flex h-full justify-center rounded-3xl
          border-2 border-gray-400 dark:border-gray-200
          bg-white dark:bg-gray-800
          md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8
          transition-transform transition-shadow duration-300
          motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:shadow-2xl
        `}
      >
        
        <div
          className={`
            absolute inset-0 flex flex-col justify-center items-center
            px-8 pb-4
            transition-opacity duration-300
            ${isFlipped ? "opacity-0" : "opacity-100 group-hover:opacity-0"}
            z-10
          `}
          aria-hidden={isFlipped}
        >
          <Image
            src={logo}
            width={150}
            unoptimized
            className="mx-auto"
            alt="Project Logo"
          />
          <h2 className="ml-0 leading-9 text-4xl text-center flex font-extrabold justify-center font-mono text-[#00843D] dark:text-yellow-400">
            {heading}
          </h2>
        </div>

        
        <div
          className={`
            absolute inset-0 flex flex-col justify-center items-center
            pr-6
            lg:scale-90 lg:pb-0 lg:pl-3 lg:pr-0 xl:pl-0
            md:p-0 md:scale-95
            transition-opacity duration-300
            ${isFlipped ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
            dark:text-zinc-300
          `}
          aria-hidden={!isFlipped}
        >
          <p className="text-center">{content}</p>
        </div>
      </div>
    </Wrapper>
  );
}