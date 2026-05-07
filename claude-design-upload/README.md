# 📁 ASSETS — Drag & Drop dans Claude Design

Tous les assets de la LP **AI Creative Academy** dans un dossier unique, numérotés dans l'ordre d'apparition sur la page.

## 📂 Comment utiliser

1. Ouvre ce dossier dans Finder : `/Users/lucasalleix/aicreativeacademy/claude-design-upload/`
2. Sélectionne tous les fichiers (Cmd+A)
3. Drag & drop dans Claude Design (claude.ai)
4. Colle le prompt LP avec les chemins `/public/...` qui correspondent

## 📋 Liste complète (12 fichiers + ce README)

### 🌟 HERO
| # | Fichier upload | Path dans le repo | Usage |
|---|---|---|---|
| 01 | `01_HERO_chrome-bath.png` | `/public/hero/hero-chrome-bath.png` | **Hero principale full-bleed (image lockée — H1+CTA déjà intégrés)** |

### 🏷️ LOGO
| # | Fichier upload | Path dans le repo | Usage |
|---|---|---|---|
| 02 | `02_LOGO_mark.png` | `/public/brand/logo-mark.png` | Logo header sticky |

### ⭐ TESTIMONIALS (3 cards Avis Bruts)
| # | Fichier upload | Path dans le repo | Usage |
|---|---|---|---|
| 03 | `03_TESTIMONIAL_slide-01.png` | `/public/testimonials/slide-01.png` | Card 1 |
| 04 | `04_TESTIMONIAL_slide-02.png` | `/public/testimonials/slide-02.png` | Card 2 |
| 05 | `05_TESTIMONIAL_slide-03.png` | `/public/testimonials/slide-03.png` | Card 3 |

### 📋 PROCESS (Méthode 3 étapes)
| # | Fichier upload | Path dans le repo | Étape |
|---|---|---|---|
| 06 | `06_PROCESS_step-1-cree.gif` | `/public/process/step-1.gif` | Étape 1 — Crée |
| 07 | `07_PROCESS_step-2-genere.mp4` | `/public/process/step-2.mp4` | Étape 2 — Génère |
| 08 | `08_PROCESS_step-3-monetise.gif` | `/public/process/step-3.gif` | Étape 3 — Monétise |

### 🎬 REELS (Ce que tu vas apprendre — grid 4-up)
| # | Fichier upload | Path dans le repo | Catégorie | Slot |
|---|---|---|---|---|
| 09 | `09_REEL_storytelling-revo-crash.mov` | `/public/reels/revo-crash.mov` | STORYTELLING | 01 |
| 10 | `10_REEL_ugc-nikon.mp4` | `/public/reels/ugc-nikon.mp4` | UGC | 02 |
| 11 | `11_REEL_client-ready.mp4` | `/public/reels/client-creative.mp4` | CLIENT READY | 03 |
| 12 | `12_REEL_ads.mp4` | `/public/reels/ads.mp4` | ADS | 04 |

## 📊 Récap

- **12 fichiers** total à uploader
- **Images** : 5 PNG (1 hero + 1 logo + 3 testimonials)
- **Vidéos** : 5 MP4/MOV (4 reels + 1 process)
- **Animations** : 2 GIF (process step 1 et 3)
- **Taille totale** : ~75 MB

## 🎯 Important pour Claude Design

- Le **hero image (#01)** contient DÉJÀ le titre "AI CREATIVE ACADEMY" + le bouton "JE LANCE MON AVATAR" — pas besoin d'overlay HTML
- Les **testimonials (#03-05)** contiennent déjà les citations + photos — utiliser comme images sources, pas écrire de texte par-dessus
- Les **process medias (#06-08)** sont des animations à intégrer en `<video>` ou `<img>` selon format
- Les **reels (#09-12)** : `<video autoplay loop muted playsinline>` dans une grille 9:16
