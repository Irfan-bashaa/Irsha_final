import Reveal from '../components/ui/Reveal';
import { InstagramButton } from '../components/ui/Button';

export default function FinalCta() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-[100px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-ember/20 blur-[110px]" aria-hidden="true" />

            {/* decorative floating 3D-style frames */}
            <div className="pointer-events-none absolute left-[7%] top-[18%] hidden h-20 w-20 animate-float rounded-2xl border border-white/15 bg-white/[0.04] [transform:rotate(14deg)] md:block" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-[16%] right-[8%] hidden h-14 w-14 animate-float-slow rounded-xl border border-ember/40 bg-ember/10 md:block" aria-hidden="true" />
            <div className="pointer-events-none absolute right-[14%] top-[14%] hidden h-24 w-24 animate-spin-slow rounded-full border border-dashed border-brand/50 md:block" aria-hidden="true" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Build <span className="text-ember">Something Great.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                Have a final-year project idea? Let&apos;s discuss how we can turn it into a working project.
              </p>
              <div className="mt-10 flex justify-center">
                <InstagramButton variant="ember" className="min-h-14 px-8 text-base">
                  Connect With IRSHA
                </InstagramButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
