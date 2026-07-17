"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? scrollTop / height : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${pct})`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] h-[3px] w-full bg-white/5">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-primary-dark via-primary to-primary-light"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
