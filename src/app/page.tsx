"use client";

import { useEffect, useRef, useState } from "react";
import { WhopCheckout } from "@/components/whop-checkout";
import "./aica-rebrand.css";

const COUNTDOWN_KEY = "aica.deadline";
const COUNTDOWN_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getDeadline() {
  if (typeof window === "undefined") return 0;
  const raw = parseInt(localStorage.getItem(COUNTDOWN_KEY) || "0", 10);
  const now = Date.now();
  if (!raw || raw < now) {
    const t = now + COUNTDOWN_DURATION_MS;
    localStorage.setItem(COUNTDOWN_KEY, String(t));
    return t;
  }
  return raw;
}

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [reel1Fallback, setReel1Fallback] = useState(false);
  const [cd, setCd] = useState({ d: "00", h: "00", m: "00", s: "00" });
  const heroBgRef = useRef<HTMLDivElement>(null);
  const reel1VideoRef = useRef<HTMLVideoElement>(null);

  // Header scrolled state + hero parallax
  useEffect(() => {
    let lastY = -1;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (y === lastY) return;
      lastY = y;
      setScrolled(y > 60);
      if (heroBgRef.current && y < window.innerHeight * 1.2) {
        heroBgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.04)`;
      }
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer body scroll lock
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Fade-in on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".aica-root .fadein").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Countdown
  useEffect(() => {
    const target = getDeadline();
    const tick = () => {
      const ms = Math.max(0, target - Date.now());
      setCd({
        d: pad(Math.floor(ms / 86400000)),
        h: pad(Math.floor((ms % 86400000) / 3600000)),
        m: pad(Math.floor((ms % 3600000) / 60000)),
        s: pad(Math.floor((ms % 60000) / 1000)),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Reel 1 .mov fallback detection
  useEffect(() => {
    const v = reel1VideoRef.current;
    if (!v) return;
    const onError = () => setReel1Fallback(true);
    v.addEventListener("error", onError);
    const t = setTimeout(() => {
      if (v.readyState === 0 && !v.currentSrc) setReel1Fallback(true);
    }, 2500);
    return () => {
      v.removeEventListener("error", onError);
      clearTimeout(t);
    };
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <main className="aica-root">
      {/* =================== HEADER =================== */}
      <header className={`aica-header${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="brand">
          <span className="mark" />
          <span>REVO LAB</span>
        </a>
        <nav className="nav" aria-label="Principal">
          <a href="#methode">Programme</a>
          <a href="#apprendre">Fonctionnalités</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#checkout" className="chrome-cta sm">
            <span>Commencer</span>
            <span className="arrow">→</span>
          </a>
          <button className="burger" aria-label="Menu" onClick={() => setDrawerOpen(true)}>
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`drawer${drawerOpen ? " open" : ""}`}
        aria-hidden={!drawerOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDrawer();
        }}
      >
        <div className="panel" role="dialog" aria-label="Navigation">
          <div className="row">
            <span className="mono">// Navigation</span>
            <button className="x" aria-label="Fermer" onClick={closeDrawer}>
              ✕
            </button>
          </div>
          <div className="links">
            <a href="#temoignages" onClick={closeDrawer}>
              Résultats <span className="arr">→</span>
            </a>
            <a href="#methode" onClick={closeDrawer}>
              Ce que tu apprends <span className="arr">→</span>
            </a>
            <a href="#tarifs" onClick={closeDrawer}>
              Modules &amp; bonus <span className="arr">→</span>
            </a>
            <a href="#checkout" onClick={closeDrawer} style={{ color: "#fff" }}>
              <span className="mercury-text">S&apos;INSCRIRE — 97€</span>{" "}
              <span className="arr">→</span>
            </a>
            <a href="#faq" onClick={closeDrawer}>
              FAQ <span className="arr">→</span>
            </a>
          </div>
          <div className="foot">
            <p>
              AI Creative Academy ·<br />
              by REVO LAB
            </p>
          </div>
        </div>
      </div>

      {/* =================== HERO =================== */}
      <section className="hero" id="top">
        <div className="bg" ref={heroBgRef} aria-hidden="true">
          <video
            className="hero-video is-desktop"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero/hero-chrome-bath.jpg"
          >
            <source src="/hero/hero-desktop.mp4" type="video/mp4" />
          </video>
          <video
            className="hero-video is-mobile"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero/hero-chrome-bath-mobile.jpg"
          >
            <source src="/hero/hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-bottom">
          <p className="hero-cta-line">
            Accès immédiat · Garantie 14 jours · Mises à jour à vie
          </p>
          <a href="#methode" className="chrome-cta lg">
            <span>Je découvre la méthode</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* =================== MÉTHODE =================== */}
      <section className="bg-mood section-pad" id="methode">
        <div className="wrap">
          <div className="section-head">
            <span className="chrome-bubble">// LA MÉTHODE</span>
            <h2 className="h2">
              <span className="stroke-text">La méthode en</span>{" "}
              <span className="mercury-text glow">3 étapes.</span>
            </h2>
            <p className="sub mono-tag">Crée · Génère · Monétise</p>
          </div>

          <div className="method-grid">
            <article className="step fadein">
              <div className="media">
                <img
                  src="/process/step-1.gif"
                  alt="Étape 1 — création de l'avatar IA"
                />
              </div>
              <div className="body">
                <h3>
                  Crée ton <span className="mercury-text">avatar IA</span>.
                </h3>
              </div>
            </article>

            <article className="step fadein">
              <div className="media">
                <video
                  src="/process/step-2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="body">
                <h3>
                  Master les derniers{" "}
                  <span className="mercury-text">outils&nbsp;:</span>
                </h3>
                <div className="tool-logos overlap">
                  <img src="/logos/higgsfield.png" alt="Higgsfield" />
                  <img src="/logos/nano-banana.png" alt="Nano Banana 2" />
                  <img src="/logos/kling.png" alt="Kling" />
                  <img src="/logos/seedance.png" alt="Seedance" />
                  <img className="wordmark" src="/logos/elevenlabs.png" alt="ElevenLabs" />
                </div>
              </div>
            </article>

            <article className="step fadein">
              <div className="media">
                <img
                  src="/process/step-3.jpg"
                  alt="Étape 3 — monétisation de l'avatar"
                />
              </div>
              <div className="body">
                <h3>
                  Monétise ton <span className="mercury-text">avatar IA</span>.
                </h3>
              </div>
            </article>

            <span className="connector c1" aria-hidden="true">
              →
            </span>
            <span className="connector c2" aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </section>

      {/* =================== APPRENDRE — 4 REELS =================== */}
      <section className="section-pad" id="apprendre">
        <div className="wrap">
          <div className="section-head">
            <span className="chrome-bubble">// APPRENDRE</span>
            <h2 className="h2">
              <span className="stroke-text">Ce que tu vas</span>
              <br />
              <span className="mercury-text glow">apprendre à faire.</span>
            </h2>
            <p className="sub">
              Quatre formats. Le même avatar. Réplicable à l&apos;infini, sans
              tournage, sans équipe.
            </p>
          </div>

          <div className="reels">
            <article className={`reel fadein${reel1Fallback ? " fallback" : ""}`}>
              <div className="placeholder">
                <div className="play">▶</div>
                <span className="kbd">STORYTELLING · 01</span>
              </div>
              <video
                ref={reel1VideoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                <source src="/reels/revo-crash.mov" type="video/quicktime" />
                <source src="/reels/revo-crash.mp4" type="video/mp4" />
              </video>
              <div className="overlay" />
              <div className="topline">
                <span className="tag">Reels viraux</span>
                <span className="num">01</span>
              </div>
              <div className="titleline">
                Reels viraux
                <span className="t">250K vues — sans montrer ton visage</span>
              </div>
            </article>

            <article className="reel fadein">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src="/reels/ugc-ia.mp4"
              />
              <div className="overlay" />
              <div className="topline">
                <span className="tag">UGC IA</span>
                <span className="num">02</span>
              </div>
              <div className="titleline">
                UGC IA
                <span className="t">0 tournage · 0 matériel · modèle ultra-réaliste</span>
              </div>
            </article>

            <article className="reel fadein">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src="/reels/client-creative.mp4"
              />
              <div className="overlay" />
              <div className="topline">
                <span className="tag">Cinématique</span>
                <span className="num">03</span>
              </div>
              <div className="titleline">
                Cinématique
                <span className="t">Scènes dignes d&apos;un film, sans 15&nbsp;000€ de budget ni équipe</span>
              </div>
            </article>

            <article className="reel fadein">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                src="/reels/ads.mp4"
              />
              <div className="overlay" />
              <div className="topline">
                <span className="tag">ADS</span>
                <span className="num">04</span>
              </div>
              <div className="titleline">
                Campagne marketing IA
                <span className="t">Crée tes ads IA pour vendre ton offre 24/7</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =================== TOUT CE QUE TU REÇOIS =================== */}
      <section className="section-pad bg-mood" id="tarifs">
        <div className="wrap">
          <div
            className="loadout-head section-head"
            style={{ alignItems: "flex-start", textAlign: "left" }}
          >
            <span className="chrome-bubble">// AI CREATIVE ACADEMY</span>
            <h2 className="h2">
              <span className="l1 stroke-text">Tout ce que tu</span>
              <span className="l2 mercury-text glow">reçois.</span>
            </h2>
          </div>

          {/* 5.1 Formation */}
          <div className="subhead-row">
            <div className="left">
              <span className="num">01</span>
              <span className="title">La formation</span>
            </div>
            <span className="meta">7 modules · 21 leçons</span>
          </div>

          <div className="bento">
            <div className="m m1 large fadein">
              <video
                src="/modules/1.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 1 — Avatar"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 1</span>
              <div className="info">
                <h3>
                  Crée ton <span className="key mercury-text">AVATAR.</span>
                </h3>
                <p>
                  Identité visuelle, Identity Lock, premières photos cohérentes.
                </p>
              </div>
              <span className="price">197€</span>
            </div>

            <div className="m m2 fadein">
              <video
                src="/modules/2.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 2 — Images"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 2</span>
              <div className="info">
                <h3>
                  Génère tes <span className="key mercury-text">IMAGES.</span>
                </h3>
              </div>
              <img
                className="module-tool-logo icon"
                src="/logos/nano-banana.png"
                alt="Powered by Nano Banana 2"
              />
              <span className="price">297€</span>
            </div>

            <div className="m m3 fadein">
              <video
                src="/modules/3.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 3 — Vidéos"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 3</span>
              <div className="info">
                <h3>
                  Génère tes <span className="key mercury-text">VIDÉOS.</span>
                </h3>
              </div>
              <img
                className="module-tool-logo icon"
                src="/logos/kling.png"
                alt="Powered by Kling"
              />
              <span className="price">247€</span>
            </div>

            <div className="m m4 large fadein">
              <video
                src="/modules/4.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 4 — Voix IA"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 4</span>
              <div className="info">
                <h3>
                  Crée ta <span className="key mercury-text">VOIX IA.</span>
                </h3>
                <p>
                  Clone vocal,
                  <br />
                  synchronisation labiale parfaite.
                </p>
              </div>
              <img
                className="module-tool-logo"
                src="/logos/elevenlabs.png"
                alt="Powered by ElevenLabs"
              />
              <span className="price">147€</span>
            </div>

            <div className="m m5 fadein">
              <video
                src="/modules/5.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 5 — Montage"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 5</span>
              <div className="info">
                <h3>
                  <span className="key mercury-text">MONTAGE.</span>
                </h3>
              </div>
              <img
                className="module-tool-logo icon"
                src="/logos/capcut.png"
                alt="Powered by CapCut"
              />
              <span className="price">147€</span>
            </div>

            <div className="m m6 fadein">
              <video
                src="/modules/6.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 6 — Scripts"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 6</span>
              <div className="info">
                <h3>
                  Scripts &amp;{" "}
                  <span className="key mercury-text">VIRALITÉ.</span>
                </h3>
              </div>
              <span className="price">97€</span>
            </div>

            <div className="m m7 large fadein">
              <video
                src="/modules/7.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Module 7 — Monétisation"
              />
              <span className="stamp">✓ Inclus</span>
              <span className="corner">Module 7</span>
              <div className="info">
                <h3>
                  Monétise ton <span className="key mercury-text">AVATAR.</span>
                </h3>
                <p>
                  Offres, ads, prestations, partenariats. Le moment où l&apos;avatar
                  passe du jouet à l&apos;actif.
                </p>
              </div>
              <span className="price">147€</span>
            </div>
          </div>

          {/* 5.2 Bonus */}
          <div
            className="subhead-row"
            style={{ marginTop: "clamp(48px, 6vw, 80px)" }}
          >
            <div className="left">
              <span className="num">02</span>
              <span className="title">Les bonus offerts</span>
            </div>
            <span className="meta">3 bonus · valeur 791€</span>
          </div>

          <div className="bonus">
            <article className="bonus-card fadein">
              <span className="stamp-offert">🎁 OFFERT</span>
              <img
                className="bonus-bg-logo"
                src="/logos/openai.svg"
                alt=""
                aria-hidden="true"
              />
              <span className="pill-tag">
                <span style={{ fontSize: 14 }}>🤖</span> Agent IA
              </span>
              <h3>
                LE GPT <span className="mercury-text glow">REVO LAB</span>
              </h3>
              <p className="lede">
                Tu lui parles <strong>en français</strong>, il{" "}
                <strong>écrit les prompts à ta place</strong> — calibré Nano
                Banana + Kling, celui qu&apos;on utilise tous les jours en interne.
              </p>
              <div className="hook">
                Pourquoi ça te fait gagner{" "}
                <span className="mercury-text">3h par jour</span>&nbsp;?
              </div>
              <div className="compare">
                <div className="col bad">
                  <h4>😩 Sans le GPT</h4>
                  <ul>
                    <li>
                      <span className="ic">🧪</span> T&apos;écris tes prompts à la
                      main
                    </li>
                    <li>
                      <span className="ic">🧬</span> Avatar instable d&apos;un shoot
                      à l&apos;autre
                    </li>
                    <li>
                      <span className="ic">💸</span> ×5 crédits cramés en retries
                    </li>
                  </ul>
                </div>
                <div className="vs">VS</div>
                <div className="col good">
                  <h4>✨ Avec le GPT</h4>
                  <ul>
                    <li>
                      <span className="ic">🤖</span> L&apos;agent prompt pour toi
                    </li>
                    <li>
                      <span className="ic">🔒</span> Avatar verrouillé, identique
                      partout
                    </li>
                    <li>
                      <span className="ic">💰</span> −97% de crédits brûlés
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="bonus-card fadein">
              <span className="stamp-offert">🎁 OFFERT</span>
              <img
                className="bonus-bg-logo"
                src="/logos/openai.svg"
                alt=""
                aria-hidden="true"
              />
              <span className="pill-tag">
                <span style={{ fontSize: 14 }}>🎬</span> Agent IA · Seedance
              </span>
              <h3>
                LE GPT <span className="mercury-text glow">SEEDANCE 2.0</span>
              </h3>
              <p className="lede">
                Même logique, <strong>nouveau modèle vidéo</strong>. Tu lui décris
                ta scène en français, il rédige le prompt calibré Seedance 2.0
                avec mouvements caméra, durée, ambiance.
              </p>
              <div className="hook">
                Pourquoi tes scènes sortent{" "}
                <span className="mercury-text">enfin du lot</span>&nbsp;?
              </div>
              <div className="compare">
                <div className="col bad">
                  <h4>😩 Sans le GPT</h4>
                  <ul>
                    <li>
                      <span className="ic">📹</span> Mouvements caméra random
                    </li>
                    <li>
                      <span className="ic">🌪</span> Prompts brouillons, scènes
                      plates
                    </li>
                    <li>
                      <span className="ic">⏱</span> 10 retries pour 1 scène
                      utilisable
                    </li>
                  </ul>
                </div>
                <div className="vs">VS</div>
                <div className="col good">
                  <h4>✨ Avec le GPT</h4>
                  <ul>
                    <li>
                      <span className="ic">🎞</span> Cinematic dès le 1er essai
                    </li>
                    <li>
                      <span className="ic">⚡</span> Prompts optimisés Seedance
                    </li>
                    <li>
                      <span className="ic">🎯</span> 1 prompt = 1 scène
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="bonus-mini fadein">
              <span className="bonus-pill">+ BONUS</span>
              <h3>
                Automation <span className="mercury-text">ManyChat.</span>
              </h3>
              <p>
                Le système que j&apos;utilise pour qualifier nos DM Instagram :
                keyword → qualification → CTA. Setup complet, plug &amp; play.
              </p>
            </article>
          </div>

          {/* 5.3 Témoignages — moved here, just above price */}
          <div
            id="temoignages"
            className="subhead-row"
            style={{ marginTop: "clamp(48px, 6vw, 80px)" }}
          >
            <div className="left">
              <span className="num">03</span>
              <span className="title">Ce qu&apos;ils en disent</span>
            </div>
            <span className="meta">Avis · early access</span>
          </div>
          <div className="testimonials-grid" style={{ marginTop: 28 }}>
            <article className="chrome-card fadein">
              <div className="chrome-card-stars">★★★★★</div>
              <p className="chrome-card-quote">
                <span className="q-mark">«&nbsp;</span>
                C&apos;est grave bien expliqué, notamment les vidéos, avec un
                langage courant qui permet de vite comprendre sans se perdre.
                Modules clairs et très faciles à appliquer.
                <span className="q-mark">&nbsp;»</span>
              </p>
              <div className="chrome-card-meta">
                <div className="chrome-avatar">GN</div>
                <div className="chrome-card-author">
                  <div className="name">GavaNoah</div>
                  <div className="when">4 jours après l&apos;achat</div>
                </div>
              </div>
            </article>

            <article className="chrome-card fadein">
              <div className="chrome-card-stars">★★★★★</div>
              <p className="chrome-card-quote">
                <span className="q-mark">«&nbsp;</span>
                Forma claire et précise. J&apos;ai particulièrement apprécié les
                démos live sur les outils. On est guidé de A à Z.
                <span className="q-mark">&nbsp;»</span>
              </p>
              <div className="chrome-card-meta">
                <div className="chrome-avatar">GA</div>
                <div className="chrome-card-author">
                  <div className="name">gassyrift</div>
                  <div className="when">20 jours après l&apos;achat</div>
                </div>
              </div>
            </article>

            <article className="chrome-card fadein">
              <div className="chrome-card-stars">★★★★★</div>
              <p className="chrome-card-quote">
                <span className="q-mark">«&nbsp;</span>
                Le programme est intéressant, c&apos;est cool. Merci beaucoup
                pour la qualité des vidéos.
                <span className="q-mark">&nbsp;»</span>
              </p>
              <div className="chrome-card-meta">
                <div className="chrome-avatar">T</div>
                <div className="chrome-card-author">
                  <div className="name">Theo</div>
                  <div className="when">8 jours après l&apos;achat</div>
                </div>
              </div>
            </article>
          </div>

          {/* 5.4 Countdown — moved here, between testimonials and price */}
          <div
            className="pre-checkout-countdown"
            style={{
              marginTop: "clamp(40px, 5vw, 70px)",
              textAlign: "center",
            }}
          >
            <span className="mono-tag" style={{ color: "var(--w-50)" }}>
              Fin de l&apos;offre dans
            </span>
            <div
              className="countdown"
              aria-live="polite"
              style={{ marginTop: 12, justifyContent: "center" }}
            >
              <div className="cd-cell">
                <span className="digits">{cd.d}</span>
                <span className="label">jours</span>
              </div>
              <span className="cd-sep">:</span>
              <div className="cd-cell">
                <span className="digits">{cd.h}</span>
                <span className="label">heures</span>
              </div>
              <span className="cd-sep">:</span>
              <div className="cd-cell">
                <span className="digits">{cd.m}</span>
                <span className="label">minutes</span>
              </div>
              <span className="cd-sep">:</span>
              <div className="cd-cell">
                <span className="digits">{cd.s}</span>
                <span className="label">sec.</span>
              </div>
            </div>
          </div>

          {/* 5.5 Ticket — Whop integrated, no duplicate CTA below */}
          <div id="checkout" className="ticket-wrap" style={{ marginTop: "clamp(24px, 3vw, 40px)" }}>
            <div className="ticket fadein">
              <div className="ticket-row">
                <div className="desc">
                  La formation · 7 modules · 21 leçons · à vie
                </div>
                <div className="val">1 082€</div>
              </div>
              <div className="ticket-row">
                <div className="desc">
                  Les 3 bonus · GPT REVO + GPT Seedance + ManyChat
                </div>
                <div className="val">791€</div>
              </div>
              <div className="ticket-row bright">
                <div className="desc">Valeur totale</div>
                <div className="val">1 873€</div>
              </div>
              <div className="ticket-row dim">
                <div className="desc">
                  <span className="mono-tag" style={{ color: "var(--w-50)" }}>
                    Prix habituel
                  </span>
                </div>
                <div className="val-red">197€</div>
              </div>
              <div className="ticket-row final">
                <div className="desc">Ton prix</div>
                <div className="price mercury-green glow">97€</div>
              </div>

              <div className="ticket-cta">
                <div className="ticket-checkout-wrap">
                  <WhopCheckout />
                </div>
                <p className="trust">
                  Accès immédiat · Garantie 14 jours · Updates à vie
                </p>
              </div>
              <div className="ticket-bottom-dots" />
            </div>
          </div>
        </div>
      </section>


      {/* =================== FAQ =================== */}
      <section className="section-pad" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="chrome-bubble">// 009 · FAQ</span>
            <h2 className="h2">
              <span className="stroke-text">Questions</span>{" "}
              <span className="mercury-text glow">fréquentes.</span>
            </h2>
          </div>

          <div className="faq">
            <details className="faq-item">
              <summary>
                Je reçois l&apos;accès quand&nbsp;? <span className="plus">+</span>
              </summary>
              <div className="answer">
                Immédiatement après le paiement. Tu arrives sur la plateforme, tu
                commences M0 dans les 2 minutes.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Je suis débutant total, ça passe&nbsp;?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Oui. Construit pour quelqu&apos;un qui n&apos;a jamais touché à
                l&apos;IA. Chaque étape est filmée, chaque outil est montré à
                l&apos;écran.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Ça se voit que c&apos;est de l&apos;IA&nbsp;?{" "}
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Pas avec ce process. Le but de la formation c&apos;est exactement
                ça : passer l&apos;uncanny valley.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Et si ça me plaît pas&nbsp;? <span className="plus">+</span>
              </summary>
              <div className="answer">
                Garantie 14 jours. Tu testes, tu appliques. Si ça ne te sert à
                rien, tu demandes un remboursement — pas de question.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="aica-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="/" className="chrome-bubble" style={{ alignSelf: "flex-start" }}>
                REVO LAB
              </a>
              <span className="tag">Entreprise éditrice d&apos;AI Creative Academy</span>
              <p className="desc">
                AI Creative Academy est édité par REVO LAB,
                micro-entreprise française. SIRET&nbsp;102&nbsp;749&nbsp;942&nbsp;00011.
              </p>
              <p className="desc" style={{ marginTop: "4px", color: "var(--w-50)", fontSize: "12px" }}>
                Contact&nbsp;: lucas.socialcontact@gmail.com
              </p>
            </div>
            <div className="col">
              <h5>Navigation</h5>
              <a href="#temoignages">Résultats</a>
              <a href="#methode">Ce que tu apprends</a>
              <a href="#tarifs">Modules &amp; bonus</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="col">
              <h5>Légal</h5>
              <a href="/legal/mentions-legales">Mentions légales</a>
              <a href="/legal/cgv">CGV</a>
              <a href="/legal/confidentialite">Confidentialité</a>
              <a href="/legal/cookies">Cookies</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 REVO LAB · Tous droits réservés</span>
            <span>Paiements sécurisés · SEPA / CB</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
