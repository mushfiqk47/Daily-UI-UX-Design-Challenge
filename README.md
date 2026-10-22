# Dailybrief (Daily UI/UX Design Challenge)

A spatial, canvas-native daily UI/UX design challenge generator for product designers, design engineers, and UX researchers. Spin up realistic, constraint-driven briefs featuring detailed product specs, real-world constraints, target personas, interactive deliverables, and success metrics.

[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite 8](https://img.shields.io/badge/Vite-8-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![WebGPU](https://img.shields.io/badge/WebGPU-In--Browser_AI-emerald.svg)](https://webllm.mlc.ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Highlights

- **Spatial Infinite Canvas**: Figma-like interactive 2D canvas with pan, pinch-to-zoom (85% to 200%), zoom controls, keyboard shortcuts, and fit-to-screen view.
- **Three-Column Domain Layout**:
  - **Left (Product & Constraints)**: Company description, core value proposition, strict technical constraints (accessibility, viewport boundaries), and visual tone direction.
  - **Middle (Task Challenge & Checklist)**: Primary deliverable, platform (Mobile/Web), measurable UX goal, interactive sign-off checklist with live progress counters, and success metrics.
  - **Right (Persona & Target Audience)**: User persona profile (name, role, age, quote, core goals, specific pain points) along with primary audience segment and behavioral context.
- **Smooth Streaming & Progressive Line-by-Line Reveal**: Content transitions from an animated skeleton placeholder into staggered 42ms line reveals with fluid container height growth (zero layout jumps).
- **Multi-Engine AI Brief Synthesis + Offline Seed Library**:
  - **100+ Curated Deterministic Briefs**: Works 100% offline out-of-the-box with zero API keys required.
  - **In-Browser WebGPU Local Models**: Client-side private AI inference via WebLLM (e.g. Qwen 3.5 0.8B, Qwen 2.5 0.5B/1.5B). Runs directly on your device GPU with zero telemetry and zero thinking latency.
  - **Google Gemini**: Sub-second synthesis with Gemini 2.0 Flash and Gemini 1.5 Pro using free AI Studio keys.
  - **OpenAI**: Support for GPT-4o, GPT-4o-mini, and custom fine-tunes.
  - **Anthropic Claude**: Support for Claude 3.5 Sonnet, Claude 3.5 Haiku, and custom gateways.
  - **Custom OpenAI-Compatible Endpoints**: Connect locally to Ollama, LM Studio, Groq, OpenRouter, or DeepSeek with automatic Vite proxy fallback (`/ollama/v1`).
- **Productivity & Workspace Tools**:
  - **Sprint Timer**: Preset sprint lengths (15m, 30m, 45m, 60m) or custom durations to timebox design sessions.
  - **Daily Streak Tracker**: Local persistence tracking completed daily design challenges.
  - **Saved Briefs Drawer**: Bookmark briefs, search by keywords, and filter by tags.
  - **Export & Share**: One-click Markdown export (`.md`), copy formatted markdown to clipboard, or generate shareable deep links for X / Twitter.
  - **In-App Documentation**: Comprehensive guide on features, AI provider setup, keyboard shortcuts, and local CORS configurations.
- **Design System & Craftsmanship**: Clean Sora and Inter typographic pairing, warm paper surface tones, WCAG AA compliant contrast (>6.5:1), and mobile touch targets.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React 19 & React DOM 19 | High-performance UI rendering with hooks and optimistic updates |
| **Language** | TypeScript 5.7 | Strict static typing and interface contracts across components |
| **Bundler & Dev Server** | Vite 8 | Instant HMR, ESM bundling, and built-in reverse proxy support |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Modern CSS-first utility classes and custom animations |
| **Local AI Runtime** | `@mlc-ai/web-llm` | In-browser WebGPU WASM neural execution (dynamically loaded) |
| **Icons** | Lucide React | High-clarity iconography |
| **Code Hygiene** | oxfmt | Lightning-fast rust-based code formatter |

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0 (or npm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/mushfiqk47/Daily-UI-UX-Design-Challenge.git
cd Daily-UI-UX-Design-Challenge

# Install dependencies
pnpm install

# Start the local Vite development server
pnpm dev
```

Open `http://localhost:5173` (or the port specified in terminal output) in your web browser.

### Production Build

```bash
# Build optimized production bundle to /dist
pnpm run build

# Preview production build locally
pnpm run preview

# Format code with oxfmt
pnpm exec oxfmt src
```

---

## Project Architecture

The codebase follows a modular architecture separating spatial canvas interactions, card subdomains, AI provider forms, and data engines:

```text
src/
├── App.tsx                           # Main app shell, keyboard bindings, and state hydration
├── main.tsx                          # React 19 DOM entrypoint
├── index.css                         # Tailwind CSS v4 theme, font definitions, and keyframes
├── components/
│   ├── InfiniteCanvas.tsx            # Hardware-accelerated pan, pinch-zoom, and spatial viewport
│   ├── BriefWorld.tsx                # 3-column brief canvas container & line-by-line reveal manager
│   ├── SavedPanel.tsx                # Saved briefs slide-out drawer with keyword search
│   ├── SettingsDrawer.tsx            # Generator configuration & AI provider settings drawer
│   ├── SprintTimer.tsx               # Design sprint timer with presets and custom duration
│   ├── DocumentationModal.tsx        # In-app user guide, provider manuals, and CORS walkthrough
│   ├── CustomDropdown.tsx            # Accessible custom dropdown component
│   ├── XLogo.tsx                     # Vector brand asset for 𝕏 / Twitter sharing
│   ├── cards/                        # Domain brief card components
│   │   ├── TopFloatingBadge.tsx      # Product name pill, platform indicator, and challenge type
│   │   ├── ProductConstraintsCard.tsx# Left panel: product description, value prop, constraints, tone
│   │   ├── TaskCard.tsx              # Center panel: task challenge, goal, interactive checklist
│   │   └── PersonaAudienceCard.tsx   # Right panel: persona profile, pain points, quote, target audience
│   └── settings/                     # Provider configuration panels
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

## Local AI & Ollama Configuration

When using local models with **Ollama** or **LM Studio**, modern browsers enforce Cross-Origin Resource Sharing (CORS). You can connect to Ollama in two ways:

### Option A: Use the Built-in Vite Proxy (Zero Config)

Set the endpoint in **Generator & AI Settings > Custom** to:
```text
/ollama/v1
```
The Vite development server automatically proxies requests to `http://localhost:11434/v1` without browser CORS restrictions.

### Option B: Enable Direct CORS on Ollama

If connecting directly to `http://localhost:11434/v1`, configure Ollama to accept browser requests:

- **Windows (Command Prompt):**
  ```cmd
  setx OLLAMA_ORIGINS "*"
  ```
  *(Restart Ollama from the system tray for the environment variable to take effect)*

- **macOS (Terminal):**
  ```bash
  launchctl setenv OLLAMA_ORIGINS "*"
  ```
  *(Restart the Ollama app)*

- **Linux (systemd):**
  ```bash
  sudo systemctl edit ollama.service
  ```
  Add the environment variable under `[Service]`:
  ```ini
  [Service]
  Environment="OLLAMA_ORIGINS=*"
  ```
  Save and reload:
  ```bash
  sudo systemctl daemon-reload
  sudo systemctl restart ollama
  ```

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Space` + Drag | Pan across the infinite canvas |
| `Ctrl` / `Cmd` + Scroll | Zoom in / Zoom out |
| `+` / `=` | Zoom in |
| `-` | Zoom out |
| `0` | Fit brief to viewport center |
| `Escape` | Close active drawer or modal (Saved briefs, Settings, Documentation) |

---

## License

MIT License. Free to use for personal skill development, design portfolios, classroom workshops, and design team practice.

---

## Author

**Md. Mushfiq Kabir** · [@mushfiqk47](https://github.com/mushfiqk47)
