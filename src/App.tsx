import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import {
  Bookmark,
  Check,
  Copy,
  Download,
  Layers,
  ListTodo,
  Maximize,
  Minus,
  Monitor,
  Package,
  Palette,
  Plus,
  RotateCw,
  Smartphone,
  Sparkles,
  Target,
  User,
  X,
} from "lucide-react"
import { generateBrief, toMarkdown, todayISO, type Brief } from "./lib/generate"

const fRegular = "font-inter font-normal"
const fMedium = "font-inter font-medium"
const fLabel = "font-sora font-medium"
const fSemi = "font-sora font-semibold"
const fBold = "font-sora font-bold"

// 3-Column Canvas Layout Dimensions
const COL_LEFT_W = 400
const COL_MID_W = 460
const COL_RIGHT_W = 400
const COL_GAP = 28
const WORLD_W = COL_LEFT_W + COL_GAP + COL_MID_W + COL_GAP + COL_RIGHT_W // 1316
const WORLD_H = 880
const MIN_K = 0.85
const MAX_K = 2

type View = { x: number y: number k: number }
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

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
  const today = todayISO()
  const [roll, setRoll] = useState(0)
  const [saved, setSaved] = usePersistent<Brief[]>("db.saved", [])
  const [done, setDone] = usePersistent<Record<string, string>>("db.done", {})
  const [opened, setOpened] = useState<Brief | null>(null)
  const [showSaved, setShowSaved] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const brief =
    opened ?? generateBrief(today, roll, { platform: "Any", type: "Any" })!
  const isSaved = saved.some((s) => s.id === brief.id)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const generate = () => {
    setOpened(null)
    setRoll((r) => r + 1)
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
        <BriefWorld key={brief.id} brief={brief} />
      </InfiniteCanvas>

      {/* Top-left: Logo */}
      <div className="pointer-events-none fixed left-4 top-4 z-40 sm:left-6 sm:top-6 flex items-center gap-3">
        <div className="pointer-events-auto flex items-center gap-2.5">
          <Layers className="size-6 text-ink" />
          <span
            className={`${fBold} text-[19px] tracking-[-0.5px] text-ink select-none`}
          >
            Dailybrief
          </span>
        </div>
      </div>

      {/* Top-right: Copy & Download icon buttons */}
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6 flex items-center gap-2">
        <button
          aria-label="Copy as Markdown"
          title={copied ? "Copied!" : "Copy as Markdown"}
          onClick={copy}
          className="grid size-11 place-items-center rounded-full border border-hairline bg-white text-ink shadow-sm transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
          className="grid size-11 place-items-center rounded-full border border-hairline bg-white text-ink shadow-sm transition-all hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Download className="size-4" />
        </button>
      </div>

      {/* Bottom-center: Generate brief */}
      <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
        <button
          onClick={generate}
          className="group flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-white shadow-md transition-all hover:bg-charcoal active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <RotateCw className="size-4 transition-transform duration-500 group-hover:rotate-180" />
          <span className={`${fSemi} whitespace-nowrap text-[14px]`}>
            Generate brief
          </span>
        </button>
      </div>

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

      {/* Floating Toast Notification */}
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

/* ---------------- Canvas ---------------- */

function InfiniteCanvas({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [view, setView] = useState<View>({ x: 0, y: 0, k: 1 })
  const pointers = useRef(new Map<number, { x: number y: number }>())
  const pinch = useRef<{ dist: number k: number } | null>(null)

  const centerAt = useCallback((targetK: number) => {
    const el = ref.current
    if (!el) return
    const { width, height } = el.getBoundingClientRect()
    setView({
      k: targetK,
      x: (width - WORLD_W * targetK) / 2,
      y: (height - WORLD_H * targetK) / 2,
    })
  }, [])

  const fit = useCallback(() => {
    const el = ref.current
    if (!el) return
    const { width, height } = el.getBoundingClientRect()
    const pad = 64
    const k = clamp(
      Math.min((width - pad * 2) / WORLD_W, (height - 120 - pad) / WORLD_H),
      MIN_K,
      1,
    )
    setView({
      k,
      x: (width - WORLD_W * k) / 2,
      y: (height - WORLD_H * k) / 2,
    })
  }, [])

  useLayoutEffect(() => {
    centerAt(1)
  }, [centerAt])

  const zoomAt = useCallback((cx: number, cy: number, factor: number) => {
    setView((v) => {
      const k = clamp(v.k * factor, MIN_K, MAX_K)
      const r = k / v.k
      return { k, x: cx - (cx - v.x) * r, y: cy - (cy - v.y) * r }
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      if (e.ctrlKey || e.metaKey) {
        let dy = e.deltaY
        if (e.deltaMode === 1) dy *= 16
        else if (e.deltaMode === 2) dy *= 100
        const clampedDy = Math.max(-120, Math.min(120, dy))
        zoomAt(
          e.clientX - rect.left,
          e.clientY - rect.top,
          Math.exp(-clampedDy * 0.0012),
        )
      } else {
        setView((v) => ({ ...v, x: v.x - e.deltaX, y: v.y - e.deltaY }))
      }
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [zoomAt])

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button, a, input")) return
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      pinch.current = { dist: Math.hypot(a.x - b.x, a.y - b.y), k: view.k }
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const prev = pointers.current.get(e.pointerId)
    if (!prev) return
    const next = { x: e.clientX, y: e.clientY }
    pointers.current.set(e.pointerId, next)
    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()]
      const rect = ref.current!.getBoundingClientRect()
      const target = clamp(
        (pinch.current.k * Math.hypot(a.x - b.x, a.y - b.y)) /
          pinch.current.dist,
        MIN_K,
        MAX_K,
      )
      zoomAt(
        (a.x + b.x) / 2 - rect.left,
        (a.y + b.y) / 2 - rect.top,
        target / view.k,
      )
    } else {
      setView((v) => ({
        ...v,
        x: v.x + next.x - prev.x,
        y: v.y + next.y - prev.y,
      }))
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) pinch.current = null
  }

  const zoomCenter = (factor: number) => {
    const rect = ref.current!.getBoundingClientRect()
    zoomAt(rect.width / 2, rect.height / 2, factor)
  }

  return (
    <>
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="absolute inset-0 cursor-grab touch-none select-none overflow-hidden bg-canvas-bg active:cursor-grabbing"
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: WORLD_W,
            height: WORLD_H,
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.k})`,
          }}
        >
          {children}
        </div>
      </div>

      {/* Bottom-right: Zoom controls */}
      <div
        className={`${fSemi} fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 flex items-center gap-1 rounded-full border border-hairline bg-white px-2 py-1 text-[13px] text-ink shadow-sm`}
      >
        <button
          aria-label="Zoom out"
          onClick={() => zoomCenter(1 / 1.2)}
          disabled={view.k <= MIN_K + 0.001}
          className="grid size-8 place-items-center rounded-full hover:bg-surface active:bg-hairline disabled:opacity-35 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-12 text-center tabular-nums font-medium">
          {Math.round(view.k * 100)}%
        </span>
        <button
          aria-label="Zoom in"
          onClick={() => zoomCenter(1.2)}
          disabled={view.k >= MAX_K - 0.001}
          className="grid size-8 place-items-center rounded-full hover:bg-surface active:bg-hairline disabled:opacity-35 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Plus className="size-4" />
        </button>
        <button
          aria-label="Fit to screen"
          title="Fit to screen"
          onClick={fit}
          className="grid size-8 place-items-center rounded-full hover:bg-surface active:bg-hairline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Maximize className="size-4" />
        </button>
      </div>

      {/* Bottom-left: Hint */}
      <p
        className={`${fRegular} pointer-events-none fixed bottom-7 left-6 z-40 hidden text-[13px] text-steel md:block`}
      >
        Drag to pan · Ctrl / ⌘ + scroll to zoom
      </p>
    </>
  )
}

/* ---------------- 3-Column Brief World ---------------- */

function BriefWorld({ brief }: { brief: Brief }) {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const { product, persona, task } = brief

  return (
    <div className="relative" style={{ width: WORLD_W, height: WORLD_H }}>
      {/* Floating Center Badge: Product Name + Platform + Type */}
      <div
        className="absolute top-0 flex justify-center"
        style={{ left: COL_LEFT_W + COL_GAP, width: COL_MID_W }}
      >
        <div className="animate-rise inline-flex items-center gap-2.5 rounded-[16px] border border-hairline/80 bg-white px-6 py-3 shadow-sm">
          <Sparkles className="size-5 text-accent" />
          <span className={`${fBold} text-[22px] tracking-tight text-ink`}>
            {product.name}
          </span>
          <span
            className={`${fMedium} flex items-center gap-1.5 text-[14px] text-ink`}
          >
            {task.platform === "Mobile" ? (
              <Smartphone className="size-4 text-accent" />
            ) : (
              <Monitor className="size-4 text-accent" />
            )}
            <span>{task.platform}</span>
          </span>
          <span className={`${fMedium} text-[14px] text-ink`}>{task.type}</span>
        </div>
      </div>

      {/* 3 Main Columns Container */}
      <div
        className="absolute top-[68px] flex items-stretch"
        style={{ gap: COL_GAP }}
      >
        {/* ================= LEFT COLUMN: Product & Constraints ================= */}
        <div
          className="animate-rise flex flex-col rounded-[24px] border border-hairline bg-white p-7"
          style={{ width: COL_LEFT_W, animationDelay: "50ms" }}
        >
          {/* Section 1: Product */}
          <div className="flex items-center gap-2 mb-4">
            <Package className="size-4 text-accent" />
            <h3 className={`${fBold} text-[15px] text-accent`}>Product</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>Name</div>
              <div className={`${fRegular} text-[13px] text-charcoal mt-0.5`}>
                {product.name}
              </div>
            </div>
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>
                Description
              </div>
              <div
                className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
              >
                {product.description}
              </div>
            </div>
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>
                Core value proposition
              </div>
              <div
                className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
              >
                {product.value}
              </div>
            </div>
          </div>

          <hr className="my-6 border-hairline" />

          {/* Section 2: Constraints & Style Direction */}
          <div className="flex items-center gap-2 mb-4">
            <Palette className="size-4 text-accent" />
            <h3 className={`${fBold} text-[15px] text-accent`}>
              Constraints & Style Direction
            </h3>
          </div>
          <div>
            <div className={`${fLabel} text-[11px] text-steel mb-2`}>
              Constraints
            </div>
            <ul className="space-y-1.5">
              {brief.constraints.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-[13px] leading-[19px] text-ink select-none">
                    •
                  </span>
                  <span
                    className={`${fRegular} text-[13px] leading-[19px] text-charcoal`}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <div className={`${fLabel} text-[11px] text-steel mb-2`}>
              Visual tone
            </div>
            <div className="rounded-[12px] bg-surface p-4">
              <p className={`${fBold} text-[14px] leading-[20px] text-accent`}>
                {brief.tone.adjectives}
              </p>
              <p
                className={`${fRegular} text-[12px] leading-[18px] text-slate mt-0.5`}
              >
                {brief.tone.note}
              </p>
            </div>
          </div>
        </div>

        {/* ================= MIDDLE COLUMN: Task Card ================= */}
        <div
          className="animate-rise flex flex-col rounded-[24px] border border-hairline bg-white p-7"
          style={{ width: COL_MID_W, animationDelay: "100ms" }}
        >
          <div className="mb-4">
            <span
              className={`${fSemi} inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-[12px] font-semibold text-white shadow-xs`}
            >
              <ListTodo className="size-3.5 text-white" />
              Task
            </span>
          </div>

          <h2
            className={`${fBold} text-[18px] leading-[25px] text-accent mb-5`}
          >
            {task.deliverable}
          </h2>

          <div className="space-y-4 mb-5">
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>Platform</div>
              <div className={`${fRegular} text-[13px] text-charcoal mt-0.5`}>
                {task.platform} (primary)
              </div>
            </div>
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>Goal</div>
              <div className={`${fRegular} text-[13px] text-charcoal mt-0.5`}>
                {task.goal}
              </div>
            </div>
          </div>

          <div>
            <div
              className={`${fLabel} flex justify-between items-center text-[11px] text-[#3B3D40] mb-2`}
            >
              <span>Must-have elements and states</span>
              <span className="tabular-nums font-normal text-[#6B7079]">
                {checked.size}/{task.mustHaves.length}
              </span>
            </div>
            <div className="overflow-hidden rounded-[14px] border border-[#E1DEDE] divide-y divide-[#E1DEDE] bg-white">
              {task.mustHaves.map((m, i) => {
                const on = checked.has(i)
                return (
                  <button
                    key={m}
                    aria-pressed={on}
                    onClick={() => {
                      const next = new Set(checked)
                      if (on) next.delete(i)
                      else next.add(i)
                      setChecked(next)
                    }}
                    className="flex w-full items-center gap-[14px] px-[18px] py-[14px] text-left active:bg-surface/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span
                      className={`grid size-[19px] shrink-0 place-items-center rounded-[5px] transition-all ${
                        on
                          ? "border border-[#E0307E] bg-[#E0307E]"
                          : "border border-[#BDBDBD] bg-[#E1DEDE] shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.14)]"
                      }`}
                    >
                      {on && (
                        <Check
                          className="size-3.5 text-white"
                          strokeWidth={2.8}
                        />
                      )}
                    </span>
                    <span
                      className={`${fRegular} text-[13.5px] leading-[19px] transition-colors ${
                        on ? "text-[#5C626C] line-through" : "text-[#18181B]"
                      }`}
                    >
                      {m}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-5">
            <div className={`${fLabel} text-[11px] text-steel`}>
              Success criteria
            </div>
            <div
              className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
            >
              {task.success}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: User Persona & Target Audience ================= */}
        <div
          className="animate-rise flex flex-col rounded-[24px] border border-hairline bg-white p-7"
          style={{ width: COL_RIGHT_W, animationDelay: "150ms" }}
        >
          {/* Section 1: User Persona */}
          <div className="flex items-center gap-2 mb-4">
            <User className="size-4 text-accent" />
            <h3 className={`${fBold} text-[15px] text-accent`}>User Persona</h3>
          </div>
          <div className="mb-4">
            <div className={`${fBold} text-[14px] leading-[20px] text-ink`}>
              {persona.name}
            </div>
            <div
              className={`${fRegular} text-[12px] leading-[18px] text-steel mt-0.5`}
            >
              {persona.age}, {persona.role}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>Goals</div>
              <div
                className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
              >
                {persona.goals}
              </div>
            </div>
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>
                Pain points this screen must address
              </div>
              <div
                className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
              >
                {persona.pains}
              </div>
            </div>
          </div>

          <div className="rounded-[12px] bg-surface p-4 mt-4">
            <p className={`${fMedium} text-[14px] leading-[20px] text-ink`}>
              “{persona.quote}”
            </p>
          </div>

          <hr className="my-6 border-hairline" />

          {/* Section 2: Target Audience */}
          <div className="flex items-center gap-2 mb-4">
            <Target className="size-4 text-accent" />
            <h3 className={`${fBold} text-[15px] text-accent`}>
              Target Audience
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>
                Primary segment
              </div>
              <div
                className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
              >
                {product.segment}
              </div>
            </div>
            <div>
              <div className={`${fLabel} text-[11px] text-steel`}>
                Key behaviors and context of use
              </div>
              <div
                className={`${fRegular} text-[13px] leading-[19px] text-charcoal mt-0.5`}
              >
                {product.behaviors}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Saved panel ---------------- */

function SavedPanel({
  saved,
  done,
  isCurrentSaved,
  onToggleSaveCurrent,
  onClose,
  onOpen,
  onRemove,
}: {
  saved: Brief[]
  done: Record<string, string>
  isCurrentSaved: boolean
  onToggleSaveCurrent: () => void
  onClose: () => void
  onOpen: (b: Brief) => void
  onRemove: (id: string) => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex justify-start"
      role="dialog"
      aria-modal="true"
      aria-label="Saved briefs"
    >
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />
      <div className="animate-rise relative flex h-full w-full max-w-md flex-col border-r border-hairline bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className={`${fSemi} text-[22px] leading-[28px] text-ink`}>
            Saved briefs
          </h2>
          <button
            aria-label="Close saved briefs"
            onClick={onClose}
            className="grid size-9 place-items-center rounded-full border border-hairline active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="p-4 border-b border-hairline bg-surface/50">
          <button
            onClick={onToggleSaveCurrent}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-hairline py-2.5 px-4 text-[13px] font-medium text-ink shadow-sm active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
          >
            <Bookmark
              className={`size-4 ${
                isCurrentSaved ? "fill-ink text-ink" : "text-ink"
              }`}
            />
            {isCurrentSaved
              ? "Remove current brief from saved"
              : "Save current brief"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {saved.length === 0 ? (
            <div className="px-4 py-16 text-center">
              <p className={`${fSemi} text-[18px] text-ink`}>
                Nothing saved yet
              </p>
              <p className={`${fRegular} mt-1 text-[13px] text-steel`}>
                Save a brief you want to come back to on a slower day.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {saved.map((b) => (
                <li
                  key={b.id}
                  className="relative rounded-[12px] border border-hairline bg-white transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => onOpen(b)}
                    className="block w-full p-4 pr-12 text-left rounded-[12px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span
                      className={`${fRegular} flex items-center gap-2 text-[12px] text-steel`}
                    >
                      Nº {b.number} · {b.task.platform} · {b.task.type}
                      {b.id in done && (
                        <span
                          className={`${fSemi} rounded-full bg-success-bg px-2 py-0.5 text-[11px] text-success-text`}
                        >
                          Done
                        </span>
                      )}
                    </span>
                    <span
                      className={`${fSemi} mt-0.5 block text-[15px] text-ink`}
                    >
                      {b.product.name}
                    </span>
                    <span
                      className={`${fRegular} mt-0.5 line-clamp-2 block text-[13px] text-steel`}
                    >
                      {b.task.deliverable}
                    </span>
                  </button>
                  <button
                    onClick={() => onRemove(b.id)}
                    aria-label={`Remove ${b.product.name}`}
                    className="absolute right-3 top-3 grid size-8 place-items-center rounded-full text-stone hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <X className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
