import { useEffect, useState } from "react"
import {
  Bookmark,
  Check,
  Copy,
  Download,
  Flame,
  Loader2,
  Shuffle,
  SlidersHorizontal,
} from "lucide-react"
import { generateBrief, toMarkdown, todayISO, type Brief } from "./lib/generate"
import { DEFAULT_AI_SETTINGS, generateAiBrief, type AiSettings } from "./lib/ai"
import { SettingsDrawer } from "./components/SettingsDrawer"
import { InfiniteCanvas } from "./components/InfiniteCanvas"
import { BriefWorld } from "./components/BriefWorld"
import { SavedPanel } from "./components/SavedPanel"
import { XLogo } from "./components/XLogo"
import { BrandLogo } from "./components/BrandLogo"

const fRegular = "font-inter font-normal"
const fMedium = "font-inter font-medium"
const fSemi = "font-sora font-semibold"
const fBold = "font-sora font-bold"

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fall through to textarea fallback
    }
  }

  try {
    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.style.position = "fixed"
    textarea.style.top = "0"
    textarea.style.left = "0"
    textarea.style.width = "2em"
    textarea.style.height = "2em"
    textarea.style.padding = "0"
    textarea.style.border = "none"
    textarea.style.outline = "none"
    textarea.style.boxShadow = "none"
    textarea.style.background = "transparent"
    textarea.style.opacity = "0"
    textarea.setAttribute("readonly", "")
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    const success = document.execCommand("copy")
    document.body.removeChild(textarea)
    return success
  } catch {
    return false
  }
}

function calculateStreak(completedDates: string[]): number {
  if (!completedDates || completedDates.length === 0) return 1
  const set = new Set(completedDates)
  let count = 0
  const check = new Date()
  const todayStr = check.toISOString().slice(0, 10)
  if (!set.has(todayStr)) {
    check.setDate(check.getDate() - 1)
  }
  while (true) {
    const iso = check.toISOString().slice(0, 10)
    if (set.has(iso)) {
      count++
      check.setDate(check.getDate() - 1)
    } else {
      break
    }
  }
  return Math.max(1, count)
}

function usePersistent<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) as T : initial
    } catch {
      return initial
    }
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue] as const
}

