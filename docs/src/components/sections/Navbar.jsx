import { useState } from "react";
import { NAV_LINKS } from "../../data/portfolioData";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || "/";
  const resumeUrl = `${baseUrl}resume.pdf`.replace(/\/+/g, "/");

  return (
    <header className="header">
      <div className="header-logo">
        <span className="hanko-mark">分</span>
        amithab<span className="logo-dot">.</span>ts
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href={resumeUrl} className="nav-resume" download>
          Resume
        </a>
      </nav>
    </header>
  );
}
