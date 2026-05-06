export function SectionTag({
  number,
  label,
  align = "left",
}: {
  number: string;
  label: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`mono text-[11px] uppercase tracking-[0.28em] text-gold/80 flex items-center gap-3 ${
        align === "right" ? "justify-end" : ""
      }`}
    >
      <span className="text-white/30">//</span>
      <span className="text-gold">{number}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-gold/40 via-gold/10 to-transparent max-w-[160px]" />
      <span className="text-white/60">{label}</span>
    </div>
  );
}
