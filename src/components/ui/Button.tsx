import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { INSTAGRAM_URL } from '../../lib/links';
import InstagramIcon from './InstagramIcon';

type Variant = 'primary' | 'ember' | 'ghost';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const base =
  'group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-semibold ' +
  'transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-[0_10px_30px_-8px_rgba(139,92,246,0.7)] hover:bg-[#9d75f8] hover:shadow-[0_14px_38px_-8px_rgba(139,92,246,0.85)]',
  ember:
    'bg-ember text-[#1a0f05] shadow-[0_10px_30px_-8px_rgba(251,146,60,0.65)] hover:bg-[#ffa45f] hover:shadow-[0_14px_38px_-8px_rgba(251,146,60,0.8)]',
  ghost: 'glass text-white hover:border-white/25 hover:bg-white/10',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  icon,
  arrow = true,
  className = '',
  onClick,
}: ButtonProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </a>
  );
}

type InstagramButtonProps = Omit<ButtonProps, 'href' | 'icon'>;

/** Every main inquiry button in the site goes through this, so the URL lives in one place. */
export function InstagramButton({ children, variant = 'primary', ...rest }: InstagramButtonProps) {
  return (
    <Button href={INSTAGRAM_URL} variant={variant} icon={<InstagramIcon size={18} />} {...rest}>
      {children}
    </Button>
  );
}
