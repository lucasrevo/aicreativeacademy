# BRIEF — AI CREATIVE ACADEMY · Landing Page Rebuild

> Document complet pour Claude Design (claude.ai). 9 images jointes + médias vidéos/gifs en référence.
> Version : finale · 2026-05-07

> 📐 **Pour la structure A→Z du site** (ordre des sections, layout, copy canonique, ASCII wireframes), consulter le fichier joint **`STRUCTURE/SITE_STRUCTURE.md`**. C'est la source de vérité — ne PAS aller chercher les infos sur la LP live, certains titres et chiffres y sont différents.

---

## 🎯 MISSION

Refais entièrement la landing page **AI CREATIVE ACADEMY** avec une nouvelle direction artistique "Liquid Silver Mercury".

**LP actuelle** (référence copy/structure UNIQUEMENT) :
https://aicreativeacademy.pages.dev/

**Stack technique** :
- Next.js 16 + React + TypeScript + Tailwind 4 + shadcn/ui
- Single artifact drop-in pour `src/app/page.tsx`
- Mobile responsive impeccable

---

## 🏢 BRAND CONTEXT (IMPORTANT — solo)

- **Entreprise** : REVO LAB (uniquement)
- **Produit** : AI Creative Academy
- **Founder** : solo

❌ AUCUNE mention de :
- Costa Payments LLC
- Adrien
- Co-founder / partnership

✅ Footer : juste `© 2026 REVO LAB · Tous droits réservés`

---

## ⛔ RÈGLES ABSOLUES

### Interdit d'inventer
- ❌ Pas de stat, métrique, vues, note, avis fictifs
- ❌ Pas de "1,2M vues" ou "4,9/5 sur 312 avis"
- ❌ Si l'info n'est pas dans la LP live → SKIP

### Chiffres autorisés (les SEULS)
- 97€ (rayé 197€) · paiement unique · accès à vie
- 100 premières places · garantie 14 jours
- 7 modules · 21 leçons
- Valeur 1 873€ (1 082€ formation + 791€ bonus)

---

## 🎨 DA "LIQUID SILVER MERCURY"

### Palette stricte (ZÉRO gold autorisé)
- **Ink** `#0A0405` — background dominant
- **Burgundy** `#8B1A1A` / deep `#5A0F10` / bright `#B52424` — radial gradient + accents
- **White** — texte
- **Silver chrome metallic** — gradients CSS, borders, accents

### Techniques chrome en CSS pur
```css
/* Faux chrome metallic */
background: linear-gradient(180deg, #E8E8E8 0%, #FFFFFF 50%, #C0C0C0 100%);
border: 1px solid rgba(255,255,255,0.4);
box-shadow: 0 10px 30px -8px rgba(192,192,192,0.5),
            inset 0 1px 0 rgba(255,255,255,0.6);

/* Glassmorphism cards */
background: rgba(10,4,5,0.6);
border: 1px solid silver-chrome-gradient;
backdrop-filter: blur(12px);
```

### UI language cohérent partout
- Cards : ink + 1px silver chrome border + backdrop-blur + soft inner glow
- Boutons CTA : pill chrome (gradient silver + border + shadow + shimmer hover)
- Headers de section : silver chrome bubble compact
- Background sections : ink + radial-gradient burgundy
- Typo : Bebas Neue (display) · Inter (body) · JetBrains Mono (labels uppercase 0.22em)

---

# 📂 MAPPING DES 9 IMAGES JOINTES

**Lis bien ce tableau — il dit où placer chaque image dans le repo.**

| # | Fichier joint | Type | Path destination dans `/public/` | Section où l'utiliser |
|---|---|---|---|---|
| **01** | `01_HERO_chrome-bath.jpg` | **ASSET** | `/public/hero/hero-chrome-bath.png` | Hero — image full-bleed background |
| **02** | `02_CE-QUILS-EN-DISENT.jpg` | **ASSET** | `/public/sections/ce-quils-en-disent.png` | Section "Ce qu'ils en disent" — image full-width seule |
| **03** | `03_MODULE-01-avatar.jpg` | **ASSET** | `/public/modules/1.png` | Bento m1 (col-4 row-2) |
| **04** | `04_MODULE-02-images.jpg` | **ASSET** | `/public/modules/2.png` | Bento m2 (col-2 row-1) |
| **05** | `05_MODULE-03-videos.jpg` | **ASSET** | `/public/modules/3.png` | Bento m3 (col-2 row-1) |
| **06** | `06_MODULE-04-montage.jpg` | **ASSET** | `/public/modules/4.png` | Bento m4 (col-4 row-2) |
| **07** | `07_MODULE-05-voix.jpg` | **ASSET** | `/public/modules/5.png` | Bento m5 (col-2 row-1) |
| **08** | `08_MODULE-06-script.jpg` | **ASSET** | `/public/modules/6.png` | Bento m6 (col-2 row-1) |
| **09** | `09_MODULE-07-monetisation.jpg` | **ASSET** | `/public/modules/7.png` | Bento m7 (col-6 row-2) |

