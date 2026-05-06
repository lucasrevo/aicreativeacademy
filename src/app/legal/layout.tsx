import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <Link
            href="/"
            className="mono text-[10px] uppercase tracking-[0.28em] text-white/50 hover:text-gold transition-colors"
          >
            ← Retour à la page
          </Link>
          <article className="legal-prose mt-6 md:mt-8">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
