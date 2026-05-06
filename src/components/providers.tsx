"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { Analytics } from "@vercel/analytics/next";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
    if (!key) return;
    if (typeof window === "undefined") return;
    const ph = posthog as unknown as { __loaded?: boolean };
    if (ph.__loaded) return;
    try {
      posthog.init(key, {
        api_host: host,
        capture_pageview: true,
        capture_pageleave: true,
        person_profiles: "identified_only",
      });
    } catch {
      // fail silent
    }
  }, []);

  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
