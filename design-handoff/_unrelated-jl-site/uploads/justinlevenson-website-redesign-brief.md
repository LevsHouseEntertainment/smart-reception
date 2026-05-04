# justinlevenson.com — Website Redesign Brief
**Status:** SEO foundations shipped. Speed fix deployed. Test data pending. This brief is the complete context package for designing and building the next version of the site.

---

## 1. The Big Picture

Justin Levenson is a personal brand with four lanes that share one funnel:

1. **Book sales** — *You Are Stronger Than You THINK* on Amazon (back-of-funnel monetization)
2. **Course** — Tied directly to the book, launching in the near term (new back-of-funnel product — see Section 17)
3. **Email list growth** — Beehiiv newsletter *From the Center* (relationship-building middle layer)
4. **Substack publication** — *From the Center* long-form essays (the trust layer)

The site at `justinlevenson.com` is the top of the funnel. Its primary conversion job: turn cold Meta Ads traffic into Beehiiv subscribers via a free lead magnet ("Think It. See It. Feel It." affirmations guide).

Every design and copy decision is judged against that single conversion job — but the site also needs to hold up as a full personal brand hub for speaking, book discovery, and building long-term trust.

---

## 2. Brand Identity

### Ethos
> "If you can think it, you can have it."

*(The previous "Empowering Mindfulness" framing is retired and should never reappear.)*

### Framework
**AVF — Affirm, Visualize, Feel.**
Also rendered as: **"Think It. See It. Feel It."** (this is the lead magnet name).

### Voice Pillars
- Kind
- Positive
- Honest
- Beautifully Imperfect

### Brand Differentiator
Justin writes from inside an active brain cancer treatment journey. Specificity earns trust with cold audiences; generic wellness framing does not. The lived experience is the proof of concept — the reader is always meant to make the story about themselves.

### Voice Anti-Patterns (flag and reject immediately)
- Anything preachy, salesy, or hustle-coded
- Anything that talks down to the reader
- Generic mindfulness language stripped of specificity
- Corporate wellness tone

---

## 3. Color Palette
*(Pull from brand guide directly — never from secondary documents)*

| Name | Hex |
|------|-----|
| Mist | `#5A656B` |
| Charcoal | `#36302D` |
| Deep Sea | `#203235` |
| Storm | `#4A4B4C` |
| Cool Grey | `#E6E7E8` |
| Off-white (live site) | `#F5F4F1` |

---

## 4. Typography

| Role | Font |
|------|------|
| Brand primary | Galano Grotesque Medium |
| Brand header | Messina Sans Mono Regular |
| Brand body | Halyard Display Regular |
| Web (Google Fonts, currently live) | Cormorant Garamond (serif/quotes) + DM Sans (sans/body) |

---

## 5. Current Tech Stack

| Component | Detail |
|-----------|--------|
| Hosting | Netlify (site: `nimble-gecko-165c98`) — **open to change, see note below** |
| Domain | justinlevenson.com (DNS via GoDaddy) |
| Current site | Custom HTML/CSS, single-file `index.html` |
| Email capture | Direct Beehiiv API call (inline form, not iframe) |
| Newsletter | Beehiiv — *From the Center* publication |
| Long-form writing | Substack — *From the Center* (separate lane) |
| Ad platform | Meta Ads Manager |
| Analytics | Netlify Web Analytics + Real User Monitoring (both active) |

**Stack direction: purpose-built.** Justin has decided to go purpose-built — separate best-in-class tools for each job rather than an all-in-one platform. The final stack recommendation should follow that principle.

Recommended direction for Design to evaluate:
- **Main site** — Framer or Webflow (visual builder, fast, multi-page, no code deployment overhead, strong Core Web Vitals out of the box)
- **Course platform** — Teachable, Podia, or similar (purpose-built for course delivery, separate from the main site, linked from `/course` page)
- **Email** — Beehiiv stays (working, welcome sequence is live, not a switching candidate)
- **Long-form writing** — Substack stays (separate lane, not moving)

Non-negotiables for any stack recommendation:
- Justin's workflow: he is not a developer. Any CMS or deployment flow needs to be manageable without code pushes.
- Beehiiv API integration must be preserved — email capture is the primary conversion action.
- Core Web Vitals performance. The 0.27% conversion lesson makes this a hard requirement, not a nice-to-have.

