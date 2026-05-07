import Link from "next/link";

const legalLinks = [
  { href: "/legal/mentions-legales", label: "Mentions légales" },
  { href: "/legal/cgv", label: "CGV" },
  { href: "/legal/confidentialite", label: "Confidentialité" },
  { href: "/legal/cookies", label: "Cookies" },
];

const navLinks = [
  { href: "/#resultats", label: "Résultats" },
  { href: "/#apprendre", label: "Ce que tu apprends" },
  { href: "/#modules", label: "Modules" },
  { href: "/#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          {/* Brand block */}
          <div>
            <div className="display text-white text-2xl md:text-3xl leading-none">
              AI CREATIVE <span className="text-gold glow-gold">ACADEMY</span>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-sm">
              La formation pour créer et monétiser ton avatar IA. Éditée par
              REVO LAB, micro-entreprise française. SIRET 102 749 942 00011.
            </p>
            <p className="mono mt-5 text-[10px] uppercase tracking-[0.22em] text-white/35">
              lucas.socialcontact@gmail.com
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-white/45 mb-4">
              // Navigation
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.28em] text-white/45 mb-4">
              // Légal
            </div>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/75 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            © 2026 AI CREATIVE ACADEMY · Tous droits réservés
          </p>
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            Paiements sécurisés via Whop · SEPA / CB
          </p>
        </div>
      </div>
    </footer>
  );
}
