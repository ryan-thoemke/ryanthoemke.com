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

// Visual representation of the workspace hierarchy
function HierarchyDiagram() {
  const levels = [
    {
      label: "Workspace",
      description: "The entire org. Enterprise plan. Admin rights.",
      width: "100%",
      color: "var(--green-deep)",
    },
    {
      label: "Teams",
      description: "Design system, product squads, brand.",
      width: "85%",
      color: "var(--green-mid)",
    },
    {
      label: "Projects",
      description: "Component library, foundations, templates, app shells.",
      width: "70%",
      color: "var(--green-light)",
    },
    {
      label: "Files",
      description: "Individual libraries, working files, handoff files.",
      width: "55%",
      color: "var(--tan)",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {levels.map((level, i) => (
        <motion.div
          key={level.label}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ width: level.width }}
        >
          <div
            className="flex items-center justify-between px-5 py-4 rounded-sm"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: level.color }} />
              <span className="font-display text-base" style={{ color: "var(--green-deep)" }}>
                {level.label}
              </span>
            </div>
            <span className="text-xs font-light hidden md:block" style={{ color: "var(--muted-foreground)" }}>
              {level.description}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Token pipeline visualization
function TokenPipeline() {
  const steps = [
    { label: "Styles", sub: "Color, text, effects", icon: "◆" },
    { label: "Variables", sub: "Converted and organized", icon: "◇" },
    { label: "Tokens", sub: "Published to code", icon: "○" },
    { label: "Code", sub: "Consumed by engineers", icon: "▸" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex-1 relative"
        >
          <div
            className="h-full p-6"
            style={{
              background: "var(--card)",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              borderLeft: "1px solid var(--border)",
              borderRight: i === steps.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <span className="text-lg mb-3 block" style={{ color: "var(--tan)" }}>
              {step.icon}
            </span>
            <p className="font-display text-lg mb-1" style={{ color: "var(--green-deep)" }}>
              {step.label}
            </p>
            <p className="text-xs font-light" style={{ color: "var(--muted-foreground)" }}>
              {step.sub}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 items-center justify-center z-10 text-xs"
              style={{ color: "var(--tan)", background: "var(--background)" }}
            >
              ›
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Scale systems grid
function ScaleSystems() {
  const scales = [
    { name: "Spacing", detail: "8pt grid. Every value a multiple of 8." },
    { name: "Padding", detail: "Inner spacing derived from the same base scale." },
    { name: "Radius", detail: "Corner radius steps from sharp to fully round." },
    { name: "Color", detail: "Full palette with light and dark mode variables." },
    { name: "Typography", detail: "Type scale covering display through label sizes." },
    { name: "Elevation", detail: "Shadow and depth values mapped as tokens." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ border: "1px solid var(--border)" }}>
      {scales.map((scale, i) => (
        <motion.div
          key={scale.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="p-6 group cursor-default transition-colors duration-300"
          style={{
            background: "var(--card)",
            borderRight: (i % 3 !== 2) ? "1px solid var(--border)" : "none",
            borderBottom: i < 3 ? "1px solid var(--border)" : "none",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--background)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
        >
          <p className="font-display text-lg mb-2" style={{ color: "var(--green-deep)" }}>
            {scale.name}
          </p>
          <p className="text-xs font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            {scale.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function FigmaPage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Hero */}
      <section className="px-8 pt-40 pb-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-8">
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
            Figma · Design Infrastructure · Governance · Scale
          </motion.p>

          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="font-display text-5xl md:text-7xl mb-8"
            style={{ color: "var(--green-deep)" }}
          >
            Figma
            <br />
            <span className="font-display" style={{ color: "var(--tan-deep)" }}>
              at Scale
            </span>
          </motion.h1>

          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="text-lg font-light leading-relaxed max-w-2xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            Running Figma as organizational infrastructure for over 1,100 people.
            Not just using the tool. Building the system that everyone else builds from.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50",    label: "Designers in workspace" },
            { value: "1,000+", label: "Engineers consuming" },
            { value: "50+",   label: "Product managers" },
            { value: "2",     label: "Library generations" },
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

      {/* Two generations */}
      <section className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium md:pt-2"
            style={{ color: "var(--tan)" }}
          >
            Two Libraries
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-2"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8" style={{ color: "var(--green-deep)" }}>
              The first one taught me what not to do. The second one I built right.
            </p>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--muted-foreground)" }}>
              The first library was inherited: a copy of an open source component library skinned to match a brand direction that was never officially approved. No governance, no component standards, no token structure. Designers worked around it more than they worked with it.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              The second library was built from the ground up alongside the enterprise design system. Every decision was made with two questions in mind: does this work in code, and will it still make sense when the next Figma update ships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workspace hierarchy */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--muted)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] font-medium mb-4" style={{ color: "var(--tan)" }}>
              How It Is Organized
            </p>
            <p className="font-display text-2xl max-w-xl" style={{ color: "var(--green-deep)" }}>
              Structure follows Figma's own model. No workarounds. No improvising.
            </p>
          </motion.div>
          <HierarchyDiagram />
          <p className="mt-8 text-sm font-light leading-relaxed max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
            Organizing this way means every person in the workspace knows where to look. Designers find libraries without asking. Engineers find the right file through Dev Mode. Product managers can observe without getting in the way.
          </p>
        </div>
      </section>

      {/* Component standards */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium md:pt-2"
            style={{ color: "var(--tan)" }}
          >
            Component Standards
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-2"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8" style={{ color: "var(--green-deep)" }}>
              Every component is built to work in code, not just in design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                { title: "Variants as Props", body: "Component variants map directly to the code props engineers use. Named in camelCase to match the codebase. When a designer hands off, nothing needs to be translated." },
                { title: "Auto Layout Throughout", body: "Every component uses auto layout, which maps to flexbox in code. No absolute positioning, no magic numbers. What the designer sees is what the engineer builds." },
                { title: "Accessibility Tested", body: "Color contrast, touch targets, focus states. Built into the component before it ships, not reviewed after. Designers inherit accessible components by default." },
                { title: "App Shells and Templates", body: "Beyond individual components, I built the full collection of app shells and page templates. The structural patterns that hold everything together." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <h3 className="font-display text-base mb-2" style={{ color: "var(--green-deep)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Token pipeline */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--muted)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] font-medium mb-4" style={{ color: "var(--tan)" }}>
              The Token Pipeline
            </p>
            <p className="font-display text-2xl max-w-xl mb-4" style={{ color: "var(--green-deep)" }}>
              Styles become variables. Variables become tokens. Tokens become code.
            </p>
            <p className="text-sm font-light leading-relaxed max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
              Every Figma release moves this pipeline forward. Converting styles to variables, attaching variables to components, publishing them so engineers can consume them directly. Keeping that chain intact as Figma evolves is an ongoing job.
            </p>
          </motion.div>
          <TokenPipeline />
        </div>
      </section>

      {/* Scale systems */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs uppercase tracking-[0.22em] font-medium mb-4" style={{ color: "var(--tan)" }}>
              Scale Systems
            </p>
            <p className="font-display text-2xl max-w-xl" style={{ color: "var(--green-deep)" }}>
              Everything on an 8-point grid. No arbitrary values.
            </p>
          </motion.div>
          <ScaleSystems />
        </div>
      </section>

      {/* Staying current */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--card)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium md:pt-2"
            style={{ color: "var(--tan)" }}
          >
            Staying Current
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:col-span-2"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8" style={{ color: "var(--green-deep)" }}>
              Figma ships fast. Keeping up is part of the job.
            </p>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--muted-foreground)" }}>
              Every major Figma release has the potential to change how the library works. Styles to variables, variables to tokens, new component properties, new dev mode capabilities. I track each release and assess what needs to be updated, migrated, or rebuilt to keep the system current.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              The most recent frontier is AI. Figma Make and the Make kits are changing what it means to go from design to code. I am actively exploring how to bring that into the system in a way that maintains the standards we have built, rather than bypassing them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-16 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/work" className="text-xs uppercase tracking-[0.18em] font-medium" style={{ color: "var(--tan)" }}>
            ← All Work
          </Link>
          <Link href="/work/design-system" className="group flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] font-medium" style={{ color: "var(--green-mid)" }}>
              Related: Enterprise Design System
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
