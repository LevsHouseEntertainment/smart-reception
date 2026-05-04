# Justin Levenson Design System

## Overview

Justin Levenson is an author, speaker, and mindfulness practitioner based in Nashville, TN. He was diagnosed with brain cancer in 2014 at age 35, underwent brain surgery and 15 months of chemotherapy and radiation, and has since built a platform around the mind-body tools that helped him survive and thrive.

**Core product:** *You Are Stronger Than You THINK* — a book on mindfulness, resilience, and inner strength, sold on Amazon.  
**Secondary:** "From the Center" — a Substack newsletter (https://substack.com/@fromthecenterwithjustin)  
**Website:** https://justinlevenson.com

The brand centers on a single, deeply personal voice — Justin's own — offering practical tools for anyone facing hardship.

---

## Sources

- `uploads/BRAND GUIDE copy.pdf` — Visual brand guide; includes lifestyle photography, business card mockups, monogram/wax seal imagery
- `uploads/Justin_portraits_contact_sheets.pdf` — 5-page contact sheet with 60+ professional portrait options (brown leather couch setting, black-background studio, color and B&W variants)
- Live website: https://justinlevenson.com (scraped April 2026)

---

## Content Fundamentals

**Voice:** First-person, warm, direct, never clinical or preachy. Justin writes from inside the experience, not from the other side.

**Tone:** Quietly confident. Honest about fear. Grateful without being saccharine. Speaks to the universal through the specific.

**Sentence style:** Short, declarative sentences. Em dashes for rhythm. Fragments used intentionally. Paragraph breaks are generous — white space is part of the message.

**Casing:** Sentence case for body, headlines. ALL CAPS only for the brand name and formal identity lockup ("JUSTIN LEVENSON"). Book title uses specific styling: *You Are Stronger Than You THINK* (THINK is always in caps).

**Person:** Always first-person ("I used this on the radiation table…"). Addresses reader as "you."

**No emoji.** No exclamation points in body copy. Exclamation points appear only in direct quotes.

**Examples of the voice:**
> "This is not a mindfulness program. It's what I actually used — on a radiation table, in the silence after everyone went home and I was sitting alone with all of it."

> "I'm not writing from the other side of that experience. I'm writing from inside it."

> "Beautifully imperfect. Grateful for all of it."

**Subhead style:** Short phrases, often noun-only ("The short version", "What you'll receive", "The full story").

---

## Visual Foundations

### Colors
- **Charcoal** `#545962` — business card back, primary dark; signals understated authority
- **Off-white** `#F6F4F0` — primary background; warm, linen-like, not stark white
- **Dark navy** `#1B1F28` — deep background for dramatic contrast (concrete image); used sparingly
- **Slate blue** `#5B6278` — wax seal; a muted, dusty blue with gray undertones
- **Warm gold** `#C8A86A` — glassware accent; warmth, not flashy
- **Pure white** `#FAFAFA` — card surfaces
- **Text charcoal** `#2E3138` — body text on light backgrounds

### Typography

**Status (May 2026):** Using free Google Fonts as **permanent placeholders** until licensed brand fonts are purchased. The CSS variables `--font-primary` / `--font-header` / `--font-body` are intentionally generic — when licensed fonts are ready, swap only the variable values; no structural changes needed.

| Role | CSS variable | Current (free placeholder) | Future (licensed) | Weight |
|---|---|---|---|---|
| UI / nav / labels / buttons | `--font-primary` | **Plus Jakarta Sans** | Galano Grotesque | 500 |
| Section headers / accent callouts | `--font-header` | **DM Mono** | Messina Sans Mono | 400 |
| Body copy / post content | `--font-body` | **Space Grotesk** | Halyard Display | 400 |

**Rules:**
- Do **not** use Inter, Roboto, or system fonts as fallbacks — only `sans-serif` / `monospace` generic stacks.
- All three placeholders load via a single Google Fonts request (see `colors_and_type.css`). `display=swap` is included.
- Local Galano Grotesque + Messina Sans Mono `@font-face` declarations remain in `fonts/` for the eventual licensed swap.

**Tagline / small caps:** Very small, spaced, caps-only subtext under name (uses `--font-primary` 500 with widest tracking).

### Backgrounds
- Primarily off-white linen texture
- Lifestyle still-life photography (glassware, ceramics, architectural interiors) used as full-bleed section heroes
- Dark concrete/navy used as high-impact contrast backgrounds
- No gradients. No patterns.

### Imagery
- **Lifestyle:** Minimal still-life — clear glassware with translucent liquids, matte ceramics, white architectural interiors. Warm-tinted and natural-light. Quiet, contemplative.
- **Portraits:** Professional shoot. Brown leather couch (warm, accessible) and black-background studio (dramatic, authoritative). Mix of color and B&W used interchangeably.
- **Color vibe:** Warm and muted for lifestyle; neutral to dark for studio portraits. No oversaturated imagery.

### Spacing & Layout
- Generous whitespace. Wide margins. Centered single-column layout for website.
- Horizontal rules used sparingly as section dividers.
- No cards with rounded corners + colored borders. No boxes around content.

### Animation
- None detected. Brand favors stillness. If animation is used: slow fades (500–700ms), no bounce, no slide-ins.

### Hover / Press States
- Subtle: opacity or color darkening. No scale transforms.

### Corner Radii
- Near-zero. Straight or very slightly rounded (≤2px). The brand is crisp, not friendly-rounded.

### Borders
- Thin, 1px, in charcoal or slate. Used occasionally as dividers.

### Iconography
- No icon system detected. Navigation is text-only. Brand relies on numbered lists (01, 02, 03…) for visual structure.
- The **JL monogram** (interlocked J and L) is the primary brand mark, used on business cards and wax seals.

---

## Iconography

- **Primary mark:** JL monogram — interlocked letterforms. Used on business card backs, wax seals.
- **No icon font** is used on the current site.
- **No SVG icon library** is referenced.
- **Numbers as visual anchors:** The site uses numerals (01, 02, 03) as stylized list markers.
- Emoji: never used.

---

## File Index

```
README.md                    — This file
SKILL.md                     — Agent skill definition
colors_and_type.css          — CSS variables: colors, type, spacing
assets/
  brand_0–9.jpg              — Extracted lifestyle/brand imagery from brand guide
  portrait_0–4.jpg           — Portrait contact sheet pages
preview/
  colors-primary.html        — Primary color swatches
  colors-semantic.html       — Semantic color tokens
  type-display.html          — Display type specimens
  type-body.html             — Body type scale
  type-scale.html            — Full type scale
  spacing-tokens.html        — Spacing + radius tokens
  components-buttons.html    — Button states
  components-nav.html        — Navigation bar
  components-cards.html      — Content card patterns
  brand-monogram.html        — JL monogram and brand marks
  brand-imagery.html         — Lifestyle photography showcase
ui_kits/
  website/
    README.md
    index.html               — Full website recreation
    Header.jsx
    Hero.jsx
    BookSection.jsx
    Footer.jsx
```
