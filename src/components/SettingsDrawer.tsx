import { useState, useEffect } from "react"
import { Check, Plus, SlidersHorizontal, X } from "lucide-react"
import {
  DEFAULT_AI_SETTINGS,
  type AiProvider,
  type AiSettings,
  isWebGpuSupported,
  loadWebGpuModel,
  unloadWebGpuModel,
  subscribeWebGpu,
  type WebGpuModelState,
  type WebGpuProgress,
} from "../lib/ai"
import type { DropdownOption } from "./CustomDropdown"
import { DocumentationModal } from "./DocumentationModal"
import { WebGpuSection } from "./settings/WebGpuSection"
import { OpenAiSection } from "./settings/OpenAiSection"
import { AnthropicSection } from "./settings/AnthropicSection"
import { GeminiSection } from "./settings/GeminiSection"
import { CustomEndpointSection } from "./settings/CustomEndpointSection"

interface SettingsDrawerProps {
  open: boolean
  onClose: () => void
  settings: AiSettings
  onSave: (newSettings: AiSettings) => void
  onToast: (msg: string) => void
  activeTag: string
  onSelectTag: (tag: string) => void
  customTag: string
  onSetCustomTag: (tag: string) => void
}

export function SettingsDrawer({
  open,
  onClose,
  settings,
  onSave,
  onToast,
  activeTag,
  onSelectTag,
  customTag,
  onSetCustomTag,
}: SettingsDrawerProps) {
  const [local, setLocal] = useState<AiSettings>(() => ({
    ...DEFAULT_AI_SETTINGS,
    ...settings,
  }))
  const [isEditingCustomTag, setIsEditingCustomTag] = useState(false)
  const [customTagInput, setCustomTagInput] = useState("")
  const [showKey, setShowKey] = useState(false)
  const [gpuStatus, setGpuStatus] =
    useState<"checking" | "supported" | "unsupported" | null>(null)
  const [modelState, setModelState] = useState<WebGpuModelState>("idle")
  const [progress, setProgress] = useState<WebGpuProgress>({
    progress: 0,
    text: "",
  })

  // Connection checking & dynamic model fetching
  const [testStatus, setTestStatus] = useState<Record<string, {
    loading: boolean
    ok?: boolean
    msg?: string
  }>>({})
  const [dynamicModels, setDynamicModels] =
    useState<Record<string, DropdownOption[]>>({})
  const [showDocs, setShowDocs] = useState(false)

  useEffect(() => {
    setLocal((prev) => {
      const merged = {
        ...DEFAULT_AI_SETTINGS,
        ...prev,
        ...settings,
      }
      if (merged.provider as string === "auto") {
        merged.provider = "webgpu"
      }
      if (merged.webgpuModel === "custom") {
        merged.webgpuModel = "Qwen3.5-0.8B-q4f16_1-MLC"
      }
      return merged
    })
  }, [settings])

  useEffect(() => {
    return subscribeWebGpu((state, prog) => {
      setModelState(state)
      setProgress(prog)
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  const update = <K extends keyof AiSettings>(key: K, value: AiSettings[K]) => {
    const next = { ...local, [key]: value }
    setLocal(next)
    onSave(next)
  }

  const checkGpu = async () => {
    setGpuStatus("checking")
    const supported = await isWebGpuSupported()
    setGpuStatus(supported ? "supported" : "unsupported")
    if (supported) {
      onToast("WebGPU is supported & ready on your device!")
    } else {
      onToast("WebGPU not detected. Check browser hardware acceleration.")
    }
  }

  const handleDownloadLoad = async () => {
    try {
      const modelName = local.webgpuModel || "Qwen3.5-0.8B-q4f16_1-MLC"
      await loadWebGpuModel(modelName)
      onToast("Model loaded into GPU VRAM successfully!")
    } catch (e: any) {
      onToast(e?.message || "Failed to load model on WebGPU")
    }
  }

  const handleEject = async () => {
    try {
      await unloadWebGpuModel()
      onToast("Model offloaded from GPU and RAM")
    } catch {
      onToast("Failed to unload model")
    }
  }

  const handleCheckConnection = async (provider: AiProvider) => {
    setTestStatus((prev) => ({
      ...prev,
      [provider]: { loading: true, msg: "Connecting..." },
    }))

    try {
      if (provider === "anthropic") {
        if (!local.anthropicApiKey?.trim()) {
          throw new Error("Enter an Anthropic API key first")
        }
        const baseUrl =
          local.anthropicBaseUrl?.replace(/\/$/, "") ||
          "https://api.anthropic.com"
        const res = await fetch(`${baseUrl}/v1/models`, {
          method: "GET",
          headers: {
            "x-api-key": local.anthropicApiKey.trim(),
            "anthropic-version": "2023-06-01",
            "dangerously-allow-browser": "true",
          },
        })
        if (!res.ok) {
          const err = await res.text()
          throw new Error(`Claude error (${res.status}): ${err.slice(0, 100)}`)
        }
        const json = await res.json()
        const list = Array.isArray(json.data) ? json.data : []
        const parsed: DropdownOption[] = list.map((m: any) => ({
          value: m.id,
          label: m.display_name || m.id,
          badge: m.id.includes("haiku")
            ? "Fast"
            : m.id.includes("sonnet")
              ? "Pro"
              : "Claude",
          description: `Anthropic Model ${m.id}`,
        }))
        if (parsed.length > 0) {
          setDynamicModels((prev) => ({ ...prev, anthropic: parsed }))
        }
        setTestStatus((prev) => ({
          ...prev,
          [provider]: {
            loading: false,
            ok: true,
            msg: `Connected! ${parsed.length} models fetched.`,
          },
        }))
        onToast(`Claude connected (${parsed.length} models found)`)
      } else if (provider === "openai") {
        if (!local.openaiApiKey?.trim()) {
          throw new Error("Enter an OpenAI API key first")
        }
        const baseUrl =
          local.openaiBaseUrl?.replace(/\/$/, "") || "https://api.openai.com/v1"
        const res = await fetch(`${baseUrl}/models`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${local.openaiApiKey.trim()}`,
          },
        })
        if (!res.ok) {
          const err = await res.text()
          throw new Error(`OpenAI error (${res.status}): ${err.slice(0, 100)}`)
        }
        const json = await res.json()
        const list = Array.isArray(json.data) ? json.data : []
        const parsed: DropdownOption[] = list
          .filter((m: any) => /^(gpt|chatgpt|o1|o3|o4)/i.test(m.id))
          .map((m: any) => ({
            value: m.id,
            label: m.id,
            badge: m.id.includes("mini") ? "Fast" : undefined,
            description: `OpenAI ${m.id}`,
          }))
        if (parsed.length > 0) {
          setDynamicModels((prev) => ({ ...prev, openai: parsed }))
        }
        setTestStatus((prev) => ({
          ...prev,
          [provider]: {
            loading: false,
            ok: true,
            msg: `Connected! ${parsed.length} models fetched.`,
          },
        }))
        onToast(`OpenAI connected (${parsed.length} models found)`)
      } else if (provider === "gemini") {
        if (!local.geminiApiKey?.trim()) {
          throw new Error("Enter a Google AI Studio API key first")
        }
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models?key=${local.geminiApiKey.trim()}`,
        )
        if (!res.ok) {
          const err = await res.text()
          throw new Error(`Gemini error (${res.status}): ${err.slice(0, 100)}`)
        }
        const json = await res.json()
        const list = Array.isArray(json.models) ? json.models : []
        const parsed: DropdownOption[] = list
          .filter((m: any) =>
            m.supportedGenerationMethods?.includes("generateContent"),
          )
          .map((m: any) => {
            const cleanId = m.name.replace(/^models\//, "")
            return {
              value: cleanId,
              label: m.displayName || cleanId,
              badge: cleanId.includes("flash") ? "Flash" : "Pro",
              description: `Gemini ${cleanId}`,
            }
          })
        if (parsed.length > 0) {
          setDynamicModels((prev) => ({ ...prev, gemini: parsed }))
        }
        setTestStatus((prev) => ({
          ...prev,
          [provider]: {
            loading: false,
            ok: true,
            msg: `Connected! ${parsed.length} models fetched.`,
          },
        }))
        onToast(`Gemini connected (${parsed.length} models found)`)
      } else if (provider === "custom") {
        const baseUrl =
          local.customBaseUrl?.replace(/\/$/, "") || "http://localhost:11434/v1"
        const headers: Record<string, string> = {}
        if (local.customApiKey) {
          headers.Authorization = `Bearer ${local.customApiKey.trim()}`
        }
        let res: Response
        try {
          res = await fetch(`${baseUrl}/models`, { headers })
        } catch (fetchErr: any) {
          if (
            baseUrl.includes("localhost:11434") ||
            baseUrl.includes("127.0.0.1:11434")
          ) {
            const proxyUrl = baseUrl.replace(
              /https?:\/\/(localhost|127\.0\.0\.1):11434/,
              "/ollama",
            )
            try {
              res = await fetch(`${proxyUrl}/models`, { headers })
              update("customBaseUrl", proxyUrl)
            } catch {
              throw new Error(
                'Ollama CORS blocked. Run: setx OLLAMA_ORIGINS "*" in terminal & restart Ollama, or use "/ollama/v1"',
              )
            }
          } else {
            throw fetchErr
          }
        }
        if (!res.ok) {
          const err = await res.text()
          throw new Error(
            `Endpoint error (${res.status}): ${err.slice(0, 100)}`,
          )
        }
        const json = await res.json()
        const list = Array.isArray(json.data) ? json.data : []
        const parsed: DropdownOption[] = list.map((m: any) => ({
          value: m.id,
          label: m.id,
          description: `Custom model ${m.id}`,
        }))
        if (parsed.length > 0) {
          setDynamicModels((prev) => ({ ...prev, custom: parsed }))
        }
        setTestStatus((prev) => ({
          ...prev,
          [provider]: {
            loading: false,
            ok: true,
            msg: `Connected! ${parsed.length} models found.`,
          },
        }))
        onToast(`Endpoint connected (${parsed.length} models found)`)
      }
    } catch (err: any) {
      setTestStatus((prev) => ({
        ...prev,
        [provider]: {
          loading: false,
          ok: false,
          msg: err?.message || "Connection failed",
        },
      }))
      onToast(err?.message || "Connection failed")
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Generator and AI Settings"
    >
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/25 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />

      <div className="animate-rise relative flex h-full w-full max-w-[410px] flex-col border-l border-hairline bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid size-7 place-items-center rounded-lg bg-surface">
              <SlidersHorizontal className="size-3.5 text-accent" />
            </div>
            <div>
              <h2 className="font-sora text-[15px] font-bold text-ink leading-tight">
                Generator & AI Settings
              </h2>
              <p className="font-inter text-[11.5px] text-slate">
                Configure brief synthesis & local/remote models
              </p>
            </div>
          </div>
          <button
            aria-label="Close settings"
            onClick={onClose}
            className="grid size-7 place-items-center rounded-full border border-hairline hover:bg-surface active:bg-hairline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="size-3.5" />
          </button>
        </div>

        <div className="border-b border-hairline px-4 py-2.5 bg-surface/30 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-sora text-[11px] font-semibold text-slate uppercase tracking-wider">
              Track Focus
            </span>
            {activeTag && (
              <span className="text-[11px] font-medium text-accent">
                Active: {activeTag}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {["All", "SaaS", "Fintech", "AI", "Mobile", "E-Comm"].map((t) => {
              const active =
                (t === "All" && !activeTag && !customTag) || activeTag === t
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    if (t === "All") {
                      onSelectTag("")
                    } else {
                      onSelectTag(t)
                    }
                  }}
                  className={`rounded-full px-3 py-1 min-h-[32px] text-[11.5px] font-medium transition-all ${
                    active
                      ? "bg-ink text-white shadow-xs"
                      : "bg-white text-slate border border-hairline hover:bg-surface hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              )
            })}

            {customTag ? (
              <button
                type="button"
                onClick={() => onSelectTag(customTag)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 min-h-[32px] text-[11.5px] font-medium transition-all ${
                  activeTag === customTag
                    ? "bg-accent text-white shadow-xs"
                    : "bg-surface text-ink hover:bg-hairline border border-hairline"
                }`}
              >
                <span>{customTag}</span>
                <span
                  role="button"
                  aria-label="Remove custom tag"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (activeTag === customTag) onSelectTag("")
                    onSetCustomTag("")
                  }}
                  className="hover:text-black opacity-60 hover:opacity-100"
                >
                  <X className="size-2.5" />
                </span>
              </button>
            ) : isEditingCustomTag ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const trimmed = customTagInput.trim().slice(0, 20)
                  if (trimmed) {
                    onSetCustomTag(trimmed)
                    onSelectTag(trimmed)
                    setIsEditingCustomTag(false)
                    setCustomTagInput("")
                  }
                }}
                className="inline-flex items-center gap-1 rounded-full border border-accent/50 bg-white px-2.5 py-1 min-h-[32px] shadow-xs animate-rise"
              >
                <input
                  type="text"
                  maxLength={20}
                  autoFocus
                  value={customTagInput}
                  onChange={(e) => setCustomTagInput(e.target.value)}
                  placeholder="Custom (max 20)..."
                  className="font-inter w-24 bg-transparent text-[11.5px] text-ink placeholder:text-steel/60 focus:outline-none"
                />
                <span className="text-[10px] tabular-nums text-slate font-mono">
                  {customTagInput.length}/20
                </span>
                <button
                  type="submit"
                  disabled={!customTagInput.trim()}
                  className="grid size-4 place-items-center rounded-full bg-accent text-white disabled:opacity-40"
                >
                  <Check className="size-2.5" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditingCustomTag(false)
                    setCustomTagInput("")
                  }}
                  className="text-steel hover:text-ink"
                >
                  <X className="size-3" />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingCustomTag(true)}
                className="inline-flex items-center gap-1 rounded-full border border-dashed border-steel/40 bg-white px-3 py-1 min-h-[32px] text-[11.5px] text-slate hover:border-ink hover:text-ink transition-colors shadow-2xs"
                title="Add a custom track tag (max 20 characters)"
              >
                <Plus className="size-3" />
                <span>Custom</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-3.5 text-[12.5px]">
          <div className="rounded-xl border border-hairline bg-surface/40 p-3">
            <div className="flex items-center justify-between">
              <div className="pr-2">
                <span className="font-sora text-[12.5px] font-semibold text-ink block">
                  AI Brief Generation
                </span>
                <p className="font-inter text-[11.5px] text-slate mt-0.5 leading-tight">
                  {local.enabled
                    ? "Generate unique briefs on-demand using AI"
                    : "Randomly pick from 100+ curated deterministic briefs"}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={local.enabled}
                onClick={() => update("enabled", !local.enabled)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  local.enabled ? "bg-accent" : "bg-hairline"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    local.enabled ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {local.enabled && (
            <div className="space-y-3 animate-rise">
              <div>
                <label className="font-sora block text-[11px] font-medium text-slate mb-1.5">
                  AI Provider
                </label>
                <div className="grid grid-cols-5 gap-1 rounded-xl bg-surface/70 p-1 border border-hairline">
                  {[
                    {
                      id: "webgpu" as AiProvider,
                      name: "WebGPU",
                      sub: "Local GPU",
                    },
                    {
                      id: "gemini" as AiProvider,
                      name: "Gemini",
                      sub: "Free Tier",
                    },
                    {
                      id: "openai" as AiProvider,
                      name: "OpenAI",
                      sub: "GPT-4o",
                    },
                    {
                      id: "anthropic" as AiProvider,
                      name: "Claude",
                      sub: "Anthropic",
                    },
                    {
                      id: "custom" as AiProvider,
                      name: "Custom",
                      sub: "Ollama",
                    },
                  ].map((p) => {
                    const active = local.provider === p.id
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => update("provider", p.id)}
                        className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-lg text-center transition-all ${
                          active
                            ? "bg-white text-ink shadow-xs ring-1 ring-hairline font-semibold"
                            : "text-slate hover:text-ink hover:bg-white/40"
                        }`}
                      >
                        <span className="font-sora text-[11px] leading-tight truncate w-full">
                          {p.name}
                        </span>
                        <span className="text-[9.5px] text-slate/80 truncate w-full">
                          {p.sub}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {local.provider === "webgpu" && (
                <WebGpuSection
                  webgpuModel={local.webgpuModel}
                  onModelChange={(val) => update("webgpuModel", val)}
                  modelState={modelState}
                  progress={progress}
                  onDownloadLoad={handleDownloadLoad}
                  onEject={handleEject}
                  gpuStatus={gpuStatus}
                  onCheckGpu={checkGpu}
                />
              )}

              {local.provider === "openai" && (
                <OpenAiSection
                  apiKey={local.openaiApiKey || ""}
                  onApiKeyChange={(val) => update("openaiApiKey", val)}
                  model={local.openaiModel}
                  onModelChange={(val) => update("openaiModel", val)}
                  customModel={local.openaiCustomModel || ""}
                  onCustomModelChange={(val) =>
                    update("openaiCustomModel", val)
                  }
                  baseUrl={local.openaiBaseUrl || ""}
                  onBaseUrlChange={(val) => update("openaiBaseUrl", val)}
                  showKey={showKey}
                  onToggleShowKey={() => setShowKey(!showKey)}
                  dynamicModels={dynamicModels.openai}
                  onCheckConnection={() => handleCheckConnection("openai")}
                  status={testStatus.openai}
                />
              )}

              {local.provider === "anthropic" && (
                <AnthropicSection
                  apiKey={local.anthropicApiKey || ""}
                  onApiKeyChange={(val) => update("anthropicApiKey", val)}
                  model={local.anthropicModel}
                  onModelChange={(val) => update("anthropicModel", val)}
                  customModel={local.anthropicCustomModel || ""}
                  onCustomModelChange={(val) =>
                    update("anthropicCustomModel", val)
                  }
                  baseUrl={local.anthropicBaseUrl || ""}
                  onBaseUrlChange={(val) => update("anthropicBaseUrl", val)}
                  showKey={showKey}
                  onToggleShowKey={() => setShowKey(!showKey)}
                  dynamicModels={dynamicModels.anthropic}
                  onCheckConnection={() => handleCheckConnection("anthropic")}
                  status={testStatus.anthropic}
                />
              )}

              {local.provider === "gemini" && (
                <GeminiSection
                  apiKey={local.geminiApiKey || ""}
                  onApiKeyChange={(val) => update("geminiApiKey", val)}
                  model={local.geminiModel}
                  onModelChange={(val) => update("geminiModel", val)}
                  customModel={local.geminiCustomModel || ""}
                  onCustomModelChange={(val) =>
                    update("geminiCustomModel", val)
                  }
                  showKey={showKey}
                  onToggleShowKey={() => setShowKey(!showKey)}
                  dynamicModels={dynamicModels.gemini}
                  onCheckConnection={() => handleCheckConnection("gemini")}
                  status={testStatus.gemini}
                />
              )}

              {local.provider === "custom" && (
                <CustomEndpointSection
                  baseUrl={local.customBaseUrl || ""}
                  onBaseUrlChange={(val) => update("customBaseUrl", val)}
                  model={local.customModel || ""}
                  onModelChange={(val) => update("customModel", val)}
                  apiKey={local.customApiKey || ""}
                  onApiKeyChange={(val) => update("customApiKey", val)}
                  dynamicModels={dynamicModels.custom}
                  onCheckConnection={() => handleCheckConnection("custom")}
                  status={testStatus.custom}
                />
              )}
            </div>
          )}
        </div>

        <div className="border-t border-hairline px-4 py-2.5 bg-surface/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setLocal(DEFAULT_AI_SETTINGS)
                onSave(DEFAULT_AI_SETTINGS)
                onToast("Reset settings to default")
              }}
              className="text-[12px] text-slate hover:text-ink transition-colors px-2 py-1"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setShowDocs(true)}
              className="text-[12px] font-medium text-accent underline underline-offset-2 hover:text-ink transition-colors"
            >
              Documentation & AI Guide
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-ink px-4 py-1.5 text-[12px] font-semibold text-white shadow-xs hover:bg-charcoal active:scale-95 transition-all"
          >
            Done
          </button>
        </div>
      </div>

      <DocumentationModal open={showDocs} onClose={() => setShowDocs(false)} />
    </div>
  )
}
