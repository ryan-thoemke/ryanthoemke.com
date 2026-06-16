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
      delay: i * 0.08,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

type Story = {
  slug: string;
  category: "Fly Fishing" | "Golf";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    slug: "brule-river-april",
    category: "Fly Fishing",
    title: "The Brule in April. Still cold. Worth it.",
    excerpt:
      "There's a window on the Brule every April where the steelhead are moving and the crowds haven't arrived yet. You have to want it enough to stand in 38-degree water before the sun clears the pines. This year I did. This is what happened.",
    date: "Apr 14, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "reading-water",
    category: "Fly Fishing",
    title: "What reading water actually means",
    excerpt:
      "Everyone talks about reading water. Most of the time it just means learning to see the same river differently every time you show up. It took me three seasons on the Brule before I stopped guessing and started knowing.",
    date: "Mar 2, 2026",
    readTime: "5 min read",
  },
  {
    slug: "scoring-average",
    category: "Golf",
    title: "I've been tracking every round for two years. Here's what I learned.",
    excerpt:
      "I started keeping a spreadsheet after a round where I shot 84 and felt like I played well. Turns out I had 36 putts. The data doesn't lie, and it's made me a better golfer.",
    date: "Feb 18, 2026",
    readTime: "7 min read",
  },
  {
    slug: "hillcrest-mornings",
    category: "Golf",
    title: "Working the grounds at Hillcrest taught me more about golf than playing did",
    excerpt:
      "Two summers on the grounds crew at Hillcrest. Up before dawn, mowing greens, dragging fairways. You learn things about a golf course from inside it that you never would from a cart path.",
    date: "Jan 9, 2026",
    readTime: "8 min read",
  },
  {
    slug: "steelhead-patience",
    category: "Fly Fishing",
    title: "Steelhead fishing is mostly not catching fish",
    excerpt:
      "Six hours. Zero fish. One follow. That was last Saturday. And yet I'd be back next weekend if the CFS looked right. That's the thing about steelhead — the blank days are part of the deal.",
    date: "Dec 4, 2025",
    readTime: "4 min read",
  },
  {
    slug: "fitting-day",
    category: "Golf",
    title: "Getting fit for irons. What I wish I'd done sooner.",
    excerpt:
      "I played the wrong shaft flex for three years because I didn't want to spend money on a fitting. The fitter had me figured out in about four swings. The new set costs less than I expected. The difference is not subtle.",
    date: "Nov 21, 2025",
    readTime: "5 min read",
  },
];

const categoryColor: Record<Story["category"], string> = {
  "Fly Fishing": "var(--green-mid)",
  Golf: "var(--tan-deep)",
};

const featured = stories.find((s) => s.featured)!;
const rest = stories.filter((s) => !s.featured);

export default function OutdoorsPage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Hero */}
      <section className="px-8 pt-40 pb-16 md:px-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--tan)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-medium" style={{ color: "var(--tan)" }}>
              Field Notes
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
            Outside.
            <br />
            <em className="font-display" style={{ color: "var(--tan-deep)", fontStyle: "italic" }}>
              On the water.
            </em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-lg text-base leading-relaxed font-light"
            style={{ color: "var(--muted-foreground)" }}
          >
            Stories from the course and the river. Golf and fly fishing are both games of
            attention. You pay close or you pay later.
          </motion.p>
        </div>

        {/* Watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="pointer-events-none absolute bottom-0 right-8 md:right-16 hidden md:block select-none"
        >
          <p className="font-display text-[8rem] leading-none" style={{ color: "var(--green-deep)", opacity: 0.04 }}>
            Outdoors
          </p>
        </motion.div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Featured story */}
      <section className="px-8 py-16 md:px-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-xs uppercase tracking-[0.22em] font-medium" style={{ color: "var(--tan)" }}>
              Latest
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="group relative p-10 md:p-14 cursor-pointer overflow-hidden"
            style={{
              background: "var(--green-deep)",
              borderRadius: "1rem",
            }}
          >
            {/* Subtle radial wash */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 80% 20%, oklch(0.38 0.11 155 / 0.4), transparent 60%)",
              }}
            />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs uppercase tracking-[0.16em] font-medium px-2.5 py-1 rounded-sm"
                  style={{ background: "oklch(0.975 0.008 85 / 0.12)", color: "var(--tan-light)" }}
                >
                  {featured.category}
                </span>
                <span className="text-xs font-light" style={{ color: "var(--background)", opacity: 0.45 }}>
                  {featured.date} · {featured.readTime}
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6" style={{ color: "var(--background)" }}>
                {featured.title}
              </h2>

              <p className="text-base leading-relaxed font-light max-w-xl mb-10" style={{ color: "var(--background)", opacity: 0.7 }}>
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="h-px w-6 group-hover:w-10 transition-all duration-500"
                  style={{ background: "var(--tan-light)" }}
                />
                <span
                  className="text-xs uppercase tracking-[0.16em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--tan-light)" }}
                >
                  Read
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Story grid */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ background: "var(--muted)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-12"
            style={{ color: "var(--tan)" }}
          >
            All stories
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ border: "1px solid var(--border)" }}>
            {rest.map((story, i) => (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="group p-8 flex flex-col gap-4 cursor-pointer relative overflow-hidden"
                style={{
                  background: "var(--card)",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--background)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--card)";
                }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: categoryColor[story.category] }}
                />

                {/* Category + date */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs uppercase tracking-[0.14em] font-medium"
                    style={{ color: categoryColor[story.category] }}
                  >
                    {story.category}
                  </span>
                  <span className="text-xs font-light" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
                    {story.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-display text-xl leading-snug flex-1"
                  style={{ color: "var(--green-deep)" }}
                >
                  {story.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-sm leading-relaxed font-light line-clamp-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {story.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="text-xs font-light" style={{ color: "var(--muted-foreground)", opacity: 0.55 }}>
                    {story.date}
                  </span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-px w-4" style={{ background: "var(--green-mid)" }} />
                    <span className="text-xs uppercase tracking-[0.14em] font-medium" style={{ color: "var(--green-mid)" }}>
                      Read
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-8 py-10 md:px-16 flex items-center justify-between"
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
