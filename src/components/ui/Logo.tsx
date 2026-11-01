type Props = { className?: string };

export default function Logo({ className = '' }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="irsha-logo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9d75f8" />
            <stop offset="1" stopColor="#6d28d9" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="15" fill="url(#irsha-logo)" />
        <path d="M32 15 47 32 32 49 17 32Z" fill="#fff" opacity="0.95" />
        <circle cx="32" cy="32" r="5.5" fill="#fb923c" />
      </svg>
      <span className="font-display text-lg font-bold tracking-[0.18em] text-white">IRSHA</span>
    </span>
  );
}
