# 📁 ASSETS BONUS — Section "Tout ce que tu reçois"

Images des 7 modules à intégrer dans la nouvelle section value stack + bonus.

## 📋 Liste (7 fichiers)

| # | Fichier upload | Path dans le repo | Module | Carte (m1-m7) |
|---|---|---|---|---|
| 13 | `13_MODULE_01-avatar.png` | `/public/modules/1.png` | M·01 — Crée ton avatar | m1 (col-span-4 row-span-2) |
| 14 | `14_MODULE_02-images.png` | `/public/modules/2.png` | M·02 — Génère tes images | m2 (col-span-2) |
| 15 | `15_MODULE_03-videos.png` | `/public/modules/3.png` | M·03 — Génère tes vidéos | m3 (col-span-2) |
| 16 | `16_MODULE_04-montage.png` | `/public/modules/4.png` | M·04 — Monte tes vidéos | m4 (col-span-4 row-span-2) |
| 17 | `17_MODULE_05-voix.png` | `/public/modules/5.png` | M·05 — Crée ta voix IA | m5 (col-span-2) |
| 18 | `18_MODULE_06-script.png` | `/public/modules/6.png` | M·06 — Scripts & viralité | m6 (col-span-2) |
| 19 | `19_MODULE_07-monetisation.png` | `/public/modules/7.png` | M·07 — Monétise ton avatar | m7 (col-span-6 row-span-2) |

## 🎯 Implémentation

Chaque module image va en BACKGROUND de sa card bento dans la section 
"Tout ce que tu reçois → 01 La formation". L'image est en `object-cover` 
avec un overlay gradient ink + burgundy pour la lisibilité des textes 
(stamp INCLUS, numéro M·XX, titre, prix barré, description).

```tsx
<article className="card m1 ...">
  <Image src="/modules/1.png" fill className="object-cover ..." alt="M1 Avatar" />
  <div className="overlay-gradient" />
  <span className="stamp-silver-chrome">INCLUS</span>
  <span className="num">M·01</span>
  <div className="info">
    <h3 className="title-bebas">Crée ton <span className="silver-mercury">avatar.</span></h3>
    <span className="price-strikethrough">197€</span>
    <p className="desc">Identité visuelle, Identity Lock, premières photos cohérentes.</p>
  </div>
</article>
```

## ⚠️ Important

- Toutes ces images sont déjà copiées dans `/public/modules/` du repo
- Pour Claude Design : utilise les paths `/modules/1.png` à `/modules/7.png`
- Les images sont en couleurs naturelles (burgundy + photos avatar) — l'overlay 
  gradient ink + chrome accents fait le travail de cohérence DA
