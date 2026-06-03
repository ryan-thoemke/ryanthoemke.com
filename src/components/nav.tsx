"use client";

import { motion } from "framer-motion";

const links = ["Work", "Music", "About"];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16"
      style={{
        background: "linear-gradient(to bottom, var(--background) 65%, transparent)",
      }}
    >
      <span
        className="font-display text-sm tracking-widest uppercase"
        style={{ color: "var(--green-deep)", letterSpacing: "0.18em" }}
      >
        Ryan Thoemke
      </span>
      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs uppercase font-medium transition-colors duration-200"
            style={{
              color: "var(--muted-foreground)",
              letterSpacing: "0.14em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--green-mid)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)";
            }}
          >
            {link}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
