import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales · AI CREATIVE ACADEMY",
  description: "Mentions légales du site aicreativeacademy.com — éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <h1>Mentions légales</h1>
      <p className="lead">Dernière mise à jour : 6 mai 2026</p>

      <h2>1. Éditeur du site</h2>
      <div className="info-card">
        <strong>REVO LAB</strong>
        <br />
        Entrepreneur individuel — Micro-entreprise (France)
        <br />
        Représenté par : Lucas Alleix
        <br />
        SIRET : 102 749 942 00011
        <br />
        Adresse : [ADRESSE — À COMPLÉTER]
        <br />
        Email : lucas.socialcontact@gmail.com
      </div>

      <h2>2. Directeur de la publication</h2>
      <p>Lucas Alleix, en qualité d&apos;entrepreneur individuel exploitant la marque REVO LAB.</p>

      <h2>3. Hébergement</h2>
      <div className="info-card">
        <strong>Cloudflare, Inc.</strong>
        <br />
        101 Townsend Street, San Francisco, CA 94107, USA
        <br />
        <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">
          cloudflare.com
        </a>
      </div>

      <h2>4. Paiements et TVA</h2>
      <p>
        Les paiements sont opérés par <strong>Whop Inc.</strong> (USA) via sa
        plateforme de checkout sécurisée. REVO LAB n&apos;a accès à aucune
        donnée bancaire sensible (numéro de carte, cryptogramme).
      </p>
      <p>
        REVO LAB est une micro-entreprise française relevant du régime de la
        franchise en base de TVA :{" "}
        <strong>
          TVA non applicable, art. 293 B du Code général des impôts.
        </strong>
      </p>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur aicreativeacademy.com (textes,
        images, vidéos, logos, marques, architecture, code source) sont la
        propriété exclusive de REVO LAB, protégés par le droit d&apos;auteur
        français, européen et international.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou
        adaptation, totale ou partielle, sans autorisation écrite préalable est
        interdite et constitutive de contrefaçon (articles L.335-2 et suivants
        du Code de la propriété intellectuelle).
      </p>

      <h2>6. Marques</h2>
      <p>
        « AI CREATIVE ACADEMY » et « REVO LAB » sont des marques exploitées par
        REVO LAB. Toute utilisation non autorisée est prohibée.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        REVO LAB met tout en œuvre pour fournir des informations fiables et à
        jour, sans pouvoir garantir l&apos;exactitude ou l&apos;exhaustivité
        des contenus. Les résultats mentionnés sur le site (ventes, vues,
        revenus) sont des exemples réels de membres et ne constituent en aucun
        cas une promesse de résultat.
      </p>

      <h2>8. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. REVO LAB
        n&apos;exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu.
      </p>

      <h2>9. Droit applicable</h2>
      <p>
        Les présentes mentions sont régies par le droit français. Tout litige
        sera soumis aux tribunaux compétents.
      </p>

      <h2>10. Contact</h2>
      <p>
        Email :{" "}
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </p>
    </>
  );
}
