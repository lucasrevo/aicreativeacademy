import Link from "next/link";
import "../aica-rebrand.css";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="aica-root">
      <header className="aica-header">
        <Link href="/" className="brand">
          <span className="mark" />
          <span>REVO LAB</span>
        </Link>
        <nav className="nav" aria-label="Principal">
          <Link href="/#methode">Programme</Link>
          <Link href="/#apprendre">Fonctionnalités</Link>
          <Link href="/#tarifs">Tarifs</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/#checkout" className="chrome-cta sm">
            <span>Commencer</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </header>

      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Link
            href="/"
            className="mono"
            style={{ display: "inline-block", marginBottom: 24 }}
          >
            ← Retour à la page
          </Link>
          <article className="legal-prose">{children}</article>
        </div>
      </section>

      <footer className="aica-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <Link
                href="/"
                className="chrome-bubble"
                style={{ alignSelf: "flex-start" }}
              >
                REVO LAB
              </Link>
              <span className="tag">
                Entreprise éditrice d&apos;AI Creative Academy
              </span>
              <p className="desc">
                AI Creative Academy est édité par REVO LAB,
                micro-entreprise française. SIRET&nbsp;102&nbsp;749&nbsp;942&nbsp;00011.
              </p>
              <p
                className="desc"
                style={{ marginTop: 4, color: "var(--w-50)", fontSize: 12 }}
              >
                Contact&nbsp;: lucas.socialcontact@gmail.com
              </p>
            </div>
            <div className="col">
              <h5>Navigation</h5>
              <Link href="/#temoignages">Résultats</Link>
              <Link href="/#methode">Ce que tu apprends</Link>
              <Link href="/#tarifs">Modules &amp; bonus</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className="col">
              <h5>Légal</h5>
              <Link href="/legal/mentions-legales">Mentions légales</Link>
              <Link href="/legal/cgv">CGV</Link>
              <Link href="/legal/confidentialite">Confidentialité</Link>
              <Link href="/legal/cookies">Cookies</Link>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 REVO LAB · Tous droits réservés</span>
            <span>Paiements sécurisés · SEPA / CB</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
