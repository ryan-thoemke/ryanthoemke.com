"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import Link from "next/link";

const experience = [
  {
    title: "UX Designer, Design Systems",
    company: "Cargill",
    location: "Minneapolis, MN",
    years: "2021 – Present",
    bullets: [
      "Co-created and own the enterprise design system, now adopted by 13 product teams across the organization.",
      "Direct point of contact for external brand partners including Sysco and Cargill Beef: coordinating on requirements, presenting recommendations, and keeping relationships strong.",
      "Internal champion for brand standards, building trust and buy-in across teams through consistent communication and follow-through.",
      "Turn complex brand requirements into clear guidelines and bring them directly to leadership.",
    ],
  },
  {
    title: "General Manager",
    company: "Quinny's",
    location: "Mahtomedi, MN",
    years: "2018 – 2020",
    bullets: [
      "Led a full restaurant turnaround: owned the P&L, rebuilt the menu, launched an online presence, curated a branded apparel line, and implemented a new POS system.",
      "Booked and ran ongoing brand partnership events: live music nights, craft brewery partnerships, and liquor brand activations.",
      "Managed every vendor relationship and supply order in the building, keeping accounts tight and spend on budget.",
    ],
  },
  {
    title: "General Manager",
    company: "Brewhouse South",
    location: "Cool Springs, TN",
    years: "2016 – 2018",
    bullets: [
      "Ran full daily operations of a high-volume Nashville-area restaurant: staff, vendors, inventory, and guest relationships in a fast-paced market.",
    ],
  },
  {
    title: "Sales Associate, Computers & Technology",
    company: "Best Buy",
    location: "White Bear Lake, MN",
    years: "2010 – 2014",
    bullets: [
      "Promoted from cashier to computer sales after one year. Built real rapport with customers and matched them with the right products every time.",
      "Built a consultative approach from the sales floor up: listening first, then finding the right fit.",
    ],
  },
];

const competencies = [
  "Partnership & Relationship Management",
  "Brand Activations & Events",
  "Merchandise Curation & Ordering",
  "Brand Standards & Identity",
  "Cross-Functional Collaboration",
  "Budget & P&L Ownership",
  "Vendor & Supplier Management",
  "Process Building from Scratch",
  "Stakeholder Communication",
];

const education = [
  {
    degree: "UX Design Certificate",
    school: "Prime Digital Academy",
    years: "2020 – 2021",
  },
  {
    degree: "A.A.S., Audio Engineering & Production",
    school: "Institute of Production and Recording",
    years: "",
  },
];

