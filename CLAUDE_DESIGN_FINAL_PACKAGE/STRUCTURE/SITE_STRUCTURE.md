# 🏗️ STRUCTURE A→Z · AI CREATIVE ACADEMY

> Source de vérité pour la **structure** du site (ordre des sections, hiérarchie visuelle, copy canonique).
> ⚠️ NE PAS aller chercher les infos sur la LP live — certains titres / chiffres sont **différents**. Cette doc + le `00_BRIEF.md` sont la **seule source canonique**.

---

## 📐 ORDRE DES SECTIONS (top → bottom)

```
┌──────────────────────────────────────────┐
│ 0 · HEADER (sticky)                      │
├──────────────────────────────────────────┤
│ 1 · HERO IMMERSIF (image full-bleed)     │
├──────────────────────────────────────────┤
│ 2 · CE QU'ILS EN DISENT (testimonials)   │
├──────────────────────────────────────────┤
│ 3 · MÉTHODE EN 3 ÉTAPES                  │
├──────────────────────────────────────────┤
│ 4 · CE QUE TU VAS APPRENDRE (4 reels)    │
├──────────────────────────────────────────┤
│ 5 · TOUT CE QUE TU REÇOIS                │
│   ├─ 5.1 La formation (bento 7 modules)  │
│   ├─ 5.2 Les 3 bonus offerts             │
│   └─ 5.3 Ticket pricing                  │
├──────────────────────────────────────────┤
│ 6 · CHECKOUT (countdown + Whop)          │
├──────────────────────────────────────────┤
│ 7 · FAQ (4 questions)                    │
├──────────────────────────────────────────┤
│ 8 · FOOTER                               │
└──────────────────────────────────────────┘
```

---

## 0️⃣ HEADER (sticky)

Header full-width sticky qui devient solid au scroll. Logo gauche + menu burger droite.

```
┌────────────────────────────────────────────────────────────┐
│  [⚪ logo]  REVO LAB                            [≡ Menu ]  │
└────────────────────────────────────────────────────────────┘
```

**Contenu** :
- **Logo** : pastille `/brand/logo-mark.png` 36×36 + wordmark `REVO LAB` (display font)
- **CTA droite** : bouton menu burger qui ouvre un drawer right-side

**Drawer (au clic)** :
```
┌─────────────────────────────┐
│  // NAVIGATION         [✕]  │
├─────────────────────────────┤
│ Résultats              →    │
│ Ce que tu apprends     →    │
│ Modules & bonus        →    │
│ Valeur réelle          →    │
│ FAQ                    →    │
│ S'INSCRIRE — 97€       →    │  ← silver chrome accent
├─────────────────────────────┤
│ AI CREATIVE ACADEMY ·       │
│ by Lucas Alleix             │
└─────────────────────────────┘
```

**Style DA** : ink + 1px silver hairline en bottom + backdrop-blur au scroll.

---

## 1️⃣ HERO IMMERSIF — full-bleed monolithique

⚠️ L'image hero (`/hero/hero-chrome-bath.png`) contient **DÉJÀ** :
- Le H1 "AI CREATIVE ACADEMY" en silver chrome 3D
- Le visage avatar baignant dans liquid silver mercury
- Le fond ink + radial burgundy

→ **NE PAS rajouter de H1 HTML par-dessus**.

