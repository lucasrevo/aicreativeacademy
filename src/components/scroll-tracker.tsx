"use client";

import { useEffect } from "react";
import { trackScrollDepth, trackCheckoutView } from "@/lib/analytics";

export function ScrollTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fired = new Set<number>();
    const thresholds: Array<25 | 50 | 75 | 100> = [25, 50, 75, 100];

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const viewport = window.innerHeight;
      const full = doc.scrollHeight - viewport;
      if (full <= 0) return;
      const pct = Math.min(100, Math.max(0, (scrollTop / full) * 100));
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackScrollDepth(t);
        }
      }
    };

    let raf = 0;
    const onScrollRaf = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        onScroll();
      });
    };

    window.addEventListener("scroll", onScrollRaf, { passive: true });
    onScroll();

    // IntersectionObserver for #checkout
    let observer: IntersectionObserver | null = null;
    let checkoutFired = false;
    const tryObserve = () => {
      const el = document.getElementById("checkout");
      if (!el) return false;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !checkoutFired) {
              checkoutFired = true;
              trackCheckoutView();
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.25 },
      );
      observer.observe(el);
      return true;
    };

    if (!tryObserve()) {
      // Retry once DOM is fully hydrated / other agents' components mount
      const id = window.setTimeout(tryObserve, 1500);
      return () => {
        window.clearTimeout(id);
        window.removeEventListener("scroll", onScrollRaf);
        observer?.disconnect();
      };
    }

    return () => {
      window.removeEventListener("scroll", onScrollRaf);
      observer?.disconnect();
    };
  }, []);

  return null;
}
