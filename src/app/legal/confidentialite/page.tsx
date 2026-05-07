import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité · AI CREATIVE ACADEMY",
  description: "Politique de confidentialité et traitement des données personnelles — RGPD.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <h1>Politique de confidentialité</h1>
      <p className="lead">Dernière mise à jour : 8 mai 2026</p>

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
      <p>
        Au regard de la nature et du volume de ses traitements, REVO LAB
        n&apos;est pas tenue de désigner un délégué à la protection des
        données (DPO) au sens de l&apos;article 37 du RGPD.
      </p>

      <h2>2. Source des données</h2>
      <p>
        Les données personnelles sont collectées directement auprès de la
        personne concernée (formulaire d&apos;achat, navigation sur le site).
        Aucune donnée n&apos;est obtenue indirectement auprès de tiers.
      </p>

      <h2>3. Données collectées</h2>
      <h3>Lors de l&apos;achat</h3>
      <ul>
        <li>Nom, prénom</li>
        <li>Adresse email</li>
        <li>Pays de résidence</li>
        <li>
          Données de paiement (gérées par Whop et ses sous-traitants
          financiers, nous n&apos;y avons pas accès)
        </li>
      </ul>

      <h3>Lors de la navigation</h3>
      <ul>
        <li>
          Logs serveur Cloudflare : adresse IP, user-agent, horodatage des
          requêtes (conservés ~30 jours pour la sécurité)
        </li>
        <li>
          Identifiants de cookies strictement nécessaires (voir notre{" "}
          <a href="/legal/cookies">politique cookies</a>)
        </li>
      </ul>

      <h2>4. Finalités et bases légales</h2>
      <ul>
        <li>
          <strong>Exécution du contrat</strong> — traiter la commande, donner
          accès à la Formation, assurer le support (art. 6.1.b RGPD)
        </li>
        <li>
          <strong>Obligations légales</strong> — facturation, comptabilité,
          fiscalité, conservation des preuves (art. 6.1.c RGPD)
        </li>
        <li>
          <strong>Intérêt légitime</strong> — sécurité du site, prévention de
          la fraude, lutte contre les abus (art. 6.1.f RGPD)
        </li>
        <li>
          <strong>Consentement</strong> — envoi d&apos;emails marketing (le
          cas échéant) ; cookies non essentiels (art. 6.1.a RGPD)
        </li>
      </ul>

      <h2>5. Décision automatisée et profilage</h2>
      <p>
        Aucune décision entièrement automatisée au sens de l&apos;article 22
        du RGPD n&apos;est mise en œuvre. Aucun profilage n&apos;est réalisé
        à des fins commerciales ou publicitaires.
      </p>

      <h2>6. Durée de conservation</h2>
      <ul>
        <li>
          Données de compte : pendant toute la durée de votre accès à la
          Formation
        </li>
        <li>Données de facturation : 10 ans (obligation comptable)</li>
        <li>Logs serveur (Cloudflare) : 30 jours maximum</li>
        <li>Emails marketing : jusqu&apos;au retrait du consentement</li>
      </ul>

      <h2>7. Destinataires et sous-traitants</h2>
      <p>
        Vos données sont partagées uniquement avec les sous-traitants suivants,
        chacun disposant d&apos;un contrat conforme à l&apos;article 28 RGPD :
      </p>
      <ul>
        <li>
          <strong>Whop, Inc.</strong> (Delaware, USA) — paiement, exécution de
          la commande, accès produit, support membres. Base : exécution du
          contrat. Whop est susceptible de recourir à ses propres
          sous-traitants financiers (notamment Stripe et les opérateurs Apple
          Pay / Google Pay) pour l&apos;encaissement.
        </li>
        <li>
          <strong>Cloudflare, Inc.</strong> (San Francisco, USA) —
          hébergement, CDN, sécurité (anti-bot, anti-DDoS, certificats TLS).
          Base : exécution du contrat et intérêt légitime.
        </li>
      </ul>
      <p>
        Aucune donnée n&apos;est vendue. <strong>Aucun outil tiers de mesure
        d&apos;audience, de marketing ou de session replay n&apos;est
        actuellement actif</strong> sur le site (pas de Google Analytics, pas
        de Microsoft Clarity, pas de Meta Pixel, pas de TikTok Pixel).
      </p>

      <h2>8. Transferts hors Union européenne</h2>
      <p>
        Whop et Cloudflare sont basés aux États-Unis. Les transferts de
        données vers ces destinataires sont encadrés par :
      </p>
      <ul>
        <li>
          Le <strong>Data Privacy Framework UE-États-Unis</strong> (DPF —
          décision d&apos;adéquation de la Commission européenne du 10 juillet
          2023). Les certifications sont consultables sur{" "}
          <a
            href="https://www.dataprivacyframework.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            dataprivacyframework.gov
          </a>
          .
        </li>
        <li>
          À défaut, les <strong>clauses contractuelles types</strong> (SCC) de
          la Commission européenne (décision 2021/914).
        </li>
      </ul>

      <h2>9. Vos droits</h2>
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

      <h2>10. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées (chiffrement HTTPS, hébergeurs certifiés, accès
        restreints) pour protéger vos données contre tout accès, altération
        ou destruction non autorisés.
      </p>

      <h2>11. Modifications</h2>
      <p>
        La présente politique peut être modifiée. Toute modification
        substantielle sera notifiée par email ou via le site.
      </p>

      <h2>12. Contact</h2>
      <p>
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </p>
    </>
  );
}
