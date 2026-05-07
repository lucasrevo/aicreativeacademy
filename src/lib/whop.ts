/**
 * Whop checkout config. Static-export friendly — no server-side calls.
 * Plan ID is read directly client-side from NEXT_PUBLIC_WHOP_LT_PLAN_ID.
 */
export const WHOP_PLAN_ID =
  process.env.NEXT_PUBLIC_WHOP_LT_PLAN_ID || "plan_ntpJj1VOt5KTM";
