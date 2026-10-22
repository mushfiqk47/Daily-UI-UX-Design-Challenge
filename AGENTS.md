---
name: dailybrief-agent-guide
description: Engineering principles, canonical architecture, design standards, and logging protocol for coding agents working on the Dailybrief codebase.
license: MIT
---

# Dailybrief Agent Guide & Engineering System

This document is the single source of truth for AI agents (Antigravity, Claude Code, Codex, Gemini) and human contributors working on **Dailybrief** (Daily UI/UX Design Challenge).

---

## 1. Core Engineering Invariants (Karpathy Guidelines)

### 1.1 Think Before Coding
- **Never guess or assume.** If requirements or intent are underspecified, clarify before modifying files.
- Surface tradeoffs and edge cases early. If multiple viable approaches exist, state them explicitly.
- Ground before mutating: Read the target component, its props, and its parent/callers before editing.

### 1.2 Simplicity First
- Minimum code that solves the problem. Nothing speculative.
- No unused abstractions, wrappers, or speculative configurability for single-use logic.
- Avoid defensive error handling for impossible scenarios in pure UI components.
- If an implementation takes 200 lines when 50 lines suffice, rewrite and simplify.

### 1.3 Surgical Changes
- Touch only what you must. Match existing project style, naming conventions, and patterns.
- Do not modify adjacent code, reformat untouched regions, or delete pre-existing code unless directly requested.
- Clean up only your own orphans: remove imports, variables, or helpers that *your* changes made obsolete.
- Every modified line must trace directly to the user's task.

### 1.4 Goal-Driven Execution & Verification
- State verifiable success criteria before running mutations:
  1. `[Step]` -> verify: `[Check]`
  2. `[Step]` -> verify: `[Check]`
- Always run `pnpm run build` and `pnpm exec oxfmt src` before declaring completion.
- Verify live behavior via the running dev server without errors.

---

## 2. Canonical Architecture & Project Structure

Dailybrief is built with **React 19**, **TypeScript 5.7**, **Tailwind CSS v4** (`@tailwindcss/vite`), and **Vite 8**.

```text
src/
├── App.tsx                           # Root orchestrator: state hydration, keyboard bindings, dock, toasts
├── main.tsx                          # React entrypoint: mounts App and provides ErrorBoundary
├── index.css                         # Tailwind CSS v4 entrypoint, Sora & Inter fonts, custom keyframes
├── components/
│   ├── InfiniteCanvas.tsx            # Hardware-accelerated 2D canvas: pan, pinch-zoom, fit-to-view
│   ├── BriefWorld.tsx                # 3-column brief canvas container & line-by-line reveal manager
│   ├── SavedPanel.tsx                # Persisted saved briefs slide-out drawer with keyword search
│   ├── SettingsDrawer.tsx            # Generator configuration & AI provider settings drawer
│   ├── SprintTimer.tsx               # Design sprint timer with presets and custom duration
│   ├── DocumentationModal.tsx        # In-app user manual, provider setup, and local CORS guide
│   ├── CustomDropdown.tsx            # Accessible custom dropdown component
│   ├── XLogo.tsx                     # Vector brand component for 𝕏 / Twitter sharing
│   ├── cards/                        # Domain brief card subcomponents
│   │   ├── TopFloatingBadge.tsx      # Product name pill, platform indicator, and challenge type
│   │   ├── ProductConstraintsCard.tsx# Left panel: product description, value prop, constraints, tone
│   │   ├── TaskCard.tsx              # Center panel: task challenge, goal, interactive checklist
│   │   └── PersonaAudienceCard.tsx   # Right panel: persona profile, pain points, quote, target audience
│   └── settings/                     # Isolated provider configuration panels
│       ├── WebGpuSection.tsx         # Local WebGPU model weights, VRAM cache, download progress
│       ├── OpenAiSection.tsx         # OpenAI key, model selector, connection test
│       ├── GeminiSection.tsx         # Google Gemini AI Studio key and model selector
│       ├── AnthropicSection.tsx      # Anthropic Claude API key, base URL, and model selector
│       └── CustomEndpointSection.tsx # Ollama, LM Studio, Groq, OpenRouter configuration
├── lib/
│   ├── ai.ts                         # Unified AI client, lazy WebLLM loader, and JSON repair
│   └── generate.ts                   # Deterministic brief generator and Markdown export formatting
└── data/
    └── library.ts                    # 100+ curated deterministic seed briefs across 48+ industries
```

---

## 3. Tooling & Development Workflow

### Dev Server
A Vite development server runs on `$PORT` (default `8443` in cloud environments, or `5173` locally).
- **HMR**: Changes to source files hot-reload instantly.
- **Built-in Proxy**: The endpoint `/ollama/v1` proxies to `http://localhost:11434/v1` to eliminate browser CORS restrictions.

### Essential Commands
```bash
# Run local dev server
pnpm dev

# Typecheck and compile production bundle
pnpm run build

# Format codebase with oxfmt
pnpm exec oxfmt src

# Preview production build
pnpm run preview
```

