# Justin Levenson Website UI Kit

Recreation of https://justinlevenson.com — a single-page author site for Justin Levenson's book *You Are Stronger Than You THINK*.

## Components

| File | Description |
|---|---|
| `Header.jsx` | Fixed nav bar with brand name + two links (From the Center, The Book) |
| `Hero.jsx` | Two-column hero: email opt-in left, portrait photo right, quote overlay |
| `BookSection.jsx` | Dark book showcase + 4-up features grid + personal story section |
| `Footer.jsx` | Charcoal footer with brand name and nav links |
| `index.html` | Full assembled page |

## Design Notes
- Single-column content focus; two-column only in hero
- Typography: Cormorant SC (display) + DM Sans (body) — Google Fonts substitutes
- Color: off-white bg (#F6F4F0), charcoal text (#2E3138), dark navy accent (#1B1F28)
- No rounded corners, no shadow cards — very spare and architectural
- Photo: uses contact sheet portrait (portrait_0.jpg) — replace with hi-res `Justin-02-WEB.jpg` when available

## Usage

Open `index.html` in a browser. Requires internet for Google Fonts + React CDN.
