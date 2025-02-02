import { useState } from "react";
import Link from "next/link";

export function HoverButton({ children, href, onClick, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = `
    relative overflow-hidden rounded-lg px-8 py-3 text-lg font-mono font-semibold
    transition-all duration-300 ease-in-out
    ${
      isHovered
        ? "scale-105 bg-gradient-to-r from-[#00843D] to-lime-500 text-white dark:from-yellow-300 dark:via-yellow-400 dark:to-yellow-500 dark:text-black"
        : "bg-zinc-800 text-white dark:bg-zinc-300 dark:text-black"
    }
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        className={`
          absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-in-out
          ${isHovered ? "opacity-80" : ""}
        `}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {content}
    </button>
  );
}