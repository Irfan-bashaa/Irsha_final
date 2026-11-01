import type { CSSProperties, ReactNode } from 'react';
import { ArrowRight, Check, Database, Server } from 'lucide-react';

/* Each visual is built from SVG + CSS (no image files), so nothing can 404 and it stays light on mobile. */

/** Depth lift is driven by --lift (1 on the front card, 0 on side cards) so rotated side cards stay flat and never poke through the front card. */
const depth = (z: number): CSSProperties => ({
  transform: `translateZ(calc(var(--lift, 1) * ${z}px))`,
  transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
});

function Chip({
  z,
  className,
  delay = 0,
  children,
}: {
  z: number;
  className: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <div className={`absolute ${className}`} style={depth(z)}>
      <div
        className="glass animate-float flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-medium text-white/90"
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
}

/* ───────────── Card 1 · AI & Machine Learning ───────────── */

const LAYERS = [4, 5, 5, 3];
const XS = [44, 124, 204, 280];
const nodeY = (layer: number, i: number) => 100 + (i - (LAYERS[layer] - 1) / 2) * 33;

export function AIVisual() {
  const edges: { x1: number; y1: number; x2: number; y2: number; live: boolean }[] = [];
  let n = 0;
  for (let l = 0; l < LAYERS.length - 1; l++) {
    for (let a = 0; a < LAYERS[l]; a++) {
      for (let b = 0; b < LAYERS[l + 1]; b++) {
        edges.push({ x1: XS[l], y1: nodeY(l, a), x2: XS[l + 1], y2: nodeY(l + 1, b), live: n++ % 5 === 0 });
      }
    }
  }

  return (
    <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
      <div className="absolute inset-0" style={depth(24)}>
        <svg viewBox="0 0 324 200" className="h-full w-full" role="img" aria-label="Neural network illustration">
          {edges.map((e, i) => (
            <line
              key={i}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke={e.live ? '#fb923c' : '#a78bfa'}
              strokeOpacity={e.live ? 0.85 : 0.22}
              strokeWidth={e.live ? 1.3 : 1}
              strokeDasharray={e.live ? '4 8' : undefined}
              className={e.live ? 'animate-flow' : undefined}
            />
          ))}
          {LAYERS.map((count, l) =>
            Array.from({ length: count }, (_, i) => (
              <circle
                key={`${l}-${i}`}
                cx={XS[l]}
                cy={nodeY(l, i)}
                r={l === 0 ? 6 : l === LAYERS.length - 1 ? 8 : 6.5}
                fill={l === 0 ? '#fb923c' : l === LAYERS.length - 1 ? '#ffffff' : '#8b5cf6'}
                stroke="#0a0a0e"
                strokeWidth={2}
                className="svg-box animate-node"
                style={{ animationDelay: `${(l * 5 + i) * 0.17}s` }}
              />
            )),
          )}
        </svg>
      </div>

      <Chip z={70} className="left-0 top-0" delay={0.2}>
        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
        <div>
          <div>Training model</div>
          <div className="mt-1.5 h-1 w-20 overflow-hidden rounded-full bg-white/15">
            <div className="h-full animate-progress rounded-full bg-brand" />
          </div>
        </div>
      </Chip>
      <Chip z={80} className="bottom-0 right-0" delay={1.1}>
        <Check size={13} className="text-emerald-300" aria-hidden="true" />
        Prediction ready
      </Chip>
    </div>
  );
}

/* ───────────── Card 2 · Web & Full-Stack ───────────── */

const BARS = [46, 70, 54, 86, 62, 94, 72];

export function WebVisual() {
  return (
    <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
      <div
        className="absolute inset-x-1 bottom-4 top-3 rounded-xl border border-white/12 bg-[#0d0d14] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]"
        style={depth(20)}
      >
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 rounded-md bg-white/8 px-2 py-0.5 font-mono text-[9px] text-white/50">
            yourproject.app
          </span>
        </div>
        <div className="flex gap-2.5 p-2.5">
          <div className="flex w-7 flex-col gap-2 pt-0.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-1.5 rounded-full ${i === 0 ? 'bg-brand' : 'bg-white/15'}`} />
            ))}
          </div>
          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-3 gap-1.5">
              {['bg-brand/70', 'bg-ember/70', 'bg-white/35'].map((c, i) => (
                <div key={i} className="rounded-md border border-white/8 bg-white/[0.04] p-1.5">
                  <div className="h-1 w-6 rounded-full bg-white/25" />
                  <div className={`mt-2 h-1.5 w-8 rounded-full ${c}`} />
                </div>
              ))}
            </div>
            <div className="mt-2 flex h-[88px] items-end gap-1.5 rounded-md border border-white/8 bg-white/[0.03] p-2">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="origin-bottom flex-1 animate-bar rounded-sm bg-gradient-to-t from-brand-deep to-brand"
                  style={{ height: `${h}%`, animationDelay: `${i * 0.28}s` }}
                />
              ))}
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <Chip z={75} className="-right-1 top-0" delay={0.4}>
        <Server size={13} className="text-brand" aria-hidden="true" />
        REST API
      </Chip>
      <Chip z={85} className="-left-1 bottom-0" delay={1.3}>
        <Database size={13} className="text-ember" aria-hidden="true" />
        Database
      </Chip>
    </div>
  );
}

