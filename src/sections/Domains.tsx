import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { DOMAINS } from '../lib/content';

export default function Domains() {
  return (
    <section id="domains" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Project Domains"
          title={
            <>
              Pick a domain. <span className="text-ember">We&apos;ll help you build it.</span>
            </>
          }
          description="From AI models to full-stack apps, these are the areas where we guide final-year projects."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {DOMAINS.map((d, i) => (
            <li key={d.name}>
              <Reveal delay={(i % 5) * 0.06} className="h-full">
                <div className="glass group relative h-full overflow-hidden rounded-3xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-ember/40 hover:shadow-[0_28px_50px_-24px_rgba(251,146,60,0.35)]">
                  <span className="absolute right-4 top-3 font-display text-3xl font-extrabold text-white/[0.06] transition-colors duration-500 group-hover:text-ember/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] transition-all duration-500 group-hover:border-ember/40 group-hover:bg-ember/15">
                    <d.icon size={22} className="text-ember" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-[15px] font-semibold leading-snug text-white sm:text-base">{d.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/50">{d.hint}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