---

## 6. What's Live Right Now

### Current `index.html` — Landing Page
The live site is a **single-page landing page** optimized for one job: email capture.

**Hero (locked — do not modify while test is running):**
- Headline: *"This is not a mindfulness program..."*
- Sub: 17px, max-width 480px
- Hero photo: Justin-02 (leather jacket on couch — warm, settled, eye contact)
- Lead magnet offer: "Think It. See It. Feel It." affirmations guide

**SEO foundations shipped (April 2026):**
- Title: `Justin Levenson — Author, Speaker & Personal Guide`
- Meta description: 158-char, leads with identity
- `robots: index, follow`
- Canonical tag → `https://www.justinlevenson.com/`
- Full Open Graph tags (Facebook, LinkedIn)
- Twitter/X card tags
- Person schema (links: LinkedIn, YouTube, Substack, Amazon author page)
- WebSite schema

**Performance fix shipped (April 22, 2026):**

Before fix — all four Core Web Vitals: **Poor**
- LCP p75 > 4,000 ms
- FCP p75 > 3,000 ms
- FID p75 > 300 ms
- CLS p75 > 0.25

Root causes fixed:
1. Hero image was 1.4 MB → replaced with responsive WebP/JPEG set (mobile: 17 KB)
2. Book cover was 1.9 MB → replaced with responsive set (thumbnail: 11 KB)
3. Google Fonts was render-blocking → replaced with async-load pattern
4. Missing explicit `width`/`height` on `<img>` → added

After fix: Justin reports near-instantaneous mobile load.

---

## 7. The Active Test (Do Not Interrupt Until Data Is In)

**Campaign:** "Justin Levenson — Guide Launch - Post Mobile Optimization"
**Creative:** "Ad 1 — Nashville Story" (proven at $0.06/landing-page-view)
**Audience:** Cancer + Health
**Budget:** $50 lifetime, ~$17/day, 3–4 day window
**Launched:** ~April 22, 2026 evening
**Measuring:** Subscribers ÷ landing page views vs. 0.27% baseline

**Decision tree when data comes in:**
- **> 1%** — Speed fix unlocked the funnel. Scale budget ($150–$300), fix first-name bug, run photo A/B.
- **0.5–1%** — Speed helped, but not the whole story. Investigate: form friction, lead magnet positioning, hero/ad photo mismatch.
- **< 0.5%** — Speed was necessary but not the bottleneck. Revisit: audience targeting, lead magnet match, page promise.

---

## 8. The Conversion Data That Started All of This

Initial campaign (Apr 12–22):
- Spent: $209.45
- Landing page views (Meta): 2,684
- Unique visitors (Netlify): 4,043
- Real Beehiiv subscribers (net of Justin + his dad): **11**
- Conversion rate: **0.27%** — needed to be fixed before anything else

Top traffic source: m.facebook.com (mobile Facebook) — the audience most punished by slow load.

---

## 9. Photo Assets

**Full set:** 57 web-sized JPGs (Justin-01 through Justin-57), uploaded April 17, 2026.

**Key shots:**
| File | Description | Use |
|------|-------------|-----|
| Justin-02 | Leather jacket on couch — warm, settled, eye contact | Current hero (live) |
| Justin-11 | Editorial/couch | Strong editorial option |
| Justin-36 | Pensive on black — quiet authority | Top cold-audience contender for A/B |
| Justin-47 | Warm/seated | |
| Justin-49 | White shirt/standing | A/B candidate |

**Optimized image set (deployed):**
| File | Size | Use |
|------|------|-----|
| `justin-hero-800w.webp` | 17 KB | Mobile, modern browsers |
| `justin-hero-800w.jpg` | 40 KB | Mobile, fallback |
| `justin-hero-1200w.webp` | 32 KB | Desktop 1x, modern |
| `justin-hero-1200w.jpg` | 80 KB | Desktop 1x, fallback |
| `justin-hero-1600w.webp` | 51 KB | Desktop 2x, modern |
| `justin-hero-1600w.jpg` | 134 KB | Desktop 2x, fallback |
| `book-cover-200w.webp` | 11 KB | Thumbnail, modern |
| `book-cover-200w.jpg` | 16 KB | Thumbnail, fallback |

