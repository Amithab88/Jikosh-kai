import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";

export function CountUp({ to, suffix = "", delay = 0 }) {
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

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
