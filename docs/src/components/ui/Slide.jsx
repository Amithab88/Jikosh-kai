import { useInView } from "../../hooks/useInView";

export function Slide({ children, dir = "up", delay = 0, className = "", style = {} }) {
  const [ref, vis] = useInView(0.08);
  const from =
    {
      up: "translateY(40px)",
      down: "translateY(-40px)",
      left: "translateX(-50px)",
      right: "translateX(50px)",
      scale: "scale(0.88)",
    }[dir] || "translateY(40px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : from,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
