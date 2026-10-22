import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type { Brief } from "../lib/generate"
import {
  COL_GAP,
  COL_LEFT_W,
  COL_MID_W,
  WORLD_H,
  WORLD_W,
} from "./InfiniteCanvas"
import { TopFloatingBadge } from "./cards/TopFloatingBadge"
import { ProductConstraintsCard } from "./cards/ProductConstraintsCard"
import { TaskCard } from "./cards/TaskCard"
import { PersonaAudienceCard } from "./cards/PersonaAudienceCard"

interface BriefWorldProps {
  brief: Brief
  isGenerating?: boolean
  onComplete?: () => void
}

export function BriefWorld({
  brief,
  isGenerating = false,
  onComplete,
}: BriefWorldProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set())

  // Reset checklist when brief changes
  useEffect(() => {
    setChecked(new Set())
  }, [brief.id])

  const toggleCheck = (index: number) => {
    const next = new Set(checked)
    if (next.has(index)) {
      next.delete(index)
    } else {
      next.add(index)
      if (next.size === brief.task.mustHaves.length) {
        onComplete?.()
      }
    }
    setChecked(next)
  }

  // Track initial mount so entrance animation (animate-rise) runs only once on first page load
  const isInitialRef = useRef(true)
  const rowRef = useRef<HTMLDivElement>(null)
  const prevHeightRef = useRef<number | null>(null)

  // Staggered line-by-line reveal state
  const [revealStep, setRevealStep] = useState<number>(Infinity)
  const wasGeneratingRef = useRef(false)

  useEffect(() => {
    if (isGenerating) {
      wasGeneratingRef.current = true
      setRevealStep(0)
      return
    }

    if (wasGeneratingRef.current) {
      wasGeneratingRef.current = false
      setRevealStep(1)
      let current = 1
      const maxSteps = 27
      const interval = setInterval(() => {
        current += 1
        setRevealStep(current)
        if (current >= maxSteps) {
          clearInterval(interval)
          setRevealStep(Infinity)
        }
      }, 42)

      return () => clearInterval(interval)
    }
  }, [isGenerating, brief.id])

  const isRevealed = (step: number) => !isGenerating && revealStep >= step

  // Fluid height transition: smoothly grows or shrinks without sudden jumps
  useLayoutEffect(() => {
    const el = rowRef.current
    if (!el) return

    if (isInitialRef.current) {
      isInitialRef.current = false
      prevHeightRef.current = el.offsetHeight
      return
    }

    const prevHeight = prevHeightRef.current
    const currentHeight = el.scrollHeight

    if (prevHeight && Math.abs(prevHeight - currentHeight) > 3) {
      el.style.transition = "none"
      el.style.height = `${prevHeight}px`
      el.style.overflow = "hidden"

      void el.offsetHeight // trigger reflow

      el.style.transition = "height 1300ms cubic-bezier(0.16, 1, 0.3, 1)"
      el.style.height = `${currentHeight}px`

      const timer = setTimeout(() => {
        if (el) {
          el.style.height = ""
          el.style.overflow = ""
          el.style.transition = ""
          prevHeightRef.current = el.offsetHeight
        }
      }, 1350)

      prevHeightRef.current = currentHeight
      return () => clearTimeout(timer)
    } else {
      prevHeightRef.current = currentHeight
    }
  }, [isGenerating, brief.id])

  const entranceClass = isInitialRef.current ? "animate-rise" : ""

  return (
    <div className="relative" style={{ width: WORLD_W, height: WORLD_H }}>
      <div
        className="absolute top-0 flex justify-center"
        style={{ left: COL_LEFT_W + COL_GAP, width: COL_MID_W }}
      >
        <TopFloatingBadge
          brief={brief}
          isRevealed={isRevealed}
          entranceClass={entranceClass}
        />
      </div>

      <div
        ref={rowRef}
        className="absolute top-[68px] flex items-stretch"
        style={{ gap: COL_GAP }}
      >
        <ProductConstraintsCard
          brief={brief}
          isRevealed={isRevealed}
          entranceClass={entranceClass}
          isInitial={isInitialRef.current}
        />
        <TaskCard
          brief={brief}
          checked={checked}
          onToggleCheck={toggleCheck}
          isRevealed={isRevealed}
          entranceClass={entranceClass}
          isInitial={isInitialRef.current}
        />
        <PersonaAudienceCard
          brief={brief}
          isRevealed={isRevealed}
          entranceClass={entranceClass}
          isInitial={isInitialRef.current}
        />
      </div>
    </div>
  )
}
