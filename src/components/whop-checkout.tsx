"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { useEffect, useState } from "react";
import { createCheckout } from "@/app/actions/checkout";

const HOSTED_CHECKOUT_URL = "https://whop.com/checkout/plan_ntpJj1VOt5KTM";

type State =
  | { status: "loading" }
  | {
      status: "ready";
      mode: "session" | "plan";
      sessionId?: string;
      planId?: string;
      utm: Record<string, string>;
      affiliateCode?: string;
    }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

export function WhopCheckout() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [returnUrl, setReturnUrl] = useState<string>("");

  useEffect(() => {
    setReturnUrl(`${window.location.origin}/merci`);
    const params = new URLSearchParams(window.location.search);
    const ig = params.get("ig") ?? undefined;
    const utm_source = params.get("utm_source") ?? undefined;
    const utm_medium = params.get("utm_medium") ?? undefined;
    const utm_content = params.get("utm_content") ?? undefined;
    const utm_campaign = params.get("utm_campaign") ?? undefined;
    const affiliateCode = params.get("a") ?? undefined;

    const utm: Record<string, string> = {};
    if (utm_source) utm.utm_source = utm_source;
    if (utm_medium) utm.utm_medium = utm_medium;
    if (utm_campaign) utm.utm_campaign = utm_campaign;
    if (utm_content) utm.utm_content = utm_content;
    if (ig && !utm.utm_content) utm.utm_content = ig;

    let cancelled = false;
    createCheckout({
      ig_handle: ig,
      utm_source,
      utm_medium,
      utm_content,
      utm_campaign,
    })
      .then((r) => {
        if (cancelled) return;
        if (!r.ok) {
          setState({ status: "error", message: r.error });
          return;
        }
        const res = r.result;
        if (res.mode === "unconfigured") {
          setState({ status: "unconfigured" });
          return;
        }
        if (res.mode === "session") {
          setState({ status: "ready", mode: "session", sessionId: res.sessionId, utm, affiliateCode });
          return;
        }
        setState({ status: "ready", mode: "plan", planId: res.planId, utm, affiliateCode });
      })
      .catch((err) => {
        if (cancelled) return;
        setState({
          status: "error",
          message: err instanceof Error ? err.message : "unknown",
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      id="whop-checkout"
      className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-gold/30 bg-ink shadow-[0_30px_80px_-20px_rgba(245,197,24,0.3)]"
    >
      <div className="flex items-center justify-between bg-burgundy-deep border-b border-gold/30 px-5 py-3 mono text-[11px] uppercase tracking-[0.22em] text-gold">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Sécurisé par Whop
        </span>
        <span>Paiement unique 97€</span>
      </div>

      <div className="bg-ink p-2 sm:p-3">
        {state.status === "loading" && <CheckoutSkeleton />}

        {state.status === "unconfigured" && (
          <div className="rounded-lg border border-dashed border-white/20 bg-burgundy-deep/30 p-6 text-center text-sm text-white/70">
            <div className="mb-2 font-semibold text-gold">
              Checkout en cours de configuration
            </div>
            <p>Revenez dans quelques minutes.</p>
          </div>
        )}

        {state.status === "error" && (
          <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-6 text-center text-sm text-red-300">
            <div className="mb-2 font-semibold">Erreur de chargement du paiement</div>
            <p className="font-mono text-xs">{state.message}</p>
          </div>
        )}

        {/* Do NOT pass onComplete — the Whop embed forces skipRedirect=true when onComplete is set,
            which silently filters out 3DS card payments (Apple Pay still works). We rely on the
            returnUrl redirect to /merci instead. */}
        {state.status === "ready" && state.mode === "session" && state.sessionId && returnUrl && (
          <WhopCheckoutEmbed
            sessionId={state.sessionId}
            utm={state.utm}
            affiliateCode={state.affiliateCode}
            returnUrl={returnUrl}
            theme="dark"
            themeOptions={{ accentColor: "yellow" }}
            fallback={<CheckoutSkeleton />}
            onStateChange={(s) => console.log("[whop] state", s)}
          />
        )}

        {state.status === "ready" && state.mode === "plan" && state.planId && returnUrl && (
          <WhopCheckoutEmbed
            planId={state.planId}
            utm={state.utm}
            affiliateCode={state.affiliateCode}
            returnUrl={returnUrl}
            theme="dark"
            themeOptions={{ accentColor: "yellow" }}
            fallback={<CheckoutSkeleton />}
            onStateChange={(s) => console.log("[whop] state", s)}
          />
        )}
      </div>

      {/* Fallback: reliable hosted checkout if the embed glitches */}
      <div className="border-t border-gold/20 bg-ink/60 px-5 py-4 text-center">
        <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-2">
          Problème avec le paiement ci-dessus ?
        </p>
        <a
          href={HOSTED_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-soft mono text-xs uppercase tracking-[0.22em] underline decoration-gold/40 hover:decoration-gold transition"
        >
          Payer directement sur Whop →
        </a>
      </div>
    </div>
  );
}

function CheckoutSkeleton() {
  return (
    <div className="space-y-3 p-4" aria-label="Chargement du paiement">
      <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />
      <div className="h-10 w-full animate-pulse rounded bg-white/10" />
      <div className="h-10 w-full animate-pulse rounded bg-white/10" />
      <div className="h-4 w-1/4 animate-pulse rounded bg-white/10" />
      <div className="h-10 w-full animate-pulse rounded bg-white/10" />
      <div className="h-12 w-full animate-pulse rounded bg-gold/30" />
    </div>
  );
}
