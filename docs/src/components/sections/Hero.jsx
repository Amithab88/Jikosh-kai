import { useState, useEffect } from "react";
import { Slide } from "../ui/Slide";
import { ART_ASSETS, PERSONAL_INFO } from "../../data/portfolioData";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) =>
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Japanese Data Wave Art Layer with Parallax */}
      <div
        className="hero-art-backdrop"
        style={{
          backgroundImage: `url(${ART_ASSETS.dataWave})`,
          transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -18}px) scale(1.05)`,
        }}
      />
      <div className="hero-overlay-gradient" />

      {/* Ensō brush artwork centered in ambient background */}
      <div
        className="hero-enso-wrap"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 25}px), calc(-50% + ${mousePos.y * 25}px))`,
        }}
      >
        <img
          src={ART_ASSETS.enso}
          alt="Zen Enso Circle"
          className="hero-enso-img"
          loading="eager"
        />
      </div>

      {/* Vertical Japanese Kanji decorative banner */}
      <div className="kanji-vert-strip">
        <span className="kanji-char">生</span>
        <span className="kanji-char">き</span>
        <span className="kanji-char">甲</span>
        <span className="kanji-char">斐</span>
        <span className="kanji-divider">·</span>
        <span className="kanji-char">分</span>
        <span className="kanji-char">析</span>
      </div>

      <div className="hero-inner">
        <div className="hero-left">
          <Slide delay={0.1}>
            <div className="hanko-badge">
              <span className="hanko-badge-stamp">受付中</span>
              <span className="hanko-badge-text">
                Ikigai × Data Analytics · 2026
              </span>
            </div>
          </Slide>

          <Slide delay={0.22}>
            <h1 className="hero-name">
              Data
              <br />
              <span className="hero-name-accent">Analyst</span>
              <br />
              in Progress.
            </h1>
          </Slide>

          <Slide delay={0.38}>
            <p className="hero-desc">
              {PERSONAL_INFO.subtitle}{" "}
              <span className="kanji-inline">{PERSONAL_INFO.kanjiTitle}</span>
            </p>
          </Slide>

          <Slide delay={0.5}>
            <p className="hero-sub">
              Blending the discipline of <em>Ikigai</em> with statistical rigor. Turning messy data into crystal-clear decisions — one query at a time.
            </p>
          </Slide>

          <Slide delay={0.62}>
            <div className="hero-btns">
              <a href="#ikigai" className="btn-em">
                Explore Ikigai <span className="btn-arrow">→</span>
              </a>
              <a href="#case-studies" className="btn-ghost">
                View Works <span className="kanji-small">作品</span>
              </a>
            </div>
          </Slide>
        </div>

        {/* Live Japanese-Styled Analytics Terminal */}
        <Slide delay={0.3} dir="right" className="hero-right">
          <div className="hero-dashboard">
            <div className="dash-header">
              <div className="dash-dots">
                <span className="dash-dot red" />
                <span className="dash-dot yellow" />
                <span className="dash-dot green" />
              </div>
              <span className="dash-tag-jp">分析.live · Sumi Data Stream</span>
              <span className="dash-hanko-mini">印</span>
            </div>

            <div className="dash-chart">
              <div className="dash-chart-header">
                <span className="dash-chart-label">Weekly Query Velocity</span>
                <span className="dash-chart-val">98.4% Efficiency</span>
              </div>
              <div className="dash-bars">
                {[45, 72, 38, 88, 61, 95, 54, 79, 42, 86, 68, 100].map((h, i) => (
                  <div key={i} className="dash-bar-wrap">
                    <div
                      className="dash-bar"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.07}s` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-kpis">
              <div className="dash-kpi">
                <span className="dkpi-val">90%</span>
                <span className="dkpi-label">SQL Mastery</span>
                <span className="dkpi-kanji">熟練</span>
              </div>
              <div className="dash-kpi">
                <span className="dkpi-val">4+</span>
                <span className="dkpi-label">DS Projects</span>
                <span className="dkpi-kanji">実績</span>
              </div>
              <div className="dash-kpi">
                <span className="dkpi-val">24h</span>
                <span className="dkpi-label">Fast Response</span>
                <span className="dkpi-kanji">迅速</span>
              </div>
            </div>

            <div className="dash-ticker-wrap">
              <div className="dash-ticker">
                {[
                  "SQL · 90%",
                  "EXCEL · 85%",
                  "PYTHON · 80%",
                  "POWER BI · 75%",
                  "STATISTICS · 75%",
                  "SQL · 90%",
                  "EXCEL · 85%",
                  "PYTHON · 80%",
                  "POWER BI · 75%",
                  "STATISTICS · 75%",
                ].map((t, i) => (
                  <span key={i} className="ticker-item">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