export default function App() {
  const [initialDate] = useState(() => {
    try {
      const p = new URLSearchParams(window.location.search)
      return p.get("date") || todayISO()
    } catch {
      return todayISO()
    }
  })
  const [roll, setRoll] = useState(() => {
    try {
      const p = new URLSearchParams(window.location.search)
      const r = p.get("roll")
      return r !== null ? parseInt(r, 10) || 0 : 0
    } catch {
      return 0
    }
  })
  const [saved, setSaved] = usePersistent<Brief[]>("db.saved", [])
  const [done] = usePersistent<Record<string, string>>("db.done", {})
  const [opened, setOpened] = useState<Brief | null>(null)
  const [showSaved, setShowSaved] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [copiedShare, setCopiedShare] = useState(false)

  const [aiSettings, setAiSettings] = usePersistent<AiSettings>(
    "db.ai_settings",
    DEFAULT_AI_SETTINGS,
  )
  const [showSettings, setShowSettings] = useState(false)
  const [activeTag, setActiveTag] = useState("")
  const [customTag, setCustomTag] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [completedDays, setCompletedDays] = usePersistent<string[]>(
    "db.completed_days",
    [todayISO()],
  )

  const streak = calculateStreak(completedDays)

  const brief =
    opened ??
    generateBrief(initialDate, roll, { platform: "Any", type: "Any" })!
  const isSaved = saved.some((s) => s.id === brief.id)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(t)
  }, [toast])

  const handleGenerate = async () => {
    const selectedTag = activeTag || customTag || "All"

    if (aiSettings.enabled) {
      setIsGenerating(true)
      try {
        setToast(
          `Generating ${
            selectedTag === "All" ? "" : selectedTag + " "
          }brief with AI...`,
        )
        const aiBrief = await generateAiBrief(
          selectedTag,
          aiSettings,
          (statusText) => {
            setToast(statusText)
          },
        )
        setOpened(aiBrief)
        setToast("AI Brief generated successfully!")
      } catch (err: any) {
        setToast(err?.message || "AI generation failed. Check Settings.")
      } finally {
        setIsGenerating(false)
      }
    } else {
      setIsGenerating(true)
      setOpened(null)
      setTimeout(() => {
        setRoll((r) => r + 1)
        setIsGenerating(false)
        if (selectedTag !== "All") {
          setToast(`Generated ${selectedTag} brief`)
        }
      }, 350)
    }
  }

  const markDayCompleted = () => {
    const curToday = todayISO()
    if (!completedDays.includes(curToday)) {
      setCompletedDays([...completedDays, curToday])
      setToast("Day completed! Streak updated 🔥")
    }
  }

  const shareOnX = async () => {
    let shareUrl = window.location.href
    try {
      const url = new URL(window.location.href)
      url.searchParams.set("date", brief.date)
      url.searchParams.set("roll", String(roll))
      shareUrl = url.toString()
    } catch {
      // fallback to current location
    }

    await copyToClipboard(shareUrl)
    setCopiedShare(true)
    setTimeout(() => setCopiedShare(false), 2000)
    setToast("Link copied to clipboard! Opening X...")

    const tweetText = encodeURIComponent(
      `Practicing UI/UX on #Dailybrief No. ${brief.number}:\n\n` +
        `🎨 ${brief.task.deliverable} (${brief.task.platform})\n` +
        `🚀 Product: ${brief.product.name}\n\n` +
        `Sharpening design skills daily! @Dailybrief`,
    )
    window.open(
      `https://x.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
    )
  }

  const copy = async () => {
    const text = toMarkdown(brief)
    const success = await copyToClipboard(text)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
      setToast("Brief copied as Markdown")
    } else {
      setToast("Clipboard blocked, try Download instead")
    }
  }

  const download = () => {
    const blob = new Blob([toMarkdown(brief)], { type: "text/markdown" })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = `brief-${brief.number}-${brief.product.name.toLowerCase().replace(/\s+/g, "-")}.md`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const toggleSave = () => {
    setSaved(
      isSaved ? saved.filter((s) => s.id !== brief.id) : [brief, ...saved],
    )
    setToast(isSaved ? "Removed from saved" : "Saved for later")
  }

  return (
    <div className="relative h-full w-full bg-canvas-bg">
      <InfiniteCanvas>
        <BriefWorld
          brief={brief}
          isGenerating={isGenerating}
          onComplete={markDayCompleted}
        />
      </InfiniteCanvas>

      <div className="pointer-events-none fixed left-4 top-4 z-40 sm:left-6 sm:top-6 flex items-center gap-2 sm:gap-3">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <BrandLogo className="size-6" />
          <span
            className={`${fBold} text-[19px] tracking-[-0.5px] text-ink select-none`}
          >
            Dailybrief
          </span>
        </div>
        <div
          title="Daily UI/UX habit streak"
          className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3 py-1 text-[12px] shadow-xs"
        >
          <Flame className="size-3.5 text-amber-500 fill-amber-500" />
          <span className={`${fSemi} text-ink tabular-nums`}>
            {streak} {streak === 1 ? "day" : "days"} streak
          </span>
        </div>
        <a
          href="https://x.com/mushfiqk47"
          target="_blank"
          rel="noopener noreferrer"
          title="Give feedback to @mushfiqk47 on 𝕏"
          aria-label="Give feedback on X to @mushfiqk47"
          className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-[#18181b] hover:bg-black px-2.5 py-1 text-[12px] text-white shadow-xs transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <XLogo className="size-3 text-white" />
          <span className={`${fMedium} text-stone-200 tracking-tight`}>
            @mushfiqk47
          </span>
        </a>
      </div>

      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6 flex items-center gap-2">
        <button
          aria-label="Saved briefs"
          title="Saved briefs"
          onClick={() => setShowSaved(true)}
          className="relative grid size-11 place-items-center rounded-xl border border-hairline bg-white text-ink shadow-xs transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Bookmark
            className={`size-4 ${saved.length > 0 ? "fill-ink" : ""}`}
          />
          {saved.length > 0 && (
            <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-white">
              {saved.length}
            </span>
          )}
        </button>

        <button
          aria-label="Share on X"
          title={
            copiedShare ? "Link copied!" : "Share on X (copies project link)"
          }
          onClick={shareOnX}
          className="grid size-11 place-items-center rounded-xl border border-hairline bg-white text-ink shadow-xs transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {copiedShare ? (
            <Check className="size-4 text-accent" />
          ) : (
            <XLogo className="size-3.5" />
          )}
        </button>

        <button
          aria-label="Copy as Markdown"
          title={copied ? "Copied!" : "Copy as Markdown"}
          onClick={copy}
          className="grid size-11 place-items-center rounded-xl border border-hairline bg-white text-ink shadow-xs transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {copied ? (
            <Check className="size-4 text-accent" />
          ) : (
            <Copy className="size-4" />
          )}
        </button>

        <button
          aria-label="Download .md"
          title="Download .md"
          onClick={download}
          className="grid size-11 place-items-center rounded-xl border border-hairline bg-white text-ink shadow-xs transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Download className="size-4" />
        </button>

        <button
          aria-label="Generator & AI Settings"
          title="Generator & AI Settings"
          onClick={() => setShowSettings(true)}
          className={`relative grid size-11 place-items-center rounded-xl border border-hairline bg-white text-ink shadow-xs transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            aiSettings.enabled ? "ring-2 ring-accent" : ""
          }`}
        >
          <SlidersHorizontal className="size-4" />
          {aiSettings.enabled && (
            <span className="absolute top-2 right-2 size-2 rounded-full bg-accent" />
          )}
        </button>
      </div>

      <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 flex items-center pointer-events-auto animate-rise">
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="group flex h-11.5 items-center justify-center gap-2.5 rounded-full bg-[#18181b] hover:bg-black px-6 text-white shadow-xl shadow-black/20 transition-all active:scale-[0.98] disabled:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {isGenerating ? (
            <Loader2 className="size-4.5 animate-spin text-white" />
          ) : (
            <Shuffle className="size-4.5 text-white" strokeWidth={2} />
          )}
          <span
            className={`${fMedium} whitespace-nowrap text-[14.5px] font-medium text-white tracking-tight`}
          >
            {isGenerating ? "Generating..." : "Generate brief"}
          </span>
        </button>
      </div>

      <SettingsDrawer
        open={showSettings}
        onClose={() => setShowSettings(false)}
        settings={aiSettings}
        onSave={setAiSettings}
        onToast={(msg) => setToast(msg)}
        activeTag={activeTag}
        onSelectTag={(tag) => setActiveTag(tag)}
        customTag={customTag}
        onSetCustomTag={(tag) => setCustomTag(tag)}
      />

      {showSaved && (
        <SavedPanel
          saved={saved}
          done={done}
          isCurrentSaved={isSaved}
          onToggleSaveCurrent={toggleSave}
          onClose={() => setShowSaved(false)}
          onOpen={(b) => {
            setOpened(b)
            setShowSaved(false)
          }}
          onRemove={(id) => setSaved(saved.filter((s) => s.id !== id))}
        />
      )}

      <div
        role="status"
        aria-live="polite"
        className={`${fMedium} fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-primary px-5 py-2.5 text-[14px] text-white shadow-md transition-all duration-200 ${
          toast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {toast}
      </div>
    </div>
  )
}
