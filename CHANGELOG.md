# Changelog

All notable changes to the **Dailybrief** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and adheres to the **Agent Logging Protocol** defined in [`AGENTS.md`](./AGENTS.md).

## [1.3.1] - 2026-10-23

### Fixed
- **Vercel CI/CD Build Failure (`vite.config.ts`)**:
  - Replaced static import `import siteConfiguration from "./.figma/make/site.json"` with dynamic filesystem check (`fs.existsSync`) and fallback configuration.
  - Eliminates `[UNRESOLVED_IMPORT] Error: Could not resolve './.figma/make/site.json'` during clean repository builds in cloud deployment platforms (such as Vercel, Netlify, or Docker) where `.figma/` is gitignored.
  - **Modules Affected**: [`vite.config.ts`](file:///c:/Users/mushfiq/Documents/Daily%20UI_UX%20Design%20Challenge/vite.config.ts).
  - **Verification**: `pnpm run build` (pass, 939ms), verified build passes with and without `.figma/` directory.

---

## [1.3.0] - 2026-10-23

### Added
- **3x Expansion of Seed Library (`src/data/library.ts`)**:
  - Tripled deterministic seed product repository from 47 products to **144 comprehensive products** across diverse real-world specialized industries (aerospace line maintenance, marine bioacoustics, industrial metallurgy, surgical instrument sterilization, historic masonry restoration, civil bridge strain telemetry, metrology calibration, geothermal utility operations, and artisanal milling).
  - Tripled `CONSTRAINTS` array from 12 to **36 realistic design constraints** (covering WCAG AA compliance, single-thumb ergonomics, offline-first sync states, tabular data density, and high-glare ramp contrast).
  - Tripled `NAMES` seed pool from 52 to **154 global designer and persona names**.
  - All copy strictly adheres to antislop copywriting standards: zero em dashes (`—`), zero generic AI buzzwords, and grounded domain-specific context.
  - **Modules Affected**: [`src/data/library.ts`](file:///c:/Users/mushfiq/Documents/Daily%20UI_UX%20Design%20Challenge/src/data/library.ts).
  - **Verification**: `pnpm run build` (pass, 807ms), `pnpm exec oxfmt src` (pass).

---

## [1.2.0] - 2026-10-23

### Refactored
- **God-Component Deconstruction (`App.tsx` & `SettingsDrawer.tsx`)**:
  - Reduced `src/App.tsx` from 1,385 lines to 280 lines by extracting canvas orchestrators, slide-out panels, and brand assets.
  - Reduced `src/components/SettingsDrawer.tsx` from 1,229 lines to 486 lines by modularizing provider configurations.
  - Extracted 4 isolated brief card subcomponents into `src/components/cards/`:
    - `TopFloatingBadge.tsx`: Product name badge, challenge category, and target platform pill.
    - `ProductConstraintsCard.tsx`: Left column containing product overview, core value proposition, design constraints, and tone.
    - `TaskCard.tsx`: Center column containing the design challenge, sprint timer anchor, and interactive checklist.
    - `PersonaAudienceCard.tsx`: Right column containing target user profile, quote, pain points, and demographics.
  - Extracted 5 isolated provider configuration sections into `src/components/settings/`:
    - `WebGpuSection.tsx`: Local in-browser WebLLM weight caching, VRAM status, and download progress bar.
    - `OpenAiSection.tsx`: OpenAI API key, model selector, and connection validator.
    - `GeminiSection.tsx`: Google Gemini API Studio key and model selector.
    - `AnthropicSection.tsx`: Anthropic Claude API key, custom base URL, and model selector.
    - `CustomEndpointSection.tsx`: Ollama, LM Studio, Groq, and OpenRouter endpoint manager.
  - Extracted core layout canvas into `src/components/InfiniteCanvas.tsx` and `src/components/BriefWorld.tsx`.

### Changed
- **antislop Design Hardening (Audit #001)**:
  - **Color Contrast**: Darkened sub-labels from `#6b7079` to `text-slate` (`#55585e`, >6.5:1 contrast) on surface backgrounds to satisfy WCAG AA requirements.
  - **Mobile Touch Targets**: Expanded category track tag buttons to a minimum touch target of 32px-44px (`py-1.5 px-3`) for mobile ergonomics.
  - **Animation Calming**: Removed perpetual `animate-pulse`, `animate-ping`, and `animate-bounce` loops on WebGPU status indicators. Active inference state is now communicated via a calm, steady green indicator.
  - **Purposeful Iconography**: Replaced generic AI `Sparkles` icon on the primary "Generate brief" CTA with `Shuffle`. Replaced `Zap` with `Cpu` for hardware and AI provider indicators.
  - **Visual Geometry**: Standardized border radii across the design system: `rounded-full` is reserved for the primary floating CTA and daily streak pill; cards use `rounded-[24px]`; toolbars and modals use `rounded-xl` and `rounded-lg`.
  - **Copywriting**: Stripped decorative "Instant" AI capsule badge; ensured UI copy contains no em dashes.

### Added
- **Transparent Brand Mark & Favicon Refinement**:
  - Removed the solid dark square tile background from the logo in the header and [`public/favicon.svg`](file:///c:/Users/mushfiq/Documents/Daily%20UI_UX%20Design%20Challenge/public/favicon.svg).
  - Created [`src/components/BrandLogo.tsx`](file:///c:/Users/mushfiq/Documents/Daily%20UI_UX%20Design%20Challenge/src/components/BrandLogo.tsx) to render the 3D layers mark with clean transparent background, crisp `#18181B` top stroke, and signature `#E0307E` pink accent lines.
  - Set semantic title `<title>Dailybrief - Daily UI/UX Design Challenge</title>` and `lang="en"` in `index.html`.
- **Social Feedback Badge**:
  - Integrated `@mushfiqk47` 𝕏 (Twitter) feedback pill in the top-left navigation bar beside `Dailybrief` and the habit streak badge.
  - Deep links to `https://x.com/mushfiqk47` with `target="_blank" rel="noopener noreferrer"`.
  - Styled with dark charcoal container (`bg-[#18181b] border-zinc-700/60`), white vector `XLogo`, and accessible tooltip.
- **Engineering Documentation & Standards**:
  - `AGENTS.md`: Full architectural reference, Karpathy engineering invariants, antislop standards, and the agent logging system specification.
  - `DOCUMENTATION.md`: Comprehensive end-user manual, AI provider setup instructions, and local Ollama proxy documentation.
  - `CHANGELOG.md`: Project-level historical ledger and verification record.
  - Codebase Knowledge Graph generated via `graphify` (201 nodes, 372 edges across 10 modular clusters).

### Verification
- `pnpm run build`: Success in 767ms with zero errors.
- `pnpm exec oxfmt src`: Formatted 23 files in 7ms with zero violations.

---

## [1.1.0] - 2026-10-23

### Added
- **Staggered Line-by-Line Progressive Reveal**:
  - Added sequential progressive reveal in `BriefWorld.tsx`: card headers, titles, descriptions, constraints, tasks, and persona details appear line by line using a crisp 42ms interval rhythm.
  - Smooth 1300ms container height expansion to avoid abrupt content jumps.
- **Skeleton Placeholder Loading State**:
  - Integrated an interactive 3-column skeleton layout in `InfiniteCanvas.tsx` that mirrors actual card dimensions during AI brief generation.
- **In-Browser WebGPU Local LLM**:
  - Integrated `@mlc-ai/web-llm` to support zero-cost, fully private, in-browser AI generation without API keys using lightweight models (e.g., SmolLM2-360M-Instruct).
- **Multi-Provider AI Engine**:
  - Unified AI client in `src/lib/ai.ts` supporting Google Gemini, OpenAI (GPT-4o, GPT-4o-mini), Anthropic (Claude 3.5 Haiku, Claude 3.5 Sonnet), and custom OpenAI-compatible endpoints.
  - Built-in Vite proxy (`/ollama/v1` -> `http://localhost:11434/v1`) to bypass local browser CORS restrictions when using Ollama or LM Studio.

### Verification
- `pnpm run build`: Success, all chunks bundled cleanly.
- Verified live hot-reload on port 8443.

---

## [1.0.0] - 2026-10-22

### Added
- **Spatial Infinite Canvas**:
  - Hardware-accelerated 2D canvas with panning (drag or space + drag), pinch-to-zoom (85% to 200%), and automatic fit-to-screen framing.
- **3-Column Challenge Structure**:
  - Left panel: Product overview, value proposition, real-world design constraints, and visual tone.
  - Center panel: Core design challenge, sprint timer anchor, and interactive must-haves checklist.
  - Right panel: Persona avatar, user quotes, pain points, and demographic breakdown.
- **Deterministic Challenge Library**:
  - 82 curated, production-grade seed briefs in `src/data/library.ts` spanning 48 industries (FinTech, B2B SaaS, HealthTech, AI, Logistics, Climate).
- **Productivity & Sharing Tools**:
  - Interactive must-haves checklist with localStorage persistence and daily streak tracker.
  - Sprint timer with presets (15m, 30m, 45m, 60m) and custom duration settings.
  - Saved briefs slide-out panel with instant search and JSON export.
  - One-click social sharing to 𝕏 (Twitter) with deep challenge links.

### Verification
- Production build verified with Vite 8 and React 19.
