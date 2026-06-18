---
name: ryuju-frontend-design
description: Use this skill when improving the frontend design, layout, styling, conversion flow, visual quality, or responsive UI of the 竜樹伐採 landing page. This skill prevents generic AI-looking UI and enforces AGENTS.md and DESIGN.md for a premium Japanese local tree removal specialist website.
---

# Ryuju Frontend Design Skill

## Purpose

This skill improves the frontend design and conversion quality of the Japanese landing page for **竜樹伐採**.

The goal is not to create a generic beautiful website.

The goal is to make the site look like:

> 奈良市・奈良県の高木伐採、危険木伐採、特殊伐採、空き家の庭木整理に対応する信頼できる専門業者。

The site must generate inquiries through:

- 写真を送って概算見積
- 電話で相談
- LINEで相談

## Required Files to Read First

Before making any changes, read:

1. `AGENTS.md`
2. `DESIGN.md`
3. `index.html`
4. `styles.css`
5. `script.js`

Do not modify files before understanding these files.

## Design Process

Before building, follow this process:

1. Define the page or section's business purpose.
2. Define the user’s concern or decision point.
3. Identify what must be understood within 3 seconds.
4. Plan the visual hierarchy.
5. Check whether the design looks generic.
6. Revise anything that could be reused for an unrelated business.
7. Only then modify HTML/CSS/JS.

## Anti-Template Rule

Reject any design that looks like:

- a cheap handyman flyer
- a generic landscaping template
- a Canva-style LP
- a purple-gradient AI website
- a card grid with no hierarchy
- a fake premium website with decorative blobs
- a discount-first service page

Every design choice must be specific to:

- tree removal
- rope work
- arborist tools
- Nara local trust
- risk around houses, roofs, wires, neighbors
- photo-based estimation
- professional field work

## Visual Direction

Follow `DESIGN.md`.

Core palette:

- Forest Black: `#0F1A14`
- Deep Forest Green: `#163C2A`
- Main Green: `#1F5A3A`
- Deep Navy: `#0E2235`
- Off White: `#F7F5EF`
- Green Gray: `#EEF2EC`
- Warm Wood Gold: `#C8A45D`

Use:

- deep forest/navy backgrounds
- white inset information panels
- restrained 8px radius
- strong Japanese grotesk typography
- warm wood accent lines
- practical, high-contrast CTAs

Avoid:

- bright yellow-green
- purple gradients
- pill-shaped over-rounded cards
- noisy decorations
- fake stats
- overuse of icons
- design mockup images as real content

## CTA Hierarchy

Primary CTA:

> 写真を送って概算見積

Secondary CTAs:

> 電話で相談  
> LINEで相談

The primary CTA must be visually dominant in:

- hero
- service sections where relevant
- pricing
- process
- FAQ
- final CTA
- mobile fixed CTA

Do not bury the CTA inside paragraphs.

## Section Rules

Preserve the 10-section structure unless explicitly instructed otherwise:

1. Hero
2. Problems
3. Services
4. Pricing Guide
5. Reasons
6. Works / Case Studies
7. Service Area
8. Process Flow
9. FAQ
10. Final CTA

Preserve:

- 9 services
- 10 FAQ items
- LocalBusiness structured data
- Service structured data
- FAQPage structured data
- `SITE_CONFIG`
- mobile fixed CTA
- GitHub Pages compatibility

## Image Usage

Generated mockup images are design references, not final content.

Do not make important text depend on image text.

Use images only as:

- background atmosphere
- supporting visuals
- placeholder case-study frames
- sections that can later be replaced with real photos

Main information must remain in HTML text.

## Implementation Rules

Prefer CSS improvements before restructuring HTML.

If HTML changes are needed:

- keep them semantic
- keep SEO-relevant text readable
- do not delete sections
- do not break `script.js`
- do not remove `SITE_CONFIG`
- do not invent phone numbers, emails, LINE URLs, qualifications, certifications, or statistics

Do not add frameworks or heavy dependencies.

## Self-Critique Before Finishing

Before reporting completion, check:

1. Does this look like a serious local tree removal specialist?
2. Does it avoid generic AI aesthetics?
3. Does the first view clearly communicate 奈良市の高木・危険木・空き家伐採?
4. Is 写真を送って概算見積 the dominant CTA?
5. Are phone and LINE CTAs still functional?
6. Are services, pricing, FAQ, and structured data still consistent?
7. Is there no horizontal scroll on desktop and mobile?
8. Does the implementation work on GitHub Pages?
9. Does this follow `DESIGN.md`?
10. What remaining risk should the user know before publishing?

## Required Final Report

After changes, report:

1. Changed files
2. What was changed
3. How `DESIGN.md` was followed
4. What generic-template risks were removed
5. CTA verification
6. Mobile verification
7. Structured data verification
8. Remaining risks
9. Items the user must set before publishing
