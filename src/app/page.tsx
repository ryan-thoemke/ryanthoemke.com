"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { ScrollIcon } from "@/components/scroll-icon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const domains = [
  {
    label: "Design",
    sub: "UX / Systems",
    description:
      "Building design systems and digital products that serve real people — not just look good in Figma. Currently at Cargill, shaping the Sprout design system.",
    tag: "01",
  },
  {
    label: "Music",
    sub: "Songwriter / Performer",
    description:
      "Writing songs that are autobiographical and emotionally direct. Performing acoustic sets. Chasing the line that sounds like it was always true.",
    tag: "02",
  },
  {
    label: "Outdoors",
    sub: "Golf / Fly Fishing",
    description:
      "On the course or in a river, reading conditions, adjusting. The Brule River. Early mornings. The kind of patience that feels like focus.",
    tag: "03",
  },
  {
    label: "Building",
    sub: "Ideas / Projects",
    description:
      "Cooking for people. Officiating weddings. Learning to code. Making things feel intentional — whatever the thing is.",
    tag: "04",
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />
      <ScrollIcon />

      {/* Hero */}
      <section
        className="relative flex flex-col justify-end min-h-dvh px-8 pb-20 pt-32 md:px-16 md:pb-28"
        id="home"
      >
        <div className="relative z-10 max-w-6xl">
          {/* Eyebrow — rule + location */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-px w-8" style={{ background: "var(--tan)" }} />
            <span
              className="text-xs uppercase tracking-[0.22em] font-medium"
              style={{ color: "var(--tan)" }}
            >
              Minneapolis, MN
            </span>
          </motion.div>

          {/* Headline — deep forest green */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(3.2rem,9vw,8rem)] leading-[0.95] mb-10"
            style={{ color: "var(--green-deep)" }}
          >
            Designer.
            <br />
            <em
              className="font-display"
              style={{ color: "var(--tan-deep)", fontStyle: "italic" }}
            >
              Songwriter.
            </em>
            <br />
            Maker of things.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md text-base leading-relaxed font-light"
            style={{ color: "var(--muted-foreground)" }}
          >
            I build things that feel intentional — design systems, songs,
            meals, speeches, and whatever else needs making. I work best when
            craft, usefulness, and identity are all in the same room.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-16 flex items-center gap-4"
          >
            <div className="h-px w-10" style={{ background: "var(--tan)" }} />
            <span
              className="text-xs uppercase tracking-[0.18em] font-medium"
              style={{ color: "var(--tan)" }}
            >
              Scroll
            </span>
          </motion.div>
        </div>

        {/* Decorative watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="pointer-events-none absolute bottom-16 right-8 md:right-16 hidden md:block select-none"
        >
          <p
            className="font-display text-[11rem] leading-none"
            style={{ color: "var(--green-deep)", opacity: 0.05 }}
          >
            RT
          </p>
        </motion.div>
      </section>

      {/* Divider line */}
      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* What I Do */}
      <section id="work" className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-16"
          >
            <p
              className="text-xs uppercase tracking-[0.22em] font-medium"
              style={{ color: "var(--tan)" }}
            >
              What I do
            </p>
            <div className="h-px flex-1 mx-8" style={{ background: "var(--border)" }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-10 cursor-default relative overflow-hidden"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  marginTop: i >= 2 ? "-1px" : "0",
                  marginLeft: i % 2 !== 0 ? "-1px" : "0",
                  transition: "background 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--background)";
                  el.style.boxShadow = "0 4px 24px oklch(0.28 0.09 158 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--card)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top accent bar — slides in on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "var(--green-mid)" }}
                />

                {/* Number tag */}
                <span
                  className="absolute top-8 right-8 text-xs font-medium tracking-widest"
                  style={{ color: "var(--tan)", opacity: 0.9 }}
                >
                  {domain.tag}
                </span>

                <h3
                  className="font-display text-2xl mb-2"
                  style={{ color: "var(--green-deep)" }}
                >
                  {domain.label}
                </h3>
                <p
                  className="text-xs uppercase tracking-widest mb-5 font-medium"
                  style={{ color: "var(--tan)", letterSpacing: "0.14em" }}
                >
                  {domain.sub}
                </p>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {domain.description}
                </p>
                <div
                  className="mt-6 h-px w-0 group-hover:w-8 transition-all duration-500"
                  style={{ background: "var(--green-mid)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-24 md:px-16 md:py-28"
        style={{ background: "var(--muted)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-xs uppercase tracking-[0.22em] font-medium"
              style={{ color: "var(--tan)" }}
            >
              About
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <p
              className="font-display text-2xl md:text-3xl leading-snug mb-8"
              style={{ color: "var(--green-deep)" }}
            >
              I&apos;m not easily reduced to a single lane. I want to
              understand how things work, why they matter, and how to make
              them feel better.
            </p>
            <p
              className="text-sm leading-relaxed font-light max-w-lg"
              style={{ color: "var(--muted-foreground)" }}
            >
              Whether that thing is a design system, a wedding speech, a live
              acoustic mix, a song lyric, a golf swing, or a dinner for
              someone I care about — I try to bring the same level of
              attention to all of it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Music */}
      <section
        id="music"
        className="px-8 py-24 md:px-16 md:py-28 relative overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Subtle green wash behind the quote */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden md:block"
          style={{
            background: "linear-gradient(to left, oklch(0.38 0.11 155 / 0.04), transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-12"
            style={{ color: "var(--tan)" }}
          >
            Music
          </motion.p>

          {/* Decorative left bar */}
          <div className="flex gap-8">
            <div className="w-px flex-shrink-0 mt-1" style={{ background: "var(--green-mid)", opacity: 0.4 }} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote
                className="font-display text-xl md:text-2xl leading-relaxed italic max-w-2xl"
                style={{ color: "var(--green-deep)" }}
              >
                &ldquo;It&apos;s 3 am in Franklin, as the lights buzz overhead —
                the sounds of clamoring still singing in my head.&rdquo;
              </blockquote>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-5 text-xs uppercase tracking-[0.18em] font-medium"
                style={{ color: "var(--tan)" }}
              >
                — Getting There
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-8 py-10 md:px-16 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          className="font-display text-sm"
          style={{ color: "var(--green-deep)" }}
        >
          Ryan Thoemke
        </span>
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
