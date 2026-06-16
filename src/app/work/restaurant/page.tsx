"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }),
};

const timeline = [
  {
    year: "21",
    location: "Minnesota",
    role: "Bartender",
    description: "Started behind the bar at a dive. Learned the rhythm of a room: when to move fast, when to slow down, how people actually behave when they're having a good time.",
  },
  {
    year: "+1",
    location: "Franklin, Tennessee",
    role: "Server → Bartender → Manager",
    description: "Moved to Tennessee and moved fast. Within a year: on the floor, behind the bar, then running the place. Events, ordering, relationships. The full picture in one year.",
  },
  {
    year: "+2",
    location: "Minneapolis, Minnesota",
    role: "General Manager",
    description: "Came back and took over an Irish pub. Ran it for three years. Learned what it means to own a place without owning it: P&L, staff culture, vendor relationships, the whole operation.",
  },
  {
    year: "+4",
    location: "Minneapolis, Minnesota",
    role: "GM & Creative Lead",
    description: "The final chapter. The one where everything clicked. Took what was there and made it something. This is where the real impact happened.",
  },
];

const changes = [
  {
    area: "Brand & Identity",
    description: "Rethought the visual identity of the space from the ground up. Updated the menu design, ran the website, and created a consistent look and feel that matched the experience inside.",
  },
  {
    area: "Physical Space",
    description: "Restructured the interior: seating arrangements, flow, atmosphere. The way a space is laid out changes how people experience it. Moved things until it felt right.",
  },
  {
    area: "Menu",
    description: "Rewrote the menu with intention. Simplified where things were too complicated, elevated where things were too basic. Made sure the food told a story that matched the room.",
  },
  {
    area: "Team & Operations",
    description: "Managed 20 employees across front and back of house. Built the culture, handled scheduling, ran performance conversations. A restaurant is only as good as the people running it.",
  },
  {
    area: "Ordering & Finance",
    description: "Owned all purchasing: food, liquor, beer, paper goods. Managed roughly $25K in monthly ordering. Learned to read inventory like a language and make decisions that kept margins healthy.",
  },
  {
    area: "Post-COVID Recovery",
    description: "When everything shut down, we shut down. When it came back, we came back, and came back stronger. That didn't happen by accident. It happened because the foundation was solid.",
  },
];

export default function RestaurantPage() {
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
            Operations · Leadership · Brand · Hospitality
          </motion.p>

          <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="font-display text-5xl md:text-7xl mb-8"
            style={{ color: "var(--green-deep)" }}
          >
            A Decade<br />
            <em className="font-display" style={{ fontStyle: "italic", color: "var(--tan-deep)" }}>
              Behind the Bar
            </em>
          </motion.h1>

          <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="text-lg font-light leading-relaxed max-w-2xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            Ten years in the hospitality industry, from first shift to general manager.
            What it taught me about people, operations, and making something feel like somewhere.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10+",  label: "Years in hospitality" },
            { value: "20",   label: "Employees managed" },
            { value: "$25K", label: "Monthly purchasing" },
            { value: "3",    label: "Years as GM" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Timeline */}
      <section className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium mb-16"
            style={{ color: "var(--tan)" }}
          >
            The Progression
          </motion.p>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-0 top-3 bottom-3 w-px hidden md:block"
              style={{ background: "var(--border)" }}
            />

            <div className="flex flex-col gap-14">
              {timeline.map((stop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="md:pl-12 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-1.5 w-2 h-2 rounded-full hidden md:block -translate-x-[3.5px]"
                    style={{ background: i === timeline.length - 1 ? "var(--green-mid)" : "var(--border)", border: "2px solid var(--background)" }}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    <div>
                      <p className="font-display text-sm mb-1" style={{ color: "var(--tan)" }}>
                        {stop.location}
                      </p>
                      <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--muted-foreground)", letterSpacing: "0.12em" }}>
                        {stop.role}
                      </p>
                    </div>
                    <p className="md:col-span-3 text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                      {stop.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What changed */}
      <section style={{ borderTop: "1px solid var(--border)", background: "var(--muted)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
            <p className="text-xs uppercase tracking-[0.22em] font-medium mb-4" style={{ color: "var(--tan)" }}>
              What Changed
            </p>
            <p className="font-display text-2xl md:text-3xl max-w-xl" style={{ color: "var(--green-deep)" }}>
              I took what was already there and made it something worth coming back to.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: "1px solid var(--border)" }}>
            {changes.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 transition-colors duration-300 group cursor-default"
                style={{
                  background: "var(--card)",
                  borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < changes.length - 2 ? "1px solid var(--border)" : "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--background)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
              >
                <h3 className="font-display text-lg mb-3" style={{ color: "var(--green-deep)" }}>
                  {item.area}
                </h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The thing I'm most proud of */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-24 md:px-16 md:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.22em] font-medium md:pt-2"
            style={{ color: "var(--tan)" }}
          >
            What I'm Most Proud Of
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug mb-8" style={{ color: "var(--green-deep)" }}>
              After COVID, it came back. That doesn't happen by accident.
            </p>
            <p className="text-sm leading-relaxed font-light mb-6" style={{ color: "var(--muted-foreground)" }}>
              COVID closed a lot of restaurants permanently. The ones that came back had something worth coming back to: a community, a reputation, a place people missed. We had that.
            </p>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--muted-foreground)" }}>
              What hospitality taught me about design: people don't remember the menu. They remember how the place made them feel. That's true of a restaurant and it's true of a product. You're always designing an experience, even when you think you're just designing an interface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nav between projects */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-8 py-16 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/work/design-system" className="group flex items-center gap-3">
            <div className="h-px w-6 group-hover:w-12 transition-all duration-300" style={{ background: "var(--green-mid)" }} />
            <span className="text-xs uppercase tracking-[0.18em] font-medium" style={{ color: "var(--green-mid)" }}>
              Prev: Sprout Design System
            </span>
          </Link>
          <Link href="/work" className="text-xs uppercase tracking-[0.18em] font-medium" style={{ color: "var(--tan)" }}>
            All Work →
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
