import type { Brief } from "./generate"

export type AiProvider = "webgpu" | "gemini" | "openai" | "anthropic" | "custom"

export interface AiSettings {
  enabled: boolean
  provider: AiProvider
  webgpuModel: string
  webgpuCustomModel: string
  openaiApiKey: string
  openaiModel: string
  openaiCustomModel: string
  openaiBaseUrl: string
  anthropicApiKey: string
  anthropicModel: string
  anthropicCustomModel: string
  anthropicBaseUrl: string
  geminiApiKey: string
  geminiModel: string
  geminiCustomModel: string
  customBaseUrl: string
  customApiKey: string
  customModel: string
}

export const DEFAULT_AI_SETTINGS: AiSettings = {
  enabled: false,
  provider: "webgpu",
  webgpuModel: "Qwen3.5-0.8B-q4f16_1-MLC",
  webgpuCustomModel: "",
  openaiApiKey: "",
  openaiModel: "gpt-4o-mini",
  openaiCustomModel: "",
  openaiBaseUrl: "https://api.openai.com/v1",
  anthropicApiKey: "",
  anthropicModel: "claude-3-5-haiku-20241022",
  anthropicCustomModel: "",
  anthropicBaseUrl: "https://api.anthropic.com",
  geminiApiKey: "",
  geminiModel: "gemini-2.0-flash",
  geminiCustomModel: "",
  customBaseUrl: "http://localhost:11434/v1",
  customApiKey: "",
  customModel: "qwen2.5:0.5b",
}

export function getActiveModelName(settings: AiSettings): string {
  switch (settings.provider) {
    case "webgpu":
      return settings.webgpuModel.replace(/-MLC.*/i, "")
    case "openai":
      return settings.openaiModel === "custom" &&
        settings.openaiCustomModel.trim()
        ? settings.openaiCustomModel.trim()
        : settings.openaiModel
    case "anthropic":
      return settings.anthropicModel === "custom" &&
        settings.anthropicCustomModel.trim()
        ? settings.anthropicCustomModel.trim()
        : settings.anthropicModel
    case "gemini":
      return settings.geminiModel === "custom" &&
        settings.geminiCustomModel.trim()
        ? settings.geminiCustomModel.trim()
        : settings.geminiModel
    case "custom":
      return settings.customModel.trim() || "qwen2.5:0.5b"
  }
}

const BRIEF_SYSTEM_PROMPT = `You are a Principal Product Designer generating a realistic, focused, single-screen UI/UX design brief.
CRITICAL INSTRUCTION:
- DO NOT OUTPUT THINKING OR REASONING TOKENS.
- DO NOT OUTPUT <think> OR </think> TAGS OR INTERNAL MONOLOGUE.
- GENERATE ONLY THE INSTANT RAW JSON OBJECT WITH NO PREAMBLE AND NO MARKDOWN CODEBLOCKS.

The JSON must follow this exact schema:
{
  "product": {
    "name": "Short catchy product name",
    "industry": "Industry e.g. B2B SaaS, Health, Fintech, Creator Economy",
    "description": "1-2 sentence description of the product",
    "value": "Core value proposition in 1 crisp sentence",
    "segment": "Target user segment e.g. Freelance video editors scaling to small agency",
    "behaviors": "Key behaviors and context of use e.g. Fast-paced, desktop multi-window, keyboard-driven"
  },
  "persona": {
    "name": "Full Name",
    "age": 32,
    "role": "Job Title / Role",
    "goals": "1-2 sentence core goals in this context",
    "pains": "1-2 sentence specific pain points this screen must address",
    "quote": "Short realistic first-person quote about their frustration or need"
  },
  "task": {
    "deliverable": "Specific screen title e.g. The automated invoice matching review modal",
    "platform": "Mobile" or "Web",
    "type": "Core Flow" or "Dashboard" or "Widget" or "Settings" or "Onboarding" or "Analytics",
    "goal": "1-sentence design goal for this specific screen",
    "mustHaves": [
      "Specific UI element 1 with state",
      "Specific UI element 2 with state",
      "Specific UI element 3 with state",
      "Specific UI element 4 with state",
      "Specific UI element 5 with state"
    ],
    "success": "Measurable design success criteria e.g. Sub-3-minute review time with zero ambiguous status flags"
  },
  "constraints": [
    "Design constraint 1 e.g. Strict high-density data layout, light mode only",
    "Design constraint 2 e.g. Must support inline keyboard shortcuts (J/K navigation)"
  ],
  "tone": {
    "adjectives": "3 adjectives e.g. Precise, utilitarian, quiet",
    "note": "1-sentence design directive e.g. Monospace data alignment, neutral grays, zero gratuitous illustrations."
  }
}`

