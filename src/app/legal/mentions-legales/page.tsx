import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales · AI CREATIVE ACADEMY",
  description: "Mentions légales du site aicreativeacademy.com — éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <h1>Mentions légales</h1>
      <p className="lead">Dernière mise à jour : 14 avril 2026</p>

      <h2>1. Éditeur du site</h2>
      <div className="info-card">
        <strong>Costa Payments LLC</strong>
        <br />
        Limited Liability Company — État du Wyoming, États-Unis
        <br />
        Siège social : 5830 E 2nd St, Ste 7000 #31855, Casper, Wyoming 82609, USA
        <br />
        Représentée par : Adrien P., Managing Member
        <br />
        Tél. : +1 (307) 301-7385
        <br />
        Email : adrien@costa-payments.com
      </div>

      <h2>2. Partenaire commercial</h2>
      <p>
        Le site aicreativeacademy.com est exploité dans le cadre d&apos;un partenariat
        commercial entre Costa Payments LLC et :
      </p>
      <div className="info-card">
        <strong>AI CREATIVE ACADEMY</strong> — Entrepreneur individuel
        <br />
        SIRET : 102 749 942 00011
        <br />
        Nom commercial : AI CREATIVE ACADEMY
        <br />
        Email : lucas@aicreativeacademy.com
      </div>

      <h2>3. Directeur de la publication</h2>
      <p>Adrien P., en qualité de Managing Member de Costa Payments LLC.</p>

      <h2>4. Hébergement</h2>
      <div className="info-card">
        <strong>Vercel Inc.</strong>
        <br />
        340 S Lemon Ave #4133, Walnut, CA 91789, USA
        <br />
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
      </div>

      <h2>5. Paiements et TVA</h2>
      <p>
        Les paiements sont opérés par <strong>Whop Inc.</strong> (USA) via sa
        plateforme de checkout sécurisée. Costa Payments LLC n&apos;a accès à
        aucune donnée bancaire sensible (numéro de carte, cryptogramme).
      </p>
      <p>
        La TVA applicable aux acheteurs de l&apos;Union européenne est
        collectée et reversée aux administrations fiscales compétentes,
        conformément à la réglementation européenne sur les services
        électroniques.
      </p>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur aicreativeacademy.com (textes, images,
        vidéos, logos, marques, architecture, code source) sont la propriété
        exclusive de Costa Payments LLC et/ou de AI CREATIVE ACADEMY, protégés par le
        droit d&apos;auteur français, européen et international.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou
        adaptation, totale ou partielle, sans autorisation écrite préalable est
        interdite et constitutive de contrefaçon (articles L.335-2 et suivants
        du Code de la propriété intellectuelle).
      </p>

      <h2>7. Marques</h2>
      <p>
        « AI CREATIVE ACADEMY » est une marque exploitée par AI CREATIVE ACADEMY. Toute
        utilisation non autorisée est prohibée.
      </p>

      <h2>8. Responsabilité</h2>
      <p>
        Costa Payments LLC met tout en œuvre pour fournir des informations
        fiables et à jour, sans pouvoir garantir l&apos;exactitude ou
        l&apos;exhaustivité des contenus. Les résultats mentionnés sur le site
        (ventes, vues, revenus) sont des exemples réels de membres et ne
        constituent en aucun cas une promesse de résultat.
      </p>

      <h2>9. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers. Costa Payments
        LLC n&apos;exerce aucun contrôle sur ces sites et décline toute
        responsabilité quant à leur contenu.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les présentes mentions sont régies par le droit français pour les
        utilisateurs résidant en France et par le droit de l&apos;État du
        Wyoming pour les utilisateurs résidant hors Union européenne. Tout
        litige sera soumis aux tribunaux compétents.
      </p>

      <h2>11. Contact</h2>
      <p>
        Support client officiel :{" "}
        <a href="mailto:lucas@aicreativeacademy.com">lucas@aicreativeacademy.com</a>
        <br />
        Contact éditeur :{" "}
        <a href="mailto:adrien@costa-payments.com">
          adrien@costa-payments.com
        </a>
      </p>
    </>
  );
}
