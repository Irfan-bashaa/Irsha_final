import { motion, useReducedMotion } from 'framer-motion';
import Button, { InstagramButton } from '../ui/Button';
import HeroSlider from './HeroSlider';

export default function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="home" className="relative overflow-x-clip pb-14 pt-24 sm:pb-24 sm:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-16 lg:pt-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.12fr_1fr] lg:gap-6">
        <div className="text-center lg:text-left">
          <motion.span
            {...enter(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_10px_2px_rgba(251,146,60,0.7)]" />
            IRSHA — Final Year Project Studio
          </motion.span>

          <motion.h1
            {...enter(0.15)}
            className="mt-6 font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[3.3rem] xl:text-[3.6rem]"
          >
            Your Project Idea.
            <br />
            <span className="text-ember lg:whitespace-nowrap">Our Technical Team.</span>
          </motion.h1>

          <motion.p
            {...enter(0.28)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg lg:mx-0"
          >
            From project concepts to working demonstrations, get technical guidance and development support for your
            B.Tech final-year project.
          </motion.p>

          <motion.div
            {...enter(0.4)}
            className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:flex-row sm:items-center lg:justify-start"
          >
            <Button href="#services" variant="primary">
              Explore Project Support
            </Button>
            <InstagramButton variant="ghost" arrow={false}>
              Connect With Us
            </InstagramButton>
          </motion.div>

          <motion.p {...enter(0.52)} className="mt-7 text-sm text-white/40">
            CSE · IT · AI &amp; ML and related branches
          </motion.p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSlider />
        </motion.div>
      </div>
    </section>
  );
}
