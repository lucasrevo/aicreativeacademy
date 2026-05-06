export function ResultCard({
  value,
  label,
  attribution = "[MEMBRE EARLY ACCESS]",
}: {
  value: string;
  label: string;
  attribution?: string;
}) {
  return (
    <div className="relative border border-white/10 bg-ink/40 pl-5 pr-4 py-5 transition-colors hover:border-gold/40">
      <span className="absolute left-0 top-4 bottom-4 w-[2px] bg-gold" />
      <div className="display text-4xl md:text-5xl text-gold glow-gold leading-none tabular-nums">
        {value}
      </div>
      <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/80 mt-3">
        {label}
      </div>
      <div className="mono text-[9px] uppercase tracking-[0.22em] text-white/40 mt-1">
        {attribution}
      </div>
    </div>
  );
}
