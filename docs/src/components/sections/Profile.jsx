import { Slide } from "../ui/Slide";
import { CountUp } from "../ui/CountUp";
import { PERSONAL_INFO, STATS, CREDENTIALS } from "../../data/portfolioData";

export function Profile() {
  return (
    <section id="profile" className="section sec-dark profile-section">
      <div className="profile-wrap">
        {/* Left — Big number stats */}
        <Slide dir="left" className="profile-left">
          <div className="stat-wall">
            {STATS.map((s, i) => (
              <div key={s.label} className="stat-big">
                <span className="stat-kanji-bg">{s.kanji}</span>
                <div className="stat-big-num">
                  <CountUp to={s.val} suffix={s.suffix} delay={i * 0.15} />
                </div>
                <div className="stat-big-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Slide>

        {/* Right — Bio */}
        <div className="profile-right">
          <Slide delay={0.05}>
            <span className="sec-label-pill">
              Profile <span className="kanji-tag">履歴と熱意</span>
            </span>
            <h2 className="sec-title light">
              Crafting clarity
              <br />
              from chaotic datasets.
            </h2>
          </Slide>

          {PERSONAL_INFO.bioParagraphs.map((paragraph, idx) => (
            <Slide key={idx} delay={0.2 + idx * 0.1}>
              <p
                className="profile-bio"
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(
                    PERSONAL_INFO.name,
                    `<strong>${PERSONAL_INFO.name}</strong>`
                  ),
                }}
              />
            </Slide>
          ))}

          <Slide delay={0.4}>
            <div className="cred-stack">
              {CREDENTIALS.map(({ text, color }) => (
                <div
                  key={text}
                  className="cred-pill"
                  style={{ borderColor: color + "44" }}
                >
                  <span className="cred-bullet" style={{ background: color }} />
                  <span>{text}</span>
                  <span className="cred-seal-mini">証</span>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
