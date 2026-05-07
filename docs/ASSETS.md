# Assets — AI Creative Academy LP

Inventaire complet de tous les médias référencés dans la landing page.

Repo : `/Users/lucasalleix/aicreativeacademy/`
Tous les chemins ci-dessous sont relatifs à `public/`.

---

## 🎯 BRAND (`public/brand/`)

| Fichier | Usage | Composant |
|---|---|---|
| `hero-rooftop.png` | Image hero principale (Lucas + Adri rooftop) | `src/app/page.tsx:97` |
| `logo-mark.png` | Logo header sticky | `src/components/header.tsx:40` |
| `logo-1.png` à `logo-6.png` | Variations logo (non utilisées dans page.tsx actuel) | — |

---

## 👤 AVATAR (`public/avatar/`)

| Fichier | Usage | Composant |
|---|---|---|
| `portrait-01.jpeg` | Look 01 dans filmstrip | `filmstrip.tsx:4` |
| `portrait-02.jpeg` | Look 02 dans filmstrip | `filmstrip.tsx:5` |
| `portrait-03.jpeg` | Look 03 dans filmstrip | `filmstrip.tsx:6` |
| `portrait-04.jpeg` | Look 04 dans filmstrip | `filmstrip.tsx:7` |

> Note : composant `filmstrip.tsx` actuellement non utilisé dans `page.tsx` (HIDDEN).

---

## 🎬 REELS (`public/reels/`) — Section "Ce que tu vas apprendre"

| Fichier | Catégorie | Slot | Composant |
|---|---|---|---|
| `revo-crash.mov` | STORYTELLING — Crash scénarisé POV viral | 01 | `page.tsx:35` |
| `ugc-nikon.mp4` | UGC — « Je teste le Nikon » | 02 | `page.tsx:43` |
| `client-creative.mp4` | CLIENT READY — Créatives livrables | 03 | `page.tsx:51` |
| `ads.mp4` | ADS — Créatives Meta / TikTok | 04 | `page.tsx:59` |

> Affichés dans la grille 4-up via `<CreateCard />`.

---

## 📋 PROCESS (`public/process/`) — Section "Méthode en 3 étapes"

| Fichier | Étape | Format | Composant |
|---|---|---|---|
| `step-1.gif` | Étape 1 — Crée | GIF | `process-timeline.tsx:23` |
| `step-2.mp4` | Étape 2 — Génère | MP4 | `process-timeline.tsx:33` |
| `step-3.gif` | Étape 3 — Monétise | GIF | `process-timeline.tsx:43` |

> Composant `<ProcessTimeline />` — sait gérer GIF + MP4/WebM dynamiquement (`process-timeline.tsx:104`).

---

## ⭐ TESTIMONIALS (`public/testimonials/`)

| Fichier | Usage | Composant |
|---|---|---|
| `slide-01.png` | Témoignage 1 (slot 03) | `testimonials.tsx:36` |
| `slide-02.png` | Témoignage 2 (slot 02) | `testimonials.tsx:30` |
| `slide-03.png` | Témoignage 3 (slot 01) | `testimonials.tsx:24` |
| `review-01.png` | Review Skool 1 | `reviews.tsx:10` |
| `review-02.png` | Review Skool 2 | `reviews.tsx:15` |

> `<Testimonials />` et `<Reviews />` actuellement HIDDEN dans `page.tsx` (réactivable, voir commentaires).

---

## 🎨 SVG / ICONS (root `public/`)

| Fichier | Usage |
|---|---|
| `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | Defaults Next.js (non utilisés activement) |

---

## 🔧 CONFIG

| Fichier | Usage |
|---|---|
| `_headers` | Cloudflare Pages headers config |
| `out/` | Build output Next.js export |

---

## 📊 RÉCAP CHIFFRES

- **Brand** : 8 images (hero + 6 logos + logo-mark)
- **Avatar** : 4 portraits
- **Reels** : 4 vidéos (.mov + 3× .mp4)
- **Process** : 3 médias (2 GIFs + 1 MP4)
- **Testimonials** : 5 PNG (3 slides + 2 reviews)
- **Total assets actifs** : ~24 fichiers média

---

## 🚧 ASSETS À REMPLACER POUR LE REBRAND "Liquid Silver Mercury"

Pour la refonte DA, voici les assets à régénérer :

| Asset actuel | Remplacement |
|---|---|
| `brand/hero-rooftop.png` | → `hero/hero-chrome-bath.png` (chrome bath final) + `.mp4` (Seedance loop) |
| `brand/logo-mark.png` | → logo silver chrome bubble compact |
| `process/step-*` | → 3 nouvelles scènes process avec accents chrome subtle |
| `testimonials/slide-*` | → garder photos réelles, juste ajouter chrome border en CSS |
| `reels/*` | → garder MP4, encadrer en CSS chrome border |

Génération centrale : déjà en cours via Higgsfield Nano Banana Pro 2 et Seedance 2.0 (voir `marketing/landing-pages/v2-3d/generated/` dans `revo-project-solo`).