### Règles d'usage des images jointes

**Les 9 images jointes = ASSETS À UTILISER DIRECTEMENT** dans le code (sauve les originaux `.png` dans `/public/` aux paths indiqués).

---

## 🎬 MÉDIAS VIDÉOS / GIFS (process + reels)

⚠️ **Pas d'images jointes pour le process et les reels.** Les médias originaux (`.mp4` / `.mov` / `.gif`) sont les seuls assets à câbler. Ils sont **déjà présents dans le repo** aux paths indiqués ci-dessous.

Pour visualiser leur contenu, le sous-dossier `MEDIAS_REELS_REPO/` (joint au package) contient les 7 fichiers réels :
- `step-1.gif`, `step-2.mp4`, `step-3.gif`
- `revo-crash.mov`, `ugc-nikon.mp4`, `client-creative.mp4`, `ads.mp4`

→ **Ne pas uploader le sous-dossier sur claude.ai.** Les médias y sont uniquement pour référence locale ; câble simplement les paths `/public/process/...` et `/public/reels/...` dans le code généré.

**Formats des fichiers existants dans `/public/` (CRITIQUE — NE PAS SE TROMPER)** :

### Process (3 fichiers) — 2 GIFs + 1 MP4
| Path repo | Format | Composant à utiliser |
|---|---|---|
| `/process/step-1.gif` | **GIF** 🎞️ | `<Image unoptimized={true}>` |
| `/process/step-2.mp4` | **MP4** 🎥 | `<video autoPlay loop muted playsInline>` |
| `/process/step-3.gif` | **GIF** 🎞️ | `<Image unoptimized={true}>` |

### Reels (4 fichiers) — 1 MOV + 3 MP4
| Path repo | Format | Composant à utiliser |
|---|---|---|
| `/reels/revo-crash.mov` | **MOV** ⚠️ | `<video>` avec **multiple sources fallback** |
| `/reels/ugc-nikon.mp4` | **MP4** | `<video autoPlay loop muted playsInline>` |
| `/reels/client-creative.mp4` | **MP4** | `<video autoPlay loop muted playsInline>` |
| `/reels/ads.mp4` | **MP4** | `<video autoPlay loop muted playsInline>` |

⚠️ **Pour les GIFs** (steps 1 et 3) : OBLIGATOIRE `unoptimized={true}` sur `<Image>` sinon Next.js casse l'animation et affiche une image fixe.

⚠️ **Pour le MOV** (revo-crash) : Chrome/Firefox ne supportent pas .mov nativement. Utiliser `<source>` multiple :
```tsx
<video autoPlay loop muted playsInline>
  <source src="/reels/revo-crash.mov" type="video/quicktime" />
  <source src="/reels/revo-crash.mp4" type="video/mp4" />
</video>
```

---

## 📐 STRUCTURE — 8 SECTIONS

1. HEADER + HERO IMMERSIF
2. CE QU'ILS EN DISENT (testimonials)
3. MÉTHODE EN 3 ÉTAPES
4. CE QUE TU VAS APPRENDRE (4 reels 9:16)
5. TOUT CE QUE TU REÇOIS (7 modules + 3 bonus + ticket)
6. CHECKOUT
7. FAQ
8. FOOTER

---

## 1️⃣ HEADER + HERO FUSIONNÉS

**Image utilisée** : #01 `hero-chrome-bath.png` (full-bleed background)

UN SEUL bloc full-bleed. L'image hero est le BACKGROUND. Le header (logo, nav, CTA) FLOTTE par-dessus en transparent.

⚠️ L'image hero contient DÉJÀ le H1 "AI CREATIVE ACADEMY" en silver chrome 3D. **NE PAS rajouter de H1 HTML par-dessus**. Le CTA "JE LANCE MON AVATAR →" est ajouté en HTML par-dessus en bas (silver chrome capsule).