Original source files (`Justin-02-WEB.jpg`, `Book-Cover-JL.jpg`) remain on server by Justin's request — may be referenced by Substack, email signature, or external assets.

---

## 10. Planned Site Architecture (Next Version)

The current site is a single landing page. The next version expands to a **full personal brand hub** while keeping the landing page as the primary conversion engine.

### Proposed Pages

#### `/` — Landing Page (exists, locked during test)
**Job:** Convert cold Meta Ads traffic to Beehiiv subscribers.
**Keep:** Current hero, form, lead magnet offer, voice.
**After test:** Iterate based on conversion data.

#### `/about`
**Job:** Build trust, explain who Justin is and why he's credible, invite connection.
**Key angles:**
- Brain cancer diagnosis and treatment journey (this is the differentiator)
- The AVF framework — where it came from, why it works
- Author, speaker, personal guide identity
- The "beautifully imperfect" proof: he's doing the work, not just teaching it
**Copy:** Already drafted in previous session. Lives in `/output/pages/about.html`.
**Meta:** Already written in `/output/seo/01-meta-tags-and-titles.md`.

#### `/book`
**Job:** Drive Amazon purchases of *You Are Stronger Than You THINK*.
**Key angles:**
- What the book is and who it's for
- The transformation it offers
- Social proof / reviews
- Clear CTA to Amazon
**Copy:** Already drafted. Lives in `/output/pages/book.html`.
**Meta:** Written in `/output/seo/01-meta-tags-and-titles.md`.

#### `/speaking`
**Job:** Establish Justin as a speaker available for healthcare, faith, and corporate events.
**Key angles:**
- TEDx application context
- Healthcare / faith / corporate verticals
- His story as the talk
- Booking inquiry CTA
**Copy:** Already drafted. Lives in `/output/pages/speaking.html`.
**Meta:** Written in `/output/seo/01-meta-tags-and-titles.md`.

#### `/writing` (optional lightweight page, not a blog)
**Job:** Bridge between justinlevenson.com and Substack without duplicating content.
**Approach:** A curated list of Substack posts with links out. Establishes the connection for Google between the site and the writing without building authority on Substack's domain instead of Justin's.
**Note:** Low priority. Justin has decided not to run a full blog — Substack is where the writing lives. This is a lightweight SEO bridge only if desired later.

### Navigation (proposed)
Home · About · Book · Speaking · Writing *(optional)* · [Subscribe CTA button]

---

## 11. Email Funnel (Complete — Not an Open Task)

**Platform:** Beehiiv (*From the Center* publication)
**Welcome sequence:** 6 emails — complete, edited by Justin, loaded, and live.
**Substack bridge:** Soft invitation lives around Email 4–5 of welcome sequence — not earlier.

**One open dev task (parked until after test):**
Beehiiv first-name PATCH call is silently failing. The `subscribe.js` call to `/v2/publications/{publicationId}/subscriptions/{subscriptionId}` is not saving first name. Fix: target PATCH with body `{ "first_name": "value" }` + add error logging. Confirm Beehiiv tier (Max trial vs Scale) before assuming automations are active.

---

## 12. SEO Strategy

### What's Shipped
- Title tag, meta description, OG/Twitter tags, canonical — on `index.html`
- Person schema and WebSite schema — on `index.html`
- Performance fix (Core Web Vitals: Poor → near-instant mobile)

### What Was Planned (but deprioritized)
- Blog posts targeting long-tail keywords: "brain tumor healing mindset," "inner strength recovery," etc.
- **Decision:** Justin chose Substack as the writing home instead. Traffic from those terms will go to Substack (indexes on Google but builds authority on Substack's domain, not Justin's).
- **Middle option available:** The lightweight `/writing` page described above, when ready.

### Pages Needing Meta Tags (ready in `/output/seo/01-meta-tags-and-titles.md`)
- /about
- /book
- /speaking

---

## 13. What's Queued After the Test

