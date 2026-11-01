import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import InstagramIcon from '../components/ui/InstagramIcon';
import { FAQS } from '../lib/content';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../lib/links';

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <div className={`glass overflow-hidden rounded-2xl transition-colors duration-300 ${open ? 'border-brand/40' : ''}`}>
      <h3>
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
        >
          <span className="font-display text-[15px] font-semibold leading-snug text-white sm:text-base">{q}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 ${
              open ? 'rotate-45 border-ember/60 bg-ember/15 text-ember' : 'text-white/70'
            }`}
          >
            <Plus size={16} aria-hidden="true" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-white/65 sm:px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQs"
            title="Questions students often ask"
            description="Can't find your answer? Just message us and we'll be happy to help."
          />
          <Reveal delay={0.12} className="mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-ember transition-colors hover:text-white"
            >
              <InstagramIcon size={18} />
              Ask us on Instagram {INSTAGRAM_HANDLE}
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Item q={f.q} a={f.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
