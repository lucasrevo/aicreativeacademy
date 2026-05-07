import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité · AI CREATIVE ACADEMY",
  description: "Politique de confidentialité et traitement des données personnelles — RGPD.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <h1>Politique de confidentialité</h1>
      <p className="lead">Dernière mise à jour : 6 mai 2026</p>

      <p>
        REVO LAB (ci-après « nous ») attache une importance particulière à la
        protection de vos données personnelles. La présente politique explique
        quelles données sont collectées, dans quel but, et vos droits,
        conformément au Règlement (UE) 2016/679 (RGPD) et à la loi française
        Informatique et Libertés.
      </p>

      <h2>1. Responsable du traitement</h2>
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

      <h2>2. Données collectées</h2>
      <h3>Lors de l&apos;achat</h3>
      <ul>
        <li>Nom, prénom</li>
        <li>Adresse email</li>
        <li>Pays de résidence</li>
        <li>
          Données de paiement (gérées par Whop, nous n&apos;y avons pas accès)
        </li>
      </ul>

      <h3>Lors de la navigation</h3>
      <ul>
        <li>Adresse IP, type de navigateur, pages visitées, durée de visite</li>
        <li>
          Identifiants de cookies (voir notre{" "}
          <a href="/legal/cookies">politique cookies</a>)
        </li>
      </ul>

      <h2>3. Finalités et bases légales</h2>
      <ul>
        <li>
          <strong>Exécution du contrat</strong> — traiter la commande, donner
          accès à la Formation, assurer le support (art. 6.1.b RGPD)
        </li>
        <li>
          <strong>Obligations légales</strong> — facturation, comptabilité,
          fiscalité (art. 6.1.c RGPD)
        </li>
        <li>
          <strong>Intérêt légitime</strong> — sécurité du site, prévention de
          la fraude, statistiques (art. 6.1.f RGPD)
        </li>
        <li>
          <strong>Consentement</strong> — envoi d&apos;emails marketing,
          cookies non essentiels (art. 6.1.a RGPD)
        </li>
      </ul>

      <h2>4. Durée de conservation</h2>
      <ul>
        <li>
          Données de compte : pendant toute la durée de votre accès à la
          Formation
        </li>
        <li>Données de facturation : 10 ans (obligation comptable)</li>
        <li>Données de navigation / analytics : 13 mois maximum</li>
        <li>Emails marketing : jusqu&apos;au retrait du consentement</li>
      </ul>

      <h2>5. Destinataires</h2>
      <p>Vos données sont partagées uniquement avec :</p>
      <ul>
        <li>
          <strong>Whop, Inc.</strong> (paiement, accès produit) — USA
        </li>
        <li>
          <strong>Cloudflare, Inc.</strong> (hébergement et CDN) — USA
        </li>
      </ul>
      <p>
        Aucune donnée n&apos;est vendue. Aucun outil de mesure d&apos;audience
        (Google Analytics, Microsoft Clarity ou autre) n&apos;est actuellement
        actif sur le site. Les transferts hors UE sont encadrés par les
        clauses contractuelles types de la Commission européenne (SCC) et le
        cadre Data Privacy Framework UE-US.
      </p>

      <h2>6. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d&apos;accès, de rectification, d&apos;effacement</li>
        <li>Droit à la limitation et à la portabilité</li>
        <li>Droit d&apos;opposition (notamment au marketing)</li>
        <li>Droit de retirer votre consentement à tout moment</li>
        <li>Droit de définir des directives post-mortem</li>
      </ul>
      <p>
        Pour exercer vos droits :{" "}
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
        . Nous répondons sous 30 jours maximum.
      </p>
      <p>
        Vous pouvez également introduire une réclamation auprès de la{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          CNIL
        </a>{" "}
        (autorité française de protection des données).
      </p>

      <h2>7. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées (chiffrement HTTPS, hébergeurs certifiés, accès
        restreints) pour protéger vos données contre tout accès, altération
        ou destruction non autorisés.
      </p>

      <h2>8. Modifications</h2>
      <p>
        La présente politique peut être modifiée. Toute modification
        substantielle sera notifiée par email ou via le site.
      </p>

      <h2>9. Contact</h2>
      <p>
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </p>
    </>
  );
}
