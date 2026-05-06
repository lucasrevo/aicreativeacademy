import Image from "next/image";

const frames = [
  { src: "/avatar/portrait-01.jpeg", label: "LOOK 01" },
  { src: "/avatar/portrait-02.jpeg", label: "LOOK 02" },
  { src: "/avatar/portrait-03.jpeg", label: "LOOK 03" },
  { src: "/avatar/portrait-04.jpeg", label: "LOOK 04" },
  { src: null, label: "LOOK 05" }, // burgundy gradient block
];

export function Filmstrip() {
  return (
    <section className="relative border-t border-white/10 bg-ink/60">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-center justify-between mb-5">
          <span className="mono text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-gold">
            // AVATAR · MULTI-LOOK
          </span>
          <span className="mono text-[10px] uppercase tracking-[0.22em] text-white/40 hidden md:block">
            5 FRAMES
          </span>
        </div>

        {/* horizontal scroll on mobile, 5-col grid on desktop */}
        <div
          className="flex md:grid md:grid-cols-5 gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {frames.map((f, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-[70%] md:w-auto shrink-0 md:shrink border border-gold/25 bg-burgundy-deep/40 overflow-hidden snap-start"
            >
              {f.src ? (
                <Image
                  src={f.src}
                  alt={f.label}
                  fill
                  sizes="(min-width: 768px) 18vw, 70vw"
                  className="object-cover"
                  style={{ filter: "saturate(1.05) contrast(1.05)" }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy-bright/60 via-burgundy/40 to-burgundy-deep flex items-center justify-center">
                  <span className="display text-white/80 text-4xl">+</span>
                </div>
              )}
              <span className="absolute top-2 left-2 mono text-[9px] uppercase tracking-[0.22em] text-gold bg-ink/80 backdrop-blur px-1.5 py-0.5 border border-gold/30">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-white/55 mt-5 text-center">
          Avant → Après · Le même avatar, 5 looks différents.
        </p>
      </div>
    </section>
  );
}