function cleanJson(raw: string): any {
  let text = raw.trim()

  // 1. Strip reasoning and thinking tokens
  text = text
    .replace(/<think[\s\S]*?<\/think>/gi, "")
    .replace(/<thought[\s\S]*?<\/thought>/gi, "")
    .trim()

  // 2. Strip markdown code fences if present
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/)
  if (fenced && fenced[1]) {
    text = fenced[1].trim()
  } else {
    text = text
      .replace(/^```(?:json)?\s*/, "")
      .replace(/\s*```$/, "")
      .trim()
  }

  // 3. Direct parse
  try {
    return JSON.parse(text)
  } catch {
    // Continue to extract
  }

  // 3. Extract outermost { ... }
  const firstBrace = text.indexOf("{")
  const lastBrace = text.lastIndexOf("}")
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    const candidate = text.slice(firstBrace, lastBrace + 1)
    try {
      return JSON.parse(candidate)
    } catch {
      // Continue to repair attempt
    }
  }

  // 4. Lenient repair for potentially truncated JSON
  if (firstBrace !== -1) {
    let candidate = text.slice(firstBrace)
    const quotes = candidate.match(/(?<!\\)"/g)
    if (quotes && quotes.length % 2 !== 0) {
      candidate += '"'
    }
    const stack: string[] = []
    let inString = false
    let escaped = false
    for (let i = 0; i < candidate.length; i++) {
      const char = candidate[i]
      if (escaped) {
        escaped = false
        continue
      }
      if (char === "\\") {
        escaped = true
        continue
      }
      if (char === '"') {
        inString = !inString
        continue
      }
      if (inString) continue
      if (char === "{" || char === "[") {
        stack.push(char)
      } else if (char === "}" && stack[stack.length - 1] === "{") {
        stack.pop()
      } else if (char === "]" && stack[stack.length - 1] === "[") {
        stack.pop()
      }
    }
    while (stack.length > 0) {
      const open = stack.pop()
      if (open === "{") candidate += "}"
      if (open === "[") candidate += "]"
    }
    try {
      return JSON.parse(candidate)
    } catch {
      // Fall through to error
    }
  }

  throw new Error(
    "Could not parse JSON response from AI. Please try generating again.",
  )
}

