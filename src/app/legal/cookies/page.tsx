import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique cookies · AI CREATIVE ACADEMY",
  description: "Politique d'utilisation des cookies sur aicreativeacademy.com.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Politique cookies</h1>
      <p className="lead">Dernière mise à jour : 6 mai 2026</p>

      <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal lors de
        la visite d&apos;un site. Il permet de reconnaître le navigateur,
        conserver des préférences, mesurer l&apos;audience ou personnaliser
        l&apos;expérience.
      </p>

      <h2>2. Cookies utilisés sur aicreativeacademy.com</h2>

      <h3>Cookies strictement nécessaires</h3>
      <p>
        Indispensables au fonctionnement du site (session, panier, checkout
        Whop). Ils ne requièrent pas votre consentement.
      </p>
      <ul>
        <li>
          <strong>Whop</strong> — session de paiement
        </li>
        <li>
          <strong>Cloudflare</strong> — sécurité, anti-bot, équilibrage de
          charge
        </li>
      </ul>

      <h3>Cookies de mesure d&apos;audience</h3>
      <p>
        Aucun cookie de mesure d&apos;audience (Google Analytics, Microsoft
        Clarity ou autre) n&apos;est actuellement déposé sur le site. Si nous
        en mettons en place ultérieurement, ils ne seront déposés
        qu&apos;avec votre consentement explicite préalable.
      </p>

      <h2>3. Gestion de vos préférences</h2>
      <p>Vous pouvez à tout moment :</p>
      <ul>
        <li>
          Modifier vos préférences via le bandeau cookies (lien « Gérer mes
          cookies » en bas de page, à activer)
        </li>
        <li>
          Configurer votre navigateur pour bloquer les cookies (les
          instructions varient selon Chrome, Firefox, Safari, Edge)
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
        Le refus des cookies de mesure d&apos;audience n&apos;empêche pas
        l&apos;utilisation du site. Le refus des cookies strictement
        nécessaires peut dégrader le fonctionnement du site.
      </p>

      <h2>4. Durée de conservation</h2>
      <p>
        La durée de vie d&apos;un cookie est de 13 mois maximum conformément
        aux recommandations de la CNIL. Votre consentement est redemandé à
        l&apos;expiration.
      </p>

      <h2>5. Contact</h2>
      <p>
        <a href="mailto:lucas.socialcontact@gmail.com">
          lucas.socialcontact@gmail.com
        </a>
      </p>
    </>
  );
}
