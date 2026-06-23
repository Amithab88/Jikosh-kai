import { useState } from "react";
import "./App.css";

/* Skill icon tile — large logo only, no text, no hover effect */
function SkillIcon({ slug, name, hex }) {
  return (
    <div className="skill-icon-tile" title={name}>
      <img
        className="skill-icon-logo"
        src={`https://cdn.simpleicons.org/${slug}/${hex}`}
        alt={name}
        loading="lazy"
      />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const github = "https://github.com/Amithab88";
  const linkedin = "https://linkedin.com/in/amithab87";
  const hackerrank = "https://www.hackerrank.com/profile/h242430101";
  const email = "amithab88@example.com"; // replace with real email

  const skills = [
    { name: "SQL", slug: "mysql", hex: "4479A1" },
    { name: "Excel", slug: "microsoftexcel", hex: "217346" },
    { name: "Power BI", slug: "powerbi", hex: "F2C811" },
    { name: "Python", slug: "python", hex: "3776AB" },
    { name: "Pandas", slug: "pandas", hex: "150458" },
    { name: "NumPy", slug: "numpy", hex: "013243" },
    { name: "Streamlit", slug: "streamlit", hex: "FF4B4B" },
    { name: "MySQL", slug: "mysql", hex: "4479A1" },
    { name: "Git", slug: "git", hex: "F05032" },
    { name: "GitHub", slug: "github", hex: "181717" },
    { name: "Flask", slug: "flask", hex: "000000" },
  ];

  const projects = [
    {
      title: "Kirana Predict",
      icon: "🛒",
      description:
        "AI-powered grocery inventory forecasting for kirana stores. Predicts demand from historical sales data and automates reorder alerts via email.",
      tech: ["Python", "MySQL", "Streamlit", "Forecasting"],
      link: "https://github.com/Amithab88/Kirana-Predict",
    },
    {
      title: "CricPulseIQ",
      icon: "🏏",
      description:
        "Cricket analytics dashboard that processes match data into player and team performance insights through SQL-backed statistical breakdowns.",
      tech: ["Python", "SQL", "Data Analytics", "Visualization"],
      link: "https://github.com/Amithab88/CricPulseIQ",
    },
    {
      title: "Asteroid Impact & Detection",
      icon: "☄️",
      description:
        "Full-stack analytics tool that processes orbital datasets to model and visualize asteroid impact probability with interactive charts.",
      tech: ["Python", "Flask", "Data Viz", "JavaScript"],
      link: "https://github.com/Amithab88/Asteroid-Impact-Detection-System",
    },
    {
      title: "Object Recognition AI",
      icon: "👁️",
      description:
        "Computer vision pipeline using YOLO and OpenCV for real-time object detection — applied data preprocessing and model evaluation workflows.",
      tech: ["Python", "YOLO", "OpenCV", "ML"],
      link: github,
    },
  ];

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <div className="header-logo">Amithab</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a>
          ))}
          <a href="/resume.pdf" className="nav-resume" download>Resume</a>
        </nav>
      </header>

      {/* HOME / HERO — bold grid background */}
      <section id="home" className="hero-section">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">Open to Data Analyst internships — 2026</div>
          <h1 className="hero-name">AMITHAB T S</h1>
          <p className="hero-role">Aspiring Data Analyst</p>
          <p className="hero-sub">
            Turning raw data into clear, actionable insight — with SQL, Python, and dashboards
            that tell the real story behind the numbers.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.pdf" className="btn-outline" download>Download Resume</a>
          </div>
          <div className="hero-socials">
            <a href={github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section faint-grid">
        <span className="section-label">Who I am</span>
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a third-year <strong>B.Tech student in AI & Data Science Engineering</strong> at
              Dr. N.G.P Institute of Technology, Coimbatore, focused on becoming a strong
              Data Analyst.
            </p>
            <p>
              I work with SQL, Excel, and Python to clean, explore, and visualize data —
              translating numbers into decisions. My project work spans demand forecasting,
              sports analytics, and dashboarding.
            </p>
            <p>
              Currently executing a structured 6-month Data Analyst roadmap, with a HackerRank
              SQL badge earned and the Google Data Analytics Certificate in progress.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card"><span className="stat-num">4+</span><span className="stat-label">Projects built</span></div>
            <div className="stat-card"><span className="stat-num">SQL</span><span className="stat-label">HackerRank badge</span></div>
            <div className="stat-card"><span className="stat-num">3rd</span><span className="stat-label">Year student</span></div>
            <div className="stat-card"><span className="stat-num">2026</span><span className="stat-label">Target internship</span></div>
          </div>
        </div>
      </section>

      {/* SKILLS — marquee, flexbox track, large icons only, no hover effect */}
      <section id="skills" className="section faint-grid">
        <span className="section-label">What I work with</span>
        <h2 className="section-title">Skills</h2>
        <div className="skills-marquee-wrap">
          <div className="skills-flex">
            {skills.map((s, i) => (
              <SkillIcon key={`a-${i}`} slug={s.slug} name={s.name} hex={s.hex} />
            ))}
          </div>
          <div className="skills-flex" aria-hidden="true">
            {skills.map((s, i) => (
              <SkillIcon key={`b-${i}`} slug={s.slug} name={s.name} hex={s.hex} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section faint-grid">
        <span className="section-label">What I've built</span>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="proj-header">
                <span className="proj-icon">{p.icon}</span>
                <h3 className="proj-title">{p.title}</h3>
              </div>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tech">
                {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              <a href={p.link} className="proj-link" target="_blank" rel="noreferrer">View on GitHub →</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section faint-grid">
        <span className="section-label">Get in touch</span>
        <h2 className="section-title">Contact</h2>
        <p className="contact-intro">
          Open to Data Analyst internship opportunities and collaborations. Reach out — I'd love to talk data.
        </p>
        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData,
            });
            const result = await res.json();
            if (result.success) {
              alert("Message sent — thank you!");
              e.target.reset();
            } else {
              alert("Something went wrong. Please try again.");
            }
          }}
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
          </div>
          <textarea name="message" placeholder="Your message" rows="5" required />
          <button type="submit" className="btn-primary form-submit">Send message</button>
        </form>
        <div className="contact-links">
          <a href={`mailto:${email}`}>{email}</a>
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Amithab T S</span>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={hackerrank} target="_blank" rel="noreferrer">HackerRank</a>
        </div>
      </footer>
    </div>
  );
}

export default App;