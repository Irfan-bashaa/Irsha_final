import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides, type Slide } from './SlideVisuals';
import { supports3D, useMediaQuery } from '../../lib/hooks';

const SPRING = { type: 'spring', stiffness: 125, damping: 19, mass: 0.9 } as const;
const SWIPE_PX = 45;

/** -1 = left, 0 = centre, 1 = right (wraps around for 3 cards). */
function offsetOf(index: number, active: number, total: number) {
  return ((index - active + total + 1) % total) - 1;
}

function poseFor(offset: number, flat: boolean) {
  if (offset === 0) return { x: '0%', z: 0, scale: 1, rotateY: 0 };
  return {
    x: `${offset * 66}%`,
    z: flat ? 0 : -150,
    scale: 0.76,
    rotateY: flat ? 0 : offset * -30,
  };
}

type CardProps = {
  slide: Slide;
  index: number;
  offset: number;
  total: number;
  flat: boolean;
  instant: boolean;
  canTilt: boolean;
  onSelect: () => void;
};

function SlideCard({ slide, index, offset, total, flat, instant, canTilt, onSelect }: CardProps) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 160, damping: 18 });
  const rotateYTilt = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 160, damping: 18 });
  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.17), transparent 58%)`;

  const isActive = offset === 0;
  const { Visual } = slide;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!canTilt || !isActive || e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      aria-hidden={!isActive}
      aria-label={`Slide ${index + 1} of ${total}: ${slide.label}`}
      onClick={() => !isActive && onSelect()}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={false}
      animate={poseFor(offset, flat)}
      transition={instant ? { duration: 0 } : SPRING}
      className={`absolute left-1/2 top-1/2 ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
      style={{
        width: 'var(--card-w)',
        height: 'var(--card-h)',
        marginLeft: 'calc(var(--card-w) / -2)',
        marginTop: 'calc(var(--card-h) / -2)',
        transformStyle: 'preserve-3d',
        pointerEvents: 'auto',
        zIndex: isActive ? 3 : 2,
      }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d', rotateX: canTilt ? rotateX : 0, rotateY: canTilt ? rotateYTilt : 0 }}
      >
        <div
          className="relative flex h-full w-full flex-col rounded-[28px] border border-white/12 bg-[#0e0e15] p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.03)_inset] sm:p-5"
          style={{ transformStyle: 'preserve-3d', ['--lift' as string]: isActive ? 1 : 0 }}
        >
          <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${slide.accent} to-transparent`} />

          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50" style={{ transform: 'translateZ(calc(var(--lift) * 30px))', transition: 'transform 0.6s' }}>
            <span>0{index + 1} / 0{total}</span>
            <span className="rounded-full border border-white/15 px-2 py-0.5 text-white/60">IRSHA</span>
          </div>

          <div className="relative mt-3 min-h-0 flex-1" style={{ transformStyle: 'preserve-3d' }}>
            <Visual />
          </div>

          <div className="mt-3" style={{ transform: 'translateZ(calc(var(--lift) * 40px))', transition: 'transform 0.6s' }}>
            <h3 className="font-display text-[15px] font-bold leading-snug tracking-wide text-white sm:text-base">
              {slide.label}
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/55">{slide.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {slide.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/12 bg-white/[0.05] px-2.5 py-1 text-[10px] font-medium text-white/70">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {canTilt && isActive && (
            <motion.div className="pointer-events-none absolute inset-0 rounded-[28px]" style={{ background: glare }} />
          )}

          {/* Dims the cards that sit behind the active one (cheaper than animating a CSS filter). */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[28px] bg-black"
            initial={false}
            animate={{ opacity: isActive ? 0 : 0.5 }}
            transition={instant ? { duration: 0 } : { duration: 0.5 }}
            style={{ transform: 'translateZ(calc(var(--lift) * 100px + 1px))' }}
          />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() ?? false;
  const small = useMediaQuery('(max-width: 639px)');
  const [has3D] = useState(supports3D);
  const total = slides.length;

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  const start = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    start.current = { x: e.clientX, y: e.clientY };
    dragged.current = false;
  };
  const onUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) > SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      dragged.current = true;
      if (dx < 0) next();
      else prev();
    }
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const current = slides[active];

  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="IRSHA project domains"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={() => (start.current = null)}
        className="relative mx-auto h-[calc(var(--card-h)+3.5rem)] w-full select-none rounded-3xl [--card-h:calc(var(--card-w)*1.3)] [--card-w:min(64vw,260px)] [touch-action:pan-y] sm:[--card-w:300px] lg:[--card-w:330px]"
        style={{ perspective: has3D ? '1500px' : undefined }}
      >
        {/* floor shadow */}
        <div className="pointer-events-none absolute bottom-1 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[90px]" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {slides.map((slide, i) => (
            <SlideCard
              key={slide.id}
              slide={slide}
              index={i}
              total={total}
              offset={offsetOf(i, active, total)}
              flat={!has3D}
              instant={reduce}
              canTilt={has3D && !small && !reduce}
              onSelect={() => !dragged.current && setActive(i)}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-4 sm:mt-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous card"
          className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition hover:-translate-x-0.5 hover:bg-white/10 active:scale-95"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div className="min-w-0 flex-1 text-center" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">{current.label}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-2.5 flex items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.label}`}
                aria-current={i === active}
                className="flex h-8 items-center px-1"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-ember' : 'w-2 bg-white/25 hover:bg-white/45'}`} />
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next card"
          className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition hover:translate-x-0.5 hover:bg-white/10 active:scale-95"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
