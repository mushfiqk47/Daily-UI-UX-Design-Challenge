# Dailybrief — Complete User & AI Documentation

Welcome to **Dailybrief**, a high-performance, canvas-native daily UI/UX design challenge platform built for product designers, design engineers, and UX researchers.

---

## Table of Contents
1. [Core Features & How to Use the Website](#1-core-features--how-to-use-the-website)
   - [Infinite Canvas Navigation](#infinite-canvas-navigation)
   - [Generating Design Briefs](#generating-design-briefs)
   - [3-Column Brief Layout](#3-column-brief-layout)
   - [Interactive Must-Haves Checklist & Daily Streak](#interactive-must-haves-checklist--daily-streak)
   - [Sprint Timer (15m–60m + Custom)](#sprint-timer-15m60m--custom)
   - [Saving & Managing Briefs](#saving--managing-briefs)
   - [Exporting & Sharing to X (Deep Links)](#exporting--sharing-to-x-deep-links)
2. [AI Brief Generation & Providers](#2-ai-brief-generation--providers)
   - [Instant Generation (Zero Thinking Overhead)](#instant-generation-zero-thinking-overhead)
   - [Track Focus Tags (SaaS, FinTech, AI, Mobile, E-Comm, Custom)](#track-focus-tags)
   - [Provider 1: In-Browser WebGPU (100% Free & Local)](#provider-1-in-browser-webgpu-100-free--local)
   - [Provider 2: Google Gemini (Free Tier)](#provider-2-google-gemini-free-tier)
   - [Provider 3: OpenAI (GPT-4o & Mini)](#provider-3-openai-gpt-4o--mini)
   - [Provider 4: Anthropic (Claude 3.5 Haiku & Sonnet)](#provider-4-anthropic-claude-35-haiku--sonnet)
   - [Provider 5: Custom OpenAI-Compatible (Ollama, LM Studio, Groq, DeepSeek)](#provider-5-custom-openai-compatible)
3. [Keyboard Shortcuts & Power-User Tips](#3-keyboard-shortcuts--power-user-tips)

---

## 1. Core Features & How to Use the Website

### Infinite Canvas Navigation
Dailybrief runs on a hardware-accelerated spatial canvas inspired by Figma:
- **Pan / Move**: Click and drag any empty area of the canvas, or hold `Space` + drag. On touchscreens, use a single-finger swipe.
- **Zoom**: Scroll your mouse wheel or use `Ctrl` / `Cmd` + scroll. Two-finger pinch-to-zoom is supported on touchpads and mobile screens.
- **Zoom Controls**: Use the floating pill in the bottom-right corner:
  - `-` Zoom out (minimum 85%).
  - `+` Zoom in (maximum 200%).
  - `[ ]` Fit to screen (centers the 3-column brief perfectly in your viewport).

### Generating Design Briefs
At the bottom center of the screen, tap the prominent **Generate brief** button:
- **Offline / Built-in Mode** (When AI is disabled): Cycles through **82 curated enterprise-grade briefs** across 48 industries (FinTech, B2B SaaS, HealthTech, AI, Logistics, Climate, E-Commerce).
- **AI Mode** (When AI is enabled in Settings): Synthesizes an infinite stream of brand-new, non-repetitive UI/UX design briefs tailored to your selected track tag.
- **Animated Skeleton Preview**: While generating, the viewport smoothly displays an interactive 3-column skeleton placeholder with matching dimensions to prevent layout shifts.

### 3-Column Brief Layout
Every challenge is organized into three scannable panels:
1. **Left Panel — Product & Constraints**:
   - Product Name, Industry, Description, and Core Value Proposition.
   - Real-world Design Constraints (WCAG accessibility, mobile touch targets, design system constraints).
   - Visual Tone direction (e.g. *Sturdy & neighborly*, *Precise & institutional*).
2. **Middle Panel — Task & Success Criteria**:
   - Primary Deliverable (e.g., *Batch Wire Verification modal*, *NDVI Drone Crop Map*).
   - Target Platform (*Desktop* or *Mobile*).
   - Measurable UX Goal and Success Criteria.
   - Interactive **Must-Have Elements & States Checklist** (empty states, errors, loading, edge cases).
3. **Right Panel — User Persona & Target Audience**:
   - Persona Profile (Name, Age, Exact Job Role).
   - Core Goals and Specific Daily Pain Points.
   - Real conversational user quote.
   - Target Audience Segment and behavioral context of use.

### Interactive Must-Haves Checklist & Daily Streak
- Check off each required UI element as you design it in Figma, Penpot, or code.
- Checking off all items marks the daily challenge complete and advances your **Daily Habit Streak** (tracked in the top-left corner).
- Streaks persist in your browser's local storage across sessions.

### Sprint Timer (15m–60m + Custom)
Located right beside the zoom controls in the bottom-right:
- Practice rapid time-boxed design sprints (ideal for portfolio case studies and whiteboarding interviews).
- **Presets**: Tap the timer numbers to open quick presets for **15m**, **30m**, **45m** (default), or **60m**.
- **Custom Timer**: Enter any duration from 1 to 180 minutes.
- **Controls**: One-tap Play/Pause and Reset buttons.

### Saving & Managing Briefs
- Click the **Bookmark** icon in the top-right toolbar to open the **Saved Briefs Drawer**.
- Save briefs you want to revisit on slower days or build full portfolio case studies around.
- Track completed vs. in-progress saved challenges with persistent tags.

### Exporting & Sharing to X (Deep Links)
- **Download Markdown**: Tap the Download icon in the top-right toolbar to save the brief as a structured `.md` file for your Obsidian, Notion, or GitHub repository.
- **Copy as Markdown**: Tap the Copy icon to copy the entire formatted brief directly to your clipboard.
- **Share on 𝕏 (Twitter)**: Tap the **𝕏** button in the top-right toolbar:
  - Automatically copies the deep link to the current brief (`?date=...&roll=...`) to your clipboard.
  - Automatically opens 𝕏 with a pre-formatted post showcasing the challenge number, deliverable, and product name.
  - Anyone who clicks your link lands on the exact same challenge!

---

## 2. AI Brief Generation & Providers

Open **Generator & AI Settings** by clicking the sliders icon in the top-right toolbar.

### Instant Generation (Zero Thinking Overhead)
All AI models are instructed to output direct, clean JSON without thinking tokens or filler prose, ensuring instantaneous brief synthesis.

### Track Focus Tags
Select your focus area right below the settings header:
- **All**: Generates across all product sectors.
- **SaaS**: B2B platforms, enterprise observability, developer tools, workflows.
- **Fintech**: Neobanks, treasury, invoicing, crypto/DeFi, algorithmic trading.
- **AI**: Prompt engineering, vector search, synthetic data, autonomous agents.
- **Mobile**: Touch-first responsive designs, iOS/Android native conventions.
- **E-Comm**: Micro-warehouses, circular resale, 3D parametric configurators.
- **+ Custom**: Type any custom industry or topic (e.g., *Aerospace, Music Production, LegalTech*).

---

### Provider 1: In-Browser WebGPU (100% Free & Local)
Run frontier open-weight models directly inside your web browser using WebGPU hardware acceleration.
- **100% Free**: No API keys, no subscriptions, no credit card required.
- **100% Private & Offline**: Model weights are stored in your browser's IndexedDB cache. Once downloaded, you can generate briefs on an airplane with Wi-Fi disabled!
- **Available Models**:
  - `Qwen 3.5 0.8B` (*Recommended*): ~500 MB download. Sub-second generation with crisp design reasoning.
  - `Qwen 2.5 0.5B Instruct`: ~350 MB download. Ultra-lightweight footprint for laptops and integrated graphics.
  - `Qwen 2.5 1.5B Instruct`: ~950 MB download. Higher depth and nuanced persona generation.
- **VRAM Management**:
  - Click **Download & Cache** to preload model weights into VRAM.
  - Click the **Eject** icon anytime to unload the model from memory and free your GPU.

---

### Provider 2: Google Gemini (Free Tier)
- **Model**: `gemini-2.0-flash` (or custom).
- **Speed**: Lightning-fast sub-second generation.
- **Cost**: 100% free under Google AI Studio's free tier (up to 15 requests per minute).
- **Setup**:
  1. Visit [aistudio.google.com](https://aistudio.google.com/) and create a free API key.
  2. Paste your API key into the Gemini field.
  3. Click **Check & Fetch Models** to test connectivity and load available model versions.

---

### Provider 3: OpenAI
- **Models**: `gpt-4o-mini`, `gpt-4o`, or custom models (e.g., `o3-mini`).
- **Setup**:
  1. Paste your OpenAI API key (`sk-...`).
  2. Optional: Supply a custom Base URL for enterprise proxies, Cloudflare AI Gateway, or Helicone.
  3. Click **Check & Fetch Models** to retrieve your account's accessible model list.

---

### Provider 4: Anthropic (Claude)
- **Models**: `claude-3-5-haiku-20241022`, `claude-3-5-sonnet-20241022`, or custom models.
- **Setup**:
  1. Paste your Anthropic API key (`sk-ant-...`).
  2. Optional: Set a custom proxy URL if using AWS Bedrock, GCP Vertex, or a corporate gateway.
  3. Click **Check & Fetch Models** to verify connectivity.

---

### Provider 5: Custom OpenAI-Compatible (Ollama, LM Studio, Groq, DeepSeek)
Connect to any local or remote OpenAI-compatible endpoint.
- **Local Ollama**:
  - Endpoint: `http://localhost:11434/v1`
  - Leave API Key empty.
  - Click **Fetch Local Models** to auto-populate all models installed on your machine (`qwen2.5`, `llama3.3`, `deepseek-r1`, `mistral`).
- **Cloud Providers**:
  - **Groq**: Base URL `https://api.groq.com/openai/v1`, Model `llama-3.3-70b-versatile`.
  - **OpenRouter**: Base URL `https://openrouter.ai/api/v1`.
  - **DeepSeek**: Base URL `https://api.deepseek.com/v1`, Model `deepseek-chat`.

---

#### ⚠️ Important: Fixing Ollama CORS (Cross-Origin Resource Sharing) Issue

By default, web browsers block web applications from making network calls to local ports (`http://localhost:11434`) due to browser CORS security restrictions. To allow Dailybrief to communicate with your local Ollama instance, you must configure the `OLLAMA_ORIGINS` environment variable to allow origins (`*`).

Run the command for your operating system in your shell, terminal, or command prompt:

##### 1. Windows (Command Prompt / CMD)

- **Command Prompt (CMD)**:
  ```cmd
  set OLLAMA_ORIGINS=* && ollama serve
  ```

- **Permanent Windows Configuration (No need to run every time)**:
  Run in Command Prompt:
  ```cmd
  setx OLLAMA_ORIGINS "*"
  ```
  *(Then right-click the Ollama icon in your Windows Taskbar tray, click **Quit**, and re-launch Ollama).*

##### 2. macOS

- **Terminal (Shell / zsh)**:
  ```bash
  OLLAMA_ORIGINS="*" ollama serve
  ```

- **Permanent Configuration for Ollama macOS GUI App**:
  Run in Terminal:
  ```bash
  launchctl setenv OLLAMA_ORIGINS "*"
  ```
  *(Then quit and restart the Ollama app from your Applications menu or status bar).*

##### 3. Linux

- **Terminal (Direct command)**:
  ```bash
  OLLAMA_ORIGINS="*" ollama serve
  ```

- **Permanent systemd Service Configuration**:
  1. Open the systemd service editor:
     ```bash
     sudo systemctl edit ollama.service
     ```
  2. In the `[Service]` block, add:
     ```ini
     [Service]
     Environment="OLLAMA_ORIGINS=*"
     ```
  3. Reload systemd and restart Ollama:
     ```bash
     sudo systemctl daemon-reload && sudo systemctl restart ollama
     ```

---

---

## 3. Keyboard Shortcuts & Power-User Tips

| Shortcut | Action |
| :--- | :--- |
| **Drag Canvas** | Pan viewport |
| **Space + Drag** | Pan viewport (standard design tool convention) |
| **Ctrl / ⌘ + Scroll** | Zoom in / Zoom out centered on cursor |
| **Esc** | Close any open drawer or modal |
| **Deep Link URLs** | Add `?date=YYYY-MM-DD&roll=N` to share exact briefs with colleagues |

---

*Sharpening design skills daily.*
