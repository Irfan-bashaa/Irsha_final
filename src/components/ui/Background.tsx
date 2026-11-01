/** Fixed ambient layer: soft glows, a faint grid and a few slow-floating orbs. Purely decorative. */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand/20 blur-[120px]" />
      <div className="absolute -right-48 top-1/3 h-[30rem] w-[30rem] rounded-full bg-ember/10 blur-[130px]" />
      <div className="bg-grid absolute inset-0" />

      <div className="absolute left-[8%] top-[22%] h-3 w-3 animate-float rounded-full bg-brand/70 shadow-[0_0_24px_6px_rgba(139,92,246,0.45)]" />
      <div className="absolute right-[12%] top-[16%] hidden h-2.5 w-2.5 animate-float-slow rounded-full bg-ember/80 shadow-[0_0_22px_6px_rgba(251,146,60,0.4)] sm:block" />
      <div className="absolute bottom-[18%] left-[16%] hidden h-2 w-2 animate-float-slow rounded-full bg-white/60 shadow-[0_0_18px_4px_rgba(255,255,255,0.25)] sm:block" />
    </div>
  );
}