```
┌────────────────────────────────────────────────────────────┐
│ [REVO LAB]    Programme  Fonctionnalités  Tarifs  [≡]      │ ← header transparent overlay
│                                                            │
│                                                            │
│              [IMAGE HERO MONOLITHIQUE]                     │
│         (avatar + AI CREATIVE ACADEMY chrome              │
│              + splashes mercury)                           │
│                                                            │
│                                                            │
│              ┌─────────────────────────────┐               │
│              │  JE LANCE MON AVATAR  →     │  ← CTA chrome │
│              └─────────────────────────────┘               │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Hauteur** : `h-screen min-h-[700px]` desktop, `min-h-[600px]` mobile.

**Header overlay** : transparent par-dessus l'image, avec gradient ink/60 → transparent en top 32px pour la lisibilité.

**CTA bottom** : silver chrome capsule centrée, position absolute bottom-12.

**Au scroll 100px** : header devient sticky avec backdrop-blur + bg ink/40.

**Mobile** : nav links → burger ; CTA reste centré bas.

---

## 2️⃣ CE QU'ILS EN DISENT — image full-width

⚠️ Section nommée **"CE QU'ILS EN DISENT"** (PAS "Avis bruts").

UNE SEULE image (`/sections/ce-quils-en-disent.png`) qui contient :
- Header silver chrome bubble
- 3 cards verified avec stars + témoignages réels
- Tag mono "3 retours · membres" en haut droite

```
┌────────────────────────────────────────────────────────────┐
│  // CE QU'ILS EN DISENT              3 retours · membres   │
│                                                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ ★★★★★      │  │ ★★★★★       │  │ ★★★★★       │         │
│  │ « Quote 1 » │  │ « Quote 2 »  │  │ « Quote 3 »  │         │
│  │ ⓘ Name+meta │  │ ⓘ Name+meta  │  │ ⓘ Name+meta  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└────────────────────────────────────────────────────────────┘
```

**Implémentation** : `<Image fill width={1916} height={1080}>` full-width. Pas de texte HTML par-dessus.

---

## 3️⃣ MÉTHODE EN 3 ÉTAPES

3 cards horizontales connectées par un connecteur arrow silver chrome.

```
┌────────────────────────────────────────────────────────────┐
│  La méthode en 3 étapes.                  Crée·Génère·Monétise │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────┐  →   ┌──────────┐  →   ┌──────────┐         │
│  │          │      │          │      │          │         │
│  │  GIF #1  │      │  MP4 #2  │      │  GIF #3  │         │
│  │ aspect   │      │ aspect   │      │ aspect   │         │
│  │  4/5     │      │  4/5     │      │  4/5     │         │
│  │          │      │          │      │          │         │
│  └──────────┘      └──────────┘      └──────────┘         │
│  01 ───────        02 ───────        03 ───────           │
│  Crée ton          Génère du         Monétise ton         │
│  avatar IA         contenu IA        avatar IA            │
│                    ultra-réaliste                          │
│                                                            │
│  Identité,         Reels, UGC,       Produits digitaux,    │
│  photos, anim.     ads, stories.     affiliation, clients. │
└────────────────────────────────────────────────────────────┘
```

**Médias** (déjà dans `/public/process/`) :
- `step-1.gif` (GIF — `unoptimized={true}`)
- `step-2.mp4` (MP4 — `<video autoPlay loop muted playsInline>`)
- `step-3.gif` (GIF — `unoptimized={true}`)

**Copy canonique** :

| # | Titre | Description |
|---|---|---|
| 01 | Créer ton avatar IA | Identité, photos, animation. Un avatar que personne ne distingue d'un humain. |
| 02 | Génère du contenu IA ultra-réaliste | Reels, UGC, ads, stories. Ton avatar poste sans toi — script, voix, montage. |
| 03 | Monétise ton avatar IA | Produits digitaux, affiliation, clients. Un actif qui te paie chaque jour. |

**Connecteurs** : rond silver chrome 32×32 avec `→` desktop / `↓` mobile entre les cards.

---

## 4️⃣ CE QUE TU VAS APPRENDRE — 4 reels 9:16

Grille 4 cols desktop / 2 cols mobile. Chaque card est un reel 9:16 autoplay loop muted.

```
┌────────────────────────────────────────────────────────────┐
│  Ce que tu vas apprendre à faire.                          │
│                                                            │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                    │
│  │  01  │  │  02  │  │  03  │  │  04  │                    │
│  │ STORY│  │ UGC  │  │CLIENT│  │ ADS  │                    │
│  │ TELL │  │      │  │ READY│  │      │                    │
│  │      │  │      │  │      │  │      │                    │
│  │ video│  │ video│  │ video│  │ video│                    │
│  │ 9:16 │  │ 9:16 │  │ 9:16 │  │ 9:16 │                    │
│  └──────┘  └──────┘  └──────┘  └──────┘                    │
└────────────────────────────────────────────────────────────┘
```

**Médias** (déjà dans `/public/reels/`) :

| Slot | Catégorie | Titre | Vidéo |
|---|---|---|---|
| 01 | STORYTELLING | Crash scénarisé · POV viral | `revo-crash.mov` ⚠️ |
| 02 | UGC | « Je teste le Nikon » | `ugc-nikon.mp4` |
| 03 | CLIENT READY | Créatives livrables | `client-creative.mp4` |
| 04 | ADS | Créatives Meta / TikTok | `ads.mp4` |

⚠️ **Important — pas de stats inventées** :
- ❌ NE PAS afficher "1.8M vues", "74K likes" ou autres chiffres
- ✅ Juste : `[01]` · `STORYTELLING` · `Crash scénarisé · POV viral` (catégorie + titre)

⚠️ **`.mov` (slot 01)** : multiple sources fallback (Chrome ne lit pas mov natif) :
```tsx
<video autoPlay loop muted playsInline>
  <source src="/reels/revo-crash.mov" type="video/quicktime" />
  <source src="/reels/revo-crash.mp4" type="video/mp4" />
