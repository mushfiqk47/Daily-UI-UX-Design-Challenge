import { useState } from "react"
import {
  X,
  BookOpen,
  Cpu,
  Zap,
  Globe,
  Share2,
  Bookmark,
  Clock,
  Layers,
  Key,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  Terminal,
  Copy,
  Check,
} from "lucide-react"

interface DocumentationModalProps {
  open: boolean
  onClose: () => void
}

type DocTab = "website" | "ai" | "shortcuts"
type OsChoice = "win-cmd" | "mac" | "linux"

const OLLAMA_CORS_GUIDE: Record<OsChoice, {
  label: string
  sublabel: string
  command: string
  permanent?: string
  notes: string
}> = {
  "win-cmd": {
    label: "Windows (CMD)",
    sublabel: "Run in Command Prompt (CMD)",
    command: "set OLLAMA_ORIGINS=* && ollama serve",
    permanent: 'setx OLLAMA_ORIGINS "*"',
    notes:
      "Quit Ollama from the Windows taskbar tray before running, then re-launch Ollama.",
  },
  mac: {
    label: "macOS (Terminal / zsh)",
    sublabel: "Run in Terminal",
    command: 'OLLAMA_ORIGINS="*" ollama serve',
    permanent: 'launchctl setenv OLLAMA_ORIGINS "*"',
    notes:
      "For the macOS menu bar app, run the permanent launchctl command, quit Ollama, and restart it.",
  },
  linux: {
    label: "Linux (Terminal / systemd)",
    sublabel: "Run in Bash or systemd",
    command: 'OLLAMA_ORIGINS="*" ollama serve',
    permanent:
      'sudo systemctl edit ollama.service\n# Add: Environment="OLLAMA_ORIGINS=*" under [Service]\nsudo systemctl daemon-reload && sudo systemctl restart ollama',
    notes:
      "If using the systemd service, edit the service file to persist the setting across reboots.",
  },
}

