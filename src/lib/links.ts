export const INSTAGRAM_URL = 'https://www.instagram.com/irsha.ai/';
export const INSTAGRAM_HANDLE = '@irsha.ai';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Domains', href: '#domains' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

/** Smooth-scrolls to an in-page section (respects reduced motion and the sticky-header offset). */
export function goToSection(href: string) {
  const el = document.getElementById(href.replace('#', ''));
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  history.replaceState(null, '', href);
}
