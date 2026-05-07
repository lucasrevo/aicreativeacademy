import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique cookies · AI CREATIVE ACADEMY",
  description: "Politique d'utilisation des cookies sur aicreativeacademy.fr.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Politique cookies</h1>
      <p className="lead">Dernière mise à jour : 8 mai 2026</p>

      <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie (ou traceur similaire tel que le localStorage) est un petit
        fichier déposé sur votre terminal lors de la visite d&apos;un site. Il
        permet de reconnaître le navigateur, conserver des préférences,
        sécuriser une session, ou personnaliser l&apos;expérience.
      </p>

      <h2>2. État actuel : aucun cookie analytique ou marketing</h2>
      <p>
        <strong>aicreativeacademy.fr ne dépose aucun cookie de mesure
        d&apos;audience, de marketing ou de profilage.</strong> Aucun outil tel
        que Google Analytics, Microsoft Clarity, Meta Pixel ou TikTok Pixel
        n&apos;est intégré au site. En conséquence, et conformément à la
        recommandation de la CNIL (délibération n° 2020-091), aucun bandeau
        de consentement n&apos;est requis.
      </p>
      <p>
        Si nous mettons en place ultérieurement de tels traceurs, ils ne
        seront déposés qu&apos;avec votre consentement explicite et
        préalable, et un bandeau de consentement sera affiché.
      </p>

      <h2>3. Cookies et traceurs strictement nécessaires</h2>
      <p>
        Seuls les cookies et traceurs strictement nécessaires au
        fonctionnement du site et à la sécurité sont déposés. Conformément à
        l&apos;article 82 de la loi Informatique et Libertés, ces traceurs ne
        requièrent pas votre consentement préalable.
      </p>

      <table className="cookies-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Émetteur</th>
            <th>Finalité</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>__cf_bm</code>
            </td>
            <td>Cloudflare</td>
            <td>Anti-bot, détection de trafic automatisé</td>
            <td>30 minutes</td>
          </tr>
          <tr>
            <td>
              <code>cf_clearance</code>
            </td>
            <td>Cloudflare</td>
            <td>Validation du challenge anti-bot</td>
            <td>30 jours</td>
          </tr>
          <tr>
            <td>
              <code>whop_*</code>
            </td>
            <td>Whop (iframe checkout)</td>
            <td>Session de paiement, sécurité du checkout</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>
              <code>aica.deadline</code>
              <br />
              <em>(localStorage)</em>
            </td>
            <td>aicreativeacademy.fr</td>
            <td>
              Mémoriser le compte à rebours de l&apos;offre de lancement (UI)
            </td>
            <td>7 jours</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Gestion de vos préférences</h2>
      <p>
        Aucun consentement n&apos;est requis pour les traceurs ci-dessus. Vous
        pouvez néanmoins :
      </p>
      <ul>
        <li>
          Configurer votre navigateur pour bloquer ou supprimer les cookies
          (les instructions varient selon Chrome, Firefox, Safari, Edge)
        </li>
        <li>
          Vider votre stockage local (localStorage) via les outils de
          développement de votre navigateur
        </li>
        <li>
          Utiliser des outils tiers type{" "}
          <a
            href="https://www.youronlinechoices.com/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Online Choices
          </a>
        </li>
      </ul>
      <p>
        Le blocage des traceurs strictement nécessaires peut dégrader le
        fonctionnement du site (notamment le checkout).
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        La durée de vie des traceurs est précisée dans le tableau ci-dessus.
        Elle n&apos;excède jamais 13 mois, conformément aux recommandations de
        la CNIL.
      </p>

      <h2>6. Contact</h2>
      <p>
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </p>
    </>
  );
}
