# Whop Embedded Checkout — Integration Guide (Next.js 16 App Router)

Research source: Whop docs MCP (`/payments/checkout-embed`, `/third-party-integrations/embedded-checkouts/prefill-embedded-checkouts`) + Whop API MCP (`client.checkoutConfigurations.create`).

---

## TL;DR — Recommended approach

Use the official **`@whop/checkout/react`** React component (`WhopCheckoutEmbed`). It renders an iframe with Whop-hosted checkout inline on our page, supports UTM passthrough natively, and accepts a pre-created `sessionId` to attach arbitrary metadata (including `ig_handle`) that flows through to our existing `/api/webhooks/whop` webhook.

Flow:
1. Landing page reads `?ig=<handle>` (and other UTMs) from URL.
2. Server action calls `client.checkoutConfigurations.create({ plan, metadata: { ig_handle, utm_source, utm_campaign, ... } })` → returns a `ch_XXX` session ID.
3. Render `<WhopCheckoutEmbed planId={plan_XXX} sessionId={ch_XXX} utm={{...}} />` at the bottom of the landing page.
4. On purchase, Whop fires a `payment.succeeded` webhook to `/api/webhooks/whop` containing the `metadata` we attached → match to lead by `ig_handle`.

---

## Approach comparison

| Approach | Where checkout renders | Can attach metadata? | Best for |
|---|---|---|---|
| **Hosted checkout link** (`whop.com/checkout/plan_XXX`) | Redirect away to whop.com | Only via affiliate code + UTM query params | Quick and dirty, no custom UX |
| **Embedded checkout (React/script)** | Iframe on our domain | Yes, via `sessionId` (pre-created session) + `utm` prop | **This is what we want** |
| **Checkout configuration API** (`client.checkoutConfigurations.create`) | N/A — creates the session object used by the embed | Yes, first-class `metadata` field | Used server-side to mint a session ID the embed consumes |

The three aren't alternatives — the API creates the session, the React component consumes it, and the hosted link is the fallback if we can't use the embed.

---

## Env vars

```
# Whop API
WHOP_API_KEY=                 # server-side, for checkoutConfigurations.create
WHOP_COMPANY_ID=biz_XXX       # Revo company on Whop
WHOP_LT_PLAN_ID=plan_XXX      # 47€ LT plan
WHOP_WEBHOOK_SECRET=          # for /api/webhooks/whop signature verification (already set in ai-creative-academy-portal)

# Public (client component reads these)
NEXT_PUBLIC_WHOP_LT_PLAN_ID=plan_XXX
```

Find plan ID: Whop dashboard → Checkout Links → three-dot menu → Details.

---

## Install

```bash
npm install @whop/checkout @whop/api
```

---

## Code — Next.js 16 App Router

### 1. Server action to create a session with metadata

```ts
// src/app/(lp)/_actions/create-checkout-session.ts
"use server";

import { WhopApi } from "@whop/api";

const whop = new WhopApi({ apiKey: process.env.WHOP_API_KEY! });

export async function createCheckoutSession(params: {
  igHandle?: string;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
}) {
  const config = await whop.checkoutConfigurations.create({
    plan: {
      company_id: process.env.WHOP_COMPANY_ID!,
      currency: "eur",
      // Or reference an existing plan via plan_id in CreateCheckoutSessionInputModePaymentWithPlanID
    },
    metadata: {
      ig_handle: params.igHandle ?? null,
      utm_source: params.utmSource ?? null,
      utm_campaign: params.utmCampaign ?? null,
      utm_content: params.utmContent ?? null,
      source: "ai-creative-academy-lp",
    },
  });

  return { sessionId: config.id }; // "ch_XXXXXXXXX"
}
```

NOTE: if we already have a fixed `plan_XXX` for the 47€ LT course, prefer the "with plan_id" variant — it just attaches metadata to a checkout session for that existing plan instead of minting a new plan. See `CreateCheckoutSessionInputModePaymentWithPlanID` in the Whop TS SDK.

### 2. Client component — landing page bottom

```tsx
// src/app/(lp)/_components/whop-checkout.tsx
"use client";

import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { useEffect, useState } from "react";
import { createCheckoutSession } from "../_actions/create-checkout-session";

export function WhopCheckout() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [utm, setUtm] = useState<Record<string, string>>({});
  const planId = process.env.NEXT_PUBLIC_WHOP_LT_PLAN_ID!;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const igHandle = params.get("ig") ?? params.get("utm_content") ?? undefined;
    const utmSource = params.get("utm_source") ?? undefined;
    const utmCampaign = params.get("utm_campaign") ?? undefined;
    const utmContent = params.get("utm_content") ?? undefined;

    // Keys MUST start with utm_ for the embed's `utm` prop
    const u: Record<string, string> = {};
    if (utmSource) u.utm_source = utmSource;
    if (utmCampaign) u.utm_campaign = utmCampaign;
    if (utmContent) u.utm_content = utmContent;
    if (igHandle) u.utm_content = igHandle; // fallback dual-use
    setUtm(u);

    createCheckoutSession({ igHandle, utmSource, utmCampaign, utmContent })
      .then((r) => setSessionId(r.sessionId))
      .catch(console.error);
  }, []);

  if (!sessionId) return <div className="py-16 text-center">Chargement du paiement…</div>;

  return (
    <WhopCheckoutEmbed
      planId={planId}
      sessionId={sessionId}
      utm={utm}
      theme="light"
      returnUrl="https://aicreativeacademy.com/merci"
      fallback={<div className="py-16 text-center">Chargement…</div>}
      styles={{ container: { paddingX: 16 } }}
    />
  );
}
```

