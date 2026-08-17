import { useInView } from "../../hooks/useInView";

export function SkillRing({ label, pct, color, kanji, delay = 0 }) {
  const [ref, vis] = useInView(0.2);
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = vis ? circ - (pct / 100) * circ : circ;

  return (
    <div ref={ref} className="ring-card">
      {kanji && <span className="ring-kanji-bg">{kanji}</span>}
      <svg width="92" height="92" viewBox="0 0 92 92" className="ring-svg">
        <circle
          cx="46"
          cy="46"
          r={r}
          fill="none"
          stroke="rgba(200,16,46,0.08)"
          strokeWidth="7"
        />
        <circle
          cx="46"
          cy="46"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeDasharray={circ}
          strokeDashoffset={dash}
          strokeLinecap="round"
          transform="rotate(-90 46 46)"
          style={{
            transition: `stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
          }}
        />
        <text
          x="46"
          y="46"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontSize="13"
          fontWeight="700"
          fontFamily="'Geist Mono',monospace"
        >
          {pct}%
        </text>
      </svg>
      <div className="ring-text-block">
        <span className="ring-label">{label}</span>
        {kanji && <span className="ring-kanji-tag">{kanji}</span>}
      </div>
    </div>
  );
}
