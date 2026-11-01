import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { InstagramButton } from '../components/ui/Button';
import { STEPS } from '../lib/content';

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Four simple steps from idea to demonstration"
          description="A clear process so you always know what happens next."
        />

        <div className="relative mt-16">
          {/* connecting line: horizontal on desktop, vertical on mobile */}
          {/* mobile: vertical line */}
          <div className="absolute left-[1.65rem] top-4 h-[calc(100%-2rem)] w-px bg-white/10 lg:hidden" aria-hidden="true" />
          <motion.div
            className="absolute left-[1.65rem] top-4 h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-brand to-ember lg:hidden"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '0px 0px -120px 0px' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            aria-hidden="true"
          />
          {/* desktop: horizontal line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[1.65rem] hidden h-px bg-white/10 lg:block" aria-hidden="true" />
          <motion.div
            className="absolute left-[12.5%] right-[12.5%] top-[1.65rem] hidden h-px origin-left bg-gradient-to-r from-brand to-ember lg:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '0px 0px -120px 0px' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.12} className="flex gap-5 lg:block lg:text-center">
                  <div className="relative z-10 flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-surface font-display text-lg font-bold text-white shadow-[0_14px_30px_-12px_rgba(139,92,246,0.9)] lg:mx-auto">
                    <span className="absolute inset-0 rounded-2xl bg-brand/25" aria-hidden="true" />
                    <span className="relative">{i + 1}</span>
                  </div>
                  <div className="glass min-w-0 flex-1 rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 lg:mt-6 lg:p-6">
                    <h3 className="font-display text-base font-semibold uppercase tracking-[0.12em] text-white">{s.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-white/60">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 flex justify-center">
          <InstagramButton variant="primary">Start Your Project</InstagramButton>
        </Reveal>
      </div>
    </section>
  );
}