</video>
```

---

## 5️⃣ TOUT CE QUE TU REÇOIS

Section massive avec 3 sous-sections : **5.1 Formation · 5.2 Bonus · 5.3 Ticket pricing**.

### 🎯 Header section

```
┌────────────────────────────────────────────────────────────┐
│  // REVO LAB · LOADOUT 001                                 │
│                                                            │
│  TOUT CE QUE TU                                            │
│  REÇOIS.                                                   │
│  ↑ "CE QUE" en outline stroke white                        │
│   "REÇOIS." en silver mercury chrome glow                  │
└────────────────────────────────────────────────────────────┘
```

---

### 5.1 — La formation (bento 6 cols, 7 modules)

Sub-header :
```
01 · La formation                       7 modules · 21 leçons
```

**Grille bento 6 colonnes** :

```
┌────────┬────────┬────────┬────────┬────────┬────────┐
│        m1 (col-4 row-2)            │     m2 (col-2)  │
│  Crée ton AVATAR.                  │ Génère IMAGES.  │
│                                    ├─────────────────┤
│  /modules/1.png                    │     m3 (col-2)  │
│                                    │ Génère VIDÉOS.  │
├────────────────────────────────────┴─────────────────┤
│        m4 (col-4 row-2)            │     m5 (col-2)  │
│  Monte tes VIDÉOS.                 │  Crée ta VOIX.  │
│                                    ├─────────────────┤
│  /modules/4.png                    │     m6 (col-2)  │
│                                    │ Scripts VIRAL.  │
├──────────────────────────────────────────────────────┤
│              m7 (col-6 row-2)                        │
│  Monétise ton AVATAR.                                │
│  /modules/7.png                                      │
└──────────────────────────────────────────────────────┘
```

**Mapping cards** :

| Card | Span | Image | Titre (mot-clé silver) | Prix barré |
|---|---|---|---|---|
| m1 | col-4 row-2 | `/modules/1.png` | "Crée ton AVATAR." | 197€ |
| m2 | col-2 row-1 | `/modules/2.png` | "Génère tes IMAGES." | 297€ |
| m3 | col-2 row-1 | `/modules/3.png` | "Génère tes VIDÉOS." | 247€ |
| m4 | col-4 row-2 | `/modules/4.png` | "Monte tes VIDÉOS." | 147€ |
| m5 | col-2 row-1 | `/modules/5.png` | "Crée ta VOIX IA." | 147€ |
| m6 | col-2 row-1 | `/modules/6.png` | "Scripts & VIRALITÉ." | 97€ |
| m7 | col-6 row-2 | `/modules/7.png` | "Monétise ton AVATAR." | 147€ |

**Total formation : 1 082€**

**Anatomie d'une card module** :
```
┌─────────────────────────┐
│ [✓ INCLUS]      [M·01]  │ ← stamp top-left rotated -3deg / numéro top-right
│                         │
│   image en bg           │
│   object-cover          │
│   + overlay gradient    │
│                         │
│ Crée ton AVATAR.        │ ← title Bebas Neue
│                         │
│ Identité visuelle...   │ ← description
│                  197€   │ ← prix barré bottom-right
└─────────────────────────┘
```

---

### 5.2 — Les 3 bonus offerts

Sub-header :
```
02 · Les bonus offerts                     3 bonus · valeur 791€
```

**Bonus 1 — GPT REVO LAB** (card pleine largeur) :
```
┌────────────────────────────────────────┐
│              [🎁 OFFERT] (rotated 8deg)│
│                                        │
│ [🤖 Agent IA]                          │
│                                        │
│ LE GPT REVO LAB                        │
│ ↑ "REVO LAB" silver mercury glow       │
│                                        │
│ Tu lui parles en français, il écrit    │
│ les prompts à ta place — calibré       │
│ Nano Banana + Kling.                   │
│                                        │
│ │ Pourquoi ça te fait gagner 3h/jour ? │
│                                        │
│ ┌──────────────┐ VS ┌──────────────┐  │
│ │ 😩 SANS NOUS │    │ ✨ AVEC NOUS │  │
│ │ 🧪 prompts   │    │ 🤖 prompt   │  │
│ │ 🧬 instable  │    │ 🔒 verrouillé│  │
│ │ 💸 ×5 cred   │    │ 💰 −97% cred │  │
│ └──────────────┘    └──────────────┘  │
└────────────────────────────────────────┘
```

**Bonus 2 — GPT SEEDANCE 2.0** (même structure que Bonus 1) :
- Tag pill `🎬 Agent IA · Seedance`
- H2 : `LE GPT SEEDANCE 2.0`
- Sub : "Même logique, **nouveau modèle vidéo**. Tu lui décris ta scène en français, il rédige le prompt calibré Seedance 2.0 avec mouvements caméra, durée, ambiance."
- Hook : "Pourquoi tes scènes sortent **enfin du lot** ?"

| 😩 SANS NOUS | ✨ AVEC NOUS |
|---|---|
| 📹 Mouvements caméra random | 🎞 Cinematic dès le 1er essai |
| 🌪 Prompts brouillons | ⚡ Prompts optimisés Seedance |
| ⏱ 10 retries pour 1 scène | 🎯 1 prompt = 1 scène |

**Bonus 3 — MANYCHAT** (mini bubble compact, dashed border silver) :
```
┌────────────────────────────────────┐
│  [+ BONUS]                         │
│  Automation ManyChat.              │ ← "ManyChat" silver mercury
│  Le système qu'on utilise pour     │
│  qualifier nos DM IG.              │
└────────────────────────────────────┘
```

---

### 5.3 — Ticket Pricing

Ticket avec encoches dot-matrix top/bottom (style cinéma), border 1px silver chrome, max-width 540px centré.

```
┌──────────────────────────────────────┐  ← encoches dot-matrix
│ // REVO LAB · ticket #001  paiement unique│
├──────────────────────────────────────┤
│ La formation · 7 mod · 21 leçons     │
│ · à vie               1 082€ (rayé)  │
├──────────────────────────────────────┤
│ Les 3 bonus · GPT REVO + GPT         │
│ Seedance + ManyChat       791€ (rayé)│
├══════════════════════════════════════┤  ← row plus claire
│ Valeur totale         1 873€ (rayé)  │
├──────────────────────────────────────┤
│ Prix habituel             197€ (rayé)│
├══════════════════════════════════════┤  ← gradient silver
│ TON PRIX              [97€]          │  ← Bebas 5.5rem chrome
├──────────────────────────────────────┤
│   [JE LANCE MON AVATAR →]            │
│   Accès immédiat · Garantie 14j      │
└──────────────────────────────────────┘  ← encoches dot-matrix
```

**Rows** :
1. La formation · 7 modules · 21 leçons · à vie → **1 082€** (rayé silver)
2. Les 3 bonus · GPT REVO + GPT Seedance + ManyChat → **791€** (rayé)
3. **Valeur totale** (background plus clair) → **1 873€** (rayé Bebas 2rem)
4. Prix habituel (background dark) → **197€** (rayé mono)
5. **TON PRIX** (gradient silver→ink subtle) → **97€** ÉNORME silver mercury chrome bubble glow (Bebas Neue 5.5rem max)

**CTA en dessous** :
- Bouton silver chrome capsule `JE LANCE MON AVATAR →` + shimmer hover
- Trust line mono uppercase white/45 : `Accès immédiat · Garantie 14 jours · Updates à vie`

---

## 6️⃣ CHECKOUT

Centered panel avec countdown + offre + Whop iframe.

```
┌──────────────────────────────────────┐
│         FIN DE L'OFFRE DANS          │
│         [00] : [00] : [00]           │ ← countdown silver chrome
│         jrs    hrs    min            │
│                                      │
│      Rejoins les 100 PREMIERS.       │
│                                      │
│  ┌────────────────────────────────┐  │
│  │ // OFFRE DE LANCEMENT · 100 PL │  │
│  │       97€   197€ rayé          │  │
│  │  Paiement unique · Accès à vie │  │
│  ├────────────────────────────────┤  │
│  │  [Whop iframe checkout]        │  │
│  └────────────────────────────────┘  │
│                                      │
│ 🔒 Sécurisé · ⚡ Immédiat · 🛡 14j   │
└──────────────────────────────────────┘
```

**Composants** :
- Countdown silver chrome digits + label `FIN DE L'OFFRE DANS`
- H2 `REJOINS LES 100 PREMIERS` silver chrome bubble
- Deal panel card : silver chrome border + ink interior
- Prix : `97€` silver mercury chrome bubble + `197€` rayé
- Whop iframe : `<div id="whop-checkout" />`
- Trust badges silver chrome icons : 🔒 Paiement sécurisé · ⚡ Accès immédiat · 🛡 Garantie 14j

