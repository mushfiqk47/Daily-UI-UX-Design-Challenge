import { Layers, Monitor, Smartphone } from "lucide-react"
import type { Brief } from "../../lib/generate"

const fBold = "font-sora font-bold"
const fMedium = "font-inter font-medium"

interface TopFloatingBadgeProps {
  brief: Brief
  isRevealed: (step: number) => boolean
  entranceClass: string
}

export function TopFloatingBadge({
  brief,
  isRevealed,
  entranceClass,
}: TopFloatingBadgeProps) {
  const { product, task } = brief

  return (
    <div
      className={`${entranceClass} inline-flex items-center gap-3.5 rounded-2xl border border-hairline bg-white px-5 py-2.5 shadow-xs`}
    >
      <div className="flex items-center gap-2">
        <Layers
          className={`size-4.5 ${
            !isRevealed(1) ? "text-accent/50" : "text-accent"
          }`}
          strokeWidth={2}
        />
        {!isRevealed(1) ? (
          <div className="h-4.5 w-24 rounded-md bg-stone-200/90 animate-pulse" />
        ) : (
          <span
            key={product.name}
            className={`${fBold} text-[17px] tracking-tight text-ink animate-reveal`}
          >
            {product.name}
          </span>
        )}
      </div>

      <div className="h-4 w-px bg-hairline" />

      {!isRevealed(2) ? (
        <div className="flex items-center gap-1.5">
          <div className="size-4 rounded bg-stone-200/80 animate-pulse" />
          <div className="h-3.5 w-12 rounded bg-stone-200/80 animate-pulse" />
        </div>
      ) : (
        <div
          key={task.platform}
          className="flex items-center gap-1.5 animate-reveal"
        >
          {task.platform === "Mobile" ? (
            <Smartphone className="size-4 text-accent" strokeWidth={2} />
          ) : (
            <Monitor className="size-4 text-accent" strokeWidth={2} />
          )}
          <span className={`${fMedium} text-[14px] text-ink`}>
            {task.platform}
          </span>
        </div>
      )}

      <div className="h-4 w-px bg-hairline" />

      {!isRevealed(3) ? (
        <div className="h-3.5 w-18 rounded bg-stone-200/80 animate-pulse" />
      ) : (
        <span
          key={task.type}
          className={`${fMedium} text-[14px] text-ink animate-reveal`}
        >
          {task.type}
        </span>
      )}
    </div>
  )
}
