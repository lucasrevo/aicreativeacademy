import Image from "next/image";

/**
 * Reviews — static 2-up Skool review screenshots.
 * Temporary while waiting for video testimonials.
 * When videos land: bring back <Testimonials /> in page.tsx (it's preserved).
 */
const reviews = [
  {
    src: "/testimonials/review-01.png",
    name: "Flavio Pr",
    alt: "Flavio — 1ers résultats après 72H : 200€ générés",
  },
  {
    src: "/testimonials/review-02.png",
    name: "Liam H.",
    alt: "Liam — Ça commence à printer, 1K/day soon",
  },
];

export function Reviews() {
  return (
    <section id="temoignages" className="relative border-t border-white/10 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-8 md:mb-10">
          <h2
            className="display text-white leading-[0.9] text-balance"
            style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)" }}
          >
            Ils l'ont fait <span className="text-gold glow-gold">avant toi.</span>
          </h2>
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/50 max-w-xs">
            Retours membres · Skool privé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {reviews.map((r) => (
            <figure
              key={r.src}
              className="relative border border-gold/25 bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(245,197,24,0.25)] hover:border-gold/60 transition-colors"
            >
              <Image
                src={r.src}
                alt={r.alt}
                width={1200}
                height={400}
                className="w-full h-auto object-contain"
              />
            </figure>
          ))}
        </div>

        <p className="mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/50 mt-6 md:mt-8 text-center">
          Screenshots réels · communauté AI CREATIVE ACADEMY
        </p>
      </div>
    </section>
  );
}
