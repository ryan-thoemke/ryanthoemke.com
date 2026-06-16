"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

// Abstract component grid — represents a living design system without showing real IP
function SystemVisualization() {
  const blocks = [
    { w: "100%", h: 48, r: 4 },
    { w: "48%", h: 36, r: 4 },
    { w: "48%", h: 36, r: 4 },
    { w: "30%", h: 80, r: 8 },
    { w: "65%", h: 80, r: 8 },
    { w: "22%", h: 28, r: 24 },
    { w: "22%", h: 28, r: 24 },
    { w: "22%", h: 28, r: 24 },
    { w: "22%", h: 28, r: 24 },
    { w: "100%", h: 2,  r: 0 },
    { w: "40%", h: 44, r: 4 },
    { w: "55%", h: 44, r: 4 },
  ];

  return (
    <div className="flex flex-wrap gap-3 p-8 rounded-sm" style={{ background: "var(--muted)" }}>
      {blocks.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            width: b.w,
            height: b.h,
            borderRadius: b.r,
            background: i % 5 === 0
              ? "oklch(0.38 0.11 155 / 0.15)"
              : i % 3 === 0
              ? "oklch(0.46 0.09 55 / 0.12)"
              : "oklch(0.28 0.09 158 / 0.07)",
            border: "1px solid var(--border)",
          }}
        />
      ))}
    </div>
  );
}

// Token hierarchy diagram
function TokenDiagram() {
  const tiers = [
    { label: "Global Tokens", items: ["color.green.800", "spacing.4", "radius.md", "font.size.base"], color: "var(--green-deep)" },
    { label: "Semantic Tokens", items: ["color.background", "color.text.primary", "space.component.gap", "border.default"], color: "var(--green-mid)" },
    { label: "Component Tokens", items: ["button.bg", "card.padding", "input.border", "badge.radius"], color: "var(--tan)" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tiers.map((tier, ti) => (
        <motion.div
          key={tier.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ti * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="p-6 rounded-sm"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="w-2 h-2 rounded-full mb-4" style={{ background: tier.color }} />
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: tier.color, letterSpacing: "0.14em" }}>
            {tier.label}
          </p>
          <div className="flex flex-col gap-2">
            {tier.items.map((item) => (
              <code
                key={item}
                className="text-xs px-2 py-1 rounded"
                style={{
                  background: "var(--muted)",
                  color: "var(--muted-foreground)",
                  fontFamily: "monospace",
                }}
              >
                {item}
              </code>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const pillars = [
  {
    title: "Foundations",
    body: "Before a single component was built, we established the language. Color tokens, typography scales, spacing systems, motion principles. The stuff no one sees but everyone feels when it's missing.",
  },
  {
    title: "Components",
    body: "90+ production components, each built to be composable, accessible, and predictable. Not just visual pieces. Living documentation, coded behavior, and clear usage guidelines.",
  },
  {
    title: "Patterns",
    body: "30+ patterns that answer the harder question: not just what a button looks like, but how a whole form behaves. How a data table handles empty states. How an error communicates without alarming.",
  },
  {
    title: "Community",
    body: "The system didn't succeed because it was technically good. It succeeded because teams adopted it and contributed to it. We built channels, office hours, and rituals around it. That's the real work.",
  },
];

export default function DesignSystemPage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Hero */}
      <section className="px-8 pt-40 pb-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex items-center gap-4 mb-8">
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-200"
              style={{ color: "var(--tan)" }}
            >
              ← Work
            </Link>
          </motion.div>

          <motion.p custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="text-xs uppercase tracking-[0.22em] font-medium mb-6"
            style={{ color: "var(--tan)" }}
          >
            Systems Design · Accessibility · Scale · Rebrand
          </motion.p>

          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="font-display text-5xl md:text-7xl mb-8"
            style={{ color: "var(--green-deep)" }}
          >
            Sprout Design<br />System
          </motion.h1>

          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="text-lg font-light leading-relaxed max-w-2xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            Building an organization-wide design language from nothing, alongside
            a complete company rebrand, and creating a community that actually
            uses it.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "90+",    label: "Components published" },
            { value: "30+",    label: "Patterns documented" },
            { value: "14",     label: "Products consuming Sprout" },
            { value: "3 yrs",  label: "In active development" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="font-display text-4xl md:text-5xl mb-2" style={{ color: "var(--green-deep)" }}>
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--tan)", letterSpacing: "0.14em" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The challenge */}
      <section className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium md:pt-2"
            style={{ color: "var(--tan)" }}
          >
            The Challenge
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-2"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8" style={{ color: "var(--green-deep)" }}>
              Three years ago, there was no system. Just UI kits. Nothing hardcoded. No shared language across teams.
            </p>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--muted-foreground)" }}>
              At the same time, the company was going through a complete rebrand. That meant building the design system wasn't just a technical challenge. It was a brand definition exercise. Every decision about color, type, and spacing had to hold up across thousands of people and dozens of products simultaneously.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              The hardest part isn't the components. It's keeping the wires from getting tangled as the system grows. Scale changes everything. What works at 10 components breaks at 90.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Component visualization */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-12"
            style={{ color: "var(--tan)" }}
          >
            The System at a Glance
          </motion.p>
          <SystemVisualization />
          <p className="mt-6 text-xs font-light" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
            Abstract representation of component architecture. Actual designs are proprietary.
          </p>
        </div>
      </section>

      {/* Token diagram */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--muted)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium mb-4" style={{ color: "var(--tan)" }}>
              Token Architecture
            </p>
            <p className="font-display text-2xl max-w-xl" style={{ color: "var(--green-deep)" }}>
              Decisions live in the tokens. Everything else inherits.
            </p>
          </motion.div>
          <TokenDiagram />
        </div>
      </section>

      {/* Four pillars */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-16"
            style={{ color: "var(--tan)" }}
          >
            How It Was Built
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid var(--border)" }}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="p-10 group cursor-default transition-colors duration-300"
                style={{
                  background: "var(--card)",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--background)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
              >
                <h3 className="font-display text-xl mb-4" style={{ color: "var(--green-deep)" }}>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--card)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium md:pt-2"
            style={{ color: "var(--tan)" }}
          >
            Outcome
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-2"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8" style={{ color: "var(--green-deep)" }}>
              14 products. Thousands of contributors. One shared language.
            </p>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--muted-foreground)" }}>
              The measure of a design system isn't how many components it has. It's whether teams actually use it. Sprout succeeded because we built a community around it, not just a library. Office hours, contribution guidelines, Slack channels, and genuine investment in the people consuming it.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              The rebrand shipped consistently across every product because the system enforced it. That's what systems are for: making the right thing the easy thing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next project */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-16 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/work" className="text-xs uppercase tracking-[0.18em] font-medium" style={{ color: "var(--tan)" }}>
            ← All Work
          </Link>
          <Link href="/work/restaurant" className="group flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] font-medium" style={{ color: "var(--green-mid)" }}>
              Next: A Decade Behind the Bar
            </span>
            <div className="h-px w-6 group-hover:w-12 transition-all duration-300" style={{ background: "var(--green-mid)" }} />
          </Link>
        </div>
      </section>

      <footer className="px-8 py-10 md:px-16 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="font-display text-sm" style={{ color: "var(--green-deep)" }}>Ryan Thoemke</span>
        <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>ryanthoemke.com</span>
      </footer>
    </div>
  );
}
