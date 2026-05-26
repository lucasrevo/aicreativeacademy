import type { Metadata } from "next";
import { Inter, Paytone_One, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const paytoneOne = Paytone_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI CREATIVE ACADEMY — Crée ton avatar IA en 7 jours",
  description:
    "Le système complet pour créer, animer et monétiser ton avatar IA. Sans jamais montrer ton visage. Prix de lancement 97€ — 100 premières places.",
  openGraph: {
    title: "AI CREATIVE ACADEMY — Crée ton avatar IA en 7 jours",
    description:
      "Le système complet pour créer, animer et monétiser ton avatar IA. Sans jamais montrer ton visage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${paytoneOne.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-ink text-white font-sans selection:bg-gold selection:text-ink">
        <Providers>{children}</Providers>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wx7d8rbtka");`}
        </Script>
      </body>
    </html>
  );
}
