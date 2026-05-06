import posthog from "posthog-js";

type Props = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function pushDataLayer(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...(props || {}) });
}

function gtagEvent(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", event, props || {});
}

function capture(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  pushDataLayer(event, props);
  gtagEvent(event, props);
  try {
    const ph = posthog as unknown as { __loaded?: boolean; capture: (e: string, p?: Props) => void };
    if (!ph.__loaded) return;
    ph.capture(event, props);
  } catch {
    // no-op
  }
}

export function trackCTAClick(ctaId: string, context?: string) {
  capture("cta_click", { cta_id: ctaId, context });
}

export function trackScrollDepth(percent: 25 | 50 | 75 | 100) {
  capture("scroll_depth", { percent });
}

export function trackCheckoutView() {
  capture("checkout_view");
}

export function trackPurchase(amount: number, plan: string) {
  capture("purchase", { amount, plan, currency: "EUR" });
}

export function trackFAQOpen(question: string) {
  capture("faq_open", { question });
}