```tsx
<section className="relative w-full h-screen min-h-[700px] overflow-hidden">
  <Image
    src="/hero/hero-chrome-bath.png"
    alt="AI Creative Academy"
    fill priority
    className="object-cover -z-10"
    sizes="100vw"
  />
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b 
                  from-ink/60 to-transparent -z-10 pointer-events-none" />
  <header className="absolute inset-x-0 top-0 z-10 px-6 py-4 
                     flex items-center justify-between">
    <span className="text-white font-bold tracking-wider">REVO LAB</span>
    <nav className="hidden md:flex gap-8 text-white/80">
      <a href="#programme">Programme</a>
      <a href="#fonctionnalites">Fonctionnalités</a>
      <a href="#tarifs">Tarifs</a>
    </nav>
    <button className="silver-chrome-pill-small">Commencer →</button>
  </header>
  <div className="absolute inset-x-0 bottom-12 z-10 flex justify-center">
    <a href="#checkout" className="silver-chrome-pill-large 
       inline-flex items-center gap-3 px-8 py-4 text-ink font-bold 
       tracking-wider uppercase text-sm">
      JE LANCE MON AVATAR →
    </a>
  </div>
</section>
```

**Interactivité** :
- Parallax subtil au scroll (image translate Y -10%)
- Hover nav links → chrome shimmer sweep léger
- Au scroll de 100px → header devient sticky avec backdrop-blur + bg ink/40

**Mobile (<768px)** :
- Image full-bleed reste, hauteur min-h-[600px]
- Nav links → burger menu (Sheet shadcn/ui)
- CTA principal reste centré bas

---

## 2️⃣ CE QU'ILS EN DISENT

**Image utilisée** : #02 `CE-QUILS-EN-DISENT.jpg` (full-width seule)

⚠️ La section s'appelle **"CE QU'ILS EN DISENT"** (pas "Avis Bruts").

UNE SEULE IMAGE full-width. Contient déjà tout : header silver chrome bubble + 3 cards verified + témoignages réels.

```tsx
<section className="relative w-full py-20">
  <div className="max-w-6xl mx-auto px-4">
    <Image
      src="/sections/ce-quils-en-disent.png"
      alt="Ce qu'ils en disent — témoignages vérifiés"
      width={1916} height={1080}
      className="w-full h-auto"
    />
  </div>
</section>
```

→ Pas de texte HTML par-dessus, l'image contient déjà tout.

---

## 3️⃣ MÉTHODE EN 3 ÉTAPES

**Aucune image jointe pour cette section.**
**Assets à câbler** (déjà dans le repo, voir aussi `MEDIAS_REELS_REPO/` pour visualiser) :
- `/process/step-1.gif`
- `/process/step-2.mp4`
- `/process/step-3.gif`

3 cards horizontales. Médias **FULL-COVER** (PAS de crop circulaire blur). Titre + description courte sous l'image.

| Card | Média (déjà dans repo) | Titre | Description |
|---|---|---|---|
| 01 | `/process/step-1.gif` | Créer ton avatar IA | Identité, photos, animation. Un avatar que personne ne distingue d'un humain. |
| 02 | `/process/step-2.mp4` | Génère du contenu IA ultra-réaliste | Reels, UGC, ads, stories. Ton avatar poste sans toi — script, voix, montage. |
| 03 | `/process/step-3.gif` | Monétise ton avatar IA | Produits digitaux, affiliation, clients. Un actif qui te paie chaque jour. |

⚠️ **GIFs (steps 1 et 3) doivent avoir `unoptimized={true}`** sinon Next casse l'animation.

```tsx
<article className="card silver-chrome-border rounded-2xl overflow-hidden">
  {/* GIF (étapes 1 et 3) */}
  <div className="aspect-[3/4] relative bg-ink">
    <Image src="/process/step-1.gif" alt="Crée" fill 
           unoptimized={true} className="object-cover" />
  </div>
  {/* OU MP4 (étape 2) */}
  <div className="aspect-[3/4] relative bg-ink">
    <video src="/process/step-2.mp4" autoPlay loop muted playsInline 
           preload="metadata" className="w-full h-full object-cover" />
  </div>
  
  <div className="p-6 bg-ink">
    <h3 className="text-2xl font-bold">Créer ton avatar IA</h3>
    <p className="text-white/70 mt-2">Identité, photos, animation. 
       Un avatar que personne ne distingue d'un humain.</p>
  </div>
</article>
```

---

## 4️⃣ CE QUE TU VAS APPRENDRE — 4 REELS

**Aucune image jointe pour cette section.**
**Assets à câbler** (déjà dans le repo, voir aussi `MEDIAS_REELS_REPO/` pour visualiser) :