function normalizeBrief(data: any, roll: number): Brief {
  const today = new Date().toISOString().slice(0, 10)
  return {
    id: `ai-${Date.now()}-${roll}`,
    date: today,
    number: Math.floor(Math.random() * 900) + 100,
    product: {
      name: data.product?.name || "NovaFlow",
      industry: data.product?.industry || "B2B SaaS",
      description:
        data.product?.description || "Real-time collaboration workspace.",
      value:
        data.product?.value ||
        "Zero-friction handoff between product and engineering.",
      segment: data.product?.segment || "Product teams of 10-50 people.",
      behaviors:
        data.product?.behaviors ||
        "High daily frequency, multi-tab desktop usage.",
    },
    persona: {
      name: data.persona?.name || "Alex Mercer",
      age: Number(data.persona?.age) || 31,
      role: data.persona?.role || "Lead Product Designer",
      goals:
        data.persona?.goals ||
        "Ship polished features without waiting for spec clarifications.",
      pains:
        data.persona?.pains ||
        "Specs get lost in slack threads and version drift.",
      quote:
        data.persona?.quote ||
        "I need one screen where status is completely unambiguous.",
    },
    task: {
      deliverable:
        data.task?.deliverable || "The feature sign-off checklist drawer",
      platform: data.task?.platform === "Mobile" ? "Mobile" : "Web",
      type: data.task?.type || "Core Flow",
      goal:
        data.task?.goal ||
        "Enable leads to review diffs and sign off in under 90 seconds.",
      mustHaves:
        Array.isArray(data.task?.mustHaves) && data.task.mustHaves.length > 0
          ? data.task.mustHaves.map(String)
          : [
              "Visual status pills for each sign-off gate",
              "Inline diff viewer with toggleable comments",
              "One-click approve button with optimistic visual feedback",
              "Empty state when all requirements are satisfied",
              "Audit trail of previous reviewers with timestamps",
            ],
      success:
        data.task?.success ||
        "Reduce review bottlenecks by 60% with zero lost comments.",
    },
    constraints:
      Array.isArray(data.constraints) && data.constraints.length > 0
        ? data.constraints.map(String)
        : [
            "Light mode primary, 8px grid system",
            "Must fit on 1440x900 viewport without horizontal scroll",
          ],
    tone: {
      adjectives: data.tone?.adjectives || "Technical, crisp, focused",
      note:
        data.tone?.note ||
        "Neutral gray surface palette with high-contrast active states.",
    },
  }
}

let webllmEngine: any = null
let currentWebllmModel = ""

export type WebGpuModelState = "idle" | "loading" | "loaded" | "error"

export interface WebGpuProgress {
  progress: number // 0 to 1
  text: string
  timeElapsed?: number
}

let modelState: WebGpuModelState = "idle"
let lastProgress: WebGpuProgress = { progress: 0, text: "" }
const listeners = new Set<(
  state: WebGpuModelState,
  progress: WebGpuProgress,
) => void>()

function setModelState(
  state: WebGpuModelState,
  progress?: Partial<WebGpuProgress>,
) {
  modelState = state
  if (progress) {
    lastProgress = { ...lastProgress, ...progress }
  }
  listeners.forEach((fn) => fn(modelState, lastProgress))
}

export function subscribeWebGpu(
  fn: (state: WebGpuModelState, progress: WebGpuProgress) => void,
) {
  listeners.add(fn)
  fn(modelState, lastProgress)
  return () => {
    listeners.delete(fn)
  }
}

export function getWebGpuModelState(): WebGpuModelState {
  return modelState
}

export function getLoadedWebGpuModel(): string {
  return currentWebllmModel
}

export async function isWebGpuSupported(): Promise<boolean> {
  if (typeof navigator === "undefined" || !("gpu" in navigator)) return false
  try {
    const gpu = (navigator as any).gpu
    const adapter = await gpu.requestAdapter()
    return !!adapter
  } catch {
    return false
  }
}

export async function loadWebGpuModel(
  modelName: string,
  onProgress?: (text: string, pct?: number) => void,
): Promise<any> {
  if (webllmEngine && currentWebllmModel === modelName) {
    setModelState("loaded", { progress: 1, text: "Model ready in VRAM" })
    return webllmEngine
  }

  if (webllmEngine) {
    await unloadWebGpuModel()
  }

  const supported = await isWebGpuSupported()
  if (!supported) {
    throw new Error(
      "WebGPU is not supported or not enabled in your browser. Check chrome://flags/#enable-unsafe-webgpu or enable hardware acceleration.",
    )
  }

  setModelState("loading", { progress: 0, text: "Initializing WebGPU..." })
  try {
    const { CreateMLCEngine } = await import("@mlc-ai/web-llm")
    webllmEngine = await CreateMLCEngine(modelName, {
      initProgressCallback: (report) => {
        const pct = Math.round((report.progress || 0) * 100)
        const text = report.text || `Loading model: ${pct}%`
        setModelState("loading", { progress: report.progress || 0, text })
        onProgress?.(text, pct)
      },
    })
    currentWebllmModel = modelName
    setModelState("loaded", { progress: 1, text: "Model active in VRAM" })
    return webllmEngine
  } catch (err: any) {
    setModelState("error", { text: err?.message || "Failed to load model" })
    throw err
  }
}

