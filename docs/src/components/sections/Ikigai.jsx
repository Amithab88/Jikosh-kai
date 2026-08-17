import { useState } from "react";
import { Slide } from "../ui/Slide";
import { IKIGAI_ITEMS, ART_ASSETS } from "../../data/portfolioData";

export function Ikigai() {
  const [activeItem, setActiveItem] = useState(IKIGAI_ITEMS[0].id);

  const activeData =
    IKIGAI_ITEMS.find((item) => item.id === activeItem) || IKIGAI_ITEMS[0];

  return (
    <section id="ikigai" className="section sec-cream ikigai-section">
      <Slide className="ikigai-head">
        <span className="sec-label-pill dark">
          Philosophy <span className="kanji-tag">生き甲斐</span>
        </span>
        <h2 className="sec-title">
          Ikigai: A Reason for Being
          <br />
          in Data.
        </h2>
        <p className="ikigai-sub">
          <em>Ikigai</em> (生き甲斐) is the timeless Japanese concept of finding life's purpose at the intersection of passion, mastery, global need, and economic value. For me, that nexus is <strong>Data Analytics</strong>.
        </p>
      </Slide>

      <div className="ikigai-showcase-grid">
        {/* Left: Zen Garden Ikigai Visual Art */}
        <Slide dir="left" className="ikigai-art-container">
          <div className="ikigai-art-frame">
            <img
              src={ART_ASSETS.ikigaiGarden}
              alt="Japanese Zen Garden Ikigai Venn Diagram"
              className="ikigai-art-img"
              loading="lazy"
            />
            <div className="ikigai-art-badge">
              <span className="ikigai-badge-kanji">調和</span>
              <span className="ikigai-badge-text">Harmonious Balance</span>
            </div>
          </div>
        </Slide>

        {/* Right: Interactive Ikigai Quadrants */}
        <Slide dir="right" className="ikigai-quadrants-panel">
          <div className="ikigai-tabs">
            {IKIGAI_ITEMS.map((item) => {
              const isSelected = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  className={`ikigai-tab-btn ${isSelected ? "active" : ""}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <span className="tab-kanji">{item.kanji}</span>
                  <div className="tab-text-wrap">
                    <span className="tab-title">{item.title}</span>
                    <span className="tab-tag">{item.tag}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Quadrant Detail Card */}
          <div className="ikigai-detail-card">
            <div className="detail-header">
              <div className="detail-kanji-stamp">{activeData.kanji}</div>
              <div>
                <h3 className="detail-title">{activeData.title}</h3>
                <span className="detail-subtitle">{activeData.subtitle}</span>
              </div>
              <span className="detail-tag-badge">{activeData.tag}</span>
            </div>
            <p className="detail-desc">{activeData.desc}</p>
            <div className="detail-footer">
              <span className="detail-accent-line" />
              <span className="detail-kintsugi">Kintsugi Alignment 金継ぎ</span>
            </div>
          </div>

          {/* Center Sweet Spot Card */}
          <div className="ikigai-core-card">
            <div className="core-hanko">命</div>
            <div className="core-content">
              <h4 className="core-title">The Convergence: Data Analyst</h4>
              <p className="core-text">
                Where love for discovery meets mastery of SQL & Python, solving real operational bottlenecks with high commercial impact.
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