| Slot | Catégorie | Vidéo |
|---|---|---|
| 01 | STORYTELLING | `/reels/revo-crash.mov` ⚠️ |
| 02 | UGC | `/reels/ugc-nikon.mp4` |
| 03 | CLIENT READY | `/reels/client-creative.mp4` |
| 04 | ADS | `/reels/ads.mp4` |

Grille 4 cols desktop / 2 cols mobile, vertical 9:16.

⚠️ **Le `.mov` n'est pas supporté nativement par Chrome/Firefox**.

**FIX** : multiple sources fallback :
```tsx
<video autoPlay loop muted playsInline preload="metadata"
       className="h-full w-full object-cover rounded-xl">
  <source src="/reels/revo-crash.mov" type="video/quicktime" />
  <source src="/reels/revo-crash.mp4" type="video/mp4" />
</video>
```

Si la vidéo ne charge toujours pas → placeholder dark + tag "STORYTELLING" + "01" + play icon silver chrome. **JAMAIS bloc noir vide**.

---

## 5️⃣ TOUT CE QUE TU REÇOIS

Header massive : Tag mono `// REVO LAB · LOADOUT 001` + H2 énorme `TOUT CE QUE TU REÇOIS.` ("CE QUE" en outlined stroke white, "REÇOIS." en silver mercury chrome glow).

### 5.1 — La formation (grille bento 6 cols, 7 modules)

**Images utilisées** : #03 à #09 (sauves dans `/public/modules/1.png` à `7.png`)

Sub-header : "01" + "La formation" + "7 modules · 21 leçons"

| Card | Span | Image | Titre (mot-clé silver) | Prix barré | Description |
|---|---|---|---|---|---|
| m1 | col-4 row-2 | `/modules/1.png` | "Crée ton AVATAR." | 197€ | Identité visuelle, Identity Lock, premières photos cohérentes. |
| m2 | col-2 row-1 | `/modules/2.png` | "Génère tes IMAGES." | 297€ | Nano Banana, prompting de directeur créatif, images premium. |
| m3 | col-2 row-1 | `/modules/3.png` | "Génère tes VIDÉOS." | 247€ | Kling 3.0, animation, Start/End frames, motion control. |
| m4 | col-4 row-2 | `/modules/4.png` | "Monte tes VIDÉOS." | 147€ | CapCut de A à Z : transitions, sous-titres, export 9:16. |
| m5 | col-2 row-1 | `/modules/5.png` | "Crée ta VOIX IA." | 147€ | Clone ta voix ou crée-la from scratch sur ElevenLabs. |
| m6 | col-2 row-1 | `/modules/6.png` | "Scripts & VIRALITÉ." | 97€ | Hooks, patterns viraux, les 3 premières secondes. |
| m7 | col-6 row-2 | `/modules/7.png` | "Monétise ton AVATAR." | 147€ | Offres, ads, prestations, partenariats. |

**Chaque card** :
- Image background `object-cover` + overlay gradient ink+burgundy (lisibilité textes)
- Stamp `✓ INCLUS` rotated -3deg silver chrome pill
- Numéro **M·01 BLANC SIMPLE** `text-sm font-mono opacity-80` (PAS chrome glow énorme illisible)
- Titre Bebas Neue avec mot-clé final en silver mercury accent
- Prix barré silver mono bas-droite
- Hover : border silver chrome glow + image scale 1.06

```tsx
<span className="absolute top-4 right-4 z-10 text-white text-sm 
                 font-mono uppercase tracking-wider opacity-80">
  M·01
</span>
```

### 5.2 — Les 3 bonus offerts

Sub-header : "02" + "Les bonus offerts" + "3 bonus · valeur 791€"

#### BONUS 1 — GPT REVO LAB (card pleine largeur)
- Ribbon `🎁 OFFERT` rotated 8deg silver chrome top-right
- Tag pill `🤖 Agent IA` silver chrome
- H2 : `LE GPT REVO LAB` (REVO LAB silver mercury glow)
- Sub : "Tu lui parles **en français**, il **écrit les prompts à ta place** — calibré Nano Banana + Kling, celui qu'on utilise tous les jours chez REVO LAB."
- Hook border-left 4px silver : "Pourquoi ça te fait gagner **3h par jour** ?"
- Comparaison side-by-side avec pill `VS` silver chrome :

| SANS NOUS (red accent) | AVEC NOUS (silver chrome glow) |
|---|---|
| 🧪 T'écris tes prompts | 🤖 L'agent prompt pour toi |
| 🧬 Avatar instable | 🔒 Avatar verrouillé |
| 💸 ×5 crédits cramés | 💰 −97% de crédits |