/* ───────────── Card 3 · Java, Python & Software ───────────── */

const kw = 'text-[#c4b5fd]';
const ty = 'text-[#fdba74]';
const dim = 'text-white/40';

export function CodeVisual() {
  return (
    <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
      <div
        className="absolute inset-x-1 bottom-9 top-2 rounded-xl border border-white/12 bg-[#0d0d14] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)]"
        style={depth(20)}
      >
        <div className="flex items-center gap-1 border-b border-white/8 px-2 pt-1.5 text-[10px]">
          <span className="rounded-t-md bg-white/10 px-2.5 py-1 font-mono text-white/90">Project.java</span>
          <span className="px-2.5 py-1 font-mono text-white/35">model.py</span>
        </div>
        <pre className="overflow-hidden px-3 py-2.5 font-mono text-[10.5px] leading-[1.65] text-white/80">
          <span className={dim}>{'// your idea, implemented'}</span>
          {'\n'}
          <span className={kw}>public class</span> <span className={ty}>Project</span> {'{'}
          {'\n'}
          {'  '}
          <span className={kw}>private</span> <span className={ty}>Database</span> db;
          {'\n\n'}
          {'  '}
          <span className={kw}>public void</span> run() {'{'}
          {'\n'}
          {'    '}db.connect();
          {'\n'}
          {'    '}
          <span className={ty}>System</span>.out.println(<span className="text-[#fdba74]">"Ready"</span>);
          {'\n'}
          {'  }'}
          {'\n'}
          {'}'}
        </pre>
      </div>

      <div className="absolute inset-x-3 bottom-0 flex items-center justify-between" style={depth(55)}>
        {['UI', 'API', 'Logic'].map((label, i) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className="glass rounded-lg px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-white/85">
              {label}
            </span>
            {i < 2 && <ArrowRight size={12} className="text-ember" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <Chip z={90} className="-right-2 top-[42%]" delay={0.7}>
        <span className="font-mono text-[10px] leading-snug">
          <span className={kw}>def</span> predict(x):
          <br />
          {'  '}
          <span className={kw}>return</span> model(x)
        </span>
      </Chip>
    </div>
  );
}

export type Slide = {
  id: string;
  label: string;
  blurb: string;
  tags: string[];
  accent: string;
  Visual: () => ReactNode;
};

export const slides: Slide[] = [
  {
    id: 'ai',
    label: 'AI & MACHINE LEARNING',
    blurb: 'Neural networks, models and intelligent dashboards.',
    tags: ['Python', 'Deep Learning', 'Data'],
    accent: 'from-brand/35 via-brand/10',
    Visual: AIVisual,
  },
  {
    id: 'web',
    label: 'WEB & FULL-STACK DEVELOPMENT',
    blurb: 'Modern interfaces connected to APIs and databases.',
    tags: ['React', 'APIs', 'Database'],
    accent: 'from-ember/30 via-brand/10',
    Visual: WebVisual,
  },
  {
    id: 'software',
    label: 'JAVA, PYTHON & SOFTWARE PROJECTS',
    blurb: 'Clean code and clear architecture, explained properly.',
    tags: ['Java', 'Python', 'Architecture'],
    accent: 'from-brand/30 via-ember/10',
    Visual: CodeVisual,
  },
];
