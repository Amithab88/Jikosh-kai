export function ToolIcon({ slug, name, size = 20, color = "currentColor", className = "" }) {
  const normalizedSlug = (slug || name || "").toLowerCase().replace(/[\s\-_.]/g, "");

  switch (normalizedSlug) {
    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M11.914 2c-5.01 0-4.694 2.172-4.694 2.172l.006 2.25h4.756v.675H5.23S2 6.73 2 11.758c0 5.027 2.816 4.85 2.816 4.85h1.68v-2.378s-.09-2.817 2.766-2.817h4.733v-.706c0-1.892-1.636-2.673-3.08-2.673H7.218V2h4.696zm-2.48 1.406a.78.78 0 1 1 0 1.562.78.78 0 0 1 0-1.562z"
            fill={color === "currentColor" ? "#3776AB" : color}
          />
          <path
            d="M12.086 22c5.01 0 4.694-2.172 4.694-2.172l-.006-2.25h-4.756v-.675h6.752S22 17.27 22 12.242c0-5.027-2.816-4.85-2.816-4.85h-1.68v2.378s.09 2.817-2.766 2.817H9.995v.706c0 1.892 1.636 2.673 3.08 2.673h3.707V22h-4.696zm2.48-1.406a.78.78 0 1 1 0-1.562.78.78 0 0 1 0 1.562z"
            fill={color === "currentColor" ? "#FFD43B" : color}
          />
        </svg>
      );

    case "mysql":
    case "sql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="5" rx="9" ry="3" fill={color === "currentColor" ? "rgba(0,180,216,0.2)" : "transparent"} stroke={color === "currentColor" ? "#00758F" : color} />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke={color === "currentColor" ? "#F29111" : color} />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke={color === "currentColor" ? "#00758F" : color} />
        </svg>
      );

    case "microsoftexcel":
    case "excel":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" fill={color === "currentColor" ? "#107C41" : color} />
          <path d="M7 7h10v10H7z" fill="rgba(255,255,255,0.15)" />
          <path d="M8.5 8l3 4-3 4h2l2-2.7 2 2.7h2l-3-4 3-4h-2l-2 2.7L10.5 8h-2z" fill="#FFFFFF" />
        </svg>
      );

    case "powerbi":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="11" width="4" height="10" rx="1.5" fill={color === "currentColor" ? "#F2C811" : color} />
          <rect x="9" y="7" width="4" height="14" rx="1.5" fill={color === "currentColor" ? "#F2C811" : color} />
          <rect x="15" y="3" width="4" height="18" rx="1.5" fill={color === "currentColor" ? "#F2C811" : color} />
        </svg>
      );

    case "pandas":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="4" width="4" height="16" rx="1" fill={color === "currentColor" ? "#150458" : color} />
          <rect x="9" y="8" width="4" height="12" rx="1" fill={color === "currentColor" ? "#E70488" : color} />
          <rect x="15" y="4" width="4" height="16" rx="1" fill={color === "currentColor" ? "#150458" : color} />
          <circle cx="11" cy="5" r="1.5" fill={color === "currentColor" ? "#FFD43B" : color} />
        </svg>
      );

    case "numpy":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M3 7.5L12 2l9 5.5v9L12 22l-9-5.5v-9z"
            stroke={color === "currentColor" ? "#013243" : color}
            strokeWidth="1.8"
            fill={color === "currentColor" ? "rgba(77,171,207,0.2)" : "transparent"}
          />
          <path d="M7 16V8l5 8V8l5 8" stroke={color === "currentColor" ? "#4DABCF" : color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "streamlit":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M15.45 6.64L19.45 13.57C19.98 14.49 19.32 15.65 18.25 15.65H13.67L15.45 6.64Z"
            fill={color === "currentColor" ? "#FF4B4B" : color}
          />
          <path
            d="M8.55 6.64L4.55 13.57C4.02 14.49 4.68 15.65 5.75 15.65H10.33L8.55 6.64Z"
            fill={color === "currentColor" ? "#FF7F7F" : color}
          />
          <path
            d="M12 2L6 17H18L12 2Z"
            fill={color === "currentColor" ? "#FF4B4B" : color}
          />
        </svg>
      );

    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color === "currentColor" ? "#FFFFFF" : color} className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "flask":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color === "currentColor" ? "#FFFFFF" : color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10 2v5.5L4 18a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L14 7.5V2" />
          <path d="M8.5 2h7" />
          <path d="M7 14.5h10" />
        </svg>
      );

    case "canva":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill={color === "currentColor" ? "#00C4CC" : color} />
          <path d="M12 6C8.686 6 6 8.686 6 12s2.686 6 6 6 6-2.686 6-6" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );

    case "opencv":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="7" r="4.5" stroke={color === "currentColor" ? "#FF0000" : color} strokeWidth="2" fill="none" />
          <circle cx="7" cy="16" r="4.5" stroke={color === "currentColor" ? "#00FF00" : color} strokeWidth="2" fill="none" />
          <circle cx="17" cy="16" r="4.5" stroke={color === "currentColor" ? "#0000FF" : color} strokeWidth="2" fill="none" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}
