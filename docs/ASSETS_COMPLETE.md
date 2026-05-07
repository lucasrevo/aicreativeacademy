# 📦 ASSETS COMPLETS — AI Creative Academy LP

Doc unique de référence pour le rebrand. Contient **tous les médias** disponibles dans `public/` + le **nouveau hero chrome** + ce qu'il y a à régénérer.

Repo : `/Users/lucasalleix/aicreativeacademy/`
Tous les chemins ci-dessous sont relatifs à `public/`.

---

## 🆕 NOUVEAU HERO — DA "Liquid Silver Mercury" (LOCKÉ)

| Fichier | Format | Usage | Status |
|---|---|---|---|
| **`hero/hero-chrome-bath.png`** | PNG 2K (3840×2160 area) | Hero principale full-bleed | ✅ **À utiliser obligatoirement** |
| `hero/hero-chrome-bath.mp4` | (à venir) | Loop animation seamless 6s | 🔄 En cours via Seedance 2.0 |

**Description du hero** : buste de l'avatar REVO baignant dans liquid silver mercury, palette burgundy + ink, H1 "AI CREATIVE ACADEMY" en silver chrome 3D bubble lettering au-dessus, CTA capsule chrome "JE LANCE MON AVATAR →" en bas. Le tout sur fond ink-black avec radial gradient burgundy.

**Implémentation Next.js suggérée** :
```tsx
<section className="relative w-full aspect-[16/9] overflow-hidden">
  <Image
    src="/hero/hero-chrome-bath.png"
    alt="AI Creative Academy"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  {/* Quand le mp4 sera prêt, switcher vers <video> avec poster={png} */}
</section>
```

⚠️ **Le H1 et le CTA sont DÉJÀ dans l'image** — pas besoin de les ajouter en HTML par-dessus. C'est un visuel monolithique.

---

## 🎯 BRAND ACTUEL (`public/brand/`)

| Fichier | Usage |
|---|---|
| `hero-rooftop.png` | ❌ ANCIEN HERO — à remplacer par `hero/hero-chrome-bath.png` |
| `logo-mark.png` | Logo header sticky — à garder ou à régénérer en silver chrome bubble |
| `logo-1.png` à `logo-6.png` | Variations logo (non utilisées) |

---

## 👤 AVATAR (`public/avatar/`) — utilisable section "Filmstrip" si réactivée

| Fichier |
|---|
| `portrait-01.jpeg` (Look 01) |
| `portrait-02.jpeg` (Look 02) |
| `portrait-03.jpeg` (Look 03) |
| `portrait-04.jpeg` (Look 04) |

---

## 🎬 REELS (`public/reels/`) — Section "Ce que tu vas apprendre"

| Fichier | Catégorie | Slot |
|---|---|---|
| `revo-crash.mov` | STORYTELLING — Crash scénarisé POV viral | 01 |
| `ugc-nikon.mp4` | UGC — « Je teste le Nikon » | 02 |
| `client-creative.mp4` | CLIENT READY — Créatives livrables | 03 |
| `ads.mp4` | ADS — Créatives Meta / TikTok | 04 |

**Implémentation suggérée** : `<video autoplay loop muted playsinline poster={thumb}>` dans une grille 4-colonnes 9:16, avec **chrome border CSS** par-dessus pour l'esthétique DA.

---

## 📋 PROCESS (`public/process/`) — Section "Méthode en 3 étapes"

| Fichier | Étape | Format |
|---|---|---|
| `step-1.gif` | Étape 1 — Crée | GIF |
| `step-2.mp4` | Étape 2 — Génère | MP4 |
| `step-3.gif` | Étape 3 — Monétise | GIF |

**Implémentation** : 3 cards horizontales reliées par chrome timeline track (CSS), media de chaque step affiché dans la card avec un chrome border subtil.

---

## ⭐ TESTIMONIALS (`public/testimonials/`)

| Fichier | Type |
|---|---|
| `slide-01.png` | Témoignage 1 |
| `slide-02.png` | Témoignage 2 |
| `slide-03.png` | Témoignage 3 |
| `review-01.png` | Review Skool 1 |
| `review-02.png` | Review Skool 2 |

**Implémentation** : 3 cards horizontales avec `slide-*.png` en visual + chrome border CSS + frosted backdrop.

---

## 🎨 ICONS / SVG (root `public/`)

`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — defaults Next.js, ignorables.

---

## 📊 RÉCAP CHIFFRES

| Catégorie | Nb fichiers |
|---|---|
| 🆕 Hero chrome | 1 PNG (+ 1 MP4 à venir) |
| Brand actuel | 8 (à filtrer) |
| Avatar portraits | 4 |
| Reels vidéos | 4 |
| Process médias | 3 |
| Testimonials | 5 |
| **TOTAL utilisables** | **~25 fichiers** |

---

## 🚧 À RÉGÉNÉRER (optionnel, phase 2)

| Asset | Priorité | Source |
|---|---|---|
| `hero/hero-chrome-bath.mp4` (loop animation) | HIGH | Seedance 2.0 — voir prompt loop |
| `brand/logo-mark.png` (chrome version) | MED | Higgsfield Nano Banana Pro |
| Section icons silver chrome (3 process steps) | LOW | CSS/SVG suffit |
| Reels thumbnails poster .jpg | LOW | Frame extract via ffmpeg |

Toutes générations centrales sont dans `revo-project-solo/marketing/landing-pages/v2-3d/generated/`.

---

## 🎯 INSTRUCTIONS POUR CLAUDE DESIGN

1. **Hero image** = `/hero/hero-chrome-bath.png` (à intégrer EN L'ÉTAT, full-bleed, le H1+CTA sont déjà dans l'image)
2. **Reels** = utiliser les 4 MP4/MOV existants dans `/reels/` (autoplay loop muted)
3. **Process** = utiliser les 3 GIFs/MP4 existants dans `/process/`
4. **Testimonials** = utiliser les 3 PNG existants dans `/testimonials/`
5. **Tout le reste** (chrome borders, headers chrome bubble, drips décoratifs, badges) = pur **CSS/SVG** par Claude Design (ne pas dépendre d'images)
