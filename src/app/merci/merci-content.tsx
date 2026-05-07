"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MerciContent() {
  const [params, setParams] = useState<{ status: string | null; receipt_id: string | null }>({
    status: null,
    receipt_id: null,
  });

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setParams({ status: sp.get("status"), receipt_id: sp.get("receipt_id") });
  }, []);

  const success = params.status === "success" || !params.status;

  return (
    <section className="relative border-t border-gold/20 bg-gradient-to-b from-burgundy-deep/30 to-ink">
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        {success ? (
          <>
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
              // CONFIRMATION · PAIEMENT REÇU
            </span>

            <h1
              className="display text-white leading-[0.9] text-balance mt-5"
              style={{ fontSize: "clamp(2rem, 7vw, 3.75rem)" }}
            >
              Bienvenue dans{" "}
              <span className="text-gold glow-gold">AI CREATIVE ACADEMY.</span>
            </h1>

            <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
              Ta commande est confirmée. Tu reçois dans quelques minutes un
              email Whop avec ton reçu et ton accès à la plateforme.
            </p>

            {params.receipt_id && (
              <div className="mt-6 rounded-xl border border-gold/25 bg-ink/60 px-5 py-4">
                <div className="mono text-[10px] uppercase tracking-[0.22em] text-gold/70">
                  Numéro de reçu
                </div>
                <div className="mono text-sm text-white mt-1 break-all">
                  {params.receipt_id}
                </div>
              </div>
            )}

            <div className="mt-10 space-y-3">
              <h2 className="mono text-[11px] uppercase tracking-[0.28em] text-gold">
                // Prochaines étapes
              </h2>
              <ol className="space-y-3 mt-4">
                {[
                  "Ouvre ton email Whop — clique sur « Go to app » pour accéder à la formation.",
                  "Connecte-toi, tu arrives sur M0 · Bienvenue (2 min).",
                  "Suis le parcours dans l'ordre : Avatar → Photos → Animation → Voix → Script → Montage.",
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mono text-gold font-black text-lg shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/80 leading-snug">{txt}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://whop.com/orders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 min-h-14 py-4 rounded-xl mono text-sm uppercase tracking-[0.22em] font-bold hover:bg-gold-soft transition-colors"
              >
                Accéder à la formation →
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold px-6 min-h-14 py-4 rounded-xl mono text-sm uppercase tracking-[0.22em] hover:border-gold transition-colors"
              >
                Retour
              </Link>
            </div>

            <p className="mt-8 mono text-[10px] uppercase tracking-[0.2em] text-white/40 text-center">
              Un souci ? écris à lucas@aicreativeacademy.com
            </p>
          </>
        ) : (
          <>
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-red-400">
              // PAIEMENT NON COMPLÉTÉ
            </span>
            <h1
              className="display text-white leading-[0.9] mt-5"
              style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
            >
              Le paiement n&apos;a pas abouti.
            </h1>
            <p className="mt-5 text-white/75">
              Pas de souci — réessaie avec une autre méthode. Ta place n&apos;est
              pas réservée tant que le paiement n&apos;est pas validé.
            </p>
            <Link
              href="/#checkout"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 min-h-14 py-4 rounded-xl mono text-sm uppercase tracking-[0.22em] font-bold hover:bg-gold-soft transition-colors"
            >
              Réessayer le paiement →
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
