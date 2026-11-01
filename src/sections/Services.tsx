import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { InstagramButton } from '../components/ui/Button';
import { SERVICES } from '../lib/content';

/** Bento-style grid: first card is wide on md+, the last is wide on lg. */
const span = (i: number) => (i === 0 ? 'md:col-span-2' : i === SERVICES.length - 1 ? 'lg:col-span-2' : '');

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Everything you need to take your project from idea to demo"
          description="Practical help across the full journey of a final-year project, explained in a way you can follow."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07} className={span(i)}>
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 sm:p-7">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/25"
                  aria-hidden="true"
                />
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-brand to-brand-deep shadow-[0_14px_28px_-10px_rgba(139,92,246,0.9),0_1px_0_rgba(255,255,255,0.35)_inset] transition-transform duration-500 [transform:perspective(400px)_rotateX(0)_rotateY(0)] group-hover:[transform:perspective(400px)_rotateX(-10deg)_rotateY(14deg)_translateY(-3px)]">
                  <s.icon size={26} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug text-white sm:text-xl">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/60">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <InstagramButton variant="ember">Discuss Your Project</InstagramButton>
        </Reveal>
      </div>
    </section>
  );
}
