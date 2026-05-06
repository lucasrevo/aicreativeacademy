"use client";

import { useEffect, useState } from "react";

// Counts down to a fixed target date. Default: 7 days from build time seeded
// client-side so every visitor feels the urgency without drifting server-side.
export function Countdown({ targetISO }: { targetISO?: string }) {
  const [target, setTarget] = useState<number | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("revo_launch_deadline") : null;
    let t: number;
    if (targetISO) {
      t = new Date(targetISO).getTime();
    } else if (stored) {
      t = parseInt(stored, 10);
    } else {
      t = Date.now() + 7 * 24 * 60 * 60 * 1000;
      if (typeof window !== "undefined") localStorage.setItem("revo_launch_deadline", String(t));
    }
    setTarget(t);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  const diff = Math.max(0, (target ?? now) - now);
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff / 3_600_000) % 24);
  const m = Math.floor((diff / 60_000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const cell = (n: number, label: string) => (
    <div className="flex flex-col items-center">
      <span className="mono text-3xl md:text-4xl text-gold tabular-nums tracking-tight">
        {String(n).padStart(2, "0")}
      </span>
      <span className="mono text-[10px] uppercase tracking-[0.24em] text-white/50 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-5 md:gap-7">
      {cell(d, "jours")}
      <span className="text-gold/40 text-2xl blink">:</span>
      {cell(h, "hrs")}
      <span className="text-gold/40 text-2xl blink">:</span>
      {cell(m, "min")}
      <span className="text-gold/40 text-2xl blink">:</span>
      {cell(s, "sec")}
    </div>
  );
}
