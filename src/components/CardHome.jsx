import Link from "next/link";
import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";

export function CardHome({heading, content}) {
    
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href="#"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {loading ? (
        <div className="space-y-3">
          <Skeleton className="h-6 w-3/4 rounded" />
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
        </div>
      ) : (
        <>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
        </>
      )}
    </Link>
  );
}