"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Testimonials — 3-slide animated carousel.
 * Structure is locked for video-ready: tomorrow, swap `image` → `video` per slot.
 * Today fallback: screenshots (Stripe volume, Skool post, GPT card).
 */
type Slide = {
  name: string;
  handle: string;
  quote: string;
  image?: string;
  video?: string;
};

const slides: Slide[] = [
  {
    name: "Liam H.",
    handle: "@liam · ecom + avatar IA",
    quote: "Ça commence à printer — 2 semaines, on vise le 1K/day.",
    image: "/testimonials/slide-03.png",
  },
  {
    name: "Résultat membre",
    handle: "Stripe · mois 1",
    quote: "+38,83 % de volume net dès le premier mois d'activation.",
    image: "/testimonials/slide-02.png",
  },
  {
    name: "Agent GPT REVO",
    handle: "Bonus inclus · −97 % crédits",
    quote: "L'agent calibré Nano Banana + Kling qu'on utilise tous les jours.",
    image: "/testimonials/slide-01.png",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="temoignages" className="relative border-t border-white/10 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap mb-8 md:mb-10">
          <h2
            className="display text-white leading-[0.9] text-balance"
            style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)" }}
          >
            Ils l'ont fait <span className="text-gold glow-gold">avant toi.</span>
          </h2>
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/50 max-w-xs">
            3 membres · preuves réelles
          </p>
        </div>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-center">
          {/* Slide stage */}
          <div className="relative aspect-[9/16] md:aspect-[4/5] w-full max-w-md md:max-w-none mx-auto overflow-hidden rounded-2xl md:rounded-3xl border border-gold/25 bg-gradient-to-b from-burgundy-deep/60 to-ink">
            {slides.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700 ease-out"
                style={{ opacity: i === active ? 1 : 0 }}
                aria-hidden={i !== active}
              >
                {s.video ? (
                  <video
                    src={s.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : s.image ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink p-4 md:p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(min-width: 768px) 45vw, 90vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : null}

                {/* replace badge */}
                {!s.video && (
                  <span className="absolute top-3 right-3 z-10 mono text-[9px] uppercase tracking-[0.22em] text-gold bg-ink/80 backdrop-blur px-2 py-1 border border-gold/40">
                    VIDÉO DEMAIN
                  </span>
                )}
              </div>
            ))}

            {/* progress dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-gold" : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Quote side */}
          <div className="rise">
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
              // TÉMOIGNAGE {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>

            <blockquote
              key={active}
              className="display text-white mt-4 leading-[1.05] text-balance fade"
              style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.25rem)" }}
            >
              « {slides[active].quote} »
            </blockquote>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold/40 to-burgundy flex items-center justify-center mono text-xs text-ink font-bold">
                {slides[active].name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{slides[active].name}</div>
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  {slides[active].handle}
                </div>
              </div>
            </div>

            {/* slide chips */}
            <div className="mt-8 flex gap-2 flex-wrap">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`mono text-[10px] uppercase tracking-[0.2em] px-3 py-2 border transition-colors ${
                    i === active
                      ? "border-gold text-gold bg-gold/10"
                      : "border-white/15 text-white/60 hover:border-white/40"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} · {s.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
