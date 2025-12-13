import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function LoadingTriangle() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="relative">
        <div className="animate-spin-slow">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="50,10 90,80 10,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              className="text-[#00843D] dark:text-yellow-400"
            />
            <polygon
              points="50,10 90,80 10,80"
              fill="currentColor"
              className="text-[#00843D]/20 dark:text-yellow-400/20"
            />
          </svg>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          <div className="h-2 w-2 rounded-full bg-[#00843D] dark:bg-yellow-400 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-[#00843D] dark:bg-yellow-400 animate-pulse delay-100"></div>
          <div className="h-2 w-2 rounded-full bg-[#00843D] dark:bg-yellow-400 animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}