import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  DollarSign,
  TrendingUp,
  Users,
  MessageCircle,
  Eye,
  Heart,
  Download,
  Star,
  BadgeCheck,
  PlayCircle,
  Wallet,
} from "lucide-react";

export type ProofSlot = {
  caption: string;
  Icon: LucideIcon;
  src?: string;
};

/**
 * ProofGallery — auto-scrolling horizontal marquee of small phone-mockup cards.
 * Two rows moving in opposite directions for density. When `src` is provided, shows
 * the real screenshot; otherwise a placeholder with icon + IMG SLOT label.
 */
export function ProofGallery({ slots }: { slots: ProofSlot[] }) {
  return <ScrollRow slots={slots} direction="left" speed={50} startOffset={0} />;
}

function ScrollRow({
  slots,
  direction,
  speed,
  startOffset,
}: {
  slots: ProofSlot[];
  direction: "left" | "right";
  speed: number;
  startOffset: number;
}) {
  const doubled = [...slots, ...slots];
  return (
    <div className="relative overflow-hidden">
      {/* edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-ink to-transparent" />
      <div
        className="flex gap-3 md:gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationDelay: `${-startOffset * 3}s`,
        }}
      >
        {doubled.map((slot, i) => (
          <ProofCard key={i} index={i % slots.length} {...slot} />
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function ProofCard({
  caption,
  Icon,
  src,
  index,
}: ProofSlot & { index: number }) {
  const idx = String(index + 1).padStart(2, "0");
  return (
    <div className="group shrink-0 w-[128px] md:w-[150px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-t-2xl rounded-b-md border border-gold/25 bg-gradient-to-b from-burgundy-deep/70 to-ink transition-colors hover:border-gold/60">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1 w-10 rounded-full bg-black/70 z-10" />

        {!src && (
          <span className="absolute top-2 right-2 z-10 mono text-[8px] uppercase tracking-[0.2em] text-gold bg-ink/80 backdrop-blur px-1 py-0.5 border border-gold/40">
            [REPLACE]
          </span>
        )}

        {src ? (
          <Image
            src={src}
            alt={caption}
            fill
            sizes="150px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-burgundy/20 to-ink">
            <Icon className="h-7 w-7 text-gold/70" strokeWidth={1.25} />
            <span className="mono text-[8px] uppercase tracking-[0.22em] text-white/45">
              SLOT {idx}
            </span>
          </div>
        )}

        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)",
          }}
        />
      </div>

      <div className="mt-2 mono text-[9px] uppercase tracking-[0.18em] text-white/65 truncate">
        {caption}
      </div>
    </div>
  );
}

/** Default mock slots — REPLACE src values with real screenshots from Adrien */
export const defaultProofSlots: ProofSlot[] = [
  { caption: "STRIPE · +97€", Icon: DollarSign },
  { caption: "IG · 1.2M VUES", Icon: Eye },
  { caption: "DM · DEAL SIGNÉ", Icon: MessageCircle },
  { caption: "REEL · 40K EN 10J", Icon: TrendingUp },
  { caption: "FOLLOWERS +700", Icon: Users },
  { caption: "LIKES · 74K", Icon: Heart },
  { caption: "MOIS 1 · 3,5K€", Icon: Smartphone },
  { caption: "WHOP · VENTE LT", Icon: Download },
  { caption: "AVIS 5★", Icon: Star },
  { caption: "PAIEMENT CONFIRMÉ", Icon: BadgeCheck },
  { caption: "REEL VIRAL · 1M", Icon: PlayCircle },
  { caption: "REVENU SEMAINE 1", Icon: Wallet },
];
