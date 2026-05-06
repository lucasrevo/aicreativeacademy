/**
 * Whop server-side helper.
 *
 * Two checkout modes:
 *   1. "session"  → server mints a checkout_configuration via the Whop API
 *                   with UTM/IG metadata attached. Requires WHOP_API_KEY.
 *                   Preferred — gives us DM-lead attribution on the
 *                   payment.succeeded webhook.
 *   2. "plan"     → no API key present, return planId only. The embed
 *                   renders the hosted checkout for that plan directly.
 *                   Works, but metadata attribution is limited to UTMs
 *                   (no ig_handle).
 *
 * Either mode is a real, live checkout. The legacy "fake" mode is gone.
 */

export type CheckoutMetadata = {
  ig_handle?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_content?: string | null;
  utm_campaign?: string | null;
};

export type CheckoutResult =
  | { mode: "session"; sessionId: string }
  | { mode: "plan"; planId: string }
  | { mode: "unconfigured" };

type WhopCheckoutCreateResponse = {
  id: string;
  [key: string]: unknown;
};

/**
 * Resolve the right checkout mode for a visitor.
 * Attaches IG handle + UTMs as metadata when we can mint a session.
 */
export async function resolveCheckout(
  _params: CheckoutMetadata
): Promise<CheckoutResult> {
  const serverPlanId = process.env.WHOP_LT_PLAN_ID;
  const publicPlanId = process.env.NEXT_PUBLIC_WHOP_LT_PLAN_ID;
  const planId = serverPlanId || publicPlanId;

  if (!planId) {
    return { mode: "unconfigured" };
  }

  // Plan mode only — the embed hangs on "Shop Now" when sessionId is a
  // checkout_configuration (throws `sessionKey is a required property` inside
  // the iframe and state oscillates ready ↔ disabled). Plan mode is what
  // Lucas's 97€ Visa payment used at 21:05 and it works. UTMs are still
  // passed via the embed's `utm` prop; IG attribution happens via the
  // webhook's `utm_content` handle fallback.
  return { mode: "plan", planId };
}

function normalize(raw: string): string {
  return raw.trim().replace(/^@/, "").toLowerCase();
}
