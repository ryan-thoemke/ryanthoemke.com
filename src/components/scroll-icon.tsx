"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Guitar pick — rotated ~30° so it's clearly a pick held in playing position, stroke only
function GuitarPick() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pick held at an angle, point toward lower-right — unmistakably a plectrum */}
      <path
        d="M8 8 C8 5 11 3 15 3 C27 3 41 12 41 22 C41 31 35 39 27 40 C22 41 18 39 16 36 C13 32 8 22 8 14 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Grip notch detail at the wide end */}
      <path
        d="M12 10 Q10 14 10 18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
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
  { id: "pick",   component: GuitarPick,     label: "Guitar pick"     },
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