export async function unloadWebGpuModel(): Promise<void> {
  if (webllmEngine) {
    try {
      await webllmEngine.unload()
    } catch (e) {
      console.warn("Error during WebGPU model unload:", e)
    }
    webllmEngine = null
    currentWebllmModel = ""
  }
  setModelState("idle", { progress: 0, text: "Model offloaded" })
}

export async function generateAiBrief(
  prompt: string,
  settings: AiSettings,
  onProgress?: (text: string, pct?: number) => void,
): Promise<Brief> {
  const userPrompt = prompt.trim()
    ? `Create a unique, high-quality UI/UX challenge brief matching this theme/tag: "${prompt.trim()}". Make sure it is realistic, highly practical, and has tangible must-have states.`
    : "Create a unique, innovative, and realistic UI/UX design challenge brief for a modern product. Choose an engaging industry like B2B SaaS, HealthTech, AI, or Fintech."

  // 1. Local WebGPU (In-browser Qwen)
  if (settings.provider === "webgpu") {
    const modelName = settings.webgpuModel || "Qwen3.5-0.8B-q4f16_1-MLC"
    onProgress?.("Checking WebGPU engine...", 5)
    const engine = await loadWebGpuModel(modelName, onProgress)

    onProgress?.("Generating instant brief on WebGPU...", 95)
    const reply = await engine.chat.completions.create({
      messages: [
        { role: "system", content: BRIEF_SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      enable_thinking: false,
      temperature: 0.7,
      max_tokens: 1600,
    })

    const raw = reply.choices[0]?.message?.content || "{}"
    const data = cleanJson(raw)
    return normalizeBrief(data, Date.now())
  }

  // 2. OpenAI
  if (settings.provider === "openai") {
    if (!settings.openaiApiKey) {
      throw new Error(
        "Please enter your OpenAI API key in the AI Settings panel.",
      )
    }
    const model =
      settings.openaiModel === "custom" && settings.openaiCustomModel.trim()
        ? settings.openaiCustomModel.trim()
        : settings.openaiModel || "gpt-4o-mini"

    onProgress?.(`Generating brief with OpenAI ${model}...`)
    const baseUrl =
      settings.openaiBaseUrl?.replace(/\/$/, "") || "https://api.openai.com/v1"
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${settings.openaiApiKey.trim()}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: BRIEF_SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`OpenAI request failed (${res.status}): ${err}`)
    }

    const json = await res.json()
    const content = json.choices?.[0]?.message?.content || "{}"
    return normalizeBrief(cleanJson(content), Date.now())
  }

  // 3. Anthropic
  if (settings.provider === "anthropic") {
    if (!settings.anthropicApiKey) {
      throw new Error(
        "Please enter your Anthropic API key in the AI Settings panel.",
      )
    }
    const model =
      settings.anthropicModel === "custom" &&
      settings.anthropicCustomModel.trim()
        ? settings.anthropicCustomModel.trim()
        : settings.anthropicModel || "claude-3-5-haiku-20241022"

    onProgress?.(`Generating brief with Claude ${model}...`)
    const baseUrl =
      settings.anthropicBaseUrl?.replace(/\/$/, "") ||
      "https://api.anthropic.com"
    let res: Response
    try {
      res = await fetch(`${baseUrl}/v1/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": settings.anthropicApiKey.trim(),
          "anthropic-version": "2023-06-01",
          "dangerously-allow-browser": "true",
        },
        body: JSON.stringify({
          model,
          max_tokens: 1500,
          system: BRIEF_SYSTEM_PROMPT,
          messages: [{ role: "user", content: userPrompt }],
          temperature: 0.7,
        }),
      })
    } catch (err: any) {
      if (baseUrl.includes("api.anthropic.com")) {
        throw new Error(
          "Direct browser calls to api.anthropic.com are blocked by Anthropic's CORS policy. Configure an edge proxy in Anthropic Base URL (e.g. Cloudflare AI Gateway) or switch to Gemini, OpenAI, or local WebGPU.",
        )
      }
      throw err
    }

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Anthropic request failed (${res.status}): ${err}`)
    }

    const json = await res.json()
    const content = json.content?.[0]?.text || "{}"
    return normalizeBrief(cleanJson(content), Date.now())
  }

  // 4. Google Gemini
  if (settings.provider === "gemini") {
    if (!settings.geminiApiKey) {
      throw new Error(
        "Please enter your Google Gemini API key in the AI Settings panel.",
      )
    }
    const model =
      settings.geminiModel === "custom" && settings.geminiCustomModel.trim()
        ? settings.geminiCustomModel.trim()
        : settings.geminiModel || "gemini-2.0-flash"

    onProgress?.(`Generating brief with Gemini ${model}...`)
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": settings.geminiApiKey.trim(),
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: BRIEF_SYSTEM_PROMPT }],
          },
          contents: [
            {
              parts: [{ text: userPrompt }],
            },
          ],
          generationConfig: {
            response_mime_type: "application/json",
            temperature: 0.7,
          },
        }),
      },
    )

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Gemini request failed (${res.status}): ${err}`)
    }

    const json = await res.json()
    const content = json.candidates?.[0]?.content?.parts?.[0]?.text || "{}"
    return normalizeBrief(cleanJson(content), Date.now())
  }

  // 5. Custom OpenAI-compatible (Ollama, Groq, OpenRouter, etc.)
  if (settings.provider === "custom") {
    const baseUrl =
      settings.customBaseUrl?.replace(/\/$/, "") || "http://localhost:11434/v1"
    onProgress?.("Generating brief with custom endpoint...")
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    }
    if (settings.customApiKey) {
      headers.Authorization = `Bearer ${settings.customApiKey.trim()}`
    }

    const payload = JSON.stringify({
      model: settings.customModel || "qwen2.5:0.5b",
      messages: [
        { role: "system", content: BRIEF_SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
    })

    let res: Response
    try {
      res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers,
        body: payload,
      })
    } catch (err: any) {
      // If direct fetch to localhost:11434 was blocked by CORS, try Vite proxy
      if (
        baseUrl.includes("localhost:11434") ||
        baseUrl.includes("127.0.0.1:11434")
      ) {
        const proxyUrl = baseUrl.replace(
          /https?:\/\/(localhost|127\.0\.0\.1):11434/,
          "/ollama",
        )
        try {
          res = await fetch(`${proxyUrl}/chat/completions`, {
            method: "POST",
            headers,
            body: payload,
          })
        } catch {
          if (
            typeof window !== "undefined" &&
            window.location.protocol === "https:"
          ) {
            throw new Error(
              "Local Ollama (HTTP) cannot be reached from a public HTTPS deployment due to browser Mixed Content security rules. Use WebGPU for 100% private in-browser generation, configure an HTTPS tunnel, or run Dailybrief locally.",
            )
          }
          throw new Error(
            'Ollama blocked by browser CORS. Run: setx OLLAMA_ORIGINS "*" in terminal, restart Ollama, or use "/ollama/v1" endpoint in local dev.',
          )
        }
      } else {
        throw err
      }
    }

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Custom AI request failed (${res.status}): ${err}`)
    }

    const json = await res.json()
    const content = json.choices?.[0]?.message?.content || "{}"
    return normalizeBrief(cleanJson(content), Date.now())
  }

  throw new Error("Unknown AI provider selected.")
}