const community = [
  {
    role: "Grounds Crew Member",
    org: "Hillcrest Country Club",
    detail: "St. Paul, MN · 2 Seasons",
    note: "Ground-level knowledge of private club operations, member culture, and course standards.",
  },
  {
    role: "Volunteer Coach",
    org: "Special Olympics Minnesota",
    detail: "Adapted Softball & Floor Hockey",
    note: "Multi-season volunteer coach coordinating with community organizations and supporting participants across events.",
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-dvh" style={{ background: "var(--background)" }}>
      <Nav />

      {/* Hero */}
      <section
        className="relative px-8 pt-40 pb-20 md:px-16 md:pb-24 overflow-hidden"
        style={{ background: "var(--green-deep)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, oklch(0.38 0.11 155 / 0.3), transparent 65%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-8" style={{ background: "var(--tan-light)" }} />
                <span className="text-xs uppercase tracking-[0.22em] font-medium" style={{ color: "var(--tan-light)" }}>
                  Minneapolis, MN
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="font-display text-5xl md:text-7xl leading-[0.95] mb-4"
                style={{ color: "var(--background)" }}
              >
                Ryan Thoemke
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm font-light"
                style={{ color: "var(--background)", opacity: 0.65 }}
              >
                651.270.8590 &nbsp;·&nbsp; rthoemke@icloud.com &nbsp;·&nbsp; linkedin.com/in/ryanthoemke
              </motion.p>
            </div>

            {/* Download button */}
            <motion.a
              href="/Ryan_Thoemke_Resume.pdf"
              download
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 self-start md:self-auto"
              style={{
                background: "oklch(0.975 0.008 85 / 0.12)",
                border: "1px solid oklch(0.975 0.008 85 / 0.25)",
                color: "var(--background)",
                borderRadius: "0.25rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "oklch(0.975 0.008 85 / 0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "oklch(0.975 0.008 85 / 0.12)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download PDF
            </motion.a>
          </div>
        </div>
      </section>

      {/* Cover letter / intro */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32" style={{ color: "var(--tan)" }}>
              In my own words
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="md:col-span-9 flex flex-col gap-5 max-w-2xl"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug" style={{ color: "var(--green-deep)" }}>
              One of the things I&apos;m most proud of is my ability to make and keep relationships. Not just the easy ones.
            </p>
            <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              Vendors who needed a hard conversation. A customer who got a bad meal and left angry. Stakeholders who didn&apos;t agree. I&apos;ve been in those moments more times than I can count, and I&apos;ve come out the other side with relationships that lasted.
            </p>
            <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              That&apos;s been true everywhere I&apos;ve been. Running restaurants, booking brewery nights and live music, working with brand reps to put together something worth showing up for. Even as a musician: nobody builds your following for you. That&apos;s on you, and you figure it out.
            </p>
            <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              Golf has been with me since the beginning. My grandfather picking me up at 6am for a tee time at Como Park. Watching Tiger on Sundays because you just knew. I&apos;ve worked the grounds at Hillcrest, played in leagues, and spent a lot of time around people who love this game. I bring that same genuine connection to everything I work on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32" style={{ color: "var(--tan)" }}>
              Summary
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            className="md:col-span-9 max-w-2xl"
          >
            <p className="text-base leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              Relationship-driven professional with a decade of experience building trust across customers, brand partners, and cross-functional teams. Lifelong golfer with firsthand experience in golf operations and a genuine connection to the culture and community the game creates. Proven track record of owning budgets, curating branded merchandise, producing brand activations, and launching initiatives from the ground up. Brings a service-first mindset and authentic enthusiasm for connecting people to brands they love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32" style={{ color: "var(--tan)" }}>
              Experience
            </p>
          </motion.div>
          <div className="md:col-span-9 flex flex-col gap-12">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
                className="pb-12"
                style={{ borderBottom: i < experience.length - 1 ? "1px solid var(--border)" : "none" }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="font-display text-xl" style={{ color: "var(--green-deep)" }}>
                      {job.title}
                    </h3>
                    <p className="text-sm font-light mt-0.5" style={{ color: "var(--tan)" }}>
                      {job.company} &nbsp;·&nbsp; {job.location}
                    </p>
                  </div>
                  <span
                    className="text-xs uppercase tracking-widest font-medium shrink-0"
                    style={{ color: "var(--muted-foreground)", letterSpacing: "0.14em" }}
                  >
                    {job.years}
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5 mt-4">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "var(--tan-light)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32" style={{ color: "var(--tan)" }}>
              Core Competencies
            </p>
          </motion.div>
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-3">
            {competencies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="px-4 py-3 text-sm font-light"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.25rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Golf & Community */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32" style={{ color: "var(--tan)" }}>
              Golf & Community
            </p>
          </motion.div>
          <div className="md:col-span-9 flex flex-col gap-8">
            {community.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <h3 className="font-display text-lg mb-0.5" style={{ color: "var(--green-deep)" }}>{item.role}</h3>
                <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: "var(--tan)", letterSpacing: "0.13em" }}>
                  {item.org} &nbsp;·&nbsp; {item.detail}
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-16 md:px-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <p className="text-xs uppercase tracking-[0.22em] font-medium sticky top-32" style={{ color: "var(--tan)" }}>
              Education
            </p>
          </motion.div>
          <div className="md:col-span-9 flex flex-col gap-6">
            {education.map((ed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg" style={{ color: "var(--green-deep)" }}>{ed.degree}</h3>
                  {ed.years && <span className="text-xs uppercase tracking-widest font-medium shrink-0" style={{ color: "var(--muted-foreground)", letterSpacing: "0.14em" }}>{ed.years}</span>}
                </div>
                <p className="text-sm font-light mt-0.5" style={{ color: "var(--tan)" }}>{ed.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 md:px-16 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
        <Link href="/" className="font-display text-sm" style={{ color: "var(--green-deep)" }}>
          ← Ryan Thoemke
        </Link>
        <a
          href="/Ryan_Thoemke_Resume.pdf"
          download
          className="text-xs uppercase tracking-[0.18em] font-medium transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--tan)" }}
        >
          Download PDF
        </a>
      </footer>
    </div>
  );
}
