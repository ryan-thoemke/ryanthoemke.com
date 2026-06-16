"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const gigs = [
  { date: "June 27", year: "2026", detail: "Upcoming show" },
  { date: "Aug 12",  year: "2026", detail: "Upcoming show" },
];

const influences = [
  { name: "Aerosmith",    note: "The first rock that hit different" },
  { name: "Bob Seger",    note: "Honest, working-class, real" },
  { name: "Jackson 5",    note: "Earliest memories, backseat of the car" },
  { name: "Motown",       note: "Where the feeling comes from" },
  { name: "John Mayer",   note: "Guitar as a second voice" },
  { name: "Tyler Childers", note: "Storytelling done right" },
];

export default function MusicPage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Hero — dark, atmospheric */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end px-8 pb-20 pt-40 md:px-16 md:pb-28 overflow-hidden"
        style={{ background: "var(--green-deep)" }}
      >
        {/* Subtle texture wash */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 60% 40%, oklch(0.38 0.11 155 / 0.35), transparent 70%)",
          }}
        />

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.4 }}
          className="pointer-events-none absolute bottom-0 right-8 md:right-16 select-none hidden md:block"
        >
          <p
            className="font-display text-[10rem] leading-none"
            style={{ color: "var(--background)", opacity: 0.04 }}
          >
            Music
          </p>
        </motion.div>

        <div className="relative z-10 max-w-6xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--tan-light)" }} />
            <span
              className="text-xs uppercase tracking-[0.22em] font-medium"
              style={{ color: "var(--tan-light)" }}
            >
              Songwriter · Performer
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-10"
            style={{ color: "var(--background)" }}
          >
            Always knew.
            <br />
            <em className="font-display" style={{ color: "var(--tan-light)", fontStyle: "italic" }}>
              Took a while.
            </em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md text-base leading-relaxed font-light"
            style={{ color: "var(--background)", opacity: 0.7 }}
          >
            The passion was always there. The guitar came later. A dorm room,
            a cheap acoustic, and YouTube did the rest.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="px-8 py-20 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p
              className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32"
              style={{ color: "var(--tan)" }}
            >
              The story
            </p>
          </motion.div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="md:col-span-9 flex flex-col gap-8"
          >
            <p
              className="font-display text-2xl md:text-3xl leading-snug"
              style={{ color: "var(--green-deep)" }}
            >
              I knew I wanted to play music long before I actually played music.
            </p>

            <div className="flex flex-col gap-6 max-w-2xl">
              <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                Growing up, I was a sports kid through and through: hockey, baseball, golf. Those took
                up most of my time and most of my identity. But music was always running underneath it.
                I took guitar lessons early on and didn&apos;t stick with it. I knew the passion was there.
                I just wasn&apos;t ready to do the work yet.
              </p>
              <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                That changed at 18. My first guitar was a cheap acoustic from Target, a Christmas gift.
                I brought it to my dorm room, pulled up YouTube, and just started. No teacher, no structure.
                Just the willingness to sit with something hard until it started feeling natural. I taught
                myself to play and to sing at the same time, in that room, mostly alone.
              </p>
              <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                The music I grew up on lives in everything I write. My mom and dad had good taste. Road
                trips with Bob Seger, Aerosmith coming through the speakers, the Jackson 5 and Motown from
                as far back as I can remember. That&apos;s where the feeling comes from. The desire to write
                something emotionally honest that sounds like it was always true.
              </p>
              <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                Today I play out about once or twice a month. Just me, a guitar, a microphone, and a PA.
                No band, no backing tracks. Simple and direct. I&apos;ve always believed the song is enough
                if the song is good. I&apos;m still working on making better songs.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Influences */}
      <section
        className="px-8 py-20 md:px-16 md:py-24"
        style={{ background: "var(--muted)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-14"
            style={{ color: "var(--tan)" }}
          >
            Influences
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {influences.map((inf, i) => (
              <motion.div
                key={inf.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="flex items-baseline justify-between py-5 group"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="font-display text-xl group-hover:translate-x-1 transition-transform duration-300"
                  style={{ color: "var(--green-deep)" }}
                >
                  {inf.name}
                </span>
                <span
                  className="text-xs font-light ml-4 text-right"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {inf.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Upcoming shows */}
      <section className="px-8 py-20 md:px-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-14"
            style={{ color: "var(--tan)" }}
          >
            Upcoming shows
          </motion.p>

          <div className="flex flex-col">
            {gigs.map((gig, i) => (
              <motion.div
                key={gig.date}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="group flex items-center justify-between py-8"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-display text-4xl md:text-5xl"
                    style={{ color: "var(--green-deep)" }}
                  >
                    {gig.date}
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {gig.year}
                  </span>
                </div>
                <span
                  className="text-xs uppercase tracking-[0.18em] font-medium px-3 py-1.5 rounded-sm"
                  style={{
                    color: "var(--green-mid)",
                    background: "oklch(0.38 0.11 155 / 0.08)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {gig.detail}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-10 text-sm font-light"
            style={{ color: "var(--muted-foreground)" }}
          >
            Performing solo acoustic: guitar, mic, PA. About once or twice a month.
          </motion.p>
        </div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Closing quote */}
      <section
        className="px-8 py-20 md:px-16 md:py-28 relative overflow-hidden"
        style={{ background: "var(--green-deep)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 60%, oklch(0.38 0.11 155 / 0.4), transparent 65%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 flex gap-8">
          <div
            className="w-px flex-shrink-0 mt-1 hidden md:block"
            style={{ background: "var(--tan-light)", opacity: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <blockquote
              className="font-display text-2xl md:text-4xl leading-snug italic max-w-3xl"
              style={{ color: "var(--background)" }}
            >
              &ldquo;I&apos;ve always believed the song is enough if the song is good.
              I&apos;m still working on making better songs.&rdquo;
            </blockquote>
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
          className="font-display text-sm"
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
