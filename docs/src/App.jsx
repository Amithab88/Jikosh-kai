import { useState, useEffect, useRef } from "react";
import "./App.css";

/* ─── HOOKS ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ─── COUNTER ANIMATION ─── */
function CountUp({ to, suffix = "", delay = 0 }) {
  const [val, setVal] = useState(0);
  const [ref, vis] = useInView(0.3);
  useEffect(() => {
    if (!vis) return;
    const timer = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(to / 40);
      const interval = setInterval(() => {
        start = Math.min(start + step, to);
        setVal(start);
        if (start >= to) clearInterval(interval);
      }, 35);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [vis, to, delay]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── TYPEWRITER ─── */
function Typewriter({ text, speed = 55, delay = 0 }) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);
  const [ref, vis] = useInView(0.2);
  useEffect(() => {
    if (!vis || started) return;
    setStarted(true);
    const t = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        setShown(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [vis, text, speed, delay, started]);
  return <span ref={ref}>{shown}<span className="tw-cursor">|</span></span>;
}

/* ─── SLIDE IN ─── */
function Slide({ children, dir = "up", delay = 0, className = "" }) {
  const [ref, vis] = useInView(0.08);
  const from = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-50px)", right: "translateX(50px)", scale: "scale(0.88)" }[dir] || "translateY(40px)";
  return (
    <div ref={ref} className={className} style={{ transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`, opacity: vis ? 1 : 0, transform: vis ? "none" : from }}>
      {children}
    </div>
  );
}

/* ─── ANIMATED SKILL RING ─── */
function SkillRing({ label, pct, color, delay = 0 }) {
  const [ref, vis] = useInView(0.2);
  const r = 36; const circ = 2 * Math.PI * r;
  const dash = vis ? circ - (pct / 100) * circ : circ;
  return (
    <div ref={ref} className="ring-card">
      <svg width="92" height="92" viewBox="0 0 92 92">
        <circle cx="46" cy="46" r={r} fill="none" stroke="rgba(0,214,143,0.1)" strokeWidth="7"/>
        <circle cx="46" cy="46" r={r} fill="none" stroke={color} strokeWidth="7"
          strokeDasharray={circ} strokeDashoffset={dash}
          strokeLinecap="round" transform="rotate(-90 46 46)"
          style={{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s` }}/>
        <text x="46" y="46" textAnchor="middle" dominantBaseline="middle" fill={color} fontSize="13" fontWeight="700" fontFamily="'Geist Mono',monospace">{pct}%</text>
      </svg>
      <span className="ring-label">{label}</span>
    </div>
  );
}

/* ─── CASE CARD — horizontal flip ─── */
function CaseCard({ iconEl, title, problem, approach, outcome, tools, link, index }) {
  const [flipped, setFlipped] = useState(false);
  const [ref, vis] = useInView(0.1);
  return (
    <div ref={ref} className="flip-wrap" style={{ transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`, opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(32px)" }}>
      <div className={`flip-inner ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
        {/* FRONT */}
        <div className="flip-front">
          <div className="case-num">{["壱","弐","参","四"][index] || index + 1}</div>
          <div className="case-icon-wrap">{iconEl}</div>
          <h3 className="case-title">{title}</h3>
          <p className="case-problem">{problem}</p>
          <div className="case-tools-mini">
            {tools.slice(0, 3).map(t => <span key={t} className="tool-chip">{t}</span>)}
          </div>
          <div className="case-hint">Click to see approach →</div>
        </div>
        {/* BACK */}
        <div className="flip-back">
          <div className="back-section">
            <span className="back-label">Approach</span>
            <p className="back-text">{approach}</p>
          </div>
          <div className="back-section">
            <span className="back-label">Outcome</span>
            <p className="back-text">{outcome}</p>
          </div>
          <div className="back-tools">
            {tools.map(t => <span key={t} className="tool-chip">{t}</span>)}
          </div>
          <a href={link} className="back-link" target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>GitHub →</a>
          <div className="case-hint" style={{ marginTop: "auto" }}>Click to go back</div>
        </div>
      </div>
    </div>
  );
}

/* ─── JOURNEY NODE ─── */
function JourneyNode({ year, label, detail, iconEl, index }) {
  const [ref, vis] = useInView(0.2);
  return (
    <div ref={ref} className={`jnode ${vis ? "jnode-vis" : ""}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="jnode-line" />
      <div className="jnode-dot">{iconEl}</div>
      <div className="jnode-card">
        <span className="jnode-year">{year}</span>
        <h4 className="jnode-label">{label}</h4>
        <p className="jnode-detail">{detail}</p>
      </div>
    </div>
  );
}

/* ─── APP ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const github    = "https://github.com/Amithab88";
  const linkedin  = "https://linkedin.com/in/amithab87";
  const hackerrank= "https://www.hackerrank.com/profile/h242430101";
  const email     = "amithab88@example.com";

  /* hero mouse parallax */
  useEffect(() => {
    const handler = (e) => setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const tools = [
    { slug: "python", alt: "Python" }, { slug: "mysql", alt: "MySQL" },
    { slug: "microsoftexcel", alt: "Excel" }, { slug: "powerbi", alt: "Power BI" },
    { slug: "pandas", alt: "Pandas" }, { slug: "numpy", alt: "NumPy" },
    { slug: "streamlit", alt: "Streamlit" }, { slug: "github", alt: "GitHub" },
    { slug: "flask", alt: "Flask" }, { slug: "canva", alt: "Canva" },
  ];

  const skills = [
    { label: "SQL",          pct: 90, color: "#00d68f" },
    { label: "Excel",        pct: 85, color: "#00b4d8" },
    { label: "Python",       pct: 80, color: "#f59e0b" },
    { label: "Power BI",     pct: 75, color: "#e879f9" },
    { label: "Statistics",   pct: 75, color: "#f97316" },
    { label: "Pandas/NumPy", pct: 72, color: "#00d68f" },
    { label: "Storytelling", pct: 70, color: "#00b4d8" },
    { label: "MySQL",        pct: 80, color: "#f59e0b" },
  ];

  const BI = ({ slug, size = 20 }) => (
    <img src={`https://cdn.simpleicons.org/${slug}/00d68f`} width={size} height={size} alt={slug} loading="lazy" style={{ objectFit: "contain" }} />
  );

  const cases = [
    { iconEl: <BI slug="streamlit" />, title: "Kirana Predict", problem: "Small kirana stores over-ordering stock, draining cash flow and creating waste.", approach: "Built ML forecasting pipeline with Prophet + MySQL. Learns from 6 months of sales history to predict weekly demand per SKU. Automated reorder emails.", outcome: "Projected 30% overstock reduction. Live Streamlit dashboard for one-glance restocking decisions.", tools: ["Python", "Prophet", "MySQL", "Streamlit"], link: "https://github.com/Amithab88/Kirana-Predict" },
    { iconEl: <BI slug="python" />, title: "CricPulseIQ", problem: "Coaches lacked objective tools to compare player performance across formats.", approach: "SQL CTEs and window functions compute composite scores — batting average, strike rate, economy — normalized per innings and format.", outcome: "Surfaced 3 patterns invisible in raw scorecards. Interactive dashboard filters by role and format.", tools: ["Python", "SQL", "CTEs", "Window Functions"], link: github },
    { iconEl: <BI slug="flask" />, title: "Asteroid Impact", problem: "NASA orbital datasets are too complex for non-specialists to assess risk from.", approach: "Flask web app ingests JPL orbital parameters, computes impact probability via physics formulas, renders interactive D3.js trajectory charts.", outcome: "Full pipeline: ingest → transform → visualize. Translates scientific data into readable risk scores.", tools: ["Python", "Flask", "NASA API", "D3.js"], link: github },
    { iconEl: <BI slug="opencv" size={20} />, title: "Object Recognition AI", problem: "Manual image tagging is slow and error-prone at scale.", approach: "YOLOv8 + OpenCV pipeline. Frame extraction, bounding box annotation, confidence thresholding in a single optimized Python script.", outcome: "Real-time multi-class detection at 24fps. Demonstrates applied ML pipeline skills for data preprocessing roles.", tools: ["Python", "YOLOv8", "OpenCV", "NumPy"], link: github },
  ];

  const journey = [
    { year: "Jan 2024", label: "B.Tech Begins", detail: "Enrolled in AI & Data Science Engineering at Dr. N.G.P IT, Coimbatore.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
    { year: "Mar 2024", label: "First SQL Project", detail: "Wrote first analytical queries on real datasets — the beginning of the data journey.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/></svg> },
    { year: "Jun 2024", label: "MySQL Certified", detail: "Codebasics MySQL certification — window functions, CTEs, subqueries mastered.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
    { year: "Sep 2024", label: "Kirana Predict", detail: "First end-to-end ML project — demand forecasting for real retail stores.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg> },
    { year: "Dec 2024", label: "HackerRank SQL Gold", detail: "Earned Gold SQL badge through competitive analytical problem solving.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
    { year: "Feb 2025", label: "CricPulseIQ", detail: "Advanced SQL analytics — window functions, CTEs, and interactive dashboards.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { year: "Apr 2025", label: "Google DA Cert", detail: "Enrolled in Google Data Analytics Certificate on Coursera — in progress.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg> },
    { year: "Jun 2025", label: "Asteroid + CV AI", detail: "Full-stack data products and computer vision ML pipelines shipped.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
    { year: "2026 →", label: "Internship Target", detail: "Actively applying for Data Analyst and Business Analyst internship roles.", iconEl: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
  ];

  const stats = [
    { val: 4, suffix: "+", label: "Projects Shipped" },
    { val: 90, suffix: "%", label: "SQL Proficiency" },
    { val: 3, suffix: "rd", label: "Year Student" },
    { val: 6, suffix: "mo", label: "Roadmap Progress" },
  ];

  return (
    <div className="App">

      {/* ── FLOATING NAV ── */}
      <header className="header">
        <div className="header-logo">
          <span className="hanko-mark">分</span>
          amithab<span className="logo-dot">.</span>ts
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          {menuOpen ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>}
        </button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {[["Home","#home"],["Profile","#profile"],["Ikigai","#ikigai"],["Skills","#toolkit"],["Work","#case-studies"],["Timeline","#journey"],["Contact","#contact"]].map(([l,h]) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <a href="/resume.pdf" className="nav-resume" download>Resume</a>
        </nav>
      </header>

      {/* ══ 1. HERO ══ */}
      <section id="home" className="hero-section">
        {/* parallax mesh */}
        <div className="hero-mesh" style={{ transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)` }} />
        <div className="hero-mesh-2" style={{ transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` }} />

        {/* ensō — hand-drawn incomplete circle behind the name */}
        <svg className="enso-svg" viewBox="0 0 400 400" aria-hidden="true">
          <circle cx="200" cy="200" r="170" fill="none" stroke="var(--hi)" strokeWidth="3"
            strokeLinecap="round" strokeDasharray="980" strokeDashoffset="60"
            transform="rotate(-105 200 200)" />
        </svg>

        {/* vertical kanji strip */}
        <div className="kanji-vert-strip">データ分析</div>

        {/* split layout — text left, data-viz right */}
        <div className="hero-inner">
          <div className="hero-left">
            <Slide delay={0.1}>
              <div className="hanko-badge">
                <span className="hanko-badge-stamp">受付中</span>
                <span className="hanko-badge-text">Available for Internships · 2026</span>
              </div>
            </Slide>
            <Slide delay={0.22}>
              <h1 className="hero-name">
                Data<br/>
                <span className="hero-name-accent">Analyst</span><br/>
                in Progress.
              </h1>
            </Slide>
            <Slide delay={0.38}>
              <p className="hero-desc">SQL · Python · Power BI · Storytelling <span className="kanji-inline">データアナリスト</span></p>
            </Slide>
            <Slide delay={0.5}>
              <p className="hero-sub">Third-year B.Tech student turning messy data into clean decisions — one query at a time.</p>
            </Slide>
            <Slide delay={0.62}>
              <div className="hero-btns">
                <a href="#contact" className="btn-em">Get in Touch</a>
                <a href="#case-studies" className="btn-ghost">View Work</a>
              </div>
            </Slide>
          </div>

          {/* live-looking mini dashboard — styled as a stamp scroll panel */}
          <Slide delay={0.3} dir="right" className="hero-right">
            <div className="hero-dashboard">
              <div className="dash-header">
                <span className="dash-dot red"/><span className="dash-dot yellow"/><span className="dash-dot green"/>
                <span className="dash-title">分析.live</span>
              </div>
              {/* sparkline bars */}
              <div className="dash-chart">
                <div className="dash-chart-label">Weekly Insights</div>
                <div className="dash-bars">
                  {[45,72,38,88,61,95,54,79,42,86,68,100].map((h,i) => (
                    <div key={i} className="dash-bar-wrap">
                      <div className="dash-bar" style={{ height: `${h}%`, animationDelay: `${i*0.08}s` }} />
                    </div>
                  ))}
                </div>
              </div>
              {/* mini kpi row */}
              <div className="dash-kpis">
                <div className="dash-kpi"><span className="dkpi-val">94%</span><span className="dkpi-label">Accuracy</span></div>
                <div className="dash-kpi"><span className="dkpi-val">↑12%</span><span className="dkpi-label">Growth</span></div>
                <div className="dash-kpi"><span className="dkpi-val">4 DS</span><span className="dkpi-label">Projects</span></div>
              </div>
              {/* data row — scrolling ticker */}
              <div className="dash-ticker-wrap">
                <div className="dash-ticker">
                  {["SQL · 90%","EXCEL · 85%","PYTHON · 80%","POWER BI · 75%","SQL · 90%","EXCEL · 85%","PYTHON · 80%","POWER BI · 75%"].map((t,i) => <span key={i} className="ticker-item">{t}</span>)}
                </div>
              </div>
            </div>
          </Slide>
        </div>

        {/* bottom tool strip */}
        <div className="hero-tools-strip">
          <p className="strip-label">Tools I use</p>
          <div className="strip-track-wrap">
            <div className="strip-track">
              {[...tools, ...tools].map((t, i) => (
                <img key={i} src={`https://cdn.simpleicons.org/${t.slug}/ffffff`} alt={t.alt} className="strip-logo" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. PROFILE — horizontal asymmetric ══ */}
      <section id="profile" className="section sec-dark">
        <div className="profile-wrap">
          {/* Left — big number wall */}
          <Slide dir="left" className="profile-left">
            <div className="stat-wall">
              {stats.map((s, i) => (
                <div key={s.label} className="stat-big">
                  <div className="stat-big-num">
                    <CountUp to={s.val} suffix={s.suffix} delay={i * 0.15} />
                  </div>
                  <div className="stat-big-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Slide>

          {/* Right — bio */}
          <div className="profile-right">
            <Slide delay={0.05}>
              <span className="sec-label-pill">Profile <span className="kanji-tag">履歴</span></span>
              <h2 className="sec-title light">Who's behind<br/>the data?</h2>
            </Slide>
            <Slide delay={0.2}>
              <p className="profile-bio">I'm <strong>Amithab T S</strong> — a third-year B.Tech student in AI & Data Science Engineering at Dr. N.G.P Institute of Technology, Coimbatore. Every project I touch starts with a business question, not a spreadsheet.</p>
            </Slide>
            <Slide delay={0.3}>
              <p className="profile-bio">I work end-to-end: raw SQL queries → Python cleaning → dashboards stakeholders can actually read. Currently 6 months into a structured Data Analyst roadmap.</p>
            </Slide>
            <Slide delay={0.4}>
              <div className="cred-stack">
                {[
                  ["HackerRank SQL Gold Badge", "#00d68f"],
                  ["MySQL — Codebasics Certified", "#00b4d8"],
                  ["Google DA Certificate — In Progress", "#f59e0b"],
                ].map(([text, color]) => (
                  <div key={text} className="cred-pill" style={{ borderColor: color + "44" }}>
                    <span className="cred-bullet" style={{ background: color }} />
                    {text}
                  </div>
                ))}
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* ══ IKIGAI — 生き甲斐 ══ */}
      <section id="ikigai" className="section sec-cream">
        <Slide className="ikigai-head">
          <span className="sec-label-pill dark">Ikigai <span className="kanji-tag">生き甲斐</span></span>
          <h2 className="sec-title">A reason for being<br/>in data.</h2>
          <p className="ikigai-sub">The Japanese concept of <em>ikigai</em> — where passion, skill, purpose, and profession meet. This is where data analysis sits for me.</p>
        </Slide>

        <Slide dir="scale" delay={0.15}>
          <div className="ikigai-diagram">
            <div className="ikigai-circle ik-love">
              <span className="ik-kanji">好き</span>
              <span className="ik-title">What I Love</span>
              <span className="ik-desc">Finding patterns in messy, real-world data</span>
            </div>
            <div className="ikigai-circle ik-good">
              <span className="ik-kanji">得意</span>
              <span className="ik-title">What I'm Good At</span>
              <span className="ik-desc">SQL, Python, statistics, dashboarding</span>
            </div>
            <div className="ikigai-circle ik-need">
              <span className="ik-kanji">必要</span>
              <span className="ik-title">What The World Needs</span>
              <span className="ik-desc">Clear, data-driven decisions</span>
            </div>
            <div className="ikigai-circle ik-paid">
              <span className="ik-kanji">稼げる</span>
              <span className="ik-title">What I Can Be Paid For</span>
              <span className="ik-desc">Data Analyst & Business Analyst roles</span>
            </div>
            <div className="ikigai-center">
              <span className="ikigai-center-kanji">生き甲斐</span>
              <span className="ikigai-center-label">Data Analysis</span>
            </div>
          </div>
        </Slide>

        {/* mobile fallback list */}
        <div className="ikigai-mobile-list">
          {[
            ["好き", "What I Love", "Finding patterns in messy, real-world data"],
            ["得意", "What I'm Good At", "SQL, Python, statistics, dashboarding"],
            ["必要", "What The World Needs", "Clear, data-driven decisions"],
            ["稼げる", "What I Can Be Paid For", "Data Analyst & Business Analyst roles"],
          ].map(([k, t, d]) => (
            <div key={t} className="ikigai-mobile-card">
              <span className="ik-kanji">{k}</span>
              <div>
                <span className="ik-title">{t}</span>
                <span className="ik-desc">{d}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. TOOLKIT — circular ring chart layout ══ */}
      <section id="toolkit" className="section sec-cream">
        <div className="toolkit-wrap">
          <Slide className="toolkit-head">
            <span className="sec-label-pill dark">Skills <span className="kanji-tag">技能</span></span>
            <h2 className="sec-title">
              <Typewriter text="Analytics Toolkit" delay={0.2} />
            </h2>
            <p className="toolkit-sub">Proficiency from applied project work, not self-assessment alone. Each ring shows real usage across shipped projects.</p>
          </Slide>
          <div className="rings-grid">
            {skills.map((s, i) => (
              <Slide key={s.label} delay={i * 0.07} dir="scale">
                <SkillRing label={s.label} pct={s.pct} color={s.color} delay={i * 0.1} />
              </Slide>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. CASE STUDIES — flip card grid ══ */}
      <section id="case-studies" className="section sec-dark">
        <Slide className="cs-head">
          <span className="sec-label-pill">Case Studies <span className="kanji-tag">事例</span></span>
          <h2 className="sec-title light">Problems I've solved<br/>with data</h2>
          <p className="cs-sub">Flip each card to see how I approached and solved each business problem.</p>
        </Slide>
        <div className="flip-grid">
          {cases.map((c, i) => <CaseCard key={c.title} {...c} index={i} />)}
        </div>
      </section>

      {/* ══ 5. DATA JOURNEY — horizontal scrolling timeline ══ */}
      <section id="journey" className="section sec-cream">
        <Slide className="journey-head">
          <span className="sec-label-pill dark">Timeline <span className="kanji-tag">道程</span></span>
          <h2 className="sec-title">The Data Journey</h2>
        </Slide>
        <div className="journey-scroll">
          <div className="journey-rail">
            <div className="journey-track-line" />
            {journey.map((j, i) => <JourneyNode key={i} {...j} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ 6. CONTACT — split dark/light ══ */}
      <section id="contact" className="section sec-contact">
        <div className="contact-split">
          {/* Left — dark panel */}
          <Slide dir="left" className="contact-dark-panel">
            <span className="sec-label-pill">Contact <span className="kanji-tag">連絡</span></span>
            <h2 className="contact-big-title">Let's talk<br/><span className="em">data.</span></h2>
            <p className="contact-tagline">Open to Data Analyst internships, freelance analytics work, and conversations about data.</p>
            <div className="contact-links-stack">
              {[
                { label: "Email", val: email, href: `mailto:${email}`, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { label: "GitHub", val: "Amithab88", href: github, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                { label: "LinkedIn", val: "amithab87", href: linkedin, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: "Response", val: "Within 24 hours", href: null, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
              ].map(({ label, val, href, icon }, i) => (
                <Slide key={label} delay={i * 0.1}>
                  <div className="contact-link-row">
                    <span className="cl-icon">{icon}</span>
                    <div>
                      <span className="cl-label">{label}</span>
                      {href
                        ? <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="cl-val">{val}</a>
                        : <span className="cl-val">{val}</span>
                      }
                    </div>
                  </div>
                </Slide>
              ))}
            </div>
          </Slide>

          {/* Right — cream form panel */}
          <Slide dir="right" className="contact-form-panel">
            <h3 className="form-panel-title">Send a message</h3>
            <form className="contact-form" onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              fd.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
              const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
              const r = await res.json();
              if (r.success) { alert("Message sent!"); e.target.reset(); }
              else { alert("Something went wrong."); }
            }}>
              <input type="text"  name="name"    placeholder="Your name"    required className="form-input" />
              <input type="email" name="email"   placeholder="Your email"   required className="form-input" />
              <textarea name="message" placeholder="Your message..." rows="5" required className="form-input form-textarea" />
              <button type="submit" className="btn-em form-submit">Send Message</button>
            </form>
          </Slide>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-copy">© 2026 Amithab T S · <span className="kanji-sign">ありがとう</span></span>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
        </div>
      </footer>
    </div>
  );
}