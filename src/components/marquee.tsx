export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-burgundy-deep/40">
      <div className="marquee flex whitespace-nowrap py-4">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8 mono text-[11px] uppercase tracking-[0.3em] text-gold/70">
            <span>{t}</span>
            <span className="text-white/20">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