---

## 7️⃣ FAQ

Accordion shadcn/ui. Header `QUESTIONS FRÉQUENTES` silver chrome bubble compact.

```
┌──────────────────────────────────────┐
│  // 009 · FAQ                        │
│  Questions fréquentes.               │
│                                      │
│  ─────────────────────────────       │
│  Je reçois l'accès quand ?       +   │
│  ─────────────────────────────       │
│  Je suis débutant total, ça      +   │
│  passe ?                             │
│  ─────────────────────────────       │
│  Ça se voit que c'est de l'IA ?  +   │
│  ─────────────────────────────       │
│  Et si ça me plaît pas ?         +   │
│  ─────────────────────────────       │
└──────────────────────────────────────┘
```

**4 questions canoniques** (NE PAS INVENTER d'autres questions) :

| Q | Réponse |
|---|---|
| Je reçois l'accès quand ? | Immédiatement après le paiement. Tu arrives sur la plateforme, tu commences M0 dans les 2 minutes. |
| Je suis débutant total, ça passe ? | Oui. Construit pour quelqu'un qui n'a jamais touché à l'IA. Chaque étape est filmée, chaque outil est montré à l'écran. |
| Ça se voit que c'est de l'IA ? | Pas avec ce process. Le but de la formation c'est exactement ça : passer l'uncanny valley. |
| Et si ça me plaît pas ? | Garantie 14 jours. Tu testes, tu appliques. Si ça ne te sert à rien, tu demandes un remboursement — pas de question. |

---

## 8️⃣ FOOTER

3 cols simple :

```
┌──────────────────────────────────────────────────────────┐
│ AI CREATIVE      // Navigation     // Légal              │
│ ACADEMY                                                   │
│                  · Résultats        · Mentions légales   │
│ La formation     · Ce que tu        · CGV                 │
│ pour créer et      apprends         · Confidentialité    │
│ monétiser ton    · Modules          · Cookies            │
│ avatar IA. Édité · FAQ                                    │
│ par REVO LAB,                                             │
│ micro-entreprise.                                         │
│ SIRET 102 749                                             │
│ 942 00011                                                 │
│                                                           │
│ lucas.socialcontact@gmail.com                             │
├──────────────────────────────────────────────────────────┤
│ © 2026 AI CREATIVE ACADEMY · Tous droits réservés        │
│ Paiements sécurisés via Whop · SEPA / CB                 │
└──────────────────────────────────────────────────────────┘
```

⚠️ **ZÉRO mention** : Costa Payments / Adrien / co-founder. Solo brand REVO LAB.

---

## 📏 GRILLE & SPACING GLOBAL

| Élément | Valeur |
|---|---|
| Max width container | `max-w-6xl` (1152px) |
| Max width modules section | `max-w-6xl` |
| Max width ticket pricing | `max-w-xl` (540px) centré |
| Max width FAQ | `max-w-3xl` (768px) |
| Padding horizontal | `px-4` mobile, `px-6` desktop |
| Padding vertical sections | `py-14 md:py-20` |
| Border separator | `border-t border-white/10` (ou `border-silver/20` pour transitions DA) |

---

## 🎯 CHECKLIST FINALE

Avant de générer le `page.tsx`, vérifier :

- [ ] 8 sections dans l'ordre exact (Header → Hero → Ce qu'ils en disent → Méthode → Apprendre → Reçois → Checkout → FAQ → Footer)
- [ ] Hero monolithique (PAS de H1 HTML par-dessus)
- [ ] Section "Ce qu'ils en disent" = 1 image full-width seule
- [ ] Méthode 3 étapes avec connecteurs arrow silver
- [ ] 4 reels SANS stats inventées (vues/likes ❌)
- [ ] Bento 7 modules dans bonnes spans (m1=4×2, m2-m3=2×1, m4=4×2, m5-m6=2×1, m7=6×2)
- [ ] 3 bonus dans cet ordre : GPT REVO LAB → GPT SEEDANCE 2.0 → ManyChat
- [ ] Ticket avec **5 rows** (formation, bonus, valeur totale, prix habituel, TON PRIX)
- [ ] FAQ = 4 questions canoniques (pas d'invention)
- [ ] Footer mentions REVO LAB only (pas Costa Payments / Adrien)
- [ ] Palette stricte : ink + burgundy + white + silver (ZÉRO gold)
