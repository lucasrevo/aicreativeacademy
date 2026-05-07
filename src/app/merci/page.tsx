import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MerciContent } from "./merci-content";

export const metadata: Metadata = {
  title: "Merci · AI CREATIVE ACADEMY",
  description: "Ta commande est confirmée. Bienvenue dans AI CREATIVE ACADEMY.",
};

export default function MerciPage() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <MerciContent />
      <Footer />
    </main>
  );
}
