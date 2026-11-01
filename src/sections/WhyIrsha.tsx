import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { InstagramButton } from '../components/ui/Button';
import { REASONS } from '../lib/content';

export default function WhyIrsha() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Why Choose IRSHA?"
            title="Build it with us. Understand it fully."
            description="We believe the best final-year project is one you can explain with confidence. That is why we focus on guidance, implementation and clear understanding."
          />
          <Reveal delay={0.15} className="mt-8">
            <InstagramButton variant="ember">Let&apos;s Talk</InstagramButton>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <div className="glass group h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    <r.icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">{r.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/60">{r.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
