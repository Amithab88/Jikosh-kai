import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import { ToolIcon } from "../ui/ToolIcon";

const KANJI_NUMERALS = ["壱", "弐", "参", "四", "五", "六"];

export function CaseCard({
  iconSlug,
  title,
  subtitle,
  image,
  tagKanji,
  problem,
  approach,
  outcome,
  tools,
  link,
  index,
}) {
  const [flipped, setFlipped] = useState(false);
  const [ref, vis] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="flip-wrap"
      style={{
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(32px)",
      }}
    >
      <div
        className={`flip-inner ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped(!flipped);
          }
        }}
      >
        {/* FRONT */}
        <div className="flip-front">
          {image && (
            <div className="case-img-wrap">
              <img
                src={image}
                alt={title}
                className="case-cover-img"
                loading="lazy"
              />
              <div className="case-img-overlay" />
              <div className="case-chapter-badge">
                <span className="case-num">{KANJI_NUMERALS[index] || index + 1}</span>
                <span className="case-tag-kanji">{tagKanji || "事例"}</span>
              </div>
            </div>
          )}

          <div className="case-front-body">
            <div className="case-title-row">
              <div className="case-icon-wrap">
                <ToolIcon slug={iconSlug} size={22} color="#00d68f" />
              </div>
              <div>
                <h3 className="case-title">{title}</h3>
                {subtitle && <span className="case-subtitle">{subtitle}</span>}
              </div>
            </div>

            <p className="case-problem">{problem}</p>

            <div className="case-tools-mini">
              {tools.slice(0, 3).map((t) => (
                <span key={t} className="tool-chip">
                  {t}
                </span>
              ))}
              {tools.length > 3 && (
                <span className="tool-chip-more">+{tools.length - 3}</span>
              )}
            </div>

            <div className="case-hint">Click to see Approach & Outcome →</div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-back">
          <div className="back-header">
            <span className="back-num-tag">{KANJI_NUMERALS[index] || index + 1}</span>
            <h3 className="back-title">{title}</h3>
            <span className="back-kanji-stamp">解決</span>
          </div>

          <div className="back-section">
            <span className="back-label">The Approach</span>
            <p className="back-text">{approach}</p>
          </div>

          <div className="back-section">
            <span className="back-label">Measurable Outcome</span>
            <p className="back-text">{outcome}</p>
          </div>

          <div className="back-tools-wrap">
            <span className="back-tools-label">Stack:</span>
            <div className="back-tools">
              {tools.map((t) => (
                <span key={t} className="tool-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="back-footer">
            <a
              href={link}
              className="back-link"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub Repository →
            </a>
            <span className="case-hint">Click to flip back ↶</span>
          </div>
        </div>
      </div>
    </div>
  );
}
