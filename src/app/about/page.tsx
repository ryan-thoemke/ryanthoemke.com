"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const facets = [
  {
    label: "Design",
    tag: "Day job",
    body: "UX designer at Cargill, building the Sprout design system: 90+ components, adopted across 14 products. I care about systems that serve real people, not just look good in a spec sheet. Tables, data density, accessibility, documentation. The unglamorous work that makes everything else legible.",
  },
  {
    label: "Music",
    tag: "Songwriter / Performer",
    body: "10+ years on guitar. I write autobiographical songs, emotionally direct, built around concrete images. The kind of lines that sound like they were always true. My song \"Getting There\" is about grief and healing and my grandfather's Jeep at 3am in Franklin, TN. I perform acoustic sets and run my own live sound.",
  },
  {
    label: "Golf",
    tag: "Serious about it",
    body: "Strong distances, working on consistency. I care about fit, feel, and not blaming the club. Golf is one of the few places where you can't fake it. The score is honest. That appeals to me.",
  },
  {
    label: "Fly Fishing",
    tag: "The Brule River",
    body: "Steelhead on the Brule. I think in CFS and feeding windows. Early mornings, cold water, the particular kind of patience that doesn't feel like waiting. It feels like focus. I've fished the same water enough times to know how it changes.",
  },
  {
    label: "Building",
    tag: "Whatever needs making",
    body: "Officiating weddings. Cooking for people. Learning to code. Making things feel intentional, whatever the thing is. I work best when craft, usefulness, and identity are all in the same room.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Header */}
      <section className="px-8 pt-40 pb-20 md:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--tan)" }} />
            <span
              className="text-xs uppercase tracking-[0.22em] font-medium"
              style={{ color: "var(--tan)" }}
            >
              Minneapolis, MN
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl md:text-7xl leading-[0.95] mb-10"
            style={{ color: "var(--green-deep)" }}
          >
            Not easily<br />
            <em className="font-display" style={{ color: "var(--tan-deep)", fontStyle: "italic" }}>
              reduced.
            </em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl text-base leading-relaxed font-light"
            style={{ color: "var(--muted-foreground)" }}
          >
            I&apos;m a designer with a songwriter&apos;s brain. I want to understand how
            things work, why they matter, and how to make them feel better.
            whether that&apos;s a design system, a song, a meal, or a river seam at
            first light.
          </motion.p>
        </div>

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="pointer-events-none absolute bottom-8 right-8 md:right-16 hidden md:block select-none"
        >
          <p
            className="font-display text-[9rem] leading-none"
            style={{ color: "var(--green-deep)", opacity: 0.04 }}
          >
            About
          </p>
        </motion.div>
      </section>

      {/* Photo + intro — image with gradient mask, text overlaid at bottom */}
      <section className="px-8 py-16 md:px-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative w-full overflow-hidden"
            style={{ borderRadius: "1.25rem", border: "1px solid var(--border)" }}
          >
            {/* Photo */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/IMG_0228.png"
                alt="Ryan Thoemke playing guitar"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 54%" }}
                sizes="(max-width: 768px) 100vw, 1152px"
                priority
              />
            </div>

            {/* Spacer so text overlay has room below the image */}
            <div style={{ height: "195px", background: "var(--background)" }} />

            {/* Gradient — starts around knee level (~52% down), bleeds to full linen */}
            <div
              className="absolute inset-x-0"
              style={{
                top: "32%",
                bottom: 0,
                background: "linear-gradient(to bottom, transparent 0%, oklch(0.975 0.008 85 / 0.82) 14%, oklch(0.975 0.008 85 / 0.96) 26%, oklch(0.975 0.008 85) 40%)",
                pointerEvents: "none",
              }}
            />

            {/* Text overlaid — starts in the gradient zone around knee level */}
            <div className="absolute inset-x-0 bottom-0 px-8 pb-10 md:px-12 md:pb-12">
              <p
                className="font-display text-2xl md:text-4xl leading-snug mb-5 max-w-2xl"
                style={{ color: "var(--green-deep)" }}
              >
                I grew up making things and never stopped. The medium keeps changing, but the instinct is the same.
              </p>
              <div className="flex flex-col gap-4 max-w-xl">
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                  By day I&apos;m a UX designer at Cargill, building the Sprout design system, the invisible infrastructure that makes software feel coherent across an entire organization. Detail work. Systems thinking. The kind of craft that pays off slowly.
                </p>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                  Outside of that I&apos;m a songwriter, a guitarist, a fly fisherman, and someone who takes golf more seriously than he probably should. I cook for people I care about. I officiated a wedding once and cried a little. I live in Minneapolis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Facets */}
      <section
        className="px-8 py-20 md:px-16 md:py-28"
        style={{ background: "var(--muted)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-16"
            style={{ color: "var(--tan)" }}
          >
            What I do
          </motion.p>

          <div className="flex flex-col">
            {facets.map((facet, i) => (
              <motion.div
                key={facet.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="group py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 items-start"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Label + tag */}
                <div className="md:col-span-3">
                  <h3
                    className="font-display text-2xl mb-2 group-hover:translate-x-0.5 transition-transform duration-300"
                    style={{ color: "var(--green-deep)" }}
                  >
                    {facet.label}
                  </h3>
                  <span
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ color: "var(--tan)", letterSpacing: "0.14em" }}
                  >
                    {facet.tag}
                  </span>
                </div>

                {/* Body */}
                <p
                  className="md:col-span-9 text-sm leading-relaxed font-light"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {facet.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Ethos / closing */}
      <section className="px-8 py-20 md:px-16 md:py-28 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 hidden md:block"
          style={{
            background: "linear-gradient(to right, oklch(0.38 0.11 155 / 0.04), transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 flex gap-8">
          <div
            className="w-px flex-shrink-0 mt-1 hidden md:block"
            style={{ background: "var(--green-mid)", opacity: 0.35 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <blockquote
              className="font-display text-2xl md:text-4xl leading-snug italic max-w-3xl"
              style={{ color: "var(--green-deep)" }}
            >
              &ldquo;Beautiful but usable over perfect but lifeless.&rdquo;
            </blockquote>
            <p
              className="mt-5 text-xs uppercase tracking-[0.18em] font-medium"
              style={{ color: "var(--tan)" }}
            >
              How I try to make things
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-8 py-10 md:px-16 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <Link
          href="/"
          className="font-display text-sm transition-colors duration-200"
          style={{ color: "var(--green-deep)" }}
        >
          ← Ryan Thoemke
        </Link>
        <span
          className="text-xs uppercase tracking-[0.18em]"
          style={{ color: "var(--muted-foreground)", opacity: 0.6 }}
        >
          ryanthoemke.com
        </span>
      </footer>
    </div>
  );
}
