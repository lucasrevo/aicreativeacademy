"use client";

import { useEffect } from "react";

const PLAN_ID = process.env.NEXT_PUBLIC_WHOP_LT_PLAN_ID || "plan_ntpJj1VOt5KTM";
const HOSTED_CHECKOUT_URL = `https://whop.com/checkout/${PLAN_ID}`;
const LOADER_SRC = "https://js.whop.com/static/checkout/loader.js";

export function WhopCheckout() {
  useEffect(() => {
    // Inject Whop's official vanilla loader once. The loader scans the DOM
    // for [data-whop-checkout-plan-id] divs and renders the embed in-place.
    if (!document.querySelector(`script[src="${LOADER_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = LOADER_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="whop-checkout"
      className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0A0405] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center justify-between bg-[#120708] border-b border-white/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
          Sécurisé par Whop
        </span>
        <span>Paiement unique 97€</span>
      </div>

      <div className="bg-[#0A0405] p-2 sm:p-3">
        {/* Whop vanilla checkout embed — the loader script populates this div */}
        <div
          data-whop-checkout-plan-id={PLAN_ID}
          data-whop-checkout-theme="dark"
          style={{ height: "fit-content", overflow: "hidden", maxWidth: "100%" }}
        />
      </div>

      {/* Fallback: hosted checkout if the embed fails to load */}
      <div className="border-t border-white/10 bg-[#0A0405]/60 px-5 py-4 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-2">
          Problème avec le paiement ci-dessus ?
        </p>
        <a
          href={HOSTED_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-white/80 font-mono text-xs uppercase tracking-[0.22em] underline decoration-white/40 hover:decoration-white transition"
        >
          Payer directement sur Whop →
        </a>
      </div>
    </div>
  );
}
