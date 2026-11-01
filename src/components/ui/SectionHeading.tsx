import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
};

export default function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  const center = align === 'center';
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-ember">
        <span className="h-px w-6 bg-ember/70" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