#### BONUS 2 — GPT SEEDANCE 2.0 (même structure)
- Tag pill `🎬 Agent IA · Seedance`
- H2 : `LE GPT SEEDANCE 2.0`
- Sub : "Même logique, **nouveau modèle vidéo**. Tu lui décris ta scène en français, il **rédige le prompt calibré Seedance 2.0** avec mouvements caméra, durée, ambiance."
- Hook : "Pourquoi tes scènes sortent **enfin du lot** ?"

| SANS NOUS | AVEC NOUS |
|---|---|
| 📹 Mouvements caméra random | 🎞 Cinematic dès le 1er essai |
| 🌪 Prompts brouillons | ⚡ Prompts optimisés Seedance |
| ⏱ 10 retries pour 1 scène | 🎯 1 prompt = 1 scène |

#### BONUS 3 — MANYCHAT (mini bubble compact, dashed border silver)
- Pill `+ BONUS` silver chrome
- "Automation **ManyChat**." (ManyChat silver mercury)
- "Le système qu'on utilise pour qualifier nos DM IG : keyword → qualification → CTA. Setup complet, plug & play."

### 5.3 — Ticket Pricing

Ticket avec encoches dot-matrix top/bottom (style ticket cinéma), border 1px silver chrome, max-width 540px centré.

**Header** : `// REVO LAB · ticket #001` gauche silver mono | `paiement unique` droite mono white/45

**Rows** :
1. "La formation · 7 modules · 21 leçons · à vie" → **1 082€** (rayé silver)
2. "Les 3 bonus · GPT REVO + GPT Seedance + ManyChat" → **791€** (rayé)
3. "Valeur totale" (background plus clair) → **1 873€** (rayé Bebas 2rem)
4. "Prix habituel" (background dark) → **197€** (rayé mono)
5. "**TON PRIX**" (gradient silver→ink subtle) → **97€** ÉNORME silver mercury chrome bubble glow (Bebas Neue 5.5rem max)

**CTA en dessous** :
- Bouton silver chrome capsule `JE LANCE MON AVATAR →` + shimmer hover
- Trust line mono uppercase white/45 :
  `Accès immédiat · Garantie 14 jours · Updates à vie`

---

## 6️⃣ CHECKOUT

Centered panel avec :
- Countdown silver chrome digits + label `FIN DE L'OFFRE DANS`
- Header `REJOINS LES 100 PREMIERS` silver chrome bubble
- Deal panel card silver chrome border + ink interior
- `97€` silver mercury chrome bubble + `197€` rayé
- Whop iframe `<div id="whop-checkout" />`
- Trust badges silver chrome icons : 🔒 Paiement sécurisé · ⚡ Accès immédiat · 🛡 Garantie 14j

---

## 7️⃣ FAQ

Accordion shadcn/ui. Header `QUESTIONS FRÉQUENTES` silver chrome bubble compact.

4 questions à reprendre **de la LP live** (NE PAS INVENTER de questions).

Mini silver mercury `+` icons sur chaque row.

---

## 8️⃣ FOOTER MINIMAL

3 cols simple :
- **LEFT** : `REVO LAB` wordmark silver chrome bubble + tagline mono "Le studio derrière AI Creative Academy"
- **CENTER** : legal links mono uppercase (Mentions Légales · CGV · Confidentialité · Cookies)
- **RIGHT** : social IG @revo + mini silver chrome icon
- **Bottom** : `© 2026 REVO LAB · Tous droits réservés` mono white/40

⚠️ **ZÉRO mention Costa Payments / Adrien / co-founder. Solo brand REVO LAB.**

---

## ✅ LIVRABLE FINAL

**Single artifact** : `src/app/page.tsx` complet

**Critères qualité** :
- ✅ Mobile responsive impeccable (test à 375px / 768px / 1440px)
- ✅ DA Liquid Silver Mercury cohérente sur toutes les sections
- ✅ ZÉRO gold (palette stricte)
- ✅ ZÉRO chiffre inventé
- ✅ ZÉRO mention Costa Payments / Adrien
- ✅ Animations subtle (parallax hero, shimmer chrome CTA, scroll reveal)
- ✅ Accessibilité (alt text, aria-labels, focus states)
- ✅ Performance (Image priority hero, lazy load reste, preload metadata vidéos)
- ✅ Tous les paths assets correctement câblés selon le mapping ci-dessus

**Vibe** : Apple Vision Pro × Yeezy Season × Liquid Mercury fashion week × A24 movie poster.