---

## 4. UI Craftsmanship & Design System (antislop Standards)

This codebase follows strict **antislop** UI and code hygiene rules:

1. **Color Contrast (WCAG AA)**
   - Text on light surfaces must achieve a contrast ratio of at least `4.5:1` (normal text) or `3:1` (large text).
   - Use `text-slate` (`#55585e`) or `text-charcoal` (`#333336`) for secondary text and hints. Avoid low-contrast grays on surface backgrounds.
   - Minimum font size for readable hints is `10.5px` or `11px`.
2. **Copywriting Integrity**
   - **No em dashes (`—`)** in UI copy. Use commas, hyphens, colons, or parentheses.
   - Avoid generic AI buzzwords ("Instant", "Seamless", "Revolutionary", "Next Generation").
   - Action buttons must have specific, descriptive labels (e.g. "Generate brief", "Save for later").
3. **Intentional Geometry (Border Radius)**
   - Do NOT make every element pill-shaped.
   - Reserve `rounded-full` exclusively for the primary floating CTA ("Generate brief") and the daily streak counter.
   - Main content cards use `rounded-[24px]`.
   - Toolbars, action buttons, timer containers, and modal controls use `rounded-xl` or `rounded-lg`.
4. **Purposeful Iconography**
   - Avoid generic AI sparkle or lightning bolt icons (`Sparkles`, `Zap`).
   - Use action-grounded icons: `Shuffle` for brief generation, `Layers` for design systems/brand, `SlidersHorizontal` for settings, and `Cpu` for hardware/AI inference.
5. **Calm Motion (No Endless Loops)**
   - Do not use perpetual `animate-pulse`, `animate-ping`, or `animate-bounce` on status indicators.
   - State indicators use steady, calm colored dots (e.g. solid `bg-emerald-500` for active WebGPU model).
   - Card reveals follow the staggered `42ms` reveal rhythm with `1300ms` container height growth.
6. **Code Comment Hygiene**
   - Avoid empty labels or comments that merely restate JSX tags (`{/* Drawer */}`, `{/* Backdrop */}`, `{/* Header */}`).
   - Preserve comments that document business constraints, non-obvious workarounds, API protocols, or algorithms.

---

## 5. Agent Work Log System (`CHANGELOG.md`)

To ensure long-term continuity across autonomous agent sessions, prevent regressions, and provide visibility into architectural decisions, all coding agents must record meaningful changes, refactors, and feature additions in [`CHANGELOG.md`](./CHANGELOG.md).

### 5.1 When to Log
An entry must be recorded in `CHANGELOG.md` whenever an agent:
- Implements a new feature, component, or capability.
- Refactors or decomposes existing modules or component boundaries.
- Resolves design system, accessibility, or antislop audit findings.
- Fixes functional bugs, runtime exceptions, or layout glitches.
- Modifies tooling, dependencies, or configuration files (`vite.config.ts`, `package.json`).

### 5.2 Changelog Format Standard
`CHANGELOG.md` adheres to [Keep a Changelog](https://keepachangelog.com/) standards with an integrated **Agent Verification Protocol**:

```markdown
## [Version or Date] - YYYY-MM-DD

### Added | Changed | Refactored | Fixed | Performance
- **<Change Title>**: Concise description of what changed and why.
  - **Modules Affected**: `src/components/cards/...`, `src/lib/...`
  - **Decisions & Trade-offs**: Brief rationale for structural decisions.
  - **Verification**: `pnpm run build` (pass/fail, build time), `oxfmt` (pass/fail).
```

### 5.3 Invariants for Agent Logging
1. **Evidence-backed**: Every log entry must include verification evidence (compiler output, test results, or build time).
2. **Surgical descriptions**: State the exact component or file modified; do not write vague summaries like "improved code".
3. **No hype**: Avoid hyperbolic statements. State the technical facts and measured outcomes.
4. **Chronological order**: Latest releases and session logs always appear at the top of the file under `## [Unreleased]` or the latest version block.

---

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Before starting, follow the core's "Two Usage Modes" section in strict order: explicit session instruction first, then global preference, then ask. A session instruction always wins. For a resolved mode, say `antislop active: <mode> (session override).` or `antislop active: <mode> (global preference).` once before presenting findings or making edits, using the actual mode and source. Acknowledging the user's request without naming the source does not replace this notice.
Only an explicit choice of antislop during or after selects a session mode. A request to review, audit, or avoid file edits does not select a mode; read the global preference in that case. Another skill's mode does not select antislop's mode.
If the mode is unresolved, ask during/after and end the response; wait for the answer before any UI review, planning, or concept. For read-only tasks, put the active-mode notice only at the start of the final answer, never in progress messages. For editing tasks, announce before the first edit and omit it from the final answer.
To update antislop later: download `antislop.md` again, or run `npx antislop-ai --update` if it was installed as skill folders.
<!-- antislop:end -->
