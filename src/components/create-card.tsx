import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type CreateCardProps = {
  category: string;
  title: string;
  views: string;
  likes: string;
  image?: string;
  video?: string;
  videoPoster?: string;
  Icon?: LucideIcon;
};

export function CreateCard({
  category,
  title,
  views,
  likes,
  image,
  video,
  videoPoster,
  Icon,
  slot,
}: CreateCardProps & { slot?: string }) {
  const hasMedia = Boolean(video || image);
  return (
    <div
      className={`group relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br from-burgundy-deep/60 to-ink transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(245,197,24,0.5)] ${
        hasMedia
          ? "border border-gold/30 hover:border-gold/70"
          : "border-2 border-dashed border-gold/40 hover:border-gold"
      }`}
    >
      {/* [REPLACE] badge — only when no media */}
      {!hasMedia && (
        <span className="absolute top-2 right-2 z-20 mono text-[9px] uppercase tracking-[0.22em] text-gold bg-ink/80 backdrop-blur px-1.5 py-0.5 border border-gold/40">
          IMG SLOT {slot ?? "—"}
        </span>
      )}

      {video ? (
        <video
          src={video}
          poster={videoPoster}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : image ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: "saturate(1.1) contrast(1.1)" }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-burgundy/40 to-burgundy-deep">
          {Icon && <Icon className="h-16 w-16 text-gold/70" strokeWidth={1.25} />}
        </div>
      )}

      {/* subtle top gradient only */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink/60 to-transparent pointer-events-none" />

      {/* category chip only */}
      <div className="absolute top-3 left-3">
        <span className="mono text-[10px] uppercase tracking-[0.22em] text-gold bg-ink/75 backdrop-blur px-2 py-1 border border-gold/30">
          {category}
        </span>
      </div>
    </div>
  );
}
