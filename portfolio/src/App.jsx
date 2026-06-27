import { useState, useEffect, useRef } from "react";
import "./App.css";

/* ─────────────────────────────────────────────
   SCROLL ANIMATION HOOK
───────────────────────────────────────────── */
function useFadeIn(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, visible] = useFadeIn();
  const t = `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`;
  const from = dir === "up" ? "translateY(24px)" : dir === "left" ? "translateX(-24px)" : dir === "right" ? "translateX(24px)" : "none";
  return (
    <div ref={ref} className={className}
      style={{ transition: t, opacity: visible ? 1 : 0, transform: visible ? "translate(0)" : from }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SIMPLE ICONS via CDN — brand logos
───────────────────────────────────────────── */
function BrandIcon({ slug, hex, size = 20, alt = "" }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${hex}`}
      alt={alt || slug}
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block", flexShrink: 0 }}
      loading="lazy"
    />
  );
}

/* ─────────────────────────────────────────────
   INLINE SVG ICONS — UI / general purpose
   All strokes use currentColor so they inherit
───────────────────────────────────────────── */
const Icon = {
  /* nav */
  Menu: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  Close: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  /* toolkit */
  Database:    () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.657-4.03 3-9 3S3 13.657 3 12"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/></svg>,
  Table:       () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>,
  Code:        () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  BarChart:    () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6"  y1="20" x2="6"  y2="14"/></svg>,
  TrendingUp:  () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  Layers:      () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  PieChart:    () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
  Server:      () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  /* case study */
  ShoppingCart:() => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  Activity:    () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Globe:       () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Eye:         () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  /* profile credentials */
  Award:       () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
  FileText:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
  BookOpen:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  /* journey */
  GraduationCap:()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  CheckCircle: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Target:      () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  /* contact */
  Mail:        () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  MapPin:      () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock:       () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Download:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
};

/* ─────────────────────────────────────────────
   ANIMATED SKILL BAR
───────────────────────────────────────────── */
function SkillBar({ label, pct, iconEl, delay = 0 }) {
  const [ref, visible] = useFadeIn(0.2);
  return (
    <div ref={ref} className="sk-row">
      <div className="sk-meta">
        <span className="sk-icon-wrap">{iconEl}</span>
        <span className="sk-label">{label}</span>
        <span className="sk-pct">{pct}%</span>
      </div>
      <div className="sk-track">
        <div className="sk-fill" style={{ width: visible ? `${pct}%` : "0%", transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${delay + 0.15}s` }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CASE STUDY CARD
───────────────────────────────────────────── */
function CaseCard({ iconEl, title, problem, approach, outcome, tools, link, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div className={`cs-card ${open ? "cs-open" : ""}`}>
        <div className="cs-top" onClick={() => setOpen(!open)}>
          <div className="cs-header">
            <span className="cs-icon">{iconEl}</span>
            <div>
              <h3 className="cs-title">{title}</h3>
              <p className="cs-problem">{problem}</p>
            </div>
          </div>
          <span className="cs-toggle">{open ? "−" : "+"}</span>
        </div>
        {open && (
          <div className="cs-body">
            <div className="cs-row">
              <div className="cs-col"><span className="cs-col-label">Approach</span><p className="cs-col-text">{approach}</p></div>
              <div className="cs-col"><span className="cs-col-label">Outcome</span><p className="cs-col-text">{outcome}</p></div>
            </div>
            <div className="cs-footer">
              <div className="cs-tools">{tools.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
              <a href={link} className="cs-link" target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────
   APP
───────────────────────────────────────────── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const github     = "https://github.com/Amithab88";
  const linkedin   = "https://linkedin.com/in/amithab87";
  const hackerrank = "https://www.hackerrank.com/profile/h242430101";
  const email      = "amithab88@example.com";

  const navLinks = ["Home", "Profile", "Toolkit", "Case Studies", "Journey", "Contact"];

  const toolkit = [
    { label: "SQL",               pct: 90, iconEl: <Icon.Database /> },
    { label: "Excel",             pct: 85, iconEl: <Icon.Table /> },
    { label: "Python",            pct: 80, iconEl: <Icon.Code /> },
    { label: "Power BI",          pct: 75, iconEl: <Icon.BarChart /> },
    { label: "Statistics",        pct: 75, iconEl: <Icon.TrendingUp /> },
    { label: "Pandas / NumPy",    pct: 72, iconEl: <Icon.Layers /> },
    { label: "Data Storytelling", pct: 70, iconEl: <Icon.PieChart /> },
    { label: "MySQL",             pct: 80, iconEl: <Icon.Server /> },
  ];

  const cases = [
    {
      iconEl: <Icon.ShoppingCart />,
      title: "Kirana Predict",
      problem: "Small kirana stores were over-ordering stock, leading to waste and cash-flow strain.",
      approach: "Built an ML forecasting pipeline (Prophet + MySQL) that learns from 6 months of sales history to predict weekly demand per product category. Automated reorder emails cut manual work to zero.",
      outcome: "Projected 30% reduction in overstock. Live Streamlit dashboard gives store owners a one-glance view of what to order and when.",
      tools: ["Python", "Prophet", "MySQL", "Streamlit", "Email API"],
      link: "https://github.com/Amithab88/Kirana-Predict",
    },
    {
      iconEl: <Icon.Activity />,
      title: "CricPulseIQ",
      problem: "Coaches and fans lacked objective, data-driven tools to compare player performance across formats.",
      approach: "Designed SQL CTEs and window functions to compute composite performance scores (batting average, strike rate, economy) normalized per innings and format.",
      outcome: "Interactive dashboard surfaces top performers by role. Identified 3 statistical patterns invisible in raw scorecard data.",
      tools: ["Python", "SQL", "CTEs", "Window Functions", "Visualization"],
      link: github,
    },
    {
      iconEl: <Icon.Globe />,
      title: "Asteroid Impact & Detection",
      problem: "NASA orbital datasets are complex — non-specialists cannot assess impact risk from raw numbers.",
      approach: "Built a Flask web app that ingests JPL orbital parameters, computes impact probability via physics formulas, and renders interactive trajectory charts.",
      outcome: "Translates scientific data into readable risk scores and visual trajectories. Full pipeline: ingest, transform, visualize.",
      tools: ["Python", "Flask", "JavaScript", "NASA JPL API", "D3.js"],
      link: github,
    },
    {
      iconEl: <Icon.Eye />,
      title: "Object Recognition AI",
      problem: "Manual image tagging is slow and error-prone at scale.",
      approach: "Deployed YOLOv8 inference pipeline with OpenCV preprocessing — frame extraction, bounding box annotation, and confidence thresholding in a single Python script.",
      outcome: "Real-time multi-class detection at 24fps on standard hardware. Demonstrates applied ML pipeline skills directly relevant to data preprocessing roles.",
      tools: ["Python", "YOLOv8", "OpenCV", "ML Inference", "NumPy"],
      link: github,
    },
  ];

  const journey = [
    { year: "Jan 2024", label: "Started B.Tech",           detail: "Enrolled in AI & Data Science Engineering at Dr. N.G.P IT, Coimbatore.", iconEl: <Icon.GraduationCap /> },
    { year: "Mar 2024", label: "First SQL Project",         detail: "Completed structured SQL training; wrote first analytical queries on real datasets.", iconEl: <Icon.Database /> },
    { year: "Jun 2024", label: "MySQL Certification",       detail: "Earned Codebasics MySQL certification — window functions, CTEs, subqueries.", iconEl: <Icon.CheckCircle /> },
    { year: "Sep 2024", label: "Kirana Predict",            detail: "Built first end-to-end ML project — demand forecasting for retail stores.", iconEl: <Icon.ShoppingCart /> },
    { year: "Dec 2024", label: "HackerRank SQL Badge",      detail: "Earned HackerRank Gold SQL badge through competitive problem solving.", iconEl: <Icon.Award /> },
    { year: "Feb 2025", label: "CricPulseIQ",               detail: "Advanced SQL analytics — CTEs, window functions, and interactive dashboards.", iconEl: <Icon.Activity /> },
    { year: "Apr 2025", label: "Google DA Certificate",     detail: "Enrolled in Google Data Analytics Certificate on Coursera — in progress.", iconEl: <Icon.BookOpen /> },
    { year: "Jun 2025", label: "Asteroid & Object AI",      detail: "Expanded into full-stack data products and computer vision pipelines.", iconEl: <Icon.Globe /> },
    { year: "Now",      label: "Targeting 2026 Internship", detail: "Actively applying for Data Analyst and Business Analyst internship roles.", iconEl: <Icon.Target /> },
  ];

  return (
    <div className="App">

      {/* HEADER */}
      <header className="header">
        <div className="header-logo">Amithab</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <Icon.Close /> : <Icon.Menu />}
        </button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <a href="/resume.pdf" className="nav-resume" download>Resume</a>
        </nav>
      </header>

      {/* 1. HERO */}
      <section id="home" className="hero-section">
        <div className="hero-grid" />
        <div className="hero-content">
          <FadeIn delay={0.05}><div className="hero-badge">Open to Data Analyst internships — 2026</div></FadeIn>
          <FadeIn delay={0.15}><h1 className="hero-name">AMITHAB T S</h1></FadeIn>
          <FadeIn delay={0.22}><p className="hero-role">Aspiring Data Analyst</p></FadeIn>
          <FadeIn delay={0.3}>
            <p className="hero-sub">Turning raw data into clear, actionable insight — with SQL, Python, and dashboards that tell the real story behind the numbers.</p>
          </FadeIn>
          <FadeIn delay={0.38}>
            <div className="hero-actions">
              <a href="#case-studies" className="btn-primary">View Case Studies</a>
              <a href="/resume.pdf" className="btn-outline" download>Download Resume</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.44}>
            <div className="hero-socials">
              <a href={github}     target="_blank" rel="noreferrer">GitHub</a>
              <a href={linkedin}   target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. ANALYST PROFILE */}
      <section id="profile" className="section faint-grid">
        <FadeIn>
          <span className="section-label">Who I am</span>
          <h2 className="section-title">Analyst Profile</h2>
        </FadeIn>
        <div className="profile-grid">
          <FadeIn dir="left" delay={0.1}>
            <div className="profile-bio">
              <p>I'm a third-year <strong>B.Tech student in AI & Data Science Engineering</strong> at Dr. N.G.P Institute of Technology, Coimbatore. My focus is becoming a strong Data Analyst who bridges the gap between raw data and business decisions.</p>
              <p>I work end-to-end — from writing SQL queries and cleaning data in Python, to building dashboards that stakeholders can actually use. Every project I ship starts with a business question, not a dataset.</p>
              <p>Currently executing a structured 6-month roadmap: SQL, Excel, Python Analytics, Power BI, Statistics. HackerRank SQL badge earned, Google DA Certificate in progress.</p>
              <div className="profile-creds">
                <div className="cred-item"><span className="cred-icon"><Icon.Award /></span><span className="cred-text">HackerRank SQL Gold Badge</span></div>
                <div className="cred-item"><span className="cred-icon"><Icon.FileText /></span><span className="cred-text">MySQL — Codebasics Certified</span></div>
                <div className="cred-item"><span className="cred-icon"><Icon.BookOpen /></span><span className="cred-text">Google Data Analytics — In Progress</span></div>
              </div>
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.15}>
            <div className="stats-panel">
              <div className="stat-card"><span className="stat-num">4+</span><span className="stat-label">Projects shipped</span></div>
              <div className="stat-card"><span className="stat-num">SQL</span><span className="stat-label">HackerRank badge</span></div>
              <div className="stat-card"><span className="stat-num">3rd</span><span className="stat-label">Year student</span></div>
              <div className="stat-card"><span className="stat-num">2026</span><span className="stat-label">Target internship</span></div>
              <div className="stat-card stat-wide"><span className="stat-num">AI & DS</span><span className="stat-label">B.Tech specialization · Dr. N.G.P IT</span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. ANALYTICS TOOLKIT */}
      <section id="toolkit" className="section faint-grid">
        <FadeIn>
          <span className="section-label">What I work with</span>
          <h2 className="section-title">Analytics Toolkit</h2>
          <p className="toolkit-sub">Proficiency levels based on applied project work and certifications — not self-assessment alone.</p>
        </FadeIn>
        <div className="toolkit-grid">
          {toolkit.map((s, i) => (
            <SkillBar key={s.label} label={s.label} pct={s.pct} iconEl={s.iconEl} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* 4. CASE STUDIES */}
      <section id="case-studies" className="section faint-grid">
        <FadeIn>
          <span className="section-label">Proof of work</span>
          <h2 className="section-title">Case Studies</h2>
          <p className="cs-intro">Each project starts with a real business problem. Click to expand the approach and outcome.</p>
        </FadeIn>
        <div className="cs-list">
          {cases.map((c, i) => <CaseCard key={c.title} {...c} delay={i * 0.08} />)}
        </div>
      </section>

      {/* 5. DATA JOURNEY */}
      <section id="journey" className="section faint-grid">
        <FadeIn>
          <span className="section-label">Growth over time</span>
          <h2 className="section-title">Data Journey</h2>
        </FadeIn>
        <div className="journey-track">
          {journey.map((j, i) => (
            <FadeIn key={i} delay={i * 0.07} dir={i % 2 === 0 ? "left" : "right"}>
              <div className={`journey-item ${i % 2 === 0 ? "j-left" : "j-right"}`}>
                <div className="j-dot">{j.iconEl}</div>
                <div className="j-card">
                  <span className="j-year">{j.year}</span>
                  <h4 className="j-label">{j.label}</h4>
                  <p className="j-detail">{j.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="journey-line" />
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="contact" className="section faint-grid">
        <FadeIn>
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="contact-intro">Open to Data Analyst internship opportunities and collaborations. Reach out — I'd love to talk data.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="terminal-card">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-filename">contact_info.json</span>
            </div>
            <div className="terminal-body">
              <table className="json-table">
                <tbody>
                  {[
                    { key: "Email",         val: email,                        href: `mailto:${email}`,  iconEl: <Icon.Mail /> },
                    { key: "GitHub",        val: "github.com/Amithab88",       href: github,              iconEl: <BrandIcon slug="github" hex="181717" size={16} /> },
                    { key: "LinkedIn",      val: "linkedin.com/in/amithab87",  href: linkedin,            iconEl: <BrandIcon slug="linkedin" hex="0077B5" size={16} /> },
                    { key: "HackerRank",    val: "h242430101",                 href: hackerrank,          iconEl: <BrandIcon slug="hackerrank" hex="2EC866" size={16} /> },
                    { key: "Location",      val: "Coimbatore, Tamil Nadu, India", href: null,             iconEl: <Icon.MapPin /> },
                    { key: "Response Time", val: "Usually within 24 hours",   href: null,                iconEl: <Icon.Clock /> },
                  ].map(({ key, val, href, iconEl }) => (
                    <tr key={key} className="json-row">
                      <td className="json-key">
                        <span className="json-key-inner">
                          <span className="json-row-icon">{iconEl}</span>
                          {key}
                        </span>
                      </td>
                      <td className="json-val">
                        {href
                          ? <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">{val}</a>
                          : <span>{val}</span>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="terminal-footer">
              <a href={github}     target="_blank" rel="noreferrer" className="tsocial-link">
                <BrandIcon slug="github"     hex="181717" size={20} alt="GitHub" />    GitHub
              </a>
              <a href={linkedin}   target="_blank" rel="noreferrer" className="tsocial-link">
                <BrandIcon slug="linkedin"   hex="0077B5" size={20} alt="LinkedIn" />  LinkedIn
              </a>
              <a href={hackerrank} target="_blank" rel="noreferrer" className="tsocial-link">
                <BrandIcon slug="hackerrank" hex="2EC866" size={20} alt="HackerRank" />HackerRank
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="footer">
        <span>© 2026 Amithab T S</span>
        <div className="footer-links">
          <a href={github}     target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin}   target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
        </div>
      </footer>
    </div>
  );
}

export default App;