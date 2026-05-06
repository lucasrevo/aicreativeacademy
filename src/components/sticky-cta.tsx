"use client";

import { useEffect, useState } from "react";

export function StickyCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [inCheckout, setInCheckout] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Hide sticky CTA when the #checkout section is in view, so it doesn't
    // cover the Whop Pay button.
    const checkoutEl = document.getElementById("checkout");
    let observer: IntersectionObserver | undefined;
    if (checkoutEl) {
      observer = new IntersectionObserver(
        ([entry]) => setInCheckout(entry.isIntersecting),
        { threshold: 0.15 }
      );
      observer.observe(checkoutEl);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = scrolled && !inCheckout;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 pb-3 md:pb-5">
        <a
          href="#checkout"
          className="flex items-center justify-between gap-4 rounded-xl border border-gold/40 bg-ink/95 backdrop-blur px-4 md:px-6 py-3 md:py-4 shadow-[0_20px_60px_-10px_rgba(245,197,24,0.25)]"
        >
          <div className="flex flex-col">
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
              Offre de lancement
            </span>
            <span className="display text-xl md:text-2xl text-white">
              AI CREATIVE ACADEMY <span className="text-white/40">—</span>{" "}
              <span className="text-gold">97€</span>{" "}
              <span className="text-white/40 line-through text-base md:text-lg font-normal align-baseline">
                197€
              </span>
            </span>
          </div>
          <span className="group inline-flex items-center gap-2 bg-gold text-ink px-4 md:px-6 py-3 rounded-xl mono text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold">
            Je rejoins
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </a>
      </div>
    </div>
  );
}