**Priority order (if conversion rate > 1%):**
1. Relaunch at scale — same creative, same audience, budget $150–$300
2. Fix Beehiiv first-name PATCH bug
3. Photo A/B test — Justin-36 (pensive/authority) vs Justin-49 (warm/standing) as separate ad creative
4. Video ad creative — Justin to-camera, 15–30 sec (he's been told the camera loves him)

**Independent of test outcome:**
- Course / retreat curriculum (long-running back-burner)
- Speaker lane development (TEDx, healthcare/faith/corporate)
- Judith Hill Photography website copy (Justin's wife's portrait business)
- AI implementation consulting lane (Justin considering; Clay on radar)

---

## 14. Working Principles for Design

1. **Match Justin's voice exactly.** Warm, grounded, conversational, lightly structured. Vulnerability before uplift. Settled positivity, never hustle. One person talking to one person.
2. **Conversion focus first.** Every page has one job. Landing page = subscribe. Book page = buy. Speaking page = inquire. Don't let design complexity dilute those CTAs.
3. **Performance is non-negotiable.** The 0.27% conversion rate was largely a speed problem. Every image responsive and optimized. No render-blocking resources.
4. **Specificity over polish.** The brain cancer journey is the differentiator. Don't smooth it away with generic wellness aesthetics. Lean into it.
5. **Color from the brand guide only.** Mist `#5A656B` — not any derived or approximated version.
6. **No paid tools without confirming capability.** Known cautionary example: Carrd Pro was once recommended without confirming full custom HTML support — it couldn't. Justin caught it.

---

## 15. Files of Record

| File | Location | Status |
|------|----------|--------|
| Production `index.html` | Justin's local machine + Netlify | Live, locked during test |
| Optimized image set (8 files) | Netlify root | Deployed |
| Original source images | Netlify root | Kept by Justin's request |
| Brand guide PDF | Justin's files | Authoritative source for colors/type |
| Voice DNA doc | Justin's files | Voice/tone reference |
| Page copy drafts (/about, /book, /speaking) | `/output/pages/` from SEO session | Ready to build |
| Meta tags for all pages | `/output/seo/01-meta-tags-and-titles.md` | Ready to apply |

---

## 16. When to Reconvene on the Test

Test window: ~3–4 days from April 22, 2026. When Justin returns with data:

1. Pull conversion rate: subscribers ÷ landing page views (new campaign window only)
2. Compare to 0.27% baseline
3. Pull updated Core Web Vitals from Netlify RUM — confirm Poor → Good flip held under live traffic
4. Apply decision tree from Section 7
5. Move on the highest-priority next action without re-litigating the diagnostic

**What to bring:**
- Subscriber count (net of test accounts)
- Landing page views (note whether pulling from Meta or Netlify — they diverged last time: 2,684 vs 4,043)
- Screenshot or export of Netlify RUM Core Web Vitals

---

---

## 17. Course (Upcoming — Near-Term Launch)

**What it is:** A course tied directly to *You Are Stronger Than You THINK*, the book.

**Where it fits in the funnel:**
- The email list (Beehiiv) is the middle layer — nurture and trust
- The book is the current back-of-funnel product
- The course becomes an additional back-of-funnel product, likely at a higher price point than the book, and can sit alongside it or be sequenced after it in the email welcome/nurture flow

**Implications for the site redesign:**
- A `/course` page (or `/work-with-me` or `/the-program` — naming TBD) needs to be planned into the navigation and architecture now, even if the page launches later
- The course should be tightly connected to the AVF framework — "Think It. See It. Feel It." is already the lead magnet hook, so the course is the natural depth offering for people who want more than the free guide
- Consider whether the course has its own standalone landing page (separate URL) or lives within justinlevenson.com — either way the site nav should point to it
- The book page and course page should feel complementary, not competing — book as the entry point, course as the deeper commitment

**Open questions to resolve before Design builds this page:**
- What is the course called?
- What platform will it live on? (Teachable, Kajabi, Thinkific, custom, etc.) — this determines whether it's a page on the site or an external link
- What's the price point?
- Is there a waitlist period, or does it launch directly to purchase?
- Will it use a separate Beehiiv automation sequence, or plug into the existing welcome flow?

**Design placeholder:** Reserve a `/course` page in the site architecture. Can be a coming-soon or waitlist capture page at launch and swap to full sales page when ready.

---

*Brief compiled: April 28, 2026. Updated: April 28, 2026 (course added). Source: SEO audit session + landing page optimization session.*
