import Image from "next/image";
import { SectionTag } from "@/components/section-tag";
import { Countdown } from "@/components/countdown";
import { StickyCTA } from "@/components/sticky-cta";
import { WhopCheckout } from "@/components/whop-checkout";
import { CreateCard } from "@/components/create-card";
// ProofGallery marquee HIDDEN — réactivable quand on aura les vrais screenshots
// import { ProofGallery, defaultProofSlots } from "@/components/proof-gallery";
import { ValueStack } from "@/components/value-stack";
import { GptShowcase } from "@/components/gpt-showcase";
import { ProcessTimeline } from "@/components/process-timeline";
import { AvisBruts } from "@/components/avis-bruts";
// Testimonials carousel + Reviews component — HIDDEN but preserved. Re-enable when video testimonials arrive:
//   1) uncomment import below
//   2) swap the static reviews grid for <Testimonials /> (or <Reviews />) in the JSX
//   3) in src/components/testimonials.tsx, replace each slot's `image:` with `video:`
// import { Testimonials } from "@/components/testimonials";
// import { Reviews } from "@/components/reviews";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* REPLACE WITH REAL REEL/IMAGE — each card below will be swapped for a real member Reel */
const createCards = [
  {
    category: "STORYTELLING",
    title: "Crash scénarisé · POV viral",
    views: "1.8M",
    likes: "74K",
    video: "/reels/revo-crash.mov",
    slot: "01",
  },
  {
    category: "UGC",
    title: "« Je teste le Nikon »",
    views: "920K",
    likes: "38K",
    video: "/reels/ugc-nikon.mp4",
    slot: "02",
  },
  {
    category: "CLIENT READY",
    title: "Créatives livrables",
    views: "2.4M",
    likes: "61K",
    video: "/reels/client-creative.mp4",
    slot: "03",
  },
  {
    category: "ADS",
    title: "Créatives Meta / TikTok",
    views: "2.4M",
    likes: "61K",
    video: "/reels/ads.mp4",
    slot: "04",
  },
];

