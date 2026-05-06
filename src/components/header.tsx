"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#resultats", label: "Résultats" },
  { href: "#apprendre", label: "Ce que tu apprends" },
  { href: "#modules", label: "Modules & bonus" },
  { href: "#valeur", label: "Valeur réelle" },
  { href: "#faq", label: "FAQ" },
  { href: "#checkout", label: "S'inscrire — 97€", accent: true },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Main header */}
      <header className="sticky top-0 z-30 bg-gradient-to-b from-ink via-ink/95 to-ink/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06),0_8px_24px_-12px_rgba(0,0,0,0.8)]">
        {/* gold hairline accent */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative block h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-md">
              <Image
                src="/brand/logo-mark.png"
                alt="AI CREATIVE ACADEMY"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <span className="display text-base md:text-lg tracking-tight text-white leading-none">
              REVO <span className="text-gold">LAB</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex items-center gap-2 border border-white/15 hover:border-gold/60 hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5 text-white" />
            <span className="hidden sm:inline mono text-[10px] uppercase tracking-[0.22em] text-white/80">
              Menu
            </span>
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" />
      </div>

      {/* Menu drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-ink border-l border-gold/20 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="mono text-[10px] uppercase tracking-[0.28em] text-gold">
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="p-1.5 rounded hover:bg-white/5"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`group flex items-center justify-between px-3 py-4 border-b border-white/5 transition-colors ${
                item.accent
                  ? "text-gold hover:bg-gold/10"
                  : "text-white hover:bg-white/5 hover:text-gold"
              }`}
            >
              <span
                className={`${
                  item.accent ? "mono text-sm uppercase tracking-[0.22em] font-bold" : "display text-xl"
                }`}
              >
                {item.label}
              </span>
              <span className="transition-transform group-hover:translate-x-1 text-gold">
                →
              </span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          AI CREATIVE ACADEMY · by Lucas & Adri
        </div>
      </aside>
    </>
  );
}
