import { useInView } from "../../hooks/useInView";

function TimelineIcon({ type }) {
  switch (type) {
    case "education":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "database":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        </svg>
      );
    case "certificate":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      );
    case "award":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case "goal":
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "project":
    default:
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        </svg>
      );
  }
}

export function JourneyNode({ year, label, detail, type, kanji, index }) {
  const [ref, vis] = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`jnode ${vis ? "jnode-vis" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="jnode-line" />
      <div className="jnode-dot">
        <TimelineIcon type={type} />
      </div>
      <div className="jnode-card">
        <div className="jnode-header-row">
          <span className="jnode-year">{year}</span>
          {kanji && <span className="jnode-kanji-stamp">{kanji}</span>}
        </div>
        <h4 className="jnode-label">{label}</h4>
        <p className="jnode-detail">{detail}</p>
      </div>
    </div>
  );
}
