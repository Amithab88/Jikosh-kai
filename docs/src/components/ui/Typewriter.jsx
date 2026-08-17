import { useState, useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

export function Typewriter({ text, speed = 55, delay = 0 }) {
  const [shown, setShown] = useState("");
  const startedRef = useRef(false);
  const [ref, vis] = useInView(0.2);

  useEffect(() => {
    if (!vis || startedRef.current) return;
    startedRef.current = true;

    const t = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        setShown(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, delay * 1000);

    return () => clearTimeout(t);
  }, [vis, text, speed, delay]);

  return (
    <span ref={ref}>
      {shown}
      <span className="tw-cursor">|</span>
    </span>
  );
}