const faqs = [
  {
    q: "Je reçois l'accès quand ?",
    a: "Immédiatement après le paiement. Tu arrives sur la plateforme, tu commences M0 dans les 2 minutes.",
  },
  {
    q: "Je suis débutant total, ça passe ?",
    a: "Oui. Construit pour quelqu'un qui n'a jamais touché à l'IA. Chaque étape est filmée, chaque outil est montré à l'écran.",
  },
  {
    q: "Ça se voit que c'est de l'IA ?",
    a: "Pas avec ce process. Le but de la formation c'est exactement ça : passer l'uncanny valley.",
  },
  {
    q: "Et si ça me plaît pas ?",
    a: "Garantie 14 jours. Tu testes, tu appliques. Si ça ne te sert à rien, tu demandes un remboursement — pas de question.",
  },
];

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ===== 0 · HEADER ===== */}
      <Header />

      {/* ===== 1 · HERO (mobile: image top, copy below) ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-2 md:pt-6 pb-4 md:pb-8">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-center">
            {/* HERO VISUAL — clean, no overlays */}
            <div className="relative fade order-1 md:order-2">
              <div className="relative aspect-[16/9] md:aspect-[4/5] w-full overflow-hidden rounded-2xl md:rounded-3xl">
                <Image
                  src="/brand/hero-rooftop.png"
                  alt="AI CREATIVE ACADEMY"
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* COPY */}
            <div className="rise order-2 md:order-1">
              <h1
                className="display text-white leading-[0.9] text-balance"
                style={{ fontSize: "clamp(2.25rem, 9vw, 5.25rem)" }}
              >
                Crée et monétise
                <br />
                ton avatar IA
                <br className="md:hidden" />{" "}
                en <span className="text-gold glow-gold">7 jours.</span>
              </h1>

              <p
                className="mt-4 md:mt-5 text-white/80 max-w-xl text-pretty"
                style={{ fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)" }}
              >
                Le système complet pour créer ton avatar IA ultra réaliste —
                sans montrer ton visage.
              </p>

              {/* fat mobile-first CTA with price baked in */}
              <a
                href="#checkout"
                className="group mt-7 flex w-full md:w-auto md:inline-flex items-center justify-center gap-3 bg-gold text-ink px-6 md:px-8 min-h-14 py-4 rounded-xl mono text-sm md:text-base uppercase tracking-[0.22em] font-bold hover:bg-gold-soft transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
              >
                <span>Je lance mon avatar</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* benefits: épuré — just icon + label, no boxes */}
              <div className="mt-6 md:mt-7 grid grid-cols-3">
                {[
                  { icon: "⚡", label: "Accès\u00a0immédiat" },
                  { icon: "🛡", label: "Garantie\u00a014\u00a0jours" },
                  { icon: "∞", label: "Updates\u00a0à\u00a0vie" },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <span className="text-gold text-lg md:text-xl leading-none">
                      {b.icon}
                    </span>
                    <span className="mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-white/70 leading-tight">
                      {b.label}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 1.5 · AVIS BRUTS — 3 témoignages compacts entre hero et méthode ===== */}
      <AvisBruts />

      {/* ===== 2 · RÉSULTATS — HIDDEN: proof screens + marquee carousel preserved for when we have more material.
           To restore the "Des résultats, pas des promesses" heading + 2 Skool review screenshots,
           see git history (commits 2516079 / 6029c82) or components/reviews.tsx + testimonials.tsx. ===== */}
      <section id="resultats" className="relative border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 pt-8 md:pt-12 pb-10 md:pb-14">
          {/* 3-step process timeline — how they got there */}
          <div className="">
            <div className="flex items-end justify-between gap-4 flex-wrap mb-8 md:mb-10">
              <h3
                className="display text-white leading-[0.9] text-balance"
                style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.75rem)" }}
              >
                La méthode en{" "}
                <span className="text-gold glow-gold">3 étapes.</span>
              </h3>
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/50 max-w-xs">
                Crée · Génère · Monétise
              </p>
            </div>
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ===== 3 · CE QUE TU VAS APPRENDRE ===== */}
      <section id="apprendre" className="relative border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <h2
            className="display text-white max-w-3xl leading-[0.9] text-balance"
            style={{ fontSize: "clamp(1.75rem, 8vw, 4rem)" }}
          >
            Ce que tu vas
            <br className="md:hidden" />{" "}
            apprendre{" "}
            <span className="text-gold glow-gold">à faire.</span>
          </h2>

          {/* REPLACE WITH REAL REELS — every card is a drop slot */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {createCards.map((c) => (
              <CreateCard key={c.category} {...c} />
            ))}
          </div>

        </div>
      </section>

      {/* ===== 7 · GPT AI CREATIVE ACADEMY — le bonus hero qui résout le pain #1 ===== */}
      <GptShowcase />

      {/* ===== 8 · CE QUE TU REÇOIS — modules + bonuses + valeur ===== */}
      <ValueStack />

      {/* ===== 11 · FINAL CTA + CHECKOUT — unified deal panel ===== */}
      <section
        id="checkout"
        className="relative border-t border-gold/20 bg-gradient-to-b from-burgundy-deep/30 to-ink scroll-mt-20"
      >
        <div className="mx-auto max-w-xl px-4 py-14 md:py-20">
          {/* Urgency strip */}
          <div className="flex flex-col items-center">
            <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold/80 mb-4">
              Fin de l'offre dans
            </span>
            <Countdown />
          </div>

          {/* Single heading */}
          <h2
            className="display text-white text-center leading-[0.95] text-balance mt-10 md:mt-12"
            style={{ fontSize: "clamp(1.75rem, 6vw, 3rem)" }}
          >
            Rejoins les{" "}
            <span className="text-gold glow-gold">100 premiers.</span>
          </h2>

          {/* Deal panel — everything unified in one card */}
          <div className="mt-8 md:mt-10 border border-gold/25 bg-ink/60 backdrop-blur rounded-2xl overflow-hidden shadow-[0_24px_60px_-24px_rgba(245,197,24,0.25)]">
            {/* Price header */}
            <div className="px-6 py-7 md:px-8 md:py-8 border-b border-white/10 text-center bg-gradient-to-b from-gold/[0.04] to-transparent">
              <div className="mono text-[10px] uppercase tracking-[0.28em] text-gold/75 mb-4">
                Offre de lancement · 100 places
              </div>
              <div className="flex items-baseline justify-center gap-3">
                <span className="display text-gold glow-gold leading-none text-5xl md:text-6xl tabular-nums">
                  97€
                </span>
                <span className="mono text-xs md:text-sm uppercase tracking-[0.2em] text-white/40 line-through tabular-nums">
                  197€
                </span>
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.24em] text-white/50 mt-3">
                Paiement unique · Accès à vie
              </div>
            </div>

            {/* Checkout embed */}
            <div className="px-5 py-6 md:px-7 md:py-7">
              <WhopCheckout />
            </div>
          </div>

          {/* Trust row */}
          <div className="mt-6 md:mt-7 flex items-center justify-center gap-x-3 gap-y-2 flex-wrap mono text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-white/50">
            <span>🔒 Paiement sécurisé</span>
            <span className="text-white/20">·</span>
            <span>⚡ Accès immédiat</span>
            <span className="text-white/20">·</span>
            <span>🛡 Garantie 14j</span>
          </div>
        </div>
      </section>

      {/* ===== 12 · FAQ (moved below checkout — last objection handler) ===== */}
      <section id="faq" className="relative border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <SectionTag number="009" label="FAQ" />
          <h2
            className="display text-white mt-5"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)" }}
          >
            Questions <span className="text-gold">fréquentes.</span>
          </h2>

          <Accordion className="mt-8 border-t border-white/10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="display text-lg md:text-xl text-white py-5 hover:text-gold transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/75 pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===== 13 · FOOTER ===== */}
      <Footer />

      <StickyCTA />
    </main>
  );
}
