const badges = [
  { label: "VU SUR INSTAGRAM", sub: "@byrevo.ai" },
  { label: "100+ EARLY ACCESS", sub: "Places lancement" },
  { label: "LANCÉ PAR REVO LAB", sub: "2026" },
];

export function TrustBadges() {
  return (
    <section className="relative border-t border-white/10 bg-ink/80">
      <div className="mx-auto max-w-6xl px-4 py-5 md:py-7">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="border border-burgundy-bright/40 bg-burgundy-deep/20 px-2 md:px-4 py-2.5 md:py-3 text-center"
            >
              <div className="mono text-[9px] md:text-[11px] uppercase tracking-[0.22em] text-gold leading-tight">
                {b.label}
              </div>
              <div className="mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1 leading-tight">
                {b.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
