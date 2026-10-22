import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { Maximize, Minus, Plus } from "lucide-react"
import { SprintTimer } from "./SprintTimer"

export const COL_LEFT_W = 400
export const COL_MID_W = 460
export const COL_RIGHT_W = 400
export const COL_GAP = 28
export const WORLD_W = COL_LEFT_W + COL_GAP + COL_MID_W + COL_GAP + COL_RIGHT_W // 1316
export const WORLD_H = 880
export const MIN_K = 0.85
export const MAX_K = 2

export type View = {
  x: number
  y: number
  k: number
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))
const fRegular = "font-inter font-normal"
const fSemi = "font-sora font-semibold"

interface InfiniteCanvasProps {
  children: ReactNode
}

export function InfiniteCanvas({ children }: InfiniteCanvasProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [view, setView] = useState<View>({ x: 0, y: 0, k: 1 })
  const pointers = useRef<Map<number, { x: number y: number }>>(new Map())
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

      <div className="fixed bottom-20 right-4 z-40 sm:bottom-6 sm:right-6 flex items-center gap-2">
        <SprintTimer />
        <div
          className={`${fSemi} flex h-10.5 items-center gap-0.5 rounded-xl border border-hairline bg-white px-1.5 text-[13px] text-ink shadow-xs`}
        >
          <button
            aria-label="Zoom out"
            onClick={() => zoomCenter(1 / 1.2)}
            disabled={view.k <= MIN_K + 0.001}
            className="grid size-8 place-items-center rounded-lg hover:bg-surface active:bg-hairline disabled:opacity-35 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Minus className="size-4" />
          </button>
          <span className="w-12 text-center tabular-nums font-medium text-[13px]">
            {Math.round(view.k * 100)}%
          </span>
          <button
            aria-label="Zoom in"
            onClick={() => zoomCenter(1.2)}
            disabled={view.k >= MAX_K - 0.001}
            className="grid size-8 place-items-center rounded-lg hover:bg-surface active:bg-hairline disabled:opacity-35 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Plus className="size-4" />
          </button>
          <button
            aria-label="Fit to screen"
            title="Fit to screen"
            onClick={fit}
            className="grid size-8 place-items-center rounded-lg hover:bg-surface active:bg-hairline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Maximize className="size-4" />
          </button>
        </div>
      </div>

      <p
        className={`${fRegular} pointer-events-none fixed bottom-7 left-6 z-40 hidden text-[13px] text-slate md:block`}
      >
        Drag to pan · Ctrl / ⌘ + scroll to zoom
      </p>
    </>
  )
}
