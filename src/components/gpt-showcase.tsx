const sansRows = [
  { icon: "🧪", text: "T'écris tes prompts" },
  { icon: "🧬", text: "Avatar instable" },
  { icon: "💸", text: "×5 crédits cramés" },
];

const avecRows = [
  { icon: "🤖", text: "L'agent prompt pour toi" },
  { icon: "🔒", text: "Avatar verrouillé" },
  { icon: "💰", text: "−97% de crédits" },
];

export function GptShowcase() {
  return (
    <section
      id="gpt"
      className="relative border-t border-gold/30 bg-ink overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-16">
        {/* Card wrapper */}
        <div className="relative rounded-2xl border border-gold/40 bg-gradient-to-b from-burgundy-deep/30 via-ink to-ink p-5 md:p-8 shadow-[0_30px_80px_-30px_rgba(245,197,24,0.35)]">
          {/* Gift ribbon badge — floating on top-right corner, rotated */}
          <div className="absolute -top-3 -right-2 md:-top-4 md:-right-3 z-20 pointer-events-none">
            <div className="relative rotate-[10deg]">
              {/* Ribbon tail — small triangles giving the bandeau feel */}
              <div className="absolute -bottom-1 left-2 w-0 h-0 border-t-[8px] border-l-[8px] border-t-burgundy-deep border-l-transparent" />
              <div className="absolute -bottom-1 right-2 w-0 h-0 border-t-[8px] border-r-[8px] border-t-burgundy-deep border-r-transparent" />
              {/* Main badge */}
              <div className="relative bg-gradient-to-br from-gold via-gold-soft to-gold text-ink px-3.5 md:px-5 py-1.5 md:py-2 rounded-md uppercase tracking-[0.24em] border-2 border-ink/20 shadow-[0_10px_24px_-4px_rgba(245,197,24,0.55)] flex items-center gap-1.5">
                <span className="text-sm md:text-base">🎁</span>
                <strong className="display text-[11px] md:text-sm font-black tracking-[0.22em]">
                  OFFERT
                </strong>
              </div>
            </div>
          </div>

          {/* Agent IA pill */}
          <div className="flex items-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-burgundy-deep/80 border border-gold/40 text-gold mono text-[9px] md:text-[10px] uppercase tracking-[0.22em] font-black px-2.5 py-1 rounded-full">
              🤖 Agent IA
            </span>
          </div>

          {/* Title */}
          <h2
            className="display text-white leading-[0.88]"
            style={{ fontSize: "clamp(2rem, 7vw, 4rem)" }}
          >
            LE GPT <span className="text-gold glow-gold">AI CREATIVE ACADEMY</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-white/75 text-sm md:text-base leading-snug max-w-xl">
            Tu lui parles <strong className="text-gold">en français</strong>, il{" "}
            <strong className="text-gold">écrit les prompts à ta place</strong> —
            calibré Nano Banana + Kling, celui qu'on utilise tous les jours chez AI CREATIVE ACADEMY.
          </p>

          {/* Hook — big */}
          <div className="mt-6 md:mt-7 border-l-4 border-gold pl-4 md:pl-5">
            <div
              className="display text-white leading-[0.95]"
              style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
            >
              Pourquoi ça te fait gagner{" "}
              <span className="text-gold glow-gold">3h par jour</span> ?
            </div>
          </div>

          {/* BEFORE / AFTER — heaven vs hell framing */}
          <div className="mt-5 md:mt-6 grid grid-cols-2 gap-2 md:gap-3 relative">
            {/* SANS — hell */}
            <div className="relative rounded-xl border border-red-500/50 bg-gradient-to-b from-red-900/30 via-red-950/20 to-ink/80 overflow-hidden">
              {/* Dramatic header */}
              <div className="px-3 md:px-4 py-2.5 md:py-3 border-b border-red-500/30 bg-red-500/10">
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg">😩</span>
                  <div>
                    <div className="mono text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-red-400 font-black leading-none">
                      Sans nous
                    </div>
                    <div className="mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-red-400/60 mt-0.5">
                      Ta réalité actuelle
                    </div>
                  </div>
                </div>
              </div>
              <ul className="p-3 md:p-4 space-y-2">
                {sansRows.map((r) => (
                  <li
                    key={r.text}
                    className="flex items-start gap-1.5 md:gap-2 text-white/65 text-[11px] md:text-sm line-through decoration-red-500/50 leading-snug"
                  >
                    <span className="text-base w-5 shrink-0 text-center grayscale-[30%]">
                      {r.icon}
                    </span>
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
              {/* subtle fire at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none" />
            </div>

            {/* AVEC — heaven */}
            <div className="relative rounded-xl border-2 border-gold/70 bg-gradient-to-b from-gold/15 via-gold/[0.04] to-ink/60 overflow-hidden shadow-[0_0_40px_-10px_rgba(245,197,24,0.5)]">
              {/* Heavenly header */}
              <div className="px-3 md:px-4 py-2.5 md:py-3 border-b border-gold/40 bg-gradient-to-r from-gold/20 to-transparent">
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg">✨</span>
                  <div>
                    <div className="mono text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-gold font-black leading-none">
                      Avec nous
                    </div>
                    <div className="mono text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-gold/70 mt-0.5">
                      Dès le jour 1
                    </div>
                  </div>
                </div>
              </div>
              <ul className="p-3 md:p-4 space-y-2">
                {avecRows.map((r) => (
                  <li
                    key={r.text}
                    className="flex items-start gap-1.5 md:gap-2 text-white text-[11px] md:text-sm font-semibold leading-snug"
                  >
                    <span className="text-base w-5 shrink-0 text-center">
                      {r.icon}
                    </span>
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
              {/* subtle gold halo at top */}
              <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-gold/15 to-transparent pointer-events-none" />
            </div>

            {/* VS badge floating in the middle */}
            <div className="hidden md:flex absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink border-2 border-gold items-center justify-center shadow-[0_0_30px_rgba(245,197,24,0.5)] z-10">
              <span className="mono text-[10px] uppercase tracking-[0.18em] text-gold font-black">
                VS
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
