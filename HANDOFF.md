# ryanthoemke.com — Session Handoff

## Who Ryan Is
Ryan Thoemke — UX designer at Cargill, musician/songwriter, golfer, fly fisherman, former restaurant GM, maker of things. Not a single-lane person. Wants a site that feels like walking through his stuff — warm, lived-in, intentional. Talk to him like a smart friend in the room. Direct answers with reasoning. "Here's the move."

Full identity file: `~/.claude/projects/-Users-ryanthoemke-ryanthoemke-com/memory/user_ryan.md`

---

## Project
**Site**: ryanthoemke.com  
**Repo**: https://github.com/ryan-thoemke/ryanthoemke.com  
**Working directory**: `/Users/ryanthoemke/ryanthoemke.com`  
**Dev server**: `npm run dev` → localhost:3000  
**Stack**: Next.js 15 (App Router), Tailwind CSS v4, shadcn/ui, Framer Motion

---

## Design System (locked in — do not change without Ryan's input)
- **Background**: warm linen `oklch(0.975 0.008 85)`
- **Foreground / body text**: deep forest green `oklch(0.22 0.04 158)`
- **Headings**: `--green-deep: oklch(0.28 0.09 158)`
- **Accent / labels**: dark clay tan `--tan: oklch(0.46 0.09 55)` — a11y verified
- **Cards**: `oklch(0.96 0.01 80)`
- **Fonts**: Playfair Display (display/headings) + DM Sans (body) via `next/font/google`
- **Tokens**: defined in `src/app/globals.css`
- All colors a11y verified (WCAG AA+)

---

## File Structure
```
src/
  app/
    globals.css          ← design tokens, grain texture, base styles
    layout.tsx           ← fonts loaded here
    page.tsx             ← homepage
    work/
      page.tsx           ← work index (two case studies listed)
      design-system/
        page.tsx         ← Sprout Design System case study
      restaurant/
        page.tsx         ← A Decade Behind the Bar case study
  components/
    nav.tsx              ← fixed nav (links: Work→/work, Music→#music, About→#about)
    scroll-icon.tsx      ← scroll-reactive right-edge icons (pick→rod→guitar)
    ui/
      button.tsx         ← shadcn
  lib/
    utils.ts
next.config.ts           ← devIndicators: false
```

---

## Pages Built

### Homepage (`/`)
- Hero: "Designer. *Songwriter.* Maker of things." — Playfair Display, viewport-scale
- "MINNEAPOLIS, MN" eyebrow with rule
- 2×2 card grid: Design, Music, Outdoors, Building
- About section with editorial quote
- Music section with "Getting There" lyric
- Footer
- Scroll-reactive icons fixed to right edge (guitar pick in first third, fly rod in second third, acoustic guitar in final third) — 14% opacity, Framer Motion crossfade

### Work Index (`/work`)
- Two case studies with stats, summaries, "Read case study" links

### Design System Case Study (`/work/design-system`)
- Stats: 90+ components, 30+ patterns, 14 products, 3 yrs
- Abstract component grid visualization (no real IP shown)
- Token architecture diagram (Global → Semantic → Component tokens)
- Four pillars: Foundations, Components, Patterns, Community
- Challenge + Outcome sections

### Restaurant Case Study (`/work/restaurant`)
- Stats: 10+ yrs, 20 employees, $25K/month, 3 yrs GM
- Career timeline: dive bar at 21 → Franklin TN → Minneapolis Irish pub → final restaurant
- "What Changed" grid: Brand, Space, Menu, Team, Ordering, Post-COVID
- COVID comeback as the proud moment

---

## What's Not Built Yet
- [ ] **About page** (`/about`) — needs a photo of Ryan + short bio
- [ ] **Music page** — recordings, setlist, links (SoundCloud/YouTube if any)
- [ ] **Vercel deployment** — repo is on GitHub, just needs Vercel connected
- [ ] **Domain connection** — Ryan owns ryanthoemke.com, needs DNS pointed to Vercel
- [ ] **Contact** — email or form (TBD)

---

## Deployment Plan (next session priority)
1. Go to vercel.com → "Add New Project" → import `ryan-thoemke/ryanthoemke.com`
2. Vercel auto-detects Next.js, no config needed → Deploy
3. In Vercel project settings → Domains → add `ryanthoemke.com`
4. Update DNS at registrar to point to Vercel nameservers
5. Live within ~1 hour

---

## Key Decisions Made
- No purple gradients, no Inter, no generic AI aesthetic
- Green is the *voice* of the site, not the room (light background)
- Tan/clay is the warmth accent — never decorative green
- Case studies show process/thinking, not proprietary screenshots
- `devIndicators: false` in next.config.ts (hides the Next.js dev badge)
- The orange cursor the user saw = Claude in Chrome extension, not site code

---

## Ryan's Voice (use in copy)
- "No tangled wires" — how he describes systems work
- "Getting there" — his key song, about grief and healing, not a slogan
- The Brule River, Franklin TN, grandfather's Jeep — specific images that matter
- "I want this to feel like walking through my stuff"
- Prefers: directness, specific detail, earned emotion. Dislikes: fluff, therapy-speak, generic encouragement
