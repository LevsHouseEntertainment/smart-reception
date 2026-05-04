---
name: justin-levenson-design
description: Use this skill to generate well-branded interfaces and assets for Justin Levenson — author, speaker, and mindfulness practitioner. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping his personal brand and book platform.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

**Font system (May 2026 — placeholder phase):** Use the role variables `--font-primary` (Plus Jakarta Sans 500 — UI, nav, labels, buttons), `--font-header` (DM Mono 400 — section headers, accent callouts), and `--font-body` (Space Grotesk 400 — body copy). These are free Google Fonts standing in for the licensed brand fonts (Galano Grotesque / Messina Sans Mono / Halyard Display) until they're purchased. Never reference the placeholder family names directly — always use the role variables, so the future swap is values-only. Do not use Inter, Roboto, or system fonts as fallbacks.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