### 3. Drop it into the landing page

```tsx
// src/app/(lp)/page.tsx
import { WhopCheckout } from "./_components/whop-checkout";

export default function LandingPage() {
  return (
    <main>
      {/* ... hero, VSL, testimonials, FAQ ... */}
      <section id="acheter" className="mx-auto max-w-2xl px-4 py-16">
        <h2 className="mb-6 text-3xl font-bold">Rejoins REVO Lab — 47€</h2>
        <WhopCheckout />
      </section>
    </main>
  );
}
```

---

## UTM / metadata passthrough pattern

Two independent channels, use both:

1. **UTM query params** — forwarded automatically to the checkout iframe (disable with `data-whop-checkout-skip-utm`). Visible in Whop analytics and tracking dashboards. Pass via the `utm` prop; keys must be prefixed `utm_`.
2. **Metadata** (authoritative for attribution) — set on the checkout configuration server-side. Arrives verbatim in the `payment.succeeded` webhook payload. Use this for `ig_handle` because it survives browser weirdness and can't be tampered with client-side after creation.

Webhook side (existing `ai-creative-academy-portal/src/app/api/webhooks/whop/route.ts`): read `event.data.metadata.ig_handle` and match to a lead row on `leads.ig_handle`. Same pattern already used for Cal.com auto-linking.

---

## Webhook payload shape (relevant bits)

```json
{
  "type": "payment.succeeded",
  "data": {
    "id": "pay_...",
    "plan": { "id": "plan_XXX" },
    "metadata": {
      "ig_handle": "adri.scale",
      "utm_source": "instagram",
      "utm_campaign": "lucas_dm",
      "source": "ai-creative-academy-lp"
    },
    "user": { "email": "..." },
    "total": 4700,
    "currency": "eur"
  }
}
```

---

## Branding / styling

- Padding of the container wrapper (`styles.container.padding*`) — that's it from the React component.
- Via per-session API (`checkout_styling`): `border_style` (rounded/pill/rectangular), `button_color` (hex — set to `#8B1A1A` for burgundy), `font_family` (system/roboto/open_sans).
- Global `checkout-branding` from the Whop dashboard applies to all sessions.
- The iframe content itself is Whop-controlled — you **cannot** inject arbitrary CSS, fonts, or the gold accent. Accent color on the legacy script tag variant accepts a preset palette (`red`, `crimson`, `gold`, `bronze`, etc.) — closest to our brand is `ruby` or `crimson` for burgundy and `gold` for the accent, but React component only exposes button_color via the API path.
- Recommendation: put brand styling (burgundy/gold hero, headlines, CTA copy) on the page surrounding the embed. Wrap the embed in a burgundy-bordered card so the white iframe reads as a branded "payment module."

---

## Known limitations / gotchas

- **React component is client-only** — the server action to mint the session must be called from a client effect (or passed in as a prop from a server component that awaits it before render). Prefer the prop pattern to avoid a loading flash, but the effect pattern is simpler and fine for a below-the-fold checkout.
- **CSP**: if we add a `Content-Security-Policy` header, must allow:
  - `frame-src https://whop.com https://*.whop.com https://js.whop.com`
  - `script-src https://js.whop.com` (plus whatever else)
  - `connect-src https://api.whop.com https://*.whop.com`
- **No iframe sandbox attribute needed** — the component manages its own iframe lifecycle. Don't wrap it.
- **CORS**: zero config needed — the iframe handles its own requests to whop.com.
- **`returnUrl` is recommended** even with `skipRedirect`/`onComplete`, because external payment providers (Klarna, Cash App Pay, PayPal redirect variants) bounce back to it. Without it those methods will be filtered out.
- **`setupFutureUsage="off_session"`** is only for subscriptions where you plan to recharge via the `chargeUser` API later. Not needed for our one-time 47€ LT.
- **Sandbox testing**: pass `environment="sandbox"` + a sandbox plan ID (created in the sandbox Whop dashboard) to test without real cards. Flip to `production` for launch.
- **`onComplete` implies `skipRedirect=true`** — if you want to show an in-page success state (no redirect to `/merci`), use the callback. Otherwise let `returnUrl` handle it, which is cleaner for analytics.
- **Pre-filled email from URL params**: supported natively via `prefill={{ email }}` prop — useful if we add an email-gate before the checkout.
- **Plan currency mismatch**: `checkoutConfigurations.create` creates a NEW plan if you pass a `plan` object — if we want to reuse the existing 47€ plan, pass `plan_id` variant instead (see note in the server action). Check the SDK's `CreateCheckoutSessionInputModePaymentWithPlanID` shape before shipping.

---

## Related existing attribution flow

Existing `ai-creative-academy-portal` already attributes Cal.com bookings by IG handle via `/api/webhooks/calcom`. This Whop webhook follows the same pattern:

1. DM agent sends Whop URL with `?ig=<username>` (or `?utm_content=<username>`) in the link.
2. Landing page extracts → attaches to checkout session metadata.
3. Webhook fires → lookup lead by `ig_handle` → flip status to `enrolled_lt` + record 47€ revenue.

If the Whop webhook route isn't built yet in `ai-creative-academy-portal`, clone `/api/webhooks/calcom/route.ts` as the template.