export function DocumentationModal({ open, onClose }: DocumentationModalProps) {
  const [activeTab, setActiveTab] = useState<DocTab>("website")
  const [selectedOs, setSelectedOs] = useState<OsChoice>("win-cmd")
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 2000)
    } catch {
      // fallback
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Documentation & AI Guide"
    >
      {/* Backdrop */}
      <button
        aria-label="Close documentation"
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative flex max-h-[88vh] w-full max-w-2xl flex-col rounded-[24px] border border-hairline bg-white shadow-2xl animate-rise overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-hairline px-6 py-4 bg-surface/30">
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent">
              <BookOpen className="size-4.5" />
            </div>
            <div>
              <h2 className="font-sora text-[17px] font-bold text-ink">
                Documentation & AI Guide
              </h2>
              <p className="text-[12px] text-steel">
                Everything you need to master Dailybrief & AI generation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="grid size-8 place-items-center rounded-lg text-steel hover:bg-surface hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex border-b border-hairline bg-surface/20 px-6 gap-2 pt-2">
          {[
            {
              id: "website" as DocTab,
              label: "How to Use Website",
              icon: Globe,
            },
            { id: "ai" as DocTab, label: "AI Models & Setup", icon: Cpu },
            {
              id: "shortcuts" as DocTab,
              label: "Shortcuts & Power Tips",
              icon: Key,
            },
          ].map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 border-b-2 px-3 py-2 text-[12.5px] font-medium transition-all ${
                  active
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-steel hover:text-ink"
                }`}
              >
                <Icon className="size-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-[13px] leading-relaxed text-charcoal">
          {activeTab === "website" && (
            <div className="space-y-6 animate-rise">
              {/* Section 1: Infinite Canvas */}
              <div>
                <h3 className="font-sora text-[15px] font-semibold text-ink flex items-center gap-2 mb-2">
                  <Layers className="size-4 text-accent" />
                  Infinite Canvas Navigation
                </h3>
                <p className="text-steel text-[12.5px] mb-3">
                  Dailybrief operates on a spatial canvas inspired by Figma,
                  letting you freely pan and zoom around your daily challenges
                  without rigid page confines.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px]">
                  <div className="rounded-xl border border-hairline p-3 bg-surface/40">
                    <span className="font-semibold text-ink block mb-0.5">
                      Pan Viewport
                    </span>
                    <span className="text-steel">
                      Drag any empty canvas area, hold{" "}
                      <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-hairline text-ink">
                        Space
                      </kbd>{" "}
                      + drag, or swipe on touch screens.
                    </span>
                  </div>
                  <div className="rounded-xl border border-hairline p-3 bg-surface/40">
                    <span className="font-semibold text-ink block mb-0.5">
                      Smooth Zoom
                    </span>
                    <span className="text-steel">
                      Scroll mouse wheel, pinch on touchpads, or use
                      bottom-right pill (+ / - / Fit to screen).
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 2: 3-Column Brief Layout */}
              <div>
                <h3 className="font-sora text-[15px] font-semibold text-ink flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-4 text-accent" />
                  3-Column Brief Architecture
                </h3>
                <p className="text-steel text-[12.5px] mb-3">
                  Every challenge is structured into 3 scannable columns
                  mirroring professional product design sprints:
                </p>
                <ul className="space-y-2 text-[12.5px]">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">
                      1. Product & Constraints:
                    </span>
                    <span>
                      Industry, core value proposition, WCAG accessibility
                      rules, and visual tone guidelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">
                      2. Task & Must-Haves:
                    </span>
                    <span>
                      Primary deliverable, screen goal, and an interactive
                      5-item state checklist (empty states, errors, loading).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">
                      3. User Persona & Audience:
                    </span>
                    <span>
                      Target user role, age, real conversational quote, pain
                      points, and usage context.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Sprint Timer & Streak */}
              <div>
                <h3 className="font-sora text-[15px] font-semibold text-ink flex items-center gap-2 mb-2">
                  <Clock className="size-4 text-accent" />
                  Sprint Timer & Daily Habit Streak
                </h3>
                <p className="text-steel text-[12.5px]">
                  Located next to the zoom controls. Tap the timer numbers to
                  toggle presets for <strong>15m</strong>, <strong>30m</strong>,{" "}
                  <strong>45m</strong>, or <strong>60m</strong> (or enter custom
                  minutes). Checking off all must-have items completes your
                  challenge and advances your daily habit streak.
                </p>
              </div>

              {/* Section 4: Exporting & Sharing */}
              <div>
                <h3 className="font-sora text-[15px] font-semibold text-ink flex items-center gap-2 mb-2">
                  <Share2 className="size-4 text-accent" />
                  Exporting & Deep-Linked 𝕏 Sharing
                </h3>
                <p className="text-steel text-[12.5px] leading-relaxed">
                  Use the top-right toolbar to download clean Markdown (
                  <code className="font-mono text-ink">.md</code>) for your
                  portfolio notes. Clicking the <strong>𝕏</strong> button copies
                  the challenge URL with deep-link parameters (
                  <code className="font-mono text-ink">?date=...&roll=...</code>
                  ) directly to your clipboard and opens Twitter ready to post.
                </p>
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="space-y-6 animate-rise">
              <div className="rounded-xl bg-accent/5 border border-accent/20 p-3.5 text-[12px] text-steel">
                <span className="font-semibold text-ink block mb-0.5">
                  Instant Instruct Generation (Zero Thinking Overhead)
                </span>
                All AI providers are instructed to output direct structured JSON
                payloads without thinking tokens, ensuring sub-second response
                times and immediate UI brief rendering.
              </div>

              {/* WebGPU */}
              <div className="border border-hairline rounded-xl p-4 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="size-4 text-accent" />
                    <h4 className="font-sora font-semibold text-ink text-[13.5px]">
                      WebGPU (100% Free & Local)
                    </h4>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                    No API Key Needed
                  </span>
                </div>
                <p className="text-steel text-[12px]">
                  Runs local open-weight models directly in your browser using
                  GPU VRAM. Model weights are cached locally in your browser
                  storage and work 100% offline.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px] pt-1">
                  <div className="bg-surface rounded-lg p-2">
                    <span className="font-bold text-ink block">
                      Qwen 3.5 0.8B
                    </span>
                    <span className="text-steel">
                      Recommended (~500MB). Instant instruct brief generation.
                    </span>
                  </div>
                  <div className="bg-surface rounded-lg p-2">
                    <span className="font-bold text-ink block">
                      Qwen 2.5 0.5B
                    </span>
                    <span className="text-steel">
                      Ultra-light (~350MB). Fastest on laptop integrated GPUs.
                    </span>
                  </div>
                  <div className="bg-surface rounded-lg p-2">
                    <span className="font-bold text-ink block">
                      Qwen 2.5 1.5B
                    </span>
                    <span className="text-steel">
                      High-fidelity (~950MB). Deeper persona nuance.
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Gemini */}
              <div className="border border-hairline rounded-xl p-4 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="size-4 text-accent" />
                    <h4 className="font-sora font-semibold text-ink text-[13.5px]">
                      Google Gemini (Free Tier)
                    </h4>
                  </div>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800">
                    Sub-second Cloud API
                  </span>
                </div>
                <p className="text-steel text-[12px]">
                  Uses{" "}
                  <code className="font-mono text-ink">gemini-2.0-flash</code>{" "}
                  for rapid brief synthesis. Free under Google AI Studio (up to
                  15 requests/min).
                </p>
                <a
                  href="https://aistudio.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11.5px] text-accent font-semibold hover:underline"
                >
                  <span>Get Free Gemini API Key at Google AI Studio</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              {/* OpenAI & Claude */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-hairline rounded-xl p-3.5 bg-white space-y-1.5">
                  <h4 className="font-sora font-semibold text-ink text-[13px]">
                    OpenAI
                  </h4>
                  <p className="text-steel text-[11.5px]">
                    Supports{" "}
                    <code className="font-mono text-ink">gpt-4o-mini</code> and{" "}
                    <code className="font-mono text-ink">gpt-4o</code>. Enter
                    your <code className="font-mono text-ink">sk-...</code> key
                    or custom model identifier.
                  </p>
                </div>
                <div className="border border-hairline rounded-xl p-3.5 bg-white space-y-1.5">
                  <h4 className="font-sora font-semibold text-ink text-[13px]">
                    Claude (Anthropic)
                  </h4>
                  <p className="text-steel text-[11.5px]">
                    Supports{" "}
                    <code className="font-mono text-ink">claude-3-5-haiku</code>{" "}
                    and Sonnet. Supports custom base URLs for enterprise
                    gateways.
                  </p>
                </div>
              </div>

              {/* Custom / Ollama */}
              <div className="border border-hairline rounded-xl p-4 bg-white space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="size-4 text-accent" />
                    <h4 className="font-sora font-semibold text-ink text-[13.5px]">
                      Custom Endpoints (Ollama, LM Studio, Groq)
                    </h4>
                  </div>
                  <span className="text-[11px] text-steel">
                    OpenAI-Compatible
                  </span>
                </div>
                <p className="text-steel text-[12px]">
                  Connect to local models via{" "}
                  <code className="font-mono text-ink">
                    http://localhost:11434/v1
                  </code>
                  . Tap <strong>Fetch Local Models</strong> to discover and
                  select any model installed on your machine.
                </p>

                {/* Ollama CORS Warning & Multi-OS Commands Box */}
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 space-y-3">
                  <div className="flex items-start gap-2 text-amber-900">
                    <AlertTriangle className="size-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-sora text-[12.5px] font-bold text-amber-950">
                        Ollama Browser CORS Issue & Terminal Fix
                      </h5>
                      <p className="text-[11.5px] text-amber-800 leading-relaxed mt-0.5">
                        By default, web browsers block web apps from reaching
                        local ports (
                        <code className="font-mono text-amber-950 bg-amber-100/80 px-1 rounded">
                          localhost:11434
                        </code>
                        ) due to CORS security rules. You must set{" "}
                        <code className="font-mono font-bold text-amber-950">
                          OLLAMA_ORIGINS="*"
                        </code>{" "}
                        in your shell, CMD, or terminal before starting Ollama:
                      </p>
                    </div>
                  </div>

                  {/* OS Tabs */}
                  <div className="flex flex-wrap gap-1.5 pt-1 border-t border-amber-200/60">
                    {([
                      { id: "win-cmd" as OsChoice, label: "Windows (CMD)" },
                      { id: "mac" as OsChoice, label: "macOS (Terminal)" },
                      { id: "linux" as OsChoice, label: "Linux (Terminal)" },
                    ] as const).map((os) => {
                      const active = selectedOs === os.id
                      return (
                        <button
                          key={os.id}
                          onClick={() => setSelectedOs(os.id)}
                          className={`rounded-lg px-2.5 py-1 text-[11.5px] font-medium transition-all ${
                            active
                              ? "bg-amber-600 text-white shadow-xs font-semibold"
                              : "bg-white/80 text-amber-900 hover:bg-white border border-amber-200"
                          }`}
                        >
                          {os.label}
                        </button>
                      )
                    })}
                  </div>

                  {/* Active OS Command Panel */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-amber-900">
                      <span className="font-medium flex items-center gap-1.5">
                        <Terminal className="size-3 text-amber-700" />
                        {OLLAMA_CORS_GUIDE[selectedOs].sublabel}:
                      </span>
                      <span className="text-[10.5px] text-amber-700">
                        One-time launch
                      </span>
                    </div>

                    <div className="relative group">
                      <pre className="overflow-x-auto rounded-lg bg-[#18181b] p-2.5 text-[11.5px] font-mono text-amber-200 leading-snug border border-stone-800">
                        {OLLAMA_CORS_GUIDE[selectedOs].command}
                      </pre>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            OLLAMA_CORS_GUIDE[selectedOs].command,
                            `cmd-${selectedOs}`,
                          )
                        }
                        className="absolute right-1.5 top-1.5 flex items-center gap-1 rounded bg-stone-800/90 hover:bg-stone-700 px-2 py-0.5 text-[10.5px] font-medium text-stone-200 transition-colors"
                      >
                        {copiedKey === `cmd-${selectedOs}` ? (
                          <>
                            <Check className="size-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {OLLAMA_CORS_GUIDE[selectedOs].permanent && (
                      <div className="pt-1 space-y-1">
                        <div className="flex items-center justify-between text-[10.5px] text-amber-800">
                          <span className="font-semibold">
                            Permanent System-Wide Setting:
                          </span>
                        </div>
                        <div className="relative group">
                          <pre className="overflow-x-auto rounded-lg bg-[#27272a] p-2 text-[10.5px] font-mono text-stone-200 leading-snug border border-stone-700">
                            {OLLAMA_CORS_GUIDE[selectedOs].permanent}
                          </pre>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                OLLAMA_CORS_GUIDE[selectedOs].permanent!,
                                `perm-${selectedOs}`,
                              )
                            }
                            className="absolute right-1.5 top-1.5 flex items-center gap-1 rounded bg-stone-700 hover:bg-stone-600 px-1.5 py-0.5 text-[10px] font-medium text-stone-200 transition-colors"
                          >
                            {copiedKey === `perm-${selectedOs}` ? (
                              <>
                                <Check className="size-2.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="size-2.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    <p className="text-[11px] text-amber-800 italic pt-0.5">
                      💡 {OLLAMA_CORS_GUIDE[selectedOs].notes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "shortcuts" && (
            <div className="space-y-4 animate-rise">
              <h3 className="font-sora text-[15px] font-semibold text-ink mb-1">
                Keyboard Shortcuts & Interaction Guide
              </h3>
              <div className="overflow-hidden rounded-xl border border-hairline divide-y divide-hairline">
                {[
                  {
                    key: "Drag canvas",
                    action: "Pan the infinite viewport freely",
                  },
                  {
                    key: "Space + Drag",
                    action: "Standard design tool viewport pan",
                  },
                  {
                    key: "Mouse Wheel",
                    action: "Zoom in and out centered on cursor",
                  },
                  { key: "Ctrl / ⌘ + Wheel", action: "Precise zoom scaling" },
                  {
                    key: "Fit to Screen [ ]",
                    action: "Recenter and scale 3-column brief to viewport",
                  },
                  {
                    key: "Esc",
                    action:
                      "Close settings drawer, saved panel, or documentation",
                  },
                  {
                    key: "?date=...&roll=N",
                    action: "Share exact challenge state via URL query params",
                  },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-4 py-2.5 text-[12.5px] bg-white"
                  >
                    <span className="text-steel">{s.action}</span>
                    <kbd className="font-mono text-[11.5px] bg-surface px-2 py-0.5 rounded border border-hairline text-ink font-semibold">
                      {s.key}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-hairline px-6 py-3 bg-surface/30 flex items-center justify-between">
          <span className="text-[11px] text-steel">
            Full markdown available in{" "}
            <code className="font-mono text-ink font-medium">
              DOCUMENTATION.md
            </code>
          </span>
          <button
            onClick={onClose}
            className="rounded-lg bg-ink px-4 py-1.5 text-[12px] font-semibold text-white shadow-xs hover:bg-charcoal active:scale-95 transition-all"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  )
}
