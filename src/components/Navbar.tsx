import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import { InstagramButton } from './ui/Button';
import { NAV_LINKS, goToSection } from '../lib/links';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('#home');
  // Section to scroll to once the mobile menu has fully closed (unmounting mid-scroll cancels the scroll).
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setCurrent(`#${e.target.id}`));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/8 bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" aria-label="IRSHA home" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={current === l.href ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  current === l.href ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <InstagramButton variant="primary" arrow={false} className="min-h-11! px-5! py-2! text-sm">
              Connect on Instagram
            </InstagramButton>
          </div>
          <button
            type="button"
            className="glass flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence
        onExitComplete={() => {
          if (pendingHref.current) {
            const href = pendingHref.current;
            pendingHref.current = null;
            goToSection(href);
          }
        }}
      >
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      pendingHref.current = l.href;
                      setOpen(false);
                    }}
                    className={`block rounded-xl px-4 py-3.5 text-base font-medium ${
                      current === l.href ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <InstagramButton className="w-full" onClick={() => setOpen(false)}>
                  Connect on Instagram
                </InstagramButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
