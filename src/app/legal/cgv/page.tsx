import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV · AI CREATIVE ACADEMY",
  description: "Conditions générales de vente de la formation AI CREATIVE ACADEMY.",
};

export default function CGVPage() {
  return (
    <>
      <h1>Conditions générales de vente</h1>
      <p className="lead">Dernière mise à jour : 14 avril 2026</p>

      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (ci-après « CGV »)
        régissent les ventes de la formation en ligne <strong>AI CREATIVE ACADEMY</strong>{" "}
        (ci-après « la Formation ») commercialisée sur aicreativeacademy.com par Costa
        Payments LLC, en partenariat commercial avec AI CREATIVE ACADEMY.
      </p>

      <h2>Article 2 — Vendeur</h2>
      <div className="info-card">
        Costa Payments LLC — Wyoming LLC
        <br />
        5830 E 2nd St, Ste 7000 #31855, Casper, WY 82609, USA
        <br />
        Tél. : +1 (307) 301-7385
        <br />
        Support : lucas@aicreativeacademy.com
        <br />
        Éditeur : adrien@costa-payments.com
      </div>

      <h2>Article 3 — Produit</h2>
      <p>
        La Formation comprend un accès à vie à une plateforme d&apos;e-learning
        contenant :
      </p>
      <ul>
        <li>7 modules vidéos (21 leçons)</li>
        <li>Accès à un Discord privé</li>
        <li>Accès au GPT AI CREATIVE ACADEMY et à la prompt library</li>
        <li>Mises à jour à vie du contenu</li>
      </ul>
      <p>
        La Formation est un produit numérique délivré instantanément après
        paiement. Aucun support physique n&apos;est expédié.
      </p>

      <h2>Article 4 — Prix</h2>
      <p>
        Le prix de la Formation est de <strong>97 € TTC</strong> (prix de
        lancement sur les 100 premières places, prix public à 197 €
        ultérieurement). Le prix est payable en une seule fois, en euros.
      </p>
      <p>
        La TVA applicable aux acheteurs résidant dans l&apos;Union européenne
        est collectée et reversée aux administrations fiscales compétentes,
        conformément à la réglementation européenne sur les services
        électroniques.
      </p>

      <h2>Article 5 — Commande et paiement</h2>
      <p>
        Les commandes sont passées sur la plateforme de paiement{" "}
        <strong>Whop</strong>, intégrée au site. Les moyens de paiement
        acceptés sont : carte bancaire (Visa, Mastercard, American Express) et
        virement SEPA (selon disponibilité).
      </p>
      <p>
        La commande est réputée conclue au débit effectif du compte de
        l&apos;acheteur. Un email de confirmation et les accès à la plateforme
        sont envoyés automatiquement.
      </p>

      <h2>Article 6 — Droit de rétractation et garantie 14 jours</h2>
      <p>
        <strong>
          Garantie commerciale « Satisfait ou remboursé » de 14 jours :
        </strong>{" "}
        conformément à notre engagement, tout acheteur peut demander un
        remboursement intégral dans les 14 jours suivant son achat, sans
        justification, en écrivant à{" "}
        <a href="mailto:lucas@aicreativeacademy.com">lucas@aicreativeacademy.com</a>.
      </p>
      <p>
        Conformément aux articles L.221-18 et suivants du Code de la
        consommation français, le consommateur dispose en principe d&apos;un
        délai de 14 jours pour exercer son droit de rétractation. Toutefois,
        l&apos;article L.221-28 13° prévoit qu&apos;en acceptant de débuter la
        formation (accès immédiat au contenu numérique) avant la fin du délai
        de 14 jours, le consommateur renonce expressément à son droit de
        rétractation légal. Notre garantie commerciale de 14 jours reste
        néanmoins applicable.
      </p>

      <h2>Article 7 — Accès et durée</h2>
      <p>
        L&apos;accès à la Formation est personnel, nominatif, et accordé à
        vie. Le partage d&apos;accès est interdit et entraîne la résiliation
        sans remboursement. Les mises à jour futures du contenu sont incluses.
      </p>

      <h2>Article 8 — Propriété intellectuelle</h2>
      <p>
        L&apos;acheteur bénéficie d&apos;un droit d&apos;usage personnel et non
        exclusif du contenu. Toute revente, diffusion, reproduction ou
        exploitation commerciale du contenu est strictement interdite.
      </p>

      <h2>Article 9 — Résultats</h2>
      <p>
        Les résultats présentés sur le site sont des exemples réels de membres
        et ne constituent en aucun cas une promesse de résultat individuel. La
        réussite dépend de l&apos;implication et du travail de chaque
        acheteur.
      </p>

      <h2>Article 10 — Données personnelles</h2>
      <p>
        Le traitement des données personnelles est détaillé dans notre{" "}
        <a href="/legal/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Article 11 — Force majeure</h2>
      <p>
        Costa Payments LLC ne saurait être tenue responsable d&apos;un retard
        ou d&apos;une inexécution résultant d&apos;un cas de force majeure tel
        que défini par la jurisprudence française.
      </p>

      <h2>Article 12 — Médiation et litiges</h2>
      <p>
        En cas de litige, l&apos;acheteur consommateur peut recourir à une
        procédure de médiation conventionnelle. À défaut de résolution
        amiable, les litiges relèveront des tribunaux français pour les
        consommateurs résidant en France, et des tribunaux de l&apos;État du
        Wyoming pour les autres cas.
      </p>

      <h2>Article 13 — Contact</h2>
      <p>
        Pour toute question :{" "}
        <a href="mailto:lucas@aicreativeacademy.com">lucas@aicreativeacademy.com</a>
      </p>
    </>
  );
}
