import Logo from '../components/ui/Logo';
import InstagramIcon from '../components/ui/InstagramIcon';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV_LINKS } from '../lib/links';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" aria-label="IRSHA home">
            <Logo />
          </a>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/55">
            Your Project Idea. Our Technical Expertise.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-10 items-center text-[15px] text-white/65 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Instagram</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 text-[15px] font-medium text-white transition-all hover:border-ember/50 hover:bg-ember/10"
          >
            <InstagramIcon size={18} className="text-ember" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 text-center text-[13px] text-white/40 sm:flex-row sm:justify-between sm:px-8 sm:text-left">
          <p>© {new Date().getFullYear()} IRSHA. All rights reserved.</p>
          <p>Final Year Project Studio</p>
        </div>
      </div>
    </footer>
  );
}
