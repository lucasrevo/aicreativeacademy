import Image from "next/image";
import { Sparkles, Clapperboard, Banknote, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  n: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  /** optional real image path — replace placeholder */
  src?: string;
  replaceHint: string;
  result: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Créer ton avatar IA",
    description:
      "Identité, photos, animation. Un avatar que personne ne distingue d'un humain.",
    Icon: Sparkles,
    src: "/process/step-1.gif",
    replaceHint: "IG · @byrevo.ai",
    result: "→ Avatar prêt en 24h",
  },
  {
    n: "02",
    title: "Génère du contenu IA ultra-réaliste",
    description:
      "Reels, UGC, ads, stories. Ton avatar poste sans toi — script, voix, montage.",
    Icon: Clapperboard,
    src: "/process/step-2.mp4",
    replaceHint: "REEL · 1.2M vues",
    result: "→ 30 posts / mois",
  },
  {
    n: "03",
    title: "Monétise ton avatar IA",
    description:
      "Produits digitaux, affiliation, clients. Un actif qui te paie chaque jour.",
    Icon: Banknote,
    src: "/process/step-3.gif",
    replaceHint: "STRIPE · Dashboard",
    result: "→ Premiers 1000€",
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-8 md:gap-6 items-start">
        {steps.map((s, i) => (
          <div key={s.n} className="relative">
            <StepCard {...s} />
            {/* Arrow connector — horizontal on desktop, vertical on mobile */}
            {i < steps.length - 1 && (
              <>
                <div className="hidden md:flex absolute -right-4 top-[110px] z-10 items-center justify-center">
                  <div className="h-8 w-8 rounded-full border border-gold/50 bg-ink flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-gold" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex md:hidden justify-center mt-6">
                  <div className="h-10 w-10 rounded-full border border-gold/50 bg-ink flex items-center justify-center">
                    <ArrowDown className="h-5 w-5 text-gold" strokeWidth={2.5} />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StepCard({ n, title, description, Icon, src, replaceHint, result }: Step) {
  return (
    <div className="group relative">
      {/* image slot — premium framing */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-burgundy-deep/50 via-ink to-ink transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_20px_60px_-10px_rgba(245,197,24,0.2)]">
        {!src && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span
              className="display text-white/[0.04] leading-none"
              style={{ fontSize: "clamp(14rem, 26vw, 22rem)" }}
            >
              {n}
            </span>
          </div>
        )}

        {!src && (
          <span className="absolute top-3 right-3 z-20 mono text-[9px] uppercase tracking-[0.22em] text-gold bg-ink/90 backdrop-blur px-1.5 py-0.5 border border-gold/40">
            [REPLACE]
          </span>
        )}

        {src ? (
          src.endsWith(".mp4") || src.endsWith(".webm") ? (
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
              aria-label={title}
            />
          ) : (
            <Image
              src={src}
              alt={title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
              unoptimized
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="h-16 w-16 rounded-2xl border border-gold/30 bg-ink/60 backdrop-blur flex items-center justify-center">
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
              </div>
              <span className="mono text-[10px] uppercase tracking-[0.28em] text-white/50 text-center px-4">
                {replaceHint}
              </span>
            </div>
          </div>
        )}

        {!src && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink via-ink/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 z-20">
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {result}
              </div>
            </div>
          </>
        )}
      </div>

      {/* text block below card */}
      <div className="mt-5 md:mt-6 px-1">
        <div className="flex items-baseline gap-3">
          <span className="display text-3xl md:text-4xl text-gold glow-gold leading-none">
            {n}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
        </div>
        <h3 className="display text-2xl md:text-[1.75rem] text-white leading-[1.05] mt-3 text-balance">
          {title}
        </h3>
        <p className="mt-2 text-[14px] md:text-[15px] text-white/70 text-pretty leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
