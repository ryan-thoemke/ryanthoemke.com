"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import Link from "next/link";

const projects = [
  {
    slug: "design-system",
    index: "01",
    title: "Sprout Design System",
    category: "Systems Design · Accessibility · Scale",
    summary:
      "Built an organization-wide design system from nothing — 90+ components, 30+ patterns, adopted across 14 products and thousands of contributors. Delivered alongside a complete company rebrand.",
    stats: [
      { value: "90+", label: "Components" },
      { value: "30+", label: "Patterns" },
      { value: "14",  label: "Products" },
    ],
    tag: "Design Systems",
  },
  {
    slug: "restaurant",
    index: "02",
    title: "A Decade Behind the Bar",
    category: "Operations · Leadership · Brand · Hospitality",
    summary:
      "Ten years in the hospitality industry — from bartender to general manager. Rebuilt a restaurant's identity from the inside out: menu, space, team, and experience. Kept it alive through COVID.",
    stats: [
      { value: "$25K",  label: "Monthly ordering" },
      { value: "20",    label: "Employees managed" },
      { value: "3 yrs", label: "As general manager" },
    ],
    tag: "Operations",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Header */}
      <section className="px-8 pt-40 pb-16 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--tan)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-medium" style={{ color: "var(--tan)" }}>
              Selected Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl"
            style={{ color: "var(--green-deep)" }}
          >
            Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base font-light max-w-lg leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Two case studies that show how I think — one about building systems
            that scale, one about building something people actually feel.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Case studies */}
      <section className="px-8 py-0 md:px-16">
        <div className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/work/${project.slug}`} className="block group">
                <div
                  className="py-16 md:py-20 transition-colors duration-300"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">

                    {/* Left — index + tag */}
                    <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:pt-2">
                      <span className="font-display text-sm" style={{ color: "var(--tan)" }}>
                        {project.index}
                      </span>
                      <span
                        className="text-xs uppercase tracking-widest px-2 py-1 rounded-sm font-medium"
                        style={{
                          color: "var(--green-mid)",
                          background: "oklch(0.38 0.11 155 / 0.08)",
                          letterSpacing: "0.12em",
                        }}
                      >
                        {project.tag}
                      </span>
                    </div>

                    {/* Center — title + summary */}
                    <div className="md:col-span-7">
                      <p className="text-xs uppercase tracking-[0.18em] font-medium mb-4" style={{ color: "var(--tan)" }}>
                        {project.category}
                      </p>
                      <h2
                        className="font-display text-3xl md:text-4xl mb-6 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: "var(--green-deep)" }}
                      >
                        {project.title}
                      </h2>
                      <p className="text-sm leading-relaxed font-light max-w-lg" style={{ color: "var(--muted-foreground)" }}>
                        {project.summary}
                      </p>

                      {/* Read link */}
                      <div className="mt-8 flex items-center gap-3">
                        <span
                          className="text-xs uppercase tracking-[0.18em] font-medium"
                          style={{ color: "var(--green-mid)" }}
                        >
                          Read case study
                        </span>
                        <div
                          className="h-px w-6 group-hover:w-12 transition-all duration-400"
                          style={{ background: "var(--green-mid)" }}
                        />
                      </div>
                    </div>

                    {/* Right — stats */}
                    <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-6 md:gap-8">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-display text-3xl md:text-4xl" style={{ color: "var(--green-deep)" }}>
                            {stat.value}
                          </p>
                          <p className="text-xs uppercase tracking-widest mt-1 font-medium" style={{ color: "var(--tan)", letterSpacing: "0.14em" }}>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-8 py-10 md:px-16 flex items-center justify-between mt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <Link href="/" className="font-display text-sm transition-colors duration-200" style={{ color: "var(--green-deep)" }}>
          ← Ryan Thoemke
        </Link>
        <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
          ryanthoemke.com
        </span>
      </footer>
    </div>
  );
}
