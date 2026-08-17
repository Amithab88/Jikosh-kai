import { useState } from "react";
import { Slide } from "../ui/Slide";
import { Typewriter } from "../ui/Typewriter";
import { ToolIcon } from "../ui/ToolIcon";
import { SKILLS, SKILL_CATEGORIES, TOOLS } from "../../data/portfolioData";

export function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSkillId, setActiveSkillId] = useState(SKILLS[0].id);
  const [copied, setCopied] = useState(false);

  const filteredSkills =
    selectedCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  const activeSkill =
    SKILLS.find((s) => s.id === activeSkillId) || filteredSkills[0] || SKILLS[0];

  const handleCopy = () => {
    if (activeSkill.codeSnippet) {
      navigator.clipboard.writeText(activeSkill.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="toolkit" className="section sec-cream toolkit-section">
      <div className="toolkit-wrap">
        <Slide className="toolkit-head">
          <span className="sec-label-pill dark">
            Craft & Discipline <span className="kanji-tag">技能体系</span>
          </span>
          <h2 className="sec-title">
            <Typewriter text="Analytics Craft Studio" delay={0.2} />
          </h2>
          <p className="toolkit-sub">
            Grounded in rigorous project application, not just theoretical understanding. Select any discipline to inspect applied capabilities, technical syntax, and production context.
          </p>
        </Slide>

        {/* ── Category Filter Pills ── */}
        <Slide delay={0.1} className="toolkit-filters-wrap">
          <div className="toolkit-filter-tabs">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`toolkit-filter-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    const matching =
                      cat.id === "all"
                        ? SKILLS
                        : SKILLS.filter((s) => s.category === cat.id);
                    if (matching.length > 0 && !matching.some((s) => s.id === activeSkillId)) {
                      setActiveSkillId(matching[0].id);
                    }
                  }}
                >
                  <span className="filter-kanji">{cat.kanji}</span>
                  <span className="filter-label">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </Slide>

        {/* ── Main Interactive Studio Grid (Cards Left, Inspector Right) ── */}
        <div className="toolkit-studio-grid">
          {/* Left: Skill Cards List */}
          <div className="toolkit-cards-column">
            {filteredSkills.map((s, idx) => {
              const isSelected = activeSkill.id === s.id;
              return (
                <Slide key={s.id} delay={idx * 0.05} dir="up">
                  <div
                    className={`toolkit-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setActiveSkillId(s.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveSkillId(s.id);
                      }
                    }}
                  >
                    <span className="card-kanji-watermark">{s.kanji}</span>

                    <div className="card-header-row">
                      <div className="card-title-group">
                        <div
                          className="card-color-dot"
                          style={{ background: s.color, boxShadow: `0 0 10px ${s.color}66` }}
                        />
                        <h3 className="card-skill-name">{s.label}</h3>
                      </div>
                      <span className="card-rank-badge">{s.rank.split("·")[0].trim()}</span>
                    </div>

                    <p className="card-summary">{s.summary}</p>

                    <div className="card-progress-footer">
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${s.pct}%`,
                            background: `linear-gradient(90deg, ${s.color}, var(--gold))`,
                          }}
                        />
                      </div>
                      <span className="progress-pct-text" style={{ color: s.color }}>
                        {s.pct}%
                      </span>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>

          {/* Right: Live Interactive Inspector & Code Forge */}
          <Slide dir="right" delay={0.15} className="toolkit-inspector-panel">
            <div className="inspector-box">
              {/* Top Header */}
              <div className="inspector-top">
                <div className="inspector-badge-row">
                  <span className="inspector-hanko-seal">{activeSkill.kanji}</span>
                  <div>
                    <h3 className="inspector-title">{activeSkill.label}</h3>
                    <span className="inspector-rank">{activeSkill.rank}</span>
                  </div>
                </div>
                <div className="inspector-gauge-pill" style={{ borderColor: activeSkill.color + "55" }}>
                  <span className="gauge-label">Proficiency</span>
                  <span className="gauge-val" style={{ color: activeSkill.color }}>
                    {activeSkill.pct}%
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="inspector-section">
                <span className="inspector-sec-label">
                  Practical Execution <span className="kanji-tag">実践概要</span>
                </span>
                <p className="inspector-desc">{activeSkill.summary}</p>
              </div>

              {/* Core Capabilities Checklist */}
              <div className="inspector-section">
                <span className="inspector-sec-label">
                  Core Capabilities & Techniques <span className="kanji-tag">奥義</span>
                </span>
                <div className="capabilities-grid">
                  {activeSkill.capabilities.map((cap, i) => (
                    <div key={i} className="capability-item">
                      <span className="cap-check" style={{ color: activeSkill.color }}>
                        ✓
                      </span>
                      <span className="cap-text">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipped Project Connection */}
              <div className="inspector-project-row">
                <span className="proj-label">Applied in Project:</span>
                <span className="proj-name">{activeSkill.projectUsed}</span>
              </div>

              {/* Interactive Code Terminal */}
              <div className="inspector-terminal-wrap">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="t-dot red" />
                    <span className="t-dot yellow" />
                    <span className="t-dot green" />
                  </div>
                  <span className="terminal-title">
                    {activeSkill.label.toLowerCase().replace(/[^a-z]/g, "")}_snippet.sql
                  </span>
                  <button
                    className="terminal-copy-btn"
                    onClick={handleCopy}
                    aria-label="Copy snippet"
                  >
                    {copied ? "Copied! ✓" : "Copy Code"}
                  </button>
                </div>
                <pre className="terminal-pre">
                  <code>{activeSkill.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </Slide>
        </div>

        {/* ── Technologies & Tools Marquee ── */}
        <Slide delay={0.3} className="toolkit-marquee-wrap">
          <div className="toolkit-marquee-header">
            <span className="toolkit-marquee-line" />
            <span className="toolkit-marquee-title">
              Full Technology Belt <span className="kanji-tag">道具集</span>
            </span>
            <span className="toolkit-marquee-line" />
          </div>

          <div className="strip-track-wrap">
            <div className="strip-track">
              {[...TOOLS, ...TOOLS].map((t, i) => (
                <div key={i} className="strip-item">
                  <div className="strip-icon-box">
                    <ToolIcon slug={t.slug} name={t.alt} size={20} color="currentColor" />
                  </div>
                  <span className="strip-text">{t.alt}</span>
                  <span className="strip-badge-mini">{t.category}</span>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
