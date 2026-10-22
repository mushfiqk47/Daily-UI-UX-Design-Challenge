# Daily UI/UX Design Challenge

A daily prompt generator for UI/UX designers — spin up a randomized product, persona, and screen challenge every day to sharpen your design skills.

---

## What It Is

Each session gives you a unique brief containing:

- **A product** — a fictional app from industries like fintech, healthcare, fitness, civic tech, and more
- **A persona** — a realistic user with goals, behaviors, and pain points
- **A screen challenge** — a specific deliverable (card, form, widget, onboarding step, etc.) with must-haves and a success criterion

The goal is to practice designing real, constrained UI — not generic toy screens.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.7 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Package manager | pnpm |
| Formatter | oxfmt |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18, pnpm

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
├── App.tsx            # Main application component
├── main.tsx           # React entry point
├── index.css          # Global styles + Tailwind import
├── data/
│   └── library.ts     # Product seeds, personas & task library
└── lib/
    └── generate.ts    # Challenge generation logic
public/
└── assets/            # SVG assets
```

---

## Challenge Library

The [`library.ts`](./src/data/library.ts) file contains **15+ fictional products** spanning:

| Product | Industry | Platforms |
|---|---|---|
| Borrowbench | Community / Sharing | Mobile |
| Tidewell | Outdoors / Safety | Mobile |
| Ledgerleaf | Fintech / Freelance | Desktop |
| Crumbline | Food / Hobby | Mobile |
| Halfshift | Healthcare / Workforce | Mobile |
| Stoop | Civic / Community | Mobile |
| Gridkeep | Energy / Smart home | Mobile |
| Verso | Marketplace / Education | Mobile + Desktop |
| Kinroll | Healthcare / Family | Mobile |
| Benchmark | B2B / Life sciences | Desktop |
| Pawpost | Pets / Services | Mobile |
| Lumen Lane | Entertainment / Membership | Mobile |
| Ferrous | Fitness / Strength | Mobile |
| …and more | | |

Each product includes brand constraints, tone guidelines, user personas, and multiple task briefs across types: **Form**, **Card**, **Widget**, **Empty state**, **Onboarding**, **Settings**, **Hero**, and **Short flow**.

---

## License

MIT — feel free to use these prompts for practice, portfolio work, or teaching.

---

## Author

**Md. Mushfiq Kabir** · [@mushfiqk47](https://github.com/mushfiqk47)
