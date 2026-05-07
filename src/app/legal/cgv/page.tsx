import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV · AI CREATIVE ACADEMY",
  description: "Conditions générales de vente de la formation AI CREATIVE ACADEMY.",
};

export default function CGVPage() {
  return (
    <>
      <h1>Conditions générales de vente</h1>
      <p className="lead">Dernière mise à jour : 6 mai 2026</p>

      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (ci-après « CGV »)
        régissent les ventes de la formation en ligne{" "}
        <strong>AI CREATIVE ACADEMY</strong> (ci-après « la Formation »)
        commercialisée sur aicreativeacademy.fr par REVO LAB.
      </p>

      <h2>Article 2 — Vendeur</h2>
      <div className="info-card">
        <strong>REVO LAB</strong>
        <br />
        Entrepreneur individuel — Micro-entreprise (France)
        <br />
        Représenté par : Lucas Alleix
        <br />
        SIRET : 102 749 942 00011
        <br />
        Adresse : 60 rue François 1er, 75008 Paris, France
        <br />
        Email :{" "}
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </div>

      <h2>Article 3 — Produit</h2>
      <p>
        La Formation comprend un accès à vie à une plateforme d&apos;e-learning
        contenant :
      </p>
      <ul>
        <li>7 modules vidéos (21 leçons)</li>
        <li>L&apos;ensemble des ressources pédagogiques associées (templates, prompts, guides)</li>
        <li>Les bonus offerts (selon offre commerciale en vigueur au moment de l&apos;achat)</li>
        <li>Mises à jour à vie du contenu</li>
      </ul>
      <p>
        La Formation est un produit numérique délivré instantanément après
        paiement. Aucun support physique n&apos;est expédié.
      </p>

      <h2>Article 4 — Prix et TVA</h2>
      <p>
        Le prix de la Formation est de <strong>97 € net</strong> (prix de
        lancement sur les 100 premières places, prix public à 197 €
        ultérieurement). Le prix est payable en une seule fois, en euros.
      </p>
      <p>
        REVO LAB est une micro-entreprise française relevant du régime de la
        franchise en base de TVA :{" "}
        <strong>
          TVA non applicable, art. 293 B du Code général des impôts.
        </strong>{" "}
        Les prix affichés sont nets, sans TVA à ajouter.
      </p>

      <h2>Article 5 — Commande et paiement</h2>
      <p>
        Les commandes sont passées sur la plateforme de paiement{" "}
        <strong>Whop</strong>, intégrée au site. Les moyens de paiement
        acceptés sont : carte bancaire (Visa, Mastercard, American Express),
        Apple Pay, et virement SEPA (selon disponibilité).
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
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
        .
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
        REVO LAB ne saurait être tenue responsable d&apos;un retard ou
        d&apos;une inexécution résultant d&apos;un cas de force majeure tel que
        défini par la jurisprudence française.
      </p>

      <h2>Article 12 — Médiation et litiges</h2>
      <p>
        En cas de litige, l&apos;acheteur consommateur peut recourir à une
        procédure de médiation conventionnelle. À défaut de résolution
        amiable, les litiges relèveront des tribunaux français.
      </p>

      <h2>Article 13 — Contact</h2>
      <p>
        Pour toute question :{" "}
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </p>
    </>
  );
}
