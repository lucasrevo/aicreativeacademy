/**
 * AvisBruts — 3-up compact text testimonials.
 * Placed between hero trust badges and ProcessTimeline.
 * Real member quotes — no source tag, just stars + cleaned quote + meta.
 */
type Avis = {
  initials: string;
  avatarStyle: "dark" | "burg" | "gradient" | "gold";
  name: string;
  meta: string;
  quote: string;
};

const avis: Avis[] = [
  {
    initials: "GN",
    avatarStyle: "dark",
    name: "GavaNoah",
    meta: "4 jours après l'achat",
    quote:
      "C'est grave bien expliqué, notamment les vidéos, avec un langage courant qui permet de vite comprendre sans se perdre. Modules clairs et très faciles à appliquer.",
  },
  {
    initials: "GA",
    avatarStyle: "dark",
    name: "gassyrift",
    meta: "20 jours après l'achat",
    quote:
      "Forma claire et précise. J'ai particulièrement apprécié les démos live sur les outils. On est guidé de A à Z.",
  },
  {
    initials: "T",
    avatarStyle: "burg",
    name: "Theo",
    meta: "8 jours après l'achat",
    quote:
      "Le programme est intéressant, c'est cool. Merci beaucoup pour la qualité des vidéos.",
  },
];

const avatarClasses: Record<Avis["avatarStyle"], string> = {
  dark: "bg-[#3a3a3a] text-gold",
  burg: "bg-burgundy text-gold",
  gradient: "bg-gradient-to-br from-gold/50 to-burgundy text-ink",
  gold: "bg-gold text-ink",
};

export function AvisBruts() {
  return (
    <section
      id="avis-bruts"
      className="relative border-t border-white/10 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-center justify-between gap-3 mb-5 md:mb-6">
          <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
            // Ce qu'ils en disent
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            3 retours · membres
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3.5">
          {avis.map((a) => (
            <article
              key={a.name}
              className="relative flex flex-col rounded-xl border border-gold/25 bg-gradient-to-b from-burgundy-deep/30 to-ink/60 p-4 md:p-5 transition-all duration-200 hover:border-gold/55 hover:-translate-y-0.5"
            >
              <div className="mb-3">
                <span className="text-gold text-[13px] tracking-[2px]">
                  ★★★★★
                </span>
              </div>

              <p className="text-white text-[13.5px] leading-[1.45] flex-grow mb-3.5">
                <span className="text-gold/70">« </span>
                {a.quote}
                <span className="text-gold/70"> »</span>
              </p>

              <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.07]">
                <div
                  className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full mono text-[10px] font-bold ${avatarClasses[a.avatarStyle]}`}
                >
                  {a.initials}
                </div>
                <div>
                  <div className="text-white text-[12px] font-semibold leading-tight">
                    {a.name}
                  </div>
                  <div className="mono text-[9px] uppercase tracking-[0.18em] text-white/45 mt-0.5">
                    {a.meta}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
