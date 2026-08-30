import { useState } from "react";
import { Slide } from "../ui/Slide";
import { PERSONAL_INFO } from "../../data/portfolioData";
import contactNight from "../../assets/art/contact_night.jpg";

export function Contact() {
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });

  const contactMethods = [
    {
      label: "Email",
      val: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      val: "Amithab88",
      href: PERSONAL_INFO.github,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      val: "amithab87",
      href: PERSONAL_INFO.linkedin,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077B5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Response",
      val: PERSONAL_INFO.responseWindow,
      href: null,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: "submitting", message: "" });
    try {
      const fd = new FormData(e.target);
      fd.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const r = await res.json();
      if (r.success) {
        setFormStatus({ state: "success", message: "Message sent successfully!" });
        e.target.reset();
      } else {
        setFormStatus({ state: "error", message: "Something went wrong. Please try again or email directly." });
      }
    } catch {
      setFormStatus({ state: "error", message: "Something went wrong. Please email directly." });
    }
  };

  return (
    <section id="contact" className="section sec-dark sec-contact">
      <div className="contact-frame">
        {/* Full-bleed night scene background with matching aspect ratio */}
        <div
          className="contact-bg-scene"
          style={{ backgroundImage: `url(${contactNight})` }}
          aria-hidden="true"
        />
        {/* Layered overlays — sky darkens left (content), lightens right (moonlight) */}
        <div className="contact-bg-overlay" aria-hidden="true" />

        {/* Content grid sits above the background */}
        <div className="contact-content-grid">
          {/* Left — contact info floats over the dark forest/tree side */}
          <Slide dir="left" className="contact-dark-panel">
            <span className="sec-label-pill">
              Contact <span className="kanji-tag">連絡</span>
            </span>

          <h2 className="contact-big-title">
            Let&apos;s talk
            <br />
            <span className="em">data.</span>
          </h2>

          <p className="contact-tagline">
            Open to Data Analyst internships, freelance analytics work, and conversations about data.
          </p>

          <div className="contact-links-stack">
            {contactMethods.map(({ label, val, href, icon }, i) => (
              <Slide key={label} delay={i * 0.1}>
                <div className="contact-link-row">
                  <span className="cl-icon">{icon}</span>
                  <div>
                    <span className="cl-label">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="cl-val"
                      >
                        {val}
                      </a>
                    ) : (
                      <span className="cl-val">{val}</span>
                    )}
                  </div>
                </div>
              </Slide>
            ))}
          </div>

          {/* Haiku caption matching the scene */}
          <p className="contact-haiku">
            <span className="haiku-line">月の光に</span>
            <span className="haiku-line">データの波が宿る</span>
            <span className="haiku-line">静かな夜に</span>
          </p>
        </Slide>

        {/* Right — frosted glass form card, on the moon-lit river side */}
        <Slide dir="right" className="contact-form-panel">
          <div className="contact-form-card">
            <h3 className="form-panel-title">Send a message</h3>
            <p className="form-panel-sub">
              Leave your details and I&apos;ll respond within 24 hours.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                className="form-input form-textarea"
                rows="3"
              />
              <button
                type="submit"
                className="btn-em form-submit"
                disabled={formStatus.state === "submitting"}
              >
                {formStatus.state === "submitting" ? "Sending..." : "Send Message ✉"}
              </button>
              {formStatus.message && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: formStatus.state === "success" ? "#00d68f" : "#e8384f",
                    marginTop: "0.5rem",
                  }}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </Slide>
      </div>
      </div>
    </section>
  );
}
