import { PERSONAL_INFO } from "../../data/portfolioData";

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">
        © 2026 {PERSONAL_INFO.name} · <span className="kanji-sign">ありがとう</span>
      </span>
      <div className="footer-links">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={PERSONAL_INFO.hackerrank} target="_blank" rel="noreferrer">
          HackerRank
        </a>
      </div>
    </footer>
  );
}
