const lines = [
  { item: "Formation · 7 modules · 21 leçons", value: "829€" },
  { item: "4 bonus (GPT, ManyChat, Seedance, IG)", value: "488€" },
  { item: "Prompts & templates + mises à jour à vie", value: "97€" },
];

export function ValueStack() {
  return (
    <section id="modules" className="relative border-t border-gold/20 bg-gradient-to-b from-ink to-burgundy-deep/30 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2
          className="display text-white leading-[0.95] text-center"
          style={{ fontSize: "clamp(2rem, 6.5vw, 3.75rem)" }}
        >
          Le vrai prix de ce que tu{" "}
          <span className="text-gold glow-gold">reçois.</span>
        </h2>

        <div className="mt-10 border border-white/10 bg-ink/60 backdrop-blur rounded-xl overflow-hidden">
          <ul>
            {lines.map((r) => (
              <li
                key={r.item}
                className="flex items-center justify-between gap-4 px-5 md:px-7 py-4 md:py-5 border-b border-white/10"
              >
                <span className="text-white/90 text-sm md:text-base">
                  {r.item}
                </span>
                <span className="mono text-sm md:text-base text-white/40 line-through shrink-0 tabular-nums">
                  {r.value}
                </span>
              </li>
            ))}
          </ul>

          {/* Total slashed */}
          <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-4 md:py-5 bg-white/[0.03] border-b-2 border-gold/40">
            <span className="mono text-xs md:text-sm uppercase tracking-[0.24em] text-white">
              Valeur totale
            </span>
            <span className="display text-2xl md:text-4xl text-white/50 line-through tabular-nums">
              1 414€
            </span>
          </div>

          {/* Your price */}
          <div className="flex items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 bg-gradient-to-r from-gold/15 to-transparent">
            <span className="mono text-xs md:text-sm uppercase tracking-[0.24em] text-gold font-bold">
              Ton prix
            </span>
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="mono text-sm md:text-base text-white/40 line-through tabular-nums">
                197€
              </span>
              <span className="display text-4xl md:text-6xl text-gold glow-gold tabular-nums">
                97€
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 mono text-[10px] md:text-xs uppercase tracking-[0.24em] text-white/50 text-center">
          Paiement unique · Accès immédiat · Garantie 14 jours
        </p>
      </div>
    </section>
  );
}
