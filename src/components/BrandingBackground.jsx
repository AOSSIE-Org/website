// Example SVG background pattern for branding
export default function BrandingBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      focusable="false"
      width="100%"
      height="100%"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brand-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(20)">
          <stop offset="0%" stopColor="#00843D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FED41E" stopOpacity="0.10" />
        </linearGradient>
      </defs>
      <rect width="1440" height="320" fill="url(#brand-gradient)" />
      <circle cx="200" cy="120" r="80" fill="#00843D" fillOpacity="0.08" />
      <circle cx="1240" cy="200" r="100" fill="#FED41E" fillOpacity="0.10" />
    </svg>
  );
}
