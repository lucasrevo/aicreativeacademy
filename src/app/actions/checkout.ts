"use server";

import { resolveCheckout, type CheckoutMetadata, type CheckoutResult } from "@/lib/whop";

export async function createCheckout(params: CheckoutMetadata): Promise<
  | { ok: true; result: CheckoutResult }
  | { ok: false; error: string }
> {
  try {
    const result = await resolveCheckout(params);
    return { ok: true, result };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    console.error("[createCheckout]", message);
    return { ok: false, error: message };
  }
}
