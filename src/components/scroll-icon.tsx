"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function GolfClub() {
  // Iron side profile matching reference image:
  // Grip top-right → steep diagonal shaft → hosel bends more vertical → large head bottom-left.
  // Head: crown top, face on left (lofted), flat sole at bottom, back on right.
  return (
    <svg width="68" height="72" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grip — thick, top-right */}
      <line x1="58" y1="3" x2="50" y2="16" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      {/* Shaft — steep diagonal toward bottom-left, runs all the way to head */}
      <line x1="50" y1="16" x2="29" y2="53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Iron head — rounded corners, r=1.5 on 3 corners, r=3 on bottom-right heel */}
      <path
        d="M29 55.5 Q29 54 27.5 53.9 L15.5 53.1 Q14 53 13.6 54.5 L12.4 59.5 Q12 61 13.5 61 L26 61 Q29 61 29 58 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Score lines */}
      <line x1="13.5" y1="55.5" x2="28" y2="55.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
      <line x1="13"   y1="58"   x2="28" y2="58"   stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function FlyRod() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rod — thick handle tapering to fine tip */}
      <line x1="6" y1="46" x2="44" y2="10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="20" y1="36" x2="44" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Reel seat */}
      <circle cx="8" cy="44" r="5.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="8" cy="44" r="2" fill="currentColor" />
      {/* Line guides */}
      <circle cx="25" cy="31" r="2.4" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="36" cy="20" r="1.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
      {/* Fly line looping off tip */}
      <path d="M44 10 C48 5 50 16 44 12" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function AcousticGuitar() {
  return (
    <svg width="30" height="62" viewBox="0 0 30 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Headstock */}
      <rect x="11" y="1" width="8" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
      {/* Tuning pegs */}
      <line x1="8" y1="3.5" x2="11" y2="3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8" y1="6.5" x2="11" y2="6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="3.5" x2="22" y2="3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="6.5" x2="22" y2="6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Nut */}
      <rect x="12" y="7.5" width="6" height="1.5" rx="0.75" fill="currentColor" />
      {/* Neck */}
      <rect x="13" y="8.5" width="4" height="21" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Frets */}
      <line x1="13" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="0.9" />
      <line x1="13" y1="19" x2="17" y2="19" stroke="currentColor" strokeWidth="0.9" />
      <line x1="13" y1="24" x2="17" y2="24" stroke="currentColor" strokeWidth="0.9" />
      {/* Upper bout */}
      <path d="M 6 40 C 6 31 10 29 15 29 C 20 29 24 31 24 40" stroke="currentColor" strokeWidth="1.8" fill="none" />
      {/* Waist */}
      <line x1="6" y1="40" x2="6" y2="45" stroke="currentColor" strokeWidth="1.8" />
      <line x1="24" y1="40" x2="24" y2="45" stroke="currentColor" strokeWidth="1.8" />
      {/* Lower bout */}
      <path d="M 6 45 C 6 58 24 58 24 45" stroke="currentColor" strokeWidth="1.8" fill="none" />
      {/* Sound hole */}
      <circle cx="15" cy="37" r="3.8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Bridge */}
      <rect x="11" y="51" width="8" height="2" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" />
      {/* Strings — very subtle */}
      <line x1="13.5" y1="9" x2="13.5" y2="51" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      <line x1="15" y1="9" x2="15" y2="51" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      <line x1="16.5" y1="9" x2="16.5" y2="51" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
    </svg>
  );
}

const icons = [
  { id: "club",   component: GolfClub,       label: "Golf club"       },
  { id: "rod",    component: FlyRod,         label: "Fly rod"         },
  { id: "guitar", component: AcousticGuitar, label: "Acoustic guitar" },
];

const GHOST_OPACITY = 0.14;

export function ScrollIcon() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = scrollTop / docHeight;
      if (pct < 0.33) setActiveIndex(0);
      else if (pct < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Icon = icons[activeIndex].component;

  return (
    <div
      className="fixed right-10 top-1/3 z-40 pointer-events-none select-none"
      style={{ color: "var(--green-deep)" }}
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: GHOST_OPACITY, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: -8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Icon />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
