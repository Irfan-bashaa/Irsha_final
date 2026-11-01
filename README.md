# IRSHA — Final Year Project Studio

Standalone marketing site (React + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide).
Separate from any other IRSHA website: own folder, own dependencies, own build output.

## Commands
- `npm install`
- `npm run dev` — local dev server
- `npm run build` — type-check + production build into `dist/` (static files, deploy anywhere)
- `npm run preview` — serve the production build locally

## Where things are
- `src/lib/links.ts` — Instagram URL/handle and nav links (single source of truth)
- `src/lib/content.ts` — all copy: services, domains, steps, reasons, FAQs
- `src/components/hero/` — 3D hero slider (CSS 3D transforms + Framer Motion springs)
- `src/sections/` — page sections

## Notes
- The hero 3D is built with CSS 3D transforms, not Spline (no Spline scene URL was available).
- Respects `prefers-reduced-motion`; falls back to a flat layout if CSS 3D is unsupported.
